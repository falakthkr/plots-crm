import React, { useState, useEffect } from "react";
import { Table } from "antd";

const EnquiryTable = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(
          "https://plots-crm-backend.vercel.app/api/plots/all-enquiries"
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
      align: "center",
    },
    {
      title: "User Details",
      dataIndex: "userDetails",
      key: "userDetails",
      align: "center",
    },
    {
      title: "Plot Directions",
      dataIndex: "plotDirections",
      key: "plotDirections",
      align: "center",
    },
    {
      title: "Is Corner Plot",
      dataIndex: "isCornerPlot",
      key: "isCornerPlot",
      render: (text, record) => (text ? "Yes" : "No"),
      align: "center",
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      align: "center",
    },
    {
      title: "Pending Payment",
      dataIndex: "pendingPayment",
      key: "pendingPayment",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      align: "center",
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

export default EnquiryTable;
