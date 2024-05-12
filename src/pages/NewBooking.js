import { Form, Input, Button, message, Select } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const { TextArea } = Input;

const NewBooking = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigateTo = useNavigate();

  const [paymentOption, setPaymentOption] = useState("");
  const [emiOption, setEmiOption] = useState("");

  const bookingData = JSON.parse(localStorage.getItem("transferToBooking"));

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        `https://plots-crm-backend.vercel.app/api/enquiry/transfer`,
        {
          ...values,
          id: bookingData._id,
          status: "booked",
          paymentOption,
          emiOption,
        }
      );
      if (response.status === 200) {
        message.success("Booking added successfully!");
        navigateTo("/bookings");
        localStorage.removeItem("transferToBooking");
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to add booking");
    }
  };

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };
  const handleEmiOptionChange = (value) => {
    setEmiOption(value);
  };
  return (
    <>
      <h2> Add New Booking </h2>
      <Form
        form={form}
        name="enquiryForm"
        initialValues={{
          plotId: bookingData.plotId,
          plotDirection: bookingData.plotDirection,
          plotSize: bookingData.plotSize,
          plotPrice: bookingData.plotPrice,
          userAddress: bookingData.userAddress,
          userEmail: bookingData.userEmail,
          userName: bookingData.userName,
          userPhoneNumber: bookingData.userPhoneNumber,
        }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Total price of pllot"
          name="plotPrice"
          rules={[
            {
              required: true,
              message: "Please input price of plot!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="User Name" name="userName">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot ID" name="plotId">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Direction" name="plotDirection">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Size" name="plotSize">
          <Input disabled />
        </Form.Item>
        <Form.Item label="User Name" name="userName">
          <Input disabled />
        </Form.Item>

        <Form.Item label="User Phone Number" name="userPhoneNumber">
          <Input disabled />
        </Form.Item>

        <Form.Item label="User Address" name="userAddress">
          <TextArea disabled />
        </Form.Item>

        <Form.Item label="User email ID" name="userEmail">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Payment Option"
          name="paymentOption"
          rules={[
            {
              required: true,
              message: "Please select payment option!",
            },
          ]}
        >
          <Select onChange={handlePaymentOptionChange}>
            <Option value="upfront">Upfront Payment</Option>
            <Option value="emi">EMI Options</Option>
          </Select>
        </Form.Item>
        {paymentOption === "emi" && (
          <Form.Item label="EMI Tenure (Years)" name="emiOption">
            <Select onChange={handleEmiOptionChange}>
              <Option value="oneYear">1 year</Option>
              <Option value="twoYears">2 years</Option>
              <Option value="threeYears">3 years</Option>
              <Option value="fourYears">4 years</Option>
            </Select>
          </Form.Item>
        )}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default NewBooking;
