/* ==========================================================================
   VINACAPITAL MIO — dựng lại trang mio.vinacapital.com/home

   Nội dung, ảnh và icon lấy nguyên từ trang gốc của khách (đọc qua trình
   duyệt). Không có chữ nào tự nghĩ ra, không có ảnh thay thế.

   Trang độc lập như funds.html: không nạp shared.js, nên không kéo theo
   thanh điều hướng của site chính. Chân trang thì dùng đúng khối .ftr của
   trang index cho đồng bộ.
   ========================================================================== */

const IMG = 'assets/images/mio/';

/* Thanh liên hệ trên cùng — đúng như trang gốc */
const TOPBAR = {
  label: 'Liên hệ:',
  tel: ['1900 636 553', 'tel:1900636553'],
  mail: ['irwm@vinacapital.com', 'mailto:irwm@vinacapital.com'],
  web: ['VinaCapital Website', 'https://vinacapital.com/vi/']
};

/* Hai ảnh banner là ảnh thiết kế sẵn của khách, chữ nằm trong ảnh.
   Vì vậy KHÔNG phủ chữ HTML lên trên — sẽ đè lên chữ có sẵn. Phần chữ ở
   đây chỉ dùng cho trình đọc màn hình. */
const SLIDES = [
  { img: 'slide1.webp',
    alt: 'Thoải mái đầu tư, thoải mái sống — Mở tài khoản VinaCapital MiO để bắt đầu hành trình thoải mái của Quý khách!' },
  { img: 'slide2.webp',
    alt: 'Thoải mái đầu tư, thoải mái sống — Tải ứng dụng VinaCapital MiO để thoải mái quản lý các khoản đầu tư bất cứ lúc nào. Quét để tải ngay.' }
];

/* Bốn ưu điểm: icon nào đi với ảnh màn hình nào là theo đúng tên file gốc
   của khách (ic-1 ↔ iphone-dangky, ic-2 ↔ iphone-datmua, …). */
const UUDIEM = {
  eyebrow: 'Ưu điểm của',
  title: 'VinaCapital MiO',
  lead: 'Đầu tư các quỹ mở VinaCapital mọi lúc, mọi nơi',
  /* Ghép icon với câu theo ĐÚNG thứ tự background-image đọc được ở trang
     gốc: ic-2 → đăng ký, ic-3 → đặt lệnh, ic-4 → QRPay, ic-1 → quản lý. */
  items: [
    { ic: 'ic-2.svg', manh: 'Đăng ký và xác nhận', con: 'tài khoản trực tuyến, miễn phí', anh: 'phone-dangky.png' },
    { ic: 'ic-3.svg', manh: 'Đặt lệnh mua/bán', con: 'nhanh chóng, tiện lợi', anh: 'phone-datmua.png' },
    { ic: 'ic-1.svg', manh: 'Quản lý tài sản', con: 'đầu tư của Quý khách dễ dàng', anh: 'phone-quanlytaisan.png' },
    { ic: 'ic-4.svg', manh: 'Hỗ trợ QRPay', con: 'tương thích với hầu hết các app ngân hàng', anh: 'phone-qrpay.png' }
  ]
};

const TAIAPP = {
  title: 'Tải app VinaCapital MiO ngay',
  lead: 'Quét mã QR bằng camera điện thoại, hoặc tải thẳng từ cửa hàng ứng dụng.',
  qr: 'qrcode.png',
  stores: [
    ['https://apps.apple.com/vn/app/vinacapital-mio/id1547223108', 'App Store', 'ic-apple.svg'],
    ['https://play.google.com/store/apps/details?id=com.vinacapital.mio', 'Google Play', 'ic-android.svg']
  ]
};

/* Chân trang lấy nguyên của trang index (shared.js) để hai bên giống nhau. */
const OFFICES = [
  ['Ho Chi Minh City', '17th Floor, Sun Wah Tower · 115 Nguyen Hue, Sai Gon Ward<br>+84 28 3821 9930'],
  ['Hanoi', '2nd Floor, International Centre · 17 Ngo Quyen, Hoan Kiem Ward<br>+84 24 3936 4630'],
  ['Singapore', '#42-01, Suntec Tower 4 · 6 Temasek Boulevard<br>+65 6332 9081']
];

