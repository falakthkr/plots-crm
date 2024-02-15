// src/components/Login.js
import React from "react";
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
      const response = await dispatch(loginUser(values));

      if (response && response.token) {
        console.log(response);
        localStorage.setItem("authToken", response.token);
        localStorage.setItem("userEmail", response.email);
        localStorage.setItem("role", response.role);
        localStorage.setItem("userName", response.fullName);
        message.success("Login successful.");
        navigateTo("/dashboard");
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
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#B5EAD6",
      }}
    >
      <Form
        form={form}
        onFinish={onFinish}
        style={{
          minWidth: "500px",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
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
