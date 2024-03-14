import React from "react";
import appleLogo from "../../../assets/logo/apple.png";
import playstoreLogo from "../../../assets/logo/playstore.png";
import applestoreLogo from "../../../assets/logo/appstore.png";
import facebookLogo from "../../../assets/logo/facebook.png";
import twitterLogo from "../../../assets/logo/twitter.png";
import linkedInLogo from "../../../assets/logo/linkedin.png";
import telegramLogo from "../../../assets/logo/telegram.png";
import discordLogo from "../../../assets/logo/discord.png";
import whiteCompanyLogo from "../../../assets/whiteLogo.png";
import instagramLogo from "../../../assets/logo/instagram.png";

const Footer = () => {
  return (
    <div className="container py-10 mx-auto">
      <div className=" grid gap-8 lg:gap-0 md:grid-cols-2 lg:grid-cols-4 my-8 p-8 lg:p-0 ">
        <div>
          <img src={whiteCompanyLogo} />
          <p className=" leading-[24px] font-extralight text-base my-6">
            One Application for Every Payment
          </p>
          <div className=" flex flex-row gap-8 items-center">
            <img src={appleLogo} />
            <img src={playstoreLogo} />
            <img src={appleLogo} />
            <span className=" uppercase leading-[24px] font-extralight text-base">
              comming soon
            </span>
          </div>
        </div>
        <div>
          <p className=" text-customPurple font-semibold text-lg">
            Other Pages
          </p>
          <ul className=" flex gap-2 flex-col mt-3">
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Contact
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Project
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className=" text-customPurple font-semibold text-lg">
            Quick Links
          </p>
          <ul className=" flex gap-2 flex-col mt-3">
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Term Of Service
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Disclaimer
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                Credits
              </a>
            </li>
            <li>
              <a className=" leading-[24px] font-extralight text-base cursor-pointer">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className=" text-customPurple font-semibold text-lg">
            Social Media
          </p>
          <p className=" font-extralight text-base my-8">
            Our Support and Sales team is available 24 /7 to answer your queries
          </p>
          <div className=" flex flex-row gap-5">
            <img src={facebookLogo} />
            <img src={twitterLogo} />
            <img src={linkedInLogo} />
            <img src={instagramLogo} />
            <img src={telegramLogo} />
            <img src={discordLogo} />
          </div>
        </div>
      </div>
      <div className=" flex justify-between flex-row border-t border-gray-700 p-8 pb-0">
        <p className=" leading-[24px] uppercase font-extralight">Blackcoin</p>
        <p className=" leading-[24px] font-extralight">Copyright © 2020. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;
