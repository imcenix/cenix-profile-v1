/* ESG — giữ nội dung và trật tự của trang gốc, tái cấu trúc theo hướng image-led. */
const ESG_IMG = `${IMG}esg/`;

const ESG_STEPS = [
  ['01', 'Screening', 'We apply an ESG exclusion list and identify corporate governance risks at an early stage.'],
  ['02', 'Assessment', 'ESG scoring at company level, ESG risk categorisation and enhanced due diligence for higher-risk deals.'],
  ['03', 'Investment decision', 'We exercise caution with ESG laggards and favour active engagement to support genuine improvement.'],
  ['04', 'Stewardship', 'We exercise our voting rights and engage with companies throughout the life of an investment.']
];

const IMPACTS = [
  {
    image: 'solar-dong-nai.jpg', tag: 'SkyX Solar',
    title: 'Rooftop solar power',
    text: 'Founded in 2019 with EDF Renewables, SkyX Solar has around 100MW of rooftop solar in operation and a further pipeline of about 200MW.'
  },
  {
    image: 'wind-solar.jpg', tag: 'Renewable energy',
    title: 'Wind power for the future',
    text: 'A platform established with EDF Renewables to develop a pipeline of around 500MW of onshore wind projects in the Central Highlands of Vietnam.'
  },
  {
    image: 'long-an-lng.jpg', tag: 'Energy transition',
    title: 'Long An LNG power plant',
    text: 'A previously approved coal-fired power project converted into a 3GW LNG power plant, developed jointly with GS Energy.'
  }
];

