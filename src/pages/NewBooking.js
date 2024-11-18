import { Form, Input, Button, message, Select, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const { TextArea } = Input;

const NewBooking = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const navigateTo = useNavigate();

  const [paymentOption, setPaymentOption] = useState("");
  const [emiOption, setEmiOption] = useState("");
  const [bookingData, setBookingData] = useState(null);

  // Fetch booking data from local storage on component mount
  useEffect(() => {
    const storedData = localStorage.getItem("transferToBooking");
    if (storedData) {
      setBookingData(JSON.parse(storedData));
    } else {
      navigateTo("/bookings"); // Redirect if no booking data is found
    }
  }, [navigateTo]);

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
      console.error(error);
      message.error("Failed to add booking");
    }
  };

  const handlePaymentOptionChange = (value) => {
    setPaymentOption(value);
  };

  const handleEmiOptionChange = (value) => {
    setEmiOption(value);
  };

  // Loading state handling for bookingData
  if (!bookingData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h2>Add New Booking</h2>
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
          label="Total Price of Plot"
          name="plotPrice"
          rules={[
            { required: true, message: "Please input the price of the plot!" },
          ]}
        >
          <InputNumber min={0} style={{ width: "100%" }} />
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

        <Form.Item label="User Phone Number" name="userPhoneNumber">
          <Input disabled />
        </Form.Item>

        <Form.Item label="User Address" name="userAddress">
          <TextArea disabled />
        </Form.Item>

        <Form.Item label="User Email ID" name="userEmail">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Payment Option"
          name="paymentOption"
          rules={[
            { required: true, message: "Please select a payment option!" },
          ]}
        >
          <Select onChange={handlePaymentOptionChange}>
            <Option value="upfront">Upfront Payment</Option>
            <Option value="emi">EMI Options</Option>
          </Select>
        </Form.Item>

        {paymentOption === "emi" && (
          <Form.Item
            label="EMI Tenure (Years)"
            name="emiOption"
            rules={[
              { required: true, message: "Please select an EMI tenure!" },
            ]}
          >
            <Select onChange={handleEmiOptionChange}>
              <Option value="oneYear">1 Year</Option>
              <Option value="twoYears">2 Years</Option>
              <Option value="threeYears">3 Years</Option>
              <Option value="fourYears">4 Years</Option>
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
