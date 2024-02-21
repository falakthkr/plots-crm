import { useParams } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { useEffect } from "react";

const { TextArea } = Input;

const AddEnquiry = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    message.success("Enquiry added successfully");
    // You can handle form submission logic here
  };
  useEffect(() => {
    // fetch plot details
  }, []);
  const params = useParams();
  return (
    <>
      <h2> Add Enquiry for Plot No. {params.id} </h2>;
      <Form
        name="enquiryForm"
        initialValues={{
          plotID: params.id,
          plotDirection: "North",
          plotSize: "100 sq. ft.",
          plotPrice: "Rs. 100,000",
        }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item label="Plot ID" name="plotID">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Direction" name="plotDirection">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Size" name="plotSize">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Price" name="plotPrice">
          <Input disabled />
        </Form.Item>
        <Form.Item
          label="User Name"
          name="userName"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="User Phone Number"
          name="userPhoneNumber"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="User Address"
          name="userAddress"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <TextArea rows={2} />
        </Form.Item>

        <Form.Item
          label="User email ID"
          name="userEmail"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Notes" name="notes">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddEnquiry;
