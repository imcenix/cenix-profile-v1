/* Thư viện kiến thức đầu tư — trang "See all articles" mở từ khối Learning.
   Lọc theo cấp độ (?level=basic|advanced|general) và đánh số trang
   (?page=2) giống trang báo điện tử. Dữ liệu lấy từ LEARN_ALL (edu-data.js);
   khi nối CMS chỉ cần thay mảng này, phần hiển thị giữ nguyên. */

const LIB_PER_PAGE = 5;
const LIB_LEVELS = [{ key: 'all', name: 'All articles' }, ...LEARN.tabs.map((t) => ({ key: t.key, name: t.name }))];

VC.mountPage({
  page: 'education',
  hero: {
    img: 'education/education-hero.jpg',
    crumb: '<a href="education.html">Investment Education</a><i>›</i>All articles',
    title: 'Investment education library',
    lead: 'Every article in one place — filter by level and read at your own pace.'
  },
  body: `
<section class="lib" id="bai-viet">
  <div class="wrap">
    <div class="lib__bar">
      <div class="tabs" role="tablist" aria-label="Filter by level">
        ${LIB_LEVELS.map((l) => `<button role="tab" data-level="${l.key}">${l.name}</button>`).join('')}
      </div>
      <p class="lib__count" aria-live="polite"></p>
    </div>
    <div class="lib__list"></div>
    <nav class="pager" aria-label="Pages"></nav>
    <a class="tlink lib__back" href="education.html#kien-thuc"><i>←</i> Back to Investment Education</a>
  </div>
</section>`
});

(() => {
  const root = document.querySelector('.lib');
  const list = root.querySelector('.lib__list');
  const pager = root.querySelector('.pager');
  const count = root.querySelector('.lib__count');
  const btns = root.querySelectorAll('[data-level]');

  const q = new URLSearchParams(location.search);
  let level = LIB_LEVELS.some((l) => l.key === q.get('level')) ? q.get('level') : 'all';
  let page = Math.max(1, parseInt(q.get('page'), 10) || 1);

  function render(scroll) {
    const items = level === 'all' ? LEARN_ALL : LEARN_ALL.filter((a) => a.level === level);
    const pages = Math.max(1, Math.ceil(items.length / LIB_PER_PAGE));
    page = Math.min(page, pages);
    const start = (page - 1) * LIB_PER_PAGE;

    btns.forEach((b) => {
      const on = b.dataset.level === level;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-selected', on);
    });
    count.textContent = `${items.length} article${items.length === 1 ? '' : 's'} · page ${page} of ${pages}`;

    list.innerHTML = items.slice(start, start + LIB_PER_PAGE).map((a, i) => `
      <a class="lib__row" href="${a.href}" target="_blank" rel="noopener">
        <span class="lib__no">${String(start + i + 1).padStart(2, '0')}</span>
        <div>
          <p class="lib__lv">${a.levelName}</p>
          <h3>${a.title}</h3>
          ${a.desc ? `<p class="lib__desc">${a.desc}</p>` : ''}
        </div>
        <span class="lib__go" aria-hidden="true">→</span>
      </a>`).join('');

    const nums = Array.from({ length: pages }, (_, i) => i + 1);
    pager.innerHTML = `
      <button data-page="${page - 1}" ${page === 1 ? 'disabled' : ''} aria-label="Previous page">‹</button>
      ${nums.map((n) => `<button data-page="${n}" class="${n === page ? 'is-on' : ''}" ${n === page ? 'aria-current="page"' : ''}>${n}</button>`).join('')}
      <button data-page="${page + 1}" ${page === pages ? 'disabled' : ''} aria-label="Next page">›</button>`;

    const p = new URLSearchParams();
    if (level !== 'all') p.set('level', level);
    if (page > 1) p.set('page', page);
    history.replaceState(null, '', `${location.pathname}${p.toString() ? `?${p}` : ''}`);

    if (scroll) {
      const top = root.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  btns.forEach((b) => b.addEventListener('click', () => {
    level = b.dataset.level;
    page = 1;
    render(false);
  }));
  pager.addEventListener('click', (e) => {
    const b = e.target.closest('[data-page]');
    if (!b || b.disabled) return;
    page = +b.dataset.page;
    render(true);
  });

  render(false);
})();
