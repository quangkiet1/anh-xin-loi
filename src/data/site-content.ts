/**
 * Central content configuration.
 *
 * Canonical copy lives here — see A-Little-World-For-You-Design-Asset-Pack/
 * CODEX/MASTER-PROMPT.md §12. Replace every `[PLACEHOLDER]` with your own
 * words before sending the link. Do not invent personal details to fill a gap.
 */
export const siteContent = {
  title: "A Little World For You",

  // --- Personal fields (replace these) ---------------------------------
  boyfriendName: "[TÊN ANH]",
  girlfriendName: "[TÊN EM]",
  signature: "[CHỮ KÝ CỦA ANH]",
  date: "[NGÀY GỬI THƯ]",

  // --- Chapter 01 -------------------------------------------------------
  entrance: {
    paragraph:
      "Anh có một điều nhỏ muốn gửi em. Không phải điều gì quá lớn lao, chỉ là một góc nhỏ anh chuẩn bị bằng tất cả sự chân thành.",
    subtitle: "Anh có một điều nhỏ muốn gửi em…",
    button: "Mở món quà nhỏ",
  },

  // --- Chapter 02 -------------------------------------------------------
  letter: {
    greeting: "Gửi cô gái anh thương,",
    paragraphs: [
      "Anh biết hai ngày vừa rồi anh đã làm em buồn đến hai lần. Điều khiến anh thấy có lỗi là em chỉ muốn quan tâm, muốn anh có một chiếc avatar đẹp hơn, nhưng anh lại vội vàng từ chối và cố giải thích theo suy nghĩ của mình.",
      "Đến ngày hôm sau, anh lại tiếp tục giải thích thêm một lần nữa. Dù cuối cùng anh vẫn đổi avatar theo ý em, anh hiểu rằng việc làm theo thôi chưa đủ nếu anh vẫn chưa thật sự lắng nghe cảm xúc của em.",
      "Anh xin lỗi vì đã khiến một chuyện nhỏ trở thành điều làm em buồn. Anh nhận ra em không nhất thiết cần anh phải đồng ý ngay với mọi thứ; điều em xứng đáng nhận được là sự lắng nghe và thái độ trân trọng khi em muốn làm điều gì đó cho anh.",
      "Anh sẽ cố gắng chậm lại, lắng nghe nhiều hơn và không vội giải thích chỉ để bảo vệ suy nghĩ của mình. Anh muốn thể hiện điều đó bằng cách cư xử của anh, chứ không chỉ bằng lời nói hôm nay.",
      "Cảm ơn em vì những quan tâm nhỏ bé mà đôi khi anh đã chưa nhận ra đúng lúc.",
    ],
    closing: "Anh thương em.",
    postscript:
      "P.S. Em không cần phải hết giận ngay sau khi đọc những dòng này. Anh chỉ muốn em biết anh thật lòng xin lỗi.",
  },

  // --- Chapter 06 -------------------------------------------------------
  // Direction is fixed: he gives the hug, she receives it. This matches the
  // body line "cho anh gửi em một cái ôm" and the copy in STORY/chapter-06.md.
  hug: {
    heading: "Một cái ôm nhỏ dành cho em",
    paragraphs: [
      "Nếu hôm nay em vẫn còn giận, anh hiểu.",
      "Em không cần phải vui lên ngay hay phải trả lời anh ngay lúc này.",
      "Anh chỉ mong em biết rằng anh thật lòng xin lỗi, trân trọng em và muốn học cách yêu em bằng sự thấu hiểu nhiều hơn.",
      "Khi nào em muốn, cho anh gửi em một cái ôm nhé.",
    ],
    button: "Nhận cái ôm của anh",
    nudgedButton: "Một cái ôm nữa nhé",
    confirmation: "Anh đã gửi em một cái ôm. Cảm ơn em ❤️",
    secondaryNote: "Khi nào em muốn, em gửi lại anh một cái ôm cũng được.",
  },

  // --- Shared labels ----------------------------------------------------
  labels: {
    backToTop: "Lên đầu trang",
    progress: "Các chương",
  },
} as const;

export type SiteContent = typeof siteContent;
