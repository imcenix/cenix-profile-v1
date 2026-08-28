const ASSET='assets/images/';
const news=[
  ['20/08/2026','VinaCapital tăng cường hợp tác, chia sẻ chuyên môn để tạo giá trị bền vững cho đối tác và khách hàng'],
  ['19/08/2026','VinaCapital hợp tác cùng Chứng khoán MB phân phối chứng chỉ quỹ mở'],
  ['29/07/2026','Bổ sung Công ty TNHH Chứng khoán Ngân hàng TMCP Ngoại thương Việt Nam vào danh sách đại lý phân phối chứng chỉ quỹ mở VinaCapital'],
  ['16/06/2026','VinaCapital niêm yết hai quỹ ETF chiến lược đầu tiên tại Việt Nam'],
  ['12/06/2026','VinaCapital cập nhật tên và chiến lược đầu tư các quỹ mở'],
  ['14/05/2026','VinaCapital hợp tác cùng Chứng khoán CV phân phối chứng chỉ quỹ mở'],
  ['18/04/2026','VinaCapital được chọn để cùng dẫn dắt Quỹ Đầu tư Mạo hiểm Thành phố Hồ Chí Minh'],
  ['19/03/2026','VinaCapital hợp tác cùng Chứng khoán Rồng Việt phân phối chứng chỉ quỹ mở'],
  ['24/02/2026','VinaCapital ra mắt hai quỹ ETF chiến lược đầu tiên tại Việt Nam']
];

const heroCopy={
  label:'Tập đoàn quản lý đầu tư đa ngành hàng đầu Việt Nam',
  title:'Kiến tạo giá trị từ sự phát triển mạnh mẽ của Việt Nam',
  body:'Tự hào là Tập đoàn quản lý đầu tư đa ngành hàng đầu tại Việt Nam, chúng tôi sở hữu vị thế đặc biệt để kiến tạo giá trị, đồng thời mang đến những cơ hội và lợi ích từ sự phát triển mạnh mẽ của đất nước trên tất cả các loại tài sản.'
};
const quote='VinaCapital có niềm tin mãnh liệt vào Việt Nam. Chúng tôi đầu tư vào đất nước, lực lượng lao động, năng lượng và tương lai của Việt Nam.';
const solutionsIntro='Là tập đoàn quản lý tài sản đa lĩnh vực hàng đầu tại Việt Nam, VinaCapital cung cấp cho các nhà đầu tư trong và ngoài nước các cơ hội đầu tư để chia sẻ sự tăng trưởng của Việt Nam.';
const insightTitle='Trung tâm Tài chính Quốc tế Việt Nam (VIFC): Không phải là Dubai tiếp theo';
const esgCopy='VinaCapital khát vọng chia sẻ và lan tỏa sự thịnh vượng. Chúng tôi nghiên cứu, tìm tòi và đầu tư để mang đến sự khác biệt cho cộng đồng mà chúng tôi phục vụ, cũng như không ngừng theo đuổi mục tiêu vì một tương lai phát triển mạnh mẽ của Việt Nam.';

