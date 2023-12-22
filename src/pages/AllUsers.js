import React from "react";
import { Table } from "antd";
import usersData from "../data/allUsers.json";

const AllUsers = () => {
  /** constants */
  const columns = [
    {
      title: "User ID",
      dataIndex: "userId",
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      title: "Name",
      dataIndex: "name",
      filterMode: "menu",
      filterSearch: true,
      filters: usersData.map((userItem) => {
        return {
          text: userItem.name,
          value: userItem.name,
        };
      }),
      onFilter: (value, record) => record.name.includes(value),
    },
    {
      title: "Role",
      dataIndex: "role",
      filters: [
        {
          text: "Admin",
          value: "Admin",
        },
        {
          text: "Agent",
          value: "Agent",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.role === value,
    },
    {
      title: "Ph. Number",
      dataIndex: "number",
    },
  ];

  /** helper functions */
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  /** render functions */
  const RenderUsersTable = () => {
    return (
      <Table columns={columns} dataSource={usersData} onChange={onChange} />
    );
  };

  return <div className="AllUsersWrapper">{RenderUsersTable()}</div>;
};

export default AllUsers;
