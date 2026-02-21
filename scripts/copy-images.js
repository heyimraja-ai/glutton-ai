#!/usr/bin/env node
/**
 * Copy image assets from the Vite project (../glutton-ai/public) into this Next.js public folder.
 * Run from project root: node scripts/copy-images.js
 */
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../../glutton-ai/public');
const destDir = path.join(__dirname, '../public');

if (!fs.existsSync(sourceDir)) {
  console.warn('Source folder not found:', sourceDir);
  console.warn('Copy *.JPG from your glutton-ai/public folder into glutton-ai-nextjs/public manually.');
  process.exit(0);
}

const files = fs.readdirSync(sourceDir).filter((f) => f.endsWith('.JPG') || f.endsWith('.jpg'));
files.forEach((file) => {
  const src = path.join(sourceDir, file);
  const dest = path.join(destDir, file);
  fs.copyFileSync(src, dest);
  console.log('Copied', file);
});
console.log('Done. Copied', files.length, 'images.');
