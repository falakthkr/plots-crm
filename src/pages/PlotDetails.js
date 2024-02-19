import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Table, Card } from "antd";

const EnquiryTable = ({ enquiries, onSelectEnquiry }) => {
  const columns = [
    {
      title: "Enquiry ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Enquiry Text",
      dataIndex: "text",
      key: "text",
    },
  ];

  const handleRowClick = (record) => {
    onSelectEnquiry(record);
  };

  return (
    <Table
      dataSource={enquiries}
      columns={columns}
      rowKey="id"
      onRow={(record) => ({
        onClick: () => handleRowClick(record),
      })}
    />
  );
};

const UserDetails = ({ user }) => {
  return (
    <Card title="User Details">
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user details as needed */}
    </Card>
  );
};

const PlotDetails = () => {
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const enquiries = [
    { id: 1, text: "Enquiry 1 Text", userId: 1, plotId: 101 },
    { id: 2, text: "Enquiry 2 Text", userId: 2, plotId: 102 },
    // Add more sample enquiries
  ];
  const users = [
    { id: 1, name: "User 1", email: "user1@example.com" },
    { id: 2, name: "User 2", email: "user2@example.com" },
    // Add more sample users
  ];
  const selectedUser = selectedEnquiry
    ? users.find((user) => user.id === selectedEnquiry.userId)
    : null;
  const params = useParams();
  useEffect(() => {
    console.log(params.id);
  });
  return (
    <>
      <h1>Plot ID: {params.id}</h1>
      <hr />
      <Row gutter={16}>
        <Col span={8}>
          <EnquiryTable
            enquiries={enquiries}
            onSelectEnquiry={setSelectedEnquiry}
          />
        </Col>
        <Col span={8}>
          {selectedEnquiry && (
            <>
              <UserDetails user={selectedUser} />
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default PlotDetails;
