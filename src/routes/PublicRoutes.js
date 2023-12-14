import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppLayout from "../Layout";
import Dashboard from "../pages/Dashboard";
import Plots from "../pages/Plots";
import UserProfile from "../pages/UserProfile";
import AllUsers from "../pages/AllUsers";
import Stats from "../pages/Stats";
import Enquiry from "../pages/Enquiry";
import Projects from "../pages/Projects";

const PublicRoutes = () => {
  /** render functions */
  const RenderAllRoutes = () => {
    return (
      <Router>
        <AppLayout>
          <Routes>
            <Route path="/" exact Component={Dashboard} />
            <Route path="/plots" Component={Plots} />
            <Route path="/user-details" Component={UserProfile} />
            <Route path="/users" Component={AllUsers} />
            <Route path="/stats" Component={Stats} />
            <Route path="/projects" Component={Projects} />
            <Route path="/plot-enquiry" Component={Enquiry} />
          </Routes>
        </AppLayout>
      </Router>
    );
  };
  return <div className="PublicRoutesWrapper">{RenderAllRoutes()}</div>;
};

export default PublicRoutes;
