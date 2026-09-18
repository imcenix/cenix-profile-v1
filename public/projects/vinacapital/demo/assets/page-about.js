/* ==========================================================================
   VỀ CHÚNG TÔI — giữ nguyên tuyến nội dung vinacapital.com/vi/about-us
   Danh sách dài (27 lãnh đạo) rút còn nhóm tiêu biểu cho bản demo.
   ========================================================================== */

const INTRO = {
  eyebrow: 'Founded in 2003',
  quote: 'Our mission is to discover the best investment opportunities in Vietnam by leveraging our extensive relationships, local investment knowledge, analytical capabilities and financial expertise.',
  cite: 'Mission statement',
  body: [
    'Proudly Vietnam’s leading multi-disciplinary investment manager, we are uniquely positioned to create value and to share the opportunities and benefits of the country’s growth across every asset class.',
    'Our team is deeply experienced across both traditional and alternative asset classes — listed equity, fixed income, private equity, technology, real estate and clean energy.'
  ]
};

const STATS = [
  ['USD 3.8b', 'Assets Under Management'],
  ['200+', 'Team Members'],
  ['7', 'Asset Classes'],
  ['23', 'Years’ Experience']
];

const VISION = {
  label: 'Our vision',
  title: 'Global knowledge,<br>local insight',
  body: 'We stay true to our core values, combining global knowledge with a deep understanding of the domestic market to deliver outstanding, sustainable long-term returns for both local and international investors.',
  img: 'hcm-financial-district.jpg',
  alt: 'Ho Chi Minh City financial district'
};

const GOV = {
  label: 'Governance',
  title: 'Global standards,<br>consistently applied',
  intro: 'VinaCapital is committed to the highest global corporate governance standards through its policies, procedures, ethical principles, code of conduct, financial controls, reporting and risk management.',
  cta: 'View our Code of Conduct',
  items: [
    {
      t: 'Internal governance framework',
      b: ['Internal policies and procedures cover the full range of our investment and operating activities, and are reviewed regularly and updated in line with international practice.',
          'Every investment decision passes through independent levels of approval, so that no single individual can decide an entire transaction alone.']
    },
    {
      t: 'Conflicts of interest and professional ethics',
      b: ['Our Code of Conduct sets out clearly how conflicts of interest are identified, declared and managed. Employees must declare personal transactions and comply with the rules on inside information.']
    },
    {
      t: 'Regulatory compliance',
      b: ['Our Compliance function operates independently, monitoring adherence to the rules of the State Securities Commission of Vietnam and of the regulators in every market where we operate.']
    },
    {
      t: 'Risk management',
      b: ['Risk management strategies are built for each asset class, with dedicated teams monitoring market, liquidity, credit and operational risk.',
          'Monitoring results are reported regularly to the Executive Board and the Board of Directors.']
    }
  ]
};

const FOUNDATION = {
  label: 'Corporate social responsibility',
  title: 'VinaCapital Foundation',
  body: [
    'Founded in 2006, the VinaCapital Foundation was one of the first large foreign philanthropic organizations registered in Vietnam. It is an American non-profit tax-deductible 501(c)(3) organization licensed as an international NGO in Vietnam.',
    'The Foundation focuses on improving the lives of children and women, reducing poverty and helping build the middle class. One hundred percent of all donations goes to program beneficiaries — VinaCapital covers every operating cost.'
  ],
  cta: 'Learn about VinaCapital Foundation',
  img: 'hcm-heritage.jpg',
  alt: 'VinaCapital Foundation community programs',
  chips: [
    ['32', 'Provinces reached'],
    ['100%', 'Of donations to beneficiaries'],
    ['7', 'Major programs'],
    ['2006', 'Year founded']
  ]
};

const RESP = {
  label: 'Responsible investment',
  title: 'Six commitments under the PRI',
  intro: 'As a signatory of the United Nations-supported Principles for Responsible Investment (UN PRI), VinaCapital reports on its responsible investment activities every year.',
  items: [
    ['Integrating ESG into analysis', 'We incorporate environmental, social and governance criteria into our investment analysis and portfolio decision-making processes.'],
    ['Active ownership', 'We use our voting rights and our influence as an investor to improve the governance of the companies in our portfolio.'],
    ['Seeking ESG disclosure', 'We encourage transparency in discussions around ESG and support the adoption of relevant international standards.'],
    ['Promoting the Principles', 'We promote acceptance and implementation of the UN PRI across the investment management industry in Vietnam.'],
    ['Working together', 'We collaborate with external organizations to share tools and pool resources through investor reporting.'],
    ['Reporting annually', 'As a PRI signatory, we report publicly on our responsible investment activities each year.']
  ]
};

