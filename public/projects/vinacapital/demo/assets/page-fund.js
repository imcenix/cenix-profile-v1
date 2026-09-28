/* ==========================================================================
   TRANG CHI TIẾT QUỸ MỞ — khuôn dùng chung cho mọi quỹ
   --------------------------------------------------------------------------
   Thứ tự mục bám đúng trang quỹ trên vinacapital.com:
     Tổng quan (giới thiệu + bảng so sánh) → Biểu đồ NAV + bảng theo năm + NAV
     → Báo cáo quỹ → Ban đầu tư → Dải trích dẫn mức rủi ro → Lợi ích
     → Thông tin quỹ → Báo cáo NAV → Tài liệu quỹ → Hướng dẫn đầu tư
     → Công cụ hoạch định ngân sách → Đại lý phân phối.
   Dữ liệu: FUNDS / FUND_COMMON (fund-data.js), FUND_NAV (fund-nav-<mã>.js).
   Biểu đồ vẽ bằng SVG, không dùng thư viện.
   ========================================================================== */

const KEY = document.body.dataset.fund || 'vesaf';
const F = FUNDS[KEY];
const C = FUND_COMMON;
const SVGNS = 'http://www.w3.org/2000/svg';
const COL = { fund: '#cb2b1a', index: '#333B52' };   // giữ đúng cặp màu biểu đồ trang gốc

const num = (v, d = 2) => v.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d });
const neg = s => String(s).trim().startsWith('-');
const link = k => C[k];

/* Danh sách tài liệu: hiện 5 dòng đầu, nút "Load more" mở phần còn lại */
const SHOW = 5;
const docList = (rows, id) => `
  <ul class="fd-docs" id="${id}">
    ${rows.map(([t, d, u], i) => `<li${i >= SHOW ? ' hidden' : ''}><a href="${VC_FILES}${u}" target="_blank" rel="noopener">
      <span class="fd-docs__ic" aria-hidden="true">${u.endsWith('.xlsx') ? 'XLS' : 'PDF'}</span>
      <span class="fd-docs__t">${t}${i === 0 ? '<em>Latest</em>' : ''}</span>
      <time>${d}</time>
      <span class="fd-docs__dl" aria-hidden="true">↓</span>
    </a></li>`).join('')}
  </ul>
  ${rows.length > SHOW ? `<button class="fd-more" data-more="${id}">Load more <i>+</i></button>` : ''}`;

