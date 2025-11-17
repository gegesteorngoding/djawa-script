#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execFile, spawn } from 'child_process'; // Import spawn for Electron
import transpile from './transpiler.js';
import { lint } from './linter.js'; // Impor fungsi lint
import promptSync from 'prompt-sync';
import { fileURLToPath } from 'url';

// --- UTILITY FUNCTIONS ---

function showHelp() {
  console.log(`
Usage: djawa <command> [options]

Commands:
  run <file>         Transpile and run a .jawa file. If a graphics file, it opens in Kurokuro.
  build <file>       Transpile a .jawa file to a .js file.
  lint <file>        Analyze a .jawa file for potential issues.
  make <file>        Create a new .jawa file from a template.
  version, -v        Show the version of JawaScript.
  help, -h           Show this help message.

Options for build:
  --output <path>    Specify the output file path for the transpiled .js.

Examples:
  djawa run example.jawa
  djawa build myapp.jawa --output dist/myapp.js
  djawa lint myapp.jawa
  djawa make myapp.jawa
  
// Im a new soul, I came to this strange world ~
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
    console.log('Example: djawa make myapp.jawa');
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
  
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const projectRoot = path.resolve(__dirname, '..'); // Assuming djawa-script is in project root
  const kurokuroDir = path.join(projectRoot, 'kurokuro');
  const tempScriptPath = path.join(kurokuroDir, 'temp_script.js');
  const absoluteJawaFilePath = path.resolve(fileName);

  // Transpile the .jawa file to temp_script.js in the kurokuro directory
  buildFile(fileName, tempScriptPath);

  // Set environment variable for Electron to know which .jawa file to watch
  process.env.KUROKURO_JAWA_FILE = absoluteJawaFilePath;

  const electronExecutablePath = path.join(kurokuroDir, 'node_modules', '.bin', 'electron');

  console.log(`Launching Kurokuro for ${fileName}...`);
  // Launch Electron from the kurokuro directory
  const electronProcess = spawn(electronExecutablePath, ['.'], {
    cwd: kurokuroDir,
    detached: true, // Detach the child process
    stdio: 'ignore', // Ignore stdio to fully decouple
    env: { ...process.env, KUROKURO_JAWA_FILE: absoluteJawaFilePath } // Pass env var explicitly
  });
  electronProcess.unref(); // Allow the parent process to exit independently

  console.log(`Kurokuro app launched. You can close this terminal or continue working.`);
  console.log(`To stop the Kurokuro app, close its window manually.`);
}

function buildFile(fileName, outputPath = null) {
    if (!fs.existsSync(fileName)) {
        console.error(`Error: File not found at '${fileName}'`);
        process.exit(1);
    }

    const code = fs.readFileSync(fileName, 'utf8');
    const jsCode = transpile(code);
    const outputFileName = outputPath || (path.basename(fileName, '.jawa') + '.js');

    fs.writeFileSync(outputFileName, jsCode);
    console.log(`Success: Transpiled '${fileName}' to '${outputFileName}'.`);
}

function lintFile(fileName) {
  if (!fileName) {
    console.error('Error: Please provide a file to lint.');
    console.log('Example: djawa lint myapp.jawa');
    return;
  }
  if (!fs.existsSync(fileName)) {
    console.error(`Error: File not found at '${fileName}'`);
    process.exit(1);
  }

  console.log(`Analyzing '${fileName}'...`);

  const code = fs.readFileSync(fileName, 'utf8');
  const warnings = lint(code);

  if (warnings.length === 0) {
    console.log('✅ No issues found.');
  } else {
    console.log(`\nFound ${warnings.length} issue(s):`);
    warnings.forEach(warning => {
      console.log(`  - ${fileName}:${warning.line}:${warning.column} - ${warning.message}`);
    });
  }
}


// --- MAIN LOGIC ---

const args = process.argv.slice(2);
let command = args[0];
let fileName = args[1];
let outputPath = null;

// Parse options for build command
if (command === 'build') {
  for (let i = 2; i < args.length; i++) {
    if (args[i] === '--output' && args[i + 1]) {
      outputPath = args[i + 1];
      i++; // Skip next arg as it's the output path
    }
  }
}


switch (command) {
  case 'run':
    runFile(fileName);
    break;
  
  case 'build':
    buildFile(fileName, outputPath);
    break;

  case 'lint':
    lintFile(fileName);
    break;

  case 'make':
    makeFile(fileName);
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
