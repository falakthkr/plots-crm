import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Enquiries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigateTo = useNavigate();

  const renderActions = (data) => {
    return (
      <Space size="middle">
        <EyeOutlined style={{ color: "green" }} />
        <EditOutlined style={{ color: "blue" }} />
      </Space>
    );
  };

  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
    },
    {
      title: "Ph No.",
      dataIndex: "userNumber",
      key: "userNumber",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "userStatus",
      key: "userStatus",
      align: "center",
    },
    {
      title: "Actions",
      render: renderActions,
      align: "center",
    },
  ];

  const data = [
    {
      key: 1,
      plotId: "001",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 1",
    },
    {
      key: 2,
      plotId: "002",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 2",
    },
    {
      key: 3,
      plotId: "003",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 1",
    },
    {
      key: 4,
      plotId: "111",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 1",
    },
    {
      key: 5,
      plotId: "123",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 6",
    },
    {
      key: 6,
      plotId: "088",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 2",
    },
  ];

  return <Table columns={columns} dataSource={data} />;
};

export default Enquiries;
