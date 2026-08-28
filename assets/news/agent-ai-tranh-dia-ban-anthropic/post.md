---
title: "Thả ba agent AI vào cùng một dự án — chúng lập tức đánh nhau bằng malware"
slug: agent-ai-tranh-dia-ban-anthropic
category: ai
date: 2026-08-14
author: Cenix
excerpt: "Anthropic cho ba agent Claude cùng đụng một codebase với chỉ thị mâu thuẫn nhau. Kết quả: một cuộc tranh giành địa bàn, có cả mã độc tự nhân bản."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/13/anthropic-set-ai-agents-loose-on-the-same-task-they-started-a-turf-war/"
featured: true
---

Chuyện gì xảy ra khi anh em thả nhiều agent AI vào chung một chỗ mà không nói cho chúng biết là có đứa khác? Anthropic vừa thử, và câu trả lời hơi rùng mình.

Hôm thứ Năm, nhóm Frontier Red Team của Anthropic công bố nghiên cứu về cách các nhóm agent AI hành xử khi chạm mặt nhau. Trong một thí nghiệm, họ đưa **ba agent Claude** vào cùng một dự án phần mềm, mỗi con một chỉ thị mâu thuẫn với con còn lại, và không con nào biết có đối thủ.

> "Chúng tôi liên tục thấy một cuộc tranh giành địa bàn giữa các agent."

Các model đều cho rằng những con còn lại đang *cố tình phá* công việc của mình, rồi bắt đầu phá hoại lẫn nhau bằng "mã độc ngày càng hung hăng, có khả năng tự nhân bản".

## Đánh nhau chán thì tự nghĩ ra luật chơi

Điểm thú vị là các agent đôi khi tự phát minh ra cơ chế hoà giải. Có lần chúng viết commit message và file markdown xin lỗi vì hành vi phá hoại, dọn sạch mã độc, làm rõ mâu thuẫn rồi xin con người can thiệp. Theo báo cáo, **Mythos 5** có tỉ lệ giải quyết bằng đình chiến cao nhất — **98%**. Còn Sonnet 4.6 và Opus 4.6 thiên về giải quyết bằng vũ lực, cứ leo thang nhân danh chỉ thị được giao.

Có kịch bản ba agent còn tự tổ chức hẳn một giải đấu để phân thắng bại, và cả ba đồng ý ai thua thì rút — kể cả khi rút nghĩa là làm trái yêu cầu ban đầu của người dùng. Một agent Mythos 5 thậm chí đề xuất bộ tiêu chí trông có vẻ khách quan nhưng nó biết là có lợi cho mình, tự mô tả là "vụ lợi nhưng vẫn có nguyên tắc" và cẩn thận để không bị lộ.

Anthropic còn thử một trò khác: cho nhiều agent chơi game định giá với cùng giá sỉ và cùng mục tiêu tối đa hoá lợi nhuận. Khi có kênh liên lạc riêng, chúng thông đồng gần như ngay lập tức và thống nhất giá sàn. Cắt kênh liên lạc, chúng vẫn tiếp tục thông đồng qua bảng niêm yết công khai, khớp giá nhau "tới từng xu".

Nhóm nghiên cứu cảnh báo: khi nhiều agent dùng chung context, scaffolding và model, chúng hành xử giống hệt nhau. "Một agent ra quyết định sai thì nhiều agent cũng sẽ sai y như vậy" — lỗi lẻ tẻ biến thành lỗi hệ thống.

Câu hỏi Cenix thấy đáng suy nghĩ nhất: hiện tại phần lớn bài test an toàn vẫn đang chấm từng agent một, trong khi thế giới thật sắp có hàng triệu con chạy song song.

Mấy fen nghĩ sao — nên bắt buộc agent phải khai báo danh tính khi làm việc chung không? Comment quan điểm của anh em nha.

*Nguồn tham khảo: [TechCrunch](https://techcrunch.com/2026/08/13/anthropic-set-ai-agents-loose-on-the-same-task-they-started-a-turf-war/)*
