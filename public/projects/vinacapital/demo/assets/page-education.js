/* Kiến thức đầu tư — thư viện tài chính giàu hình ảnh, theo trật tự trang gốc. */
const EDU_IMG = `${IMG}education/`;

const BASICS = [
  'Basic definitions when investing in open-ended funds',
  'How open-ended funds are managed',
  'Using the VinaCapital MiO application',
  'Experience in investing in open-ended funds · Part 1',
  'Experience in investing in open-ended funds · Part 2',
  'Experience in investing in open-ended funds · Part 3',
  'Building a personal financial plan'
];

const FAQS = [
  ['What is an open-ended fund?', 'An open-ended fund is a pool of money belonging to many investors with a shared objective, managed professionally by a fund management company. Investors may subscribe for or redeem fund certificates in line with the rules of the fund.'],
  ['Why invest in an open-ended fund?', 'An open-ended fund gives investors access to a diversified portfolio, a team of investment professionals and a disciplined risk management process, starting from a modest amount.'],
  ['How is the return of an open-ended fund calculated?', 'Performance is reflected in the change in net asset value per fund certificate (NAV/fund certificate) over each period.'],
  ['When investing in an open-ended fund, is the return guaranteed?', 'No. Investment always carries risk and returns are not guaranteed. Investors should choose a fund that suits their objectives, time horizon and tolerance for risk.'],
  ['How much do I need to get started?', 'The minimum investment depends on the individual fund and programme. Investing regularly lets you begin with an affordable amount and stay disciplined over the long term.'],
  ['What is VinaSIP?', 'VinaSIP (Systematic Investment Program) is a way of investing a fixed amount each month in a VinaCapital open-ended fund, helping to build the habit and average out your cost of investment.'],
  ['When can I withdraw my money?', 'Investors may place redemption orders for fund certificates on dealing days, in accordance with the charter and guidance of each fund.'],
  ['How can I track my investment?', 'The VinaCapital MiO application lets investors follow their portfolio and investment value, and transact online.'],
  ['How do ETFs differ from actively managed open-ended funds?', 'An ETF is designed to track a reference index, while an actively managed open-ended fund has its assets selected by professionals aiming to outperform an appropriate benchmark.'],
  ['How do I choose the right fund?', 'Start with your financial goals, investment horizon, liquidity needs and tolerance for volatility before comparing the strategies of individual funds.']
];

