import type { Commitment, GardenNote, HeartNote, StoryScene } from "@/types";

/** Chapter 03 — the two days and what he understood. */
export const storyScenes: StoryScene[] = [
  {
    id: "scene-1",
    step: "Ngày đầu tiên",
    title: "Anh đã từ chối quá nhanh",
    body: "Em muốn chọn cho anh một chiếc avatar đẹp hơn. Nhưng anh đã từ chối và cố giải thích, thay vì đón nhận sự quan tâm ấy một cách nhẹ nhàng.",
    illustration: "avatar",
  },
  {
    id: "scene-2",
    step: "Ngày thứ hai",
    title: "Anh lại nhắc lại chuyện cũ",
    body: "Sau khi hai đứa đã làm hòa, anh lại nhắc và giải thích thêm một lần nữa. Anh nghĩ mình chỉ muốn em hiểu, nhưng anh đã không để ý rằng điều đó có thể khiến em cảm thấy chuyện cũ lại bị khơi lên.",
    illustration: "conversation",
  },
  {
    id: "scene-3",
    step: "Điều anh nhận ra",
    title: "Không phải chuyện ai đúng",
    body: "Anh hiểu rằng đôi khi điều quan trọng không phải là ai đúng trong một chuyện nhỏ, mà là cách mình lắng nghe và đối xử với cảm xúc của nhau. Anh có thể có sở thích riêng, nhưng anh cũng cần biết đón nhận sự quan tâm của em bằng sự dịu dàng.",
    illustration: "garden",
  },
];

/** Chapter 05 — three commitments, not a demand for forgiveness. */
export const commitments: Commitment[] = [
  {
    id: "commitment-1",
    eyebrow: "01 — Lắng nghe",
    title: "Lắng nghe trước khi giải thích",
    body: "Khi em chia sẻ điều gì, anh sẽ cố gắng nghe hết và hiểu cảm xúc của em trước khi đưa ra lý do hay quan điểm của mình.",
    icon: "listen",
  },
  {
    id: "commitment-2",
    eyebrow: "02 — Trân trọng",
    title: "Trân trọng sự quan tâm",
    body: "Anh sẽ để ý hơn đến ý tốt phía sau những điều nhỏ em làm, thay vì chỉ nhìn vào việc mình có thích hay không.",
    icon: "appreciate",
  },
  {
    id: "commitment-3",
    eyebrow: "03 — Hành động",
    title: "Thay đổi bằng hành động",
    body: "Anh không muốn hứa thật nhiều. Anh muốn bắt đầu bằng những việc nhỏ, thực tế và duy trì chúng mỗi ngày.",
    icon: "action",
  },
];

/** The secret letter hidden in Chapter 03. Canonical copy — do not rewrite. */
export const secretLetter = {
  ariaLabel: "Mở lá thư nhỏ bí mật",
  closeLabel: "Đóng lá thư nhỏ",
  paragraphs: [
    "Anh giấu một điều nhỏ ở đây, vì anh chưa nói ra được.",
    "Anh không muốn em hiểu anh hơn. Anh muốn hiểu em hơn.",
    "Nếu một ngày em đọc lại những dòng này và thấy anh có tiến bộ hơn một chút, đó là điều anh đang cố làm mỗi ngày.",
  ],
} as const;

/** Interactive flowers in the garden strip between Chapters 05 and 06. */
export const gardenNotes: GardenNote[] = [
  {
    id: "garden-1",
    ariaLabel: "Bông hoa hồng phấn — mở một lời nhắn",
    text: "Anh sẽ nhớ là em luôn để ý đến anh, kể cả trong những chuyện nhỏ nhất.",
  },
  {
    id: "garden-2",
    ariaLabel: "Bông hoa màu đào — mở một lời nhắn",
    text: "Lần sau anh sẽ dừng lại một nhịp trước khi giải thích.",
  },
  {
    id: "garden-3",
    ariaLabel: "Bông hoa màu xanh lá — mở một lời nhắn",
    text: "Anh thích được em chăm sóc. Anh chỉ cần nhớ đón nhận nó dịu dàng hơn.",
  },
];

/** Five hearts hidden around the page. */
export const heartNotes: HeartNote[] = [
  {
    id: "heart-entrance",
    ariaLabel: "Trái tim nhỏ ở phần mở đầu — mở lời nhắn",
    text: "Em là người duy nhất được ở trong thế giới nhỏ này.",
  },
  {
    id: "heart-letter",
    ariaLabel: "Trái tim nhỏ ở cuối lá thư — mở lời nhắn",
    text: "Anh viết đi viết lại lá thư này mấy lần, vì sợ nói không đủ.",
  },
  {
    id: "heart-story",
    ariaLabel: "Trái tim nhỏ trong phần câu chuyện — mở lời nhắn",
    text: "Điều anh học được: em không cần anh thắng, em cần anh hiểu.",
  },
  {
    id: "heart-memories",
    ariaLabel: "Trái tim nhỏ trong phần kỷ niệm — mở lời nhắn",
    text: "Trang này là nhờ em — những bức ảnh em chụp và những ngày em còn ở đây.",
  },
  {
    id: "heart-ending",
    ariaLabel: "Trái tim nhỏ ở phần kết — mở lời nhắn",
    text: "Anh không cần thắng một cuộc tranh luận nào nữa.",
  },
];
