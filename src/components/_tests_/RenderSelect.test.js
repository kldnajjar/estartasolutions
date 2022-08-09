import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderSelectField from "../RenderSelect";

test("should render Select component", () => {
  render(
    <RenderSelectField
      value={""}
      handleChange={() => {}}
      label=""
      id=""
      items={[]}
    />
  );
  var ele = screen.getByTestId("select");
  expect(ele).toBeInTheDocument();
});
