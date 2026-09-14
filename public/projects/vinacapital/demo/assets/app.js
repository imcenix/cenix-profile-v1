/* ==========================================================================
   VinaCapital — Option 01 · Bold Editorial
   Bản chỉnh theo Feedback website (09/09/2026)
   Nội dung giữ nguyên tuyến trang chủ vinacapital.com/vi
   ========================================================================== */

const IMG = 'assets/images/';

const NAV = ['Về chúng tôi', 'Giải pháp đầu tư', 'ESG', 'Kiến thức đầu tư', 'Tin tức & Phân tích', 'Tuyển dụng', 'Liên hệ'];

const HERO = {
  label: 'Tập đoàn quản lý đầu tư đa ngành hàng đầu Việt Nam',
  lines: ['Kiến tạo giá trị', 'từ sự phát triển', 'mạnh mẽ của Việt Nam'],
  body: 'Tự hào là Tập đoàn quản lý đầu tư đa ngành hàng đầu tại Việt Nam, chúng tôi sở hữu vị thế đặc biệt để kiến tạo giá trị, đồng thời mang đến những cơ hội và lợi ích từ sự phát triển mạnh mẽ của đất nước trên tất cả các loại tài sản.',
  cta: 'Về chúng tôi',
  img: 'skyline-dusk.jpg',
  alt: 'Thành phố Hồ Chí Minh trong khoảnh khắc chuyển tối',
  foot: 'Việt Nam · Tăng trưởng dài hạn'
};

const ABOUT = {
  label: 'Đồng hành Phát triển Phồn vinh',
  heading: 'Niềm tin dài hạn<br>vào Việt Nam',
  quote: 'VinaCapital có niềm tin mãnh liệt vào Việt Nam. Chúng tôi đầu tư vào đất nước, lực lượng lao động, năng lượng và tương lai của Việt Nam.',
  cta: 'Tìm hiểu VinaCapital',
  img: 'skyline-day.jpg'
};

/* Icon hình học cho từng nhóm giải pháp — thay cho ảnh landscape */
const SOL_ICONS = {
  globe: '<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="22" cy="22" r="17" stroke="currentColor" stroke-width="2"/><ellipse cx="22" cy="22" rx="7.5" ry="17" stroke="currentColor" stroke-width="2"/><path d="M5.6 16.5h32.8M5.6 27.5h32.8" stroke="currentColor" stroke-width="2"/></svg>',
  shield: '<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 4.5 38 10v12.2C38 31 31 37.5 22 40 13 37.5 6 31 6 22.2V10L22 4.5Z" stroke="currentColor" stroke-width="2"/><path d="m15 22 5 5 9-10" stroke="currentColor" stroke-width="2"/></svg>',
  layers: '<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5 40 15 22 25 4 15 22 5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="M4 23.5 22 33.5 40 23.5M4 31 22 41l18-9.5" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>'
};

const SOLUTIONS = {
  label: 'Các giải pháp đầu tư của VinaCapital',
  title: 'Chia sẻ sự tăng trưởng của Việt Nam',
  intro: 'Là tập đoàn quản lý tài sản đa lĩnh vực hàng đầu tại Việt Nam, VinaCapital cung cấp cho các nhà đầu tư trong và ngoài nước các cơ hội đầu tư để chia sẻ sự tăng trưởng của Việt Nam.',
  cta: 'Khám phá các giải pháp',
  items: [
    { no: '01', tag: 'Global', ico: 'globe', title: 'Quỹ đầu tư ngoài nước', desc: 'Kết nối nguồn vốn quốc tế với những cơ hội nổi bật của nền kinh tế Việt Nam thông qua nền tảng quản lý đầu tư giàu kinh nghiệm.' },
    { no: '02', tag: 'Domestic', ico: 'shield', title: 'Quỹ đầu tư trong nước', desc: 'Hệ sinh thái quỹ mở và ETF đa dạng, phù hợp với nhiều mục tiêu tài chính và khẩu vị rủi ro của nhà đầu tư Việt Nam.' },
    { no: '03', tag: 'Alternatives', ico: 'layers', title: 'Đầu tư thay thế', desc: 'Giải pháp chuyên biệt trong công nghệ, năng lượng sạch, hạ tầng và bất động sản, kiến tạo giá trị dài hạn.' }
  ]
};

