import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Plots from "../pages/Plots";
import UserProfile from "../pages/UserProfile";
import Bookings from "../pages/Booking";
import AddUser from "../components/AddUser";
import ListUsers from "../components/ListUsers";
import PlotDetails from "../pages/PlotDetails";
// import ViewAllPlots from "../pages/ViewAllPlots";
import Enquiries from "../pages/Enquiries";
import AddEnquiry from "../pages/AddEnquiry";
import Projects from "../pages/Projects";
import NewBooking from "../pages/NewBooking";
import EditBooking from "../pages/EditBooking";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/select-project" exact Component={Projects} />
      <Route path="/" exact Component={Dashboard} />
      <Route path="/add-user" exact Component={AddUser} />
      <Route path="/users" Component={ListUsers} />
      {/* <Route path="/plots" Component={Plots} /> */}
      <Route path="/plots/:id" Component={PlotDetails} />
      <Route path="/user-details" Component={UserProfile} />
      <Route path="/bookings" Component={Bookings} />
      <Route path="/plots" Component={Plots} />
      <Route path="/enquiries" Component={Enquiries} />
      <Route path="/add-enquiry/:id" Component={AddEnquiry} />
      <Route path="/new-booking" Component={NewBooking} />
      <Route path="/edit-booking/:id" Component={EditBooking} />
    </Routes>
  );
};

export default PrivateRoutes;
