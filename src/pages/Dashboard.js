import React from "react";
import { Layout, Menu, Breadcrumb, Card, Row, Col } from "antd";
import {
  LineChartOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          <Card
            style={{ backgroundColor: "#FFDAC1" }}
            title="Total Users"
            bordered={false}
          >
            1234
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ backgroundColor: "#E2F0CB" }}
            title="Revenue"
            bordered={false}
          >
            र123411
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ backgroundColor: "#B5EAD7" }}
            title="New Enquiries"
            bordered={false}
          >
            45
          </Card>
        </Col>
        <Col span={6}>
          <Card
            style={{ backgroundColor: "#C7CEEA" }}
            title="Pending Payments"
            bordered={false}
          >
            र56789
          </Card>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row>
        <Col span={12}>
          <BarChart />
        </Col>
        <Col span={12}>
          <BarChart />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <LineChart />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
