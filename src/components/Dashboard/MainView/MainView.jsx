import React from "react";
import adminDashboardChart from "../../../assets/adminDashboardChart.svg";
import profileImage from "../../../assets/profileImage.svg";
import StakePurchaseHistory from "../Tables/StakePurchaseHistory";
import Icon2 from '../../../assets/icon2.svg'

const MainView = () => {
  return (
    <div className=" grid grid-cols-4">
      <div className=" col-span-3 pt-10 py-10">
        <p className=" font-normal text-sm text-gray-500">Dashboard</p>
        <div className=" flex flex-row justify-between items-center">
          <h2 className=" text-3xl font-semibold uppercase my-6">Dashboard</h2>
          <p className=" text-customPurple font-semibold text-base cursor-pointer flex items-end group">
            More Assets
            <span className="text-3xl transition-transform transform group-hover:translate-x-1">
              &rarr;
            </span>
          </p>
        </div>

        <p className=" text-customPurple font-semibold text-lg mt-3 mb-4">
          Black Card Coin
        </p>
        <div className=" bg-customPurple rounded-xl inline-block p-5">
          <p className="text-4xl font-medium">$</p>
          <div className=" flex flex-row gap-12 items-center">
            <p className=" text-5xl font-medium leading-[52px]">1,820</p>
            <img src={adminDashboardChart} />
          </div>
          <div className=" flex flex-row gap-6 justify-between mt-3">
            <div>
              <p className=" font-medium text-xs">Profit</p>
              <p className=" font-medium text-sm text-green-300">+2,87%</p>
            </div>
            <div>
              <p className=" font-medium text-xs">Loss</p>
              <p className=" font-medium text-sm text-red-500">-0,17%</p>
            </div>
            <div>
              <p className=" font-medium text-xs">Neutral</p>
              <p className=" font-medium text-sm text-slate-300">+2,70%</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-row justify-between items-center my-6">
          <h2 className=" text-3xl font-medium uppercase">staked</h2>
          <p className=" text-customPurple font-semibold text-base cursor-pointer flex items-end group">
            More Activity
            <span className="text-3xl transition-transform transform group-hover:translate-x-1">
              &rarr;
            </span>
          </p>
        </div>
      </div>
      <div className=" flex justify-center flex-col items-center ">
        <p className=" font-bold text-lg">Profile</p>
        <div className=" my-6">
          <img src={profileImage} />
        </div>
        <p className=" font-bold text-base">Han Ji Pyeong</p>
        <p className=" text-customPurple font-medium text-sm my-4 cursor-pointer">
          Edit Profile
        </p>
        <div className="">
          <p className=" font-bold text-base mb-2">Account</p>
          <div className=" flex flex-col gap-3">
            <div className=" flex flex-row justify-between">
              <p className=" font-medium text-sm text-gray-500">Joined</p>
              <p className=" font-medium text-sm text-gray-300">
                June 22, 2020
              </p>
            </div>
            <div className=" flex flex-row gap-8 justify-between">
              <p className=" font-medium text-sm text-gray-500">Coin Value</p>
              <p className=" font-medium text-sm text-gray-300">
                $1,328,240.00
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" col-span-4">
        <StakePurchaseHistory />
      </div>

      <div className=" col-span-4">
        <div class="bg-dashboardCustomPurple rounded-xl p-6 relative overflow-x-auto">
          <table class=" w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
            <thead class="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
                >
                  Commission
                </th>
                <th
                  scope="col"
                  className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
                >
                  You will receive
                </th>
                <th
                  scope="col"
                  className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
                >
                  Link
                </th>                
              </tr>
            </thead>
            <tbody>
              <tr class=" dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-3 font-medium text-white whitespace-nowrap dark:text-white"
                >
                  <div className=" flex flex-row items-center gap-3">
                    <div className=" bg-black rounded-md flex justify-center items-center w-10 h-10">
                      <img src={Icon2} />
                    </div>
                    <p>BC COIN</p>
                  </div>
                </th>
                <td class="px-6 py-3">10%</td>
                <td class="px-6 py-3 text-red-500">$50</td>
                <td class="px-6 py-3">
                  <p className=" hover:bg-gray-700 duration-150 transform cursor-pointer text-white bg-black rounded-2xl px-4 py-2 inline-block">Get Link</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainView;