VC.mountPage({
  page: 'esg',
  hero: {
    img: 'esg/esg-hero.png',
    crumb: 'ESG',
    eyebrow: 'Environmental · Social · Governance',
    title: 'Responsible investment.<br>Lasting value.',
    lead: 'Managing ESG risk is part of managing investment risk — essential to generating long-term returns for our investors and positive impact for Vietnam.'
  },
  body: `
<nav class="subnav eg-nav" aria-label="Page contents">
  <div class="wrap subnav__in">
    <a href="#cam-ket">Commitment</a><a href="#quy-trinh">ESG process</a><a href="#khi-hau">Climate</a><a href="#vinacarbon">VinaCarbon</a><a href="#cong-dong">Community</a>
  </div>
</nav>

<section class="eg-intro" id="cam-ket">
  <div class="wrap eg-intro__grid">
    <div class="eg-intro__copy">
      <p class="eyebrow eyebrow--rule">In-depth insight into Vietnam since 2003</p>
      <h2>Responsibility is not an extra layer. It is how we invest.</h2>
    </div>
    <div class="eg-intro__body">
      <p>Having operated in Vietnam since 2003, VinaCapital has built deep insight into the country, its business environment and its corporate culture.</p>
      <p>We believe that integrating environmental, social and governance factors into investment analysis helps us identify risk more clearly, while opening up opportunities to create lasting value.</p>
    </div>
  </div>
  <div class="wrap eg-report-row">
    <a class="eg-report eg-report--main" href="#"><span>ESG Annual Report</span><strong>2025</strong><em>Download report <i>↓</i></em></a>
    <a class="eg-report" href="#"><span>ESG Annual Report</span><strong>2024</strong><em>Download report <i>↓</i></em></a>
    <div class="eg-report__note"><b>Transparency year after year</b><p>Progress, targets and the impacts that matter most across everything we invest in.</p></div>
  </div>
</section>

<section class="eg-policy">
  <div class="eg-policy__media"><img src="${IMG}about/responsible-investment-2025.jpg" alt="Responsible investment at VinaCapital" loading="lazy">${corner()}</div>
  <div class="eg-policy__copy">
    <p class="eyebrow">Responsible Investment Policy</p>
    <h2>One framework,<br>every decision</h2>
    <p>Our Responsible Investment Policy sets out how VinaCapital integrates ESG considerations into research, analysis, investment decision-making and stewardship.</p>
    <p>ESG issues are overseen at the highest level by our Group CEO, Group CIO and the Chairman of our ESG Committee, and are put into practice by experienced research and ESG teams.</p>
    <a class="btn btn--ghost" href="#">View the policy <i>↗</i></a>
  </div>
</section>

<section class="eg-process" id="quy-trinh">
  <div class="wrap">
    <header class="eg-head">
      <div><p class="eyebrow eyebrow--rule">ESG integration</p><h2>From screening to stewardship</h2></div>
      <p>A four-step process that keeps ESG present across the life of an investment, rather than as a final check at the end.</p>
    </header>
    <div class="eg-steps">
      ${ESG_STEPS.map(([n,t,d]) => `<article><span>${n}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}
    </div>
    <blockquote>A poor ESG score does not automatically rule a company out. What matters is that its leadership understands the issues and has a sincere commitment to improving.</blockquote>
  </div>
</section>

<section class="eg-climate" id="khi-hau">
  <div class="wrap eg-head eg-head--climate">
    <div><p class="eyebrow eyebrow--rule">Thematic investment</p><h2>Energy and climate change</h2></div>
    <p>Clean energy is a key area of focus for VinaCapital, supporting Vietnam’s transition away from coal-based generation.</p>
  </div>
  <div class="wrap eg-impact-grid">
    ${IMPACTS.map((item, i) => `<article class="eg-impact">
      <div class="eg-impact__media"><img src="${ESG_IMG}${item.image}" alt="${item.title}" loading="lazy">${i === 0 ? corner() : ''}</div>
      <div class="eg-impact__copy"><p>${item.tag}</p><h3>${item.title}</h3><span>${item.text}</span></div>
    </article>`).join('')}
  </div>
</section>

<section class="eg-carbon" id="vinacarbon">
  <div class="wrap eg-carbon__grid">
    <div class="eg-carbon__media"><img src="${ESG_IMG}vinacarbon.png" alt="VinaCarbon sustainable forestry initiative" loading="lazy">${corner()}</div>
    <div class="eg-carbon__copy">
      <p class="eyebrow">VinaCarbon</p>
      <h2>Sustainable returns. Real impact.</h2>
      <p>In 2025, VinaCapital announced its first pilot sustainable forestry investment, covering 1,000 hectares in northern Vietnam and replanting areas destroyed by typhoon Yagi in 2024.</p>
      <div class="eg-carbon__facts"><span><b>1,000</b> hectares of forest</span><span><b>50</b> skilled local jobs</span><span><b>2.5 tons</b> CO₂ / ha / year</span></div>
    </div>
  </div>
</section>

<!-- Feedback 24/09: gộp "An ecosystem with a shared goal" và khối vuông nhỏ
     "circular economy" bên dưới thành một section. Ảnh không có chữ nên
     dùng bản đã trả lại độ sáng gốc (ảnh gốc trên web khách bị phủ tối sẵn). -->
<section class="eg-partners">
  <div class="wrap eg-partners__grid">
    <div class="eg-partners__copy">
      <p class="eyebrow eyebrow--rule">Collaborating for change</p>
      <h2>An ecosystem with a shared goal</h2>
      <p>VinaCapital collaborates with leading global and local organisations to bring ESG best practices to Vietnam. We have been a signatory to the PRI since October 2018 and are a founding member and Platinum member of VIOD.</p>
      <div class="eg-logos"><img src="${IMG}about/Principles-for-Responsible-Investment-_-PRI.png" alt="Principles for Responsible Investment"><img src="${ESG_IMG}viod.png" alt="Vietnam Institute of Directors"></div>
      <div class="eg-circular">
        <img src="${ESG_IMG}circular-economy.png" alt="Institute for Circular Economy Development">
        <div><p class="eyebrow">Environmental initiative</p><h3>Advancing the circular economy in Vietnam</h3><p>VinaCapital is a founder and principal sponsor of the Institute for Circular Economy Development under Vietnam National University Ho Chi Minh City.</p></div>
      </div>
    </div>
    <div class="eg-partners__media"><img src="${ESG_IMG}collaboration-lit.jpg" alt="Collaborating for sustainable development" loading="lazy"></div>
  </div>
</section>

<section class="eg-social" id="cong-dong">
  <div class="eg-social__media"><img src="${ESG_IMG}community-lit.jpg" alt="Social responsibility and community" loading="lazy"></div>
  <div class="eg-social__copy">
    <p class="eyebrow">People and communities</p>
    <h2>Growing with the places where we live and work</h2>
    <p>We take social responsibility seriously, in our business and through programmes for the wider community. Within the firm, VinaCapital fosters a supportive work culture with employee-friendly policies and benefits, regular training programmes and structured, merit-based career progression.</p>
    <p>VinaCapital has been named the “Best Place to Work” in Vietnam’s financial services industry in 2020 and ranked among the “100 Best Places to Work” in Vietnam.</p>
    <a class="tlink" href="about.html">Learn about VinaCapital <i>→</i></a>
  </div>
</section>`
});
