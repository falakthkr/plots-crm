import React, { useState, useEffect } from "react";
import { Layout, Card, Form, Input, Avatar, message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import axios from "axios";

const { Content } = Layout;

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Make an API call to fetch user details using the authToken
        const response = await axios.post(
          "https://plots-crm-backend.vercel.app/api/auth/user",
          {
            email: localStorage.getItem("userEmail"),
          }
        );

        setUserData(response.data);
      } catch (error) {
        message.error("Failed to fetch user details.");
      }
    };

    fetchUserProfile();
  }, []);

  // const handleEditClick = () => {
  //   setEditMode(true);
  // };

  // const handleCancelEdit = () => {
  //   form.resetFields();
  //   setEditMode(false);
  // };

  const handleSave = async (values) => {
    try {
      // Make an API call to update user details using the authToken
      await axios.put(
        "https://plots-crm-backend.vercel.app/api/auth/user",
        values,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        }
      );

      setEditMode(false);
      message.success("User profile updated successfully.");
    } catch (error) {
      message.error("Failed to update user profile.");
    }
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Card title="User Profile" style={{ width: "100%", margin: "auto" }}>
          {userData && (
            <>
              <Avatar
                size={64}
                icon={<UserOutlined />}
                style={{ marginBottom: "20px" }}
              />

              <Form
                form={form}
                initialValues={userData}
                onFinish={handleSave}
                layout="vertical"
                hideRequiredMark
              >
                <Form.Item
                  label="Full Name"
                  name="fullName"
                  rules={[
                    { required: true, message: "Please enter your full name" },
                  ]}
                >
                  <Input disabled={!editMode} />
                </Form.Item>
                <Form.Item
                  label="Phone Number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input disabled={!editMode} />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input disabled={!editMode} />
                </Form.Item>
                <Form.Item
                  label="Role"
                  name="role"
                  rules={[
                    { required: true, message: "Please select your role" },
                  ]}
                >
                  <Input disabled={!editMode} />
                </Form.Item>
              </Form>
            </>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default UserProfile;
