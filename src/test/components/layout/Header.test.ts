import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/Header";

describe("Header Component Test", () => {
  test("アプリ名表記正常", () => {
    render(Header());
    const headerElement = screen.getByText(/Teck Challenge/i);
    expect(headerElement).toBeInTheDocument();
  });

  test("role:banner を含んているか", () => {
    render(Header());
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("ナビゲーションリンクが存在するか", () => {
    render(Header());
    const navLinks = screen.getAllByRole("link");
    expect(navLinks.length).toBeGreaterThan(0);
  });
});
