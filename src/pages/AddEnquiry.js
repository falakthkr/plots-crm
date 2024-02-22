import { useParams } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { addEnquiryCall } from "../store/actions/enquiryActions";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const AddEnquiry = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigateTo = useNavigate();

  const onFinish = async (values) => {
    try {
      await dispatch(addEnquiryCall(values));
      message.success("Enquiry added successfully.");
      navigateTo("/enquiries");
      form.resetFields();
    } catch (error) {
      message.error("Failed to add enquiry.");
    }
  };
  useEffect(() => {
    // fetch plot details
  }, []);
  const params = useParams();
  return (
    <>
      <h2> Add Enquiry for Plot No. {params.id} </h2>;
      <Form
        form={form}
        name="enquiryForm"
        initialValues={{
          plotId: params.id,
          plotDirection: "North",
          plotSize: "100 sq. ft.",
        }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item label="Plot ID" name="plotId">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Direction" name="plotDirection">
          <Input disabled />
        </Form.Item>

        <Form.Item label="Plot Size" name="plotSize">
          <Input disabled />
        </Form.Item>

        <Form.Item
          label="Plot Price"
          rules={[
            {
              required: true,
              message: "Please input the price of the plot!",
            },
          ]}
          name="plotPrice"
        >
          <Input />
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
