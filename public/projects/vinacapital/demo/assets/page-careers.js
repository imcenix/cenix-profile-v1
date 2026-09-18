/* ==========================================================================
   TUYỂN DỤNG — giữ nguyên tuyến nội dung vinacapital.com/vi/careers
   Sáu phần như trang gốc: Về chúng tôi · Giá trị · Văn hoá · Ngôi nhà thứ hai ·
   Kỳ vọng với ứng viên · Vị trí tuyển dụng · Chương trình thực tập.

   NGẮT DÒNG: tiêu đề dùng `text-wrap:balance` (style.css); cụm từ không được
   tách nằm sau &nbsp; ngay trong nội dung.
   ========================================================================== */

const CLEAD = 'VinaCapital is an employer of choice for investment and finance professionals in Vietnam — a top 100 employer across all industries and a top three employer in Financial Services for the last 10 years.';

const CINTRO = {
  label: 'Who we are',
  title: 'A recognized employment<br>leader in the market',
  body: [
    'Our staff members are Vietnamese, Vietnamese expatriates and foreign nationals from countries around the world.',
    'VinaCapital employs over 200 staff members, all dedicated to achieving our goal of being the leading investment firm covering the full range of asset classes: listed equity, private equity, venture capital, fixed income, real estate, energy and infrastructure.'
  ],
  chips: [
    ['Top 100', 'Employers of choice'],
    ['Top 3', 'Financial services industry'],
    ['200+', 'Staff across the Group'],
    ['10 years', 'Of consecutive recognition']
  ]
};

const VALUES = {
  label: 'The values of VinaCapital',
  title: 'Our core values',
  intro: 'Three traits every candidate and employee finds at VinaCapital: we are fair, open and honest.',
  items: [
    ['Integrity', 'We are committed to doing the right thing; honesty and transparency are at the heart of our business.'],
    ['Ambition', 'We believe in Vietnam’s future growth and prosperity and are driven to share them with our clients and investors.'],
    ['Insight', 'With rigorous research and analysis, we identify challenges and opportunities in order to deliver the investment solutions that help our investors realize their goals.'],
    ['Sustainability', 'We consider environmental, social and governance (ESG) factors in our decisions and believe they are essential to achieving long-term sustainability.'],
    ['Partnership', 'Trusted, win-win relationships are vital to the way we do business. We are only successful if our clients and partners are successful.'],
    ['Recognition', 'Becoming a “VinaCapitalist” means that your contributions are recognized and you are encouraged to keep developing.']
  ]
};

const CULTURE = {
  label: 'Our culture',
  title: 'Work smart,<br>play hard',
  intro: 'Our staff are central to building and protecting VinaCapital’s reputation.',
  photos: [
    ['careers/culture-workplace.webp', 'Workplace'],
    ['careers/culture-team.webp', 'Our team'],
    ['careers/culture-training.webp', 'Training']
  ],
  items: [
    {
      t: 'A diverse working environment',
      b: ['Our management team and employees come from Vietnam as well as the United Kingdom, United States, Canada, Australia, India, New Zealand and other countries. Together we build a diverse working environment and a fair culture that gives every employee the opportunity to succeed.']
    },
    {
      t: 'Respect for and recognition of every employee’s value',
      b: ['At VinaCapital, all employees are welcome to present their ideas to senior management. Even through difficult economic periods, VinaCapital has remained one of the few businesses to keep its compensation policy and benefits scheme unchanged.']
    },
    {
      t: 'Fast-paced and in the know',
      b: ['Working at one of the leading investment management companies in Vietnam means our teams stay continually abreast of the factors that move the economy: interest rates, inflation, the VN-Index and foreign exchange rates.']
    },
    {
      t: 'Putting clients at the center of what we do',
      b: ['Our clients’ interests are decisive for VinaCapital’s long-term growth. Everything the Group does is directed towards the best outcome for our clients, and our employees are central to delivering on that mission.']
    },
    {
      t: 'Rigorous but not tedious',
      b: ['The financial services environment demands accuracy and the analysis of large volumes of data, but that does not mean the work is tedious. Senior management encourages social activities such as the Tennis Club, the Dining Club and the Wine Club…']
    }
  ]
};

