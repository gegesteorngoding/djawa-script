#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import os from 'os'; // Import the 'os' module
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

async function runNodeFile(fileName, code) {
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

async function runKurokuroFile(fileName) {
  const absoluteJawaFilePath = path.resolve(fileName);
  const projectDir = process.cwd();
  let runnerDir;
  
  // --- Smart Runner-Path Detection ---
  // 1. Check for local install (end-user case)
  const localRunnerPath = path.join(projectDir, 'node_modules', '@jawirhytam', 'kurokuro');
  
  // 2. Check if CWD is the kurokuro project itself (developer case)
  const cwdPackageJsonPath = path.join(projectDir, 'package.json');
  let isCwdKurokuro = false;
  if (fs.existsSync(cwdPackageJsonPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(cwdPackageJsonPath, 'utf8'));
      if (pkg.name === '@jawirhytam/kurokuro') {
        isCwdKurokuro = true;
      }
    } catch (e) { /* ignore parse errors */ }
  }

  if (fs.existsSync(localRunnerPath)) {
    runnerDir = localRunnerPath;
    console.log('Kurokuro runner found in node_modules.');
  } else if (isCwdKurokuro) {
    runnerDir = projectDir;
    console.log('Running in Kurokuro development mode.');
  } else {
    console.error("\n❌ Error: Kurokuro runner not found.");
    console.error("This script requires the Kurokuro graphics library.");
    console.error("Please install it in your project by running:");
    console.error("\n  npm install @jawirhytam/kurokuro\n");
    process.exit(1);
  }
  
  const electronExecutablePath = path.join(runnerDir, 'node_modules', '.bin', 'electron');

  if (!fs.existsSync(electronExecutablePath)) {
     console.error(`\n❌ Error: Electron executable not found in the Kurokuro runner directory.`);
     console.error(`Please ensure Kurokuro's dependencies are installed: cd ${runnerDir} && npm install`);
     process.exit(1);
  }

  // Transpile to a temporary file, read its content, then delete it.
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'djawa-'));
  const tempScriptPath = path.join(tempDir, 'temp_script.js');
  let scriptContent = '';
  try {
    buildFile(absoluteJawaFilePath, tempScriptPath);
    scriptContent = fs.readFileSync(tempScriptPath, 'utf8');
  } finally {
    fs.rmSync(tempDir, { recursive: true, force: true });
  }

  if (!scriptContent) {
    console.error('Error: Failed to read transpiled script content.');
    process.exit(1);
  }

  // Launch Electron with the script content in an environment variable
  console.log(`Launching Kurokuro for ${fileName}...`);
  const electronProcess = spawn(electronExecutablePath, ['.'], {
    cwd: runnerDir,
    detached: true, // Re-enable detached mode
    stdio: 'ignore', // Re-enable ignore stdio
    env: {
      ...process.env,
      KUROKURO_SCRIPT_CONTENT: scriptContent
    }
  });
  electronProcess.unref();

  console.log(`Kurokuro app launched. You can close this terminal or continue working.`);
  console.log(`To stop the Kurokuro app, close its window manually.`);
}

async function runFile(fileName) {
  const absoluteJawaFilePath = path.resolve(fileName);
  if (!fs.existsSync(absoluteJawaFilePath)) {
    console.error(`Error: File not found at '${absoluteJawaFilePath}'`);
    process.exit(1);
  }

  const fileContent = fs.readFileSync(absoluteJawaFilePath, 'utf8');

  // Check for the Kurokuro directive
  if (fileContent.trim().startsWith('// @kurokuro: pake')) {
    runKurokuroFile(fileName);
  } else {
    runNodeFile(fileName, fileContent);
  }
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