function header(){return `<header class="site-header"><img src="assets/logo-vinacapital.png" alt="VinaCapital"><nav class="site-nav"><a href="#about">Về chúng tôi</a><a href="#solutions">Giải pháp đầu tư</a><a href="#esg">ESG</a><a href="#insight">Kiến thức đầu tư</a><a href="#news">Tin tức & Phân tích</a><a href="#careers">Tuyển dụng</a><a href="#contact">Liên hệ</a><span class="lang">VI / EN</span><a class="mio" href="#">MiO</a></nav><span class="mobile-nav">MENU</span></header>`}
function fraud(){return `<section class="fraud"><div class="site-container"><div class="fraud__head"><div><p class="section-label">Bảo vệ nhà đầu tư</p><h2>Cảnh báo lừa đảo</h2></div><button class="fraud-toggle" aria-expanded="false">XEM THÔNG TIN QUAN TRỌNG +</button></div><div class="fraud__body"><p>Nhằm bảo vệ nhà đầu tư trước các hành vi giả mạo và gian lận lợi dụng thương hiệu và uy tín của VinaCapital, chúng tôi xin lưu ý những thông tin quan trọng sau:</p><ul><li>VinaCapital không thực hiện bất kỳ hoạt động tuyển dụng trực tuyến nào, bao gồm tuyển dụng việc làm từ xa, công việc tự do hoặc làm việc tại nhà.</li><li>VinaCapital hiện tại không thực hiện mời gọi nhà đầu tư tham gia các nhóm đầu tư chứng khoán thông qua Facebook, Zalo, Telegram, WhatsApp, Viber, Messenger hoặc bất kỳ nền tảng mạng xã hội hoặc nhắn tin nào khác.</li><li>Chứng chỉ quỹ mở chỉ được giao dịch thông qua ứng dụng MiO hoặc các ứng dụng của đại lý phân phối chính thức.</li></ul></div></div></section>`}
function footer(){return `<footer class="site-footer" id="contact"><div class="site-container footer-grid"><div><img src="assets/logo-vinacapital.png" alt="VinaCapital"><p>Copyright © 2024 VinaCapital. All rights reserved.</p><p>Điều Kiện & Điều Khoản Sử Dụng · Chính Sách Bảo Mật</p></div><div><h4>Thành phố Hồ Chí Minh</h4><p>Lầu 17, Tòa nhà Sunwah<br>115 Nguyễn Huệ, Phường Sài Gòn<br>+84 28 3821 9930<br>Info@vinacapital.com</p></div><div><h4>Hà Nội</h4><p>Lầu 2, International Centre<br>17 Ngô Quyền, Phường Hoàn Kiếm<br>+84 24 3936 4630</p></div><div><h4>Singapore</h4><p>#42-01, Suntec Tower 4<br>6 Temasek Boulevard<br>Singapore 038986<br>+65 6332 9081</p></div></div></footer>`}
function quietNewsRows(){return news.slice(1).map(item=>`<div class="q-news-row"><time class="news-date">${item[0]}</time><span>${item[1]}</span></div>`).join('')}
function constructiveNewsRows(){return news.slice(1).map(item=>`<div class="c-news-row"><time class="news-date">${item[0]}</time><span>${item[1]}</span></div>`).join('')}
function motionNewsRows(){return news.slice(1).map(item=>`<div class="m-news-row"><time class="news-date">${item[0]}</time><span>${item[1]}</span></div>`).join('')}

