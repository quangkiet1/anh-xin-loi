# A Little World For You — Design Asset Pack

Bộ tài nguyên định hướng cho website quà tặng/xin lỗi lãng mạn **A Little World For You**.

## Phong cách đã chốt
- Watercolor / màu nước dịu nhẹ.
- Hai nhân vật hoạt hình người (nam và nữ), giữ ngoại hình nhất quán.
- Hình ảnh mang cảm giác truyện tranh minh họa và scrapbook.
- Màu hồng phấn, kem ấm, đào nhạt và xanh trời.
- Trải nghiệm chân thành, dễ thương, không gây áp lực cho người nhận.

## Nội dung gói
- `DESIGN/`: design system, UI/UX guidelines, palette.
- `ASSETS/ui-reference/`: hai concept board được tạo cho dự án.
- `STORY/`: cốt truyện 6 chương và nội dung mẫu tiếng Việt.
- `ANIMATIONS/`: hướng dẫn chuyển động, cách triển khai bằng Motion/CSS.
- `CODEX/MASTER-PROMPT.md`: **nguồn duy nhất (single source of truth)** — bản gộp của prompt cũ và bản spec tiếng Việt dài; các file `STORY/` chỉ còn là tài liệu tham chiếu nếu mâu thuẫn.

## Lưu ý đã chốt trong MASTER-PROMPT
- Chương 06 dùng nút “Nhận cái ôm của anh” (anh gửi — em nhận), không còn “Gửi anh một cái ôm”.
- Chương 04 dùng 5 ảnh thật trong `kỉ niệm/` (WebP, khung 3:2, không cắt mất người); caption vẫn để `[CHÚ THÍCH]`.
- Chữ viết tay chỉ dùng **Pacifico** (có subset `vietnamese`). Không dùng Caveat vì thiếu dấu tiếng Việt.
- Bảng màu chỉnh `--color-muted` → `#7A6466` và `--color-rose-deep` → `#8F4F60` để đạt AA.

## Lưu ý về hình ảnh
Các PNG trong `ASSETS/ui-reference/` là **concept board/moodboard tổng thể**, không phải bộ layer PNG trong suốt đã tách sẵn. Chúng giúp Codex hiểu phong cách, nhân vật, màu sắc và bố cục. Không được dùng nguyên tấm moodboard làm background cho website.

Để có nhân vật PNG trong suốt riêng biệt hoặc sprite sheet chuẩn, cần tạo/tách từng asset riêng ở bước tiếp theo. Trong lúc chưa có, Codex phải ưu tiên CSS/SVG/vector đơn giản và chuyển động trên các phần tử DOM; không tự cắt moodboard một cách tùy tiện rồi coi đó là asset production-ready.

## Cách dùng
1. Giải nén folder.
2. Mở repository Next.js của bạn trong Codex.
3. Đưa toàn bộ folder này vào workspace hoặc đặt ở thư mục gốc repository.
4. Mở `CODEX/MASTER-PROMPT.md`, copy toàn bộ nội dung và gửi Codex.
5. Thay ảnh minh họa bằng ảnh thật của hai người trong `public/images/memories/` khi bạn sẵn sàng. (5 ảnh trong `kỉ niệm/` đã là ảnh thật — chỉ cần chuyển sang WebP và đặt đúng tên `memory-01…05`.)
