import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const demoDir = path.resolve(rootDir, '../dist/demo');
const indexPath = path.join(demoDir, 'index.html');

const html = await fs.readFile(indexPath, 'utf8');
const stylesheetPattern = /<link rel="stylesheet" crossorigin href="(.+?)">/g;

let inlinedHtml = html;
let match;

while ((match = stylesheetPattern.exec(html)) !== null) {
  const href = match[1];
  const cssPath = path.resolve(demoDir, href);
  const css = await fs.readFile(cssPath, 'utf8');
  const styleTag = `<style>${css}</style>`;
  inlinedHtml = inlinedHtml.replace(match[0], styleTag);
}

await fs.writeFile(indexPath, inlinedHtml, 'utf8');
