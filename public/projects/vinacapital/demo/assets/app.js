/* ==========================================================================
   VinaCapital — Option 01 · Bold Editorial
   Homepage. Copy follows the official English site (vinacapital.com/en).

   Client feedback applied 18/09/2026:
   · hero is a still image, no video — IT flagged page weight on WordPress
   · brand wedges pulled to the right edge so the skyline stays crisp
   · "Seven asset classes" promoted to sit directly under Investment Solutions,
     sharing one card language but kept as its own section
   · "Our Presence" figures are no longer boxed in
   ========================================================================== */

const HERO = {
  label: 'Vietnam’s leading multi-disciplinary investment manager',
  lines: ['Creating value', 'from Vietnam’s', 'remarkable growth'],
  body: 'As Vietnam’s leading multi-disciplinary investment manager, we are uniquely positioned to create value and share the opportunities and benefits of the country’s growth across every asset class.',
  cta: 'About us',
  /* Ảnh tĩnh thay cho video: nhẹ hơn ~85% và nét hơn sau khi khử mù + tăng nét */
  still: 'skyline-dusk',
  alt: 'Ho Chi Minh City waterfront seen from above',
  foot: 'Vietnam · Long-term growth',
  scroll: 'Scroll to explore'
};

const ABOUT = {
  label: 'Creating Prosperity Together',
  heading: 'A long-term belief<br>in Vietnam',
  quote: 'VinaCapital passionately believes in Vietnam. We invest in the country, its workforce, its energy, and its future.',
  cta: 'Who we are',
  img: 'skyline-day.jpg',
  alt: 'Ho Chi Minh City skyline'
};

const SOLUTIONS = {
  label: 'VinaCapital Investment Solutions',
  title: 'Share in Vietnam’s growth',
  intro: 'As Vietnam’s leading multi-disciplinary asset manager, we offer local and international investors a range of opportunities to share in the country’s growth.',
  cta: 'Explore our solutions',
  items: [
    { no: '01', tag: 'Global', title: 'Offshore Funds', desc: 'Connecting international capital with Vietnam’s most compelling opportunities through an experienced, locally grounded investment platform.' },
    { no: '02', tag: 'Domestic', title: 'Onshore Funds', desc: 'A full ecosystem of open-ended funds and ETFs built around the objectives and risk appetites of Vietnamese investors.' },
    { no: '03', tag: 'Alternatives', title: 'Alternative Investments', desc: 'Specialist strategies across technology, clean energy, infrastructure and real estate that create value over the long term.' }
  ],
  more: 'Find out more'
};

/* Bảy loại tài sản — section riêng, đặt ngay dưới Giải pháp đầu tư.
   Hai khối liên kết về nội dung nên dùng chung ngôn ngữ thẻ, nhưng vẫn tách
   section để giữ ý nghĩa riêng. Không link, không hover: đây là cụm thông tin. */
const ASSETS = {
  label: 'One multi-asset platform',
  title: 'Seven asset\u00A0classes',
  intro: 'Every asset class runs on the same investment process and risk framework, letting investors access Vietnam’s growth at the level that suits them.',
  items: [
    'Listed Equity',
    'Fixed Income',
    'Private Equity',
    'Venture Capital',
    'Infrastructure &amp; Clean Energy',
    'Real Estate',
    'Carbon Credit'
  ]
};


/* Hai dải ảnh ngang làm "điểm nghỉ" giữa các section.
   Ảnh cao hơn khung và trôi dọc bên trong khi cuộn — khung đứng yên, ảnh chạy.
   Chữ giữ ở mức một câu: đây là chỗ để mắt nghỉ, không phải chỗ đọc. */
const STRIPS = {
  city: {
    img: 'hcm-light-trails.jpg',
    alt: 'Ho Chi Minh City at night',
    eyebrow: 'Vietnam',
    line: 'One country.<br>Every asset\u00A0class.'
  },
  decades: {
    img: 'vietnam-infrastructure-sunset.jpg',
    alt: 'Infrastructure development across Vietnam',
    eyebrow: 'Since 2003',
    line: 'Two decades of<br>building in\u00A0Vietnam.'
  }
};

