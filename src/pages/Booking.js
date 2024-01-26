import React from "react";
import {
  Tabs,
  Table,
  Tag,
  Form,
  Input,
  Checkbox,
  Select,
  Button,
  Progress,
} from "antd";
import bookingsData from "../data/bookings.json";
import EnquiryForm from "./Enquiry";
import EnquirieTable from "../components/PlotsTable";

const Bookings = () => (
  <Tabs
    defaultActiveKey="1"
    centered
    items={[
      {
        label: "Plots",
        key: 1,
        children: <EnquirieTable />,
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
