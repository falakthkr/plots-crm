import { Table, Button, Modal, Flex, message } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEnquiries } from "../store/actions/enquiryActions";
import { useNavigate } from "react-router-dom";
import PlotsLayoutModal from "../components/PlotsLayoutModal";
import axios from "axios";

const Enquiries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.enquiry.isLoading);
  const allEnquiries = useSelector((state) => state.enquiry.allEnquiries);

  useEffect(() => {
    dispatch(getAllEnquiries());
  }, [dispatch]);

  const openDetails = (data) => {
    setIsDetailsModalOpen(true);
    setModalDetails(data);
  };

  const renderActions = (data) => {
    return (
      <Button
        type="text"
        style={{ color: "blue" }}
        onClick={() => openDetails(data)}
      >
        View
      </Button>
    );
  };

  const togglePlotsModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteEnquiry = async (id) => {
    try {
      const response = await axios.delete(
        `https://plots-crm-backend.vercel.app/api/enquiry/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        message.success("Enquiry deleted successfully");
        setIsDetailsModalOpen(false);
        dispatch(getAllEnquiries());
      }
    } catch (error) {
      console.log(error);
      message.error("Failed to delete Enquiry");
    }
  };

  const transferToBookings = (data) => {
    localStorage.setItem(
      "transferToBooking",
      JSON.stringify({ ...data, status: "booked" })
    );
    navigateTo("/new-booking");
  };

  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
      align: "center",
      filters: allEnquiries?.map((item) => {
        return {
          text: item.plotId,
          value: item.plotId,
        };
      }),
      onFilter: (value, record) => record.plotId === value,
      filterSearch: true,
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
      filters: allEnquiries?.map((item) => {
        return {
          text: item.userName,
          value: item.userName,
        };
      }),
      onFilter: (value, record) => record.userName === value,
      filterSearch: true,
    },
    {
      title: "Ph No.",
      dataIndex: "userPhoneNumber",
      key: "userPhoneNumber",
      align: "center",
    },
    {
      title: "Actions",
      render: renderActions,
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
      <Table loading={isLoading} columns={columns} dataSource={allEnquiries} />
      <PlotsLayoutModal
        title="Plots Layout"
        show={isModalOpen}
        handleModalOk={handleOk}
        handleModalCancel={handleCancel}
      />
      <Modal
        onCancel={() => setIsDetailsModalOpen(false)}
        open={isDetailsModalOpen}
        footer={null}
      >
        {/* <Flex vertical gap="large"> */}
        {/* <Flex gap="small" vertical>
            <div>Plot ID: {modalDetails?.plotId}</div>
            <div>User name: {modalDetails?.userName}</div>
            <div>User number: {modalDetails?.userNumber}</div>
          </Flex> */}
        <Flex justify="center" gap="large" horizontal>
          <Button onClick={() => handleDeleteEnquiry(modalDetails?._id)} danger>
            Delete Enquiry
          </Button>
          <Button onClick={() => transferToBookings(modalDetails)}>
            Transfer user to bookings
          </Button>
        </Flex>
        {/* </Flex> */}
      </Modal>
    </>
  );
};

export default Enquiries;
