import { render, screen } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe("SearchButton Component Test", () => {
  // テスト共通のセットアップ
  beforeEach(() => {
    render(<SearchButton q="test" />);
  });

  test("検索ボタン 存在確認", () => {
    const inputElement = screen.getByRole("searchBtn");
    expect(inputElement).toBeInTheDocument();
  });

  test("button要素 type属性 確認", () => {
    const inputElement = screen.getByRole("searchBtn");
    expect(inputElement).toHaveAttribute("type", "button");
  });

  test("検索 href 確認", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "?q=test");
  });
});

describe("SearchButton Component Test Empty Parameter", () => {
  // テスト共通のセットアップ
  beforeEach(() => {
    render(<SearchButton q="" />);
  });

  test("検索 href 確認", () => {
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/");
  });
});
