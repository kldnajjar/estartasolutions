import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import RenderTable from "../RenderTable";
import { headCells } from "../../pages/Logger/configuration";
import { getData } from "../../services/logger";

test("should render Table component", async () => {
  const { data: result } = await getData();
  render(<RenderTable data={result} headCells={headCells} />);
  var ele = screen.getByTestId("table");
  expect(ele).toBeInTheDocument();
});
