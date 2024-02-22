import React, { useEffect, useState } from "react";
import { Table, Space, message, Tag } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";

const Plots = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [plotsData, setPlotsData] = useState(null);

  useEffect(() => {
    const fetchAllPlots = async () => {
      try {
        const response = await fetch(
          "https://plots-crm-backend.vercel.app/api/plots"
        );
        if (response.ok) {
          const data = await response.json();
          setPlotsData(data);
        }
      } catch (error) {
        console.error("Error fetching enquiries:", error);
        message.error(
          "Error fetching plots data, please retry after sometime."
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllPlots();
  });

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
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      align: "center",
    },
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
      align: "center",
    },
    {
      title: "Plot Size",
      dataIndex: "plotSize",
      key: "plotSize",
      align: "center",
    },
    {
      title: "Plot Direction",
      dataIndex: "plotDirection",
      key: "plotDirection",
      align: "center",
    },
    {
      title: "Corner Plot",
      dataIndex: "isCorner",
      key: "isCorner",
      align: "center",
      render: (data) => {
        if (data) {
          return <Tag color="blue">Yes</Tag>;
        }
        return <Tag color="red">No</Tag>;
      },
    },
    {
      title: "O-Size",
      dataIndex: "oSize",
      key: "oSize",
      align: "center",
      render: (data) => {
        if (data) {
          return <Tag color="blue">Yes</Tag>;
        }
        return <Tag color="red">No</Tag>;
      },
    },
    {
      title: "Road Size",
      dataIndex: "roadSize",
      key: "roadSize",
      align: "center",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      align: "center",
      render: renderActions,
    },
  ];

  return <Table loading={isLoading} columns={columns} dataSource={plotsData} />;
};

export default Plots;
