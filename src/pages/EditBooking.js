import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const { TextArea } = Input;

const EditBooking = () => {
  const [form] = Form.useForm();
  const navigateTo = useNavigate();

  const bookingData = JSON.parse(localStorage.getItem("transferToBooking"));

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        `https://plots-crm-backend.vercel.app/api/enquiry/transfer`,
        { ...values, id: bookingData._id }
      );
      console.log(response);
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
          label="Price Paid by User"
          name="pricePaid"
          rules={[
            {
              required: true,
              message: "Please input price paid by user!",
              type: Number,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Method of Payment"
          name="methodOfPayment"
          rules={[
            {
              required: true,
              message: "Please input method of payment!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Notes on method of payment"
          name="methodDetails"
          rules={[
            {
              required: true,
              message: "Please input notes on method of payment!",
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

        <Form.Item label="Plot Price" name="plotPrice">
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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditBooking;
