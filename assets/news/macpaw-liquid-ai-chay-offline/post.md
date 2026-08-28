---
title: "MacPaw bắt tay Liquid AI đưa AI chạy thẳng trên máy — rồi mở luôn cho lập trình viên xài chung"
slug: macpaw-liquid-ai-chay-offline
category: ai
date: 2026-08-06
author: Cenix
excerpt: "Trợ lý AI chạy offline, dữ liệu không rời khỏi máy. Và MacPaw không giữ riêng — họ định biến nó thành hạ tầng cho cả app store của mình."
cover: cover.png
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/05/macpaw-taps-liquid-ai-to-offer-on-device-inference-to-devs-building-for-its-app-store/"
featured: false
---

MacPaw — hãng phần mềm Ukraine quen mặt với dân xài Mac — vừa bắt tay **Liquid AI** để chạy mô hình AI ngay trên máy người dùng, thay vì gọi lên cloud.

Đích ngắm trước mắt là **Eney**, trợ lý AI mà MacPaw giới thiệu năm ngoái. Liquid AI sẽ dựng cho họ một hệ thống inference on-device tên **Elix**, kèm một hệ thống bộ nhớ chạy cục bộ. CEO MacPaw **Oleksandr Kosovan** nói mô hình chạy tại chỗ sẽ cho người dùng chạy trợ lý và các luồng agentic ngay cả khi **không có mạng**.

## Điểm khác biệt nằm ở chỗ chip nào thì mô hình đó

Apple thật ra đã mở mô hình local của mình cho lập trình viên từ lâu. Nhưng CEO kiêm đồng sáng lập Liquid AI, **Ramin Hasani**, nói cách làm của họ khác:

> "Trước khi train mô hình, chúng tôi chọn một kiến trúc khác biệt và được may đo theo phần cứng. Điều đó cho phép chúng tôi có phiên bản trí tuệ hiệu quả nhất chạy trực tiếp trên thiết bị, kèm lợi ích về riêng tư và bảo mật."

Hasani nói thêm họ đang dựng một lớp customization quanh mô hình: với dữ liệu người dùng nhập vào, mô hình có thể tự cải thiện và thông minh dần theo thời gian.

Phần đáng chú ý nhất là bước sau. MacPaw không định giữ hạ tầng này cho riêng mình. Khi kiến trúc xử lý cục bộ ổn định, họ muốn **mở cho lập trình viên** dùng inference on-device trong app của họ — và nền tảng sẽ đồng thời cấp quyền truy cập các mô hình cloud từ Google, thành một cửa hàng một điểm dừng.

Sân chơi là **SetApp**, app store dạng thuê bao của MacPaw, hiện có hơn **150.000 người dùng trả phí**. Công ty đang thử nghiệm mô hình tính tiền theo credit: mỗi tác vụ AI tiêu một lượng credit tùy độ phức tạp.

Tui thấy hướng này khá thú vị. Trong lúc cả ngành đổ tiền vào data center khổng lồ, có những đội đi ngược lại: nhét mô hình vừa đủ tốt vào con chip đang nằm trên bàn bạn.

Anh em có xài trợ lý AI chạy offline chưa, hay vẫn thấy chưa đủ mạnh? Cenix hóng ý kiến.

*Nguồn tham khảo: [TechCrunch](https://techcrunch.com/2026/08/05/macpaw-taps-liquid-ai-to-offer-on-device-inference-to-devs-building-for-its-app-store/)*