VC.mountPage({
  page: 'education',
  hero: {
    img: 'education/education-hero.jpg',
    crumb: 'Investment Education',
    eyebrow: 'Understand more, invest with confidence',
    title: 'Knowledge today.<br>Prosperity tomorrow.',
    lead: 'A clear foundation of knowledge makes every financial decision a more deliberate one — whether you are just starting out or building a long-term plan.'
  },
  body: `
<nav class="subnav ed-nav" aria-label="Page contents">
  <div class="wrap subnav__in"><a href="#kien-thuc">Investment education</a><a href="#tai-chinh">Personal finance</a><a href="#video">Financial Prosperity</a><a href="#faqs">FAQs</a></div>
</nav>

<section class="ed-lead" id="kien-thuc">
  <div class="wrap ed-lead__grid">
    <div><p class="eyebrow eyebrow--rule">Start with the basics</p><h2>Investing need not be complicated when you have the right roadmap.</h2></div>
    <p>Explore the most common ways to invest, how each one works and the role it can play in a long-term financial plan.</p>
  </div>
</section>

<section class="ed-topics">
  <div class="wrap ed-topics__grid">
    <a class="ed-topic ed-topic--wide" href="#lo-trinh">
      <div class="ed-topic__media"><img src="${EDU_IMG}open-fund.png" alt="Learn about open-ended funds" loading="lazy">${corner()}</div>
      <div class="ed-topic__copy"><span>01 · Foundations</span><h3>Learn about open-ended funds</h3><p>An open-ended fund is a pool of money belonging to many investors with a shared objective, managed by the investment professionals of a fund management company.</p><b>Explore the topic <i>→</i></b></div>
    </a>
    <a class="ed-topic" href="#lo-trinh">
      <div class="ed-topic__media"><img src="${EDU_IMG}etf.jpg" alt="Learn about exchange-traded funds (ETFs)" loading="lazy"></div>
      <div class="ed-topic__copy"><span>02 · Passive investing</span><h3>Learn about ETFs</h3><p>An exchange-traded fund tracks the movement of a reference index in a transparent and convenient way.</p><b>Explore the topic <i>→</i></b></div>
    </a>
    <a class="ed-topic ed-topic--red" href="#lo-trinh">
      <div class="ed-topic__graphic"><span>12</span><small>months of<br>discipline</small></div>
      <div class="ed-topic__copy"><span>03 · Regular investing</span><h3>Start with\u00A0VinaSIP</h3><p>Invest a fixed amount each month to stay disciplined, average out your cost of investment and move step by step towards your goal.</p><b>Learn about VinaSIP <i>→</i></b></div>
    </a>
  </div>
</section>

<section class="ed-roadmap" id="lo-trinh">
  <div class="wrap ed-roadmap__grid">
    <div class="ed-roadmap__head"><p class="eyebrow eyebrow--rule">Open-ended funds from A to Z</p><h2>Information you need to know<br>when investing in open-ended funds</h2><p>A guided reading path, from the core concepts through to practical experience and how to plan.</p></div>
    <ol class="ed-roadmap__list">${BASICS.map((item, i) => `<li><a href="#"><span>${String(i+1).padStart(2,'0')}</span><b>${item}</b><i>↗</i></a></li>`).join('')}</ol>
  </div>
</section>

<section class="ed-life" id="tai-chinh">
  <div class="wrap ed-life__head">
    <p class="eyebrow eyebrow--rule">Personal financial management</p>
    <h2>Every goal in life needs a plan</h2>
  </div>
  <div class="wrap ed-life__grid">
    <a href="#" class="ed-goal ed-goal--large"><img src="${IMG}investor.jpg" alt="Financial planning for your family" loading="lazy"><span><small>Long-term plan</small><b>Building financial foundations for your family</b><i>→</i></span></a>
    <a href="#" class="ed-goal"><img src="${IMG}about/unsplash_DoWZMPZ-M9s.png" alt="Preparing financially for your children" loading="lazy"><span><small>Life goals</small><b>Preparing your children for the road ahead</b><i>→</i></span></a>
    <a href="#" class="ed-goal"><img src="${IMG}hcm-heritage.jpg" alt="Retirement planning" loading="lazy"><span><small>Financial freedom</small><b>Taking charge of your retirement years</b><i>→</i></span></a>
    <a href="#" class="ed-goal"><img src="${IMG}city-aerial-night.jpg" alt="Preserving financial prosperity" loading="lazy"><span><small>Wealth management</small><b>Preserving your financial prosperity</b><i>→</i></span></a>
  </div>
</section>

<section class="ed-video" id="video">
  <div class="wrap ed-video__head"><div><p class="eyebrow eyebrow--rule">Investment video series</p><h2>Financial Prosperity</h2></div><p>Financial stories told visually and simply — each episode a small step towards understanding money better.</p></div>
  <div class="wrap ed-video__grid">
    <a href="https://www.youtube.com/watch?v=7usMn_n0atI" target="_blank" rel="noopener"><span class="ed-video__thumb"><img src="${EDU_IMG}video-01.jpg" alt="Financial education video" loading="lazy"><i>▶</i></span><small>Financial Prosperity · Episode 01</small><b>Starting your investment journey the right way</b></a>
    <a href="https://www.youtube.com/watch?v=6f_mRe9nnwo" target="_blank" rel="noopener"><span class="ed-video__thumb"><img src="${EDU_IMG}video-02.jpg" alt="Financial education video" loading="lazy"><i>▶</i></span><small>Financial Prosperity · Episode 02</small><b>Understanding your goals and risk appetite</b></a>
    <a href="https://www.youtube.com/watch?v=q2_Rb7r7shg" target="_blank" rel="noopener"><span class="ed-video__thumb"><img src="${EDU_IMG}video-03.jpg" alt="Financial education video" loading="lazy"><i>▶</i></span><small>Financial Prosperity · Episode 03</small><b>Building lasting financial habits</b></a>
  </div>
</section>

<section class="ed-faq" id="faqs">
  <div class="wrap ed-faq__grid">
    <div class="ed-faq__head"><p class="eyebrow eyebrow--rule">Frequently asked questions</p><h2>Answers before you begin</h2><p>Common questions about open-ended funds, performance, transactions and choosing the solution that fits.</p><a class="tlink" href="#">See all 26 questions <i>→</i></a></div>
    <div class="acc ed-faq__list">${FAQS.map((f, i) => `<div class="acc__item${i === 0 ? ' is-open' : ''}"><button data-acc aria-expanded="${i === 0}"><span>${String(i+1).padStart(2,'0')}</span><b>${f[0]}</b><i>+</i></button><div class="acc__panel"><p>${f[1]}</p></div></div>`).join('')}</div>
  </div>
</section>

<section class="ed-cta"><div class="wrap ed-cta__in"><div><p class="eyebrow">Ready to begin?</p><h2>Turn knowledge into an investment plan.</h2></div><a class="btn btn--light" href="solutions.html">Explore solutions <i>→</i></a></div></section>`
});
