/* About: text and portrait/name pairings checked against
   https://vinacapital.com/vi/about-us/ on 15 September 2026.
   Homepage and shared files are deliberately unchanged. */
const ABOUT_IMG = `${IMG}about/`;
const paragraphs = items => items.map(p => `<p>${p}</p>`).join('');
const INTRO = {
  quote: 'Sứ mệnh của VinaCapital là giúp nhà đầu tư khám phá các cơ hội đầu tư tốt nhất tại Việt Nam bằng cách tận dụng các mối quan hệ sâu rộng, kiến thức đầu tư, khả năng phân tích và chuyên môn tài chính của mình.',
  body: [
    'Tự hào là Tập đoàn quản lý đầu tư đa ngành hàng đầu tại Việt Nam, chúng tôi sở hữu vị thế đặc biệt để kiến tạo giá trị, đồng thời mang đến những cơ hội và lợi ích từ sự phát triển mạnh mẽ của đất nước trên tất cả các loại tài sản.',
    'Các chuyên gia của chúng tôi có kinh nghiệm đầu tư bài bản về các loại tài sản truyền thống và thay thế, bao gồm cổ phiếu, tài sản có thu nhập cố định, cổ phần tư nhân, công nghệ, bất động sản và năng lượng sạch.'
  ]
};
const STATS = [['3,8 tỷ USD','Tổng tài sản quản lý'],['200+','Đội ngũ nhân sự'],['7','Loại tài sản'],['23','Năm kinh nghiệm']];
const VISION = 'Những giá trị cốt lõi, kết hợp với kiến thức toàn cầu, hiểu biết địa phương và kinh nghiệm lâu năm của chúng tôi, cho phép chúng tôi mang lại kết quả đầu tư dài hạn vượt trội và trở thành đối tác tin cậy cho các nhà đầu tư trong nước và quốc tế khi đầu tư vào Việt Nam.';
const GOV = {
  intro:'VinaCapital cam kết tuân thủ những tiêu chuẩn toàn cầu cao nhất trong quản trị doanh nghiệp ở tất cả các lĩnh vực hoạt động, bao gồm các chính sách, thủ tục, hướng dẫn về quy tắc đạo đức, các hoạt động kinh doanh, kiểm soát tài chính, báo cáo và quản trị rủi ro.',
  items:[
    ['Chuẩn mực quản trị và đạo đức',[
      'VinaCapital luôn áp dụng các tiêu chuẩn thực hành này trong hệ thống trực thuộc Tập đoàn và các doanh nghiệp mà chúng tôi đầu tư. Các quỹ niêm yết của chúng tôi bắt buộc phải có những biện pháp kiểm soát rõ ràng dưới sự giám sát của ban quản trị nhằm đảm bảo hoàn thành tốt nhất các nghĩa vụ do cổ đông và nhà đầu tư ủy thác.',
      'VinaCapital đã xây dựng các chính sách, qui trình để giải quyết những xung đột lợi ích tiềm ẩn và các vấn đề đạo đức một cách công bằng và minh bạch.']],
    ['Tuân thủ quy định',['Chúng tôi tuân thủ quy định của những sàn giao dịch chứng khoán nơi các quỹ đầu tư của chúng tôi hoạt động, như quy định của Vương quốc Anh hay một số quốc gia khác.']],
    ['Quản trị rủi ro',['Quản trị rủi ro là một yếu tố quan trọng trong chiến lược kinh doanh tổng thể của VinaCapital và là yếu tố góp phần quan trọng vào sự thành công của chúng tôi. Chúng tôi có đội ngũ chuyên gia tận tâm thực hiện các phân tích, dự báo chiến lược về kinh tế và chính trị, làm nền tảng cho các chiến lược đầu tư và hoạt động của Tập đoàn. Mọi rủi ro được quản lý từ cấp độ đầu tư riêng lẻ, đầu tư theo danh mục cho đến cấp độ Tập đoàn thông qua các quy trình quản trị rủi ro toàn diện.']],
    ['Giữ vững niềm tin',['Chúng tôi tin rằng áp dụng các chính sách quản trị doanh nghiệp toàn diện rất quan trọng để giữ vững sự tin yêu của khách hàng, đối tác và thị trường vào thương hiệu VinaCapital.']]
  ]
};
const FOUNDATION = {
  statement:'Tinh thần trách nhiệm xã hội của chúng tôi được thể hiện rõ không chỉ trong kinh doanh mà còn thông qua những hoạt động thiện nguyện vì cộng đồng. Chúng tôi tự hào là một doanh nghiệp năng động, có trách nhiệm và cam kết không ngừng thực hiện các chương trình hành động tích cực hướng đến những cộng đồng nơi chúng tôi sống và làm việc.',
  body:[
    'Được thành lập năm 2006, VinaCapital Foundation (VCF) là một trong những tổ chức từ thiện nước ngoài đầu tiên đăng ký tại Việt Nam với quy mô lớn và hoạt động hiệu quả từ khi thành lập đến nay. Tổ chức được thành lập nhằm tạo điều kiện cho các công ty và cá nhân trong xã hội tham gia hỗ trợ các hoạt động cộng đồng cũng như nhấn mạnh tầm quan trọng của các chương trình từ thiện. Ưu tiên hàng đầu của VCF là cải thiện cuộc sống của trẻ em ở Việt Nam.',
    'Hiện tại, VCF tập trung vào nâng cao chất lượng cuộc sống của trẻ em và những bà mẹ nhằm giảm đói nghèo và xây dựng tầng lớp trung lưu.'
  ],
  more:[
    'VCF là một tổ chức phi lợi nhuận được khấu trừ thuế 501(c)(3) của Mỹ và được cấp phép hoạt động như một tổ chức phi chính phủ quốc tế tại Việt Nam để thực hiện các dự án phát triển tại 32 tỉnh thành. Tập đoàn VinaCapital là đối tác tài trợ đầu tiên của VCF. Nhờ có VinaCapital tài trợ toàn bộ chi phí vận hành của tổ chức, 100% các khoản quyên góp tới VCF sẽ được dành cho đối tượng thụ hưởng của các chương trình VCF thực hiện.',
    'Tổ chức luôn cam kết thực hiện hoạt động minh bạch và hiệu quả dựa trên cơ sở khoa học đáng tin cậy. Hàng năm, VCF được kiểm toán bởi một công ty kiểm toán quốc tế.',
    'Sứ mệnh của VinaCapital Foundation là hợp tác với chính phủ Việt Nam để tạo ra các giải pháp chăm sóc sức khỏe và giáo dục nhằm thay đổi cuộc sống của trẻ em và phụ nữ có hoàn cảnh khó khăn ở Việt Nam. VCF đã phát triển trở thành một trong những tổ chức phi chính phủ có tác động mạnh mẽ tập trung vào các ưu tiên quốc gia ở Việt Nam, bao gồm cung cấp cơ hội tiếp cận dịch vụ chăm sóc sức khỏe và giáo dục chất lượng để cải thiện cuộc sống của trẻ em, trao quyền cho phụ nữ và giảm nghèo.',
    'VCF hiện có 7 chương trình chính về y tế thiết yếu, nâng cao năng lực y tế và giáo dục cho nữ sinh dân tộc thiểu số. Các hoạt động của VCF giúp thay đổi cuộc sống của hàng nghìn người Việt mỗi năm.'
  ]
};
const RESP = {
  intro:'Tại VinaCapital, chúng tôi tận dụng kiến thức và mạng lưới sâu rộng cùng với sự sáng tạo của mình để xác định và nắm bắt nhiều cơ hội đang nổi lên tại Việt Nam. Đầu tư có trách nhiệm là điều chúng tôi luôn cố gắng đạt được và các quy trình nội bộ của mình luôn được kết hợp các yếu tố tiêu chuẩn cho sự phát triển bền vững và ảnh hưởng đến cộng đồng (ESG) trong các quyết định đầu tư để quản lý rủi ro tốt hơn và tạo ra lợi nhuận bền vững, lâu dài.',
  items:[
    ['Chúng tôi áp dụng các tiêu chí ESG vào quá trình phân tích và ra quyết định đầu tư.','Phương thức đầu tư của chúng tôi kết hợp với các tiêu chí ESG để đánh giá và giám sát những rủi ro như là một phần của quá trình thẩm định. Các nhà quản lý danh mục đầu tư của VinaCapital cũng chủ động phân tích những tác động tiềm ẩn của các vấn đề ESG khi đưa ra quyết định đầu tư. Cách tiếp cận này cũng là chìa khóa giúp chúng tôi hiểu rõ về các doanh nghiệp trước khi đầu tư vào.'],
    ['Chúng tôi chủ động kết hợp những tiêu chí ESG vào các chính sách thực thi.','Với tư cách là một nhà đầu tư, chúng tôi sử dụng quyền biểu quyết và tầm ảnh hưởng để cải thiện năng lực quản trị doanh nghiệp của các công ty chúng tôi đầu tư. Chúng tôi tham gia trực tiếp với các công ty về những vấn đề liên quan đến ESG, khuyến khích quản trị doanh nghiệp tốt và thực hiện phát triển bền vững.'],
    ['Chúng tôi công bố thông tin liên quan đến vấn đề ESG từ những tổ chức mà chúng tôi đầu tư.','Chúng tôi khuyến khích sự minh bạch trong các cuộc thảo luận về việc thực thi ESG với các công ty trong danh mục đầu tư, và hỗ trợ áp dụng/tuân thủ các chuẩn mực, tiêu chuẩn, quy tắc ứng xử hoặc sáng kiến tầm quốc tế.'],
    ['Chúng tôi ủng hộ việc chấp thuận và áp dụng các Nguyên tắc trong ngành quản lý đầu tư.','Chúng tôi tham gia vào Hệ thống PRI, là diễn đàn đặc biệt cho phép các thành viên chia sẻ nguồn lực, thông tin và nâng cao mức độ ảnh hưởng đối với các vấn đề ESG.'],
    ['Chúng tôi hợp tác để củng cố năng lực áp dụng các Nguyên tắc.','Chúng tôi làm việc cùng các tổ chức và nền tảng khác nhau để chia sẻ công cụ, nguồn lực và sử dụng các báo cáo đầu tư làm nguồn tư liệu tham khảo.'],
    ['Chúng tôi báo cáo hoạt động và tiến độ áp dụng các Nguyên tắc.','Là một thành viên của PRI, chúng tôi cam kết báo cáo các hoạt động đầu tư có trách nhiệm theo chu kỳ hằng năm.']
  ]
};
const TEAM = [
  {name:'Hội đồng quản trị',people:[
    ['Jonathan Choi','Chủ tịch Hội đồng quản trị','Jonathan-Choi_Resize.jpg'],
    ['Terence F. Mahony, CFA','Phó Chủ tịch Hội đồng quản trị','Terry_Resize.jpg'],
    ['Don Lam','Tổng Giám đốc và Cổ đông sáng lập Tập đoàn VinaCapital','Don_Resize-2.jpg'],
    ['Katherine Yip','Giám đốc không điều hành','Katherine-Yip_Resize.jpg'],
    ['Michael Choi','Giám đốc không điều hành','BOARD.jpg'],
    ['Brook Taylor','Tổng Giám đốc Điều hành Tập đoàn VinaCapital kiêm Tổng Giám đốc Công ty Quản lý Quỹ VinaCapital','Brook_Resize.jpg']
  ]},
  {name:'Lãnh đạo cấp cao',people:[
    ['Don Lam','Tổng Giám đốc','Don_Resize-2.jpg'],
    ['Brook Taylor','Tổng Giám đốc Công ty Cổ phần Quản lý Quỹ VinaCapital','Brook_Resize.jpg'],
    ['Alex Hambly','Tổng Giám đốc Hội đồng Đầu tư','Alex-Hambly-400x406-1.jpg'],
    ['Ngo Vinh Tuan','Tổng Giám đốc Điều hành Bộ phận Đầu tư','Tuan-Ngo.jpg']
  ]},
  {name:'Lãnh đạo các bộ phận đầu tư',people:[
    ['Nguyễn Hoài Thu, CFA','Phó Tổng Giám đốc Công ty Cổ phần Quản lý Quỹ VinaCapital','Thu-Nguyen-400x406_20231123-scaled.jpg'],
    ['Vũ Nguyên Khanh','Tổng Giám đốc Điều hành Quỹ VOF','IMG_4174-KVU-Resized.jpg'],
    ['Nguyễn Diệu Phương','Phó Tổng Giám đốc Điều hành Quỹ VOF','DieuPhuong_resize.jpg'],
    ['Lê Việt Hải','Phó Tổng Giám đốc Điều hành Quỹ Đầu tư Logistics','Hai-Le.jpg'],
    ['Đỗ Chí Hiếu, CFA','Tổng Giám đốc Điều hành Quỹ Bất Động Sản','HieuDo_resize.jpg'],
    ['Trần Thanh Hải','Phó Tổng Giám đốc bộ phận Năng lượng và Cơ sở hạ tầng','Hai-Tran-Web.jpg'],
    ['Hoàng Đức Trung','Phó Tổng Giám đốc Điều hành Quỹ Đầu tư Mạo hiểm','TrungHoang.jpg'],
    ['Richard Han','Phó Tổng Giám đốc Quỹ Đầu tư Mạo hiểm','Richard-Web.jpg'],
    ['Nguyễn Ngọc Tùng, CFA','Giám đốc Quỹ Đầu tư VinaCarbon','Tung-Nguyen-Web.jpg']
  ]},
  {name:'Hỗ trợ phát triển đầu tư',people:[
    ['Michael Kokalari, CFA','Giám đốc phòng Phân tích kinh tế vĩ mô và Nghiên cứu thị trường','Micheal-Kokalari.jpg'],
    ['Vương Vân Anh','Giám đốc Cấp cao Khối Quản lý Tài sản','VA-profile-photo.jpg'],
    ['Hồ Diễm','Phó Tổng Giám đốc Điều hành bộ phận Tài chính Kế toán Tập đoàn VinaCapital','Diem-Ho_resize.jpg'],
    ['Lê Thanh Nguyên An','Phó Tổng Giám đốc Điều hành bộ phận Nhân sự Tập đoàn VinaCapital','An-Le_resize-2.jpg'],
    ['Đinh Gia Ninh','Giám đốc Bộ phận Quản trị Rủi ro & Tuân thủ','Ninh-Web.jpg'],
    ['Derek W., CFA','Giám đốc Cấp cao Chiến lược và Phát triển doanh nghiệp','Derek-Web.jpg'],
    ['Đặng Hồng Quang','Trưởng Đại diện Văn phòng Hà Nội','Quang-Web.jpg'],
    ['Jason Ng, CFA','Trưởng Đại diện Văn phòng Singapore','Jason-Web.jpg']
  ]}
];