function quiet(){return `<main class="website quiet">
${header()}
<section class="q-hero"><div class="site-container q-hero__frame"><div class="q-hero__copy"><p class="section-label">${heroCopy.label}</p><h1>${heroCopy.title}</h1><p>${heroCopy.body}</p><div style="margin-top:28px"><a class="site-cta" href="#about">Xem thêm <span class="arr">→</span></a></div></div><div class="q-hero__image"><span>Vietnam · Long-term perspective</span></div></div></section>
<section class="q-about" id="about"><div class="site-container"><p class="section-label">Đồng hành Phát triển Phồn vinh</p><blockquote class="q-quote">${quote}</blockquote><div class="q-about__action"><a class="site-cta outline" href="#">Tìm hiểu VinaCapital <span class="arr">→</span></a></div></div></section>
<section class="q-solutions" id="solutions"><div class="site-container"><div class="q-solutions__head"><div><p class="section-label">Các giải pháp đầu tư của VinaCapital</p><h2>Chia sẻ sự tăng trưởng của Việt Nam</h2></div><p>${solutionsIntro}</p></div><div class="q-solution-grid"><article class="q-solution"><div class="q-solution__top"><span>01 / GLOBAL</span><a href="#" aria-label="Xem Quỹ đầu tư ngoài nước">↗</a></div><h3>Quỹ đầu tư ngoài nước</h3><p>Tiếp cận cơ hội tăng trưởng tại Việt Nam thông qua nền tảng quản lý đầu tư giàu kinh nghiệm.</p></article><article class="q-solution"><div class="q-solution__top"><span>02 / DOMESTIC</span><a href="#" aria-label="Xem Quỹ đầu tư trong nước">↗</a></div><h3>Quỹ đầu tư trong nước</h3><p>Danh mục quỹ đa dạng, phù hợp với nhiều mục tiêu và khẩu vị đầu tư khác nhau.</p></article><article class="q-solution"><div class="q-solution__top"><span>03 / ALTERNATIVES</span><a href="#" aria-label="Xem Đầu tư thay thế">↗</a></div><h3>Đầu tư thay thế</h3><p>Giải pháp chuyên biệt trong công nghệ, năng lượng, hạ tầng và bất động sản.</p></article></div><div style="margin-top:30px"><a class="site-cta" href="#">Khám phá các giải pháp <span class="arr">→</span></a></div></div></section>
<section class="q-news" id="news"><div class="site-container"><p class="section-label">Tin mới nhất</p><h2 class="news-title-one-line">Thông tin cập nhật từ VinaCapital</h2><div class="q-news__layout"><article class="q-news__lead"><img src="${ASSET}investor.jpg" alt="Nhà đầu tư và lãnh đạo doanh nghiệp"><time class="news-date" style="display:block;margin-top:20px">${news[0][0]}</time><h3>${news[0][1]}</h3><a class="site-cta outline" href="#">Xem tất cả <span class="arr">→</span></a></article><div class="q-news__list">${quietNewsRows()}</div></div></div></section>
<section class="q-insight" id="insight"><div class="site-container q-insight__card"><div class="q-insight__image"></div><div class="q-insight__copy"><p class="section-label">Phân tích mới nhất</p><h2>${insightTitle}</h2><p>Góc nhìn chuyên môn từ đội ngũ VinaCapital về những động lực định hình thị trường và cơ hội đầu tư tại Việt Nam.</p><div><a class="site-cta" href="#">Xem phân tích <span class="arr">→</span></a></div></div></div></section>
<section class="q-esg" id="esg"><div class="site-container q-esg__grid"><img src="${ASSET}esg.jpg" alt="Đầu tư có trách nhiệm tại Việt Nam"><div><p class="section-label">ESG</p><h2>Đầu tư có trách nhiệm</h2><p>${esgCopy}</p><a class="site-cta" href="#">Xem thêm <span class="arr">→</span></a></div></div></section>
<section class="q-presence"><div class="site-container"><p class="section-label">Sự hiện diện của chúng tôi</p><h2>Năng lực được xây dựng qua hơn hai thập kỷ</h2><div class="q-stats"><div class="q-stat"><strong>3,8 tỷ USD</strong><p>Tổng tài sản quản lý</p></div><div class="q-stat"><strong>200+</strong><p>Đội ngũ nhân sự</p></div><div class="q-stat"><strong>7</strong><p>Loại tài sản: cổ phiếu, trái phiếu, vốn tư nhân, công nghệ, năng lượng & hạ tầng, bất động sản và tín chỉ carbon</p></div><div class="q-stat"><strong>23</strong><p>Năm kinh nghiệm</p></div></div></div></section>
${fraud()}${footer()}</main>`}

