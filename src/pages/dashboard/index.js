import React, { useState, useEffect } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FilterListIcon from "@mui/icons-material/FilterList";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";

import { getData } from "../../services/dashboard";
import RenderTable from "../../components/table";
import RenderTextField from "../../components/text";
import RenderSelectField from "../../components/select";
import RenderDateRangeField from "../../components/dateRange";

import { headCells } from "./configuration";

// import styles from "./Dashboard.module.css";

function Dashboard() {
  const [data, setData] = useState(null);
  const [employeeName, setEmployeeName] = React.useState("");
  const [actionType, setActionType] = React.useState("");
  const [applicationType, setApplicationType] = React.useState("");
  const [dateRange, setDateRange] = React.useState([null, null]);

  useEffect(() => {
    const fillData = async () => {
      const { data: result } = await getData();
      setData(result);
    };
    fillData();
  }, []);

  const filterHeader = () => {
    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          ...{
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.activatedOpacity
              ),
          },
        }}
      >
        {/* <Tooltip title="Filter list">
        <IconButton>
          <FilterListIcon />
        </IconButton>
      </Tooltip> */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <RenderTextField
            value={employeeName}
            handleChange={setEmployeeName}
            label="Employee Name"
          />
          <RenderSelectField
            value={actionType}
            handleChange={setActionType}
            label="Action Type"
            id="action-type-field"
            items={[
              { key: 1, value: "One" },
              { key: 2, value: "Two" },
            ]}
          />
          <RenderSelectField
            value={applicationType}
            handleChange={setApplicationType}
            label="Application Type"
            id="application-type-field"
            items={[
              { key: 3, value: "Three" },
              { key: 4, value: "Four" },
            ]}
          />
          <RenderDateRangeField
            value={dateRange}
            handleChange={setDateRange}
            label={{
              from: "From Date",
              to: "To Date",
            }}
          />
        </Box>
      </Toolbar>
    );
  };

  if (!data) return null;

  return (
    <div className="App">
      {filterHeader()}
      <RenderTable data={data} headCells={headCells} />
    </div>
  );
}

export default Dashboard;
