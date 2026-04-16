import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Task App heading", () => {
  render(<App />);
  const heading = screen.getByText(/Task App/i);
  expect(heading).toBeInTheDocument();
});