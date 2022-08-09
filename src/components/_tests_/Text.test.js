import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderTextField from "../Text";

test("should render Text component", () => {
  render(<RenderTextField value="" handleChange={() => {}} label="" />);
  var ele = screen.getByTestId("text");
  expect(ele).toBeInTheDocument();
});
