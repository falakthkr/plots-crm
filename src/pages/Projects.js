import React from "react";
import { Table } from "antd";
import projectsData from "../data/projects.json";

const Projects = () => {
  /** constants */
  const columns = [
    {
      title: "Project ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Project Name",
      dataIndex: "project_name",
    },
    {
      title: "Company",
      dataIndex: "developer_name",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
  ];

  /** helper functions */
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  /** render functions */
  const RenderProjectsTable = () => {
    return (
      <Table columns={columns} dataSource={projectsData} onChange={onChange} />
    );
  };

  return <div className="ProjectsWrapper">{RenderProjectsTable()}</div>;
};

export default Projects;
