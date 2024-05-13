import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Should Render Header correctly", () => {
  it("Should render left nav element", () => {
    render(<Header />);
    const divElement = screen.getByText(/KI Portfolio/i);
    expect(divElement).toBeInTheDocument();
  });
});