const NEWS = {
  label: 'Tin tức & Phân tích',
  title: 'Thông tin cập nhật từ VinaCapital',
  cta: 'Xem tất cả',
  lead: {
    date: '20/08/2026',
    title: 'VinaCapital tăng cường hợp tác, chia sẻ chuyên môn để tạo giá trị bền vững',
    img: 'investor.jpg',
    alt: 'Lãnh đạo VinaCapital trao đổi cùng đối tác'
  },
  rows: [
    ['19/08/2026', 'VinaCapital hợp tác cùng Chứng khoán MB phân phối chứng chỉ quỹ mở'],
    ['29/07/2026', 'Bổ sung Chứng khoán Vietcombank vào danh sách đại lý phân phối chứng chỉ quỹ mở VinaCapital'],
    ['16/06/2026', 'VinaCapital niêm yết hai quỹ ETF chiến lược đầu tiên tại Việt Nam'],
    ['12/06/2026', 'VinaCapital cập nhật tên và chiến lược đầu tư các quỹ mở'],
    ['18/04/2026', 'VinaCapital được chọn để cùng dẫn dắt Quỹ Đầu tư Mạo hiểm Thành phố Hồ Chí Minh']
  ]
};

/* Phân tích — một dải ngang duy nhất đặt dưới khối tin tức */
const INSIGHT = {
  tag: 'Phân tích mới nhất',
  mark: 'VIFC',
  date: '05/08/2026',
  title: 'Trung tâm Tài chính Quốc tế Việt Nam (VIFC): Không phải là Dubai tiếp theo',
  desc: 'Góc nhìn chuyên môn từ đội ngũ VinaCapital về các động lực định hình thị trường vốn.',
  cta: 'Xem phân tích'
};

const ASSETS = {
  label: 'Nền tảng đa tài sản',
  title: 'Bảy loại tài sản trong<br>hệ sinh thái VinaCapital',
  intro: 'Bảy nhóm tài sản vận hành trên cùng một khung quản trị rủi ro và quy trình đầu tư nhất quán, cho phép nhà đầu tư tiếp cận tăng trưởng của Việt Nam ở nhiều tầng khác nhau.',
  items: [
    { name: 'Cổ phiếu niêm yết', note: 'Listed Equity' },
    { name: 'Trái phiếu', note: 'Fixed Income' },
    { name: 'Vốn cổ phần tư nhân', note: 'Private Equity' },
    { name: 'Đầu tư công nghệ', note: 'Venture Capital' },
    { name: 'Năng lượng sạch & Hạ tầng', note: 'Energy & Infrastructure' },
    { name: 'Bất động sản', note: 'Real Estate' },
    { name: 'Tín chỉ carbon', note: 'Carbon Credits' }
  ]
};

const ESG = {
  label: 'ESG',
  title: 'Đầu tư có trách nhiệm',
  desc: 'VinaCapital khát vọng chia sẻ và lan tỏa sự thịnh vượng. Chúng tôi nghiên cứu, tìm tòi và đầu tư để mang đến sự khác biệt cho cộng đồng mà chúng tôi phục vụ, cũng như không ngừng theo đuổi mục tiêu vì một tương lai phát triển mạnh mẽ của Việt Nam.',
  cta: 'Xem thêm',
  img: 'wind-farm.jpg'
};

