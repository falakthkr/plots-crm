import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { logoutUser } from "./store/actions/authActions";
import { Breadcrumb, Layout, Menu, theme, message } from "antd";
import Navbar from "./components/Navbar";

const AppLayout = ({ children }) => {
  const navigateTo = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [selectedProject, setSelectedProject] = useState("project1");

  /** helper functions */
  const getItem = (label, icon, key) => {
    return {
      key,
      icon,
      label,
    };
  };

  const handleRedirect = (route) => {
    navigateTo(route);
  };

  const handleProjectChange = (project) => {
    // You can perform any logic or dispatch actions related to project change here
    console.log("Selected Project:", project);
    setSelectedProject(project);
  };

  const handleLogout = async () => {
    try {
      // Assuming logoutUser returns a response with a 'token' property
      const response = await dispatch(logoutUser());

      // Check if the response contains a token
      if (response) {
        // Store the token in localStorage
        localStorage.removeItem("authToken");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("role");
        message.success("Logout successful.");
        handleRedirect("/");
      } else {
        // Handle the case where the response does not contain a token
        message.error("Logout failed.");
      }
    } catch (error) {
      // Handle logout failure or other errors
      console.error("Logout failed:", error);
      message.error("Logout failed.");
    }
  };

  /** constants */
  const { Content, Footer, Sider } = Layout;

  const items = [
    getItem("Dashboard", <DesktopOutlined />, "/dashboard"),
    // getItem("Projects", <HomeOutlined />, "/projects"),
    getItem("Plots", <AppstoreOutlined />, "/plots"),
    getItem("Bookings", <FileOutlined />, "/plot-booking"),
    getItem("Users", <TeamOutlined />, "/users"),
    getItem("Profile", <UserOutlined />, "/user-details"),
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  /** render functions */
  const renderBreadcrumbs = () => {
    const currentRoute = location.pathname;
    let breadCrumb = "Dashboard";
    switch (currentRoute) {
      case "/dashboard":
        breadCrumb = "Dashboard";
        break;
      case "/plots":
        breadCrumb = "Plots";
        break;
      case "/user-details":
        breadCrumb = "User Profile";
        break;
      case "/users":
        breadCrumb = "All Users Data";
        break;
      case "/stats":
        breadCrumb = "Stats";
        break;
      case "/plot-enquiry":
        breadCrumb = "Enquiry";
        break;
      case "/projects":
        breadCrumb = "Projects";
        break;
      default:
        breadCrumb = "Dashboard";
        break;
    }
    return (
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Plots Management</Breadcrumb.Item>
        <Breadcrumb.Item>{breadCrumb}</Breadcrumb.Item>
      </Breadcrumb>
    );
  };

  const renderSidebar = () => {
    return (
      <Sider
        style={{
          overflow: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          height: "100vh",
          bottom: 0,
        }}
      >
        <img
          src="https://walidevelopers.com/pmswali/header.jpg"
          width={180}
          style={{ margin: "10px" }}
          alt="wali developers logo"
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          mode="inline"
          inlineCollapsed={true}
          items={items}
          onSelect={(item) => handleRedirect(item.key)}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 20,
            cursor: "pointer",
            color: "white",
          }}
          onClick={handleLogout}
        >
          <LogoutOutlined style={{ marginRight: 8 }} />
          Logout
        </div>
      </Sider>
    );
  };

  const renderContent = () => {
    return (
      <Content
        style={{
          margin: "0 16px",
        }}
      >
        {renderBreadcrumbs()}
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <main>{children}</main>
        </div>
      </Content>
    );
  };
  const renderFooter = () => {
    return (
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Wali Developers Plot Management System ©2023 Created by Falak Thackar
      </Footer>
    );
  };
  const RenderAppLayout = () => {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          marginLeft: 200,
        }}
      >
        {renderSidebar()}
        <Layout>
          <Navbar
            selectedProject={selectedProject}
            onProjectChange={handleProjectChange}
            userName="Your Name" // Replace with actual user data
            userAvatar="path-to-avatar-image.jpg" // Replace with actual user data
          />
          {renderContent()}
          {renderFooter()}
        </Layout>
      </Layout>
    );
  };
  return <div className="AppLayoutWrapper">{RenderAppLayout()}</div>;
};
export default AppLayout;
