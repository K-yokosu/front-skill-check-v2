// components/__tests__/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/Button";

describe("Button Component", () => {
  test("ボタンが正しくレンダリングされる", () => {
    render(<Button label="テストボタン" />);

    const buttonElement = screen.getByText("テストボタン");
    expect(buttonElement).toBeInTheDocument();
  });

  test("クリックイベントが正しく発火する", () => {
    const handleClick = jest.fn();
    render(<Button label="クリックテスト" onClick={handleClick} />);

    const buttonElement = screen.getByText("クリックテスト");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
