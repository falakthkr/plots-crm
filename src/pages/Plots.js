import React from "react";
import SinglePlot from "../components/SinglePlot";
import { Flex } from "antd";

const Plots = () => {
  return (
    <div className="PlotsWrapper">
      <Flex gap="large">
        <Flex gap="small" vertical>
          <SinglePlot value={1} />
          <SinglePlot value={2} />
          <SinglePlot value={3} />
          <SinglePlot value={4} />
          <SinglePlot value={5} />
          <SinglePlot value={6} />
          <SinglePlot value={7} />
          <SinglePlot value={8} />
          <SinglePlot value={9} />
          <SinglePlot value={10} />
          <SinglePlot value={11} />
        </Flex>
        <Flex gap="small">
          <Flex gap="small" vertical>
            <SinglePlot value={22} />
            <SinglePlot value={21} />
            <SinglePlot value={20} />
            <SinglePlot value={19} />
            <SinglePlot value={18} />
            <SinglePlot value={17} />
            <SinglePlot value={16} />
            <SinglePlot value={15} />
            <SinglePlot value={14} />
            <SinglePlot value={13} />
            <SinglePlot value={12} />
          </Flex>
          <Flex gap="small" vertical>
            <SinglePlot value={23} />
            <SinglePlot value={24} />
            <SinglePlot value={25} />
            <SinglePlot value={26} />
            <SinglePlot value={27} />
            <SinglePlot value={28} />
            <SinglePlot value={29} />
            <SinglePlot value={30} />
            <SinglePlot value={31} />
            <SinglePlot value={32} />
            <SinglePlot value={33} />
          </Flex>
        </Flex>
        <Flex gap="small">
          <Flex gap="small" vertical>
            <SinglePlot value={44} />
            <SinglePlot value={43} />
            <SinglePlot value={42} />
            <SinglePlot value={41} />
            <SinglePlot value={40} />
            <SinglePlot value={39} />
            <SinglePlot value={38} />
            <SinglePlot value={37} />
            <SinglePlot value={36} />
            <SinglePlot value={35} />
            <SinglePlot value={34} />
          </Flex>
          <Flex gap="small" vertical>
            <SinglePlot value={45} />
            <SinglePlot value={46} />
            <SinglePlot value={47} />
            <SinglePlot value={48} />
            <SinglePlot value={49} />
            <SinglePlot value={50} />
            <SinglePlot value={51} />
            <SinglePlot value={52} />
            <SinglePlot value={53} />
            <SinglePlot value={54} />
            <SinglePlot value={55} />
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Plots;
