import React, { useState, useEffect } from "react";
import { Table, Tag } from "antd";

const Bookings = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await fetch(
          "https://plots-crm-backend.vercel.app/api/enquiry/all-bookings"
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
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
    },
    {
      title: "User Ph No.",
      dataIndex: "userPhoneNumber",
      key: "userPhoneNumber",
      align: "center",
    },
    {
      title: "Plot Directions",
      dataIndex: "plotDirection",
      key: "plotDirection",
      align: "center",
    },
    {
      title: "Is Corner Plot",
      dataIndex: "isCorner",
      key: "isCorner",
      render: (text) => {
        if (text) {
          return <Tag color="blue">Yes</Tag>;
        }
        return <Tag color="red">No</Tag>;
      },
      align: "center",
    },
    {
      title: "Method of Payment",
      dataIndex: "methodOfPayment",
      key: "methodOfPayment",
      align: "center",
    },
    {
      title: "Price paid",
      dataIndex: "pricePaid",
      key: "pricePaid",
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
export default Bookings;
