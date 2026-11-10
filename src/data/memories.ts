import { memorySrc } from "@/lib/assets";
import type { Memory } from "@/types";

/**
 * The only real content in this project: five photos from the owner's
 * `kỉ niệm/` folder, converted to WebP by `npm run memories`.
 *
 * Captions are deliberately `[CHÚ THÍCH]`. Do not fill them in with invented
 * occasions, dates, or places — the owner writes those.
 *
 * Grid shows the featured photos (memory-01…03, 05). memory-04 is a near
 * duplicate of memory-03, so it stays available in the lightbox without
 * taking a card slot.
 */
export const memories: Memory[] = [
  {
    id: "memory-01",
    src: memorySrc("memory-01"),
    alt: "Hai người ngồi trên bãi cỏ trong công viên về đêm, cùng nhìn vào máy ảnh; cô gái giơ tay hình chữ V.",
    caption: "[CHÚ THÍCH]",
    rotation: -2.2,
    featured: true,
  },
  {
    id: "memory-02",
    src: memorySrc("memory-02"),
    alt: "Cô gái đặt tay bên má, anh trai nghiêng đầu tựa về phía cô, phía sau là ánh đèn của các tòa nhà.",
    caption: "[CHÚ THÍCH]",
    rotation: 1.8,
    featured: true,
  },
  {
    id: "memory-03",
    src: memorySrc("memory-03"),
    alt: "Cô gái chu môi tinh nghịch, anh trai quay sang nhìn cô, cả hai ngồi khoanh chân trên cỏ.",
    caption: "[CHÚ THÍCH]",
    rotation: -1.4,
    featured: true,
  },
  {
    id: "memory-04",
    src: memorySrc("memory-04"),
    alt: "Cùng một tư thế nhưng góc gần hơn: cô gái chu môi, anh trai nhìn cô.",
    caption: "[CHÚ THÍCH]",
    rotation: 2.4,
    featured: false,
  },
  {
    id: "memory-05",
    src: memorySrc("memory-05"),
    alt: "Góc chụp khác: cô gái đặt tay bên má, anh trai cười và giơ tay phía sau cô.",
    caption: "[CHÚ THÍCH]",
    rotation: -1.1,
    featured: true,
  },
];

export const featuredMemories = memories.filter((memory) => memory.featured);
