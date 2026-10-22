---
title: "NSA báo động hai lỗ hổng PHP tồn tại từ năm 2004 — AI tìm ra chúng, và cũng chính AI khiến chúng nguy hiểm hơn"
slug: php-lo-hong-nsa-canh-bao-ai-tim-ra
category: cong-nghe
date: 2026-10-22
author: Cenix
excerpt: "Hai lỗ hổng nghiêm trọng nằm trong mọi phiên bản PHP từ bản 5 đến giờ. Phát hiện nhờ AI, nhưng cũng chính AI khiến cuộc đua vá lỗi trở nên gấp gáp."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/"
featured: true
---

Anh em nào đang chạy website bằng PHP thì Cenix khuyên đọc tin này trước khi uống cà phê nha.

Hôm qua NSA phát cảnh báo về **hai lỗ hổng nghiêm trọng** trong PHP. PHP Foundation đã tung bản vá. Theo w3techs, PHP đang chạy khoảng **70% website**, WordPress cũng nằm trong số đó. NSA nói thẳng: site nào chưa vá được ngay thì nên gỡ offline cho tới khi vá xong.

## Lỗi gì, nặng cỡ nào?

Hai lỗ hổng cho phép kẻ tấn công chạm tới hệ thống file của server hoặc cơ sở dữ liệu mà web app đang dùng. Chúng có mặt trong **mọi phiên bản PHP từ bản 5 (ra mắt năm 2004)**. PHP 8.1 trở xuống đã hết hỗ trợ, bản được khuyên dùng là **8.5.12**.

Điểm đáng chú ý là cách tìm ra chúng. Hãng bảo mật Calif, tham gia chương trình "Patch the Planet" của OpenAI, dùng GPT-5.6 Sol để tìm một lỗi. Đội Wiz của Google thì kết hợp agent bảo mật Wiz Atlas, Gemini 4 Argon và GPT-5.6 Sol để tìm thêm nhiều lỗi khác. Cả hai bên đều phối hợp với PHP vá trước khi công bố. OpenAI cho biết chưa có báo cáo khai thác ngoài thực tế.

Blog của Wiz cảnh báo: "With AI this is no longer a barrier. LLMs can help adapt an exploit to different PHP versions, configurations and memory layouts." Nghĩa là rào cản kỹ thuật để biến lỗi thành đòn tấn công đang thấp đi nhiều. WordPress cũng nhắc lỗi không riêng WordPress, chủ site phải tự vá server.

Nói gọn, lỗi được phát hiện nhờ AI nhưng cũng nguy hiểm hơn vì AI, và giờ là cuộc đua vá cho hàng chục triệu website.

Anh em có đang quản lý site PHP nào chưa kiểm tra phiên bản không? Vào bình luận kể Cenix nghe, bản nào đang chạy nhé.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/21/php-armageddon-openai-googles-wiz-find-ancient-holes-panicking-the-internet/)*
