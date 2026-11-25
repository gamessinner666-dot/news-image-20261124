import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  ALL_STORIES,
  DATE_CHECK_TEXT,
  DIGEST_STORIES,
  KEY_NUMBERS,
  LEAD_STORIES,
  MEDIUM_STORIES,
  REGIONS,
  REGION_MAP,
  UTC_EVENTS,
} from './stories.mjs';
import { renderArt, renderWorldMap } from './illustrations.mjs';

const __dir = dirname(fileURLToPath(import.meta.url));
const repoDir = resolve(__dir, '..');

function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function badgeClass(kind) {
  if (kind === 'confirmed') return 'b-confirmed';
  if (kind === 'official') return 'b-official';
  if (kind === 'claim') return 'b-claim';
  return 'b-reported';
}

function shortBadgeClass(letter) {
  if (letter === 'C') return 'sb-c';
  if (letter === 'O') return 'sb-o';
  return 'sb-r';
}

function buildHtml() {
  // Compute exact region counts from ALL_STORIES so numbers are 100% consistent
  const counts = Object.fromEntries(REGIONS.map((r) => [r.id, 0]));
  for (const s of ALL_STORIES) {
    counts[s.region] = (counts[s.region] || 0) + 1;
  }
  const totalStories = ALL_STORIES.length;

  const regionBarHtml = REGIONS.map((r) => {
    const n = counts[r.id] || 0;
    return `<div class="reg-seg" style="flex:${n} 1 0;min-width:62px;background:${r.color};">${r.label} <span>${n}</span></div>`;
  }).join('');

  const utcHtml = UTC_EVENTS.map(
    (e) =>
      `<div class="utc-item"><span class="utc-t">${esc(e.time)}</span> <span class="utc-l">${esc(e.label)}</span></div>`,
  ).join('');

  const numbersHtml = KEY_NUMBERS.map(
    (k) =>
      `<div class="num-item">
        <div class="num-val">${esc(k.value)}</div>
        <div class="num-meta"><div class="num-lbl">${esc(k.label)}</div><div class="num-src">${esc(k.source)}</div></div>
      </div>`,
  ).join('');

  const leadHtml = LEAD_STORIES.map((s) => {
    const col = REGION_MAP[s.region].color;
    return `<article class="lead-card">
      <div class="lead-art">${renderArt(s.art)}</div>
      <div class="card-meta">
        <span class="pin" style="background:${col}">${s.num}</span>
        <span class="kicker" style="color:${col}">${esc(s.kicker)}</span>
        <span class="badge ${badgeClass(s.badgeKind)}">${esc(s.badge)}</span>
      </div>
      <h2 class="lead-hl">${esc(s.headline)}</h2>
      <p class="lead-body">${esc(s.summary)}</p>
      <div class="src-line">${esc(s.sources)}</div>
    </article>`;
  }).join('');

  const medHtml = MEDIUM_STORIES.map((s) => {
    const col = REGION_MAP[s.region].color;
    return `<article class="med-card">
      <div class="med-art">${renderArt(s.art)}</div>
      <div class="card-meta">
        <span class="pin pin-sm" style="background:${col}">${s.num}</span>
        <span class="kicker kicker-sm" style="color:${col}">${esc(s.kicker)}</span>
        <span class="badge badge-sm ${badgeClass(s.badgeKind)}">${esc(s.badge)}</span>
      </div>
      <h3 class="med-hl">${esc(s.headline)}</h3>
      <p class="med-body">${esc(s.summary)}</p>
      <div class="src-line src-sm">${esc(s.sources)}</div>
    </article>`;
  }).join('');

  const leftDigest = DIGEST_STORIES.slice(0, 12);
  const rightDigest = DIGEST_STORIES.slice(12);

  const renderDigestCol = (items) =>
    items
      .map((s) => {
        const col = REGION_MAP[s.region].color;
        return `<div class="d-row">
          <span class="pin pin-xs" style="background:${col}">${s.num}</span>
          <div class="d-text"><strong>${esc(s.place)}:</strong> ${esc(s.text)}</div>
          <div class="d-right"><span class="d-src">${esc(s.source)}</span><span class="sb ${shortBadgeClass(s.badge)}">${s.badge}</span></div>
        </div>`;
      })
      .join('');

  const mapLegend = REGIONS.map(
    (r) => `<span class="leg-item"><i style="background:${r.color}"></i>${r.label} ${counts[r.id]}</span>`,
  ).join('');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<title>Tuesday 24 November 2026 — World News</title>
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html, body {
    width: 1024px;
    height: 1024px;
    overflow: hidden;
    background: #FAF6EE;
    color: #161922;
    font-family: 'Segoe UI', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .page {
    width: 1024px;
    height: 1024px;
    padding: 8px 14px 6px 14px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  /* MASTHEAD */
  .top-kicker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 9.5px;
    font-weight: 800;
    letter-spacing: 0.7px;
    text-transform: uppercase;
    border-bottom: 1px solid #C8C0AE;
    padding-bottom: 2px;
  }
  .tk-left { color: #A61C1C; }
  .tk-right { color: #2D3748; }
  .masthead {
    text-align: center;
    padding: 0;
    line-height: 1;
  }
  .masthead h1 {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 56px;
    font-weight: 700;
    letter-spacing: -1.1px;
    color: #111827;
    line-height: 1.0;
  }
  .deck {
    text-align: center;
    font-family: Georgia, serif;
    font-style: italic;
    font-size: 11.8px;
    font-weight: 600;
    color: #8B1A1A;
    border-top: 2px solid #161922;
    border-bottom: 1px solid #161922;
    padding: 2.5px 0;
    margin-top: 2px;
  }
  /* UTC BAR */
  .utc-bar {
    display: flex;
    align-items: center;
    background: #1B2A41;
    color: #F8FAFC;
    padding: 3px 6px;
    gap: 7px;
    border-radius: 2px;
  }
  .utc-tag {
    background: #A61C1C;
    color: #FFF;
    font-size: 8px;
    font-weight: 800;
    padding: 2px 5px;
    border-radius: 2px;
    letter-spacing: 0.5px;
    white-space: nowrap;
  }
  .utc-list {
    display: flex;
    justify-content: space-between;
    flex: 1;
    gap: 6px;
  }
  .utc-item { font-size: 8.6px; white-space: nowrap; }
  .utc-t { color: #FCD34D; font-weight: 800; }
  .utc-l { color: #E2E8F0; font-weight: 500; }

  /* NUMBERS STRIP */
  .nums-bar {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 6px;
    background: #F3EDE0;
    border: 1px solid #D5CCB9;
    border-radius: 2px;
    padding: 3px 6px;
  }
  .num-item {
    display: flex;
    align-items: center;
    gap: 5px;
    border-right: 1px solid #D5CCB9;
    padding-right: 4px;
  }
  .num-item:last-child { border-right: none; padding-right: 0; }
  .num-val {
    font-family: Georgia, serif;
    font-size: 15px;
    font-weight: 700;
    color: #9E2A2B;
    white-space: nowrap;
    line-height: 1;
  }
  .num-meta { line-height: 1.08; }
  .num-lbl { font-size: 7.7px; font-weight: 700; color: #1F2937; }
  .num-src { font-size: 6.8px; font-weight: 700; color: #64748B; text-transform: uppercase; }

  /* REGION BALANCE BAR */
  .reg-bar {
    display: flex;
    height: 14px;
    border-radius: 2px;
    overflow: hidden;
    gap: 1.5px;
  }
  .reg-seg {
    color: #FFFFFF;
    font-size: 7.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    letter-spacing: 0.3px;
    white-space: nowrap;
  }
  .reg-seg span {
    background: rgba(255,255,255,0.22);
    padding: 0 3px;
    border-radius: 2px;
  }

  /* LEAD ROW (3 CARDS) */
  .lead-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }
  .lead-card {
    background: #FFFDF8;
    border: 1px solid #D5CCB9;
    border-top: 2px solid #161922;
    padding: 4px 5px 4px 5px;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .lead-art {
    width: 100%;
    height: 98px;
    border: 1px solid #C8C0AE;
    overflow: hidden;
  }
  .lead-art svg { width: 100%; height: 98px; display: block; }
  .card-meta {
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 1px;
  }
  .pin {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    color: #FFF;
    font-size: 8.5px;
    font-weight: 800;
    flex-shrink: 0;
  }
  .pin-sm { width: 13px; height: 13px; font-size: 7.8px; }
  .pin-xs { width: 12.5px; height: 12.5px; font-size: 7.2px; }
  .kicker {
    font-size: 8px;
    font-weight: 800;
    letter-spacing: 0.35px;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .kicker-sm { font-size: 7.2px; }
  .badge {
    margin-left: auto;
    font-size: 7px;
    font-weight: 800;
    padding: 1px 4px;
    border-radius: 2px;
    letter-spacing: 0.3px;
    white-space: nowrap;
  }
  .badge-sm { font-size: 6.4px; padding: 0.5px 3px; }
  .b-confirmed { background: #E6F4EA; color: #137333; border: 0.8px solid #137333; }
  .b-official  { background: #FEF3C7; color: #92400E; border: 0.8px solid #B45309; }
  .b-claim     { background: #FEE2E2; color: #991B1B; border: 0.8px solid #B91C1C; }
  .b-reported  { background: #E2E8F0; color: #334155; border: 0.8px solid #475569; }

  .lead-hl {
    font-family: Georgia, serif;
    font-size: 14.3px;
    font-weight: 700;
    line-height: 1.12;
    color: #111827;
  }
  .lead-body {
    font-size: 9.2px;
    line-height: 1.24;
    color: #2D3748;
  }
  .src-line {
    font-size: 7.6px;
    font-weight: 700;
    color: #64748B;
    margin-top: auto;
    padding-top: 1px;
  }
  .src-sm { font-size: 6.9px; }

  /* MEDIUM ROWS (5x2 = 10 CARDS) */
  .med-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 6px;
  }
  .med-card {
    background: #FFFDF8;
    border: 1px solid #D5CCB9;
    padding: 3.5px 4.5px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .med-art {
    width: 100%;
    height: 50px;
    border: 1px solid #C8C0AE;
    overflow: hidden;
  }
  .med-art svg { width: 100%; height: 50px; display: block; }
  .med-hl {
    font-family: Georgia, serif;
    font-size: 11.2px;
    font-weight: 700;
    line-height: 1.08;
    color: #111827;
  }
  .med-body {
    font-size: 8.1px;
    line-height: 1.15;
    color: #374151;
  }

  /* BOTTOM DIGEST (MAP + 23 STORIES) */
  .bottom-band {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 8px;
    border-top: 2px solid #161922;
    padding-top: 4px;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }
  .sec-title {
    font-size: 8.8px;
    font-weight: 800;
    letter-spacing: 0.6px;
    text-transform: uppercase;
    color: #A61C1C;
    margin-bottom: 3px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sec-sub { color: #475569; font-weight: 700; font-size: 7.4px; text-transform: none; letter-spacing: 0; }
  .map-box {
    display: flex;
    flex-direction: column;
  }
  .map-wrap {
    border: 1px solid #C8C0AE;
    background: #D5E6F2;
    line-height: 0;
  }
  .map-wrap svg { width: 100%; height: 172px; display: block; }
  .map-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 2.5px 6px;
    margin-top: 4px;
    font-size: 7.4px;
    font-weight: 700;
    color: #334155;
  }
  .leg-item { display: inline-flex; align-items: center; gap: 3px; }
  .leg-item i { display: inline-block; width: 6.5px; height: 6.5px; border-radius: 50%; }

  .digest-box {
    min-width: 0;
    overflow: hidden;
  }
  .digest-cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 8px;
  }
  .d-col {
    display: flex;
    flex-direction: column;
    gap: 2.2px;
    min-width: 0;
  }
  .d-row {
    display: flex;
    align-items: center;
    gap: 3.5px;
    font-size: 8.3px;
    line-height: 1.18;
    border-bottom: 0.5px dotted #D5CCB9;
    padding-bottom: 2.4px;
    min-height: 15.6px;
    min-width: 0;
  }
  .d-row:last-child { border-bottom: none; }
  .d-text {
    flex: 1;
    color: #1F2937;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .d-text strong { color: #0F172A; }
  .d-right {
    display: inline-flex;
    align-items: center;
    gap: 2.5px;
    flex-shrink: 0;
    margin-left: 2px;
  }
  .d-src { font-size: 6.9px; font-weight: 700; color: #64748B; white-space: nowrap; }
  .sb {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 11px;
    height: 11px;
    border-radius: 2px;
    font-size: 6.8px;
    font-weight: 800;
  }
  .sb-c { background: #137333; color: #FFF; }
  .sb-o { background: #B45309; color: #FFF; }
  .sb-r { background: #475569; color: #FFF; }

  /* DATE CHECK BOX */
  .date-check {
    display: flex;
    align-items: stretch;
    border: 1.5px solid #A61C1C;
    background: #FFF9F5;
    border-radius: 2px;
    overflow: hidden;
  }
  .dc-tag {
    background: #A61C1C;
    color: #FFFFFF;
    font-size: 8.5px;
    font-weight: 800;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.5px;
    line-height: 1.1;
    flex-shrink: 0;
  }
  .dc-body {
    padding: 3.5px 7px;
    font-size: 7.9px;
    line-height: 1.24;
    color: #1F2937;
  }
  .dc-body strong { color: #7F1D1D; }

  /* MICRO FOOTER */
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 7.4px;
    color: #475569;
    padding-top: 1px;
  }
  .footer b { color: #161922; }
</style>
</head>
<body>
<div class="page">
  <header>
    <div class="top-kicker">
      <span class="tk-left">THE WORLD IN ONE DAY</span>
      <span class="tk-right">${totalStories} STORIES · 9 REGIONS · 13 DRAWN SCENES · ALL FROM THIS TUESDAY</span>
    </div>
    <div class="masthead"><h1>Tuesday 24 November 2026</h1></div>
    <div class="deck">U.S. jury convicts Huawei on 10 of 12 counts · Dow tops 50,000 as Sanofi buys Insmed ($41B) · 4th Hormuz tanker claimed &amp; Riyadh hit</div>
  </header>

  <section class="utc-bar">
    <div class="utc-tag">THE DAY IN UTC</div>
    <div class="utc-list">${utcHtml}</div>
  </section>

  <section class="nums-bar">${numbersHtml}</section>

  <section class="reg-bar">${regionBarHtml}</section>

  <section class="lead-grid">${leadHtml}</section>

  <section class="med-grid">${medHtml}</section>

  <section class="bottom-band">
    <div class="map-box">
      <div class="sec-title">WHERE IT HAPPENED <span class="sec-sub">pins = story numbers</span></div>
      <div class="map-wrap">${renderWorldMap(ALL_STORIES)}</div>
      <div class="map-legend">${mapLegend}</div>
    </div>
    <div class="digest-box">
      <div class="sec-title">ALSO ON TUESDAY 24 NOVEMBER <span class="sec-sub">${DIGEST_STORIES.length} more dated stories across all regions · C = Confirmed · O = Official · R = Reported</span></div>
      <div class="digest-cols">
        <div class="d-col">${renderDigestCol(leftDigest)}</div>
        <div class="d-col">${renderDigestCol(rightDigest)}</div>
      </div>
    </div>
  </section>

  <section class="date-check">
    <div class="dc-tag">DATE<br/>CHECK</div>
    <div class="dc-body"><strong>${esc(DATE_CHECK_TEXT.lead)}</strong> ${esc(DATE_CHECK_TEXT.excluded)}</div>
  </section>

  <footer class="footer">
    <span><b>HOW SURE:</b> <span class="badge b-confirmed">CONFIRMED</span> 2+ outlets · <span class="badge b-official">OFFICIAL</span> agency/ministry/result · <span class="badge b-reported">REPORTED</span> one outlet · <span class="badge b-claim">CLAIM</span> one side's account, labelled as such</span>
    <span>Sources named with each story · Maps &amp; graphics drawn in code, not photographs</span>
  </footer>
</div>
</body>
</html>`;
}

function findChrome() {
  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  ];
  for (const p of candidates) {
    if (existsSync(p)) return p;
  }
  throw new Error('No headless Chromium/Edge binary found');
}

function main() {
  const htmlPath = join(__dir, 'frontpage.html');
  const rawPngPath = join(__dir, 'raw.png');
  const outPngPath = join(repoDir, 'entry.png');
  writeFileSync(htmlPath, buildHtml(), 'utf8');

  const chrome = findChrome();
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/').replace(/ /g, '%20');
  execFileSync(
    chrome,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--hide-scrollbars',
      '--force-device-scale-factor=1',
      '--window-size=1024,1024',
      '--virtual-time-budget=2000',
      `--screenshot=${rawPngPath}`,
      fileUrl,
    ],
    { stdio: 'pipe' },
  );

  // Optimize PNG cleanly via Python PIL (lossless optimize + verify exact 1024x1024)
  const pyCode = `
from PIL import Image
im = Image.open(r'''${rawPngPath}''').convert('RGB')
assert im.size == (1024, 1024), f'Bad size {im.size}'
im.save(r'''${outPngPath}''', format='PNG', optimize=True, compress_level=9)
preview_dir = r'''C:\\Users\\crypt\\.gemini\\antigravity\\brain\\fd268eff-9602-45fb-a18a-25c72b726484\\scratch'''
import os
os.makedirs(preview_dir, exist_ok=True)
im.resize((300, 300), Image.Resampling.LANCZOS).save(os.path.join(preview_dir, 'preview_300.png'), format='PNG')
print('Saved optimized PNG and 300x300 preview')
`;
  execFileSync('python', ['-c', pyCode], { stdio: 'inherit' });
  const size = statSync(outPngPath).size;
  console.log(`Rendered ${outPngPath} (${size} bytes)`);
}

main();
