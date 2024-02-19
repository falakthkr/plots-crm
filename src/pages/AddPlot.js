import React from "react";
import { Form, Input, Select, Button, Upload, Space } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Formik } from "formik";

const AddPlot = () => {
  const handleSubmit = (values) => {
    console.log(values); // Handle form submission here
  };

  return (
    <Formik
      initialValues={{
        plotId: "",
        plotImage: "",
        plotSize: "",
        plotDirections: "",
        plotStatus: "",
      }}
      onSubmit={handleSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form
          onFinish={handleSubmit}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 13 }}
        >
          <Form.Item label="Plot ID" name="plotId">
            <Input
              name="plotId"
              value={values.plotId}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Plots Image" name="plotImage">
            <Upload>
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item label="Plot Size" name="plotSize">
            <Select
              name="plotSize"
              value={values.plotSize}
              onChange={(value) =>
                handleChange({ target: { name: "plotSize", value } })
              }
            >
              <Option value="typeOne">1200 x1200</Option>
              <Option value="typeTwo">2400 x 2400</Option>
              <Option value="typeThree">1200 x 2400</Option>
              <Option value="typeFour">1200 x 2100</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Plot Directions" name="plotDirections">
            <Input.TextArea
              name="plotDirections"
              value={values.plotDirections}
              onChange={handleChange}
            />
          </Form.Item>

          <Form.Item label="Plot Status" name="plotStatus">
            <Select
              name="plotStatus"
              value={values.plotStatus}
              onChange={(value) =>
                handleChange({ target: { name: "plotStatus", value } })
              }
            >
              <Option value="booked">Booked</Option>
              <Option value="open">Open</Option>
              <Option value="in-process">In-process</Option>
            </Select>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default AddPlot;
