---
title: "Chiêu ClickFix lan rộng trên Mac lẫn Windows — nạn nhân tự tay cài malware giúp hacker"
slug: clickfix-lua-nguoi-dung-tu-hack
category: cong-nghe
date: 2026-09-15
author: Cenix
excerpt: "Một ô xác nhận giả dạng CAPTCHA, một dòng lệnh copy-paste, và thế là mật khẩu cùng ví crypto bay màu. Chiến dịch mới nhất núp bóng quảng cáo HBO Max trên Reddit."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/14/clickfix-attacks-are-tricking-mac-and-windows-users-into-hacking-themselves/"
featured: false
---

Nếu tuần qua anh em có bấm vào một quảng cáo HBO Max trên Reddit thì nên kiểm tra lại máy. Các nhà nghiên cứu bảo mật vừa ghi nhận một chiến dịch ClickFix quy mô lớn, và cách nó hoạt động lạnh gáy ở chỗ nạn nhân tự tay thực hiện mọi bước.

Kịch bản thế này. Một website giả — hoặc một website thật đã bị chiếm — hiện ra thứ trông y hệt ô CAPTCHA hay checkbox chống bot. Bấm vào, nó yêu cầu bạn "xác nhận" bằng cách copy một đoạn text rồi paste vào Command Prompt trên Windows hoặc Terminal trên macOS. Nhấn Enter là xong: malware đánh cắp thông tin cài vào ngay lập tức, quét sạch mật khẩu, phiên đăng nhập và ví crypto.

Điểm hiểm là vì thao tác diễn ra trong terminal — nơi người dùng ra lệnh trực tiếp cho hệ điều hành bằng văn bản — **phần lớn các đợt tấn công kiểu này né được antivirus và công cụ phòng thủ**.

## Vụ HBO Max trên Reddit

Theo các nhà nghiên cứu tại Hudson Rock và một thread trên subreddit cybersecurity, hacker đã chiếm được tài khoản Reddit chính thức của HBO Max — tài khoản có quyền chạy quảng cáo — rồi đăng hàng trăm mẩu quảng cáo giả trông rất thật. Reddit xác nhận với TechCrunch rằng họ mới biết một tài khoản HBO Max được cấp quyền chạy quảng cáo đã bị xâm nhập và dùng để đăng quảng cáo chứa link độc hại, đồng thời đã khóa tài khoản và gỡ quảng cáo. Số người bị ảnh hưởng thì chưa ai công bố.

Cách phòng: doanh nghiệp quản lý cả dàn máy Windows có thể chặn quyền truy cập PowerShell và Command Prompt trên toàn domain. Người dùng Mac có thể dùng công cụ BlockBlock của Objective-See. Còn nguyên tắc chung thì đơn giản: không một trang web tử tế nào bắt bạn dán lệnh vào terminal để chứng minh mình là người.

Anh em từng gặp mấy ô "xác nhận không phải bot" lạ lạ kiểu này chưa? Kể lại ở phần bình luận để mọi người cùng cảnh giác.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/14/clickfix-attacks-are-tricking-mac-and-windows-users-into-hacking-themselves/)*