VC.mountPage({
  page: 'solutions',
  hero: {
    img: F.hero,
    crumb: `<a href="solutions.html">Investment solutions</a><i>›</i><a href="solutions.html#trong-nuoc">Onshore funds</a><i>›</i>${F.short}`,
    title: `${F.name}<br><span class="fd-code">(${F.code})</span>`
  },
  body: `
<nav class="subnav fd-nav" aria-label="Page contents">
  <div class="wrap fd-nav__in">
    <div class="subnav__in">
      <a href="#overview">Overview</a><a href="#fund-factsheets">Fund Factsheets</a><a href="#investment-team">Investment Team</a><a href="#fund-info">Fund Information</a><a href="#nav-reports">NAV Reports</a><a href="#fund-documents">Fund Documents</a>
    </div>
    <a class="fd-nav__cta" href="#how-to-invest">How to invest</a>
  </div>
</nav>

<!-- 1. Giới thiệu + bảng so sánh -->
<section class="sect fd-intro" id="overview">
  <div class="wrap fd-intro__grid">
    <div class="fd-intro__main">
      <p class="eyebrow eyebrow--rule">Fund overview</p>
      <p class="fd-intro__lead">${F.intro}</p>
      <div class="fd-intro__cta">
        <a class="btn" href="${link('mio')}" target="_blank" rel="noopener">Invest now <i>→</i></a>
        <a class="tlink" href="${link('transfer')}" target="_blank" rel="noopener">Money transfer instructions <i>→</i></a>
      </div>
    </div>
    <div class="fd-intro__side">
      <div class="fd-ret" role="table" aria-label="${F.short} returns compared with ${F.benchmark}">
        <div class="fd-ret__row fd-ret__head" role="row">
          <span role="columnheader"></span>
          <span role="columnheader"><i style="background:${COL.fund}"></i>${F.short} (VND)</span>
          <span role="columnheader"><i style="background:${COL.index}"></i>${F.benchmark} (VND)</span>
        </div>
        ${F.returns.map(([l, sub, a, b]) => `<div class="fd-ret__row" role="row">
          <span role="rowheader">${l}${sub ? `<small>${sub}</small>` : ''}</span>
          <b role="cell" class="${neg(a) ? 'is-neg' : ''}">${a}</b>
          <b role="cell" class="${neg(b) ? 'is-neg' : ''}">${b}</b>
        </div>`).join('')}
        <div class="fd-ret__row" role="row">
          <span role="rowheader">Fund size<small>As of ${F.asOf}</small></span>
          <b role="cell" class="fd-ret__size">${F.fundSize}<em> billion</em></b>
          <span role="cell"></span>
        </div>
      </div>
      <p class="fd-note">${F.dataNote}</p>
    </div>
  </div>
</section>

<!-- 2. Biểu đồ NAV + bảng theo năm + NAV -->
<section class="sect sect--paper fd-perf" id="performance">
  <div class="wrap">
    <div class="fd-perf__head">
      <div><p class="eyebrow eyebrow--rule">Performance</p><h2>${F.short} performance (VND)</h2></div>
      <p>NAV per unit of ${F.short} against the ${F.benchmark}, rebased to 10,000 at inception. Move across the chart to read any date; drag the handles below to zoom.</p>
    </div>
    <div class="fd-chart">
      <div class="fd-chart__top">
        <div class="fd-range" role="group" aria-label="Time range">
          ${['6M', 'YTD', '1Y', '3Y', '5Y', 'All'].map(r => `<button data-range="${r}"${r === 'All' ? ' class="is-on"' : ''}>${r}</button>`).join('')}
        </div>
        <div class="fd-read" aria-live="polite">
          <span class="fd-read__d"></span>
          <span><i style="background:${COL.fund}"></i>${F.short}<b class="fd-read__f"></b></span>
          <span><i style="background:${COL.index}"></i>${F.benchmark}<b class="fd-read__i"></b></span>
        </div>
      </div>
      <div class="fd-plot" id="nav-plot"></div>
      <div class="fd-brush" id="nav-brush"></div>
    </div>

    <div class="fd-annual" role="region" aria-label="${F.short} performance by year" tabindex="0">
      <table>
        <thead><tr><th scope="col">Year</th>${F.annual.map(r => `<th scope="col">${r[0].replace(' (', '<br><small>(').replace(')', ')</small>')}</th>`).join('')}</tr></thead>
        <tbody>
          <tr><th scope="row">${F.short} (VND)</th>${F.annual.map(r => `<td class="${neg(r[1]) ? 'is-neg' : ''}">${r[1]}</td>`).join('')}</tr>
          <tr><th scope="row">${F.benchmark} (VND)</th>${F.annual.map(r => `<td class="${neg(r[2]) ? 'is-neg' : ''}">${r[2]}</td>`).join('')}</tr>
        </tbody>
      </table>
    </div>

    <h3 class="fd-sub">NAV (VND)</h3>
    <div class="fd-navbox">
      <div><span>NAV/unit as of ${F.asOf}</span><b>${F.nav.value}</b></div>
      <div><span>The highest NAV/unit ${F.nav.year}</span><b>${F.nav.high}</b></div>
      <div><span>The lowest NAV/unit ${F.nav.year}</span><b>${F.nav.low}</b></div>
    </div>
  </div>
</section>

<!-- 3. Báo cáo quỹ -->
<section class="sect fd-list" id="fund-factsheets">
  <div class="wrap fd-list__grid">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Reports</p><h2>Fund Factsheets</h2></div>
    <div>${docList(F.factsheets, 'dl-factsheets')}</div>
  </div>
</section>

<!-- 4. Ban đầu tư -->
<section class="sect sect--paper fd-team" id="investment-team">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">Investment team</p><h2>Who manages ${F.short}</h2></div>
      <p>Portfolio managers supported by VinaCapital’s in-house research team.</p>
    </div>
    <div class="fd-team__grid">
      ${F.team.map(([n, r, img]) => `<article>
        <img src="${IMG}${img}" alt="${n}" loading="lazy">
        <div><h3>${n}</h3><p>${r.replace('<br>', ' ')}</p></div>
      </article>`).join('')}
    </div>
  </div>
</section>

<!-- 5. Dải trích dẫn mức rủi ro — nền neo theo màn hình như trang chủ -->
<section class="fd-quote" data-fd-fixed>
  <div class="fd-quote__bg"><img src="${IMG}${F.riskBg}" alt="" loading="lazy"></div>
  <span class="fd-quote__scrim" aria-hidden="true"></span>
  <div class="wrap fd-quote__in"><p>${F.risk}</p></div>
</section>

<!-- 6. Lợi ích -->
<section class="sect fd-why">
  <div class="wrap">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Benefits</p><h2>Why should you invest in ${F.code}</h2></div>
    <ul class="fd-why__grid">
      ${F.why.map(([ic, t]) => `<li><img src="${IMG}fund/${ic}" alt="" width="32" height="32" loading="lazy"><p>${t}</p></li>`).join('')}
    </ul>
  </div>
</section>

<!-- 7. Thông tin quỹ -->
<section class="sect sect--paper fd-info" id="fund-info">
  <div class="wrap">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Overview</p><h2>${F.code} information</h2></div>
    <dl class="fd-info__list">
      ${F.info.map(([k, v]) => `<div><dt>${k}</dt><dd>${Array.isArray(v) ? `<ul>${v.map(x => `<li>${x}</li>`).join('')}</ul>` : v}</dd></div>`).join('')}
    </dl>
  </div>
</section>

<!-- 8. Báo cáo NAV -->
<section class="sect fd-list" id="nav-reports">
  <div class="wrap fd-list__grid">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Daily & weekly</p><h2>NAV Reports</h2></div>
    <div>${docList(F.navReports, 'dl-nav')}</div>
  </div>
</section>

<!-- 9. Tài liệu quỹ -->
<section class="sect sect--paper fd-list" id="fund-documents">
  <div class="wrap">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Legal documents</p><h2>Fund Documents</h2></div>
    <div class="fd-docgrid">
      ${F.documents.map(([title, rows], k) => `<div><h3 class="fd-sub">${title}</h3>${docList(rows, `dl-doc${k}`)}</div>`).join('')}
    </div>
  </div>
</section>

<!-- 10. Hướng dẫn đầu tư -->
<section class="sect fd-how" id="how-to-invest">
  <div class="wrap">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Get started</p><h2>How to invest</h2></div>
    <ol class="fd-steps">
      ${C.steps.map(([t, d, cta, k], i) => `<li>
        <span>${String(i + 1).padStart(2, '0')}</span>
        <h3>${t}</h3><p>${d}</p>
        ${cta ? `<a class="tlink" href="${link(k)}"${k === 'advice' ? '' : ' target="_blank" rel="noopener"'}>${cta} <i>→</i></a>` : ''}
      </li>`).join('')}
    </ol>
  </div>
</section>

<!-- 11. Công cụ hoạch định ngân sách -->
<section class="sect sect--sand fd-calc" id="budget-tool">
  <div class="wrap">
    <div class="fd-list__head"><p class="eyebrow eyebrow--rule">Plan ahead</p><h2>Budget planning tool</h2></div>
    <p class="fd-calc__intro">Please fill in some basic information to calculate the potential amount of your investment!</p>
    <form class="fd-calc__form" id="calc-form">
      <span>I plan to invest in</span>
      <label class="fd-calc__in"><input id="c-years" type="number" min="1" max="25" value="${C.calc.years}" aria-label="Investment period in years"><em>year(s),</em></label>
      <span>with monthly investment of VND</span>
      <label class="fd-calc__in"><input id="c-month" type="number" min="0.1" step="0.1" value="${C.calc.monthly}" aria-label="Monthly investment in million VND"><em>million.</em></label>
      <span>My expected return is</span>
      <label class="fd-calc__in"><input id="c-rate" type="number" min="0" max="20" step="0.5" value="${C.calc.rate}" aria-label="Expected annual return in percent"><em>% per annum.</em></label>
      <button class="btn" type="submit">Calculate my accumulated amount <i>→</i></button>
    </form>
    <div class="fd-calc__out">
      <div class="fd-calc__panel">
        <p class="fd-sub">Your investment value over time</p>
        <p class="fd-calc__msg" id="c-msg"></p>
        <div class="fd-plot" id="calc-plot"></div>
        <p class="fd-note">Note: This illustration is for reference only and is based on the assumed monthly investment amount, investment period, and average annual return rate stated above.</p>
      </div>
      <div class="fd-calc__panel">
        <p class="fd-sub">Detailed cashflow (millions of VND)</p>
        <div class="fd-calc__tw">
          <table class="fd-calc__table">
            <thead><tr><th>Year no.</th><th>Beginning of<br>year value</th><th>Investment<br>amount</th><th>Gained<br>amount</th><th>End of<br>year value</th></tr></thead>
            <tbody id="c-rows"></tbody>
          </table>
        </div>
        <button class="fd-more" id="c-more" type="button" hidden>Learn more <i>+</i></button>
      </div>
    </div>
  </div>
</section>

<!-- 12. Đại lý phân phối -->
<section class="sect fd-dist">
  <div class="wrap">
    <h2 class="fd-dist__t">Learn more about VinaCapital open-ended funds at:</h2>
    <div class="fd-dist__img"><img src="${IMG}${C.distributors}" alt="BIDV, HDBank, HSBC, MB, MSB, OCB, SHB, VietinBank, VPBank, CVS, Guotai Haitong Securities, MBS, Mirae Asset Securities, Rong Viet Securities, Techcom Securities, VCBS, VNDIRECT, Digi Invest, Finhay, Fmarket, Investing Pro, Timo" loading="lazy" width="2500" height="510"></div>
  </div>
</section>

<div class="fd-tip" id="fd-tip" hidden></div>`
});

