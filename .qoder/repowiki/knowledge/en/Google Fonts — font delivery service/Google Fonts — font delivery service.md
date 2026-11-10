---
kind: external_dependency
name: Google Fonts — font delivery service
slug: google-fonts
category: external_dependency
category_hints:
    - client_constraint
scope:
    - '**'
---

### ...
- The design system selects fonts via Google Fonts; Caveat was considered but rejected because it does not ship the Vietnamese/Latin-ext unicode subsets needed for signatures such as "Anh thương em".
- Client constraint: only Latin + Latin-ext glyphs are available for Caveat, so any handwritten-style font chosen must be verified against the official subset list before use. Pacifico, Dancing Script or Patrick Hand were suggested as alternatives.
- Verify exact family/subset URLs against the official Google Fonts docs.