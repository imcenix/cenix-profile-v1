---
title: "Microsoft doạ kiện, nhà nghiên cứu tung tiếp zero-day Windows — lần này nhắm Defender"
slug: shieldbreak-zero-day-windows
category: cong-nghe
date: 2026-08-13
author: Cenix
excerpt: "Lỗi mang tên ShieldBreak, chạy được trên Windows 10, 11 và Server 2025. Microsoft chưa có bản vá."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/12/after-microsoft-threatened-legal-action-a-security-researcher-publishes-a-new-windows-zero-day-bug/"
featured: false
---

Một nhà nghiên cứu bảo mật vừa công bố chi tiết lỗ hổng mới trên các phiên bản Windows hiện hành, cho phép hacker chiếm quyền toàn hệ thống trên máy nạn nhân — bất chấp việc Microsoft đã công khai doạ hành động pháp lý với chính người này vài tuần trước.

Lỗi mang tên **ShieldBreak**, do nhà nghiên cứu có biệt danh Nightmare Eclipse công bố. Theo mô tả, ShieldBreak khai thác một lỗ hổng ngay trong **Windows Defender** — công cụ chống mã độc tích hợp sẵn của Windows. Tấn công thành công cho phép leo thang từ quyền người dùng thường lên toàn quyền thiết bị và dữ liệu.

Mã khai thác được đóng gói dưới dạng một ứng dụng Windows, tức người dùng phải chạy app đó thì lỗi mới kích hoạt. Nó hoạt động trên **Windows 10, Windows 11 (kể cả bản 25H2 mới nhất) và Windows Server 2025**. Chuyên gia Will Dormann đã xác nhận lỗi chạy được, với điều kiện Windows Defender đang bật.

## Phía sau là một cuộc giằng co dài

ShieldBreak được xây trên nền một khai thác cũ hơn tên RoguePlanet. Microsoft từng vá RoguePlanet, nhưng nhà nghiên cứu ngụ ý bản vá đó chưa đủ, và lần này họ đã vượt qua hoàn toàn.

Hồi tháng 5, Microsoft đăng bài blog doạ hành động pháp lý với các nhà nghiên cứu công bố zero-day ngoài quy trình của công ty. Cộng đồng bảo mật phản ứng dữ dội, nhiều người kể lại trải nghiệm tương tự về cách Microsoft xử lý báo cáo lỗi. Công ty sau đó rút lại phát ngôn bằng một bài đăng mạng xã hội, nhưng bài blog gốc vẫn nằm nguyên đó, không sửa một chữ.

ShieldBreak xuất hiện đúng một ngày sau Patch Tuesday. Đây là tháng thứ hai liên tiếp số lỗi Microsoft vá chạm mốc **khoảng 500** — hệ quả của việc công ty dùng AI để tự tìm lỗ hổng ngày càng nhiều.

Microsoft chưa phát hành bản vá cho ShieldBreak và chưa phản hồi TechCrunch.

Anh em nghĩ ranh giới nằm ở đâu: nhà nghiên cứu có nên công bố công khai khi thấy hãng phớt lờ báo cáo, hay im lặng chờ vá dù chờ tới bao giờ? Cái này khó nói thiệt, comment cho Cenix nghe với.

*Nguồn tham khảo: [TechCrunch](https://techcrunch.com/2026/08/12/after-microsoft-threatened-legal-action-a-security-researcher-publishes-a-new-windows-zero-day-bug/)*
