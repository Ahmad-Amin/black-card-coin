import React from "react";
import mobile from "../../assets/mobileimage.png";
import whiteLogo from "../../assets/whiteLogo.png";

const Login = () => {
  return (
    <div
      className="h-auto lg:h-screen relative flex justify-center items-center"
      style={{
        background:
          "linear-gradient(195.75deg, rgba(129, 118, 255, 0.52) 0%, #151518 42%)",
      }}
    >
      <div className=" absolute top-0 left-0 p-8 max-w-full h-auto">
        <img src={whiteLogo} />
      </div>
      <div className=" container mx-auto">
        <div className="grid lg:grid-cols-2 ">
        <div className=" flex justify-center items-center">
          <img src={mobile} />
        </div>
        <div className=" flex flex-col justify-center p-12 items-center">
          <div className=" flex flex-col gap-5">
            <h1 className=" font-medium text-5xl uppercase">
              <span className="  text-customPurple">BLACK</span> CARD COIN
            </h1>
            <p className=" font-bold text-lg">Nice to see you again</p>

            <div className=" flex flex-col gap-5">
              <div className=" flex flex-col">
                <label className=" text-gray-700 text-xs mb-1">Login</label>
                <input
                  className=" bg-gray-700 text-gray-300 px-4 py-2 rounded-md"
                  type="text"
                  placeholder="Email or Phone Number"
                />
              </div>
              <div className=" flex flex-col">
                <label className=" text-gray-700 text-xs mb-1">Password</label>
                <input
                  className=" bg-gray-700 text-gray-300 px-4 py-2 rounded-md"
                  type="text"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className=" flex flex-row justify-between">
              <p className=" flex items-center gap-3">
                <label class="inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" class="sr-only peer" />
                  <div class="relative w-11 h-5 bg-gray-600 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
                <span>Remember Me</span>
              </p>
              <a href="#" className="text-blue-600 ml-2">
                Forgot password
              </a>
            </div>
            <button className=" bg-blue-600 text-black py-3 block font-bold rounded-lg">
              Sign In
            </button>
            <p className=" text-center border-t border-t-gray-500 pt-3">
              Don't have an account{" "}
              <span className=" uppercase text-blue-600 ml-2">buy now?</span>
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
