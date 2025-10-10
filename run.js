#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import transpile from './transpiler.js';
import promptSync from 'prompt-sync';

const prompt = promptSync(); // For input in node.js

// Make prompt available globally for the transpiled code
global.prompt = prompt;

const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a .jawa file to run!');
  console.log('Example: jawir example.jawa');
  process.exit(1);
}

fs.readFile(fileName, 'utf8', async (err, code) => {
  if (err) {
    console.error(`Failed to read file: ${fileName}`);
    return;
  }

  const jsCode = transpile(code);

  // Conditional logic based on module usage
  if (jsCode.includes('import') || jsCode.includes('export')) {
    // --- Serious User: Save file and execute ---
    const outputFileName = path.basename(fileName, '.jawa') + '.js';
    fs.writeFileSync(outputFileName, jsCode);

    const child = exec(`node ${outputFileName}`);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

  } else {
    // --- Casual User: Execute in memory ---
    try {
      const encodedJsCode = encodeURIComponent(jsCode);
      await import(`data:text/javascript,${encodedJsCode}`);
    } catch (error) {
      console.error('An error occurred during execution:', error.message);
    }
  }
});
