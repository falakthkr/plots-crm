import React from "react";
import { useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  BarChartOutlined,
  TeamOutlined,
  UserOutlined,
  LayoutOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const AppLayout = ({ children }) => {
  const navigateTo = useNavigate();
  
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
    getItem("Stats", <BarChartOutlined />, "/stats"),
    getItem("Users", <TeamOutlined />, "/users"),
    getItem("Plots", <LayoutOutlined />, "/plots"),
    getItem("Enquiry", <FileOutlined />, "/plot-enquiry"),
    getItem("Profile", <UserOutlined />, "/user-details"),
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  /** render functions */
  const renderBreadcrumbs = () => {
    return (
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Plots Management</Breadcrumb.Item>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
    );
  };
  const renderSidebar = () => {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["/"]}
          mode="inline"
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
        Wali Developers ©2023 Created by Falak Thackar
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
