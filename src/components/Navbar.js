import React from "react";
import { Select } from "antd";

const Navbar = ({ selectedProject, onProjectChange, userName, userAvatar }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        background: "#001529",
        color: "white",
      }}
    >
      {/* Left side - Project dropdown */}
      <Select
        value={selectedProject}
        style={{ width: 150, marginRight: "16px" }} // Adjust width as needed
        onChange={(value) => onProjectChange(value)}
      >
        <Select.Option value="project1">Project 1</Select.Option>
        <Select.Option value="project2">Project 2</Select.Option>
        <Select.Option value="project3">Project 3</Select.Option>
      </Select>
    </div>
  );
};

export default Navbar;
