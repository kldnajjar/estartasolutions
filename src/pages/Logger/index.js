import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import { alpha } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

import { formatDate } from "../../util/date";
import { getData } from "../../services/logger";
import RenderTable from "../../components/RenderTable";
import RenderTextField from "../../components/RenderText";
import RenderSelectField from "../../components/RenderSelect";
import RenderDateRangeField from "../../components/RenderDateRange";
import RenderButton from "../../components/RenderButton";
import { headCells } from "./configuration";

import styles from "./Logger.module.css";

function Logger() {
  const [data, setData] = useState(null);
  const [filteredData, setfilteredData] = useState(null);
  const [employeeName, setEmployeeName] = useState("");
  const [applicationId, setapplicationId] = useState("");
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

  const searchLogger = async () => {
    let param = "";
    const obj = {};

    // if (employeeName) {
    //   param += `employeeName=${employeeName}`;
    //   obj["employeeName"]=employeeName;
    // }
    if (applicationId) {
      param += `${param ? "&" : ""}applicationId=${applicationId}`;
      obj["applicationId"] = applicationId;
    }
    if (actionType) {
      param += `${param ? "&" : ""}actionType=${actionType}`;
      obj["actionType"] = actionType;
    }
    if (applicationType) {
      param += `${param ? "&" : ""}applicationType=${applicationType}`;
      obj["applicationType"] = applicationType;
    }
    if (fromDateRange) {
      param += `${param ? "&" : ""}fromDateRange=${formatDate(fromDateRange)}`;
      obj["fromDateRange"] = fromDateRange;
    }
    if (toDateRange) {
      param += `${param ? "&" : ""}toDateRange=${formatDate(toDateRange)}`;
      obj["toDateRange"] = toDateRange;
    }

    // if (!param) return toast("No filteration added");

    await getDataFromAPI(param);
    getDataFromJSON(obj);
  };

  const getDataFromAPI = async (param) => {
    const { data: result } = await getData(`?${param}`);
    setData(result);
    // toast("New data has been requested, check the network tab");
  };

  const compareDate = (columnValue, filteredValue, columnName, count) => {
    const columnValueTime = new Date(columnValue).getTime();
    const filteredValueTime = new Date(filteredValue).getTime();

    if (
      columnName === "fromDateRange" &&
      columnValueTime >= filteredValueTime
    ) {
      count++;
    } else if (
      columnName === "toDateRange" &&
      columnValueTime <= filteredValueTime
    ) {
      count++;
    }
    return count;
  };

  const getDataFromJSON = (obj) => {
    const searchedData = [];
    const { auditLog: results } = data;
    const filteredColumns = Object.keys(obj);

    // Map over the Data from the JSON
    for (let i = 0; i < results.length; i++) {
      let count = 0;

      // Map over the selected filteration column dynamically
      for (let j = 0; j < filteredColumns.length; j++) {
        const columnName = filteredColumns[j];
        const isDateColumn = columnName.indexOf("DateRange") > -1;
        let filteredValue = obj[columnName];
        let columnValue = results[i][columnName];

        if (isDateColumn) {
          count = compareDate(
            results[i]["creationTimestamp"],
            filteredValue,
            columnName,
            count
          );
        } else if (columnValue == filteredValue) {
          count++;
        } else break; // Early exist
      }

      // If the filteration column count equal the count of valid filteration columns then the data row is needed
      if (filteredColumns.length === count) {
        searchedData.push(results[i]);
      }
    }

    const structure = {
      auditLog: searchedData,
    };

    setfilteredData(structure);
  };

  const clearFilteration = () => {
    setEmployeeName("");
    setapplicationId("");
    setActionType("");
    setApplicationType("");
    setFromDateRange("");
    setToDateRange("");
    setfilteredData(null);
  };

  const renderFilterHeader = () => {
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
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, maxWidth: "11rem" },
          }}
          className="filter-container"
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
              { key: "ADD_COMPANY", value: "ADD_COMPANY" },
              { key: "CERT_PROP_OWNERSHIP", value: "CERT_PROP_OWNERSHIP" },
              { key: "LEASE_CLOSURE", value: "LEASE_CLOSURE" },
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
            value={applicationId}
            handleChange={setapplicationId}
            label="Application ID"
          />
          <RenderButton handleClick={searchLogger} label="Search Logger" />
          <RenderButton
            handleClick={clearFilteration}
            label="Clear"
            fieldClassName="danger"
          />
        </Box>
      </Toolbar>
    );
  };

  let renderData = data;
  if (filteredData) renderData = filteredData;

  return (
    <div className="logger-container" data-testid="logger">
      {renderFilterHeader()}
      {renderData ? (
        <RenderTable data={renderData} headCells={headCells} />
      ) : (
        <Box className={styles.empty_container}>
          <h4>Loading Content</h4>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default Logger;
