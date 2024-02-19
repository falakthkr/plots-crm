import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from "react-redux";
import AppLayout from "../Layout";

const PublicRoutes = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  /** render functions */
  const RenderAllRoutes = () => {
    console.log(isAuth);
    if (!isAuth) {
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
