import React from "react";
import { Typography } from "../Typography";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookMessenger, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="p-10 lg:flex lg:flex-row">
      <div className="flex-1">
        <div className="flex flex-row gap-5">
          <img
            className="w-20 h-10"
            src="https://visme.co/blog/wp-content/uploads/2017/08/40-Creative-Logo-Designs-to-Inspire-You-Databerry-2.jpg"
            alt="this is the logo of lasmab on the footer "
          />
          <Typography>Lagos Anglican School mgt. Board</Typography>
        </div>
        <div className="flex flex-row gap-3 mt-5">
          <TiSocialLinkedin />
          <FaFacebookMessenger />
          <FaTwitter />
        </div>
      </div>
      <div className="flex flex-row gap-5">
        <div>
          <Typography>Quick Links</Typography>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>History</li>
            <li>Features</li>
            <li>Blog Page</li>
          </ul>
        </div>
        <div>
          <Typography>Schools</Typography>
          <ul>
            <li>BMJS</li>
            <li>BHMGS</li>
            <li>CMS</li>
            <li>LAGOS</li>
          </ul>
        </div>
        <div>
          <Typography>Contact Us</Typography>
          <ul>
            <li>
              <a href="https://www.lasmab.school">www.lasmab.school</a>
            </li>
            <li>
              <a href="mailto:thelasmab@yahoo.com">thelasmab@yahoo.com</a>
            </li>
            <li>
              <a href="https://"></a>
            </li>
            <li>
              <a href="https://"></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
