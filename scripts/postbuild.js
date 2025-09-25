// Copy docs/index.html to docs/404.html for GitHub Pages SPA fallback
import { copyFileSync, existsSync } from 'node:fs';

const INDEX = 'docs/index.html';
const FOUR_OH_FOUR = 'docs/404.html';

try {
  if (!existsSync(INDEX)) {
    console.warn('[postbuild] docs/index.html not found; build may have failed.');
    process.exit(0);
  }
  copyFileSync(INDEX, FOUR_OH_FOUR);
  console.log('[postbuild] Created docs/404.html for SPA fallback.');
} catch (err) {
  console.error('[postbuild] Failed to create docs/404.html:', err);
  process.exit(1);
}

