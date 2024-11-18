import React, { useState, useEffect } from "react";
import {
  Button,
  Table,
  Tag,
  Input,
  Space,
  Tooltip,
  notification,
  Popconfirm,
} from "antd";
import { useNavigate } from "react-router-dom";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const Bookings = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
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
          setFilteredData(data); // Initialize filtered data
        } else {
          notification.error({
            message: "Failed to fetch bookings",
            description: "Please try again later.",
          });
        }
      } catch (error) {
        notification.error({
          message: "Error",
          description: "An error occurred while fetching bookings.",
        });
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

  const handleDeleteBooking = (data) => {
    // Simulate delete action
    notification.success({
      message: "Booking Deleted",
      description: `Booking with Plot ID ${data.plotId} has been deleted.`,
    });
    setFilteredData((prevData) =>
      prevData.filter((item) => item._id !== data._id)
    );
  };

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchText(searchValue);
    const filtered = enquiries.filter((item) =>
      Object.values(item).join(" ").toLowerCase().includes(searchValue)
    );
    setFilteredData(filtered);
  };

  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
      align: "center",
      sorter: (a, b) => a.plotId.localeCompare(b.plotId),
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
      filters: [...new Set(enquiries.map((item) => item.userName))].map(
        (name) => ({
          text: name,
          value: name,
        })
      ),
      onFilter: (value, record) => record.userName === value,
      filterSearch: true,
    },
    {
      title: "User Phone No.",
      dataIndex: "userPhoneNumber",
      key: "userPhoneNumber",
      align: "center",
    },
    {
      title: "Plot Directions",
      dataIndex: "plotDirection",
      key: "plotDirection",
      align: "center",
      sorter: (a, b) => a.plotDirection.localeCompare(b.plotDirection),
    },
    {
      title: "Is Corner Plot",
      dataIndex: "isCorner",
      key: "isCorner",
      render: (text) => {
        return text ? <Tag color="blue">Yes</Tag> : <Tag color="red">No</Tag>;
      },
      align: "center",
      filters: [
        { text: "Yes", value: true },
        { text: "No", value: false },
      ],
      onFilter: (value, record) => record.isCorner === value,
    },
    {
      title: "Actions",
      key: "actions",
      align: "center",
      render: (record) => (
        <Space>
          <Tooltip title="Edit Booking">
            <Button
              icon={<EditOutlined />}
              type="text"
              onClick={() => handleEditBooking(record)}
            />
          </Tooltip>
          <Tooltip title="Delete Booking">
            <Popconfirm
              title="Are you sure you want to delete this booking?"
              onConfirm={() => handleDeleteBooking(record)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon={<DeleteOutlined />} type="text" danger />
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Space style={{ marginBottom: "16px" }}>
        <Input
          placeholder="Search bookings..."
          value={searchText}
          onChange={handleSearch}
          prefix={<SearchOutlined />}
          style={{ width: "300px" }}
        />
      </Space>
      <Table
        dataSource={filteredData}
        columns={columns}
        loading={isLoading}
        rowKey="_id"
        pagination={{
          pageSize: 10,
          showSizeChanger: true,
          showQuickJumper: true,
        }}
      />
    </div>
  );
};

export default Bookings;
