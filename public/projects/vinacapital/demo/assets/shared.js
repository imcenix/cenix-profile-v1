/* ==========================================================================
   VinaCapital — Khung dùng chung cho mọi trang
   Header, điều hướng, dải cảnh báo lừa đảo, footer, và vài mảnh lặp lại.
   Trang chủ và các trang con đều nạp file này trước file nội dung của mình.
   ========================================================================== */

const IMG = 'assets/images/';

/* Điều hướng chính. `key` khớp với VC.page của từng trang để tô mục đang xem. */
const NAV = [
  { key: 'about',     label: 'About Us',            href: 'about.html' },
  { key: 'solutions', label: 'Investment Solutions', href: 'solutions.html' },
  { key: 'esg',       label: 'ESG',                 href: 'esg.html' },
  { key: 'education', label: 'Investment Education', href: 'education.html' },
  { key: 'news',      label: 'News & Insights',     href: 'news.html' },
  { key: 'careers',   label: 'Careers',             href: 'careers.html' },
  { key: 'contact',   label: 'Contact',             href: 'contact.html' }
];

const OFFICES = [
  ['Ho Chi Minh City', '17th Floor, Sun Wah Tower · 115 Nguyen Hue, Sai Gon Ward<br>+84 28 3821 9930'],
  ['Hanoi', '2nd Floor, International Centre · 17 Ngo Quyen, Hoan Kiem Ward<br>+84 24 3936 4630'],
  ['Singapore', '#42-01, Suntec Tower 4 · 6 Temasek Boulevard<br>+65 6332 9081']
];

const FRAUD = {
  label: 'Investor protection',
  title: 'Fraud warning',
  intro: 'To protect investors against impersonation and fraud that misuse the VinaCapital brand and reputation, please note the following:',
  points: [
    'VinaCapital does not conduct any form of online recruitment, including remote jobs, freelance work or work-from-home offers.',
    'VinaCapital does not invite investors to join stock investment groups on Facebook, Zalo, Telegram, WhatsApp, Viber, Messenger or any other social or messaging platform.',
    'Fund certificates are traded only through the MiO app or the apps of officially appointed distribution partners.',
    'Investors should verify the identity of any fund consultant before carrying out a transaction.',
    'All transactions are settled only through the fund’s official bank accounts as published by VinaCapital.'
  ]
};

/* Bản rút gọn cho pop-up take-over đầu phiên.
   Quy định yêu cầu phải có cảnh báo chặn ngang khi vào site; vì trang đã có
   khối đầy đủ ở cuối nên pop-up chỉ nêu 3 ý cốt lõi rồi dẫn xuống đọc thêm. */
const FRAUD_POPUP = [
  'VinaCapital does <b>not</b> recruit online in any form — remote, freelance or work-from-home.',
  'VinaCapital does <b>not</b> invite anyone to join stock investment groups on Facebook, Zalo, Telegram, WhatsApp, Viber or any messaging platform.',
  'Fund certificates are traded <b>only</b> through the MiO app or officially appointed distributors, and settled through the fund’s official bank accounts.'
];

/* Icon góc đỏ (dựng lại icon-corner.svg) — chỉ gắn lên ảnh lớn giới thiệu một phần nội dung */
const corner = () => '<span class="corner" aria-hidden="true"><i></i><i></i></span>';

const mark = '<svg viewBox="0 0 54 53" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="54" height="53" fill="#cb2b1a"/><path d="M0 0H54L27 53Z" fill="#BCBDC0"/></svg>';
const logo = () => `<a class="logo" href="index.html" aria-label="VinaCapital — home">${mark}<b>VinaCapital</b></a>`;

/* Hai mảng nhận diện: dải xám nghiêng + nêm đỏ mép phải.
   `compact` dùng cho banner trang con (thấp hơn nên mảng phải gọn lại). */
const shapes = (compact) =>
  `<span class="hero__shapes${compact ? ' hero__shapes--sm' : ''}" aria-hidden="true"><i class="hero__sh-grey"></i><i class="hero__sh-red"></i></span>`;

function header(current) {
  return `
<header class="hdr">
  <div class="wrap hdr__in">
    ${logo()}
    <nav class="hdr__nav">${NAV.map(n =>
      `<a href="${n.href}"${n.key === current ? ' class="is-on" aria-current="page"' : ''}>${n.label}</a>`
    ).join('')}</nav>
    <div class="hdr__end">
      <span class="hdr__lang"><b>VI</b><s>/</s>EN</span>
      <a class="hdr__mio" href="#">MiO</a>
      <button class="hdr__burger" aria-label="Open menu" aria-expanded="false">☰</button>
    </div>
  </div>
</header>`;
}

/* Banner đầu trang con: ảnh full-bleed + breadcrumb + tiêu đề */
function pageHero({ img, eyebrow, title, lead, crumb }) {
  return `
<section class="phero">
  <div class="phero__bg"><img src="${IMG}${img}" alt="" aria-hidden="true" fetchpriority="high"></div>
  <span class="phero__scrim" aria-hidden="true"></span>
  ${shapes(true)}
  <div class="wrap phero__in">
    <nav class="crumb" aria-label="Breadcrumb"><a href="index.html">Home</a><i>›</i><span>${crumb}</span></nav>
    <p class="eyebrow eyebrow--rule phero__eyebrow">${eyebrow}</p>
    <h1>${title}</h1>
    ${lead ? `<p class="phero__lead">${lead}</p>` : ''}
  </div>
</section>`;
}

