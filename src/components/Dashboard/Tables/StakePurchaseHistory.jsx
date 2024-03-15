import React from "react";
import Icon1 from '../../../assets/icon1.svg'
import Icon2 from '../../../assets/icon2.svg'

const StakePurchaseHistory = () => {
  return (
    <div class="bg-dashboardCustomPurple rounded-xl p-6 relative overflow-x-auto">
      <table class=" w-full text-sm text-left rtl:text-right text-gray-400 dark:text-gray-400">
        <thead class="text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              Amount $BCCoin
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              USD Worth
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              Actually Worth
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              Profit Lost %
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              Stake Start Date
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              Stake End Date
            </th>
            <th
              scope="col"
              className="py-4 px-6 text-left text-gray-400 font-semibold text-base"
            >
              Claim Button
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class=" dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              <div className=" flex flex-row items-center gap-3">
                <div className=" bg-white rounded-md flex justify-center items-center w-10 h-10">
                  <img src={Icon1} />
                </div>
                <p>Black Coin Purchased</p>
              </div>
            </th>
            <td class="px-6 py-4">0.0154 USD</td>
            <td class="px-6 py-4">$10.00</td>
            <td class="px-6 py-4">4.7%</td>
            <td class="px-6 py-4">February 21, 2021</td>
            <td class="px-6 py-4">January 14, 2021</td>
            <td class="px-6 py-4">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-700 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-customGreen after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
              </label>
            </td>
          </tr>
          <tr class=" dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              <div className=" flex flex-row items-center gap-3">
                <div className=" bg-white rounded-md flex justify-center items-center w-10 h-10">
                  <img src={Icon2} />
                </div>
                <p>Black Coin Purchased</p>
              </div>
            </th>
            <td class="px-6 py-4">0.0154 USD</td>
            <td class="px-6 py-4">$10.00</td>
            <td class="px-6 py-4">4.7%</td>
            <td class="px-6 py-4">February 14, 2021</td>
            <td class="px-6 py-4">January 14, 2021</td>
            <td class="px-6 py-4">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-700 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-customGreen after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
              </label>
            </td>
          </tr>
          <tr class=" dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
            >
              <div className=" flex flex-row items-center gap-3">
                <div className=" bg-white rounded-md flex justify-center items-center w-10 h-10">
                  <img src={Icon2} />
                </div>
                <p>Black Coin Purchased</p>
              </div>
            </th>
            <td class="px-6 py-4">0.025 USD</td>
            <td class="px-6 py-4">$10.00</td>
            <td class="px-6 py-4">4.7%</td>
            <td class="px-6 py-4">February 21, 2021</td>
            <td class="px-6 py-4">January 14, 2021</td>
            <td class="px-6 py-4">
              <label class="inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer" />
                <div class="relative w-11 h-6 bg-gray-700 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px]  after:bg-customGreen after:border-gray-400 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600"></div>
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StakePurchaseHistory;
