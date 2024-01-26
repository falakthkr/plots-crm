// src/components/Login.js
import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { loginUser } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Assuming loginUser returns a response with a 'token' property
      const response = await dispatch(loginUser(values));

      // Check if the response contains a token
      if (response && response.token) {
        console.log(response);
        // Store the token in localStorage
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("userEmail", response.email);
        localStorage.setItem("role", response.role);
        message.success("Login successful.");
        navigateTo("/dashboard");
      } else {
        // Handle the case where the response does not contain a token
        message.error("Login failed. Invalid response format.");
      }
    } catch (error) {
      // Handle login failure or other errors
      console.error("Login failed:", error);
      message.error("Login failed. Check your credentials.");
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      style={{ maxWidth: "300px", margin: "auto" }}
    >
      <Form.Item label="Email" name="email">
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
