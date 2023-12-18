import React from "react";
import SinglePlot from "../components/SinglePlot";
import { Divider, Flex } from "antd";

/** type one : 1200
 *  type two : 2400
 *  type three : 12x24m
 *  type four: 12x21m
 */

const Plots = () => {
  return (
    <div className="PlotsWrapper">
      <Flex gap="large">
        <Flex vertical>
          <SinglePlot status="booked" value={1} typeOne />
          <SinglePlot value={2} typeOne />
          <SinglePlot value={3} typeOne />
          <SinglePlot value={4} typeOne />
          <SinglePlot value={5} typeOne />
          <SinglePlot value={6} typeOne />
          <SinglePlot value={7} typeOne />
          <SinglePlot value={8} typeOne />
          <SinglePlot value={9} typeOne />
          <SinglePlot value={10} typeOne />
          <SinglePlot status="booked" value={11} typeOne />
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={22} typeOne />
            <SinglePlot value={21} typeOne />
            <SinglePlot value={20} typeOne />
            <SinglePlot value={19} typeOne />
            <SinglePlot value={18} typeOne />
            <SinglePlot value={17} typeOne />
            <SinglePlot value={16} typeOne />
            <SinglePlot value={15} typeOne />
            <SinglePlot value={14} typeOne />
            <SinglePlot value={13} typeOne />
            <SinglePlot status="booked" value={12} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={23} typeOne />
            <SinglePlot value={24} typeOne />
            <SinglePlot value={25} typeOne />
            <SinglePlot value={26} typeOne />
            <SinglePlot value={27} typeOne />
            <SinglePlot value={28} typeOne />
            <SinglePlot value={29} typeOne />
            <SinglePlot value={30} typeOne />
            <SinglePlot value={31} typeOne />
            <SinglePlot value={32} typeOne />
            <SinglePlot status="booked" value={33} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={44} typeOne />
            <SinglePlot value={43} typeOne />
            <SinglePlot value={42} typeOne />
            <SinglePlot value={41} typeOne />
            <SinglePlot value={40} typeOne />
            <SinglePlot value={39} typeOne />
            <SinglePlot value={38} typeOne />
            <SinglePlot value={37} typeOne />
            <SinglePlot value={36} typeOne />
            <SinglePlot value={35} typeOne />
            <SinglePlot status="booked" value={34} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={45} typeOne />
            <SinglePlot value={46} typeOne />
            <SinglePlot value={47} typeOne />
            <SinglePlot value={48} typeOne />
            <SinglePlot value={49} typeOne />
            <SinglePlot value={50} typeOne />
            <SinglePlot value={51} typeOne />
            <SinglePlot value={52} typeOne />
            <SinglePlot value={53} typeOne />
            <SinglePlot value={54} typeOne />
            <SinglePlot status="booked" value={55} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={66} typeOne />
            <SinglePlot value={65} typeOne />
            <SinglePlot value={64} typeOne />
            <SinglePlot value={63} typeOne />
            <SinglePlot value={62} typeOne />
            <SinglePlot value={61} typeOne />
            <SinglePlot value={60} typeOne />
            <SinglePlot value={59} typeOne />
            <SinglePlot value={58} typeOne />
            <SinglePlot value={57} typeOne />
            <SinglePlot status="booked" value={56} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={67} typeOne />
            <SinglePlot value={68} typeOne />
            <SinglePlot value={69} typeOne />
            <SinglePlot value={70} typeOne />
            <SinglePlot value={71} typeOne />
            <SinglePlot value={72} typeOne />
            <SinglePlot value={73} typeOne />
            <SinglePlot value={74} typeOne />
            <SinglePlot value={75} typeOne />
            <SinglePlot value={76} typeOne />
            <SinglePlot status="booked" value={77} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={88} typeOne />
            <SinglePlot value={87} typeOne />
            <SinglePlot value={86} typeOne />
            <SinglePlot value={85} typeOne />
            <SinglePlot value={84} typeOne />
            <SinglePlot value={83} typeOne />
            <SinglePlot value={82} typeOne />
            <SinglePlot value={81} typeOne />
            <SinglePlot value={80} typeOne />
            <SinglePlot value={79} typeOne />
            <SinglePlot status="booked" value={78} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={89} typeOne />
            <SinglePlot value={90} typeOne />
            <SinglePlot value={91} typeOne />
            <SinglePlot value={92} typeOne />
            <SinglePlot value={93} typeOne />
            <SinglePlot value={94} typeOne />
            <SinglePlot value={95} typeOne />
            <SinglePlot value={96} typeOne />
            <SinglePlot value={97} typeOne />
            <SinglePlot value={98} typeOne />
            <SinglePlot status="booked" value={99} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={110} typeOne />
            <SinglePlot value={109} typeOne />
            <SinglePlot value={108} typeOne />
            <SinglePlot value={107} typeOne />
            <SinglePlot value={106} typeOne />
            <SinglePlot value={105} typeOne />
            <SinglePlot value={104} typeOne />
            <SinglePlot value={103} typeOne />
            <SinglePlot value={102} typeOne />
            <SinglePlot value={101} typeOne />
            <SinglePlot status="booked" value={100} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={111} typeOne />
            <SinglePlot value={112} typeOne />
            <SinglePlot value={113} typeOne />
            <SinglePlot value={114} typeOne />
            <SinglePlot value={115} typeOne />
            <SinglePlot value={116} typeOne />
            <SinglePlot value={117} typeOne />
            <SinglePlot value={118} typeOne />
            <SinglePlot value={119} typeOne />
            <SinglePlot value={120} typeOne />
            <SinglePlot status="booked" value={121} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={132} typeOne />
            <SinglePlot value={131} typeOne />
            <SinglePlot value={130} typeOne />
            <SinglePlot value={129} typeOne />
            <SinglePlot value={128} typeOne />
            <SinglePlot value={127} typeOne />
            <SinglePlot value={126} typeOne />
            <SinglePlot value={125} typeOne />
            <SinglePlot value={124} typeOne />
            <SinglePlot value={123} typeOne />
            <SinglePlot status="booked" value={122} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={133} typeOne />
            <SinglePlot value={134} typeOne />
            <SinglePlot value={135} typeOne />
            <SinglePlot value={136} typeOne />
            <SinglePlot value={137} typeOne />
            <SinglePlot value={138} typeOne />
            <SinglePlot value={139} typeOne />
            <SinglePlot value={140} typeOne />
            <SinglePlot value={141} typeOne />
            <SinglePlot value={142} typeOne />
            <SinglePlot status="booked" value={143} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={154} typeOne />
            <SinglePlot value={153} typeOne />
            <SinglePlot value={152} typeOne />
            <SinglePlot value={151} typeOne />
            <SinglePlot value={150} typeOne />
            <SinglePlot value={149} typeOne />
            <SinglePlot value={148} typeOne />
            <SinglePlot value={147} typeOne />
            <SinglePlot value={146} typeOne />
            <SinglePlot value={145} typeOne />
            <SinglePlot status="booked" value={144} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={155} typeOne />
            <SinglePlot value={156} typeOne />
            <SinglePlot value={157} typeOne />
            <SinglePlot value={158} typeOne />
            <SinglePlot value={159} typeOne />
            <SinglePlot value={160} typeOne />
            <SinglePlot value={161} typeOne />
            <SinglePlot value={162} typeOne />
            <SinglePlot value={163} typeOne />
            <SinglePlot value={164} typeOne />
            <SinglePlot status="booked" value={165} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={176} typeOne />
            <SinglePlot value={175} typeOne />
            <SinglePlot value={174} typeOne />
            <SinglePlot value={173} typeOne />
            <SinglePlot value={172} typeOne />
            <SinglePlot value={171} typeOne />
            <SinglePlot value={170} typeOne />
            <SinglePlot value={169} typeOne />
            <SinglePlot value={168} typeOne />
            <SinglePlot value={167} typeOne />
            <SinglePlot status="booked" value={166} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={177} typeOne />
            <SinglePlot value={178} typeOne />
            <SinglePlot value={179} typeOne />
            <SinglePlot value={180} typeOne />
            <SinglePlot value={181} typeOne />
            <SinglePlot value={182} typeOne />
            <SinglePlot value={183} typeOne />
            <SinglePlot value={184} typeOne />
            <SinglePlot value={185} typeOne />
            <SinglePlot value={186} typeOne />
            <SinglePlot status="booked" value={187} typeOne />
          </Flex>
        </Flex>
      </Flex>
      <Divider>9m road</Divider>
      <Flex gap="large">
        <Flex vertical>
          <SinglePlot value={297} typeOne />
          <SinglePlot value={296} typeOne />
          <SinglePlot value={295} typeOne />
          <SinglePlot value={294} typeOne />
          <SinglePlot value={293} typeOne />
          <SinglePlot value={292} typeOne />
          <SinglePlot value={291} typeOne />
          <SinglePlot value={290} typeOne />
          <SinglePlot value={289} typeOne />
          <SinglePlot value={288} typeOne />
          <SinglePlot value={287} typeOne />
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot value={276} typeOne />
            <SinglePlot value={277} typeOne />
            <SinglePlot value={278} typeOne />
            <SinglePlot value={279} typeOne />
            <SinglePlot value={280} typeOne />
            <SinglePlot value={281} typeOne />
            <SinglePlot value={282} typeOne />
            <SinglePlot value={283} typeOne />
            <SinglePlot value={284} typeOne />
            <SinglePlot value={285} typeOne />
            <SinglePlot value={286} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot value={275} typeOne />
            <SinglePlot value={274} typeOne />
            <SinglePlot value={273} typeOne />
            <SinglePlot value={272} typeOne />
            <SinglePlot value={271} typeOne />
            <SinglePlot value={270} typeOne />
            <SinglePlot value={269} typeOne />
            <SinglePlot value={268} typeOne />
            <SinglePlot value={267} typeOne />
            <SinglePlot value={266} typeOne />
            <SinglePlot value={265} typeOne />
          </Flex>
        </Flex>
        <Flex gap="small">
          <Flex vertical>
            <SinglePlot value={297} typeOne />
            <SinglePlot value={296} typeOne />
            <SinglePlot value={295} typeOne />
            <SinglePlot value={294} typeOne />
            <SinglePlot value={293} typeOne />
            <SinglePlot value={292} typeOne />
            <SinglePlot value={291} typeOne />
            <SinglePlot value={290} typeOne />
            <SinglePlot value={289} typeOne />
            <SinglePlot value={288} typeOne />
            <SinglePlot value={287} typeOne />
          </Flex>
          <SinglePlot value={null} garden />
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot value={253} typeOne />
            <SinglePlot value={252} typeOne />
            <SinglePlot value={251} typeOne />
            <SinglePlot value={251} typeOne />
            <SinglePlot value={249} typeOne />
            <SinglePlot value={248} typeOne />
            <SinglePlot value={247} typeOne />
            <SinglePlot value={246} typeOne />
            <SinglePlot value={245} typeOne />
            <SinglePlot value={244} typeOne />
            <SinglePlot value={243} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot value={232} typeOne />
            <SinglePlot value={233} typeOne />
            <SinglePlot value={234} typeOne />
            <SinglePlot value={235} typeOne />
            <SinglePlot value={236} typeOne />
            <SinglePlot value={237} typeOne />
            <SinglePlot value={238} typeOne />
            <SinglePlot value={239} typeOne />
            <SinglePlot value={240} typeOne />
            <SinglePlot value={241} typeOne />
            <SinglePlot value={242} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot value={231} typeOne />
            <SinglePlot value={230} typeOne />
            <SinglePlot value={229} typeOne />
            <SinglePlot value={228} typeOne />
            <SinglePlot value={227} typeOne />
            <SinglePlot value={226} typeOne />
            <SinglePlot value={225} typeOne />
            <SinglePlot value={224} typeOne />
            <SinglePlot value={223} typeOne />
            <SinglePlot value={222} typeOne />
            <SinglePlot value={221} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot value={210} typeOne />
            <SinglePlot value={211} typeOne />
            <SinglePlot value={212} typeOne />
            <SinglePlot value={213} typeOne />
            <SinglePlot value={214} typeOne />
            <SinglePlot value={215} typeOne />
            <SinglePlot value={216} typeOne />
            <SinglePlot value={217} typeOne />
            <SinglePlot value={218} typeOne />
            <SinglePlot value={219} typeOne />
            <SinglePlot value={220} typeOne />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot value={209} typeOne />
            <SinglePlot value={208} typeOne />
            <SinglePlot value={207} typeOne />
            <SinglePlot value={206} typeOne />
            <SinglePlot value={205} typeOne />
            <SinglePlot value={204} typeOne />
            <SinglePlot value={203} typeOne />
            <SinglePlot value={202} typeOne />
            <SinglePlot value={201} typeOne />
            <SinglePlot value={200} typeOne />
            <SinglePlot value={199} typeOne />
          </Flex>
          <Flex vertical>
            <SinglePlot value={188} typeOne />
            <SinglePlot value={189} typeOne />
            <SinglePlot value={190} typeOne />
            <SinglePlot value={191} typeOne />
            <SinglePlot value={192} typeOne />
            <SinglePlot value={193} typeOne />
            <SinglePlot value={194} typeOne />
            <SinglePlot value={195} typeOne />
            <SinglePlot value={196} typeOne />
            <SinglePlot value={197} typeOne />
            <SinglePlot value={198} typeOne />
          </Flex>
        </Flex>
      </Flex>
      <Divider>9m road</Divider>
    </div>
  );
};

export default Plots;
