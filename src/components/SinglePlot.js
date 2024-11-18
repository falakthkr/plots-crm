import React from "react";
import { Button, message, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const SinglePlot = ({ value, garden }) => {
  const bookedPlots = useSelector((state) => state.plots.plotsData);
  const loading = useSelector((state) => state.plots.isLoading);

  const navigateTo = useNavigate();

  /** Handle button click */
  const handleClick = () => {
    if (bookedPlots.includes(value)) {
      message.error(`Plot ${value} is already booked!`);
      return null;
    } else {
      navigateTo(`/add-enquiry/${value}`);
    }
  };

  if (loading) return null;

  // Determine booking status
  const isBooked = bookedPlots.includes(value);
  const plotStatus = isBooked ? "Booked" : "Available";

  return (
    <Tooltip
      title={garden ? "Open Space/Garden" : `Plot ${value}: ${plotStatus}`}
    >
      <Button
        onClick={handleClick}
        danger={isBooked}
        style={{
          width: "62px",
          height: "45px",
          backgroundColor: `${isBooked ? "red" : "white"}`,
          color: `${isBooked ? "white" : "black"}`,
        }}
      >
        {garden ? "Open Space/Garden" : value}
      </Button>
    </Tooltip>
  );
};

export default SinglePlot;