const HOME2 = {
  label: 'Your second home',
  title: 'We are committed to helping<br>you reach your potential',
  body: [
    'At VinaCapital, we promote a culture of high engagement. A core competency framework for each role helps employees identify their strengths and the areas to work on, and build their own development plans.',
    'Training and other learning programs are designed to give employees every opportunity to improve and expand their knowledge and capabilities.'
  ],
  bens: [
    'Comprehensive health plans',
    'Competitive compensation',
    'Employee networking activities',
    'Annual team building trip',
    'Family-friendly benefits',
    'Professional &amp; personal growth'
  ]
};

const EXPECT = {
  label: 'What VinaCapital expects',
  title: 'Who are we looking for?',
  quote: 'Your motivation is always promoted when you become a “VinaCapitalist”.',
  /* bản cho dải ảnh lớn: ngắt dòng chủ động, không để câu tự rớt chữ */
  band: 'Your motivation is always promoted<br>when you become a “VinaCapitalist”',
  body: [
    'VinaCapital looks for dynamic, highly motivated, career-oriented individuals. The Group offers employment across many professional areas, principally in investment, finance, real estate, accounting and audit.',
    'If you are exceptionally talented, motivated and hard-working, VinaCapital may be the place for you to build your career. But we look for more than talent alone: we require that our employees maintain the highest level of integrity.'
  ]
};

const JOBS = {
  label: 'Open positions',
  title: '6 roles in 2 locations',
  intro: 'Explore new opportunities with VinaCapital. Applications are reviewed and answered within 10 working days.',
  items: [
    ['Investment Associate — VinaLiving', 'Ho Chi Minh City', 'Real Estate'],
    ['Sector Analyst', 'Ho Chi Minh City', 'Research'],
    ['Senior Associate, Product Management', 'Ho Chi Minh City', 'Product'],
    ['Economics Manager', 'Ho Chi Minh City', 'Research'],
    ['Financial Advisory Manager, Wealth Management', 'Hanoi', 'Advisory'],
    ['Accounting Manager — VinaLiving', 'Ho Chi Minh City', 'Accounting']
  ]
};

const INTERN = {
  label: 'Internship program',
  title: 'Nurturing the talent<br>of tomorrow',
  intro: 'VinaCapital’s internship program is designed to provide hands-on experience and professional growth opportunities in a dynamic, professional and supportive environment.',
  items: [
    'Real-world experience',
    'Mentorship from our experts',
    'Professional development',
    'Networking opportunities',
    'Career advancement',
    'Open work culture'
  ]
};

