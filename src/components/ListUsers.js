import React, { useEffect, useState } from "react";
import { Table, message, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Replace "user@example.com" with the actual email you want to use
        const response = await axios.get(
          "https://plots-crm-backend.vercel.app/api/auth/users"
        );

        setUsers(response.data);
      } catch (error) {
        message.error("Failed to fetch users.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleAddUser = () => {
    // Replace "admin" with the actual role you want to check
    if (localStorage.getItem("role") === "admin") {
      navigateTo("/add-user");
    } else {
      message.error("You don't have permission to add users.");
    }
  };

  const columns = [
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
      align: "center",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      align: "center",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      align: "center",
    },
    // Add more columns as needed
  ];

  return (
    <div>
      <Button
        type="primary"
        style={{ float: "right", margin: "10px" }}
        onClick={handleAddUser}
      >
        Add User
      </Button>
      <Table
        dataSource={users}
        columns={columns}
        loading={isLoading}
        rowKey={(record) => record._id} // Adjust with your actual unique identifier
      />
    </div>
  );
};

export default ListUsers;
