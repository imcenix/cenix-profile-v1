/* ==========================================================================
   TRANG THU LEAD — Quỹ mở VinaCapital
   Nội dung theo trang gốc (đang ẩn):
   vinacapital.com/vi/investment-solutions/dau-tu-quy-mo-vinacapital

   TRANG ĐỘC LẬP. Không nằm trong điều hướng chính, không trang nào link tới.
   Chỉ có logo bấm về trang chủ. Vì vậy file này KHÔNG dùng shared.js —
   không header đầy đủ, không dải cảnh báo, không pop-up.

   Tiếng Việt, khác phần còn lại của demo. Lý do: đối tượng là nhà đầu tư cá
   nhân trong nước, tên quỹ là tên tiếng Việt, và các lời chứng thực là trích
   dẫn thật của người thật — dịch lại rồi gán cho họ là nói sai lời họ.

   Theo layout khách gửi: đã BỎ phần video và phần logo đối tác.
   ========================================================================== */

const IMG = 'assets/images/';

/* Năm tab của nhóm trang riêng này, đúng như trang gốc đang ẩn. Tất cả đều là
   neo trong cùng một trang — trang gốc cũng làm vậy, đây là landing page một
   trang chứ không phải năm trang tách rời.
   Cột 2 là nhãn rút gọn hiển thị trên thanh; cột 3 là nhãn nguyên văn của
   trang gốc, dùng làm title khi rê chuột. Muốn chạy nguyên văn thì đổi n[1]
   thành n[2] ở chỗ render. */
const NAV = [
  ['#dang-ky', 'Đăng ký nhận tư vấn', 'Đăng Ký Nhận Tư Vấn'],
  ['#cac-quy', 'Các quỹ mở VinaCapital', 'Các Quỹ Mở Từ VinaCapital'],
  ['#vi-sao', 'Tại sao nên đầu tư', 'Tại Sao Nên Đầu Tư Quỹ Mở VinaCapital'],
  ['#noi-gi', 'Nhà đầu tư nói gì', 'Nhà Đầu Tư Nói Về Quỹ Mở VinaCapital'],
  ['#ve-vinacapital', 'Về VinaCapital', 'Về VinaCapital']
];

/* Chương trình đang chạy. Nội dung và ảnh chính thức do khách cấp;
   ở đây dùng chương trình có thật của VinaCapital thay vì bịa khuyến mãi. */
const PROMO = {
  tag: 'Chương trình đang triển khai',
  title: 'VinaSIP — Đầu\u00A0tư định\u00A0kỳ',
  desc: 'Trích một khoản cố định mỗi tháng để mua chứng chỉ quỹ. Cách làm này giúp bình quân giá vốn, giảm áp lực canh thời điểm và duy trì kỷ luật tích lũy dài hạn.',
  points: ['Từ 100.000đ mỗi kỳ', 'Tự động trích, không cần thao tác', 'Rút vốn bất kỳ lúc nào'],
  cta: 'Tìm hiểu VinaSIP',
  img: 'hcmc-hero'
};

const FORM = {
  title: 'Đăng ký nhận tư vấn đầu tư',
  lead: 'Chuyên viên của VinaCapital sẽ liên hệ trong vòng 24 giờ làm việc.',
  tiens: ['Dưới 50 triệu', '50 – 200 triệu', '200 – 500 triệu', '500 triệu – 1 tỷ', 'Trên 1 tỷ'],
  tinhs: ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Hải Phòng', 'Cần Thơ', 'Bình Dương', 'Đồng Nai', 'Khánh Hòa', 'Tỉnh / thành khác'],
  consent: 'Bằng việc nhấn “Gửi thông tin”, tôi đồng ý để VinaCapital sử dụng thông tin trên đây liên hệ giới thiệu sản phẩm, dịch vụ và chương trình của VinaCapital.',
  note: 'Thông tin của Quý khách không được dùng cho mục đích khác hay chia sẻ với bên thứ ba ngoài mục đích nêu trên.',
  submit: 'Gửi thông tin'
};

const APP = {
  tag: 'Ứng dụng MiO',
  title: 'Tải app đầu tư ngay',
  desc: 'Mở tài khoản, đặt lệnh và theo dõi danh mục ngay trên điện thoại.',
  stores: ['App Store', 'Google Play']
};

