import transpile from './transpiler.js';
import { parse } from '@babel/parser';
import * as babelTraverse from '@babel/traverse';

/**
 * Analyzes DjawaScript code and returns a list of warnings.
 * @param {string} djawaCode Source code in DjawaScript.
 * @returns {Array<{line: number, column: number, message: string}>} List of warning objects.
 */
export function lint(djawaCode) {
  const warnings = [];
  let jsCode;
  let ast;

  try {
    // Step 1: Transpile DjawaScript to JavaScript
    jsCode = transpile(djawaCode);
  } catch (e) {
    // If transpiler fails, return the error as a warning
    warnings.push({ line: 1, column: 0, message: `Transpilation failed: ${e.message}` });
    return warnings;
  }

  try {
    // Step 2: Parse the JavaScript code into an AST
    ast = parse(jsCode, { sourceType: 'module', errorRecovery: true });
  } catch (e) {
    // If parser fails, this might be a bug in the transpiler or the parser itself
    warnings.push({ line: 1, column: 0, message: `Failed to parse JS code: ${e.message}` });
    return warnings;
  }

  // Step 3: Traverse the AST to find unused variables
  const traverse = babelTraverse.default.default;
  traverse(ast, {
    // We will visit each scope (global, function, block)
    Scope(path) {
      // `path.scope.bindings` contains all declarations within this scope
      for (const name in path.scope.bindings) {
        const binding = path.scope.bindings[name];

        // We care about 'let' (jarno) and 'const' (iki iku) variables
        // Function parameters will be ignored for now.
        if (binding.kind !== 'let' && binding.kind !== 'const') {
          continue;
        }

        // Check if the variable has been referenced/used
        if (!binding.referenced) {
          const keyword = binding.kind === 'let' ? 'jarno' : 'iki iku';
          warnings.push({
            line: binding.identifier.loc.start.line,
            column: binding.identifier.loc.start.column,
            message: `Variable '${name}' declared with '${keyword}' but never used.`,
          });
        }
      }
    }
  });

  return warnings;
}
