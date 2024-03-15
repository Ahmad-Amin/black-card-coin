import React from "react";
import mobile from "../../../assets/mobileimage.png";
import Navigation from "./Navigation";

const Banner = () => {
  return (
    <div
      className="h-auto lg:h-screen"
      style={{
        background:
          "linear-gradient(195.75deg, rgba(129, 118, 255, 0.52) 0%, #151518 42%)",
      }}
    >
      <Navigation />
      <div className=" container mx-auto">
        <div className="grid lg:grid-cols-2 ">
        <div className=" flex flex-col justify-center p-12 ">
          <div className=" flex flex-col gap-8 lg:gap-14">
            <h1 className=" font-medium text-xl md:text-4xl xl:text-6xl uppercase">
              <p className=" text-customGreen">Welcome To</p> BlackCardCoin.com
            </h1>
            <p className=" font-thin text-2xl uppercase">
              revolutionizing the way you use crypto
            </p>

            <div className=" flex flex-row gap-5">
              <button className="tracking-[1.5px] uppercase bg-customGreen hover:bg-lime-400 transform duration-150 rounded-full px-6 py-3 text-white font-semibold">
                Buy now
              </button>
              <button className="tracking-[1.5px] uppercase">
                download whitepaper
              </button>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <img className="max-w-full h-auto" src={mobile} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Banner;
