import React from "react";
import { Form, Input, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import * as Yup from "yup";

const { Option } = Select;

const validationSchema = Yup.object({
  plotId: Yup.string()
    .required("Plot ID is required")
    .max(20, "Plot ID must be at most 20 characters"),
  plotImage: Yup.mixed().required("Plot image is required"),
  plotSize: Yup.string().required("Plot size is required"),
  plotDirections: Yup.string()
    .required("Plot directions are required")
    .max(200, "Directions must be at most 200 characters"),
  plotStatus: Yup.string().required("Plot status is required"),
});

const AddPlot = () => {
  const handleSubmit = (values) => {
    console.log(values); // Handle form submission logic here
    message.success("Plot details submitted successfully!");
  };

  return (
    <Formik
      initialValues={{
        plotId: "",
        plotImage: null,
        plotSize: "",
        plotDirections: "",
        plotStatus: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleSubmit,
      }) => (
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          style={{
            maxWidth: 600,
            margin: "50px auto",
            padding: "20px",
            border: "1px solid #f0f0f0",
            borderRadius: "8px",
            backgroundColor: "#fff",
          }}
        >
          {/* Plot ID */}
          <Form.Item
            label="Plot ID"
            validateStatus={touched.plotId && errors.plotId ? "error" : ""}
            help={touched.plotId && errors.plotId}
          >
            <Input
              name="plotId"
              value={values.plotId}
              onChange={handleChange}
              placeholder="Enter Plot ID"
            />
          </Form.Item>

          {/* Plot Image */}
          <Form.Item
            label="Plot Image"
            validateStatus={
              touched.plotImage && errors.plotImage ? "error" : ""
            }
            help={touched.plotImage && errors.plotImage}
          >
            <Upload
              beforeUpload={(file) => {
                setFieldValue("plotImage", file);
                return false; // Prevent auto upload
              }}
              fileList={values.plotImage ? [values.plotImage] : []}
              onRemove={() => setFieldValue("plotImage", null)}
            >
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
            {values.plotImage && (
              <div style={{ marginTop: 8 }}>
                Selected: {values.plotImage.name}
              </div>
            )}
          </Form.Item>

          {/* Plot Size */}
          <Form.Item
            label="Plot Size"
            validateStatus={touched.plotSize && errors.plotSize ? "error" : ""}
            help={touched.plotSize && errors.plotSize}
          >
            <Select
              name="plotSize"
              value={values.plotSize}
              onChange={(value) => setFieldValue("plotSize", value)}
              placeholder="Select Plot Size"
            >
              <Option value="typeOne">1200 x 1200</Option>
              <Option value="typeTwo">2400 x 2400</Option>
              <Option value="typeThree">1200 x 2400</Option>
              <Option value="typeFour">1200 x 2100</Option>
            </Select>
          </Form.Item>

          {/* Plot Directions */}
          <Form.Item
            label="Plot Directions"
            validateStatus={
              touched.plotDirections && errors.plotDirections ? "error" : ""
            }
            help={touched.plotDirections && errors.plotDirections}
          >
            <Input.TextArea
              name="plotDirections"
              value={values.plotDirections}
              onChange={handleChange}
              placeholder="Enter directions (e.g., North-East facing)"
              rows={3}
            />
          </Form.Item>

          {/* Plot Status */}
          <Form.Item
            label="Plot Status"
            validateStatus={
              touched.plotStatus && errors.plotStatus ? "error" : ""
            }
            help={touched.plotStatus && errors.plotStatus}
          >
            <Select
              name="plotStatus"
              value={values.plotStatus}
              onChange={(value) => setFieldValue("plotStatus", value)}
              placeholder="Select Plot Status"
            >
              <Option value="booked">Booked</Option>
              <Option value="open">Open</Option>
              <Option value="in-process">In-process</Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default AddPlot;
