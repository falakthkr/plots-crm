import React from "react";
import { Tabs } from "antd";
import EnquiryForm from "./Enquiry";
import EnquiryTable from "../components/PlotsTable";

const Bookings = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={[
      {
        label: "Plots",
        key: 1,
        children: <EnquiryTable />,
      },
      {
        label: "Enquiry",
        key: 2,
        children: <EnquiryForm />,
      },
    ]}
  />
);
export default Bookings;
