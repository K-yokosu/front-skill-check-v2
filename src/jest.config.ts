import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // next.config.jsとテスト環境用の.envファイルが配置されたディレクトリへのパス
  dir: "./"
});

// Jestのカスタム設定
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // aliasの設定（必要に応じて調整）
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1"
  },
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"]
};

// createJestConfigを使用することによって、next/jestが提供する設定とマージして最終的なJest設定を作成
module.exports = createJestConfig(customJestConfig);