/* ================================================================ tiện ích */
const $ = s => document.querySelector(s);
const el = (tag, attrs = {}, parent) => {
  const n = document.createElementNS(SVGNS, tag);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(n);
  return n;
};
const tip = $('#fd-tip');
function showTip(html, x, y) {
  tip.innerHTML = html;
  tip.hidden = false;
  tip.classList.remove('fd-tip--side');
  const w = tip.offsetWidth;
  tip.style.left = `${Math.min(Math.max(x, w / 2 + 8), document.documentElement.clientWidth - w / 2 - 8)}px`;
  tip.style.top = `${y}px`;
}
const hideTip = () => { tip.hidden = true; };
function niceStep(span, target) {
  const raw = span / target, p = Math.pow(10, Math.floor(Math.log10(raw))), m = raw / p;
  return (m < 1.5 ? 1 : m < 3 ? 2 : m < 7 ? 5 : 10) * p;
}

/* "Load more" cho các danh sách */
document.querySelectorAll('[data-more]').forEach(b => b.addEventListener('click', () => {
  document.querySelectorAll(`#${b.dataset.more} li[hidden]`).forEach(li => { li.hidden = false; });
  b.remove();
}));

/* ======================================================= biểu đồ NAV ngày */
const SERIES = (() => {
  const src = (window.FUND_NAV || {})[KEY];
  if (!src) return null;
  const [y, m, d] = src.start.split('-').map(Number);
  let day = Date.UTC(y, m - 1, d) / 864e5, f = 0, i = 0;
  const t = [], a = [], b = [];
  src.data.split(';').forEach(p => {
    const [dd, df, di] = p.split(',').map(v => parseInt(v, 36));
    day += dd; f += df; i += di;
    t.push(day * 864e5); a.push(f / 100); b.push(i / 100);
  });
  return { t, a, b };
})();

