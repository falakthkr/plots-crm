import React, { useEffect, useState, useRef } from "react";
import { Button, Modal } from "antd";

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
  }, []);

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
        title="Basic Modal"
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
      </Modal>
    </>
  );
};

export default SinglePlot;
