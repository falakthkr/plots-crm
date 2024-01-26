import React, { useState } from "react";
import { Form, Input, Button, Select, message } from "antd";
import { useDispatch } from "react-redux";
import { addUser } from "../store/actions/authActions";

const { Option } = Select;

const AddUser = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await dispatch(addUser(values));
      message.success("User added successfully.");
      form.resetFields();
    } catch (error) {
      message.error("Failed to add user.");
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: "300px", margin: "auto" }}
    >
      <Form.Item
        label="Full Name"
        name="fullName"
        rules={[{ required: true, message: "Please enter full name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please enter password" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please enter phone number" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please select a role" }]}
      >
        <Select>
          <Option value="admin">Admin</Option>
          <Option value="agent">Agent</Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUser;
