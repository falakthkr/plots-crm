import React from "react";
import { Button, Form, Input, InputNumber } from "antd";
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 5,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid phone number!",
  },
  number: {
    range: "${label} must be between 10 digits",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
  console.log(values);
};
const EnquiryForm = () => (
  <Form
    {...layout}
    style={{ width: "100%" }}
    name="nest-messages"
    onFinish={onFinish}
    validateMessages={validateMessages}
  >
    <Form.Item
      name={["user", "name"]}
      label="Name"
      rules={[
        {
          required: true,
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      name={["user", "phone number"]}
      label="Ph. Number"
      rules={[
        {
          type: "number",
          required: true,
          min: 1111111111,
          max: 9999999999,
        },
      ]}
    >
      <InputNumber style={{ width: "100%" }} />
    </Form.Item>
    <Form.Item name={["user", "notes"]} label="Notes">
      <Input.TextArea />
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
export default EnquiryForm;
