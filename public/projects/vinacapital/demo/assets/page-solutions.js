/* ==========================================================================
   GIẢI PHÁP ĐẦU TƯ — giữ nguyên tuyến nội dung
   vinacapital.com/vi/investment-solutions
   13 quỹ rút còn nhóm tiêu biểu cho bản demo; cấu trúc khối giữ nguyên.
   ========================================================================== */

const LEAD = 'As Vietnam’s leading multi-disciplinary asset manager, VinaCapital offers local and international investors the opportunity to share in Vietnam’s growth across seven asset classes.';

const DO3 = ['Fund Performance', 'How to Invest', 'Fund Details'];

const OFFSHORE = {
  label: 'Offshore funds',
  title: 'Connecting international capital',
  intro: 'A listed fund and an open-ended fund for international investors seeking access to Vietnam’s growth.',
  items: [
    ['VinaCapital Vietnam Opportunity Fund', 'VOF · LSE FTSE 250', 'A closed-end fund listed on the London Stock Exchange, giving investors unique access to Vietnam’s growth through a combination of private equity and listed equity.'],
    ['VCG Partners Vietnam Fund', 'VVF · Open-ended fund', 'A professionally managed open-ended fund investing in government and corporate bonds, aiming for capital preservation and steady growth over the long term.']
  ]
};

const ONSHORE = {
  label: 'Onshore open-ended funds',
  title: 'Seven open-ended funds for every risk appetite',
  intro: 'An ecosystem of equity, balanced and bond funds, traded through the MiO app and official distribution agents.',
  items: [
    ['VINACAPITAL-VEOF', 'Equity', 'Invests in the listed shares of leading enterprises with distinctive competitive advantages.'],
    ['VINACAPITAL-VESAF', 'Small & mid-cap equity', 'Focuses on small and mid-cap stocks, including those that have reached their foreign ownership limit.'],
    ['VINACAPITAL-VMEEF', 'Thematic equity', 'Tied to Vietnam’s economic growth engines, such as urbanization and the expansion of the middle class.'],
    ['VINACAPITAL-VIBF', 'Balanced', 'Combines equities and bonds, giving access to equity upside while limiting risk.'],
    ['VINACAPITAL-VFF', 'Fixed income', 'Aims to generate a higher return than the 12-month deposit rate over the long term.'],
    ['VINACAPITAL-VLBF', 'Liquidity bond', 'Targets capital preservation and stable returns with daily liquidity.']
  ]
};

const ETF = {
  label: 'Exchange-traded funds',
  title: 'Three index-tracking ETFs',
  intro: 'Low-cost passive strategies that replicate the benchmark indices of the Vietnamese market.',
  items: [
    ['VinaCapital VN100 ETF', 'VN100', 'Replicates the VN100 benchmark index — the 100 largest and most liquid stocks on the market.'],
    ['VinaCapital VN50 Growth ETF', 'FUEVN50G', 'Grow alongside 50 leading Vietnamese companies through the VN50 GROWTH index.'],
    ['VinaCapital VNMITECH ETF', 'FUEMITEC', 'Positioned for Vietnam’s modern industrial era, focusing on the Industrials, Technology and Materials sectors.']
  ]
};

const SERVICES = {
  label: 'Investment services',
  title: 'Tailored solutions for every need',
  items: [
    ['Segregated accounts', 'VinaCapital Investment Portfolio Services (VIPS) is a managed account product designed for high net worth clients.', 'investor.jpg'],
    ['Insurance-linked products', 'A two-in-one life insurance plan that combines protection and investment within a single policy.', 'bridge.jpg'],
    ['WealthBuilder', 'A long-term savings and benefits program that aligns the interests of employers and their people.', 'hcm-financial-district.jpg']
  ]
};

const ALT = {
  label: 'Alternative investments',
  title: 'Beyond the listed market',
  intro: 'VinaCapital’s alternative investment platform spans technology, real estate, infrastructure, energy and private equity.',
  items: [
    {
      t: 'Venture capital',
      d: 'VinaCapital Ventures is a USD100 million platform focused on investing in and building world-class technology companies in Vietnam.',
      href: 'https://ventures.vinacapital.com/',
      tags: [['VinaCapital Ventures', 'https://ventures.vinacapital.com/'], ['USD100 million']]
    },
    {
      t: 'Real estate',
      d: 'VinaLiving has pioneered resort-style residential developments since 2010. Lodgis is a leading hospitality platform in Southeast Asia, and Hoiana is the largest tourism township in Central Vietnam.',
      href: 'https://vinaliving.com.vn/en/',
      tags: [['VinaLiving', 'https://vinaliving.com.vn/en/'], ['Lodgis', 'https://lodgis.sg/'], ['Hoiana', 'https://www.hoiana.com/']]
    },
    {
      t: 'Infrastructure and energy',
      d: 'We support Vietnam’s energy sector in its transition towards sustainable solutions, through rooftop solar, gas-fired power projects and a renewable energy fund.',
      href: 'https://skyxsolar.com/',
      tags: [['SkyX Solar', 'https://skyxsolar.com/'], ['Long An Power'], ['Renewable Energy\u00a0Fund']]
    },
    {
      t: 'Private equity',
      d: 'The VinaCapital Co-Investment Fund focuses on mid-market, growth private equity investments, with exits over a four- to six-year horizon.',
      href: 'https://www.kdc.vn/en',
      tags: [['Kido Group', 'https://www.kdc.vn/en'], ['NOVA Consumer', 'https://www.novaconsumer.com.vn/'], ['An Cường', 'https://ancuong.com/']]
    }
  ]
};