/* Số liệu lấy nguyên văn từ trang gốc VinaCapital.
   Cột `bq` là lợi nhuận bình quân năm, tính gộp từ chính các mức lợi nhuận
   theo năm mà VinaCapital công bố, CHỈ trên những năm dương lịch trọn vẹn.
   Không phải "từ khi thành lập" — năm thành lập và năm hiện tại đều là năm
   lẻ tháng nên đưa vào sẽ làm sai con số. Nhãn ghi rõ giai đoạn. */
const FUNDS = [
  {
    ma: 'VINACAPITAL-VDEF', loai: 'Cổ phiếu',
    ten: 'Quỹ Đầu tư Cổ phiếu Cơ hội Tiên phong VinaCapital',
    tom: 'Đầu tư vào cổ phiếu của những doanh nghiệp ít được thị trường chú ý và đang được định giá hấp dẫn, ưu tiên cổ phiếu vốn hóa vừa và nhỏ.',
    bq: '12,4%', bqKy: '2025',
    chiTiet: 'Quỹ hướng tới lợi nhuận vượt trội trong trung và dài hạn, đồng thời tối ưu hóa mối tương quan giữa lợi nhuận và rủi ro. Thành lập 24/06/2024.',
    moc: 'VN-Index',
    nam: [['2026 (đến 22/09)', '−1,6', '1,8'], ['2025', '12,4', '40,9'], ['2024 (từ 24/06)', '4,9', '1,0']]
  },
  {
    ma: 'VINACAPITAL-VEOF', loai: 'Cổ phiếu',
    ten: 'Quỹ Đầu tư Cổ phiếu Doanh nghiệp Hàng đầu VinaCapital',
    tom: 'Đầu tư chủ yếu vào cổ phiếu của các công ty đầu ngành, quy mô lớn hoặc có lợi thế cạnh tranh khác biệt.',
    bq: '15,8%', bqKy: '2021–2025',
    chiTiet: 'Mục tiêu mang lại lợi nhuận vượt trội trong trung và dài hạn, đồng thời tối ưu hóa mối tương quan giữa lợi nhuận và rủi ro.',
    moc: 'VN-Index',
    nam: [['2026 (đến 22/09)', '−8,1', '1,8'], ['2025', '13,6', '40,9'], ['2024', '24,4', '12,1'], ['2023', '19,5', '12,2'], ['2022', '−21,2', '−32,8'], ['2021', '56,5', '35,7']]
  },
  {
    ma: 'VINACAPITAL-VESAF', loai: 'Cổ phiếu vừa & nhỏ',
    ten: 'Quỹ Đầu tư Cổ phiếu Tăng trưởng Chiến lược VinaCapital',
    tom: 'Đầu tư vào cổ phiếu của những doanh nghiệp có nền tảng vững chắc và những công ty chưa được thị trường đánh giá hợp lý.',
    bq: '16,5%', bqKy: '2021–2025',
    chiTiet: 'Mục tiêu mang lại lợi nhuận vượt trội trong trung và dài hạn, đồng thời tối ưu hóa mối tương quan giữa lợi nhuận và rủi ro.',
    moc: 'VN-Index',
    nam: [['2026 (đến 22/09)', '−5,3', '1,8'], ['2025', '6,3', '40,9'], ['2024', '22,1', '12,1'], ['2023', '30,9', '12,2'], ['2022', '−24,4', '−32,8'], ['2021', '67,0', '35,7']]
  },
  {
    ma: 'VINACAPITAL-VMEEF', loai: 'Cổ phiếu chủ đề',
    ten: 'Quỹ Đầu tư Cổ phiếu Kinh tế Hiện đại VinaCapital',
    tom: 'Đầu tư vào doanh nghiệp có triển vọng tăng trưởng doanh thu và lợi nhuận dài hạn, gắn với các động lực phát triển kinh tế hiện đại của Việt Nam.',
    bq: '20,0%', bqKy: '2024–2025',
    chiTiet: 'Quản lý chủ động, xây dựng danh mục một cách kỷ luật. Thành lập 04/05/2023.',
    moc: 'VN-Index',
    nam: [['2026 (đến 22/09)', '−5,5', '1,8'], ['2025', '7,4', '40,9'], ['2024', '34,0', '12,1'], ['2023 (từ 04/05)', '13,1', '7,3']]
  },
  {
    ma: 'VINACAPITAL-VIBF', loai: 'Cân bằng',
    ten: 'Quỹ Đầu tư Cân bằng Gắn kết VinaCapital',
    tom: 'Kết hợp cổ phiếu và trái phiếu: hưởng lợi từ tiềm năng tăng giá của cổ phiếu, giảm biến động nhờ danh mục trái phiếu.',
    bq: '11,9%', bqKy: '2021–2025',
    chiTiet: 'Mục tiêu vượt trội so với chỉ số tham chiếu — bình quân của VN-Index và lãi suất tiết kiệm 12 tháng của Vietcombank.',
    moc: 'Chỉ số tham chiếu',
    nam: [['2026 (đến 22/09)', '−2,9', '3,0'], ['2025', '10,8', '22,8'], ['2024', '17,9', '8,4'], ['2023', '11,2', '9,2'], ['2022', '−10,5', '−13,4'], ['2021', '35,2', '20,6']]
  },
  {
    ma: 'VINACAPITAL-VFF', loai: 'Trái phiếu',
    ten: 'Quỹ Đầu tư Trái phiếu Nâng cao VinaCapital',
    tom: 'Chủ yếu đầu tư trái phiếu doanh nghiệp, chứng chỉ tiền gửi và tiền gửi, với mức rủi ro thấp.',
    bq: '7,5%', bqKy: '2021–2025',
    chiTiet: 'Mục tiêu đem lại lợi nhuận cao hơn lãi suất tiết kiệm 12 tháng cho nhà đầu tư dài hạn. Chỉ số tham chiếu là bình quân lãi suất tiết kiệm 12 tháng của Vietcombank, BIDV, VietinBank và Agribank.',
    moc: 'Chỉ số tham chiếu',
    nam: [['2026 (đến 21/09)', '5,3', '4,1'], ['2025', '7,1', '4,7'], ['2024', '6,9', '4,7'], ['2023', '8,0', '6,4'], ['2022', '8,0', '6,0'], ['2021', '7,7', '5,6']]
  }
];