const mark = '<svg viewBox="0 0 54 53" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="54" height="53" fill="#cb2b1a"/><path d="M0 0H54L27 53Z" fill="#BCBDC0"/></svg>';

function render() {
  return `
<a class="skip" href="#uu-diem">Tới nội dung chính</a>

<div class="mio-top">
  <div class="wrap mio-top__in">
    <span class="mio-top__lb">${TOPBAR.label}</span>
    <a href="${TOPBAR.tel[1]}">${TOPBAR.tel[0]}</a>
    <i aria-hidden="true">·</i>
    <a href="${TOPBAR.mail[1]}">${TOPBAR.mail[0]}</a>
    <i aria-hidden="true">·</i>
    <a href="${TOPBAR.web[1]}">${TOPBAR.web[0]}</a>
    <span class="mio-top__lang"><b>VI</b><s>/</s>EN</span>
  </div>
</div>

<header class="mio-hdr">
  <div class="wrap mio-hdr__in">
    <a class="mio-logo" href="index.html" aria-label="VinaCapital MiO — về trang chủ">
      <img src="${IMG}logo-mio.png" alt="VinaCapital MiO" width="263" height="31">
    </a>
    <nav class="mio-nav" aria-label="Điều hướng">
      <a href="funds.html">Giải pháp đầu tư</a>
    </nav>
    <div class="mio-hdr__act">
      <a class="mio-btn mio-btn--ghost" href="funds.html#dang-ky">Đăng ký</a>
      <a class="mio-btn" href="#tai-app">Đăng nhập</a>
    </div>
  </div>
</header>

<main>
<section class="mio-hero" id="slider" aria-roledescription="carousel" aria-label="Chương trình VinaCapital MiO">
  <div class="mio-hero__track">
    ${SLIDES.map((s, i) => `
    <div class="mio-slide${i === 0 ? ' is-on' : ''}" role="group" aria-roledescription="slide"
      aria-label="Ảnh ${i + 1} trên ${SLIDES.length}"${i === 0 ? '' : ' aria-hidden="true"'}>
      <img src="${IMG}${s.img}" alt="${s.alt}"${i === 0 ? ' fetchpriority="high"' : ' loading="lazy"'}>
    </div>`).join('')}
  </div>
  <button class="mio-hero__nav mio-hero__nav--prev" type="button" aria-label="Ảnh trước">‹</button>
  <button class="mio-hero__nav mio-hero__nav--next" type="button" aria-label="Ảnh sau">›</button>
  <div class="mio-dots" role="tablist" aria-label="Chọn ảnh">
    ${SLIDES.map((s, i) => `<button role="tab" type="button" class="${i === 0 ? 'is-on' : ''}"
      aria-selected="${i === 0}" aria-label="Ảnh ${i + 1}"></button>`).join('')}
  </div>
</section>

<section class="mio-uu" id="uu-diem">
  <div class="mio-uu__bg" aria-hidden="true"><img src="${IMG}bg-main.webp" alt="" loading="lazy"></div>
  <div class="wrap mio-uu__in">
    <div class="mio-uu__head">
      <h1><span>${UUDIEM.eyebrow}</span>${UUDIEM.title}</h1>
      <p class="mio-uu__lead">${UUDIEM.lead}</p>
    </div>

    <div class="mio-uu__grid">
      <div class="mio-uu__col">
        ${UUDIEM.items.slice(0, 2).map((u, i) => oUuDiem(u, i)).join('')}
      </div>

      <div class="mio-phone">
        ${UUDIEM.items.map((u, i) => `<img src="${IMG}${u.anh}" alt="Màn hình ${u.manh.toLowerCase()} trên ứng dụng VinaCapital MiO"
          class="${i === 0 ? 'is-on' : ''}" loading="${i === 0 ? 'eager' : 'lazy'}">`).join('')}
      </div>

      <div class="mio-uu__col mio-uu__col--r">
        ${UUDIEM.items.slice(2).map((u, i) => oUuDiem(u, i + 2)).join('')}
      </div>
    </div>
  </div>
</section>

<section class="mio-tai" id="tai-app">
  <div class="wrap mio-tai__in">
    <div>
      <h2>${TAIAPP.title}</h2>
      <p>${TAIAPP.lead}</p>
      <div class="mio-tai__st">
        ${TAIAPP.stores.map(s => `<a class="mio-store" href="${s[0]}" target="_blank" rel="noopener">
          <img src="${IMG}${s[2]}" alt="" aria-hidden="true"><span>${s[1]}</span></a>`).join('')}
      </div>
    </div>
    <figure class="mio-qr">
      <img src="${IMG}${TAIAPP.qr}" alt="Mã QR tải ứng dụng VinaCapital MiO" width="300" height="300">
      <figcaption>Quét để tải ngay</figcaption>
    </figure>
  </div>
</section>
</main>

<footer class="ftr" id="contact">
  <div class="wrap">
    <div class="ftr__grid">
      <div>
        <a class="logo" href="index.html" aria-label="VinaCapital">${mark}<b>VinaCapital</b></a>
        <p class="ftr__blurb">Vietnam’s leading multi-disciplinary investment management group — creating prosperity together since 2003.</p>
      </div>
      ${OFFICES.map(o => `<div><h4>${o[0]}</h4><p>${o[1]}</p></div>`).join('')}
    </div>
    <div class="ftr__legal">
      <p>Copyright © 2026 VinaCapital. All rights reserved.</p>
      <nav><a href="#">Điều kiện &amp; điều khoản sử dụng</a><a href="#">Chính sách bảo mật</a></nav>
    </div>
  </div>
</footer>`;
}

