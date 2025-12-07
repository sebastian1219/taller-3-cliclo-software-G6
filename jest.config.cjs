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
    '!**/src/quality/**', // excluye módulos inseguros/dummy
  ],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  coverageReporters: ['lcov', 'text', 'json-summary'],
  coverageDirectory: 'coverage',
  setupFiles: ['<rootDir>/test/setup/jest.setup.js'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
};

module.exports = jestConfig;

