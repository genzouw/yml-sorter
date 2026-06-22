// ESLint flat configuration.
//
// This project targets modern Node.js (see "engines.node" in package.json),
// so it intentionally uses contemporary JavaScript (const/let, arrow
// functions, async/await, dynamic import for the ESM-only yargs dependency).
//
// Providing this configuration makes Codacy analyze the code with these
// sensible patterns instead of its default, ES5-targeted ruleset (which
// otherwise reports "ES2015 ... are forbidden" style false positives that are
// incompatible with an ESM-only dependency such as yargs v18).
//
// NOTE: For Codacy to honor this file, enable "Use configuration file" for the
// ESLint tool on the repository's Code patterns settings page.

const nodeGlobals = {
  process: 'readonly',
  console: 'readonly',
  require: 'readonly',
  module: 'writable',
  exports: 'writable',
  __dirname: 'readonly',
  __filename: 'readonly',
  Buffer: 'readonly',
  setTimeout: 'readonly',
  clearTimeout: 'readonly',
  setInterval: 'readonly',
  clearInterval: 'readonly',
};

const jestGlobals = {
  describe: 'readonly',
  test: 'readonly',
  it: 'readonly',
  expect: 'readonly',
  beforeEach: 'readonly',
  afterEach: 'readonly',
  beforeAll: 'readonly',
  afterAll: 'readonly',
};

const commonRules = {
  'no-unused-vars': 'warn',
  'no-undef': 'error',
  'no-var': 'error',
  'prefer-const': 'warn',
  eqeqeq: 'warn',
};

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      globals: { ...nodeGlobals },
    },
    rules: { ...commonRules },
  },
  {
    files: ['**/*.test.js'],
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'commonjs',
      globals: { ...nodeGlobals, ...jestGlobals },
    },
    rules: { ...commonRules },
  },
];
