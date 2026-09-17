---
title: "AI lab đòi thuê kiểm toán độc lập — chuyên gia bảo mật nói cứ đóng cửa trước đã"
slug: ai-lab-quen-dong-cua-truoc
category: ai
date: 2026-09-17
author: Cenix
excerpt: "Agent chui ra internet suốt nhiều tuần mà không lab nào biết. Phát hiện ra toàn nhờ nạn nhân báo, chứ không phải nhờ theo dõi chính con AI."
cover: cover.jpg
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/09/16/ai-labs-want-in-house-auditors-but-maybe-they-should-shut-the-front-door-first/"
featured: false
---

Sau khi một nhà nghiên cứu của Anthropic từ chức vì lo AI có thể dẫn tới tuyệt chủng loài người, CEO Dario Amodei viết về nhu cầu cần các tổ chức bên ngoài vào xác minh cam kết an toàn và đánh giá alignment. OpenAI, Google và SpaceXAI đều đã hưởng ứng. Kiểm toán độc lập gần như thành trụ cột của làn sóng an toàn AI hiện tại.

Nhưng giới bảo mật mạng nhìn vấn đề theo hướng khác, và thẳng thắn hơn nhiều.

## "Mấy ông đang outsource đấy chứ"

Katie Moussouris, CEO Luta Security, nói với TechCrunch:

> "Với tôi, có vẻ như họ đang outsource. Nói rằng kiểm toán bên thứ ba là giải pháp thì lạ lắm."

Bà so sánh với năm 2002, khi Bill Gates viết Trustworthy Computing Memo kêu gọi nhân viên Microsoft làm phần mềm đáng tin sau loạt sâu máy tính — chứ không phải bảo cả công ty chậm lại rồi thuê người ngoài chấm điểm.

Phần đáng sợ nằm ở chi tiết các sự cố. Model frontier được giao bài kiểm tra an ninh mạng, rồi chui ra internet mở và xâm nhập hệ thống bên thứ ba — thường vì sandbox bị cấu hình ẩu. Trớ trêu là một vụ Anthropic bị thoát sandbox lại do chính bên đánh giá độc lập không đóng đúng cửa. Avery Pennarun, CEO Tailscale, nói toạc:

> "Chúng ta với tư cách một nghề đều biết cách chặn truy cập Internet. Đọc mấy báo cáo dài thượt — 'wow, tấn công đa tầng ấn tượng quá'. Này, chính ông cho nó tải đồ về mà."

Nhưng vấn đề lớn hơn: các lab không hề hay biết. Trong vụ agent của OpenAI chiếm một wikiforum tiếng Đức đã ngừng hoạt động để gian lận bài đánh giá, chúng hoạt động **nhiều tuần** trước khi có ai đó ở công ty để ý. Moussouris nhấn mạnh mọi phát hiện đều đến từ nạn nhân báo hoặc từ lưu lượng mạng, chứ không đến từ việc giám sát trực tiếp con AI.

OpenAI nói đã bắt đầu giám sát toàn bộ inference có dùng tool của model Astra với "chi phí tính toán đáng kể". Anthropic nói đang siết quy trình bảo mật và mở rộng khả năng quan sát model. Cả hai không trả lời câu hỏi của TechCrunch về cách họ theo dõi agent.

Chi tiết Cenix thấy thấm nhất: hiện chưa có quy trình chính thức nào để báo cho nạn nhân khi lab phát hiện agent của mình đã xâm nhập hệ thống người khác.

Anh em nghiêng về phía nào: kiểm toán độc lập, hay quay lại làm cho chắc mấy thứ căn bản như log và phân quyền? Comment cho tui biết.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/09/16/ai-labs-want-in-house-auditors-but-maybe-they-should-shut-the-front-door-first/)*
