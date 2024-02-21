import { Modal, Flex, Divider, Button } from "antd";
import SinglePlot from "../components/SinglePlot";

const PlotsLayout = () => {
  return (
    <div className="PlotsWrapper">
      <Flex gap="large">
        <Flex vertical>
          <SinglePlot status="booked" value={1} />
          <SinglePlot value={2} />
          <SinglePlot value={3} />
          <SinglePlot value={4} />
          <SinglePlot value={5} />
          <SinglePlot value={6} />
          <SinglePlot value={7} />
          <SinglePlot value={8} />
          <SinglePlot value={9} />
          <SinglePlot value={10} />
          <SinglePlot status="booked" value={11} />
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={22} />
            <SinglePlot value={21} />
            <SinglePlot value={20} />
            <SinglePlot value={19} />
            <SinglePlot value={18} />
            <SinglePlot value={17} />
            <SinglePlot value={16} />
            <SinglePlot value={15} />
            <SinglePlot value={14} />
            <SinglePlot value={13} />
            <SinglePlot status="booked" value={12} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={23} />
            <SinglePlot value={24} />
            <SinglePlot value={25} />
            <SinglePlot value={26} />
            <SinglePlot value={27} />
            <SinglePlot value={28} />
            <SinglePlot value={29} />
            <SinglePlot value={30} />
            <SinglePlot value={31} />
            <SinglePlot value={32} />
            <SinglePlot status="booked" value={33} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={44} />
            <SinglePlot value={43} />
            <SinglePlot value={42} />
            <SinglePlot value={41} />
            <SinglePlot value={40} />
            <SinglePlot value={39} />
            <SinglePlot value={38} />
            <SinglePlot value={37} />
            <SinglePlot value={36} />
            <SinglePlot value={35} />
            <SinglePlot status="booked" value={34} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={45} />
            <SinglePlot value={46} />
            <SinglePlot value={47} />
            <SinglePlot value={48} />
            <SinglePlot value={49} />
            <SinglePlot value={50} />
            <SinglePlot value={51} />
            <SinglePlot value={52} />
            <SinglePlot value={53} />
            <SinglePlot value={54} />
            <SinglePlot status="booked" value={55} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={66} />
            <SinglePlot value={65} />
            <SinglePlot value={64} />
            <SinglePlot value={63} />
            <SinglePlot value={62} />
            <SinglePlot value={61} />
            <SinglePlot value={60} />
            <SinglePlot value={59} />
            <SinglePlot value={58} />
            <SinglePlot value={57} />
            <SinglePlot status="booked" value={56} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={67} />
            <SinglePlot value={68} />
            <SinglePlot value={69} />
            <SinglePlot value={70} />
            <SinglePlot value={71} />
            <SinglePlot value={72} />
            <SinglePlot value={73} />
            <SinglePlot value={74} />
            <SinglePlot value={75} />
            <SinglePlot value={76} />
            <SinglePlot status="booked" value={77} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={88} />
            <SinglePlot value={87} />
            <SinglePlot value={86} />
            <SinglePlot value={85} />
            <SinglePlot value={84} />
            <SinglePlot value={83} />
            <SinglePlot value={82} />
            <SinglePlot value={81} />
            <SinglePlot value={80} />
            <SinglePlot value={79} />
            <SinglePlot status="booked" value={78} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={89} />
            <SinglePlot value={90} />
            <SinglePlot value={91} />
            <SinglePlot value={92} />
            <SinglePlot value={93} />
            <SinglePlot value={94} />
            <SinglePlot value={95} />
            <SinglePlot value={96} />
            <SinglePlot value={97} />
            <SinglePlot value={98} />
            <SinglePlot status="booked" value={99} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={110} />
            <SinglePlot value={109} />
            <SinglePlot value={108} />
            <SinglePlot value={107} />
            <SinglePlot value={106} />
            <SinglePlot value={105} />
            <SinglePlot value={104} />
            <SinglePlot value={103} />
            <SinglePlot value={102} />
            <SinglePlot value={101} />
            <SinglePlot status="booked" value={100} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={111} />
            <SinglePlot value={112} />
            <SinglePlot value={113} />
            <SinglePlot value={114} />
            <SinglePlot value={115} />
            <SinglePlot value={116} />
            <SinglePlot value={117} />
            <SinglePlot value={118} />
            <SinglePlot value={119} />
            <SinglePlot value={120} />
            <SinglePlot status="booked" value={121} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={132} />
            <SinglePlot value={131} />
            <SinglePlot value={130} />
            <SinglePlot value={129} />
            <SinglePlot value={128} />
            <SinglePlot value={127} />
            <SinglePlot value={126} />
            <SinglePlot value={125} />
            <SinglePlot value={124} />
            <SinglePlot value={123} />
            <SinglePlot status="booked" value={122} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={133} />
            <SinglePlot value={134} />
            <SinglePlot value={135} />
            <SinglePlot value={136} />
            <SinglePlot value={137} />
            <SinglePlot value={138} />
            <SinglePlot value={139} />
            <SinglePlot value={140} />
            <SinglePlot value={141} />
            <SinglePlot value={142} />
            <SinglePlot status="booked" value={143} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={154} />
            <SinglePlot value={153} />
            <SinglePlot value={152} />
            <SinglePlot value={151} />
            <SinglePlot value={150} />
            <SinglePlot value={149} />
            <SinglePlot value={148} />
            <SinglePlot value={147} />
            <SinglePlot value={146} />
            <SinglePlot value={145} />
            <SinglePlot status="booked" value={144} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={155} />
            <SinglePlot value={156} />
            <SinglePlot value={157} />
            <SinglePlot value={158} />
            <SinglePlot value={159} />
            <SinglePlot value={160} />
            <SinglePlot value={161} />
            <SinglePlot value={162} />
            <SinglePlot value={163} />
            <SinglePlot value={164} />
            <SinglePlot status="booked" value={165} />
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={176} />
            <SinglePlot value={175} />
            <SinglePlot value={174} />
            <SinglePlot value={173} />
            <SinglePlot value={172} />
            <SinglePlot value={171} />
            <SinglePlot value={170} />
            <SinglePlot value={169} />
            <SinglePlot value={168} />
            <SinglePlot value={167} />
            <SinglePlot status="booked" value={166} />
          </Flex>
          <Flex vertical>
            <SinglePlot status="booked" value={177} />
            <SinglePlot value={178} />
            <SinglePlot value={179} />
            <SinglePlot value={180} />
            <SinglePlot value={181} />
            <SinglePlot value={182} />
            <SinglePlot value={183} />
            <SinglePlot value={184} />
            <SinglePlot value={185} />
            <SinglePlot value={186} />
            <SinglePlot status="booked" value={187} />
          </Flex>
        </Flex>
      </Flex>
      <Divider>9m road</Divider>
      <Flex gap="large">
        <Flex vertical>
          <SinglePlot value={297} />
          <SinglePlot value={296} />
          <SinglePlot value={295} />
          <SinglePlot value={294} />
          <SinglePlot value={293} />
          <SinglePlot value={292} />
          <SinglePlot value={291} />
          <SinglePlot value={290} />
          <SinglePlot value={289} />
          <SinglePlot value={288} />
          <SinglePlot value={287} />
        </Flex>
        <Flex>
          <Flex vertical>
            <SinglePlot value={276} />
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
          <Button
            disabled
            style={{ width: "500px", height: "495px", fontSize: "large" }}
          >
            Open Space/Garden
          </Button>
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
      <Flex vertical gap={"large"}>
        <Flex>
          <Flex vertical>
            <Flex horizontal>
              <SinglePlot value={366} />
              <SinglePlot value={365} />
              <SinglePlot value={364} />
              <SinglePlot value={363} />
              <SinglePlot value={362} />
              <SinglePlot value={361} />
              <SinglePlot value={360} />
              <SinglePlot value={359} />
              <SinglePlot value={358} />
              <SinglePlot value={357} />
              <SinglePlot value={356} />
              <SinglePlot value={355} />
              <SinglePlot value={354} />
            </Flex>
            <Flex horizontal>
              <SinglePlot value={367} />
              <SinglePlot value={368} />
              <SinglePlot value={369} />
              <SinglePlot value={370} />
              <SinglePlot value={371} />
              <SinglePlot value={372} />
              <SinglePlot value={373} />
              <SinglePlot value={374} />
              <SinglePlot value={375} />
              <SinglePlot value={376} />
              <SinglePlot value={377} />
              <SinglePlot value={378} />
              <SinglePlot value={379} />
            </Flex>
          </Flex>
          <Flex vertical>
            <Flex>
              <Button style={{ width: "62px", height: "30px" }}>385</Button>
              <Button style={{ width: "62px", height: "30px" }}>384</Button>
            </Flex>
            <Flex>
              <Button style={{ width: "124px", height: "30px" }}>383</Button>
            </Flex>
            <Flex>
              <Button style={{ width: "62px", height: "30px" }}>380</Button>
              <Button style={{ width: "62px", height: "30px" }}>381</Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Flex vertical>
            <Flex horizontal>
              <SinglePlot value={366} />
              <SinglePlot value={365} />
              <SinglePlot value={364} />
              <SinglePlot value={363} />
              <SinglePlot value={362} />
              <SinglePlot value={361} />
              <SinglePlot value={360} />
              <SinglePlot value={359} />
              <SinglePlot value={358} />
              <SinglePlot value={357} />
              <SinglePlot value={356} />
              <SinglePlot value={355} />
              <SinglePlot value={354} />
            </Flex>
            <Flex horizontal>
              <SinglePlot value={367} />
              <SinglePlot value={368} />
              <SinglePlot value={369} />
              <SinglePlot value={370} />
              <SinglePlot value={371} />
              <SinglePlot value={372} />
              <SinglePlot value={373} />
              <SinglePlot value={374} />
              <SinglePlot value={375} />
              <SinglePlot value={376} />
              <SinglePlot value={377} />
              <SinglePlot value={378} />
              <SinglePlot value={379} />
            </Flex>
          </Flex>
          <Flex vertical>
            <Flex>
              <Button style={{ width: "62px", height: "30px" }}>385</Button>
              <Button style={{ width: "62px", height: "30px" }}>384</Button>
            </Flex>
            <Flex>
              <Button style={{ width: "124px", height: "30px" }}>383</Button>
            </Flex>
            <Flex>
              <Button style={{ width: "62px", height: "30px" }}>380</Button>
              <Button style={{ width: "62px", height: "30px" }}>381</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider>12m road</Divider>
      <Flex vertical gap={"large"}>
        <Flex gap={"small"} horizontal>
          <Flex>
            <Flex vertical>
              <Flex horizontal>
                <SinglePlot value={366} />
                <SinglePlot value={365} />
                <SinglePlot value={364} />
                <SinglePlot value={363} />
                <SinglePlot value={362} />
                <SinglePlot value={361} />
                <SinglePlot value={360} />
                <SinglePlot value={359} />
              </Flex>
              <Flex horizontal>
                <SinglePlot value={367} />
                <SinglePlot value={368} />
                <SinglePlot value={369} />
                <SinglePlot value={370} />
                <SinglePlot value={371} />
                <SinglePlot value={372} />
                <SinglePlot value={373} />
                <SinglePlot value={374} />
              </Flex>
            </Flex>
            <Flex vertical>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>385</Button>
                <Button style={{ width: "62px", height: "30px" }}>384</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "124px", height: "30px" }}>383</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>380</Button>
                <Button style={{ width: "62px", height: "30px" }}>381</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex vertical>
              <Flex horizontal>
                <SinglePlot value={366} />
                <SinglePlot value={365} />
                <SinglePlot value={364} />
                <SinglePlot value={363} />
                <SinglePlot value={362} />
                <SinglePlot value={361} />
                <SinglePlot value={360} />
                <SinglePlot value={359} />
              </Flex>
              <Flex horizontal>
                <SinglePlot value={367} />
                <SinglePlot value={368} />
                <SinglePlot value={369} />
                <SinglePlot value={370} />
                <SinglePlot value={371} />
                <SinglePlot value={372} />
                <SinglePlot value={373} />
                <SinglePlot value={374} />
              </Flex>
            </Flex>
            <Flex vertical>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>385</Button>
                <Button style={{ width: "62px", height: "30px" }}>384</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "124px", height: "30px" }}>383</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>380</Button>
                <Button style={{ width: "62px", height: "30px" }}>381</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap={"small"} horizontal>
          <Flex>
            <Flex vertical>
              <Flex horizontal>
                <SinglePlot value={366} />
                <SinglePlot value={365} />
                <SinglePlot value={364} />
                <SinglePlot value={363} />
                <SinglePlot value={362} />
                <SinglePlot value={361} />
                <SinglePlot value={360} />
                <SinglePlot value={359} />
              </Flex>
              <Flex horizontal>
                <SinglePlot value={367} />
                <SinglePlot value={368} />
                <SinglePlot value={369} />
                <SinglePlot value={370} />
                <SinglePlot value={371} />
                <SinglePlot value={372} />
                <SinglePlot value={373} />
                <SinglePlot value={374} />
              </Flex>
            </Flex>
            <Flex vertical>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>385</Button>
                <Button style={{ width: "62px", height: "30px" }}>384</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "124px", height: "30px" }}>383</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>380</Button>
                <Button style={{ width: "62px", height: "30px" }}>381</Button>
              </Flex>
            </Flex>
          </Flex>
          <Flex>
            <Flex vertical>
              <Flex horizontal>
                <SinglePlot value={366} />
                <SinglePlot value={365} />
                <SinglePlot value={364} />
                <SinglePlot value={363} />
                <SinglePlot value={362} />
                <SinglePlot value={361} />
                <SinglePlot value={360} />
                <SinglePlot value={359} />
              </Flex>
              <Flex horizontal>
                <SinglePlot value={367} />
                <SinglePlot value={368} />
                <SinglePlot value={369} />
                <SinglePlot value={370} />
                <SinglePlot value={371} />
                <SinglePlot value={372} />
                <SinglePlot value={373} />
                <SinglePlot value={374} />
              </Flex>
            </Flex>
            <Flex vertical>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>385</Button>
                <Button style={{ width: "62px", height: "30px" }}>384</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "124px", height: "30px" }}>383</Button>
              </Flex>
              <Flex>
                <Button style={{ width: "62px", height: "30px" }}>380</Button>
                <Button style={{ width: "62px", height: "30px" }}>381</Button>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider>9m road</Divider>
      <Flex gap="large">
        <Button
          disabled
          style={{ width: "500px", height: "595px", fontSize: "large" }}
        >
          Open Space/Garden
        </Button>
        <Flex gap="small" horizontal>
          <Flex vertical>
            <Flex horizontal>
              <Button style={{ height: "70px" }}>519</Button>
              <Button style={{ height: "70px" }}>518</Button>
              <Button style={{ height: "70px" }}>517</Button>
              <Button style={{ height: "70px" }}>516</Button>
              <Button style={{ height: "70px" }}>515</Button>
            </Flex>
            <Flex horizontal>
              <Button style={{ width: "138px", height: "89px" }}>520</Button>
              <Button style={{ width: "138px", height: "89px" }}>532</Button>
            </Flex>
            <Flex horizontal>
              <Button style={{ width: "138px", height: "89px" }}>521</Button>
              <Button style={{ width: "138px", height: "89px" }}>531</Button>
            </Flex>
            <Flex horizontal>
              <Button style={{ width: "138px", height: "89px" }}>522</Button>
              <Button style={{ width: "138px", height: "89px" }}>530</Button>
            </Flex>
            <Flex horizontal>
              <Button style={{ width: "138px", height: "89px" }}>523</Button>
              <Button style={{ width: "138px", height: "89px" }}>529</Button>
            </Flex>
            <Flex horizontal>
              <Button style={{ height: "70px" }}>519</Button>
              <Button style={{ height: "70px" }}>518</Button>
              <Button style={{ height: "70px" }}>517</Button>
              <Button style={{ height: "70px" }}>516</Button>
              <Button style={{ height: "70px" }}>515</Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex gap="small" horizontal>
          <Flex vertical>
            <Button style={{ height: "62px" }}>533</Button>
            <Button style={{ height: "62px" }}>534</Button>
            <Button style={{ height: "62px" }}>535</Button>
            <Button style={{ height: "62px" }}>536</Button>
            <Button style={{ height: "62px" }}>537</Button>
            <Button style={{ height: "62px" }}>538</Button>
            <Button style={{ height: "62px" }}>539</Button>
            <Button style={{ height: "62px" }}>540</Button>
          </Flex>
          <Flex vertical>
            <Button style={{ height: "62px" }}>548</Button>
            <Button style={{ height: "62px" }}>547</Button>
            <Button style={{ height: "62px" }}>546</Button>
            <Button style={{ height: "62px" }}>545</Button>
            <Button style={{ height: "62px" }}>544</Button>
            <Button style={{ height: "62px" }}>543</Button>
            <Button style={{ height: "62px" }}>542</Button>
            <Button style={{ height: "62px" }}>541</Button>
          </Flex>
        </Flex>
        <Flex gap="small" horizontal>
          <Flex vertical>
            <Button style={{ height: "62px" }}>533</Button>
            <Button style={{ height: "62px" }}>534</Button>
            <Button style={{ height: "62px" }}>535</Button>
            <Button style={{ height: "62px" }}>536</Button>
            <Button style={{ height: "62px" }}>537</Button>
            <Button style={{ height: "62px" }}>538</Button>
            <Button style={{ height: "62px" }}>539</Button>
            <Button style={{ height: "62px" }}>540</Button>
          </Flex>
          <Flex vertical>
            <Button style={{ height: "62px" }}>548</Button>
            <Button style={{ height: "62px" }}>547</Button>
            <Button style={{ height: "62px" }}>546</Button>
            <Button style={{ height: "62px" }}>545</Button>
            <Button style={{ height: "62px" }}>544</Button>
            <Button style={{ height: "62px" }}>543</Button>
            <Button style={{ height: "62px" }}>542</Button>
            <Button style={{ height: "62px" }}>541</Button>
          </Flex>
        </Flex>
        <Flex gap="small" horizontal>
          <Flex vertical>
            <Button style={{ height: "62px" }}>533</Button>
            <Button style={{ height: "62px" }}>534</Button>
            <Button style={{ height: "62px" }}>535</Button>
            <Button style={{ height: "62px" }}>536</Button>
            <Button style={{ height: "62px" }}>537</Button>
            <Button style={{ height: "62px" }}>538</Button>
            <Button style={{ height: "62px" }}>539</Button>
            <Button style={{ height: "62px" }}>540</Button>
          </Flex>
          <Flex vertical>
            <Button style={{ height: "62px" }}>548</Button>
            <Button style={{ height: "62px" }}>547</Button>
            <Button style={{ height: "62px" }}>546</Button>
            <Button style={{ height: "62px" }}>545</Button>
            <Button style={{ height: "62px" }}>544</Button>
            <Button style={{ height: "62px" }}>543</Button>
            <Button style={{ height: "62px" }}>542</Button>
            <Button style={{ height: "62px" }}>541</Button>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

const PlotsLayoutModal = ({
  title,
  show,
  handleModalOk,
  handleModalCancel,
}) => {
  return (
    <Modal
      centered
      title={title}
      open={show}
      onOk={handleModalOk}
      onCancel={handleModalCancel}
      width={1300}
    >
      <PlotsLayout />
    </Modal>
  );
};

export default PlotsLayoutModal;
