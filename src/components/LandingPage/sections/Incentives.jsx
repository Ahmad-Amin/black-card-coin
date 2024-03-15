import React from "react";
import incentivesBg from "../../../assets/incentiveBg.png";
import { Reveal } from "../../util/Reveal";

const Incentives = () => {
  return (
    <div className=" relative">
      <img className=" absolute -top-12 right-0" src={incentivesBg} />
      <div className=" my-10 container mx-auto">
        <Reveal>
          <p className=" font-medium text-center text-5xl my-24">
            User Incentives / Cashback
          </p>
        </Reveal>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <Reveal>
            <div className=" flex flex-col p-8">
              <p className=" text-customPurple font-semibold text-lg">
                Immediate Benefits
              </p>
              <p className="leading-[24px] font-extralight text-base mt-5">
                Stake 1,000 $BCCOIN and receive up to 10% of the staked amount
                in USDT on the same day. A physical debit card, loaded with your
                USDT, arrives within 5 days, free of charge.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className=" flex flex-col p-8">
              <p className=" text-customPurple font-semibold text-lg">
                Earn as You Spend
              </p>
              <p className="leading-[24px] font-extralight text-base mt-5">
                Enjoy up to 10% cashback in $BCCOIN tokens on every purchase,
                locked for 6 months, maximising your monthly earnings up to 10%
                of staked $BCCOIN from the strategic reserve pool.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className=" flex flex-col p-8">
              <p className=" text-customPurple font-semibold text-lg">
                Shared Success
              </p>
              <p className="leading-[24px] font-extralight text-base mt-5">
                3% of the transaction commission fees are distributed among
                stakeholders, rewarding higher commitments with larger shares
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className=" my-24">
            <p className=" font-medium text-center text-5xl my-7">
              Technological Infrastructure
            </p>
            <p className="font-medium text-center text-2xl">
              Futuristic and Trusted
            </p>
            <p className="leading-[24px] font-extralight text-base my-8 w-6/12 mx-auto text-center">
              Utilizing the latest in blockchain and AI-driven liquidity
              management, $BCCOIN promises unlimited transaction capabilities
              within a secure and transparent platform. Transitioning to our
              BCChain will further enhance native token utility and network
              efficiency.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <p className=" text-left font-medium text-5xl mt-14 p-5 lg:p-0">
            Our Roadmap since <p className="text-customGreen">the Beginning</p>
          </p>
        </Reveal>
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-7 md:border md:border-black rounded-2xl mt-16">
          <Reveal>
            <div className=" flex flex-col p-8 md:border-r md:border-black gap-4">
              <p className=" text-customPurple font-semibold text-2xl">
                September 2023
              </p>
              <p className="  font-semibold text-3xl mt-4">
                Flyback was founded
              </p>
              <p className="leading-[24px] font-extralight text-base mt-5">
                Stake 1,000 $BCCOIN and receive up to 10% of the staked amount
                in USDT on the same day. A physical debit card, loaded with your
                USDT, arrives within 5 days, free of charge.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className=" flex flex-col p-8 md:border-r md:border-black  gap-4">
              <p className=" text-customPurple font-semibold text-2xl">
                October 2023
              </p>
              <p className="  font-semibold text-3xl mt-4">
                Programming of our presale back office
              </p>
              <p className="leading-[24px] font-extralight text-base mt-5">
                Stake 1,000 $BCCOIN and receive up to 10% of the staked amount
                in USDT on the same day. A physical debit card, loaded with your
                USDT, arrives within 5 days, free of charge.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className=" flex flex-col p-8  gap-4">
              <p className=" text-customPurple font-semibold text-2xl">
                November 2023
              </p>
              <p className="  font-semibold text-3xl mt-4">
                License applied for the Coin
              </p>
              <p className="leading-[24px] font-extralight text-base mt-5">
                Stake 1,000 $BCCOIN and receive up to 10% of the staked amount
                in USDT on the same day. A physical debit card, loaded with your
                USDT, arrives within 5 days, free of charge.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Incentives;
