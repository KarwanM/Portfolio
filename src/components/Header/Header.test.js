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
    const divElement = screen.getByText(/KI Portfolio/i);
    expect(divElement).toBeInTheDocument();
  });
});
