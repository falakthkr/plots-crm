import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space, Table, Button, Modal, Flex } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEnquiries } from "../store/actions/enquiryActions";
import { useNavigate } from "react-router-dom";
import PlotsLayoutModal from "../components/PlotsLayoutModal";

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
  }, []);

  const openDetails = (data) => {
    setIsDetailsModalOpen(true);
    setModalDetails(data);
  };

  const renderActions = (data) => {
    return <a onClick={() => openDetails(data)}>View</a>;
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

  const columns = [
    {
      title: "Plot ID",
      dataIndex: "plotId",
      key: "plotId",
      align: "center",
    },
    {
      title: "Name",
      dataIndex: "userName",
      key: "userName",
      align: "center",
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
        <Flex vertical gap="large">
          <Flex gap="small" vertical>
            <div>Plot ID: {modalDetails?.plotId}</div>
            <div>User name: {modalDetails?.userName}</div>
            <div>User number: {modalDetails?.userNumber}</div>
          </Flex>
          <Flex justify="end" gap="large" horizontal>
            <Button danger>Delete Enquiry</Button>
            <Button>Transfer user to booking stage</Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

export default Enquiries;
