import React from "react";
import { Button } from "antd";

const plotStyling = {
  width: "50px",
  height: "50px",
};

const SinglePlot = ({ value }) => {
  return <Button style={plotStyling}>{value}</Button>;
};

export default SinglePlot;
