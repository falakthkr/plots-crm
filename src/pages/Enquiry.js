import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  message,
  Checkbox,
} from "antd";
import * as Yup from "yup";
import { Formik } from "formik";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 5,
  },
};

const validationSchema = Yup.object({
  plotId: Yup.number().required("Plot ID is required"),
  userDetails: Yup.string().required("User details are required"),
  plotDirections: Yup.string().required("Plot directions are required"),
  isCornerPlot: Yup.boolean(),
  paymentMethod: Yup.string().required("Payment method is required"),
  pendingPayment: Yup.number()
    .min(0, "Pending payment cannot be negative")
    .required("Pending payment is required"),
  status: Yup.string().required("Status is required"),
});

const EnquiryForm = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://plots-crm-backend.vercel.app/api/plots/enquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        const data = await response.json();
        message.success("Enquiry added successfully!");
        console.log("Enquiry added successfully:", data);
      } else {
        message.error("Failed to add enquiry. Please try again.");
      }
    } catch (error) {
      message.error("An error occurred. Please try again.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        plotId: "",
        userDetails: "",
        plotDirections: "",
        isCornerPlot: false,
        paymentMethod: "",
        pendingPayment: 0,
        status: "",
      }}
      validationSchema={validationSchema}
      onSubmit={onFinish}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        setFieldValue,
      }) => (
        <Form
          {...layout}
          style={{ width: "100%" }}
          name="enquiry-form"
          onFinish={handleSubmit}
        >
          {/* Plot ID */}
          <Form.Item
            name="plotId"
            label="Plot ID"
            validateStatus={touched.plotId && errors.plotId ? "error" : ""}
            help={touched.plotId && errors.plotId}
          >
            <InputNumber
              name="plotId"
              value={values.plotId}
              onChange={(value) => setFieldValue("plotId", value)}
              style={{ width: "100%" }}
            />
          </Form.Item>

          {/* User Details */}
          <Form.Item
            name="userDetails"
            label="User Details"
            validateStatus={
              touched.userDetails && errors.userDetails ? "error" : ""
            }
            help={touched.userDetails && errors.userDetails}
          >
            <Input
              name="userDetails"
              value={values.userDetails}
              onChange={handleChange}
              placeholder="Enter user details"
            />
          </Form.Item>

          {/* Plot Directions */}
          <Form.Item
            name="plotDirections"
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
              placeholder="Enter plot directions"
              rows={3}
            />
          </Form.Item>

          {/* Corner Plot Checkbox */}
          <Form.Item
            name="isCornerPlot"
            label="Is Corner Plot"
            valuePropName="checked"
          >
            <Checkbox
              name="isCornerPlot"
              checked={values.isCornerPlot}
              onChange={(e) => setFieldValue("isCornerPlot", e.target.checked)}
            >
              Yes
            </Checkbox>
          </Form.Item>

          {/* Payment Method */}
          <Form.Item
            name="paymentMethod"
            label="Payment Method"
            validateStatus={
              touched.paymentMethod && errors.paymentMethod ? "error" : ""
            }
            help={touched.paymentMethod && errors.paymentMethod}
          >
            <Select
              name="paymentMethod"
              value={values.paymentMethod}
              onChange={(value) => setFieldValue("paymentMethod", value)}
              placeholder="Select payment method"
            >
              <Option value="Cash">Cash</Option>
              <Option value="Credit Card">Credit Card</Option>
              <Option value="Bank Transfer">Bank Transfer</Option>
            </Select>
          </Form.Item>

          {/* Pending Payment */}
          <Form.Item
            name="pendingPayment"
            label="Pending Payment"
            validateStatus={
              touched.pendingPayment && errors.pendingPayment ? "error" : ""
            }
            help={touched.pendingPayment && errors.pendingPayment}
          >
            <InputNumber
              name="pendingPayment"
              value={values.pendingPayment}
              onChange={(value) => setFieldValue("pendingPayment", value)}
              style={{ width: "100%" }}
            />
          </Form.Item>

          {/* Status */}
          <Form.Item
            name="status"
            label="Status"
            validateStatus={touched.status && errors.status ? "error" : ""}
            help={touched.status && errors.status}
          >
            <Select
              name="status"
              value={values.status}
              onChange={(value) => setFieldValue("status", value)}
              placeholder="Select plot status"
            >
              <Option value="Sold">Sold</Option>
              <Option value="Can’t be sold">Can’t be sold</Option>
              <Option value="Not sold">Not sold</Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 5 }}>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              disabled={loading}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </Formik>
  );
};

export default EnquiryForm;