const TEAM = {
  label: 'Leadership',
  title: 'The people who lead us',
  intro: 'Our Board of Directors and senior leadership bring together local and international expertise. Shown below is a representative group; the official site presents all four teams in full.',
  groups: [
    {
      name: 'Board of Directors',
      people: [
        ['Jonathan Choi', 'Chairman', 'jonathan-choi.webp'],
        ['Terence F. Mahony, CFA', 'Vice Chairman', 'terence-mahony.webp'],
        ['Don Lam', 'Chief Executive Officer and Founding Partner', 'don-lam.webp'],
        ['Katherine Yip', 'Non-executive Director', 'katherine-yip.webp']
      ]
    },
    {
      name: 'Senior Leadership Team',
      people: [
        ['Brook Taylor', 'Chief Executive Officer (Asset Management)', 'brook-taylor.webp'],
        ['Alex Hambly', 'Chief Investment Officer', 'alex-hambly.webp'],
        ['Ngô Vĩnh Tuấn', 'Managing Director, Head of Investment of VinaCapital Group', 'ngo-vinh-tuan.webp'],
        ['Nguyễn Hoài Thu, CFA', 'Deputy CEO of VinaCapital Fund Management', 'nguyen-hoai-thu.webp']
      ]
    }
  ]
};

VC.mountPage({
  page: 'about',
  hero: {
    img: 'skyline-day.jpg',
    crumb: 'About us',
    eyebrow: INTRO.eyebrow,
    title: 'Two decades of partnership<br>with Vietnam',
    lead: 'Since 2003, VinaCapital has grown into a multi-asset investment management platform staffed by local and international professionals.'
  },
  body: `
<nav class="subnav" aria-label="Page contents">
  <div class="wrap subnav__in">
    <a href="#gioi-thieu">Overview</a>
    <a href="#tam-nhin">Vision</a>
    <a href="#quan-tri">Governance</a>
    <a href="#foundation">Social responsibility</a>
    <a href="#co-trach-nhiem">Responsible investment</a>
    <a href="#lanh-dao">Leadership</a>
  </div>
</nav>

<section class="sect" id="gioi-thieu">
  <div class="wrap split">
    <div>
      <blockquote class="quote">${INTRO.quote}<cite>${INTRO.cite}</cite></blockquote>
    </div>
    <div class="prose">
      ${INTRO.body.map(p => `<p>${p}</p>`).join('')}
      <div class="chips">
        ${STATS.map(s => `<div><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="sect sect--sand" id="tam-nhin">
  <div class="wrap split split--flip">
    <div class="split__media">
      <img src="${IMG}${VISION.img}" alt="${VISION.alt}" loading="lazy">
      ${corner()}
    </div>
    <div>
      <p class="eyebrow eyebrow--rule">${VISION.label}</p>
      <h3>${VISION.title}</h3>
      <div class="prose"><p>${VISION.body}</p></div>
      <a class="btn" href="solutions.html">View investment solutions <i>→</i></a>
    </div>
  </div>
</section>

<section class="sect" id="quan-tri">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${GOV.label}</p><h2>${GOV.title}</h2></div>
      <div>
        <p>${GOV.intro}</p>
        <a class="tlink" href="#" style="margin-top:20px">${GOV.cta} <i>→</i></a>
      </div>
    </div>
    <div class="acc">
      ${GOV.items.map((it, i) => `<div class="acc__item${i === 0 ? ' is-open' : ''}">
        <button class="acc__t" data-acc aria-expanded="${i === 0}"><h3>${it.t}</h3></button>
        <div class="acc__b">${it.b.map(p => `<p>${p}</p>`).join('')}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="sect sect--paper" id="foundation">
  <div class="wrap split">
    <div class="split__media">
      <img src="${IMG}${FOUNDATION.img}" alt="${FOUNDATION.alt}" loading="lazy">
      ${corner()}
    </div>
    <div>
      <p class="eyebrow eyebrow--rule">${FOUNDATION.label}</p>
      <h3>${FOUNDATION.title}</h3>
      <div class="prose">${FOUNDATION.body.map(p => `<p>${p}</p>`).join('')}</div>
      <div class="chips">
        ${FOUNDATION.chips.map(c => `<div><b>${c[0]}</b><span>${c[1]}</span></div>`).join('')}
      </div>
      <a class="btn btn--ghost" href="#">${FOUNDATION.cta} <i>→</i></a>
    </div>
  </div>
</section>

<section class="sect" id="co-trach-nhiem">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${RESP.label}</p><h2>${RESP.title}</h2></div>
      <p>${RESP.intro}</p>
    </div>
    <div class="numgrid">
      ${RESP.items.map((it, i) => `<article>
        <b>${String(i + 1).padStart(2, '0')}</b>
        <h3>${it[0]}</h3>
        <p>${it[1]}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="sect sect--sand" id="lanh-dao">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${TEAM.label}</p><h2>${TEAM.title}</h2></div>
      <p>${TEAM.intro}</p>
    </div>
    ${TEAM.groups.map((g, gi) => `
      <p class="eyebrow" style="${gi ? 'margin-top:46px;' : ''}margin-bottom:18px">${g.name}</p>
      <div class="team">
        ${g.people.map(p => `<article>
          <span class="team__ph"><img src="${IMG}team/${p[2]}" alt="Portrait of ${p[0]}" loading="lazy"></span>
          <div class="team__b">
            <h3>${p[0]}</h3>
            <p>${p[1]}</p>
          </div>
        </article>`).join('')}
      </div>`).join('')}
  </div>
</section>

<section class="cta">
  <div class="wrap cta__in">
    <div>
      <h2>Get started with VinaCapital</h2>
      <p>Find the investment solution that fits your financial goals, or speak directly with our team.</p>
    </div>
    <a class="btn" href="contact.html">Contact us <i>→</i></a>
  </div>
</section>
`
});
