import { render, screen } from "@testing-library/react";
import LocationInput from "./LocationInput";

describe("LocationInput Component Test", () => {
  // テスト共通のセットアップ
  beforeEach(() => {
    render(<LocationInput q="test" />);
  });

  test("input要素 存在 確認", () => {
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toBeInTheDocument();
  });

  test("input要素 type属性 確認", () => {
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("input要素 placeholder 確認", () => {
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toHaveAttribute("placeholder", "地名 or 緯度経度(35, 139)を入力して下さい");
  });

  test("input要素 value 確認", () => {
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toHaveAttribute("value", "test");
  });
});

describe("LocationInput Component Test Empty Value", () => {
  // テスト共通のセットアップ
  beforeEach(() => {
    render(<LocationInput q="" />);
  });

  test("input要素 value 確認", () => {
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toHaveAttribute("value", "");
  });
});
