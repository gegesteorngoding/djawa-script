import fs from 'fs';
import path from 'path';
import transpile from '../transpiler.js';

// The directory containing our .jawa test files
const featuresDir = path.join(path.dirname(new URL(import.meta.url).pathname), 'features');

// Get all .jawa files from the features directory
const jawaTestFiles = fs.readdirSync(featuresDir).filter(file => file.endsWith('.jawa'));

describe('JawaScript Transpiler Snapshot Tests', () => {
  jawaTestFiles.forEach(file => {
    test(`should correctly transpile ${file}`, () => {
      const filePath = path.join(featuresDir, file);
      const jawaCode = fs.readFileSync(filePath, 'utf8');
      const jsCode = transpile(jawaCode);
      
      // Compare the output to the stored snapshot
      expect(jsCode).toMatchSnapshot();
    });
  });
});
