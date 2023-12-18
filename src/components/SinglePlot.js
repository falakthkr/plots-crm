import React, { useEffect, useState, useRef } from "react";
import { Button, Modal, Form, Input, InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 7,
  },
  wrapperCol: {
    span: 13,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid phone number!",
  },
  number: {
    range: "${label} must be between 10 digits",
  },
};
/* eslint-enable no-template-curly-in-string */

const SinglePlot = ({
  value,
  typeOne,
  typeTwo,
  typeThree,
  typeFour,
  garden,
  status,
}) => {
  const plotStyling = useRef({
    width: "62px",
    height: "45px",
  });
  /** states */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pingCount, setPingCount] = useState(0);

  /** useEffects */
  useEffect(() => {
    if (typeOne) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "62px",
        height: "45px",
      };
      setPingCount((prev) => prev + 1);
    }
    if (typeTwo) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
      setPingCount((prev) => prev + 1);
    }
    if (typeThree) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
      setPingCount((prev) => prev + 1);
    }
    if (typeFour) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
      setPingCount((prev) => prev + 1);
    }
    if (garden) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "500px",
        height: "495px",
        fontSize: "large",
      };
      setPingCount((prev) => prev + 1);
    }
    console.log(pingCount);
  }, [garden, pingCount, typeFour, typeOne, typeThree, typeTwo]);

  /** helper functions */
  const showModal = () => {
    if (status !== "booked") {
      setIsModalOpen(true);
    }
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log(values);
  };

  /** render functions */
  const renderTypeOnePlotDetails = () => {
    if (!typeOne) return null;
    return (
      <>
        <p>Plot ID: {value}</p>
        <p>Plot Size: 1200</p>
        <p>Status: {status ? status : "Open for Sale"}</p>
      </>
    );
  };
  const renderTypeTwoPlotDetails = () => {
    if (!typeTwo) return null;
    return (
      <>
        <p>Plot ID: {value}</p>
        <p>Plot Size: 2400</p>
        <p>Status: {status ? status : "Open for Sale"}</p>
      </>
    );
  };
  const renderTypeThreePlotDetails = () => {
    if (!typeThree) return null;
    return (
      <>
        <p>Plot ID: {value}</p>
        <p>Plot Size: 12x24m</p>
        <p>Status: {status ? status : "Open for Sale"}</p>
      </>
    );
  };
  const renderTypeFourPlotDetails = () => {
    if (!typeFour) return null;
    return (
      <>
        <p>Plot ID: {value}</p>
        <p>Plot Size: 12x21m</p>
        <p>Status: {status ? status : "Open for Sale"}</p>
      </>
    );
  };

  const renderPlotEnquiryForm = () => {
    return (
      <Form
        {...layout}
        style={{ width: "100%" }}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "phone number"]}
          label="Ph. Number"
          rules={[
            {
              type: "number",
              required: true,
              min: 1111111111,
              max: 9999999999,
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name={["user", "notes"]} label="Notes">
          <Input.TextArea />
        </Form.Item>
      </Form>
    );
  };
  return (
    <>
      <Button
        danger={status === "booked"}
        disabled={garden || status === "pending"}
        style={plotStyling.current}
        onClick={showModal}
      >
        {garden ? "Open Space/Garden" : value}
      </Button>
      <Modal
        title="Plot Details/Enquiry"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        {renderTypeOnePlotDetails()}
        {renderTypeTwoPlotDetails()}
        {renderTypeThreePlotDetails()}
        {renderTypeFourPlotDetails()}
        {renderPlotEnquiryForm()}
      </Modal>
    </>
  );
};

export default SinglePlot;
