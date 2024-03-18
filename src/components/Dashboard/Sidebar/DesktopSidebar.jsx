import React, { useState} from "react";
import whiteLogo from "../../../assets/whiteDashboardLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DesktopSidebar = ({mobileSiderBar, setMobileSiderBar}) => {

  return (
    <div className={`${mobileSiderBar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transform duration-200 absolute h-screen bg-customBlack w-screen text-black  z-[999] md:w-auto md:h-auto md:bg-transparent md:text-current md:hover:text-current md:z-auto md:p-5 lg:p-10`}>
      <div className=" relative">
        <button className=" text-white text-3xl absolute top-4 right-5 block md:hidden" onClick={() => setMobileSiderBar(false)}>x</button>
        <div className="flex flex-col gap-6 py-10 items-center">
          <div className=" w-48">
            <img src={whiteLogo} />
          </div>
          <ul className=" flex flex-col gap-6">
            <li className=" flex flex-row gap-5 items-center">
              <svg
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.63093 17.3095V14.7539C6.63092 14.1039 7.16085 13.5757 7.81743 13.5713H10.2225C10.8822 13.5713 11.417 14.1008 11.417 14.7539V14.7539V17.3174C11.4169 17.8693 11.8618 18.3204 12.4191 18.3333H14.0225C15.6209 18.3333 16.9166 17.0506 16.9166 15.4682V15.4682V8.19819C16.908 7.57568 16.6128 6.99111 16.1149 6.61085L10.6314 2.23774C9.6707 1.4763 8.30509 1.4763 7.34443 2.23774L1.88494 6.61879C1.38513 6.99751 1.08941 7.58305 1.08325 8.20612V15.4682C1.08325 17.0506 2.37898 18.3333 3.97734 18.3333H5.58072C6.15188 18.3333 6.6149 17.8749 6.6149 17.3095V17.3095"
                  stroke="#E1DFEC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-gray-500 duration-150 transform hover:text-white cursor-pointer">
                Dashboard
              </p>
            </li>
            <li className=" flex flex-row gap-5 items-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.3389 5.35296L15.8202 4.45288C15.3814 3.69128 14.409 3.42855 13.6463 3.86555V3.86555C13.2833 4.0794 12.8501 4.14008 12.4423 4.03419C12.0345 3.9283 11.6855 3.66455 11.4724 3.30109C11.3353 3.07007 11.2616 2.80694 11.2588 2.53832V2.53832C11.2712 2.10763 11.1087 1.69028 10.8084 1.38134C10.5081 1.0724 10.0955 0.898168 9.66463 0.898346H8.61962C8.19751 0.898341 7.7928 1.06654 7.49504 1.36574C7.19728 1.66493 7.03102 2.07044 7.03305 2.49255V2.49255C7.02054 3.36405 6.31044 4.06396 5.43885 4.06387C5.17022 4.06108 4.90709 3.9874 4.67607 3.85029V3.85029C3.91343 3.41329 2.94097 3.67603 2.50216 4.43763L1.94533 5.35296C1.50705 6.11361 1.76621 7.08545 2.52504 7.52687V7.52687C3.01829 7.81165 3.32215 8.33794 3.32215 8.9075C3.32215 9.47706 3.01829 10.0033 2.52504 10.2881V10.2881C1.76717 10.7266 1.50773 11.6961 1.94533 12.4544V12.4544L2.47165 13.3621C2.67725 13.7331 3.02221 14.0069 3.4302 14.1228C3.83819 14.2388 4.27557 14.1874 4.64556 13.98V13.98C5.00927 13.7677 5.4427 13.7096 5.84949 13.8184C6.25628 13.9273 6.60274 14.1942 6.81184 14.5597C6.94896 14.7907 7.02263 15.0538 7.02542 15.3225V15.3225C7.02542 16.2029 7.73917 16.9167 8.61962 16.9167H9.66463C10.5421 16.9167 11.2546 16.2076 11.2588 15.3301V15.3301C11.2568 14.9066 11.4241 14.5 11.7235 14.2006C12.0229 13.9011 12.4296 13.7338 12.853 13.7359C13.121 13.743 13.3831 13.8164 13.6158 13.9495V13.9495C14.3765 14.3877 15.3483 14.1286 15.7897 13.3697V13.3697L16.3389 12.4544C16.5515 12.0895 16.6098 11.655 16.501 11.2469C16.3922 10.8389 16.1252 10.4911 15.7592 10.2805V10.2805C15.3932 10.0699 15.1262 9.7221 15.0174 9.31407C14.9086 8.90604 14.9669 8.47146 15.1795 8.10658C15.3177 7.86523 15.5179 7.66511 15.7592 7.52687V7.52687C16.5135 7.08569 16.772 6.11953 16.3389 5.36059V5.36059V5.35296Z"
                  stroke="#E1DFEC"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="9.14601"
                  cy="8.90749"
                  rx="2.1968"
                  ry="2.1968"
                  stroke="#E1DFEC"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className=" text-gray-500 duration-150 transform hover:text-white cursor-pointer">
                Settings
              </p>
            </li>
            <li className="flex flex-row gap-5 items-center">
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.23853 16.9167H12.195C14.7504 16.9167 16.7107 15.9937 16.1539 12.279L15.5055 7.24466C15.1623 5.39111 13.9799 4.68173 12.9426 4.68173H4.4605C3.40786 4.68173 2.29421 5.44451 1.89757 7.24466L1.24921 12.279C0.776285 15.5742 2.68323 16.9167 5.23853 16.9167Z"
                  stroke="#E1DFEC"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.12422 4.49865C5.12422 2.51026 6.73613 0.898348 8.72453 0.898348V0.898348C9.68203 0.894291 10.6017 1.27182 11.2802 1.94744C11.9587 2.62307 12.3401 3.54114 12.3401 4.49865V4.49865"
                  stroke="#E1DFEC"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.25311 8.25151H6.29125"
                  stroke="#E1DFEC"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.112 8.25151H11.1501"
                  stroke="#E1DFEC"
                  stroke-opacity="0.5"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className=" text-gray-500 duration-150 transform hover:text-white cursor-pointer">
                Rewards
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DesktopSidebar;
