import { render, screen } from "@testing-library/react";
import Logo from './index';

describe("When the logo div is created", () => {
  it("should contain an svg logo", () => {
    render(<Logo />);
    const svgElement = screen.getByTestId("logo");
    expect(svgElement).toBeInTheDocument();
  })
})