const fmtDate = ms => { const d = new Date(ms); return `${String(d.getUTCDate()).padStart(2, '0')}/${String(d.getUTCMonth() + 1).padStart(2, '0')}/${d.getUTCFullYear()}`; };
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function idxAt(ms) {             // điểm dữ liệu gần thời điểm ms nhất (tìm nhị phân)
  const t = SERIES.t; let lo = 0, hi = t.length - 1;
  while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (t[mid] <= ms) lo = mid; else hi = mid; }
  return ms - t[lo] < t[hi] - ms ? lo : hi;
}

const view = { a: 0, b: SERIES ? SERIES.t.length - 1 : 0 };
const read = { d: $('.fd-read__d'), f: $('.fd-read__f'), i: $('.fd-read__i') };
function setRead(k) {
  read.d.textContent = fmtDate(SERIES.t[k]);
  read.f.textContent = num(SERIES.a[k]);
  read.i.textContent = num(SERIES.b[k]);
}

function drawNav() {
  if (!SERIES) return;
  const box = $('#nav-plot');
  const W = Math.max(box.clientWidth, 300), H = W < 640 ? 280 : 380;
  const m = { t: 14, r: 12, b: 30, l: W < 640 ? 46 : 56 };
  const { t, a, b } = SERIES;
  const t0 = t[view.a], t1 = t[view.b];
  let lo = Infinity, hi = -Infinity;
  for (let k = view.a; k <= view.b; k++) { lo = Math.min(lo, a[k], b[k]); hi = Math.max(hi, a[k], b[k]); }
  const step = niceStep(hi - lo, 5);
  lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step;
  const x = v => m.l + (v - t0) / (t1 - t0) * (W - m.l - m.r);
  const y = v => m.t + (hi - v) / (hi - lo) * (H - m.t - m.b);

  box.innerHTML = '';
  const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: 'img', 'aria-label': `Daily NAV per unit of ${F.short} and ${F.benchmark}` }, box);
  for (let v = lo; v <= hi + 1e-6; v += step) {
    el('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), class: 'fd-grid' }, svg);
    el('text', { x: m.l - 8, y: y(v) + 4, class: 'fd-tick', 'text-anchor': 'end' }, svg).textContent = Math.round(v).toLocaleString('en-US');
  }
  /* trục thời gian: năm khi khung dài, tháng khi khung ngắn */
  const spanDays = (t1 - t0) / 864e5;
  const d0 = new Date(t0);
  const ticks = [];
  if (spanDays > 900) {
    for (let yr = d0.getUTCFullYear() + 1; Date.UTC(yr, 0, 1) <= t1; yr++) ticks.push([Date.UTC(yr, 0, 1), `Jan ${yr}`]);
  } else {
    const every = spanDays > 400 ? 3 : spanDays > 150 ? 2 : 1;
    for (let k = 1; ; k++) {
      const dt = Date.UTC(d0.getUTCFullYear(), d0.getUTCMonth() + k, 1);
      if (dt > t1) break;
      const mo = new Date(dt).getUTCMonth();
      if (mo % every === 0) ticks.push([dt, `${MON[mo]} ${String(new Date(dt).getUTCFullYear()).slice(2)}`]);
    }
  }
  const minGap = W < 640 ? 64 : 80;
  let lastX = -Infinity;
  ticks.forEach(([v, lab]) => {
    const px = x(v); if (px - lastX < minGap) return; lastX = px;
    el('line', { x1: px, x2: px, y1: m.t, y2: H - m.b, class: 'fd-grid fd-grid--v' }, svg);
    el('text', { x: px, y: H - 10, class: 'fd-tick', 'text-anchor': 'middle' }, svg).textContent = lab;
  });
  el('line', { x1: m.l, x2: W - m.r, y1: H - m.b, y2: H - m.b, class: 'fd-ax' }, svg);

  /* hai đường — thưa điểm khi quá dày so với số pixel */
  const n = view.b - view.a + 1, stride = Math.max(1, Math.floor(n / (W - m.l - m.r)));
  [['b', COL.index], ['a', COL.fund]].forEach(([s, c]) => {
    let d = '';
    for (let k = view.a; k <= view.b; k += stride) d += `${d ? 'L' : 'M'}${x(t[k]).toFixed(1)},${y(SERIES[s][k]).toFixed(1)}`;
    d += `L${x(t[view.b]).toFixed(1)},${y(SERIES[s][view.b]).toFixed(1)}`;
    el('path', { d, fill: 'none', stroke: c, 'stroke-width': 1.6, 'stroke-linejoin': 'round' }, svg);
  });

  /* lớp rê chuột: đường dọc + 2 chấm + ô số liệu */
  const cross = el('line', { y1: m.t, y2: H - m.b, class: 'fd-cross', visibility: 'hidden' }, svg);
  const dots = [COL.fund, COL.index].map(c => el('circle', { r: 4.5, fill: c, stroke: '#fff', 'stroke-width': 2, visibility: 'hidden' }, svg));
  const hit = el('rect', { x: m.l, y: m.t, width: W - m.l - m.r, height: H - m.t - m.b, class: 'fd-hit' }, svg);
  const move = e => {
    const r = svg.getBoundingClientRect();
    const px = (e.clientX - r.left) * (W / r.width);
    const k = Math.min(view.b, Math.max(view.a, idxAt(t0 + (px - m.l) / (W - m.l - m.r) * (t1 - t0))));
    const X = x(t[k]);
    cross.setAttribute('x1', X); cross.setAttribute('x2', X); cross.setAttribute('visibility', 'visible');
    dots[0].setAttribute('cx', X); dots[0].setAttribute('cy', y(a[k])); dots[0].setAttribute('visibility', 'visible');
    dots[1].setAttribute('cx', X); dots[1].setAttribute('cy', y(b[k])); dots[1].setAttribute('visibility', 'visible');
    setRead(k);
    /* ô số liệu nằm cạnh đường dọc (bên phải, sát mép phải thì lật sang trái),
       không đè lên dòng số liệu phía trên biểu đồ */
    tip.innerHTML = `<b>${fmtDate(t[k])}</b><span><i style="background:${COL.fund}"></i>${F.short}<strong>${num(a[k])}</strong></span><span><i style="background:${COL.index}"></i>${F.benchmark}<strong>${num(b[k])}</strong></span>`;
    tip.hidden = false;
    tip.classList.add('fd-tip--side');
    const sx = r.left + window.scrollX + X * (r.width / W);
    const flip = X > W * 0.72;
    tip.style.left = `${flip ? sx - tip.offsetWidth - 14 : sx + 14}px`;
    tip.style.top = `${r.top + window.scrollY + (m.t + 12) * (r.height / H)}px`;
  };
  hit.addEventListener('pointermove', move);
  hit.addEventListener('pointerdown', move);
  hit.addEventListener('pointerleave', () => {
    cross.setAttribute('visibility', 'hidden'); dots.forEach(dt => dt.setAttribute('visibility', 'hidden'));
    setRead(view.b); hideTip(); tip.classList.remove('fd-tip--side');
  });
  setRead(view.b);
}

