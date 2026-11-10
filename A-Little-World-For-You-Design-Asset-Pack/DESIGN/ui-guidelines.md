# UI / UX Guidelines

## Overall experience
A single-page illustrated journey with six chapters. The user scrolls naturally from the entrance to the final message. A subtle chapter progress indicator may show progress, but it must not dominate the experience.

## Chapter 1 — The Little Entrance
- Centered illustrated envelope on warm cream background.
- Small floral/heart decorations around it.
- Heading: “A Little World For You”.
- Supporting line: “Anh có một điều nhỏ muốn gửi em…”
- CTA: “Mở món quà nhỏ”.
- On click: envelope flap opens, letter card rises, transition gently scrolls to the letter.

## Chapter 2 — A Letter For You
- Main letter on textured paper card.
- Serif heading and readable body copy.
- Small handwritten signature at the end.
- Reveal by short fade/slide; do not type every character if it makes reading slow.
- Provide a “Đọc thư”/“Tiếp tục” control only if needed.

## Chapter 3 — What I Didn't Realize
Three illustrated story beats:
1. Day one: she suggested a profile picture because she cared; he declined and over-explained.
2. Day two: he tried explaining again even though he ultimately changed it; he now understands that timing and listening matter.
3. Realization: the issue was not merely the avatar, but how he responded to her care and feelings.
Keep the story accountable. Do not imply she was wrong or that she must forgive him.

## Chapter 4 — Our Little Memories
- Polaroid-style gallery.
- Use placeholders until the owner adds real photos.
- Clicking a photo opens an accessible lightbox with close button and keyboard support.
- Captions editable in a data file.
- Never fabricate shared memories, dates, locations, or photos.

## Chapter 5 — Things I Want To Do Better
Three promise cards:
- Lắng nghe trước khi giải thích.
- Cố gắng hiểu cảm xúc và ý tốt phía sau những điều em làm.
- Thể hiện sự thay đổi bằng hành động nhỏ, đều đặn.
Avoid unrealistic forever-promises or grand claims.

## Chapter 6 — A Hug For You
- Soft sunset/garden illustration or a simple watercolor scene.
- Closing message: “Nếu hôm nay em vẫn còn giận, anh hiểu. Em không cần phải vui lên ngay hay phải trả lời anh ngay lúc này. Anh chỉ mong em biết rằng anh thật lòng xin lỗi, trân trọng em và muốn học cách yêu em bằng sự thấu hiểu nhiều hơn. Khi nào em muốn, cho anh gửi em một cái ôm nhé.”
- Button: “Nhận cái ôm của anh” (he gives, she receives) — may trigger a gentle heart animation. Confirmation copy: “Anh đã gửi em một cái ôm. Cảm ơn em ❤️”
- Optional quiet text: “Khi nào em muốn, em gửi lại anh một cái ôm cũng được.”
- The button is optional; no guilt-inducing copy if not clicked.

## Accessibility and mobile
- Semantic headings, landmarks, buttons.
- Keyboard-operable interactions.
- Visible focus ring.
- Alt text for meaningful images; empty alt for decoration.
- Do not rely on hover; support tap.
- Minimum comfortable tap target around 44px.
- Test at 360px, 390px, 768px, 1024px and wide desktop.
