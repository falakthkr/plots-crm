// src/components/Login.js
import React from "react";
import { Form, Input, Button, message } from "antd";
import { useDispatch } from "react-redux";
import { userLogin } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      const response = await dispatch(userLogin(values));
      if (response && response.data.token) {
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("userEmail", response.data.email);
        localStorage.setItem("role", response.data.role);
        localStorage.setItem("userName", response.data.fullName);
        message.success("Login successful.");
        navigateTo("/select-project");
      } else {
        message.error("Login failed. Invalid response format.");
      }
    } catch (error) {
      console.error("Login failed:", error);
      message.error("Login failed. Check your credentials.");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
        style={{
          minWidth: "500px",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </h2>
        <Form.Item name="email">
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item name="password">
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            style={{ backgroundColor: "A3E1DC" }}
            htmlType="submit"
          >
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
