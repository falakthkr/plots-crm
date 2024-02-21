import React, { useEffect, useState, useRef } from "react";
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
  const [pingCount, setPingCount] = useState(0);

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
      // setPingCount((prev) => prev + 1);
    }
    if (typeTwo) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
      // setPingCount((prev) => prev + 1);
    }
    if (typeThree) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
      // setPingCount((prev) => prev + 1);
    }
    if (typeFour) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "50px",
        height: "50px",
      };
      // setPingCount((prev) => prev + 1);
    }
    if (garden) {
      plotStyling.current = {
        ...plotStyling.current,
        width: "500px",
        height: "495px",
        fontSize: "large",
      };
      // setPingCount((prev) => prev + 1);
    }
  }, [garden, pingCount, typeFour, typeOne, typeThree, typeTwo]);

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
