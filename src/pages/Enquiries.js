import React, { useEffect, useState } from "react";
import { Table, Button, Modal, message, Spin, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getAllEnquiries } from "../store/actions/enquiryActions";
import { useNavigate } from "react-router-dom";
import PlotsLayoutModal from "../components/PlotsLayoutModal";
import axios from "axios";

const Enquiries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);

  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.enquiry.isLoading);
  const allEnquiries = useSelector((state) => state.enquiry.allEnquiries);

  useEffect(() => {
    dispatch(getAllEnquiries());
  }, [dispatch]);

  const openDetails = (data) => {
    setModalDetails(data);
    setIsDetailsModalOpen(true);
  };

  const togglePlotsModal = () => setIsModalOpen(true);

  const handleModalClose = () => setIsModalOpen(false);

  const handleDeleteEnquiry = async (id) => {
    setIsDeleting(true);
    try {
      const response = await axios.delete(
        `https://plots-crm-backend.vercel.app/api/enquiry/${id}`
      );
      if (response.status === 200) {
        message.success("Enquiry deleted successfully");
        dispatch(getAllEnquiries());
        setIsDetailsModalOpen(false);
      }
    } catch (error) {
      console.error("Delete Enquiry Error:", error);
      message.error("Failed to delete the enquiry. Please try again.");
    } finally {
      setIsDeleting(false);
    }
  };

  const transferToBookings = async (data) => {
    setIsTransferring(true);
    try {
      localStorage.setItem(
        "transferToBooking",
        JSON.stringify({ ...data, status: "booked" })
      );
      message.success("User transferred to bookings.");
      navigateTo("/new-booking");
    } catch (error) {
      console.error("Transfer Error:", error);
      message.error("Failed to transfer user. Please try again.");
    } finally {
      setIsTransferring(false);
    }
  };

  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
      align: "center",
      sorter: (a, b) => a.plotId.localeCompare(b.plotId),
      filters: Array.from(
        new Set(allEnquiries?.map((item) => item.plotId))
      ).map((value) => ({ text: value, value })),
      onFilter: (value, record) => record.plotId.includes(value),
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
      sorter: (a, b) => a.userName.localeCompare(b.userName),
      filters: Array.from(
        new Set(allEnquiries?.map((item) => item.userName))
      ).map((value) => ({ text: value, value })),
      onFilter: (value, record) =>
        record.userName.toLowerCase().includes(value.toLowerCase()),
    },
    {
      title: "Ph No.",
      dataIndex: "userPhoneNumber",
      key: "userPhoneNumber",
      align: "center",
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Button
          type="link"
          onClick={() => openDetails(record)}
          style={{ color: "#1890ff" }}
        >
          View Details
        </Button>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <Button
        type="primary"
        style={{ float: "right", margin: "10px" }}
        onClick={togglePlotsModal}
      >
        Add Enquiry
      </Button>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={allEnquiries}
        rowKey="plotId"
        pagination={{ pageSize: 10 }}
      />
      <PlotsLayoutModal
        title="Plots Layout"
        show={isModalOpen}
        handleModalOk={handleModalClose}
        handleModalCancel={handleModalClose}
      />
      <Modal
        visible={isDetailsModalOpen}
        title="Enquiry Details"
        onCancel={() => setIsDetailsModalOpen(false)}
        footer={null}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <div>
            <strong>Plot ID:</strong> {modalDetails?.plotId}
          </div>
          <div>
            <strong>User Name:</strong> {modalDetails?.userName}
          </div>
          <div>
            <strong>Phone Number:</strong> {modalDetails?.userPhoneNumber}
          </div>
        </Space>
        <div style={{ marginTop: 20, textAlign: "center" }}>
          <Spin spinning={isDeleting || isTransferring}>
            <Button
              type="primary"
              onClick={() => transferToBookings(modalDetails)}
              style={{ marginRight: 10 }}
              disabled={isDeleting}
            >
              Transfer to Bookings
            </Button>
            <Button
              type="danger"
              onClick={() => handleDeleteEnquiry(modalDetails?._id)}
              disabled={isTransferring}
            >
              Delete Enquiry
            </Button>
          </Spin>
        </div>
      </Modal>
    </>
  );
};

export default Enquiries;