/* thanh chọn khoảng thời gian bên dưới: kéo 2 tay nắm hoặc kéo cả khung */
function drawBrush() {
  if (!SERIES) return;
  const box = $('#nav-brush');
  const W = Math.max(box.clientWidth, 300), H = 54;
  const m = { l: W < 640 ? 46 : 56, r: 12 };
  const { t, a } = SERIES, N = t.length;
  const lo = Math.min(...a), hi = Math.max(...a);
  const x = k => m.l + (t[k] - t[0]) / (t[N - 1] - t[0]) * (W - m.l - m.r);
  const y = v => 6 + (hi - v) / (hi - lo) * (H - 12);
  box.innerHTML = '';
  const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, height: H, class: 'fd-brush__svg' }, box);
  let d = `M${x(0)},${H}`;
  for (let k = 0; k < N; k += 3) d += `L${x(k).toFixed(1)},${y(a[k]).toFixed(1)}`;
  d += `L${x(N - 1)},${y(a[N - 1])}L${x(N - 1)},${H}Z`;
  el('path', { d, class: 'fd-brush__area' }, svg);
  const shadeL = el('rect', { y: 0, height: H, class: 'fd-brush__shade' }, svg);
  const shadeR = el('rect', { y: 0, height: H, class: 'fd-brush__shade' }, svg);
  const win = el('rect', { y: 0, height: H, class: 'fd-brush__win' }, svg);
  const hL = el('rect', { y: H / 2 - 14, width: 10, height: 28, rx: 3, class: 'fd-brush__h' }, svg);
  const hR = el('rect', { y: H / 2 - 14, width: 10, height: 28, rx: 3, class: 'fd-brush__h' }, svg);
  const place = () => {
    const xa = x(view.a), xb = x(view.b);
    shadeL.setAttribute('x', m.l); shadeL.setAttribute('width', Math.max(0, xa - m.l));
    shadeR.setAttribute('x', xb); shadeR.setAttribute('width', Math.max(0, W - m.r - xb));
    win.setAttribute('x', xa); win.setAttribute('width', Math.max(1, xb - xa));
    hL.setAttribute('x', xa - 5); hR.setAttribute('x', xb - 5);
  };
  place();
  const toIdx = px => idxAt(t[0] + (px - m.l) / (W - m.l - m.r) * (t[N - 1] - t[0]));
  let mode = null, startX = 0, sa = 0, sb = 0;
  const pos = e => { const r = svg.getBoundingClientRect(); return (e.clientX - r.left) * (W / r.width); };
  const down = which => e => { mode = which; startX = pos(e); sa = view.a; sb = view.b; svg.setPointerCapture(e.pointerId); e.preventDefault(); };
  hL.addEventListener('pointerdown', down('a'));
  hR.addEventListener('pointerdown', down('b'));
  win.addEventListener('pointerdown', down('pan'));
  svg.addEventListener('pointermove', e => {
    if (!mode) return;
    const px = pos(e);
    if (mode === 'a') view.a = Math.min(toIdx(px), view.b - 10);
    if (mode === 'b') view.b = Math.max(toIdx(px), view.a + 10);
    if (mode === 'pan') {
      const dMs = (px - startX) / (W - m.l - m.r) * (t[N - 1] - t[0]);
      const span = t[sb] - t[sa];
      let na = idxAt(t[sa] + dMs);
      na = Math.max(0, na);
      let nb = idxAt(t[na] + span);
      if (nb >= N - 1) { nb = N - 1; na = idxAt(t[nb] - span); }
      view.a = na; view.b = nb;
    }
    place(); drawNav();
    document.querySelectorAll('[data-range]').forEach(b => b.classList.remove('is-on'));
  });
  const up = () => { mode = null; };
  svg.addEventListener('pointerup', up);
  svg.addEventListener('pointercancel', up);
}