const NEWS = {
  label: 'News & Insights',
  title: 'Latest from VinaCapital',
  cta: 'View all',
  read: 'Read the story',
  lead: {
    date: '28/10/2025',
    title: 'VinaCapital’s Investor Conference highlights the ‘Vietnam 2.0’ vision',
    img: 'investor.jpg',
    alt: 'VinaCapital leadership on stage at the annual Investor Conference'
  },
  rows: [
    ['29/07/2026', 'Addition of Vietcombank Securities Company, Ltd to the list of distribution partners for VinaCapital’s open-ended funds'],
    ['16/06/2026', 'VinaCapital lists Vietnam’s first two strategic-beta ETFs'],
    ['12/06/2026', 'VinaCapital updates the names and investment strategies of its open-ended funds'],
    ['18/04/2026', 'VinaCapital selected to co-lead HCMC’s venture capital fund supporting the innovation ecosystem'],
    ['23/02/2026', 'Named “Best Asset Management Company” and “Best Equity Manager” in Vietnam by Asia Asset Management']
  ]
};

const INSIGHT = {
  tag: 'Latest insight',
  mark: 'VIFC',
  date: '22/06/2026',
  title: 'Vietnam’s International Financial Center (VIFC): Not the Next Dubai',
  desc: 'Our research team on the forces shaping Vietnam’s capital markets.',
  cta: 'Learn more'
};

const ESG = {
  label: 'ESG & Responsible Investment',
  title: 'Responsible investment',
  desc: 'The soul of our company lies in our desire to share and spread wealth and prosperity. We research, work, and invest to make a difference in the communities we serve, and are tireless in our pursuit of a better future for our clients.',
  cta: 'Learn more',
  img: 'wind-farm.jpg',
  alt: 'Wind farm in Vietnam — responsible investment in clean energy'
};

const PRESENCE = {
  label: 'Our Presence',
  title: 'Capability built over two decades',
  intro: 'Since 2003 VinaCapital has grown into a multi-disciplinary asset management platform staffed by local and international specialists.',
  stats: [
    ['USD 3.8bn', 'Assets under management'],
    ['200+', 'Team members'],
    ['7', 'Asset classes'],
    ['23', 'Years’ experience']
  ]
};

/* -------------------------------------------------------------------------
   IMG, corner, shapes, header, fraudBand, footer, initShared đến từ shared.js
   ------------------------------------------------------------------------- */


/* Một dải nghỉ. `data-px` để motion.js ghi biến --p, CSS lo phần trôi ảnh. */
const strip = (k) => {
  const d = STRIPS[k];
  return `
<section class="strip strip--${k}" data-px aria-hidden="false">
  <div class="strip__bg"><img src="${IMG}${d.img}" alt="${d.alt}" loading="lazy"></div>
  <span class="strip__scrim" aria-hidden="true"></span>
  <div class="wrap strip__in">
    <p class="eyebrow eyebrow--rule" data-rv>${d.eyebrow}</p>
    <p class="strip__line" data-rv style="--d:.1s">${d.line}</p>
  </div>
</section>`;
};

