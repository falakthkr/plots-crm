import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Plots from "../pages/Plots";
import UserProfile from "../pages/UserProfile";
import Bookings from "../pages/Booking";
import Projects from "../pages/Projects";
import AddUser from "../components/AddUser";
import ListUsers from "../components/ListUsers";
import PlotDetails from "../pages/PlotDetails";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/dashboard" exact Component={Dashboard} />
      <Route path="/add-user" exact Component={AddUser} />
      <Route path="/users" Component={ListUsers} />
      <Route path="/plots" Component={Plots} />
      <Route path="/plots/:id" Component={PlotDetails} />
      <Route path="/user-details" Component={UserProfile} />
      {/* <Route path="/stats" Component={Stats} /> */}
      <Route path="/projects" Component={Projects} />
      <Route path="/plot-booking" Component={Bookings} />
    </Routes>
  );
};

export default PrivateRoutes;
