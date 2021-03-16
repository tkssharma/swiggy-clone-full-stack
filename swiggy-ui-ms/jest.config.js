module.exports = {
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testPathIgnorePatterns: ['<rootDir>/dist', '<rootDir>/out', '<rootDir>/build'],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/reports/coverage',
  collectCoverageFrom: [
    'src/**/*.js',
    'src/**/*.jsx',
    '!**/*.mock.js',
    '!**/*.styles.js',
    '!**styles/**/*.js',
    '!**/node_modules/**',
    '!**/test-utils/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['lcov', 'json', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 8,
      functions: 15,
      lines: 20,
      statements: 20,
    },
  },
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
};
