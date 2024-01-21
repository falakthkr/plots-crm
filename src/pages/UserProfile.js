import React, { useState } from "react";
import { Layout, Card, Form, Input, Button, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons"; // Import the UserOutlined icon

const { Content } = Layout;

const UserProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [form] = Form.useForm(); // Use Form hook for controlling the form

  const userData = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    username: "johndoe123",
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    form.resetFields(); // Reset form fields to their initial values
    setEditMode(false);
  };

  const handleSave = (values) => {
    console.log("Updated User Profile:", values);
    setEditMode(false);
  };

  return (
    <Layout style={{ height: "100%" }}>
      <Content style={{ padding: "50px", textAlign: "center" }}>
        <Card title="User Profile" style={{ width: "100%", margin: "auto" }}>
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
              label="First Name"
              name="firstName"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input disabled={!editMode} />
            </Form.Item>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input disabled={!editMode} />
            </Form.Item>
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input disabled={!editMode} />
            </Form.Item>
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username" },
              ]}
            >
              <Input disabled={!editMode} />
            </Form.Item>

            {editMode ? (
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Save
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={handleCancelEdit}>
                  Cancel
                </Button>
              </Form.Item>
            ) : (
              <Form.Item>
                <Button type="primary" onClick={handleEditClick}>
                  Edit Profile
                </Button>
              </Form.Item>
            )}
          </Form>
        </Card>
      </Content>
    </Layout>
  );
};

export default UserProfile;