function constructive(){return `<main class="website constructive">
${header()}
<section class="c-hero"><div class="site-container"><div class="c-hero__frame"><div class="c-hero__copy"><p class="section-label">${heroCopy.label}</p><h1>${heroCopy.title}</h1><p>${heroCopy.body}</p><div style="margin-top:27px"><a class="site-cta" href="#about">Xem thêm <span class="arr">→</span></a></div></div><div class="c-hero__visual"><div class="shape-corner"></div><div class="shape-cut"></div></div></div><div class="c-metrics"><div><strong>3,8 tỷ USD</strong>Tổng tài sản quản lý</div><div><strong>23 năm</strong>Kinh nghiệm</div><div><strong>7</strong>Loại tài sản</div><div><strong>200+</strong>Nhân sự</div></div></div></section>
<section class="c-about" id="about"><div class="site-container c-about__grid"><div class="c-about__visual" role="img" aria-label="Hạ tầng cầu hiện đại tại Việt Nam"></div><div class="c-about__copy"><p class="section-label">Đồng hành Phát triển Phồn vinh</p><p class="c-statement">${quote}</p><div style="margin-top:28px"><a class="site-cta outline" href="#">Tìm hiểu VinaCapital <span class="arr">→</span></a></div></div></div></section>
<section class="c-solutions" id="solutions"><div class="site-container"><div class="c-solutions__head"><div><p class="section-label">Các giải pháp đầu tư của VinaCapital</p><h2>Chia sẻ sự tăng trưởng của Việt Nam</h2></div><p>${solutionsIntro}</p></div><div class="c-solution-grid"><article class="c-solution"><div class="c-solution__top"><span>01 / GLOBAL</span><span>↗</span></div><h3>Quỹ đầu tư ngoài nước</h3><p>Chiến lược chuyên sâu dành cho nhà đầu tư tìm kiếm cơ hội tại Việt Nam.</p></article><article class="c-solution"><div class="c-solution__top"><span>02 / DOMESTIC</span><span>↗</span></div><h3>Quỹ đầu tư trong nước</h3><p>Hệ sinh thái quỹ mở và ETF được thiết kế cho nhiều mục tiêu tài chính.</p></article><article class="c-solution"><div class="c-solution__top"><span>03 / ALTERNATIVES</span><span>↗</span></div><h3>Đầu tư thay thế</h3><p>Năng lượng, hạ tầng, bất động sản và công nghệ kiến tạo giá trị dài hạn.</p></article></div><div style="margin-top:48px"><a class="site-cta" href="#">Khám phá các giải pháp <span class="arr">→</span></a></div></div></section>
<section class="c-news" id="news"><div class="site-container"><p class="section-label">Tin mới nhất</p><h2 class="news-title-one-line">Thông tin cập nhật từ VinaCapital</h2><div class="c-news__grid"><article class="c-news__feature"><img src="${ASSET}investor.jpg" alt="Nhà đầu tư và lãnh đạo doanh nghiệp"><time class="news-date" style="display:block;margin-top:20px">${news[0][0]}</time><h3>${news[0][1]}</h3><a class="site-cta outline" href="#">Xem tất cả <span class="arr">→</span></a></article><div class="c-news__list">${constructiveNewsRows()}</div></div></div></section>
<section class="c-insight" id="insight"><div class="site-container c-insight__card"><div class="c-insight__image"></div><div class="c-insight__copy"><p class="section-label">Phân tích mới nhất</p><h2>${insightTitle}</h2><p>Góc nhìn chuyên môn từ đội ngũ VinaCapital về những động lực định hình thị trường và cơ hội đầu tư tại Việt Nam.</p><a class="site-cta" href="#">Xem phân tích <span class="arr">→</span></a></div></div></section>
<section class="c-esg" id="esg"><div class="site-container c-esg__grid"><img src="${ASSET}esg.jpg" alt="Đầu tư có trách nhiệm tại Việt Nam"><div><p class="section-label">ESG</p><h2>Đầu tư có trách nhiệm</h2><p>${esgCopy}</p><a class="site-cta" href="#">Xem thêm <span class="arr">→</span></a></div></div></section>
<section class="c-presence"><div class="site-container"><p class="section-label">Sự hiện diện của chúng tôi</p><h2>Năng lực được xây dựng qua hơn hai thập kỷ</h2><div class="c-stats"><div class="c-stat"><strong>3,8 tỷ USD</strong><p>Tổng tài sản quản lý</p></div><div class="c-stat"><strong>200+</strong><p>Đội ngũ nhân sự</p></div><div class="c-stat"><strong>7</strong><p>Loại tài sản trong hệ sinh thái đầu tư</p></div><div class="c-stat"><strong>23</strong><p>Năm kinh nghiệm</p></div></div></div></section>
${fraud()}${footer()}</main>`}

