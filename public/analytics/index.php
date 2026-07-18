<?php
declare(strict_types=1);

// Cenix first-party analytics. Stores anonymous daily session aggregates outside
// /site so GitHub Actions deployments cannot remove historical data.
header('X-Content-Type-Options: nosniff');
header('Referrer-Policy: no-referrer');

$allowedOrigins = [
    'https://imcenix.com',
    'https://www.imcenix.com',
    'https://food.imcenix.com',
    'https://yum.imcenix.com',
    'https://game.imcenix.com',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '' && in_array($origin, $allowedOrigins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
    http_response_code(204);
    exit;
}

const SITES = ['profile', 'food', 'game'];
$dataDir = dirname(__DIR__, 2) . '/.cenix-analytics-data';
if (!is_dir($dataDir) && !mkdir($dataDir, 0750, true) && !is_dir($dataDir)) {
    respond(['error' => 'Analytics storage is unavailable'], 503);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'POST') {
    collect($dataDir, $allowedOrigins);
}

$days = max(1, min(365, (int)($_GET['days'] ?? 30)));
respond(buildStats($dataDir, $days));

function collect(string $dataDir, array $allowedOrigins): void
{
    global $origin;
    if ($origin !== '' && !in_array($origin, $allowedOrigins, true)) {
        respond(['error' => 'Origin not allowed'], 403);
    }
    $raw = file_get_contents('php://input');
    $body = json_decode($raw ?: '', true);
    if (!is_array($body)) respond(['error' => 'Invalid payload'], 400);

    $site = cleanToken($body['site'] ?? '', 16);
    $sessionId = cleanToken($body['sessionId'] ?? '', 80);
    $visitorId = cleanToken($body['visitorId'] ?? '', 80);
    if (!in_array($site, SITES, true) || $sessionId === '' || $visitorId === '') {
        respond(['error' => 'Invalid identifiers'], 400);
    }

    $path = cleanPath($body['path'] ?? '/');
    $title = cleanText($body['title'] ?? '', 160);
    $referrer = cleanReferrer($body['referrer'] ?? '');
    $activeSeconds = max(0, min(86400, (int)($body['activeSeconds'] ?? 0)));
    $event = ($body['event'] ?? '') === 'pageview' ? 'pageview' : 'heartbeat';
    $now = time();
    $day = gmdate('Y-m-d', $now);
    $file = $dataDir . '/' . $day . '.json';

    withLockedJson($file, function (array &$data) use ($site, $sessionId, $visitorId, $path, $title, $referrer, $activeSeconds, $event, $now): void {
        if (!isset($data['sessions']) || !is_array($data['sessions'])) $data['sessions'] = [];
        $key = $site . ':' . $sessionId;
        $session = $data['sessions'][$key] ?? [
            'site' => $site, 'visitorId' => $visitorId, 'startedAt' => $now,
            'lastSeenAt' => $now, 'activeSeconds' => 0, 'pageviews' => 0,
            'entryPath' => $path, 'referrer' => $referrer, 'pages' => [],
        ];
        $session['lastSeenAt'] = $now;
        $session['activeSeconds'] = max((int)($session['activeSeconds'] ?? 0), $activeSeconds);
        if ($event === 'pageview') {
            $session['pageviews'] = (int)($session['pageviews'] ?? 0) + 1;
            if (!isset($session['pages'][$path])) $session['pages'][$path] = ['views' => 0, 'title' => $title];
            $session['pages'][$path]['views']++;
            if ($title !== '') $session['pages'][$path]['title'] = $title;
        }
        $data['sessions'][$key] = $session;
    });
    respond(['ok' => true], 202);
}

function buildStats(string $dataDir, int $days): array
{
    $sites = [];
    foreach (SITES as $site) {
        $sites[$site] = ['views' => 0, 'visitors' => [], 'sessions' => 0, 'totalActive' => 0,
            'longestSession' => 0, 'engagedSessions' => 0, 'pages' => [], 'daily' => []];
    }
    for ($offset = $days - 1; $offset >= 0; $offset--) {
        $day = gmdate('Y-m-d', strtotime('-' . $offset . ' days'));
        foreach (SITES as $site) $sites[$site]['daily'][$day] = ['views' => 0, 'visitors' => []];
        $file = $dataDir . '/' . $day . '.json';
        if (!is_file($file)) continue;
        $handle = fopen($file, 'rb');
        if (!$handle) continue;
        flock($handle, LOCK_SH);
        $decoded = json_decode(stream_get_contents($handle) ?: '', true);
        flock($handle, LOCK_UN);
        fclose($handle);
        foreach (($decoded['sessions'] ?? []) as $session) {
            $site = $session['site'] ?? '';
            if (!isset($sites[$site])) continue;
            $views = (int)($session['pageviews'] ?? 0);
            $active = (int)($session['activeSeconds'] ?? 0);
            $visitor = (string)($session['visitorId'] ?? '');
            $sites[$site]['views'] += $views;
            $sites[$site]['sessions']++;
            $sites[$site]['totalActive'] += $active;
            $sites[$site]['longestSession'] = max($sites[$site]['longestSession'], $active);
            if ($active >= 10 || $views >= 2) $sites[$site]['engagedSessions']++;
            if ($visitor !== '') {
                $sites[$site]['visitors'][$visitor] = true;
                $sites[$site]['daily'][$day]['visitors'][$visitor] = true;
            }
            $sites[$site]['daily'][$day]['views'] += $views;
            foreach (($session['pages'] ?? []) as $path => $page) {
                if (!isset($sites[$site]['pages'][$path])) $sites[$site]['pages'][$path] = ['path' => $path, 'title' => $page['title'] ?? '', 'views' => 0];
                $sites[$site]['pages'][$path]['views'] += (int)($page['views'] ?? 0);
            }
        }
    }

    $result = [];
    foreach ($sites as $site => $data) {
        $daily = [];
        foreach ($data['daily'] as $date => $row) $daily[] = ['date' => $date, 'views' => $row['views'], 'visitors' => count($row['visitors'])];
        $pages = array_values($data['pages']);
        usort($pages, fn($a, $b) => $b['views'] <=> $a['views']);
        $sessions = max(1, $data['sessions']);
        $previous = array_slice($daily, 0, max(1, intdiv(count($daily), 2)));
        $current = array_slice($daily, max(1, intdiv(count($daily), 2)));
        $previousViews = array_sum(array_column($previous, 'views'));
        $currentViews = array_sum(array_column($current, 'views'));
        $change = $previousViews > 0 ? round((($currentViews - $previousViews) / $previousViews) * 100, 1) : ($currentViews > 0 ? 100 : 0);
        $result[$site] = [
            'views' => $data['views'], 'visitors' => count($data['visitors']), 'sessions' => $data['sessions'],
            'averageOnsite' => (int)round($data['totalActive'] / $sessions), 'longestOnsite' => $data['longestSession'],
            'engagementRate' => round(($data['engagedSessions'] / $sessions) * 100, 1), 'change' => $change,
            'daily' => $daily, 'topPages' => array_slice($pages, 0, 5),
        ];
    }
    return ['generatedAt' => gmdate(DATE_ATOM), 'days' => $days, 'sites' => $result];
}

function withLockedJson(string $file, callable $mutate): void
{
    $handle = fopen($file, 'c+');
    if (!$handle || !flock($handle, LOCK_EX)) respond(['error' => 'Storage locked'], 503);
    $raw = stream_get_contents($handle);
    $data = json_decode($raw ?: '', true);
    if (!is_array($data)) $data = ['sessions' => []];
    $mutate($data);
    rewind($handle); ftruncate($handle, 0);
    fwrite($handle, json_encode($data, JSON_UNESCAPED_SLASHES));
    fflush($handle); flock($handle, LOCK_UN); fclose($handle);
}

function cleanToken($value, int $max): string { return preg_replace('/[^a-zA-Z0-9_-]/', '', substr((string)$value, 0, $max)) ?? ''; }
function cleanText($value, int $max): string { return trim(mb_substr(strip_tags((string)$value), 0, $max)); }
function cleanPath($value): string { $path = parse_url((string)$value, PHP_URL_PATH) ?: '/'; return substr('/' . ltrim($path, '/'), 0, 300); }
function cleanReferrer($value): string { $host = parse_url((string)$value, PHP_URL_HOST); return $host ? substr(strtolower($host), 0, 120) : ''; }
function respond(array $payload, int $status = 200): void { http_response_code($status); header('Content-Type: application/json; charset=utf-8'); header('Cache-Control: no-store'); echo json_encode($payload, JSON_UNESCAPED_SLASHES); exit; }
