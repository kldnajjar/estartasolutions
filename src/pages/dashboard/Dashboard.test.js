import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "./index";

test("should render Dashboard component", () => {
  render(<Dashboard />);
  var ele = screen.getByTestId("dashboard");
  expect(ele).toBeInTheDocument();
});
