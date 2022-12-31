import React from "react";
import { Typography } from "../Typography";
import { BsGlobe2, BsFillChatDotsFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { TiSocialLinkedin } from "react-icons/ti";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookMessenger, FaTwitter, FaInfinity } from "react-icons/fa";
const Footer = ({ props }) => {
  return (
    <div className="p-10 justify-content-center grid lg:flex lg:flex-row justify-around">
      <div className="mb-5 grid lg:mb-0 place-items-center lg:place-items-start">
        <div className="flex flex-row gap-5">
          <img
            className="w-20 h-10"
            src="https://visme.co/blog/wp-content/uploads/2017/08/40-Creative-Logo-Designs-to-Inspire-You-Databerry-2.jpg"
            alt="this is the logo of lasmab on the footer "
          />
          <Typography {...props} className="text-xl text-[#181433]">
            Lagos Anglican School mgt. Board
          </Typography>
        </div>
        <div className="flex flex-row gap-3 mt-5">
          <TiSocialLinkedin />
          <FaFacebookMessenger />
          <FaTwitter />
          <FaInfinity />
        </div>
      </div>
      <div className="grid lg:flex lg:flex-row gap-10">
        <div className="grid place-items-center lg:place-items-start">
          <Typography {...props} className="text-xl text-[#181433]">
            Quick Links
          </Typography>
          <ul className="mt-5 text-[#181433] ">
            <li>Home</li>
            <li>About us</li>
            <li>History</li>
            <li>Features</li>
            <li>Blog Page</li>
          </ul>
        </div>
        <div className="grid place-items-center lg:place-items-start">
          <Typography {...props} className="text-xl text-[#181433]">
            Schools
          </Typography>
          <ul className="mt-5 text-[#181433]">
            <li>BMJS</li>
            <li>BHMGS</li>
            <li>CMS</li>
            <li>LAGOS</li>
          </ul>
        </div>
        <div className="grid place-items-center lg:place-items-start lg:flex lg:flex-col">
          <Typography {...props} className="text-xl text-[#181433]">
            Contact Us
          </Typography>
          <ul className="mt-5">
            <li className="flex flex-row gap-3">
              <BsGlobe2 />
              <a href="https://www.lasmab.school">www.lasmab.school</a>
            </li>
            <li className="flex flex-row gap-3">
              <HiEnvelope />
              <a href="mailto:thelasmab@yahoo.com">thelasmab@yahoo.com</a>
            </li>
            <li className="flex flex-row gap-3">
              <BsFillTelephoneFill />
              <a href="tel:+23481342343533">+23481342343533</a>
            </li>
            <li className="flex flex-row gap-3">
              <BsFillChatDotsFill />
              <a href="#">Chat with an Admin</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
