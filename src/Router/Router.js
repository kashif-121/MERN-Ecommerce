import React from "react";
import {Route, Routes } from "react-router-dom";
import AuthLayout from "layouts/AuthLayout";
import MainLayout from "layouts/MainLayout";
import DashboardLayout from "layouts/DashboardLayout";

const Router = () => {
  return (
    <>
      <Routes>
      <Route path="*" element={<MainLayout/>} />
      <Route path="/auth/*" element={<AuthLayout/>} />
      <Route path="/dashboard/*" exact element={<DashboardLayout />}/>
      </Routes>
    </>
  );
};

export default Router;
