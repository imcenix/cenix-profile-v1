---
title: "Amex ra khung chặn AI agent mua nhầm đồ — bắt khách duyệt ý định trước khi quẹt thẻ"
slug: amex-intent-intelligence-ngan-ai-agent-mua-nham
category: ai
date: 2026-10-14
author: Cenix
excerpt: "Intent Intelligence Framework tạo mã chứng minh ý định mua, để agent dùng thông tin thanh toán thay vì số thẻ thật."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/10/13/amex-introduces-a-framework-to-prevent-ai-agents-from-making-unauthorized-purchases/"
featured: false
---

Khi AI agent bắt đầu đi mua hàng thay người, câu hỏi lớn là ai đảm bảo nó mua đúng thứ mình muốn. American Express vừa đưa ra một câu trả lời: **Intent Intelligence Framework**, và hãng hy vọng nó thành chuẩn chung của ngành.

## Cách nó chạy

Đầu tiên, Create Intent API ghi lại chỉ dẫn và giới hạn của khách như tên merchant, ngân sách tối đa, sở thích sản phẩm. Khách xác thực danh tính và duyệt ý định đó. Hệ thống sau đó sinh một Intent ID cùng Proof of Intent Token, dùng để lấy thông tin thanh toán dạng số; agent dùng nó lúc checkout thay vì số thẻ thật. Intent ID và token còn phục vụ chống gian lận và giải quyết tranh chấp.

Ví dụ của bà Hannah Bozian, phụ trách quan hệ đối tác agentic của Amex: khách dặn mua giày Nike trắng size 9 mà agent lại đòi mua Adidas, thì giao dịch có thể bị chặn. Bà nói Amex muốn các giao dịch ba bên giữa khách, merchant và agent phải liền mạch, đáng tin và an toàn.

Khung này nối tiếp bộ ACE Developer Toolkit ra hồi tháng 4. Amex cho biết chưa thấy tranh chấp tăng từ thương mại agentic và muốn xây trước khi nó phình to. Khảo sát Trendex của họ cho thấy **66%** người dùng Mỹ được hỏi có khả năng dùng agent để tìm giá tốt nhất, **61%** để xin gợi ý sản phẩm trong 12 tháng tới.

Anh em có dám giao thẻ cho agent tự mua đồ không, và cần giới hạn nào mới yên tâm? Cho Cenix biết ở comment nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/10/13/amex-introduces-a-framework-to-prevent-ai-agents-from-making-unauthorized-purchases/)*
