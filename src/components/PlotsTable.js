import React, { useState, useEffect } from "react";
import { Table } from "antd";

const EnquirieTable = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(
          "https://plots-crm-backend.vercel.app/api/plots/enquiries"
        );
        if (response.ok) {
          const data = await response.json();
          setEnquiries(data);
        }
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEnquiries();
  }, []);

  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
    },
    {
      title: "User Details",
      dataIndex: "userDetails",
      key: "userDetails",
    },
    {
      title: "Plot Directions",
      dataIndex: "plotDirections",
      key: "plotDirections",
    },
    {
      title: "Is Corner Plot",
      dataIndex: "isCornerPlot",
      key: "isCornerPlot",
      render: (text, record) => (text ? "Yes" : "No"),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Pending Payment",
      dataIndex: "pendingPayment",
      key: "pendingPayment",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
  ];

  return (
    <Table
      dataSource={enquiries}
      columns={columns}
      loading={isLoading}
      rowKey="plotId"
    />
  );
};

export default EnquirieTable;