function oUuDiem(u, i) {
  return `<button class="mio-uu__it${i === 0 ? ' is-on' : ''}" type="button" data-uu="${i}" aria-pressed="${i === 0}">
    <span class="mio-uu__icw"><img class="mio-uu__ic" src="${IMG}${u.ic}" alt="" aria-hidden="true"></span>
    <span><b>${u.manh}</b> ${u.con}</span>
  </button>`;
}

const root = document.getElementById('site');
root.innerHTML = render();

/* ---------------------------------------------------------------- Banner */
(function bang() {
  const slides = [...root.querySelectorAll('.mio-slide')];
  const dots = [...root.querySelectorAll('.mio-dots button')];
  if (slides.length < 2) return;
  let n = 0;

  function toi(k) {
    n = (k + slides.length) % slides.length;
    slides.forEach((s, i) => {
      s.classList.toggle('is-on', i === n);
      /* ẩn hẳn khỏi trình đọc màn hình chứ không chỉ mờ đi */
      if (i === n) s.removeAttribute('aria-hidden'); else s.setAttribute('aria-hidden', 'true');
    });
    dots.forEach((d, i) => { d.classList.toggle('is-on', i === n); d.setAttribute('aria-selected', String(i === n)); });
  }

  root.querySelector('.mio-hero__nav--prev').addEventListener('click', () => { toi(n - 1); dung(); });
  root.querySelector('.mio-hero__nav--next').addEventListener('click', () => { toi(n + 1); dung(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { toi(i); dung(); }));

  /* Tự chạy, nhưng dừng hẳn khi người xem đã tự bấm — bấm rồi mà ảnh vẫn
     tự nhảy là khó chịu. Ai bật "giảm chuyển động" thì không tự chạy. */
  const tat = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let hen = tat ? null : setInterval(() => toi(n + 1), 6500);
  function dung() { if (hen) { clearInterval(hen); hen = null; } }
  const hero = root.querySelector('.mio-hero');
  hero.addEventListener('mouseenter', () => { if (hen) { clearInterval(hen); hen = null; } });

  hero.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { toi(n - 1); dung(); }
    if (e.key === 'ArrowRight') { toi(n + 1); dung(); }
  });
})();

/* ----------------------------------------------------- Đổi ảnh màn hình */
(function uu() {
  const nut = [...root.querySelectorAll('[data-uu]')];
  const anh = [...root.querySelectorAll('.mio-phone img')];
  if (!nut.length) return;

  const chon = (k) => {
    nut.forEach((b) => {
      const on = Number(b.dataset.uu) === k;
      b.classList.toggle('is-on', on);
      b.setAttribute('aria-pressed', String(on));
    });
    anh.forEach((a, i) => a.classList.toggle('is-on', i === k));
  };

  nut.forEach((b) => {
    const k = Number(b.dataset.uu);
    b.addEventListener('click', () => chon(k));
    b.addEventListener('mouseenter', () => chon(k));
    b.addEventListener('focus', () => chon(k));
  });
})();
