import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderButton from "../Button";

test("should render Button component", () => {
  render(<RenderButton handleClick={() => {}} label="" />);
  var ele = screen.getByTestId("button");
  expect(ele).toBeInTheDocument();
});