/* Icon tự vẽ cho mục "vì sao đầu tư". Trang gốc có 5 icon SVG riêng nhưng
   đó là tài sản của khách, mình không lấy về — bộ dưới đây vẽ mới, cùng độ
   dày nét 1.6 để đứng chung một hàng nhìn đồng bộ. */
const IC = (d) => `<svg class="lp-ic" viewBox="0 0 28 28" fill="none" stroke="currentColor"
  stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;

const ICONS = [
  /* tài sản đi lên */
  IC('<path d="M3.5 24.5h21"/><path d="M4 19.5 10.5 13l4 4L23.5 7.5"/><path d="M18.5 7.5h5v5"/>'),
  /* chuyên môn — khiên và dấu tích */
  IC('<path d="M14 3 5 6.5v7c0 5.2 3.7 9.6 9 11.5 5.3-1.9 9-6.3 9-11.5v-7L14 3Z"/><path d="m10 13.8 2.9 2.9L18.4 11"/>'),
  /* thời gian */
  IC('<circle cx="14" cy="14" r="10.5"/><path d="M14 7.5V14l4.5 2.8"/>'),
  /* điện thoại — tham gia, rút vốn */
  IC('<rect x="8.5" y="2.5" width="11" height="23" rx="2.5"/><path d="M12.2 22.4h3.6"/><path d="M14 8v9"/><path d="m11.2 14.2 2.8 2.8 2.8-2.8"/>'),
  /* vốn nhỏ — chồng xu */
  IC('<ellipse cx="14" cy="7" rx="8.5" ry="3.4"/><path d="M5.5 7v6.5c0 1.9 3.8 3.4 8.5 3.4s8.5-1.5 8.5-3.4V7"/><path d="M5.5 13.5V20c0 1.9 3.8 3.4 8.5 3.4s8.5-1.5 8.5-3.4v-6.5"/>')
];

/* ------------------------------------------------------------------
   Cột nhỏ trong thẻ quỹ: lợi nhuận từng kỳ, cũ → mới.

   Một chuỗi duy nhất nên không cần chú giải. Dấu âm/dương đọc bằng VỊ TRÍ
   (trên / dưới đường 0), KHÔNG đọc bằng màu: bảng điện Việt Nam đỏ là tăng
   còn phương Tây đỏ là giảm, tô màu theo dấu là mỗi người hiểu một kiểu.
   Cột dương dùng màu chữ chính, cột âm dùng xám để lùi lại một nhịp.
   Số chính xác nằm ở bảng bên trong khi mở thẻ ra.
   ------------------------------------------------------------------ */
const soHoa = (t) => parseFloat(String(t).replace('\u2212', '-').replace(',', '.'));

function cot(nam) {
  const d = [...nam].reverse().map((x) => ({ ky: x[0], v: soHoa(x[1]) })).filter((x) => isFinite(x.v));
  if (d.length < 2) return '';
  const W = 116, H = 46, g = 3;
  const duong = Math.max(0, ...d.map((x) => x.v));
  const am = Math.max(0, ...d.map((x) => -x.v));
  const bien = (duong + am) || 1;
  const y0 = (duong / bien) * H;
  const w = (W - g * (d.length - 1)) / d.length;
  const bars = d.map((x, i) => {
    const h = Math.max(1.5, Math.abs(x.v) / bien * H);
    const x0 = i * (w + g);
    const y = x.v >= 0 ? y0 - h : y0;
    return `<rect x="${x0.toFixed(1)}" y="${y.toFixed(1)}" width="${w.toFixed(1)}" height="${h.toFixed(1)}"
      rx="1.5" class="${x.v >= 0 ? 'up' : 'dn'}"><title>${x.ky}: ${x.v > 0 ? '+' : ''}${String(x.v).replace('.', ',')}%</title></rect>`;
  }).join('');
  return `<figure class="lp-spark">
    <svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img"
      aria-label="Lợi nhuận từng kỳ, từ ${d[0].ky} đến ${d[d.length - 1].ky}">
      <line x1="0" x2="${W}" y1="${y0.toFixed(1)}" y2="${y0.toFixed(1)}" class="zero"/>
      ${bars}
    </svg>
  </figure>`;
}

const LYDO = {
  title: 'Vì sao nên đầu tư quỹ mở VinaCapital',
  items: [
    ['Tăng trưởng tài sản nhanh hơn', 'Vốn được đưa vào danh mục do đội ngũ chuyên nghiệp quản lý, thay vì để yên một chỗ.'],
    ['Yên tâm về chuyên môn', 'Đội ngũ phân tích theo sát thị trường mỗi ngày, quyết định dựa trên dữ liệu.'],
    ['Không chiếm thời gian của bạn', 'Tập trung cho kinh doanh, sự nghiệp và gia đình — phần đầu tư đã có người lo.'],
    ['Tham gia dễ dàng, rút vốn linh hoạt', 'Mở tài khoản online, giao dịch qua ứng dụng MiO, rút vốn bất kỳ lúc nào.'],
    ['Bắt đầu từ số vốn nhỏ', 'Không cần vốn lớn mới đầu tư được; có thể góp đều mỗi tháng qua VinaSIP.']
  ]
};

/* Trích dẫn thật, đăng công khai trên trang gốc của VinaCapital.
   Giữ nguyên văn và nguyên tên người nói — không sửa, không dịch. */
const NOIGI = {
  title: 'Nhà đầu tư nói gì',
  items: [
    ['Nhìn dài hạn trong 20 năm vừa qua, VinaCapital đã tham gia đầu tư liên tục tại Việt Nam và ghi nhận sự tăng trưởng ấn tượng. Vì thế, khi giao tài sản đầu tư cho đội ngũ chuyên nghiệp của quỹ mở VinaCapital thì tôi cảm thấy yên tâm và thoải mái hơn với cuộc sống của mình.',
     'Bà My Holland', 'Nhà sáng lập kiêm Giám đốc Điều hành, EQuest Asia'],
    ['Tôi chọn quỹ mở VinaCapital vì họ có đội ngũ chuyên gia giàu kinh nghiệm và phân tích kỹ lưỡng. Tôi chọn cách đầu tư định kỳ VinaSIP để tích lũy tài sản đều đặn cho mục tiêu dài hạn của mình.',
     'Chị Trần Hồng Thắm', 'Giám đốc Nhân sự, Công ty Minh An'],
    ['Là một luật sư, tôi đánh giá cao tính minh bạch và chuyên nghiệp trong quản lý tài chính. VinaCapital luôn cung cấp thông tin chi tiết và cập nhật thường xuyên, giúp tôi nắm bắt được tình hình đầu tư một cách rõ ràng.',
     'Chị Nguyễn Thị Vĩnh Xuân', 'Luật sư, Công ty Luật Yulchon'],
    ['Khoản đầu tư giá trị nhất là chăm sóc cho những người yêu thương, và quỹ mở cho tôi thêm thời gian dành cho gia đình. Khi đầu tư quỹ mở VinaCapital, tôi không mất nhiều thời gian để theo dõi bởi đã có các nhà đầu tư chuyên nghiệp thay mình đầu tư và kiểm soát rủi ro.',
     'Bà Trang Lạ', 'Cựu người mẫu']
  ]
};

const VE = {
  title: 'Về VinaCapital',
  lead: 'Tập đoàn quản lý đầu tư đa ngành hàng đầu Việt Nam, hoạt động từ năm 2003.',
  stats: [['3,8 tỷ USD', 'Tổng tài sản quản lý'], ['200+', 'Đội ngũ nhân sự'], ['7', 'Loại tài sản'], ['23', 'Năm kinh nghiệm']]
};

/* Chân dung thật của bốn người này nằm trên trang gốc của khách; mình không
   tải về được nên tạm dùng chữ cái đầu. KHÔNG bao giờ ghép ảnh người khác
   hay ảnh dựng cho một lời nói có tên thật. */
const chuDau = (ten) => {
  const t = ten.replace(/^(Bà|Ông|Chị|Anh)\s+/, '').trim().split(/\s+/);
  return (t[0][0] + (t[t.length - 1][0] || '')).toUpperCase();
};

const mark = '<svg viewBox="0 0 54 53" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="54" height="53" fill="#cb2b1a"/><path d="M0 0H54L27 53Z" fill="#BCBDC0"/></svg>';

function render() {
  return `
