import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.weatherapi.com"]
  },
  /* config options here */
  eslint: {
    // ビルド時にESLintを実行する対象ディレクトリ
    dirs: ["app", "components", "hooks", "lib"],
    // ESLintのエラーがある場合、ビルドを失敗させる（これが重要な設定）
    ignoreDuringBuilds: false
  }
};

export default nextConfig;
