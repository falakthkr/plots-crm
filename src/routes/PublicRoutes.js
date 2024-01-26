import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "../Layout";
import Login from "../components/Login";
import PrivateRoutes from "./PrivateRoutes";
import { useNavigate } from "react-router-dom";

const PublicRoutes = () => {
  const navigateTo = useNavigate();
  /** render functions */
  const RenderAllRoutes = () => {
    if (!localStorage.getItem("authToken")) {
      return (
        <Routes>
          <Route path="/" exact Component={Login} />
        </Routes>
      );
    } else {
      return (
        <AppLayout>
          <PrivateRoutes />
        </AppLayout>
      );
    }
  };
  return <div className="PublicRoutesWrapper">{RenderAllRoutes()}</div>;
};

export default PublicRoutes;
