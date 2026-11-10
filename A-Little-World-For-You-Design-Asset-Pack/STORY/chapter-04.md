# Chapter 04 — Our Little Memories

This section must use owner-provided photos only.

The owner has supplied five real photos in `kỉ niệm/` at the workspace root:

| Id | Source file (prefix) | Moment |
|---|---|---|
| `memory-01` | `1794239319020_…3bca7385b839f0bd671a809d1d82036b.jpg` | Both facing camera, she gives a peace sign |
| `memory-02` | `1794239319070_…5a7277c83a29ce9b167f0190c151acbf.jpg` | Her hand at her cheek, his head leaning toward her |
| `memory-03` | `1794239319091_…ce0b43bb9f59c23e8b12a3e8aace82fc.jpg` | She pouts playfully, he looks at her |
| `memory-04` | `1794239319111_…ccf99ab444d0bdbb89413a9d9122b233.jpg` | Same pose as `memory-03`, closer — near-duplicate |
| `memory-05` | `1794239319174_…8104a88d17a5a6dc2b7c23a1d451d6ee.jpg` | Different angle, her hand at her cheek, him grinning behind |

Processing: copy to `public/images/memories/` with ASCII names, convert to WebP (≈1200px long edge, q80, metadata stripped), keep a 3:2 instant-photo frame with `object-fit: contain` and never crop a person out. Show four cards in the grid (`memory-01`, `memory-02`, `memory-03`, `memory-05`); include all five in the lightbox.

Captions stay editable:
1. `memory-01` — `[CHÚ THÍCH]`
2. `memory-02` — `[CHÚ THÍCH]`
3. `memory-03` — `[CHÚ THÍCH]`
4. `memory-05` — `[CHÚ THÍCH]`

Optional timeline:
- `[THỜI ĐIỂM QUEN NHAU]`
- `[MỘT KỶ NIỆM ĐẶC BIỆT]`
- `[MỘT KHOẢNH KHẮC GẦN ĐÂY]`

Never invent dates, events, places, captions, or shared experiences. Only the five supplied photos are real content; everything else stays a clearly marked placeholder. If the photos are missing at build time, render elegant watercolor placeholder cards (`MEMORY 01`…) and make replacement easy.
