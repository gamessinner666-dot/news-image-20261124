# Tuesday 24 November 2026 — World News in One Image

[![make.fun competition](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![make.fun rank](https://make.fun/badge/news-image-20261124/gamessinner666-dot/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![make.fun reward](https://make.fun/badge/news-image-20261124/gamessinner666-dot/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

Entry for the [make.fun "Sum up 24 November's world news in one image" bounty](https://make.fun/bounty/news-image-20261124).

## Overview

A single-page 1024×1024 editorial broadsheet front page summarizing **37 date-verified world news stories** from **Tuesday 24 November 2026** across 7 geographic regions plus global/space beats, with:

- **13 original code-drawn SVG editorial graphics** (3 hero lead stories + 10 global beat cards)
- **UTC day timeline** and **key-numbers bar** for instant visual scanning even at 300px
- **Proportional regional balance bar** and **world locator map** with numbered story pins
- **Explicit epistemic attribution badges** (`CONFIRMED`, `OFFICIAL`, `REPORTED`, `CLAIM`) and named sources on every item
- **Strict Date Check audit box** documenting major events from 20–23 November deliberately excluded to preserve single-day fidelity

## Running Locally

```bash
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` uses only Node 22 standard library modules (`node:fs`, `node:path`, `node:crypto`), validates the PNG header and byte budget, and writes deterministic output to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png`).
