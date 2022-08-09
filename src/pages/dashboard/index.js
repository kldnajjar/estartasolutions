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
  const [employeeName, setEmployeeName] = useState("");
  const [applicationID, setApplicationID] = useState("");
  const [actionType, setActionType] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [fromDateRange, setFromDateRange] = useState("");
  const [toDateRange, setToDateRange] = useState("");

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
            "& > :not(style)": { m: 1, width: "12rem" },
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
              { key: "DARI_REFRESH_TOKEN", value: "DARI_REFRESH_TOKEN" },
              { key: "DARI_APP_LOGIN", value: "DARI_APP_LOGIN" },
              { key: "INITIATE_APPLICATION", value: "INITIATE_APPLICATION" },
              { key: "SUBMIT_APPLICATION", value: "SUBMIT_APPLICATION" },
              { key: "ADD_EMPLOYEE", value: "ADD_EMPLOYEE" },
            ]}
          />
          <RenderSelectField
            value={applicationType}
            handleChange={setApplicationType}
            label="Application Type"
            id="application-type-field"
            items={[
              { key: "ADD_COMPANY_EMPLOYEE", value: "ADD_COMPANY_EMPLOYEE" },
              { key: "CERT_TITLE_DEED_PLOT", value: "CERT_TITLE_DEED_PLOT" },
              { key: "LEASE_REGISTRATION", value: "LEASE_REGISTRATION" },
              { key: "ADD_POA", value: "ADD_POA" },
              { key: "CERT_TITLE_DEED_PLOT", value: "CERT_TITLE_DEED_PLOT" },
              { key: "ADD_COMPANY", value: "ADD_COMPANY" },
              { key: "CERT_PROP_OWNERSHIP", value: "CERT_PROP_OWNERSHIP" },
              { key: "LEASE_CLOSURE", value: "LEASE_CLOSURE" },
              { key: "three", value: "Three" },
            ]}
          />
          <RenderDateRangeField
            startDate={fromDateRange}
            endDate={toDateRange}
            handleStartChange={setFromDateRange}
            handleEndChange={setToDateRange}
            label={{
              from: "From Date",
              to: "To Date",
            }}
          />
          <RenderTextField
            value={applicationID}
            handleChange={setApplicationID}
            label="Application ID"
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
