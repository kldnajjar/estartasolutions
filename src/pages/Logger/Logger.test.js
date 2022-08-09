import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logger from "./index";

test("should render Logger component", () => {
  render(<Logger />);
  var ele = screen.getByTestId("logger");
  expect(ele).toBeInTheDocument();
});