document.querySelectorAll('[data-range]').forEach(btn => btn.addEventListener('click', () => {
  if (!SERIES) return;
  const { t } = SERIES, end = t.length - 1, last = new Date(t[end]);
  const back = { '6M': 182, '1Y': 365, '3Y': 1096, '5Y': 1826 }[btn.dataset.range];
  view.b = end;
  if (btn.dataset.range === 'All') view.a = 0;
  else if (btn.dataset.range === 'YTD') view.a = idxAt(Date.UTC(last.getUTCFullYear(), 0, 1));
  else view.a = idxAt(t[end] - back * 864e5);
  document.querySelectorAll('[data-range]').forEach(b => b.classList.toggle('is-on', b === btn));
  drawNav(); drawBrush();
}));

/* ======================================================= dải nền neo */
const fixedBands = [...document.querySelectorAll('[data-fd-fixed]')];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!reduce) {
  document.documentElement.classList.add('fd-motion');
  let queued = false;
  const paint = () => {
    queued = false;
    const vh = window.innerHeight;
    fixedBands.forEach(b => {
      const r = b.getBoundingClientRect();
      if (r.bottom < -300 || r.top > vh + 300) return;
      b.style.setProperty('--fx', Math.round(-r.top));
    });
  };
  const q = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
  window.addEventListener('scroll', q, { passive: true });
  window.addEventListener('resize', q);
  paint();
}

