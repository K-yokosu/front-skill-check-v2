import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Header Component Test", () => {
  // テスト共通のセットアップ
  beforeEach(() => {
    render(<Header />);
  });

  test("アプリ名表記 確認", () => {
    const headerElement = screen.getByText(/Teck Challenge/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("role:banner 存在 確認", () => {
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("ロゴリンク 存在 確認", () => {
    const logoLink = screen.getByRole("logoLink");
    expect(logoLink).toBeInTheDocument();
  });

  test("ロゴリンク href 確認", () => {
    const logoLink = screen.getByRole("logoLink");
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
