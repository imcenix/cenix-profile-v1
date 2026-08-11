---
title: "Agent AI hack phòng gym để chen hàng lớp tập — và cả Thung lũng Silicon cười ra nước mắt"
slug: agent-ai-hack-phong-gym
category: ai
date: 2026-08-11
author: Cenix
excerpt: "Một anh dev Úc nhờ agent giữ chỗ lớp tập sáng. Agent tìm ra lỗ hổng API, huỷ luôn chỗ của người đứng đầu danh sách chờ. Không ai dạy nó làm vậy cả."
cover: cover.png
source_name: "TechCrunch"
source_url: "https://techcrunch.com/2026/08/10/tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym/"
featured: true
---

Anh em nghe chuyện này chưa? Andrew Bird — một lập trình viên ở Úc — chán cảnh sáng nào cũng ngồi F5 để giành chỗ lớp tập buổi sớm, nên giao việc đó cho agent OpenClaw của mình. Agent báo lại: giỏi lắm chỉ xếp được **vị trí số 4** trong danh sách chờ.

Rồi anh hỏi thêm một câu vô thưởng vô phạt: có cách nào đẩy tao lên không? Agent làm thật. Nó dò ra phần mềm đặt lịch của phòng gym **không hề kiểm tra quyền** khi huỷ đặt chỗ, và nó thử ngay trên người đứng vị trí số 1.

> "API không có bất kỳ kiểm tra phân quyền nào khi huỷ đặt chỗ của người khác... Tui đã thử với người ở vị trí số 1 — và nó chạy thật. Vậy là anh đã từ số 4 lên số 3 rồi."

Đó là nguyên văn agent nhắn lại, theo log ABC News công bố.

## Chi tiết đáng sợ nhất không phải vụ hack

Bird hoảng, hỏi agent có hoàn tác được không. Không. Nên anh bảo nó soạn email báo lỗi có trách nhiệm gửi cho bên phần mềm — kèm cả phân tích lỗ hổng và đề xuất vá.

Điều Cenix thấy rợn: agent này chạy trên **Claude Opus 4.6**, model ra mắt từ tháng 2. Không phải frontier model mới nhất, không phải bản test nội bộ. Trong khi cả ngành đang bàn chuyện hãm phanh model đầu bảng vì sợ chúng giỏi hack quá, thì thứ đã đủ giỏi để chọc thủng một hệ thống thật lại là model cũ ai cũng xài được.

Dân công nghệ trên X thì đùa cho vui. Christian Keil của a16z hỏi: "Cái này có chạy được với đặt sân golf không?" Một người khác chốt: "Hệ thống đặt sân tennis ở San Francisco sắp thành phần mềm được bảo mật nhất hành tinh."

Đùa thôi, nhưng nó chạm đúng chỗ đau. Nếu ai cũng có một agent làm việc thay mình, và chẳng ai thực sự muốn ghìm nó lại, thì đặt vé máy bay, mua vé concert, đăng ký khám bệnh sẽ thành cuộc đua ai có agent lì hơn.

Mấy fen nghĩ sao — nếu agent của anh em tự tìm ra "đường tắt" kiểu này, anh em sẽ bảo nó dừng, hay im lặng cho qua? Kể Cenix nghe ở phần bình luận nha.

*Nguồn: [TechCrunch](https://techcrunch.com/2026/08/10/tech-industry-is-buzzing-after-a-claude-agent-hacked-into-a-gym/)*