function motion(){return `<main class="website motion">
${header()}
<section class="m-hero"><div class="site-container m-hero__copy"><p class="section-label" style="color:#fff">${heroCopy.label}</p><h1>${heroCopy.title}</h1><p>${heroCopy.body}</p><div style="margin-top:28px"><a class="site-cta" href="#about">Xem thêm <span class="arr">→</span></a></div></div><span class="m-hero__index">Vietnam · Growth in perspective</span></section>
<section class="m-image-story" aria-label="Hình ảnh phát triển Việt Nam"><div class="m-image-track"><figure class="m-story-image"><img src="${ASSET}hcm-river.jpg" alt="Đô thị Thành phố Hồ Chí Minh"><span>Đô thị</span></figure><figure class="m-story-image"><img src="${ASSET}infrastructure.jpg" alt="Hạ tầng giao thông Việt Nam"><span>Hạ tầng</span></figure><figure class="m-story-image"><img src="${ASSET}hcm-heritage.jpg" alt="Di sản đô thị Thành phố Hồ Chí Minh"><span>Di sản</span></figure><figure class="m-story-image"><img src="${ASSET}urban-motion.jpg" alt="Chuyển động đô thị Việt Nam"><span>Chuyển động</span></figure></div></section>
<section class="m-about" id="about"><div class="site-container m-about__frame"><div class="m-about__card"><p class="section-label">Đồng hành Phát triển Phồn vinh</p><p class="m-about__statement">${quote}</p><div style="margin-top:28px"><a class="site-cta outline" href="#">Tìm hiểu VinaCapital <span class="arr">→</span></a></div></div></div></section>
<section class="m-solutions" id="solutions"><div class="site-container"><div class="m-solutions__head"><p class="section-label">Các giải pháp đầu tư của VinaCapital</p><h2>Chia sẻ sự tăng trưởng của Việt Nam</h2><p>${solutionsIntro}</p></div><div class="m-solution-grid"><article class="m-solution"><img src="${ASSET}hcm-financial-district.jpg" alt="Trung tâm tài chính Thành phố Hồ Chí Minh"><div class="m-solution__copy"><span class="m-solution__number">01 / GLOBAL</span><h3>Quỹ đầu tư ngoài nước</h3><p>Kết nối nguồn vốn quốc tế với những cơ hội nổi bật trong nền kinh tế Việt Nam.</p></div></article><article class="m-solution"><img src="${ASSET}hcm-heritage.jpg" alt="Đô thị Việt Nam"><div class="m-solution__copy"><span class="m-solution__number">02 / DOMESTIC</span><h3>Quỹ đầu tư trong nước</h3><p>Đồng hành cùng nhà đầu tư Việt Nam qua hệ sinh thái sản phẩm đa dạng.</p></div></article><article class="m-solution"><img src="${ASSET}infrastructure.jpg" alt="Hạ tầng Việt Nam"><div class="m-solution__copy"><span class="m-solution__number">03 / ALTERNATIVES</span><h3>Đầu tư thay thế</h3><p>Thúc đẩy tăng trưởng qua công nghệ, năng lượng, hạ tầng và tài sản thực.</p></div></article></div><div style="margin-top:30px"><a class="site-cta" href="#">Khám phá các giải pháp <span class="arr">→</span></a></div></div></section>
<section class="m-news" id="news"><div class="site-container"><p class="section-label">Tin mới nhất</p><h2 class="news-title-one-line">Thông tin cập nhật từ VinaCapital</h2><div class="m-news__feature"><img src="${ASSET}investor.jpg" alt="Nhà đầu tư và lãnh đạo doanh nghiệp"><div class="m-news__copy"><time class="news-date">${news[0][0]}</time><h3>${news[0][1]}</h3><div><a class="site-cta outline" href="#">Đọc tin <span class="arr">→</span></a></div></div></div><div class="m-news__list">${motionNewsRows()}</div><div style="margin-top:30px"><a class="site-cta outline" href="#">Xem tất cả <span class="arr">→</span></a></div></div></section>
<section class="m-insight" id="insight"><div class="site-container"><div class="m-insight__copy"><p class="section-label" style="color:#fff">Phân tích mới nhất</p><h2>${insightTitle}</h2><p>Góc nhìn chuyên môn từ đội ngũ VinaCapital về những động lực định hình thị trường và cơ hội đầu tư tại Việt Nam.</p><a class="site-cta" href="#">Xem phân tích <span class="arr">→</span></a></div></div></section>
<section class="m-esg" id="esg"><div class="site-container m-esg__grid"><img src="${ASSET}esg.jpg" alt="Đầu tư có trách nhiệm tại Việt Nam"><div class="m-esg__copy"><p class="section-label">ESG</p><h2>Đầu tư có trách nhiệm</h2><p>${esgCopy}</p><div><a class="site-cta" href="#">Xem thêm <span class="arr">→</span></a></div></div></div></section>
<section class="m-presence"><div class="site-container"><p class="section-label">Sự hiện diện của chúng tôi</p><h2>Năng lực được xây dựng qua hơn hai thập kỷ</h2><div class="m-stats"><div class="m-stat"><strong>3,8 tỷ USD</strong><p>Tổng tài sản quản lý</p></div><div class="m-stat"><strong>200+</strong><p>Đội ngũ nhân sự</p></div><div class="m-stat"><strong>7</strong><p>Loại tài sản trong hệ sinh thái đầu tư</p></div><div class="m-stat"><strong>23</strong><p>Năm kinh nghiệm</p></div></div></div></section>
${fraud()}${footer()}</main>`}

