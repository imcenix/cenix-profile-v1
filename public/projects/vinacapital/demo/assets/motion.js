(function () {
  const root = document.documentElement;

  const tatMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (tatMotion) return;

  root.classList.add('has-motion');

  const cho = [...document.querySelectorAll('[data-rv]')];

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  cho.forEach((el) => {
    const nhom = el.closest('[data-rv-group]');
    if (nhom) {
      const anhEm = [...nhom.querySelectorAll('[data-rv]')];
      el.style.setProperty('--d', (anhEm.indexOf(el) * 0.09) + 's');
    }
    io.observe(el);
  });

  const hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('is-in'));

  const px = [...document.querySelectorAll('[data-px]')];
  const fixedBg = [...document.querySelectorAll('[data-fixed]')];
  const hdr = document.querySelector('.hdr');
  let cao = window.innerHeight;
  let cho_ve = false;

  function ve() {
    cho_ve = false;
    const y = window.scrollY;

    if (hero) {
      const h = hero.offsetHeight || cao;
      root.style.setProperty('--hp', Math.min(1, Math.max(0, y / h)).toFixed(4));
    }

    for (const el of px) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > cao + 200) continue;
      const p = (cao - r.top) / (cao + r.height);
      el.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
    }

    for (const el of fixedBg) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -300 || r.top > cao + 300) continue;
      el.style.setProperty('--fx', Math.round(-r.top));
    }

    if (hdr) hdr.classList.toggle('is-stuck', y > (hero ? hero.offsetHeight - 90 : 120));
  }

  function xepLich() {
    if (cho_ve) return;
    cho_ve = true;
    requestAnimationFrame(ve);
  }

  window.addEventListener('scroll', xepLich, { passive: true });
  window.addEventListener('resize', () => { cao = window.innerHeight; xepLich(); }, { passive: true });
  ve();

  const doSo = (s) => {
    const m = s.match(/^(\D*?)([\d.,]+)(.*)$/s);
    if (!m) return null;
    const raw = m[2].replace(/,/g, '');
    const n = parseFloat(raw);
    if (!isFinite(n)) return null;
    const le = (raw.split('.')[1] || '').length;
    return { truoc: m[1], sau: m[3], dich: n, le };
  };

  const ioSo = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      ioSo.unobserve(el);
      const d = doSo(el.textContent.trim());
      if (!d) return;
      const batDau = performance.now();
      const dai = 1400;
      const ease = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));
      el.style.fontVariantNumeric = 'tabular-nums';
      (function buoc(now) {
        const t = Math.min(1, (now - batDau) / dai);
        const v = d.dich * ease(t);
        el.textContent = d.truoc + v.toFixed(d.le) + d.sau;
        if (t < 1) requestAnimationFrame(buoc);
        else el.textContent = d.truoc + d.dich.toFixed(d.le) + d.sau;
      })(batDau);
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('[data-count]').forEach((el) => ioSo.observe(el));
})();