VC.mountPage({
  page: 'careers',
  hero: {
    img: 'careers/careers-hero.webp',
    crumb: 'Careers',
    eyebrow: 'Career opportunities',
    title: 'Build your career<br>with VinaCapital',
    lead: CLEAD
  },
  body: `
<nav class="subnav" aria-label="Page contents">
  <div class="wrap subnav__in">
    <a href="#ve-chung-toi">Who we are</a>
    <a href="#gia-tri">Core values</a>
    <a href="#van-hoa">Our culture</a>
    <a href="#ngoi-nha">Second home</a>
    <a href="#ky-vong">What we expect</a>
    <a href="#vi-tri">Open positions</a>
    <a href="#thuc-tap">Internship program</a>
  </div>
</nav>

<section class="sect" id="ve-chung-toi">
  <div class="wrap split">
    <div class="split__media">
      <img src="${IMG}careers/culture-life.webp" alt="The VinaCapital team" loading="lazy">
      ${corner()}
    </div>
    <div>
      <p class="eyebrow eyebrow--rule">${CINTRO.label}</p>
      <h3>${CINTRO.title}</h3>
      <div class="prose">${CINTRO.body.map(p => `<p>${p}</p>`).join('')}</div>
      <div class="chips">
        ${CINTRO.chips.map(c => `<div><b>${c[0]}</b><span>${c[1]}</span></div>`).join('')}
      </div>
    </div>
  </div>
</section>

<section class="sect sect--sand" id="gia-tri">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${VALUES.label}</p><h2>${VALUES.title}</h2></div>
      <p>${VALUES.intro}</p>
    </div>
    <div class="numgrid">
      ${VALUES.items.map((v, i) => `<article>
        <b>${String(i + 1).padStart(2, '0')}</b>
        <h3>${v[0]}</h3>
        <p>${v[1]}</p>
      </article>`).join('')}
    </div>
  </div>
</section>

<section class="band band--mid">
  <div class="band__bg"><img src="${IMG}careers/careers-band.webp" alt="" aria-hidden="true" loading="lazy"></div>
  <span class="band__scrim" aria-hidden="true"></span>
  <div class="wrap band__in">
    <p class="eyebrow eyebrow--rule">VinaCapitalist</p>
    <h2 style="max-width:none">${EXPECT.band}</h2>
    <p>VinaCapital’s reputation is the result of our staff — a commitment to teamwork, dedication and integrity at every level of the company.</p>
  </div>
</section>

<section class="sect" id="van-hoa">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${CULTURE.label}</p><h2>${CULTURE.title}</h2></div>
      <p>${CULTURE.intro}</p>
    </div>
    <div class="mosaic">
      ${CULTURE.photos.map(p => `<figure>
        <img src="${IMG}${p[0]}" alt="${p[1]} at VinaCapital" loading="lazy">
        <figcaption>${p[1]}</figcaption>
      </figure>`).join('')}
    </div>
    <div class="acc" style="margin-top:clamp(34px,3.6vw,52px)">
      ${CULTURE.items.map((it, i) => `<div class="acc__item${i === 0 ? ' is-open' : ''}">
        <button class="acc__t" data-acc aria-expanded="${i === 0}"><h3>${it.t}</h3></button>
        <div class="acc__b">${it.b.map(p => `<p>${p}</p>`).join('')}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="sect sect--paper" id="ngoi-nha">
  <div class="wrap split split--flip">
    <div class="split__media">
      <img src="${IMG}investor.jpg" alt="VinaCapital colleagues at work" loading="lazy">
      ${corner()}
    </div>
    <div>
      <p class="eyebrow eyebrow--rule">${HOME2.label}</p>
      <h3>${HOME2.title}</h3>
      <div class="prose">${HOME2.body.map(p => `<p>${p}</p>`).join('')}</div>
    </div>
  </div>
  <div class="wrap">
    <p class="eyebrow" style="margin-top:clamp(34px,3.4vw,48px)">Your well-being is a top priority</p>
    <ul class="bens">${HOME2.bens.map(b => `<li>${b}</li>`).join('')}</ul>
  </div>
</section>

<section class="sect" id="ky-vong">
  <div class="wrap split">
    <div>
      <blockquote class="quote">${EXPECT.quote}<cite>${EXPECT.label}</cite></blockquote>
    </div>
    <div class="prose">${EXPECT.body.map(p => `<p>${p}</p>`).join('')}</div>
  </div>
</section>

<section class="sect sect--sand" id="vi-tri">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${JOBS.label}</p><h2>${JOBS.title}</h2></div>
      <p>${JOBS.intro}</p>
    </div>
    <div class="rows">
      ${JOBS.items.map(j => `<a class="row2 row2--job" href="#">
        <h3>${j[0]}</h3>
        <span>${j[1]}</span>
        <i>Apply →</i>
      </a>`).join('')}
    </div>
  </div>
</section>

<section class="band" id="thuc-tap">
  <div class="band__bg"><img src="${IMG}careers/internship.webp" alt="" aria-hidden="true" loading="lazy"></div>
  <span class="band__scrim" aria-hidden="true"></span>
  <div class="wrap band__in">
    <p class="eyebrow eyebrow--rule">${INTERN.label}</p>
    <h2>${INTERN.title}</h2>
    <p>${INTERN.intro}</p>
    <a class="btn" href="#">Explore now <i>→</i></a>
  </div>
</section>

<section class="sect">
  <div class="wrap">
    <div class="shead shead--solo">
      <p class="eyebrow eyebrow--rule">Intern benefits</p>
      <h2>Six things you take away<br>from your internship</h2>
    </div>
    <ul class="bens" style="margin-top:0">${INTERN.items.map(b => `<li>${b}</li>`).join('')}</ul>
  </div>
</section>

<section class="cta">
  <div class="wrap cta__in">
    <div>
      <h2>Ready to join VinaCapital?</h2>
      <p>Send your application to our HR team, or follow this page for the latest openings.</p>
    </div>
    <a class="btn" href="contact.html">Submit your application <i>→</i></a>
  </div>
</section>
`
});