const fundRows = list => `
<div class="funds">
  ${list.map(f => `<article class="fund">
    <div class="fund__id"><b>${f[0]}</b><span>${f[1]}</span></div>
    <p>${f[2]}</p>
    <div class="fund__do">${DO3.map(d => `<a href="#">${d} →</a>`).join('')}</div>
  </article>`).join('')}
</div>`;

VC.mountPage({
  page: 'solutions',
  hero: {
    img: 'hcmc-panorama.webp',
    crumb: 'Investment solutions',
    eyebrow: 'VinaCapital investment solutions',
    title: 'Share in the growth<br>of Vietnam',
    lead: LEAD
  },
  body: `
<nav class="subnav" aria-label="Page contents">
  <div class="wrap subnav__in">
    <a href="#ngoai-nuoc">Offshore funds</a>
    <a href="#trong-nuoc">Onshore funds</a>
    <a href="#etf">ETFs</a>
    <a href="#dich-vu">Investment services</a>
    <a href="#thay-the">Alternative investments</a>
  </div>
</nav>

<section class="sect" id="ngoai-nuoc">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${OFFSHORE.label}</p><h2>${OFFSHORE.title}</h2></div>
      <p>${OFFSHORE.intro}</p>
    </div>
    ${fundRows(OFFSHORE.items)}
  </div>
</section>

<section class="sect sect--paper" id="trong-nuoc">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${ONSHORE.label}</p><h2>${ONSHORE.title}</h2></div>
      <p>${ONSHORE.intro}</p>
    </div>
    ${fundRows(ONSHORE.items)}
  </div>
</section>

<section class="sect" id="etf">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${ETF.label}</p><h2>${ETF.title}</h2></div>
      <p>${ETF.intro}</p>
    </div>
    ${fundRows(ETF.items)}
  </div>
</section>

<section class="sect sect--sand" id="dich-vu">
  <div class="wrap">
    <div class="shead shead--solo">
      <p class="eyebrow eyebrow--rule">${SERVICES.label}</p>
      <h2>${SERVICES.title}</h2>
    </div>
    <!-- Feedback 24/09: ảnh cũ (cầu, toà nhà…) không đúng chủ đề nên tạm bỏ
         ảnh, dùng thẻ chữ. Khi có ảnh đúng ý (ký hợp đồng / tư vấn / bắt tay)
         thì thêm lại khối .card__media và bỏ lớp cards--text. -->
    <div class="cards cards--text">
      ${SERVICES.items.map((s, i) => `<a class="card" href="#">
        <div class="card__b">
          <b class="card__no">${String(i + 1).padStart(2, '0')}</b>
          <h3>${s[0]}</h3>
          <p>${s[1]}</p>
          <span class="tlink">Learn more <i>→</i></span>
        </div>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="sect" id="thay-the">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${ALT.label}</p><h2>${ALT.title}</h2></div>
      <p>${ALT.intro}</p>
    </div>
    <!-- Feedback 24/09: thẻ nổi lên khi rê chuột; bấm thẻ mở website công ty
         thành viên chính, bấm từng nhãn mở website của công ty đó. Nhãn nào
         chưa có website riêng (Long An Power, quỹ năng lượng) thì để chữ thường. -->
    <div class="numgrid numgrid--2 numgrid--link">
      ${ALT.items.map((it, i) => `<article>
        <b>${String(i + 1).padStart(2, '0')}</b>
        <h3><a class="numgrid__go" href="${it.href}" target="_blank" rel="noopener">${it.t}</a></h3>
        <p>${it.d}</p>
        <div class="pills">${it.tags.map(([n, u]) => u ? `<a href="${u}" target="_blank" rel="noopener">${n} <i>↗</i></a>` : `<span>${n}</span>`).join('')}</div>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="sect sect--sand">
  <div class="wrap split">
    <div class="split__media">
      <img src="${IMG}wind-farm.jpg" alt="Renewable energy in Vietnam" loading="lazy">
      ${corner()}
    </div>
    <div>
      <p class="eyebrow eyebrow--rule">Responsible investment</p>
      <h3>ESG in every decision</h3>
      <div class="prose"><p>Environmental, social and governance criteria are built into the analysis and portfolio management process of every fund, inseparable from our return objectives.</p></div>
      <a class="btn" href="esg.html">Explore our ESG commitment <i>→</i></a>
    </div>
  </div>
</section>

<section class="cta">
  <div class="wrap cta__in">
    <div>
      <h2>Not sure where to start?</h2>
      <p>VinaCapital’s advisory team will help you choose the solution that matches your goals and risk appetite.</p>
    </div>
    <a class="btn" href="contact.html">Speak with an advisor <i>→</i></a>
  </div>
</section>
`
});