<a class="skip" href="#dang-ky">Tới phần đăng ký</a>

<header class="lp-hdr">
  <div class="wrap lp-hdr__in">
    <a class="logo" href="index.html" aria-label="VinaCapital — về trang chủ">${mark}<b>VinaCapital</b></a>
    <nav class="lp-nav" aria-label="Nội dung trang">
      ${NAV.map((n, i) => `<a href="${n[0]}" title="${n[2]}" data-spy="${n[0].slice(1)}"${i === 0 ? ' class="is-on"' : ''}>${n[1]}</a>`).join('')}
    </nav>
    <a class="lp-hdr__cta" href="#dang-ky">Đăng ký <i>→</i></a>
  </div>
</header>

<main>
<section class="lp-hero" id="dang-ky">
  <div class="lp-hero__bg">
    <picture>
      <source srcset="${IMG}${PROMO.img}.webp" type="image/webp">
      <img src="${IMG}${PROMO.img}.jpg" alt="" aria-hidden="true" fetchpriority="high">
    </picture>
  </div>
  <span class="lp-hero__scrim" aria-hidden="true"></span>

  <div class="wrap lp-hero__grid">

    <div class="lp-hero__copy">
      <p class="eyebrow eyebrow--rule">${PROMO.tag}</p>
      <h1>${PROMO.title}</h1>
      <p class="lp-hero__desc">${PROMO.desc}</p>
      <ul class="lp-hero__pts">${PROMO.points.map(p => `<li>${p}</li>`).join('')}</ul>
      <a class="btn" href="#cac-quy">${PROMO.cta} <i>→</i></a>
    </div>

    <div class="lp-side">
      <form class="lp-form lp-glass" novalidate>
        <h2>${FORM.title}</h2>
        <p class="lp-form__lead">${FORM.lead}</p>
        <label><span>Họ và tên *</span><input type="text" name="hoten" required autocomplete="name"></label>
        <label><span>Email *</span><input type="email" name="email" required autocomplete="email"></label>
        <label><span>Số điện thoại *</span><input type="tel" name="dienthoai" required autocomplete="tel"></label>
        <label><span>Số tiền dự định đầu tư *</span>
          <select name="sotien" required><option value="">Hãy chọn số tiền</option>
          ${FORM.tiens.map(t => `<option>${t}</option>`).join('')}</select></label>
        <label><span>Tỉnh / Thành phố *</span>
          <select name="tinh" required><option value="">Chọn tỉnh / thành phố</option>
          ${FORM.tinhs.map(t => `<option>${t}</option>`).join('')}</select></label>
        <button class="btn lp-form__submit" type="submit">${FORM.submit} <i>→</i></button>
        <p class="lp-form__consent">${FORM.consent}</p>
        <p class="lp-form__note">${FORM.note}</p>
        <p class="lp-form__ok" hidden role="status"></p>
      </form>

      <aside class="lp-app lp-glass">
        <div>
          <p class="eyebrow eyebrow--rule">${APP.tag}</p>
          <h3>${APP.title}</h3>
          <p>${APP.desc}</p>
        </div>
        <div class="lp-app__btns">${APP.stores.map(st => `<a href="#" class="lp-store">${st}</a>`).join('')}</div>
      </aside>
    </div>

  </div>
