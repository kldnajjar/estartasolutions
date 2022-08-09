import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RenderTable from "../Table";
import { headCells } from "../../pages/Dashboard/configuration";
import { getData } from "../../services/dashboard";

test("should render Table component", async () => {
  const { data: result } = await getData();
  render(<RenderTable data={result} headCells={headCells} />);
  var ele = screen.getByTestId("table");
  expect(ele).toBeInTheDocument();
});
