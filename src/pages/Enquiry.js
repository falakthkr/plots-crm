import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 5,
  },
};

const EnquiryForm = () => {
  const onFinish = async (values) => {
    try {
      // Call your API to add the enquiry with the form values here
      const response = await fetch(
        "https://plots-crm-backend.vercel.app/api/plots/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Enquiry added successfully:", data);
      } else {
        console.error("Failed to add enquiry");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Form
      {...layout}
      style={{ width: "100%" }}
      name="enquiry-form"
      onFinish={onFinish}
    >
      <Form.Item
        name="plotId"
        label="Plot ID"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name="userDetails"
        label="User Details"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="plotDirections"
        label="Plot Directions"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="isCornerPlot"
        label="Is Corner Plot"
        valuePropName="checked"
      >
        <Input type="checkbox" />
      </Form.Item>
      <Form.Item
        name="paymentMethod"
        label="Payment Method"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Option value="Cash">Cash</Option>
          <Option value="Credit Card">Credit Card</Option>
          {/* Add more options as needed */}
        </Select>
      </Form.Item>
      <Form.Item
        name="pendingPayment"
        label="Pending Payment"
        rules={[
          {
            type: "number",
            required: true,
            min: 0,
          },
        ]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>
      <Form.Item
        name="status"
        label="Status"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select>
          <Option value="Sold">Sold</Option>
          <Option value="Can’t be sold">Can’t be sold</Option>
          <Option value="Not sold">Not sold</Option>
        </Select>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 5,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EnquiryForm;
