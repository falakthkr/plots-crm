import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Space, Table, Button, Modal, Flex } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlotsLayoutModal from "../components/PlotsLayoutModal";

const Enquiries = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);
  const navigateTo = useNavigate();

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
      dataIndex: "userNumber",
      key: "userNumber",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "userStatus",
      key: "userStatus",
      align: "center",
    },
    {
      title: "Actions",
      render: renderActions,
      align: "center",
    },
  ];

  const data = [
    {
      key: 1,
      plotId: "001",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 1",
    },
    {
      key: 2,
      plotId: "002",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 2",
    },
    {
      key: 3,
      plotId: "003",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 1",
    },
    {
      key: 4,
      plotId: "111",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 1",
    },
    {
      key: 5,
      plotId: "123",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 6",
    },
    {
      key: 6,
      plotId: "088",
      userName: "Samuel Ortega",
      userNumber: 1233457788,
      userStatus: "Phase 2",
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
      <Table columns={columns} dataSource={data} />
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
