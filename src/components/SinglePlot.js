import React, { useEffect, useRef } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const SinglePlot = ({
  value,
  typeOne,
  typeTwo,
  typeThree,
  typeFour,
  garden,
  status,
}) => {
  const navigateTo = useNavigate();
  const plotStyling = useRef({
    width: "62px",
    height: "45px",
  });
  /** states */

  const handleClick = () => {
    if (status === "booked") return null;
    else {
      navigateTo(`/add-enquiry/${value}`);
    }
  };

  /** useEffects */
  useEffect(() => {
    if (typeOne) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "62px",
        height: "45px",
      };
    }
    if (typeTwo) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
    }
    if (typeThree) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
    }
    if (typeFour) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
    }
    if (garden) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "500px",
        height: "495px",
        fontSize: "large",
      };
    }
  }, [garden, typeFour, typeOne, typeThree, typeTwo]);

  return (
    <>
      <Button
        onClick={handleClick}
        danger={status === "booked"}
        disabled={garden || status === "pending"}
        style={plotStyling.current}
      >
        {garden ? "Open Space/Garden" : value}
      </Button>
    </>
  );
};

export default SinglePlot;
