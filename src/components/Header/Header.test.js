import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const MokeHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("Should Render Header correctly", () => {
  it("Should render left nav element", () => {
    render(<MokeHeader />);
    const leftNavElement = screen.getByText(/KI Portfolio/i);
    expect(leftNavElement).toBeInTheDocument();
  });
  it("Should render right nav element", () => {
    render(<MokeHeader />);
    const rightNavElement = screen.getByText(/Home/i);
    expect(rightNavElement).toBeInTheDocument();
  });
});
