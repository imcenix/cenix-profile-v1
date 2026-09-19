/* ==========================================================================
   VinaCapital — lớp chuyển động, CHỈ dùng cho trang chủ
   --------------------------------------------------------------------------
   Không thư viện. Hai cơ chế duy nhất:

   1. IntersectionObserver  → gắn class .is-in cho [data-rv] khi vào khung nhìn.
      Mọi hiệu ứng hiện ra đều là CSS transition, chạy một lần rồi thôi.
   2. Một vòng requestAnimationFrame  → ghi biến CSS --p (0→1) cho [data-px]
      và --hp cho banner. CSS tự tính transform từ hai biến đó.

   Chỉ đụng tới `transform` và `opacity` nên trình duyệt xử lý trên GPU, không
   gây reflow. Toàn bộ file ~6KB, không cần GSAP/Lenis như các site tham khảo.

   KHÔNG cướp quyền cuộn (smooth-scroll ảo). Ngành tài chính đọc là chính;
   cuộn trễ nhịp làm người dùng khó chịu và hỏng trợ năng.

   Tôn trọng prefers-reduced-motion: tắt sạch, nội dung hiện đầy đủ.
   ========================================================================== */

(function () {
  const root = document.documentElement;

  /* Ai bật "giảm chuyển động" thì không bật lớp này — CSS sẽ để mọi thứ hiện sẵn */
  const tatMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (tatMotion) return;

  root.classList.add('has-motion');

  /* ---------------------------------------------------------------- 1. Hiện ra */
  const cho = [...document.querySelectorAll('[data-rv]')];

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('is-in');
      io.unobserve(e.target);           /* chạy một lần, không lặp lại khi cuộn ngược */
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

  cho.forEach((el) => {
    /* các phần tử cùng nhóm hiện lệch nhau một nhịp */
    const nhom = el.closest('[data-rv-group]');
    if (nhom) {
      const anhEm = [...nhom.querySelectorAll('[data-rv]')];
      el.style.setProperty('--d', (anhEm.indexOf(el) * 0.09) + 's');
    }
    io.observe(el);
  });

  /* Banner hiện ngay, không chờ cuộn */
  const hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('is-in'));

  /* ------------------------------------------------- 2. Ảnh trôi trong khung */
  const px = [...document.querySelectorAll('[data-px]')];
  const hdr = document.querySelector('.hdr');
  let cao = window.innerHeight;
  let cho_ve = false;

  function ve() {
    cho_ve = false;
    const y = window.scrollY;

    /* banner: ảnh lùi chậm hơn tốc độ cuộn */
    if (hero) {
      const h = hero.offsetHeight || cao;
      root.style.setProperty('--hp', Math.min(1, Math.max(0, y / h)).toFixed(4));
    }

    /* mỗi khung ảnh: --p = 0 khi mép trên vừa chạm đáy màn hình, = 1 khi mép
       dưới vừa rời khỏi đỉnh. CSS dịch ảnh trong khoảng đó. */
    for (const el of px) {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > cao + 200) continue;
      const p = (cao - r.top) / (cao + r.height);
      el.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(4));
    }

    /* header đổi nền khi rời khỏi banner — KHÔNG đổi kích thước logo */
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

  /* ------------------------------------------------------- 3. Số chạy lên */
  /* Tách phần số ra khỏi tiền tố/hậu tố: "USD 3.8bn" → "USD " + 3.8 + "bn" */
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
      /* easing expo-out: nhanh lúc đầu, dừng êm — giống nhịp của các mục khác */
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
