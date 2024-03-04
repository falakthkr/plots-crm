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
} from "antd";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const BookingCard = ({ bookingData }) => {
  return (
    <Card title="Booking Details">
      <Row gutter={[30, 30]}>
        <Col span={8}>
          <p>
            <strong>Plot ID:</strong> {bookingData?.plotId}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>Plot Direction:</strong> {bookingData?.plotDirection}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>Plot Size:</strong> {bookingData?.plotSize}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>Plot Price:</strong> {bookingData?.plotPrice}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Name:</strong> {bookingData?.userName}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Email:</strong> {bookingData?.userEmail}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Phone Number:</strong> {bookingData?.userPhoneNumber}
          </p>
        </Col>
        <Col span={8}>
          <p>
            <strong>User Address:</strong> {bookingData?.userAddress}
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
  const [form] = Form.useForm();
  const params = useParams();
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      align: "center",
      render: (value) => {
        return new Date(value).toDateString();
      },
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      align: "center",
      render: (value) => {
        if (value === "debitCard") {
          return "Debit Card";
        }
        if (value === "bankTransfer") {
          return "Bank Transfer";
        }
        if (value === "creditCard") {
          return "Credit Card";
        }
        if (value === "cash") {
          return "Cash";
        }
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      align: "center",
    },
  ];
  const getAllPaymentsData = async () => {
    try {
      // Replace "user@example.com" with the actual email you want to use
      const response = await axios.get(
        `https://plots-crm-backend.vercel.app/api/enquiry/booking/${params.id}/payments`
      );
      setTableData(response.data.payments);
      let amount = 0;
      await response.data.payments.map(
        (item) => (amount = amount + item.amount)
      );
      setAmountPercentage(
        parseFloat((amount / bookingData?.plotPrice) * 100).toFixed(2)
      );
      setPaidAmount(amount);
    } catch (error) {
      message.error("Failed to fetch payments");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllPaymentsData();
  }, [getAllPaymentsData]);
  const onFinish = (data) => {
    axios
      .post(
        `https://plots-crm-backend.vercel.app/api/enquiry/booking/${params.id}/add-payment`,
        data
      )
      .then((res) => {
        if (res.status === 200) {
          message.success("Payment added successfully");
          setOpenPaymentModal(false);
          getAllPaymentsData();
        }
      })
      .catch((err) => {
        message.error("Failed to add payment");
        setOpenPaymentModal(false);
        console.error(err);
      });
  };
  return (
    <>
      <Card title="Edit Payment Details">
        <p>Pending: Rs. {bookingData?.plotPrice - paidAmount}</p>
        <Progress percent={amountPercentage} />
        <Button
          onClick={() => setOpenPaymentModal(true)}
          style={{ float: "right", marginBottom: "10px" }}
          type="primary"
        >
          Add Payment
        </Button>
        <Table loading={isLoading} columns={columns} dataSource={tableData} />
      </Card>
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
          title="Add Payment"
        >
          <h2>Add payment</h2>
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please enter amount" }]}
          >
            <Input />
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
              { required: true, message: "Please select date of payment" },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
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
  const [isLoading, setIsLoading] = useState(false);
  const [bookingData, setBookingData] = useState();
  const [paymentsData, setPaymentsData] = useState();
  const [pingCount, setPingCount] = useState(0);
  const params = useParams();

  useEffect(() => {
    console.log(isLoading, pingCount);
    const fetchBookingData = async () => {
      try {
        const response = await fetch(
          `https://plots-crm-backend.vercel.app/api/enquiry/all-bookings/${params.id}`
        );
        if (response.ok) {
          const data = await response.json();
          setBookingData(data);
          setPaymentsData(data.payments);
          setPingCount((prev) => prev + 1);
        }
      } catch (error) {
        console.error("Error fetching Booking data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchBookingData();
  }, [params.id]);
  return (
    <>
      <BookingCard bookingData={bookingData} />
      <Divider />
      <PaymentsTable paymentsData={paymentsData} bookingData={bookingData} />
    </>
  );
};

export default EditBooking;
