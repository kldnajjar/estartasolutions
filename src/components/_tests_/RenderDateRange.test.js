import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RenderDateRangeField from "../RenderDateRange";

test("should render Range DatePicker component", () => {
  render(
    <RenderDateRangeField
      startDate={""}
      endDate={""}
      handleStartChange={() => {}}
      handleEndChange={() => {}}
      label={{
        from: "",
        to: "",
      }}
    />
  );
  var ele = screen.getByTestId("datepicker-range");
  expect(ele).toBeInTheDocument();
});
