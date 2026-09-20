/* ==========================================================================
   TIN TỨC & PHÂN TÍCH — giữ nguyên tuyến nội dung
   vinacapital.com/vi/news-insights
   Năm phần như trang gốc: Tin mới nhất · Phân tích · Videos · Báo cáo vĩ mô ·
   Việt Nam qua các con số. Danh sách rút gọn cho bản demo.

   NGẮT DÒNG: tiêu đề đã có `text-wrap:balance` trong style.css. Chỗ nào không
   được phép tách (tên riêng, cụm định danh) thì buộc bằng &nbsp; ngay tại đây.
   ========================================================================== */

const LEADNEWS = 'Press releases, market insights, monthly macroeconomic reports and video programs produced by VinaCapital’s research team.';

/* Tin nổi bật đầu trang */
const HEADLINE = {
  date: '20/08/2026',
  cat: 'News',
  img: 'news/news-1.webp',
  title: 'VinaCapital deepens its partnerships and shares expertise to create lasting value for partners and clients',
  excerpt: 'At VinaCapital, we believe a successful partnership goes well beyond the distribution of investment products. Real value is created when both sides share expertise, experience and market perspective to bring clients the solutions that suit them best.'
};

const NEWS_ROWS = [
  ['19/08/2026', 'VinaCapital partners with MB Securities to distribute open-ended fund certificates', 'News'],
  ['29/07/2026', 'Addition of Vietcombank Securities Company, Ltd to the list of distribution partner for VinaCapital’s open-ended funds', 'News'],
  ['16/06/2026', 'VinaCapital Lists Vietnam’s First Two Strategic-Beta ETFs', 'News'],
  ['12/06/2026', 'VinaCapital Updates Names and Investment Strategies of Its Open-Ended Funds', 'News'],
  ['14/05/2026', 'VinaCapital partners with CV Securities to distribute open-ended fund certificates', 'News'],
  ['18/04/2026', 'VinaCapital Selected to Co-Lead HCMC’s Venture Capital Fund Supporting Innovation Ecosystem', 'News']
];

/* Ảnh minh hoạ cho ba tin có hình gốc */
const NEWS_CARDS = [
  ['19/08/2026', 'A new partnership with MB Securities', 'Extending the distribution network for open-ended fund certificates to individual investors nationwide.', 'news/news-2.webp'],
  ['16/06/2026', 'Vietnam’s first two strategic-beta ETFs', 'VN50 Growth and VNMITECH are now listed, adding a low-cost passive option for investors.', 'news/news-3.webp'],
  ['18/04/2026', 'Co-leading HCMC’s Venture Capital Fund', 'VinaCapital has been selected to co-lead the first venture capital fund initiated by the city.', 'news/news-4.webp']
];

/* Phân tích — tab theo năm như trang gốc */
const INSIGHTS = {
  years: ['2026', '2025', '2024'],
  '2026': [
    ['22/06/2026', 'Vietnam’s International Financial Center (VIFC): Not the Next Dubai'],
    ['04/06/2026', 'Priced for Crisis, Primed for Growth: Vietnam’s Bifurcated Stock Market'],
    ['05/03/2026', 'Iran War: Modest Impact on Vietnam'],
    ['29/01/2026', 'Vietnam’s Path to an Investment-Grade Rating'],
    ['22/01/2026', 'Looking Ahead at 2026']
  ]
};

const VIDEOS = {
  label: 'Videos',
  title: 'Perspectives from our investment team',
  intro: 'Panel discussions and thematic conversations recorded at VinaCapital’s annual Investor Conference.',
  items: [
    ['29/07/2026', '1H26 Vietnam Review &amp; Outlook', 'investor.jpg'],
    ['06/11/2025', 'Outlook for Vietnam’s Economy', 'hcm-financial-district.jpg'],
    ['08/11/2025', 'Funding Vietnam’s Next Phase of Growth', 'bridge.jpg'],
    ['08/11/2025', 'Outlook on Vietnam’s Stock Market', 'landmark-night.jpg'],
    ['08/11/2025', 'Unlocking Value in Vietnam’s Private Markets', 'infrastructure.jpg'],
    ['08/11/2025', 'Connecting the Future: Building Vietnam’s Infrastructure', 'vietnam-infrastructure-sunset.jpg']
  ]
};

const MACRO = {
  label: 'Monthly macro reports',
  title: 'Vietnam’s economy month by month',
  intro: 'Macro commentary compiled by our research team, bringing together the key data and short notes on the main indicators.',
  items: [
    ['Vietnam Macroeconomic Commentary: July 2026', '18/08/2026'],
    ['Vietnam Macroeconomic Commentary: June 2026', '28/07/2026'],
    ['Vietnam Macroeconomic Commentary: May 2026', '28/07/2026'],
    ['Vietnam Macroeconomic Commentary: April 2026', '18/05/2026']
  ]
};

