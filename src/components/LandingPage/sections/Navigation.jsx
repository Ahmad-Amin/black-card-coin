import React from "react";
import whiteLogo from "../../../assets/whiteLogo.png";

const Navigation = () => {
  return (
    <div className=" w-full lg:px-12 px-6 py-3">
      <div className=" flex md:flex-row flex-col md:items-center gap-5 justify-between">
        <div>
          <img className=" w-auto" src={whiteLogo} />
        </div>
        <div className=" flex flex-row xl:gap-24 lg:gap-12 gap-6 items-center">
          <button className="tracking-[1.5px] uppercase bg-customGreen hover:bg-lime-400 transform duration-150 rounded-full px-6 py-3 text-white font-semibold">
            Buy now
          </button>
          <span className=" uppercase transform text-white duration-200 hover:text-customGreen cursor-pointer">
            home
          </span>
          <span className=" uppercase transform text-white duration-200 hover:text-customGreen cursor-pointer">
            contact us
          </span>
          <span className=" uppercase transform text-white duration-200 hover:text-customGreen cursor-pointer">
            login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
