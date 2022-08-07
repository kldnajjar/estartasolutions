import React, { useState, useEffect } from "react";

import { getData } from "../../services/dashboard";
import EnhancedTable from "../../components/table";
import { headCells } from "./configuration";

// import styles from "./Dashboard.module.css";

function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fillData = async () => {
      const { data: result } = await getData();
      setData(result);
    };
    fillData();
  }, []);

  if (!data) return null;

  return (
    <div className="App">
      <EnhancedTable data={data} headCells={headCells} />
    </div>
  );
}

export default Dashboard;