</section>

<section class="lp-sect" id="cac-quy">
  <div class="wrap">
    <div class="lp-head">
      <h2>Các quỹ mở từ VinaCapital</h2>
      <p>Cột nhỏ trong mỗi thẻ là lợi nhuận từng năm, cũ nhất bên trái — cột nằm dưới vạch là năm lỗ. Bấm vào một quỹ để xem số liệu từng năm so với chỉ số tham chiếu.</p>
    </div>
    <div class="lp-funds">
      ${FUNDS.map((f, i) => `
      <article class="lp-fund" data-fund>
        <button class="lp-fund__t" type="button" aria-expanded="false" aria-controls="fund-${i}">
          <span class="lp-fund__ma">${f.ma}<em>${f.loai}</em></span>
          <span class="lp-fund__ten">${f.ten}</span>
          <span class="lp-fund__tom">${f.tom}</span>
          <span class="lp-fund__so">
            <span class="lp-fund__bq"><b>${f.bq}</b><small>Bình quân/năm · ${f.bqKy}</small></span>
            ${cot(f.nam)}
          </span>
          <span class="lp-fund__more" aria-hidden="true">Xem chi tiết <i>+</i></span>
        </button>
        <div class="lp-fund__b" id="fund-${i}">
          <p class="lp-fund__desc">${f.chiTiet}</p>
          <table class="lp-tab">
            <thead><tr><th>Kỳ</th><th>${f.ma.replace('VINACAPITAL-', '')}</th><th>${f.moc}</th></tr></thead>
            <tbody>${f.nam.map(r => `<tr><th scope="row">${r[0]}</th><td>${r[1]}%</td><td>${r[2]}%</td></tr>`).join('')}</tbody>
          </table>
          <a class="tlink" href="#dang-ky">Đăng ký nhận tư vấn <i>→</i></a>
        </div>
      </article>`).join('')}
    </div>
    <p class="lp-disc">Lợi nhuận quỹ mở không cố định hằng năm và đầu tư quỹ mở có thể có rủi ro thị trường. Lợi nhuận trong quá khứ không phải là chỉ báo cho kết quả trong tương lai. Con số “bình quân/năm” được tính gộp từ chính các mức lợi nhuận theo năm do VinaCapital công bố, chỉ trên những năm dương lịch trọn vẹn của giai đoạn ghi kèm.</p>
  </div>
