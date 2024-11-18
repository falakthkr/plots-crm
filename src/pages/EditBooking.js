import {
  Form,
  Input,
  Card,
  Col,
  Row,
  Button,
  Table,
  Divider,
  Modal,
  Select,
  DatePicker,
  message,
  Progress,
  Tooltip,
  Spin,
  InputNumber,
} from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const BookingCard = ({ bookingData }) => {
  return (
    <Card title="Booking Details">
      <Row gutter={[30, 30]}>
        <Col span={8}>
          <p>
            <strong>Plot ID:</strong> {bookingData?.plotId || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>Plot Direction:</strong>{" "}
            {bookingData?.plotDirection || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>Plot Size:</strong> {bookingData?.plotSize || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>Plot Price:</strong> ₹{bookingData?.plotPrice || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Name:</strong> {bookingData?.userName || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Email:</strong> {bookingData?.userEmail || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Phone Number:</strong>{" "}
            {bookingData?.userPhoneNumber || "N/A"}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Address:</strong> {bookingData?.userAddress || "N/A"}
          </p>
        </Col>
      </Row>
    </Card>
  );
};

const PaymentsTable = ({ bookingData }) => {
  const { Option } = Select;
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paidAmount, setPaidAmount] = useState(0);
  const [amountPercentage, setAmountPercentage] = useState(0);
  const [isFullyPaid, setIsFullyPaid] = useState(false); // Track if payment is complete
  const [form] = Form.useForm();
  const params = useParams();

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (value) => new Date(value).toLocaleDateString(),
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      align: "center",
      render: (value) => {
        const methods = {
          debitCard: "Debit Card",
          bankTransfer: "Bank Transfer",
          creditCard: "Credit Card",
          cash: "Cash",
        };
        return methods[value] || "Unknown";
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
      render: (amount) => `₹${amount}`,
    },
    {
      title: "Remarks",
      dataIndex: "remarks",
      key: "remarks",
      align: "center",
    },
  ];

  const getAllPaymentsData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `https://plots-crm-backend.vercel.app/api/enquiry/booking/${params.id}/payments`
      );
      setTableData(data.payments || []);
      const totalPaid =
        data.payments?.reduce((acc, curr) => acc + curr.amount, 0) || 0;
      setPaidAmount(totalPaid);
      setAmountPercentage(
        ((totalPaid / bookingData?.plotPrice) * 100).toFixed(2)
      );
      setIsFullyPaid(totalPaid >= bookingData?.plotPrice); // Check if fully paid
    } catch (error) {
      message.error("Failed to fetch payments");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [bookingData, params.id]);

  useEffect(() => {
    getAllPaymentsData();
  }, [getAllPaymentsData]);

  const onFinish = async (data) => {
    try {
      const response = await axios.post(
        `https://plots-crm-backend.vercel.app/api/enquiry/booking/${params.id}/add-payment`,
        data
      );
      if (response.status === 200) {
        message.success("Payment added successfully");
        setOpenPaymentModal(false);
        getAllPaymentsData();
      }
    } catch (error) {
      message.error("Failed to add payment");
      console.error(error);
    }
  };

  return (
    <>
      <Card title="Edit Payment Details">
        <p>Pending: ₹{bookingData?.plotPrice - paidAmount || 0}</p>
        <Tooltip
          title={`Paid: ₹${paidAmount}, Pending: ₹${
            bookingData?.plotPrice - paidAmount
          }`}
        >
          <Progress percent={amountPercentage} />
        </Tooltip>
        <Button
          onClick={() => setOpenPaymentModal(true)}
          style={{ float: "right", marginBottom: "10px" }}
          type="primary"
        >
          Add Payment
        </Button>
        <Table
          loading={isLoading}
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 5 }}
        />
      </Card>

      {isFullyPaid && (
        <Card title="Registration Payment" style={{ marginTop: "20px" }}>
          <p>Your registration payment has been completed. Thank you!</p>
        </Card>
      )}

      <Modal
        onCancel={() => setOpenPaymentModal(false)}
        footer={false}
        open={openPaymentModal}
        width={700}
      >
        <Form
          form={form}
          onFinish={onFinish}
          style={{ maxWidth: "600px", margin: "auto", marginTop: "20px" }}
        >
          <h2>Add Payment</h2>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please enter amount" }]}
          >
            <InputNumber min={1} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Payment Method"
            name="paymentMethod"
            rules={[
              { required: true, message: "Please select a payment method" },
            ]}
          >
            <Select>
              <Option value="creditCard">Credit Card</Option>
              <Option value="debitCard">Debit Card</Option>
              <Option value="bankTransfer">Bank Transfer</Option>
              <Option value="cash">Cash</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[
              { required: true, message: "Please select the date of payment" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label="Remarks" name="remarks">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button style={{ float: "right" }} type="primary" htmlType="submit">
              Add Payment
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const EditBooking = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState();
  const params = useParams();

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const { data } = await axios.get(
          `https://plots-crm-backend.vercel.app/api/enquiry/all-bookings/${params.id}`
        );
        setBookingData(data);
      } catch (error) {
        message.error("Error fetching booking data");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookingData();
  }, [params.id]);

  if (isLoading) {
    return (
      <Spin style={{ display: "block", margin: "100px auto" }} size="large" />
    );
  }

  return (
    <>
      <BookingCard bookingData={bookingData} />
      <Divider />
      <PaymentsTable bookingData={bookingData} />
    </>
  );
};

export default EditBooking;