function fraudBand() {
  return `
<section class="fraud" id="canh-bao">
  <div class="wrap">
    <div class="fraud__head">
      <div><p class="eyebrow eyebrow--rule">${FRAUD.label}</p><h2>${FRAUD.title}</h2></div>
      <button class="fraud__t" aria-expanded="false">Read the important notice +</button>
    </div>
    <div class="fraud__b">
      <p>${FRAUD.intro}</p>
      <ul>${FRAUD.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  </div>
</section>`;
}

function fraudPopup() {
  return `
<div class="pop" id="fraud-pop" role="dialog" aria-modal="true" aria-labelledby="pop-title" hidden>
  <div class="pop__veil" data-pop-close></div>
  <div class="pop__box" role="document">
    <button class="pop__x" data-pop-close aria-label="Close">✕</button>
    <p class="eyebrow eyebrow--rule">${FRAUD.label}</p>
    <h2 id="pop-title">${FRAUD.title}</h2>
    <p class="pop__lead">To protect investors against impersonation that misuses the VinaCapital brand, please note:</p>
    <ul class="pop__list">${FRAUD_POPUP.map(p => `<li>${p}</li>`).join('')}</ul>
    <a class="pop__more" href="#canh-bao" data-pop-more>Read the full fraud warning <i>↓</i></a>
    <div class="pop__act">
      <button class="btn btn--ghost" data-pop-never>Don’t show again</button>
      <button class="btn" data-pop-close>I understand</button>
    </div>
  </div>
</div>`;
}

function footer() {
  return `
<footer class="ftr" id="contact">
  <div class="wrap">
    <div class="ftr__grid">
      <div>
        ${logo()}
        <p class="ftr__blurb">Vietnam’s leading multi-disciplinary investment management group — creating prosperity together since 2003.</p>
      </div>
      ${OFFICES.map(o => `<div><h4>${o[0]}</h4><p>${o[1]}</p></div>`).join('')}
    </div>
    <div class="ftr__legal">
      <p>Copyright © 2024 VinaCapital. All rights reserved.</p>
      <nav><a href="#">Terms and Conditions</a><a href="#">Privacy Policy</a><a href="careers.html">Careers</a></nav>
    </div>
  </div>
</footer>`;
}

/* Tương tác dùng chung cho mọi trang */
function initShared(root) {
  /* Cảnh báo lừa đảo — đóng/mở */
  root.querySelectorAll('.fraud__t').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.closest('.fraud').querySelector('.fraud__b');
      const open = body.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Hide notice −' : 'Read the important notice +';
    });
  });

  /* Menu mobile */
  const burger = root.querySelector('.hdr__burger');
  const nav = root.querySelector('.hdr__nav');
  if (burger && nav) {
    burger.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      burger.textContent = open ? '✕' : '☰';
    });
  }

  /* Pop-up cảnh báo lừa đảo — hiện một lần mỗi phiên */
  const pop = root.querySelector('#fraud-pop');
  if (pop) {
    /* localStorage có thể bị chặn (cửa sổ ẩn danh, chặn cookie) nên luôn bọc try/catch
       và vẫn chạy đúng khi không đọc/ghi được. */
    const KEY = 'vc-fraud-hidden';
    const readFlag = () => { try { return localStorage.getItem(KEY) === '1'; } catch (e) { return false; } };
    const writeFlag = () => { try { localStorage.setItem(KEY, '1'); } catch (e) {} };

    const close = () => { pop.hidden = true; document.body.style.overflow = ''; };
    if (!readFlag()) {
      pop.hidden = false;
      document.body.style.overflow = 'hidden';
    }
    pop.querySelectorAll('[data-pop-close]').forEach(el => el.addEventListener('click', close));
    const never = pop.querySelector('[data-pop-never]');
    if (never) never.addEventListener('click', () => { writeFlag(); close(); });
    const more = pop.querySelector('[data-pop-more]');
    if (more) more.addEventListener('click', () => {
      close();
      const t = document.getElementById('canh-bao');
      if (t) {
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const btn = t.querySelector('.fraud__t');
        const body = t.querySelector('.fraud__b');
        if (btn && body && !body.classList.contains('is-open')) btn.click();
      }
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !pop.hidden) close(); });
  }

  /* Khối đóng/mở dùng chung: nút [data-acc] điều khiển panel kế tiếp */
  root.querySelectorAll('[data-acc]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.acc__item');
      const open = item.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  /* Tab dùng chung: [data-tabs] chứa nút [data-tab] và panel [data-tab-panel] */
  root.querySelectorAll('[data-tabs]').forEach(group => {
    group.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.tab;
        group.querySelectorAll('[data-tab]').forEach(b => {
          const on = b === btn;
          b.classList.toggle('is-on', on);
          b.setAttribute('aria-selected', String(on));
        });
        group.querySelectorAll('[data-tab-panel]').forEach(pnl => {
          pnl.hidden = pnl.dataset.tabPanel !== v;
        });
      });
    });
  });
}

/* Dựng một trang con: khung chung + phần thân riêng */
function mountPage({ page, hero, body }) {
  const root = document.getElementById('site');
  root.innerHTML = header(page) + pageHero(hero) + body + fraudBand() + footer() + fraudPopup();
  initShared(root);
  return root;
}

window.VC = { IMG, NAV, OFFICES, FRAUD, corner, logo, shapes, header, pageHero, fraudBand, fraudPopup, footer, initShared, mountPage };
