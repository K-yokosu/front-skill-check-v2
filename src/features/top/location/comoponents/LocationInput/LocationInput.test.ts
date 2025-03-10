import { render, screen } from "@testing-library/react";
import LocationInput from "./LocationInput";

describe("LocationInput Component Test", () => {
  test("input要素 存在確認", () => {
    render(LocationInput());
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toBeInTheDocument();
  });

  test("input要素 type属性 確認", () => {
    render(LocationInput());
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toHaveAttribute("type", "text");
  });

  test("input要素 placeholder 確認", () => {
    render(LocationInput());
    const inputElement = screen.getByRole("locationInput");
    expect(inputElement).toHaveAttribute("placeholder", "地名 or 緯度経度(35, 139)を入力して下さい");
  });
});