const PRESENCE = {
  label: 'Sự hiện diện của chúng tôi',
  title: 'Năng lực được xây dựng qua hơn hai thập kỷ',
  intro: 'Từ năm 2003, VinaCapital phát triển thành nền tảng quản lý tài sản đa lĩnh vực với đội ngũ chuyên gia trong nước và quốc tế.',
  stats: [
    ['3,8 tỷ USD', 'Tổng tài sản quản lý'],
    ['200+', 'Đội ngũ nhân sự'],
    ['7', 'Loại tài sản'],
    ['23', 'Năm kinh nghiệm']
  ],
  offices: [
    ['Thành phố Hồ Chí Minh', 'Lầu 17, Tòa nhà Sunwah · 115 Nguyễn Huệ<br>+84 28 3821 9930'],
    ['Hà Nội', 'Lầu 2, International Centre · 17 Ngô Quyền<br>+84 24 3936 4630'],
    ['Singapore', '#42-01, Suntec Tower 4 · 6 Temasek Boulevard<br>+65 6332 9081']
  ]
};

const FRAUD = {
  label: 'Bảo vệ nhà đầu tư',
  title: 'Cảnh báo lừa đảo',
  intro: 'Nhằm bảo vệ nhà đầu tư trước các hành vi giả mạo và gian lận lợi dụng thương hiệu và uy tín của VinaCapital, chúng tôi xin lưu ý những thông tin quan trọng sau:',
  points: [
    'VinaCapital không thực hiện bất kỳ hoạt động tuyển dụng trực tuyến nào, bao gồm tuyển dụng việc làm từ xa, công việc tự do hoặc làm việc tại nhà.',
    'VinaCapital hiện tại không thực hiện mời gọi nhà đầu tư tham gia các nhóm đầu tư chứng khoán thông qua Facebook, Zalo, Telegram, WhatsApp, Viber, Messenger hoặc bất kỳ nền tảng mạng xã hội hoặc nhắn tin nào khác.',
    'Chứng chỉ quỹ mở chỉ được giao dịch thông qua ứng dụng MiO hoặc các ứng dụng của đại lý phân phối chính thức.',
    'Nhà đầu tư cần xác thực thông tin chuyên viên tư vấn quỹ trước khi thực hiện bất kỳ giao dịch nào.',
    'Mọi giao dịch chỉ được thực hiện qua tài khoản ngân hàng chính danh của quỹ do VinaCapital công bố.'
  ]
};

/* -------------------------------------------------------------------------
   Mảnh dùng chung
   ------------------------------------------------------------------------- */
/* Ảnh lớn giới thiệu cho cả một phần nội dung: icon góc đỏ (bản gốc icon-corner.svg) */
const corner = () => '<span class="corner" aria-hidden="true"><i></i><i></i></span>';
const mark = '<svg viewBox="0 0 54 53" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="54" height="53" fill="#cb2b1a"/><path d="M0 0H54L27 53Z" fill="#BCBDC0"/></svg>';
const logo = () => `<a class="logo" href="#" aria-label="VinaCapital">${mark}<b>VinaCapital</b></a>`;

