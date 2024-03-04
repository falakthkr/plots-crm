import React, { useState, useEffect } from "react";
import { Button, Table, Tag } from "antd";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchBookings = async () => {
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

    fetchBookings();
  }, []);

  const handleEditBooking = (data) => {
    navigateTo(`/edit-booking/${data._id}`);
  };

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
      filters: enquiries?.map((item) => {
        return {
          text: item.userName,
          value: item.userName,
        };
      }),
      onFilter: (value, record) => record.userName === value,
      filterSearch: true,
    },
    {
      title: "User Ph No.",
      dataIndex: "userPhoneNumber",
      key: "userPhoneNumber",
      align: "center",
      filters: enquiries?.map((item) => {
        return {
          text: item.userPhoneNumber,
          value: item.userPhoneNumber,
        };
      }),
      onFilter: (value, record) => record.userPhoneNumber === value,
      filterSearch: true,
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
      title: "Actions",
      render: (record) => {
        return (
          <Button
            type="text"
            style={{ color: "blue" }}
            onClick={() => handleEditBooking(record)}
          >
            Edit
          </Button>
        );
      },
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
