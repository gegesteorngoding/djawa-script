import dictionary from './dictionary.js';

// Helper function to escape special characters for use in a regex
function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\\]/g, '\\$&');
}

const boundaryKeywords = {};
const methodKeywords = {};

for (const key in dictionary) {
  if (key.startsWith('.')) {
    methodKeywords[key] = dictionary[key];
  } else {
    boundaryKeywords[key] = dictionary[key];
  }
}

const sortedBoundaryKeys = Object.keys(boundaryKeywords).sort((a, b) => b.length - a.length);
const boundaryRegex = new RegExp(`\\b(${sortedBoundaryKeys.map(escapeRegex).join('|')})\\b`, 'g');

const sortedMethodKeys = Object.keys(methodKeywords).sort((a, b) => b.length - a.length);
const methodRegex = new RegExp(sortedMethodKeys.map(escapeRegex).join('|'), 'g');

function transpile(code) {
  const literals = [];
  // 1. Isolate and process template literals first.
  let processedCode = code.replace(/`([\s\S]*?)`/g, (match, content) => {
    // For each `${...}` inside the template, transpile the expression.
    const transpiledContent = content.replace(/\${(.*?)}/g, (match, expression) => {
      // Recursively transpile the expression inside ${...}
      return `\${${transpile(expression)}}`;
    });
    literals.push(`\`${transpiledContent}\``);
    return `__TEMPLATE_LITERAL_${literals.length - 1}__`;
  });

  // 2. Transpile the rest of the code.
  let resultCode = processedCode.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');

  resultCode = resultCode.replace(/(\\w+)\\+\\+/g, '$1 yoiku $1 tambah 1');
  resultCode = resultCode.replace(/(\\w+)\\-\\-/g, '$1 yoiku $1 kurang 1');

  // Handle Optional Chaining: .mungkin.
  resultCode = resultCode.replace(/\\.mungkin\\./g, '?.');

  // Handle Ternary Operator: ... ta ... lek gak ...
  resultCode = resultCode.replace(/\\s+ta\\s+/g, ' ? ');
  resultCode = resultCode.replace(/\\s+lek gak\\s+/g, ' : ');

  // Handle `for...in` loop
  const forInRegex = /(kanggo)\s+\((iki iku|jarno)\s+(\w+)\s+ing\s+([\w.]+)\)\s+terus([\s\S]*?)mbari/g;
  resultCode = resultCode.replace(forInRegex, (match, loopKeyword, varKeyword, keyVar, objectVar, body) => {
    return `for (${varKeyword} ${keyVar} in ${objectVar}) {${body}}`;
  });

  // Handle `for...of` loop
  const forOfRegex = /(kanggo)\s+\((iki iku|jarno)\s+(\w+)\s+soko\s+([\w.]+)\)\s+terus([\s\S]*?)mbari/g;
  resultCode = resultCode.replace(forOfRegex, (match, loopKeyword, varKeyword, itemVar, iterableVar, body) => {
    return `for (${varKeyword} ${itemVar} of ${iterableVar}) {${body}}`;
  });

  // Handle Type Annotations for variables
  resultCode = resultCode.replace(/\\b(iki iku|jarno)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (match, keyword, varName, type) => {
    return `${keyword} ${varName}: ${type}`;
  });

  // Handle `gawe` functions with type annotations
  const gaweFunctionRegex = /(gawe)\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\((.*?)\\)\\s*(:\\s*([a-zA-Z_][a-zA-Z0-9_]*))?\\s*terus([\\s\\S]*?)mbari/g;
  resultCode = resultCode.replace(gaweFunctionRegex, (match, gaweKeyword, funcName, paramsContent, returnTypeGroup, returnType, body) => {
    // Process parameters for types
    const processedParams = paramsContent.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (pMatch, pName, pType) => {
      return `${pName}: ${pType}`;
    });
    const finalReturnType = returnType ? ': ' + returnType : '';
    const actualFuncName = (funcName === 'tambah') ? '__FUNC_TAMBAH__' : funcName;
    return `function ${actualFuncName}(${processedParams})${finalReturnType} {${body}}`;
  });

  // Handle Arrow Functions with type annotations
  // Version with block body: (params) lakoni terus ... mbari
  const arrowBlockRegex = /(?:(\\w+)|(\\(.*?\\)))\\s*(:\\s*([a-zA-Z_][a-zA-Z0-9_]*))?\\s+lakoni\\s*terus([\\s\\S]*?)mbari/g;
  resultCode = resultCode.replace(arrowBlockRegex, (match, param, paramsGroup, returnTypeGroup, returnType, body) => {
    let finalParams = paramsGroup || param;
    if (paramsGroup) { // If it's a parenthesized list, process parameters for types
      finalParams = paramsGroup.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (pMatch, pName, pType) => {
        return `${pName}: ${pType}`;
      });
    }
    const finalReturnType = returnType ? ': ' + returnType : '';
    return `${finalParams}${finalReturnType} => {${body}}`;
  });

  // Version with implicit return: (params) lakoni expression
  const arrowImplicitRegex = /(?:(\\w+)|(\\(.*?\\)))\\s*(:\\s*([a-zA-Z_][a-zA-Z0-9_]*))?\\s+lakoni\\s+([^;\\n]*)/g;
  resultCode = resultCode.replace(arrowImplicitRegex, (match, param, paramsGroup, returnTypeGroup, returnType, expression) => {
    let finalParams = paramsGroup || param;
    if (paramsGroup) { // If it's a parenthesized list, process parameters for types
      finalParams = paramsGroup.replace(/([a-zA-Z_][a-zA-Z0-9_]*)\\s*:\\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (pMatch, pName, pType) => {
        return `${pName}: ${pType}`;
      });
    }
    const finalReturnType = returnType ? ': ' + returnType : '';
    return `${finalParams}${finalReturnType} => ${expression.trim()}`;
  });

  // Handle `iku ilang` and `iku ono`
  const onoIlangRegex = /\b([\w\.]+)\s+iku\s+(ilang|ono)\b/g;
  resultCode = resultCode.replace(onoIlangRegex, (match, variable, keyword) => {
    if (keyword === 'ilang') {
      return `${variable} == null`;
    } else { // keyword === 'ono'
      return `${variable} != null`;
    }
  });

  // Handle Destructuring
  const destructuringObjectRegex = /(iki iku|jarno)\s+\{([\s\S]*?)\}\s+yoiku/g;
  resultCode = resultCode.replace(destructuringObjectRegex, (match, keyword, content) => {
    // Process renaming within destructuring: { a dadi b } -> { a: b }
    const processedContent = content.replace(/(\w+)\s+dadi\s+(\w+)/g, '$1: $2');
    return `${keyword} {${processedContent}} =`;
  });

  const destructuringArrayRegex = /(iki iku|jarno)\s+\[([\s\S]*?)\]\s+yoiku/g;
  resultCode = resultCode.replace(destructuringArrayRegex, (match, keyword, content) => {
    return `${keyword} [${content}] =`;
  });

  // Handle Type Annotations for variables and function parameters/return types
  // This needs to run before general keyword replacement to correctly identify types
  resultCode = resultCode.replace(/\b(iki iku|jarno)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*:\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (match, keyword, varName, type) => {
    return `${keyword} ${varName}: ${type}`;
  });

  // Handle function return types
  resultCode = resultCode.replace(/(gawe\s+[a-zA-Z_][a-zA-Z0-9_]*\s*\(.*?\))\s*:\s*([a-zA-Z_][a-zA-Z0-9_]*)/g, (match, funcSignature, returnType) => {
    return `${funcSignature}: ${returnType}`;
  });

  const extendsRegex = /\bkelas\s+(\w+)\s+turunan soko\s+(\w+)\s*terus([\s\S]*?)mbari/g;
  resultCode = resultCode.replace(extendsRegex, (match, className, parentName, body) => {
    let processedBody = body.replace(/\bwujudno\b/g, 'constructor').replace(/\binduk\b/g, 'super');
    return `class ${className} extends ${parentName} { ${processedBody} }`;
  });

  const classRegex = /\bkelas\s+(\w+)\s*terus([\s\S]*)mbari/g;
  resultCode = resultCode.replace(classRegex, (match, className, body) => {
    let processedBody = body.replace(/\bwujudno\b/g, 'constructor');
    return `class ${className} { ${processedBody} }`;
  });

  const importRegex = /\bjupukno\s+(.*?)\s+soko\s+(.*)/g;
  resultCode = resultCode.replace(importRegex, (match, imports, path) => {
    let processedImports = imports.replace(/\bbiasane\b/g, '').replace(/\bdadi\b/g, 'as');
    return `import ${processedImports.trim()} from ${path}`;
  });

  const exportDefaultRegex = /\bmetokno\s+biasane\s+(.*)/g;
  resultCode = resultCode.replace(exportDefaultRegex, 'export default $1');

  const exportNamedRegex = /\bmetokno\s+(\{.*\})/g;
  resultCode = resultCode.replace(exportNamedRegex, 'export $1');

  // Handle `export * as name from 'module'`
  const exportWildcardRegex = /\bmetokno\s+kabeh\s+dadi\s+(\w+)\s+soko\s+(.*)/g;
  resultCode = resultCode.replace(exportWildcardRegex, 'export * as $1 from $2');

  const switchRegex = /pilih\s*\((.*?)\)\s*terus\s*([\s\S]*)mbari/g;
  resultCode = resultCode.replace(switchRegex, (match, variable, body) => {
    let processedBody = body.replace(/kalo\s*(.*?):/g, 'case $1:').replace(/yowes:/g, 'default:');
    return `switch (${variable}) {\n${processedBody}\n}`;
  });

  resultCode = resultCode.replace(/\btuple\((.*?)\)/g, (match, content) => {
    return `Object.freeze([${content}])`;
  });

  const terusCount = (resultCode.match(/\bterus\b/g) || []).length;
  const mbariCount = (resultCode.match(/\bmbari\b/g) || []).length;

  if (terusCount !== mbariCount) {
    throw new Error('your code is not being closed correctly');
  }

  // First, replace all method calls
  resultCode = resultCode.replace(methodRegex, match => methodKeywords[match]);
  
  // Then, replace all boundary-based keywords
  resultCode = resultCode.replace(boundaryRegex, match => boundaryKeywords[match]);

  // Restore specific function names that were temporarily replaced
  resultCode = resultCode.replace(/__FUNC_TAMBAH__/g, 'tambah');

  // 3. Restore the processed template literals
  resultCode = resultCode.replace(/__TEMPLATE_LITERAL_(\d+)__/g, (match, index) => literals[index]);

  return resultCode;
}

export default transpile;
