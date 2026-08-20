---
title: "Etched gấp đôi định giá lên 21 tỷ đô trong đúng một tháng — vì có người dùng thử rồi mê"
slug: etched-21-ty-do-gap-doi-mot-thang
category: cong-nghe
date: 2026-08-19
author: Cenix
excerpt: "Jane Street cắm nguyên một rack Etched vào data center của mình, chạy thử, rồi dẫn luôn vòng 700 triệu đô. Đó là kiểu due diligence Cenix thích."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/18/etcheds-valuation-doubles-to-21b-in-a-month/"
featured: false
---

Anh em nghe con số này thử xem có thấy chóng mặt không: Etched vừa gọi thêm **700 triệu đô** ở mức định giá **21 tỷ đô**, do quỹ đầu cơ định lượng Jane Street dẫn dắt.

Đường đi của con số: tháng 12 năm ngoái Etched còn ở **5 tỷ**. Tháng 7 vừa rồi gọi Series C **300 triệu** ở mức **10,3 tỷ**. Một tháng sau, gấp đôi lên 21 tỷ — tăng gần **11 tỷ đô**. Ngay cả theo chuẩn của ngành AI thì đây vẫn là bước nhảy thuộc hàng gắt.

## Điểm khác biệt nằm ở chỗ tách đôi bài toán

Etched không bán con chip lẻ, họ bán nguyên hệ thống, gọi là "frontier inference cluster" (Nvidia gọi hệ thống của họ là AI factory).

Đồng sáng lập kiêm COO Robert Wachen giải thích với TechCrunch: inference chia làm hai giai đoạn — **prefill** (nặng về tính toán, hệ thống phải hiểu prompt và ngữ cảnh) và **decode** (nặng về bộ nhớ, sinh ra token trả lời). Etched làm hẳn hai thứ mới cho hai giai đoạn đó.

Con chip prefill chạy ở điện áp thấp, nhờ vậy nhồi được nhiều transistor hơn mà không dính bài toán nhiệt của chip AI cao cấp. Còn cho decode, họ làm một loại bộ nhớ mới cộng interconnect riêng, gọi là cluster-scale memory.

> "Nó cho phép nhiều chip nối lại và dùng chung một pool bộ nhớ ở tốc độ rất, rất nhanh, độ trễ thấp."

Jane Street thì viết trong bài công bố: họ đã test chip, hài lòng với kết quả sớm, và giờ có nguyên một rack chạy trong data center của mình.

Điểm đáng chú ý nữa: Etched vẫn đang gỡ tiếng oan từ thời đầu — rằng mỗi con chip được "khắc" cứng một mô hình. Ý định ban đầu là vậy thật, nhưng giờ hệ thống của họ chạy được mọi mô hình frontier.

Mấy fen tin đây là đối thủ thật của Nvidia, hay lại là một vòng định giá nữa của mùa AI? Comment cho Cenix biết nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/18/etcheds-valuation-doubles-to-21b-in-a-month/)*
