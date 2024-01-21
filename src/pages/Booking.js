import React from "react";
import {
  Tabs,
  Table,
  Tag,
  Form,
  Input,
  Checkbox,
  Select,
  Button,
  Progress,
} from "antd";
import bookingsData from "../data/bookings.json";

// const layout = {
//   labelCol: {
//     span: 7,
//   },
//   wrapperCol: {
//     span: 13,
//   },
// };

/* eslint-disable no-template-curly-in-string */
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid phone number!",
//   },
//   number: {
//     range: "${label} must be between 10 digits",
//   },
// };
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

// const Enquiry = () => {
//   const onFinish = (values) => {
//     console.log(values);
//   };
//   return (
//     <Form
//       {...layout}
//       style={{ width: "100%" }}
//       name="nest-messages"
//       onFinish={onFinish}
//       validateMessages={validateMessages}
//     >
//       <Form.Item
//         name={["user", "name"]}
//         label="Name"
//         rules={[
//           {
//             required: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>
//       <Form.Item
//         name={["user", "phone number"]}
//         label="Ph. Number"
//         rules={[
//           {
//             type: "number",
//             required: true,
//             min: 1111111111,
//             max: 9999999999,
//           },
//         ]}
//       >
//         <InputNumber style={{ width: "100%" }} />
//       </Form.Item>
//       <Form.Item name={["user", "notes"]} label="Notes">
//         <Input.TextArea />
//       </Form.Item>
//     </Form>
//   );
// };

const { Option } = Select;

const Enquiry = () => {
  // State to manage form data
  // const [formData, setFormData] = useState({
  // plotId: "",
  // userDetails: "",
  // plotDirections: "",
  // cornerPlot: false,
  // paymentMethod: "",
  // completedPayment: 0,
  // pendingPayment: 100, // Assuming an initial pending amount of 100
  // });

  const formData = {
    plotId: "",
    userDetails: "",
    plotDirections: "",
    cornerPlot: false,
    paymentMethod: "",
    completedPayment: 0,
    pendingPayment: 100,
  };

  // Handle form submission
  const handleSubmit = (values) => {
    // Add your logic to handle form submission (e.g., API call)
    console.log("Form Data Submitted:", values);
  };

  // Calculate progress percentage
  const calculateProgress = () => {
    const totalPayment = formData.completedPayment + formData.pendingPayment;
    return (formData.completedPayment / totalPayment) * 100;
  };

  return (
    <Form onFinish={handleSubmit} initialValues={formData}>
      <Form.Item
        label="Plot ID"
        name="plotId"
        rules={[{ required: true, message: "Please enter Plot ID" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="User Details"
        name="userDetails"
        rules={[{ required: true, message: "Please enter User Details" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Plot Directions"
        name="plotDirections"
        rules={[{ required: true, message: "Please enter Plot Directions" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Payment Method"
        name="paymentMethod"
        rules={[{ required: true, message: "Please select Payment Method" }]}
      >
        <Select>
          <Option value="credit">Credit Card</Option>
          <Option value="debit">Debit Card</Option>
          <Option value="paypal">PayPal</Option>
        </Select>
      </Form.Item>

      <Form.Item name="cornerPlot" valuePropName="checked">
        <Checkbox>Corner Plot</Checkbox>
      </Form.Item>

      {/* Completed and Pending Payments Progress Bar */}
      <div style={{ marginTop: "20px" }}>
        <Progress
          percent={calculateProgress()}
          showInfo={false}
          strokeColor="#1890ff"
          strokeWidth={15}
          style={{ height: "15px", borderRadius: "8px" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "8px",
          }}
        >
          <span>Completed: {formData.completedPayment}</span>
          <span>Pending: {formData.pendingPayment}</span>
        </div>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit" style={{ marginTop: "16px" }}>
          Submit
        </Button>
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
