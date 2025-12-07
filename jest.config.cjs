// jest.config.cjs
// @ts-check
/** @type {import('@jest/types').Config.InitialOptions} */
const jestConfig = {
  displayName: 'pkg-value-object',
  clearMocks: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/src/models/**',
    '!**/src/constants/**',
    '!**/src/config/**',
    '!**/src/structures/**',
    '!**/src/quality/**',
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageProvider: 'v8',
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/test/setup/jest.setup.js'],
};

module.exports = jestConfig;

