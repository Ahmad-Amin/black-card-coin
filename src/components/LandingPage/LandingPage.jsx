import React from "react";
import Banner from "./sections/Banner";
import Feature from "./sections/Feature";
import EconomicStructure from "./sections/EconomicStructure";
import Incentives from "./sections/Incentives";
import WebsiteStructure from './sections/WebsiteStructure'
import Footer from "./sections/Footer";
import Navigation from "./sections/Navigation";
import FaqSection from "./sections/FaqSection";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const LandingPage = () => {

  return (
    <>
      <Banner />
      <div className=" flex justify-center items-center flex-col gap-4">
        <h2 className=" font-semibold text-5xl">
          Discover{" "}
          <span className=" text-customGreen uppercase">blackcard</span>
        </h2>
        <p className=" text-2xl font-semibold">
          Unlocking Your Crypto's Full Potential
        </p>
        <p className="leading-[24px] font-light text-base w-7/12 mx-auto text-center">
          BLACKCARD by BlackCardCoin.com offers a groundbreaking solution to
          seamlessly integrate your cryptocurrency into everyday life. With the
          privilege to participate in the ecosystem's profits through staking,
          BLACKCARD revolutionizes your digital assets experience. Leap beyond
          traditional financial limitations and embrace the future of spending.
        </p>
      </div>
      <Feature />

      <div className=" flxe justify-center items-center">
        <p className=" text-center font-medium text-5xl">
          <span className="text-customGreen">BCCoin and BLACK CARD</span> in
          numbers
        </p>
        <div className=" grid grid-cols-2 mt-24">
          <div className="  border-white flex items-end justify-end">
            <div className="border-r border-b w-auto inline-block p-5 lg:p-10">
              <div className=" flex gap-5 flex-col">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <p  className=" font-medium text-2xl md:text-5xl text-right" style={{ height: 50 }}>
                      {isVisible ? <span><CountUp end={1932234} separator=","  duration={3} />+</span> : <span>0</span>}
                    </p>
                  )}
                </VisibilitySensor>
                <p className=" font-medium text-2xl text-right">Registered Members</p>
              </div>
            </div>
          </div>
          <div className=" border-white">
            <div className=" border-b w-auto inline-block p-5 lg:p-10">
              <div className=" flex gap-5 flex-col">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <p  className=" font-medium text-2xl md:text-5xl text-left" style={{ height: 50 }}>
                      {isVisible ? <span><CountUp end={1932234} separator="," duration={3} />+</span> : <span>0</span>}
                    </p>
                  )}
                </VisibilitySensor>
                <p className=" font-medium text-2xl text-left">Total Staked $BCCoin</p>
              </div>
            </div>
          </div>
          <div className=" border-white flex items-end justify-end">
            <div className="border-r w-auto inline-block p-5 lg:p-10">
              <div className=" flex gap-5 flex-col">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <p  className=" font-medium text-2xl md:text-5xl text-right" style={{ height: 50 }}>
                      {isVisible ? <span><CountUp end={99234} separator="," duration={3}/>k</span> : <span>0k</span>}
                    </p>
                  )}
                </VisibilitySensor>
                <p className=" font-medium text-2xl text-right">Deposit BLACKCARD</p>
              </div>
            </div>
          </div>

          <div className=" border-white">
            <div className=" w-auto inline-block p-5 lg:p-10">
              <div className=" flex gap-5 flex-col">
                <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                  {({ isVisible }) => (
                    <p  className=" font-medium text-2xl md:text-5xl text-left" style={{ height: 50 }}>
                      {isVisible ? <span><CountUp end={932234} separator="," duration={3}/>+</span> : <span>0</span>}
                    </p>
                  )}
                </VisibilitySensor>
                <p className=" font-medium text-2xl text-left">Distributed Cashback</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <EconomicStructure />
      <Incentives />
      <WebsiteStructure />
      <FaqSection />
      <Footer />

    </>
  );
};

export default LandingPage;
