#!/usr/bin/env node
// Build-time gate (B4-incident guardrail, 2026-11-01): any article that is NEW in
// articles.ts vs HEAD, or whose body CHANGED vs HEAD, must carry the A1/A2/A3 trio:
//   "## Key takeaways" block, "## Sources" section, >=3 question-form H2s.
// Legacy articles whose bodies are untouched pass automatically.
// Escape hatch (named user approval only): SKIP_ARTICLE_CONSTRAINTS=1 npm run build
import {execSync} from 'node:child_process';
import fs from 'node:fs';

const FILE = 'src/data/articles.ts';

function extractBodies(text) {
  const bodies = {};
  const re = /"slug": "([^"]+)"[\s\S]*?"body": "([\s\S]*?)",?\n/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    bodies[m[1]] = m[2].replaceAll('\\n', '\n').replaceAll('\\"', '"');
  }
  return bodies;
}

function articleOrder(text) {
  return [...text.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]);
}

let headText;
try {
  headText = execSync(`git show HEAD:${FILE}`, {encoding: 'utf8', stdio: ['pipe', 'pipe', 'pipe']});
} catch {
  console.warn(`[article-constraints] cannot read HEAD:${FILE}; skipping gate`);
  process.exit(0);
}

const currText = fs.readFileSync(FILE, 'utf8');
const head = extractBodies(headText);
const curr = extractBodies(currText);
const errors = [];

for (const slug of Object.keys(curr)) {
  const isNew = !(slug in head);
  const changed = !isNew && head[slug] !== curr[slug];
  if (!isNew && !changed) continue;

  const b = curr[slug];
  const label = isNew ? 'new article' : 'revised article';
  if (!b.includes('## Key takeaways')) errors.push(`${slug} (${label}): missing "## Key takeaways" (A1)`);
  if (!b.includes('## Sources')) errors.push(`${slug} (${label}): missing "## Sources" (A2)`);
  const qH2 = (b.match(/^## [A-Z][^.?]{5,80}\?$/gm) || []).length;
  if (qH2 < 3) errors.push(`${slug} (${label}): question-form H2 count ${qH2} < 3 (A3)`);
  const imgs = (b.match(/!\[[^\]]*\]\(\/charts\/[^)]+\)/g) || []).length;
  if (imgs < 1) errors.push(`${slug} (${label}): no labelled diagram embed ![...](/charts/...) (A6 image rule)`);
}

const missing = articleOrder(headText).filter((s) => !(s in curr));
for (const slug of missing) errors.push(`${slug}: removed from articles.ts (verify intentional)`);

if (errors.length) {
  console.error('[article-constraints] FAILED — A1/A2/A3 trio required on new/revised articles:');
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log('[article-constraints] OK');
