import React from "react";
import { Tabs, Table, Tag, Form, Input, InputNumber } from "antd";
import bookingsData from "../data/bookings.json";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
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

const Plots = () => {
  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plot_id",
      filterMode: "menu",
      filterSearch: true,
      filters: bookingsData.map((dataItem) => {
        return {
          text: dataItem.plot_id,
          value: dataItem.plot_id,
        };
      }),
      onFilter: (value, record) => record.plot_id === value,
    },
    {
      title: "Client Name",
      dataIndex: "first_name",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (_, { status }) => {
        let color;
        if (status === "booked") color = "red";
        if (status === "open") color = "green";
        if (status === "enquiry") color = "yellow";
        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  return <Table columns={columns} dataSource={bookingsData} />;
};

const Enquiry = () => {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
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
    </Form>
  );
};

const Bookings = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={[
      {
        label: "Plots",
        key: 1,
        children: <Plots />,
      },
      {
        label: "Enquiry",
        key: 2,
        children: <Enquiry />,
      },
    ]}
  />
);
export default Bookings;
