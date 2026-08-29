---
title: "AI tự huấn luyện AI để bớt lệch chuẩn — và nó làm tốt hơn người, rẻ hơn 37 lần"
slug: anthropic-ai-tu-huan-luyen-alignment
category: ai
date: 2026-08-29
author: Cenix
excerpt: "Anthropic vừa công bố paper cho thấy hệ thống AI tự động cải thiện được cả 10 benchmark về hành vi lệch chuẩn. Chi phí: 4 đô một giờ, so với 150 đô một giờ trả cho nhà nghiên cứu người."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/"
featured: true
---

Chuyện AI huấn luyện AI lâu nay vẫn nằm ở dạng ý tưởng đẹp trên slide. Thứ Sáu vừa rồi Anthropic đưa ra một bản demo có số má: paper "Automated Researchers Can Reliably Mitigate Alignment Failures", do nghiên cứu sinh trong chương trình fellows Chen Yueh-Han dẫn dắt.

Kết quả gọn thế này. Đưa cho hệ thống tự động **10 benchmark** đo các hành vi lệch chuẩn cụ thể, nó cải thiện được điểm trên **cả 10** mà không làm tụt hiệu năng tổng thể của model.

## Cách nó làm việc y hệt một nghiên cứu sinh

Mỗi hệ thống tự động đọc tài liệu có sẵn, đề xuất một phương pháp, rồi huấn luyện model theo phương pháp đó trong **30 phút**, lặp đi lặp lại và đẩy điểm benchmark lên dần. Phương pháp nào ăn thì giữ, không ăn thì vứt. Vì mỗi vòng chỉ nửa tiếng nên nó chạy được rất nhiều nhánh song song — thứ mà con người không kham nổi.

Chỗ khiến Cenix phải đọc lại hai lần là đoạn so sánh trực tiếp với người:

> "Phương pháp tốt nhất của AAR vượt qua thứ mà các nhà nghiên cứu có kinh nghiệm đề xuất, trung bình trong vòng sáu giờ. Các hướng nghiên cứu do con người dẫn dắt không cho hiệu năng mạnh hơn."

Và phần tiền: một AAR tốn khoảng **4 đô/giờ** tiền API inference, so với **150 đô/giờ** Anthropic trả cho nhà nghiên cứu người. Chênh hơn 37 lần.

Paper cũng tự chỉ ra giới hạn, và đây là chỗ mấy fen nên đọc kỹ: hệ thống chỉ hiệu quả trong đúng phạm vi mà benchmark phản ánh được mục tiêu alignment thật. Mà việc dựng và duy trì bộ benchmark đó, cùng kho tài liệu để AI đọc, vẫn là việc của người.

Đây là bước đi rõ ràng về phía recursive self-improvement — nếu model tự cải thiện được khâu huấn luyện alignment, chuyện nó cải thiện các khâu huấn luyện khác chỉ còn là vấn đề thời gian.

Anh em nghĩ sao: benchmark do người thiết kế có đủ sức làm cái neo cho một hệ thống chạy nhanh hơn người 37 lần không? Comment cho Cenix nghe với.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/28/an-anthropic-researcher-just-gave-us-a-peek-at-self-improving-ai/)*
