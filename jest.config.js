const tsconfig = require('./tsconfig.json')

module.exports = {
  globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },

  preset: 'ts-jest',
  testEnvironment: 'node',

  // tsconfigでいうbaseDir https://github.com/facebook/jest/issues/2144
  modulePaths: ['<rootDir>/src/'],
  // tsconfigのpathsを参照する
  moduleNameMapper: {
    '@shared/(.*)': '<rootDir>/../shared/$1'
  },
  // distは無視
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/dist/']
}
