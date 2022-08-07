import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/dashboard"));
const NotFound = lazy(() => import("./pages/notFound"));

function RouterWrapper() {
  const suspenseWapper = (renderingPage) => {
    const loading = <div>Loading</div>;
    return <Suspense fallback={loading}>{renderingPage}</Suspense>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={suspenseWapper(<Dashboard />)} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="*" element={suspenseWapper(<NotFound />)} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouterWrapper;