function render() {
  return `
${header('home')}

<section class="hero">
  <div class="hero__ken">
    <picture>
      <source srcset="${IMG}${HERO.still}.webp" type="image/webp">
      <img class="hero__img" src="${IMG}${HERO.still}.jpg" alt="" aria-hidden="true" fetchpriority="high" decoding="async">
    </picture>
  </div>
  <span class="hero__scrim" aria-hidden="true"></span>
  ${shapes()}
  <div class="hero__in">
    <div class="hero__copy">
      <p class="eyebrow eyebrow--rule hero__label">${HERO.label}</p>
      <h1>${HERO.lines.map(l => `<span>${l}</span>`).join('')}</h1>
      <p class="hero__lead">${HERO.body}</p>
      <div class="hero__act">
        <a class="btn" href="about.html">${HERO.cta} <i>→</i></a>
      </div>
    </div>
    <div class="hero__foot">
      <span>${HERO.foot}</span>
      <a class="hero__scroll" href="#about">${HERO.scroll} <i>↓</i></a>
    </div>
  </div>
</section>

<section class="about" id="about">
  <div class="wrap about__grid">
    <div class="about__media" data-px data-rv="left">
      <img src="${IMG}${ABOUT.img}" alt="${ABOUT.alt}" loading="lazy">
      ${corner()}
      <div class="about__on">
        <p class="eyebrow eyebrow--rule" data-rv>${ABOUT.label}</p>
        <h2 data-rv style="--d:.12s">${ABOUT.heading}</h2>
      </div>
    </div>
    <div class="about__card" data-rv="right" style="--d:.18s">
      <blockquote>${ABOUT.quote}</blockquote>
      <a class="btn btn--ghost" href="about.html">${ABOUT.cta} <i>→</i></a>
    </div>
  </div>
</section>

<section class="sol" id="solutions">
  <div class="sol__band" data-rv="wipe">
    <div class="wrap sol__head">
      <div>
        <p class="eyebrow eyebrow--rule" data-rv style="--d:.52s">${SOLUTIONS.label}</p>
        <h2 data-rv style="--d:.62s">${SOLUTIONS.title}</h2>
      </div>
      <div class="sol__aside">
        <p data-rv style="--d:.70s">${SOLUTIONS.intro}</p>
        <a class="btn btn--light" href="solutions.html">${SOLUTIONS.cta} <i>→</i></a>
      </div>
    </div>
  </div>
  <div class="wrap sol__body">
    <div class="sol__grid" data-rv-group>
      ${SOLUTIONS.items.map(s => `<article class="sol__card" data-rv="scale">
        <span><b>${s.no}</b>${s.tag}</span>
        <h3>${s.title}</h3>
        <p>${s.desc}</p>
        <a class="tlink" href="solutions.html">${SOLUTIONS.more} <i>→</i></a>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="assets" id="assets">
  <div class="wrap">
    <div class="assets__head">
      <div>
        <p class="eyebrow eyebrow--rule" data-rv>${ASSETS.label}</p>
        <h2 data-rv style="--d:.08s">${ASSETS.title}</h2>
      </div>
      <p data-rv style="--d:.14s">${ASSETS.intro}</p>
    </div>
    <div class="assets__grid" data-rv-group>
      ${ASSETS.items.map((a, i) => `<article data-rv="rise">
        <b>${String(i + 1).padStart(2, '0')}</b>
        <h3>${a}</h3>
      </article>`).join('')}
    </div>
  </div>
</section>
${strip('city')}

<section class="news" id="news">
  <div class="wrap">
    <div class="news__head">
      <div><p class="eyebrow eyebrow--rule" data-rv>${NEWS.label}</p><h2 data-rv style="--d:.08s">${NEWS.title}</h2></div>
      <a class="tlink" href="news.html" data-rv style="--d:.14s">${NEWS.cta} <i>→</i></a>
    </div>
    <div class="news__grid">
      <a class="news__lead" href="news.html" data-rv="left">
        <div class="media" data-px><img src="${IMG}${NEWS.lead.img}" alt="${NEWS.lead.alt}" loading="lazy"></div>
        <time>${NEWS.lead.date}</time>
        <h3>${NEWS.lead.title}</h3>
        <span class="tlink">${NEWS.read} <i>→</i></span>
      </a>
      <div class="news__list" data-rv-group>
        ${NEWS.rows.map(r => `<a class="news__row" href="news.html" data-rv><time>${r[0]}</time><p>${r[1]}</p><span>→</span></a>`).join('')}
      </div>
    </div>
    <a class="pulse" href="news.html" data-rv="scale">
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
    <div class="esg__media" data-px data-rv="left">
      <img src="${IMG}${ESG.img}" alt="${ESG.alt}" loading="lazy">
      ${corner()}
    </div>
    <div data-rv-group>
      <p class="eyebrow eyebrow--rule" data-rv="right">${ESG.label}</p>
      <h2 data-rv="right">${ESG.title}</h2>
      <p data-rv="right">${ESG.desc}</p>
      <a class="btn" href="esg.html" data-rv="right">${ESG.cta} <i>→</i></a>
    </div>
  </div>
</section>
${strip('decades')}

<section class="pres">
  <div class="wrap">
    <div class="pres__head">
      <div><p class="eyebrow eyebrow--rule" data-rv>${PRESENCE.label}</p><h2 data-rv style="--d:.08s">${PRESENCE.title}</h2></div>
      <p data-rv style="--d:.14s">${PRESENCE.intro}</p>
    </div>
    <div class="pres__stats" data-rv-group>
      ${PRESENCE.stats.map(s => `<article data-rv="rise"><strong data-count>${s[0]}</strong><span>${s[1]}</span></article>`).join('')}
    </div>
  </div>
</section>

${fraudBand()}
${footer()}
${fraudPopup()}`;
}

function init(root) {
  initShared(root);
  /* tagline mờ rồi nổi dần lên khi vào trang */
  const hero = root.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('is-in'));
}

const root = document.getElementById('site');
root.innerHTML = render();
init(root);
