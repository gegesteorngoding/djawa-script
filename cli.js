#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFile } from 'child_process';
import transpile from './transpiler.js';
import promptSync from 'prompt-sync';
import { fileURLToPath } from 'url';

// --- UTILITY FUNCTIONS ---

function showHelp() {
  console.log(`
Usage: djawa <command> [options]

Commands:
  run <file>         Transpile and run a .jawa file.
  build <file>       Transpile a .jawa file to a .js file.
  make <file>        Create a new .jawa file from a template.
  version, -v        Show the version of JawaScript.
  help, -h           Show this help message.

Examples:
  djawa run example.jawa
  djawa make myapp.jawa
  `);
}

function showVersion() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const packageJsonPath = path.join(__dirname, 'package.json');
  const { version } = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  console.log(`JawaScript v${version}`);
}

function makeFile(fileName) {
  if (!fileName) {
    console.error('Error: Please provide a file name.');
    console.log('Example: jawir make myapp.jawa');
    return;
  }

  // Normalize the file name to end with .jawa
  const baseName = path.basename(fileName, path.extname(fileName));
  const correctedFileName = baseName + '.jawa';

  if (fs.existsSync(correctedFileName)) {
    console.error(`Error: File '${correctedFileName}' already exists.`);
    return;
  }

  const template = `// Your first JawaScript file: ${correctedFileName}\n\n// Use 'cetakno' to print to the console\ncetakno("Halo Dunyo!");\n\n// Define a function with 'gawe'\ngawe sapa(jeneng) terus\n  cetakno("Sugeng rawuh, " tambah jeneng);\nmbari\n\n// Call the function\nsapa("Konco");\n`;

  fs.writeFileSync(correctedFileName, template);
  console.log(`Success: File '${correctedFileName}' created.`);
}

async function runFile(fileName) {
  if (!fs.existsSync(fileName)) {
    console.error(`Error: File not found at '${fileName}'`);
    process.exit(1);
  }
  
  const code = fs.readFileSync(fileName, 'utf8');
  const jsCode = transpile(code);

  // Make prompt available globally for the transpiled code
  global.prompt = promptSync();

  if (jsCode.includes('import') || jsCode.includes('export')) {
    const outputFileName = path.basename(fileName, '.jawa') + '.js';
    fs.writeFileSync(outputFileName, jsCode);

    const child = execFile('node', [outputFileName]);
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
    child.on('exit', () => {
        // Optional: Clean up the generated .js file
        // fs.unlinkSync(outputFileName);
    });
  } else {
    try {
      const encodedJsCode = encodeURIComponent(jsCode);
      await import(`data:text/javascript,${encodedJsCode}`);
    } catch (error) {
      console.error('An error occurred during execution:', error.message);
    }
  }
}

function buildFile(fileName) {
    if (!fs.existsSync(fileName)) {
        console.error(`Error: File not found at '${fileName}'`);
        process.exit(1);
    }

    const code = fs.readFileSync(fileName, 'utf8');
    const jsCode = transpile(code);
    const outputFileName = path.basename(fileName, '.jawa') + '.js';

    fs.writeFileSync(outputFileName, jsCode);
    console.log(`Success: Transpiled '${fileName}' to '${outputFileName}'.`);
}


// --- MAIN LOGIC ---

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case 'run':
    runFile(args[0]);
    break;
  
  case 'build':
    buildFile(args[0]);
    break;

  case 'make':
    makeFile(args[0]);
    break;

  case 'version':
  case '-v':
    showVersion();
    break;

  case 'help':
  case '-h':
  case undefined: // Show help if no command is given
    showHelp();
    break;

  default:
    console.error(`Error: Unknown command '${command}'.`);
    showHelp();
    break;
}