const renderers=[null,quiet,constructive,motion];
const names=['','Fullscreen','Constructive Capital','Vietnam in Motion'];
const optionSwitcher=document.querySelector('.option-switcher');
const switcherMarker=document.createElement('div');
switcherMarker.className='option-switcher-placeholder';
optionSwitcher.parentNode.insertBefore(switcherMarker,optionSwitcher);
function updateSwitcher(){
  const fixed=window.scrollY>=switcherMarker.offsetTop;
  optionSwitcher.classList.toggle('is-fixed',fixed);
  switcherMarker.style.height=fixed?`${optionSwitcher.offsetHeight}px`:'0px';
}
function render(option,scroll=false){
  document.querySelector('#site-root').innerHTML=renderers[option]();
  document.querySelector('#demo-title').textContent=names[option];
  document.querySelectorAll('[data-option]').forEach(button=>button.classList.toggle('is-active',Number(button.dataset.option)===option));
  localStorage.setItem('vc-design-direction',String(option));
  if(scroll)document.querySelector('#demo').scrollIntoView({behavior:'smooth'});
}
window.addEventListener('scroll',updateSwitcher,{passive:true});
window.addEventListener('resize',updateSwitcher);
document.addEventListener('click',event=>{
  const optionButton=event.target.closest('[data-option]');
  if(optionButton){render(Number(optionButton.dataset.option),true);return}
  const fraudButton=event.target.closest('.fraud-toggle');
  if(fraudButton){
    const body=fraudButton.closest('.fraud').querySelector('.fraud__body');
    const open=body.classList.toggle('is-open');
    fraudButton.setAttribute('aria-expanded',String(open));
    fraudButton.textContent=open?'THU GỌN −':'XEM THÔNG TIN QUAN TRỌNG +';
  }
});
render(Number(localStorage.getItem('vc-design-direction')||1));
updateSwitcher();