/* ======================================================= công cụ tính */
const fmtM = v => Math.round(v).toLocaleString('en-US');
function calcRows() {
  const n = Math.min(25, Math.max(1, parseInt($('#c-years').value, 10) || 1));
  const pm = Math.max(0, parseFloat($('#c-month').value) || 0);
  const r = Math.min(20, Math.max(0, parseFloat($('#c-rate').value) || 0)) / 100 / 12;
  const rows = [];
  let v = 0;
  for (let yr = 1; yr <= n; yr++) {
    const start = v;
    for (let mo = 0; mo < 12; mo++) v = v * (1 + r) + pm;   // góp cuối mỗi tháng, lãi kép theo tháng
    rows.push({ yr, start, paid: pm * 12, gain: v - start - pm * 12, end: v });
  }
  return rows;
}
const TABLE_ROWS = 9;   // như trang gốc: hiện 9 năm, "Learn more" mở phần còn lại
function drawCalc() {
  const rows = calcRows(), last = rows[rows.length - 1];
  const total = last.end >= 1000 ? `VND ${(last.end / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 })} billion` : `VND ${fmtM(last.end)} million`;
  $('#c-msg').innerHTML = `Great! After <b>${rows.length}</b> year(s) of disciplined monthly investing, you will have <b>${total}</b>.`;

  $('#c-rows').innerHTML = rows.map((r, i) => `<tr${i >= TABLE_ROWS ? ' hidden' : ''}><td>${r.yr}</td><td>${fmtM(r.start)}</td><td>${fmtM(r.paid)}</td><td>${fmtM(r.gain)}</td><td>${fmtM(r.end)}</td></tr>`).join('');
  const more = $('#c-more');
  more.hidden = rows.length <= TABLE_ROWS;

  const box = $('#calc-plot');
  const W = Math.max(box.clientWidth, 260), H = W < 500 ? 240 : 300;
  const m = { t: 10, r: 4, b: 26, l: 48 };
  const step = niceStep(last.end || 1, 6), hi = Math.ceil((last.end || 1) / step) * step;
  const y = v => m.t + (hi - v) / hi * (H - m.t - m.b);
  const gw = (W - m.l - m.r) / rows.length, bw = Math.max(4, Math.min(44, gw * 0.62));
  box.innerHTML = '';
  const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: 'img', 'aria-label': 'Projected investment value by year' }, box);
  for (let v = 0; v <= hi + 1e-6; v += step) {
    el('line', { x1: m.l, x2: W - m.r, y1: y(v), y2: y(v), class: v === 0 ? 'fd-ax' : 'fd-grid' }, svg);
    el('text', { x: m.l - 8, y: y(v) + 4, class: 'fd-tick', 'text-anchor': 'end' }, svg).textContent = fmtM(v);
  }
  const every = Math.ceil(rows.length / (W < 500 ? 6 : 12));
  rows.forEach((r, k) => {
    const cx = m.l + gw * k + gw / 2, top = y(r.end), rad = Math.min(4, bw / 2, y(0) - top);
    const g = el('g', { class: 'fd-grp' }, svg);
    el('rect', { x: cx - gw / 2, y: m.t, width: gw, height: H - m.t - m.b, class: 'fd-hit' }, g);
    el('path', { d: `M${cx - bw / 2},${y(0)}V${top + rad}Q${cx - bw / 2},${top} ${cx - bw / 2 + rad},${top}H${cx + bw / 2 - rad}Q${cx + bw / 2},${top} ${cx + bw / 2},${top + rad}V${y(0)}Z`, fill: COL.index }, g);
    if (k % every === 0 || k === rows.length - 1) el('text', { x: cx, y: H - 8, class: 'fd-tick', 'text-anchor': 'middle' }, svg).textContent = W < 500 ? r.yr : `Year ${r.yr}`;
    const html = `<b>Year ${r.yr}</b><span>End of year value<strong>${fmtM(r.end)}</strong></span><span>Gained amount<strong>${fmtM(r.gain)}</strong></span>`;
    g.addEventListener('pointermove', e => { const rr = svg.getBoundingClientRect(); showTip(html, rr.left + cx * (rr.width / W), rr.top + window.scrollY + top * (rr.height / H) - 10); });
    g.addEventListener('pointerleave', hideTip);
  });
}
$('#calc-form').addEventListener('submit', e => { e.preventDefault(); drawCalc(); });
document.querySelectorAll('#calc-form input').forEach(i => i.addEventListener('change', drawCalc));
$('#c-more').addEventListener('click', e => { document.querySelectorAll('#c-rows tr[hidden]').forEach(tr => { tr.hidden = false; }); e.currentTarget.hidden = true; });

/* ======================================================= khởi động */
function drawAll() { drawNav(); drawBrush(); drawCalc(); }
drawAll();
let rz;
window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(drawAll, 150); });
