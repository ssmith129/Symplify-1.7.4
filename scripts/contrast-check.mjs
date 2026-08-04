#!/usr/bin/env node
/**
 * WCAG 2.1 contrast-ratio checker.
 *
 * Usage (single pair):
 *   node scripts/contrast-check.mjs "#854D0E" "#FEFCE8"   -> prints "6.62"
 *
 * Usage (lint mode, no args):
 *   node scripts/contrast-check.mjs --lint
 *   Reads the clinical foreground/background token pairs declared below
 *   (kept in sync with src/style/scss/_variables.scss) and asserts every
 *   pair meets WCAG AA body text (>= 4.5:1) in BOTH light and dark mode.
 *   Exits non-zero if any pair fails.
 *
 * The relative-luminance + contrast math follows
 * https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio exactly.
 */

function srgbToLinear(channel) {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

function relativeLuminance(hex) {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) throw new Error(`Invalid hex color: "${hex}"`);
  const int = parseInt(m[1], 16);
  const r = (int >> 16) & 0xff;
  const g = (int >> 8) & 0xff;
  const b = int & 0xff;
  return (
    0.2126 * srgbToLinear(r) +
    0.7152 * srgbToLinear(g) +
    0.0722 * srgbToLinear(b)
  );
}

export function contrastRatio(fg, bg) {
  const l1 = relativeLuminance(fg);
  const l2 = relativeLuminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Clinical foreground/background pairs — keep in sync with _variables.scss.
// Each entry: [name, foreground hex, background hex]
const LIGHT_PAIRS = [
  ['critical (light)', '#B91C1C', '#FEF2F2'],
  ['urgent   (light)', '#9A3412', '#FFF7ED'],
  ['caution  (light)', '#854D0E', '#FEFCE8'],
  ['stable   (light)', '#15803D', '#F0FDF4'],
  ['info     (light)', '#1D4ED8', '#EFF6FF'],
];

const DARK_PAIRS = [
  ['critical (dark)', '#FCA5A5', '#450A0A'],
  ['urgent   (dark)', '#F97316', '#431407'],
  ['caution  (dark)', '#EAB308', '#422006'],
  ['stable   (dark)', '#22C55E', '#052E16'],
  ['info     (dark)', '#93C5FD', '#172554'],
];

const AA_BODY = 4.5;

function runLint() {
  const pairs = [...LIGHT_PAIRS, ...DARK_PAIRS];
  let failed = 0;
  for (const [name, fg, bg] of pairs) {
    const ratio = contrastRatio(fg, bg);
    const ok = ratio >= AA_BODY;
    if (!ok) failed++;
    const status = ok ? 'PASS' : 'FAIL';
    console.log(
      `${status}  ${name}  ${fg} on ${bg}  =>  ${ratio.toFixed(2)}:1` +
        (ok ? '' : `  (needs >= ${AA_BODY})`)
    );
  }
  if (failed > 0) {
    console.error(`\n${failed} clinical contrast pair(s) below WCAG AA (4.5:1).`);
    process.exit(1);
  }
  console.log(`\nAll ${pairs.length} clinical pairs meet WCAG AA (>= 4.5:1).`);
}

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--lint') {
  runLint();
} else if (args.length === 2) {
  const [fg, bg] = args;
  console.log(contrastRatio(fg, bg).toFixed(2));
} else {
  console.error(
    'Usage:\n' +
      '  node scripts/contrast-check.mjs "#854D0E" "#FEFCE8"   (prints ratio)\n' +
      '  node scripts/contrast-check.mjs --lint                (asserts clinical pairs)'
  );
  process.exit(2);
}