VC.mountPage({
  page: 'news',
  hero: {
    img: 'city-aerial-night.jpg',
    crumb: 'News & Insights',
    eyebrow: 'Information hub',
    title: 'News &amp;<br>Investment Insights',
    lead: LEADNEWS
  },
  body: `
<nav class="subnav" aria-label="Page contents">
  <div class="wrap subnav__in">
    <a href="#tin-moi">Latest news</a>
    <a href="#phan-tich">Insights</a>
    <a href="#videos">Videos</a>
    <a href="#vi-mo">Macro reports</a>
    <a href="#con-so">Vietnam by Numbers</a>
  </div>
</nav>

<section class="sect" id="tin-moi">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">Latest news</p><h2>News from VinaCapital</h2></div>
      <p>Official announcements on products, distribution partners and the Group’s milestones.</p>
    </div>

    <a class="feat" href="#">
      <div class="feat__media"><img src="${IMG}${HEADLINE.img}" alt="" aria-hidden="true" fetchpriority="high"></div>
      <div>
        <p class="feat__meta"><b>${HEADLINE.cat}</b><i>·</i><time>${HEADLINE.date}</time></p>
        <h3>${HEADLINE.title}</h3>
        <p>${HEADLINE.excerpt}</p>
        <span class="tlink">Read the article <i>→</i></span>
      </div>
    </a>

    <div class="nlist">
      ${NEWS_ROWS.map(n => `<a class="nrow" href="#">
        <time>${n[0]}</time>
        <h3>${n[1]}</h3>
        <span>${n[2]}</span>
      </a>`).join('')}
    </div>

    <div class="cards" style="margin-top:clamp(34px,3.6vw,52px)">
      ${NEWS_CARDS.map(c => `<a class="card" href="#">
        <div class="card__media"><img src="${IMG}${c[3]}" alt="" aria-hidden="true" loading="lazy"></div>
        <div class="card__b">
          <p class="feat__meta"><time>${c[0]}</time></p>
          <h3 style="margin-top:12px">${c[1]}</h3>
          <p>${c[2]}</p>
          <span class="tlink">View details <i>→</i></span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="sect sect--paper" id="phan-tich">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">Insights</p><h2>Latest insights</h2></div>
      <p>Our research team’s perspective on the macro picture, capital markets and the themes shaping Vietnam’s economy.</p>
    </div>
    <div data-tabs>
      <div class="tabs" role="tablist">
        ${INSIGHTS.years.map((y, i) => `<button role="tab" data-tab="${y}" class="${i === 0 ? 'is-on' : ''}" aria-selected="${i === 0}">${y}</button>`).join('')}
      </div>
      ${INSIGHTS.years.map((y, i) => `<div data-tab-panel="${y}"${i === 0 ? '' : ' hidden'}>
        ${INSIGHTS[y]
          ? `<div class="nlist">${INSIGHTS[y].map(a => `<a class="nrow" href="#"><time>${a[0]}</time><h3>${a[1]}</h3><span>Insight</span></a>`).join('')}</div>`
          : `<p class="tabs__empty">The ${y} insights archive is loaded from the content management system.</p>`}
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="sect" id="videos">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${VIDEOS.label}</p><h2>${VIDEOS.title}</h2></div>
      <p>${VIDEOS.intro}</p>
    </div>
    <div class="vids">
      ${VIDEOS.items.map(v => `<a class="vid" href="#">
        <div class="vid__media">
          <img src="${IMG}${v[2]}" alt="" aria-hidden="true" loading="lazy">
          <span class="vid__play" aria-hidden="true">▶</span>
        </div>
        <time>${v[0]}</time>
        <h3>${v[1]}</h3>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="sect sect--sand" id="vi-mo">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${MACRO.label}</p><h2>${MACRO.title}</h2></div>
      <p>${MACRO.intro}</p>
    </div>
    <div class="rows">
      ${MACRO.items.map(m => `<a class="row2" href="#">
        <h3>${m[0]}</h3>
        <time>${m[1]}</time>
        <i>Download PDF ↓</i>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="band" id="con-so">
  <div class="band__bg"><img src="${IMG}hcm-light-trails.jpg" alt="" aria-hidden="true" loading="lazy"></div>
  <span class="band__scrim" aria-hidden="true"></span>
  <div class="wrap band__in">
    <p class="eyebrow eyebrow--rule">Vietnam by Numbers</p>
    <h2>Vietnam by<br>the numbers</h2>
    <p>A set of key economic and sector data compiled by VinaCapital’s research team, updated each month as charts and tables — with limited commentary, so the data can do the talking.</p>
    <a class="btn" href="#">View the latest data set <i>→</i></a>
  </div>
</section>

<section class="cta">
  <div class="wrap cta__in">
    <div>
      <h2>Subscribe to VinaCapital insights</h2>
      <p>Monthly macro reports, market insights and product updates delivered straight to your inbox.</p>
    </div>
    <a class="btn" href="contact.html">Subscribe now <i>→</i></a>
  </div>
</section>
`
});
