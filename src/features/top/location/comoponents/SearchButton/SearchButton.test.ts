import { render, screen } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe("SearchButton Component Test", () => {
  test("検索ボタン 存在確認", () => {
    render(SearchButton());
    const inputElement = screen.getByRole("searchBtn");
    expect(inputElement).toBeInTheDocument();
  });

  test("input要素 type属性 確認", () => {
    render(SearchButton());
    const inputElement = screen.getByRole("searchBtn");
    expect(inputElement).toHaveAttribute("type", "submit");
  });
});
