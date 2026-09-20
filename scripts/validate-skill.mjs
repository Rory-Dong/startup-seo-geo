#!/usr/bin/env node

import fs from 'node:fs/promises';
import { statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const markdownFiles = [];

async function walk(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await walk(file);
    else if (entry.isFile() && file.endsWith('.md')) markdownFiles.push(file);
  }
}

function validateLinks(file, text) {
  const errors = [];
  const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;
  for (const match of text.matchAll(linkPattern)) {
    const target = match[1].trim().split('#')[0];
    if (!target || /^(?:https?:|mailto:|#)/i.test(target)) continue;
    const resolved = path.resolve(path.dirname(file), target);
    try {
      const stat = statSync(resolved);
      if (!stat.isFile() && !stat.isDirectory()) errors.push(`${path.relative(root, file)} -> ${target}`);
    } catch {
      errors.push(`${path.relative(root, file)} -> ${target}`);
    }
  }
  return errors;
}

await walk(root);
const errors = [];
for (const file of markdownFiles) {
  const text = await fs.readFile(file, 'utf8');
  if (/\p{Script=Han}/u.test(text)) errors.push(`${path.relative(root, file)} contains CJK characters`);
  errors.push(...validateLinks(file, text));
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Validated ${markdownFiles.length} Markdown files and their local links.`);
