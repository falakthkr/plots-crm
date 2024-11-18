import React from "react";
import { Card, Row, Col, Tooltip, Progress, Badge } from "antd";
import {
  UserOutlined,
  DollarOutlined,
  QuestionOutlined,
  CreditCardOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";

const Dashboard = () => {
  // Static data for dashboard stats
  const stats = {
    totalUsers: 1234,
    revenue: 123411,
    newEnquiries: 45,
    pendingPayments: 56789,
    userGrowth: 75, // Percentage
    revenueTarget: 85, // Percentage
  };

  const cardData = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: <UserOutlined />,
      color: "#FFDAC1",
    },
    {
      title: "Revenue",
      value: `₹${stats.revenue.toLocaleString()}`,
      icon: <DollarOutlined />,
      color: "#E2F0CB",
    },
    {
      title: "New Enquiries",
      value: stats.newEnquiries,
      icon: <QuestionOutlined />,
      color: "#B5EAD7",
    },
    {
      title: "Pending Payments",
      value: `₹${stats.pendingPayments.toLocaleString()}`,
      icon: <CreditCardOutlined />,
      color: "#C7CEEA",
    },
  ];

  return (
    <>
      <Row
        gutter={[16, 16]}
        justify="space-between"
        style={{ marginBottom: "20px" }}
      >
        {cardData.map((card, index) => (
          <Col key={index} xs={24} sm={12} md={6}>
            <Card
              hoverable
              style={{
                background: `linear-gradient(135deg, ${card.color} 30%, #ffffff 100%)`,
                textAlign: "center",
                borderRadius: "10px",
              }}
              bordered={false}
            >
              <Tooltip title={card.title}>
                <div style={{ fontSize: "40px", color: "#555" }}>
                  {card.icon}
                </div>
              </Tooltip>
              <h3>{card.title}</h3>
              <h2 style={{ margin: 0, fontWeight: "bold", color: "#333" }}>
                {card.value}
              </h2>
            </Card>
          </Col>
        ))}
      </Row>

      <Row gutter={[16, 16]} justify="space-between">
        <Col xs={24} sm={12} md={8}>
          <Card
            title="User Growth"
            bordered={false}
            extra={
              <Tooltip title="Percentage of user growth compared to last month">
                <RiseOutlined />
              </Tooltip>
            }
          >
            <Progress
              percent={stats.userGrowth}
              status="active"
              strokeColor={{
                "0%": "#108ee9",
                "100%": "#87d068",
              }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title="Revenue Target"
            bordered={false}
            extra={
              <Tooltip title="Progress towards monthly revenue target">
                <DollarOutlined />
              </Tooltip>
            }
          >
            <Progress
              percent={stats.revenueTarget}
              type="dashboard"
              strokeColor={{
                "0%": "#ff7f50",
                "100%": "#87d068",
              }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            title={
              <Badge.Ribbon text="Live Stats" color="green">
                Server Health
              </Badge.Ribbon>
            }
            bordered={false}
          >
            <p style={{ fontWeight: "bold" }}>Server Load:</p>
            <Progress
              percent={65}
              size="small"
              strokeColor={{
                "0%": "#ff4d4f",
                "100%": "#52c41a",
              }}
            />
            <p style={{ fontWeight: "bold", marginTop: "10px" }}>Uptime:</p>
            <Progress percent={99.9} size="small" status="success" />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col xs={24} md={12}>
          <Card title="Sales Overview" bordered={false}>
            <BarChart />
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card title="Revenue Breakdown" bordered={false}>
            <BarChart />
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col xs={24}>
          <Card title="User Growth Over Time" bordered={false}>
            <LineChart />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
