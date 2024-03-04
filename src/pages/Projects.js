import React from "react";
import { Form, Select } from "antd";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  // const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    navigateTo("/plots");
  };

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        form={form}
        style={{
          minWidth: "500px",
          borderRadius: "8px",
          backgroundColor: "white",
        }}
      >
        <Form.Item name="selectProject">
          <Select
            onChange={onFinish}
            placeholder="Select Project"
            options={[
              { value: "projectOne", label: "Project 1" },
              { value: "projectTwo", label: "Project 2" },
              { value: "projectThree", label: "Project 3" },
            ]}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default Projects;
