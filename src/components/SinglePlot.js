import React, { useRef } from "react";
import { Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePlot = ({ value, garden }) => {
  const bookedPlots = useSelector((state) => state.plots.plotsData);
  const loading = useSelector((state) => state.plots.isLoading);

  const navigateTo = useNavigate();

  /** states */
  const handleClick = () => {
    if (bookedPlots.includes(value)) {
      message.error(`Plot ${value} is already booked!`);
      return null;
    } else {
      navigateTo(`/add-enquiry/${value}`);
    }
  };

  if (loading) return null;
  return (
    <>
      <Button
        onClick={handleClick}
        danger={bookedPlots.includes(value)}
        // disabled={bookedPlots.includes(value)}
        style={{
          width: "62px",
          height: "45px",
          backgroundColor: `${bookedPlots.includes(value) ? "red" : "white"}`,
          color: `${bookedPlots.includes(value) ? "white" : "black"}`,
        }}
      >
        {garden ? "Open Space/Garden" : value}
      </Button>
    </>
  );
};

export default SinglePlot;