function render() {
  return `
<header class="hdr">
  <div class="wrap hdr__in">
    ${logo()}
    <nav class="hdr__nav">${NAV.map((n, i) => `<a href="#" class="${i === 0 ? 'is-on' : ''}">${n}</a>`).join('')}</nav>
    <div class="hdr__end">
      <span class="hdr__lang"><b>VI</b><s>/</s>EN</span>
      <a class="hdr__mio" href="#">MiO</a>
      <button class="hdr__burger" aria-label="Mở menu">☰</button>
    </div>
  </div>
</header>

<section class="hero">
  <div class="hero__ken">
    <img class="hero__img" src="${IMG}${HERO.img}" alt="${HERO.alt}" fetchpriority="high">
  </div>
  <span class="hero__scrim" aria-hidden="true"></span>
  <span class="hero__shapes" aria-hidden="true"><i class="hero__sh-grey"></i><i class="hero__sh-red"></i></span>
  <div class="hero__in">
    <div class="hero__copy">
      <p class="eyebrow eyebrow--rule hero__label">${HERO.label}</p>
      <h1>${HERO.lines.map(l => `<span>${l}</span>`).join('')}</h1>
      <p class="hero__lead">${HERO.body}</p>
      <div class="hero__act">
        <a class="btn" href="#about">${HERO.cta} <i>→</i></a>
        <button class="hero__play" aria-label="Xem video giới thiệu">▶</button>
      </div>
    </div>
    <div class="hero__foot">
      <span>${HERO.foot}</span>
      <a class="hero__scroll" href="#about">Cuộn để khám phá <i>↓</i></a>
    </div>
  </div>
</section>

<section class="about" id="about">
  <div class="wrap about__grid">
    <div class="about__media">
      <img src="${IMG}${ABOUT.img}" alt="Thành phố Hồ Chí Minh nhìn từ trên cao" loading="lazy">
      ${corner()}
      <div class="about__on">
        <p class="eyebrow eyebrow--rule">${ABOUT.label}</p>
        <h2>${ABOUT.heading}</h2>
      </div>
    </div>
    <div class="about__card">
      <blockquote>${ABOUT.quote}</blockquote>
      <a class="btn btn--ghost" href="#">${ABOUT.cta} <i>→</i></a>
    </div>
  </div>
</section>

<section class="sol" id="solutions">
  <div class="sol__band">
    <div class="wrap sol__head">
      <div>
        <p class="eyebrow eyebrow--rule">${SOLUTIONS.label}</p>
        <h2>${SOLUTIONS.title}</h2>
      </div>
      <div class="sol__aside">
        <p>${SOLUTIONS.intro}</p>
        <a class="btn btn--light" href="#">${SOLUTIONS.cta} <i>→</i></a>
      </div>
    </div>
  </div>
  <div class="wrap sol__body">
    <div class="sol__grid">
      ${SOLUTIONS.items.map(s => `<article class="sol__card">
        <span><b>${s.no}</b>${s.tag}</span>
        <span class="sol__ico">${SOL_ICONS[s.ico]}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a class="tlink" href="#">Tìm hiểu <i>→</i></a>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="news" id="news">
  <div class="wrap">
    <div class="news__head">
      <div><p class="eyebrow eyebrow--rule">${NEWS.label}</p><h2>${NEWS.title}</h2></div>
      <a class="tlink" href="#">${NEWS.cta} <i>→</i></a>
    </div>
    <div class="news__grid">
      <a class="news__lead" href="#">
        <div class="media"><img src="${IMG}${NEWS.lead.img}" alt="${NEWS.lead.alt}" loading="lazy"></div>
        <time>${NEWS.lead.date}</time>
        <h3>${NEWS.lead.title}</h3>
        <span class="tlink">Đọc tin <i>→</i></span>
      </a>
      <div class="news__list">
        ${NEWS.rows.map(r => `<a class="news__row" href="#"><time>${r[0]}</time><p>${r[1]}</p><span>→</span></a>`).join('')}
      </div>
    </div>
    <a class="pulse" href="#insight">
      <span class="pulse__mark"><b>${INSIGHT.mark}</b></span>
      <span class="pulse__body">
        <span class="pulse__tag">${INSIGHT.tag}<em>${INSIGHT.date}</em></span>
        <span class="pulse__title">${INSIGHT.title}</span>
        <span class="pulse__desc">${INSIGHT.desc}</span>
      </span>
      <span class="pulse__cta">${INSIGHT.cta}<i>→</i></span>
    </a>
  </div>
</section>

<section class="esg" id="esg">
  <div class="wrap esg__grid">
    <div class="esg__media">
      <img src="${IMG}${ESG.img}" alt="Đầu tư có trách nhiệm — năng lượng tái tạo tại Việt Nam" loading="lazy">
      ${corner()}
    </div>
    <div>
      <p class="eyebrow eyebrow--rule">${ESG.label}</p>
      <h2>${ESG.title}</h2>
      <p>${ESG.desc}</p>
      <a class="btn" href="#">${ESG.cta} <i>→</i></a>
    </div>
  </div>
</section>

<section class="assets" data-assets="tree">
  <div class="wrap">
    <div class="assets__head">
      <div><p class="eyebrow eyebrow--rule">${ASSETS.label}</p><h2>${ASSETS.title}</h2></div>
      <div class="assets__aside">
        <p>${ASSETS.intro}</p>
        <div class="swap" role="group" aria-label="Chọn cách trình bày">
          <button data-view="tree" class="is-on">Sơ đồ nhánh</button>
          <button data-view="grid">Lưới 7 ô</button>
        </div>
      </div>
    </div>

    <div class="tree" data-view-panel="tree">
      <div class="tree__hub">
        <b>07</b>
        <span>Loại tài sản</span>
        <em>Một khung quản trị rủi ro · Một quy trình đầu tư</em>
      </div>
      <div class="tree__list">
        ${ASSETS.items.map((a, i) => `<div class="tree__row">
          <b>${String(i + 1).padStart(2, '0')}</b>
          <span>${a.name}</span>
          <i>${a.note}</i>
        </div>`).join('')}
      </div>
    </div>

    <div class="cells" data-view-panel="grid" hidden>
      ${ASSETS.items.map((a, i) => `<article class="cells__box">
        <h3>${a.name}</h3>
        <p>${a.note}</p>
        <b>${String(i + 1).padStart(2, '0')}</b>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="pres">
  <div class="wrap">
    <div class="pres__head">
      <div><p class="eyebrow eyebrow--rule">${PRESENCE.label}</p><h2>${PRESENCE.title}</h2></div>
      <p>${PRESENCE.intro}</p>
    </div>
    <div class="pres__stats">
      ${PRESENCE.stats.map(s => `<article><strong>${s[0]}</strong><span>${s[1]}</span></article>`).join('')}
    </div>
  </div>
</section>

<section class="fraud">
  <div class="wrap">
    <div class="fraud__head">
      <div><p class="eyebrow eyebrow--rule">${FRAUD.label}</p><h2>${FRAUD.title}</h2></div>
      <button class="fraud__t" aria-expanded="false">Xem thông tin quan trọng +</button>
    </div>
    <div class="fraud__b">
      <p>${FRAUD.intro}</p>
      <ul>${FRAUD.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
  </div>
</section>

<footer class="ftr" id="contact">
  <div class="wrap">
    <div class="ftr__grid">
      <div>
        ${logo()}
        <p style="margin-top:18px;max-width:34ch">Tập đoàn quản lý đầu tư đa ngành hàng đầu tại Việt Nam — đồng hành phát triển phồn vinh từ năm 2003.</p>
      </div>
      ${PRESENCE.offices.map(o => `<div><h4>${o[0]}</h4><p>${o[1]}</p></div>`).join('')}
    </div>
    <div class="ftr__legal">
      <p>Copyright © 2024 VinaCapital. All rights reserved.</p>
      <nav><a href="#">Điều Kiện &amp; Điều Khoản Sử Dụng</a><a href="#">Chính Sách Bảo Mật</a><a href="#">Tuyển dụng</a></nav>
    </div>
  </div>
</footer>`;
}

/* -------------------------------------------------------------------------
   Tương tác
   ------------------------------------------------------------------------- */
function init(root) {
  root.querySelectorAll('.fraud__t').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.closest('.fraud').querySelector('.fraud__b');
      const open = body.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? 'Ẩn thông tin −' : 'Xem thông tin quan trọng +';
    });
  });

  /* tagline mờ rồi nổi dần lên khi vào trang */
  const hero = root.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('is-in'));

  /* Bảy loại tài sản — chuyển giữa hai cách trình bày */
  root.querySelectorAll('[data-assets]').forEach(sec => {
    sec.querySelectorAll('[data-view]').forEach(btn => {
      btn.addEventListener('click', () => {
        const v = btn.dataset.view;
        sec.dataset.assets = v;
        sec.querySelectorAll('[data-view]').forEach(b => b.classList.toggle('is-on', b === btn));
        sec.querySelectorAll('[data-view-panel]').forEach(pnl => { pnl.hidden = pnl.dataset.viewPanel !== v; });
      });
    });
  });
}

const root = document.getElementById('site');
root.innerHTML = render();
init(root);