</section>

<section class="lp-sect lp-sect--sand" id="vi-sao">
  <div class="wrap">
    <div class="lp-head"><h2>${LYDO.title}</h2></div>
    <div class="lp-why">
      ${LYDO.items.map((l, i) => `<article>
        <span class="lp-why__ic">${ICONS[i] || ''}</span>
        <b>${String(i + 1).padStart(2, '0')}</b>
        <h3>${l[0]}</h3><p>${l[1]}</p>
      </article>`).join('')}
      <article class="lp-why__cta">
        <h3>Chưa rõ nên bắt đầu từ\u00A0đâu?</h3>
        <p>Để chuyên viên gọi lại và tư vấn quỹ phù hợp với mục tiêu của bạn.</p>
        <a class="btn" href="#dang-ky">Đăng ký nhận tư vấn <i>→</i></a>
      </article>
    </div>
  </div>
</section>

<section class="lp-sect" id="noi-gi">
  <div class="wrap">
    <div class="lp-head"><h2>${NOIGI.title}</h2></div>
    <div class="lp-says">
      ${NOIGI.items.map(t => `<figure>
        <span class="lp-says__q" aria-hidden="true">&ldquo;</span>
        <blockquote>${t[0]}</blockquote>
        <figcaption>
          <span class="lp-says__av" aria-hidden="true">${chuDau(t[1])}</span>
          <span><b>${t[1]}</b><span>${t[2]}</span></span>
        </figcaption>
      </figure>`).join('')}
    </div>
  </div>
</section>

<section class="lp-strip" aria-hidden="true">
  <div class="lp-strip__bg"><img src="${IMG}hcmc-band-twilight.webp" alt="" loading="lazy"></div>
  <span class="lp-strip__scrim"></span>
