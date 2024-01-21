import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  BarChartOutlined,
  TeamOutlined,
  UserOutlined,
  AppstoreOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const AppLayout = ({ children }) => {
  const navigateTo = useNavigate();
  const location = useLocation();

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

  /** constants */
  const { Content, Footer, Sider } = Layout;

  const items = [
    getItem("Dashboard", <DesktopOutlined />, "/"),
    getItem("Projects", <HomeOutlined />, "/projects"),
    // getItem("Stats", <BarChartOutlined />, "/stats"),
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
      case "/":
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
          {renderContent()}
          {renderFooter()}
        </Layout>
      </Layout>
    );
  };
  return <div className="AppLayoutWrapper">{RenderAppLayout()}</div>;
};
export default AppLayout;