VC.mountPage({page:'about',hero:{img:'skyline-day.jpg',crumb:'Về chúng tôi',eyebrow:'Thành lập năm 2003',title:'Hai thập kỷ đồng hành<br>cùng Việt Nam',lead:'Từ năm 2003, VinaCapital phát triển thành nền tảng quản lý tài sản đa lĩnh vực với đội ngũ chuyên gia trong nước và quốc tế.'},body:`
<nav class="subnav" aria-label="Nội dung trang"><div class="wrap subnav__in">
<a href="#gioi-thieu">Giới thiệu</a><a href="#tam-nhin">Tầm nhìn</a><a href="#quan-tri">Quản trị</a><a href="#foundation">Trách nhiệm xã hội</a><a href="#co-trach-nhiem">Đầu tư có trách nhiệm</a><a href="#lanh-dao">Ban lãnh đạo</a>
</div></nav>
<section class="sect about-intro" id="gioi-thieu" aria-labelledby="mission-label"><div class="wrap">
  <div class="about-intro__grid"><div><h2 class="eyebrow eyebrow--rule" id="mission-label">Tuyên bố sứ mệnh</h2><blockquote class="about-mission">${INTRO.quote}</blockquote></div><div class="prose about-intro__body">${paragraphs(INTRO.body)}</div></div>
  <div class="about-video" data-video-id="jWKJ6Z_VjKE">
    <button class="about-video__poster" type="button" aria-label="Phát video giới thiệu VinaCapital">
      <img src="${ABOUT_IMG}Thumbnail-Web.jpg" alt="" width="1524" height="859">
      <span class="about-video__shade" aria-hidden="true"></span>
      <span class="about-video__play" aria-hidden="true"><i></i></span>
      <span class="about-video__label"><small>Video giới thiệu</small><strong>VinaCapital — Kiến tạo giá trị dài hạn</strong></span>
    </button>
  </div>
  <div class="about-stats" aria-label="Tóm lược qua những con số">${STATS.map(s=>`<div><strong>${s[0]}</strong><span>${s[1]}</span></div>`).join('')}</div>
  <p class="about-asset-list">Cổ phiếu niêm yết · Trái phiếu · Vốn cổ phần tư nhân · Đầu tư công nghệ · Năng lượng sạch &amp; Hạ tầng · Bất động sản · Tín chỉ carbon</p>
</div></section>
<section class="about-vision" id="tam-nhin" aria-labelledby="vision-label">
  <img class="about-vision__image" src="${ABOUT_IMG}bg04.jpg" alt="Pháo hoa rực rỡ trên bầu trời Thành phố Hồ Chí Minh" loading="lazy" width="1920" height="1280">
  <div class="wrap about-vision__copy"><h2 class="eyebrow" id="vision-label">Tầm nhìn của chúng tôi</h2><p>${VISION}</p></div>
</section>
<section class="sect" id="quan-tri" aria-labelledby="governance-title"><div class="wrap about-governance">
  <div class="about-governance__intro"><p class="eyebrow eyebrow--rule">Quản trị</p><h2 class="about-title" id="governance-title">Chuẩn mực toàn cầu,<br>thực thi nhất quán</h2><div class="prose"><p>${GOV.intro}</p></div><a class="tlink" href="https://vinacapital.com/wp-content/uploads/2023/08/VinaCapital-Code-of-Conduct-Aug2023.pdf" target="_blank" rel="noopener">Xem Quy tắc ứng xử <i aria-hidden="true">↗</i></a></div>
  <div class="about-accordions">${GOV.items.map((it,i)=>`<details${i===0?' open':''}><summary>${it[0]}</summary><div class="prose">${paragraphs(it[1])}</div></details>`).join('')}</div>
</div></section>
<section class="sect about-foundation" id="foundation" aria-labelledby="foundation-title"><div class="wrap">
  <div class="about-centered"><p class="eyebrow eyebrow--rule">Trách nhiệm xã hội</p><h2 class="about-title" id="foundation-title">VinaCapital Foundation</h2><p class="about-statement">${FOUNDATION.statement}</p></div>
  <figure class="about-foundation__image"><img src="${ABOUT_IMG}unsplash_DoWZMPZ-M9s.png" alt="Nụ cười của hai em nhỏ giữa thiên nhiên Việt Nam" width="1246" height="593" loading="lazy"></figure>
  <div class="about-foundation__story"><div class="about-foundation__aside"><p class="eyebrow">Vì cộng đồng Việt Nam</p><h3>Đồng hành cùng <br>những đổi thay <br>tốt đẹp</h3><div class="about-impact"><strong>100%</strong><p>Các khoản quyên góp được dành cho đối tượng thụ hưởng. VinaCapital tài trợ toàn bộ chi phí vận hành.</p></div></div>
  <div class="prose">${paragraphs(FOUNDATION.body)}<details class="about-more"><summary>Tìm hiểu hoạt động của VCF</summary><div>${paragraphs(FOUNDATION.more)}</div></details><a class="btn btn--ghost" href="https://vinacapitalfoundation.org/" target="_blank" rel="noopener">VinaCapital Foundation <i aria-hidden="true">↗</i></a></div></div>
</div></section>
<section class="sect about-responsible" id="co-trach-nhiem" aria-labelledby="responsible-title">
  <div class="wrap">
    <div class="about-responsible__heading"><p class="eyebrow eyebrow--rule">Đầu tư có trách nhiệm</p><h2 class="about-title" id="responsible-title">Giá trị bền vững<br>cho tương lai</h2></div>
    <div class="about-responsible__story"><div class="about-responsible__statement"><p>${RESP.intro}</p></div><figure class="about-responsible__image"><img src="${ABOUT_IMG}responsible-investment-2025.jpg" alt="Những người thu hoạch hoa súng trên sông nước Việt Nam" loading="lazy" width="1288" height="821"></figure></div>
  </div>
  <div class="about-pri-band"><div class="wrap about-pri"><img src="${ABOUT_IMG}Principles-for-Responsible-Investment-_-PRI.png" alt="PRI — Principles for Responsible Investment" loading="lazy"><div><p>VinaCapital đã ký cam kết Nguyên tắc đầu tư có trách nhiệm (PRI) của Liên Hợp Quốc vào năm 2018.</p><a class="tlink" href="https://www.unpri.org/" target="_blank" rel="noopener">Tìm hiểu tại unpri.org <i aria-hidden="true">↗</i></a></div></div></div>
  <div class="wrap">
  <div class="about-principles-head"><p class="eyebrow eyebrow--rule">Các nguyên tắc đầu tư có trách nhiệm</p><h2 class="about-title">Sáu cam kết theo<br><span class="keep-together">Nguyên tắc PRI</span></h2></div>
  <div class="about-principles">${RESP.items.map((it,i)=>`<article><span class="about-principles__number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><h3>${it[0]}</h3><p>${it[1]}</p></article>`).join('')}</div>
  <details class="about-more about-report"><summary>Thông qua quy trình báo cáo, chúng tôi có thể</summary><ul><li>So sánh tiến độ thực hiện của chúng tôi so với mức độ chung của ngành;</li><li>Nhận các phản hồi và công cụ để tiếp tục cải thiện;</li><li>So sánh hiệu quả hoạt động so với các đơn vị cùng ngành;</li><li>Bao quát được mức độ phát triển của thị trường;</li><li>Củng cố các quy trình nội bộ và năng lực ESG;</li><li>Tóm tắt các hoạt động cho đội ngũ, khách hàng, và cơ quan quản lý.</li></ul></details>
  <p class="about-policy">Để biết thêm thông tin về nguyên tắc đầu tư có trách nhiệm của VinaCapital, Quý khách có thể tìm hiểu <a href="https://vinacapital.com/wp-content/uploads/2022/09/VinaCapital-Asset-Management-Responsible-Investment-policy-January-2021.pdf" target="_blank" rel="noopener">chính sách của chúng tôi</a> hoặc liên hệ qua email: <a href="mailto:info@vinacapital.com">info@vinacapital.com</a>.</p>
  </div>
</section>
<section class="sect about-leadership" id="lanh-dao" aria-labelledby="leadership-title"><div class="wrap">
  <div class="about-leadership__head"><div><p class="eyebrow eyebrow--rule">Đội ngũ VinaCapital</p><h2 class="about-title" id="leadership-title">Những người dẫn dắt</h2></div><p>Hội đồng quản trị và đội ngũ lãnh đạo quy tụ các chuyên gia trong nước và quốc tế.</p></div>
  <div class="about-team-tabs" role="tablist" aria-label="Nhóm lãnh đạo">${TEAM.map((g,i)=>`<button type="button" role="tab" id="team-tab-${i}" aria-controls="team-panel-${i}" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-team-tab="${i}">${g.name}</button>`).join('')}</div>
  ${TEAM.map((g,i)=>`<div role="tabpanel" id="team-panel-${i}" aria-labelledby="team-tab-${i}" tabindex="0"${i?' hidden':''}><div class="about-team-grid">${g.people.map(p=>`<article class="about-person"><img src="${ABOUT_IMG}${p[2]}" alt="Chân dung ${p[0]}" loading="lazy" width="400" height="406"><h3>${p[0]}</h3><p>${p[1]}</p></article>`).join('')}</div></div>`).join('')}
</div></section>
<section class="cta"><div class="wrap cta__in"><div><h2>Bắt đầu cùng VinaCapital</h2><p>Tìm giải pháp đầu tư phù hợp với mục tiêu tài chính của bạn, hoặc liên hệ trực tiếp với đội ngũ của chúng tôi.</p></div><a class="btn" href="mailto:info@vinacapital.com">Liên hệ <i aria-hidden="true">→</i></a></div></section>
`});
const teamButtons = Array.from(document.querySelectorAll('[data-team-tab]'));
function selectTeam(index, focus) {
  teamButtons.forEach((button,i)=>{const active=i===index;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;document.getElementById(`team-panel-${i}`).hidden=!active;});
  if(focus) teamButtons[index].focus();
}
teamButtons.forEach((button,index)=>{
  button.addEventListener('click',()=>selectTeam(index,false));
  button.addEventListener('keydown',event=>{
    const keys={ArrowRight:(index+1)%TEAM.length,ArrowLeft:(index+TEAM.length-1)%TEAM.length,Home:0,End:TEAM.length-1};
    if(Object.prototype.hasOwnProperty.call(keys,event.key)){event.preventDefault();selectTeam(keys[event.key],true);}
  });
});
document.querySelectorAll('[data-video-id]').forEach(video=>{
  const trigger=video.querySelector('.about-video__poster');
  if(!trigger) return;
  trigger.addEventListener('click',()=>{
    const iframe=document.createElement('iframe');
    iframe.src=`https://www.youtube.com/embed/${video.dataset.videoId}?autoplay=1&rel=0`;
    iframe.title='Giới thiệu VinaCapital';
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    iframe.allowFullscreen=true;
    video.classList.add('is-playing');
    video.replaceChildren(iframe);
  },{once:true});
});