</section>

<section class="lp-about" id="ve-vinacapital">
  <div class="lp-about__bg"><img src="${IMG}hcmc-panorama.webp" alt="" loading="lazy"></div>
  <span class="lp-about__scrim" aria-hidden="true"></span>
  <div class="wrap">
    <div class="lp-head lp-head--light"><h2>${VE.title}</h2><p>${VE.lead}</p></div>
    <div class="lp-stats">
      ${VE.stats.map(s => `<article><strong>${s[0]}</strong><span>${s[1]}</span></article>`).join('')}
    </div>
  </div>
</section>
</main>

<footer class="lp-ftr">
  <div class="wrap lp-ftr__in">
    <div>
      <a class="logo" href="index.html" aria-label="VinaCapital">${mark}<b>VinaCapital</b></a>
      <p>Lầu 17, Tòa nhà Sun Wah · 115 Nguyễn Huệ, Phường Sài Gòn, TP. Hồ Chí Minh<br>+84 28 3821 9930 · info@vinacapital.com</p>
    </div>
    <p class="lp-ftr__legal">Copyright © 2024 VinaCapital. All rights reserved.</p>
  </div>
</footer>`;
}

const root = document.getElementById('site');
root.innerHTML = render();

/* --- mở/đóng từng quỹ --- */
root.querySelectorAll('[data-fund]').forEach((el) => {
  const btn = el.querySelector('.lp-fund__t');
  btn.addEventListener('click', () => {
    const mo = el.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(mo));
  });
});

/* --- form: đây là bản demo, KHÔNG gửi dữ liệu đi đâu --- */
const form = root.querySelector('.lp-form');
const ok = root.querySelector('.lp-form__ok');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const thieu = [...form.querySelectorAll('[required]')].filter((f) => !f.value.trim());
  form.querySelectorAll('[required]').forEach((f) => f.classList.toggle('is-bad', !f.value.trim()));
  if (thieu.length) {
    ok.hidden = false;
    ok.className = 'lp-form__ok is-bad';
    ok.textContent = 'Vui lòng điền đủ các trường có dấu *.';
    thieu[0].focus();
    return;
  }
  ok.hidden = false;
  ok.className = 'lp-form__ok';
  ok.textContent = 'Đã ghi nhận. Đây là bản demo nên thông tin không được gửi đi — bản chính thức sẽ nối vào hệ thống CRM của VinaCapital.';
  form.querySelectorAll('input,select').forEach((f) => { f.value = ''; });
});

/* --- tab tự sáng theo phần đang xem --- */
(function spy() {
  const nav = root.querySelector('.lp-nav');
  const tabs = [...root.querySelectorAll('.lp-nav a')];
  if (!nav) return;
  const dich = new Map(tabs.map((a) => [a.dataset.spy, a]));
  const moc = [...dich.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if (!moc.length) return;

  let dangXem = moc[0].id;
  const io = new IntersectionObserver((es) => {
    /* phần nào chiếm nhiều diện tích khung nhìn nhất thì tab đó sáng */
    es.forEach((e) => { e.target.dataset.ty = e.intersectionRatio.toFixed(3); });
    let tot = null, max = -1;
    for (const m of moc) {
      const r = parseFloat(m.dataset.ty || 0);
      if (r > max) { max = r; tot = m; }
    }
    if (!tot || tot.id === dangXem) return;
    dangXem = tot.id;
    tabs.forEach((a) => a.classList.toggle('is-on', a.dataset.spy === dangXem));
    /* màn hẹp: kéo tab đang sáng vào tầm nhìn của thanh */
    const sang = dich.get(dangXem);
    if (sang && nav.scrollWidth > nav.clientWidth) {
      sang.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
    }
  }, { threshold: [0, .12, .25, .5, .75, 1] });

  moc.forEach((m) => io.observe(m));

  /* gợi ý còn tab bị khuất bên phải */
  function nhacKeo() {
    const du = nav.scrollWidth - nav.clientWidth;
    nav.classList.toggle('has-more', du > 4);
    nav.classList.toggle('at-end', du > 4 && nav.scrollLeft >= du - 4);
  }
  nav.addEventListener('scroll', nhacKeo, { passive: true });
  window.addEventListener('resize', nhacKeo, { passive: true });
  nhacKeo();
})();
