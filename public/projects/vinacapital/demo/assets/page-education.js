/* Kiến thức đầu tư — thư viện tài chính giàu hình ảnh, theo trật tự trang gốc. */
const EDU_IMG = `${IMG}education/`;

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
  <div class="wrap subnav__in"><a href="#kien-thuc">Learning</a><a href="#video">Financial Prosperity</a><a href="#faqs">FAQs</a></div>
</nav>

<!-- Feedback 24/09: gộp 4 khối cũ (mở đầu, 3 chủ đề, "Every goal in life",
     "Open-ended funds A to Z") thành MỘT khối Learning có 3 tab. Mỗi tab dựng
     giống mục News ở trang chủ: 1 bài lớn có ảnh bên trái, các bài nhỏ chỉ
     có tiêu đề bên phải. "See all articles" mở trang thư viện đánh số trang. -->
<section class="ed-learn" id="kien-thuc">
  <div class="wrap">
    <div class="shead">
      <div><p class="eyebrow eyebrow--rule">${LEARN.label}</p><h2>${LEARN.title}</h2></div>
      <p>${LEARN.intro}</p>
    </div>
    <div data-tabs>
      <div class="ed-learn__bar">
        <div class="tabs" role="tablist">
          ${LEARN.tabs.map((t, i) => `<button role="tab" data-tab="${t.key}" class="${i === 0 ? 'is-on' : ''}" aria-selected="${i === 0}">${t.name}</button>`).join('')}
        </div>
        <a class="tlink ed-learn__all" href="education-library.html">${LEARN.more} <i>→</i></a>
      </div>
      ${LEARN.tabs.map((t, i) => `<div data-tab-panel="${t.key}"${i === 0 ? '' : ' hidden'}>
        <div class="news__grid ed-learn__grid">
          <a class="news__lead" href="${t.lead.href}" target="_blank" rel="noopener">
            <div class="media ed-learn__media"><img src="${IMG}${t.lead.img}" alt="" loading="lazy"></div>
            <time>${t.name}</time>
            <h3>${t.lead.title}</h3>
            <p class="ed-learn__desc">${t.lead.desc}</p>
            <span class="tlink">Read the article <i>→</i></span>
          </a>
          <div class="news__list">
            ${t.items.map((a) => `<a class="news__row ed-learn__row" href="${a[1]}" target="_blank" rel="noopener"><p>${a[0]}</p><span>→</span></a>`).join('')}
            <a class="ed-learn__more" href="education-library.html?level=${t.key}">View more ${t.name.toLowerCase()} articles <i>→</i></a>
          </div>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<section class="ed-video" id="video">
  <div class="wrap ed-video__head"><div><p class="eyebrow eyebrow--rule">Investment video series</p><h2>Financial Prosperity</h2></div><p>Financial stories told visually and simply — each episode a small step towards understanding money better.</p></div>
  <!-- Feedback 24/09: video làm dạng dọc (9:16). Ảnh bìa hiện có là ảnh ngang
       của YouTube (chữ in sẵn trong ảnh) nên không cắt — đặt nguyên ảnh giữa
       khung dọc, nền là chính ảnh đó làm mờ. Khi khách có ảnh bìa dọc thì bỏ
       lớp .ed-video__fill và cho ảnh phủ kín khung. -->
  <div class="wrap ed-video__grid ed-video__grid--v">
    <a href="https://www.youtube.com/watch?v=7usMn_n0atI" target="_blank" rel="noopener"><span class="ed-video__thumb"><img class="ed-video__fill" src="${EDU_IMG}video-01.jpg" alt="" aria-hidden="true" loading="lazy"><img src="${EDU_IMG}video-01.jpg" alt="Financial education video" loading="lazy"><i>▶</i></span><small>Financial Prosperity · Episode 01</small><b>Starting your investment journey the right way</b></a>
    <a href="https://www.youtube.com/watch?v=6f_mRe9nnwo" target="_blank" rel="noopener"><span class="ed-video__thumb"><img class="ed-video__fill" src="${EDU_IMG}video-02.jpg" alt="" aria-hidden="true" loading="lazy"><img src="${EDU_IMG}video-02.jpg" alt="Financial education video" loading="lazy"><i>▶</i></span><small>Financial Prosperity · Episode 02</small><b>Understanding your goals and risk appetite</b></a>
    <a href="https://www.youtube.com/watch?v=q2_Rb7r7shg" target="_blank" rel="noopener"><span class="ed-video__thumb"><img class="ed-video__fill" src="${EDU_IMG}video-03.jpg" alt="" aria-hidden="true" loading="lazy"><img src="${EDU_IMG}video-03.jpg" alt="Financial education video" loading="lazy"><i>▶</i></span><small>Financial Prosperity · Episode 03</small><b>Building lasting financial habits</b></a>
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
