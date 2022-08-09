import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Logger = lazy(() => import("./pages/Logger"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function RouterWrapper() {
  const suspenseWapper = (renderingPage) => {
    const loading = (
      <Box className="center-page">
        <CircularProgress />
      </Box>
    );
    return <Suspense fallback={loading}>{renderingPage}</Suspense>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/logger" element={suspenseWapper(<Logger />)} />
        <Route path="/" element={<Navigate to="/logger" replace />} />
        <Route path="*" element={suspenseWapper(<PageNotFound />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterWrapper;
