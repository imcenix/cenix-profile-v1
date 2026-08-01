(function () {
  'use strict';
  var script = document.currentScript;
  var site = script && script.getAttribute('data-site');
  if (!site || navigator.doNotTrack === '1') return;
  var endpoint = 'https://imcenix.com/analytics/index.php';
  var key = 'cenix_analytics_visitor';
  var sessionKey = 'cenix_analytics_session';
  var uuid = function () { return (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2)).replace(/[^a-zA-Z0-9_-]/g, ''); };
  var visitorId = localStorage.getItem(key) || uuid();
  localStorage.setItem(key, visitorId);
  var sessionId = sessionStorage.getItem(sessionKey) || uuid();
  sessionStorage.setItem(sessionKey, sessionId);
  var activeSeconds = 0;
  var lastTick = Date.now();

  function payload(event) {
    return JSON.stringify({ site: site, event: event, visitorId: visitorId, sessionId: sessionId,
      path: location.pathname, title: document.title, referrer: document.referrer, activeSeconds: activeSeconds });
  }
  function send(event, beacon) {
    var body = payload(event);
    if (beacon && navigator.sendBeacon) { navigator.sendBeacon(endpoint, new Blob([body], { type: 'application/json' })); return; }
    fetch(endpoint, { method: 'POST', mode: 'cors', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: body }).catch(function () {});
  }
  function tick() {
    var now = Date.now();
    if (!document.hidden) activeSeconds += Math.min(15, Math.round((now - lastTick) / 1000));
    lastTick = now;
  }
  send('pageview', false);
  setInterval(function () { tick(); send('heartbeat', false); }, 15000);
  document.addEventListener('visibilitychange', function () { tick(); if (document.hidden) send('heartbeat', true); });
  addEventListener('pagehide', function () { tick(); send('heartbeat', true); });
})();
