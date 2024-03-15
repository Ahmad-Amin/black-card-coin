import React from "react";
import mobileImage from "../../../assets/mobileimage2.png";

import mobileInHand from "../../../assets/mobileInHand.svg";
import headset from "../../../assets/headset.svg";
import lock from "../../../assets/lock.svg";

const Feature = () => {
  return (
    <div className=" container mx-auto">
      <div className=" grid lg:grid-cols-2 my-12">
      <div className=" flex justify-end items-center">
        <img src={mobileImage} />
      </div>
      <div className=" flex flex-col justify-center p-8 lg:p-0 w-auto items-center lg:items-start">
        <div className=" flex flex-col gap-14">
          <h1 className=" font-medium text-6xl  ">
            Key Features of <span className=" text-customGreen">BlackCard</span>
          </h1>
          <p className=" font-thin text-xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>

          <div className="flex flex-row gap-7">
            <div className="flex justify-center items-center">
              <div className=" bg-customPurple w-20 h-20  rounded-full relative  ">
                <img  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src={ mobileInHand} />
              </div>
            </div>

            <div className=" flex flex-col justify-around">
              <p className=" text-customPurple font-semibold text-lg">
                Global Acceptance
              </p>
              <p className="leading-[24px] font-light text-base">
                Use you BlackCard wherever Visa is accepted worldwide
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-7">
            <div className="flex justify-center items-center">
              <div className=" bg-customPurple w-20 h-20  rounded-full relative  ">
                <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={ headset} />
              </div>
            </div>
            <div className=" flex flex-col justify-around">
              <p className=" text-customPurple font-semibold text-lg">
                Rewards for Early Birds
              </p>
              <p className="leading-[24px] font-light text-base">
                Stake a minimum of 1,000 $BCCOIN for 6 months and become part of
                an exclusive circle that benefits more as the value escalates.
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-7">
            <div className="flex justify-center items-center">
              <div className=" bg-customPurple w-20 h-20  rounded-full relative ">
                <img  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"  src={ lock} />
              </div>
            </div>
            <div className=" flex flex-col justify-around">
              <p className=" text-customPurple font-semibold text-lg">
                Limitless and Commission-free Transactions
              </p>
              <p className="leading-[24px] font-light text-base ">
                Enjoy limitless spending without additional fees on
                transactions. A nominal one-time 5% commission applies to crypto
                deposits. KYC-free for a seamless experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Feature;
