import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Button } from "../Button";

const Header = ({ props }) => {
  const [isNavExpanded, isSetNavExpanded] = useState(false);
  const menu = {
    color: "#fff",
  };
  return (
    <div>
      <div
        id="blur-back"
        className="flex flex-row container h-[100px] md:h-[128px] pt-[7%] px-[2%] md:px-0 md:pt-[2%]"
      >
        <div className="p-1 md:p-0">
          <img
            className="w-20 h-10"
            src="https://visme.co/blog/wp-content/uploads/2017/08/40-Creative-Logo-Designs-to-Inspire-You-Databerry-2.jpg"
            alt="this is the logo of lasmab "
          />
        </div>
        <div className="navigation ">
          <ul className="flex flex-row content-between listed text-white pt-3 w-[80%]h-[100%]">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="values">Values</a>
            </li>
            <li>
              <a href="our-schools">Our Schools</a>
            </li>
            <li>
              <a href="board">Board</a>
            </li>
            <li>
              <a href="news">News</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
          <div className="pb-5">
            <Button
              {...props}
              className="bg-white text-primary w-[139px] h-[52px] "
            >
              Login
            </Button>
          </div>
        </div>
        <div className="hamburger">
          <HiMenu
            onClick={() => {
              isSetNavExpanded(!isNavExpanded);
            }}
            {...menu}
            className="w-10 h-8"
          />
        </div>
      </div>
      <div
        className={
          isNavExpanded
            ? "block place-items-center bg-[#521760] p-10 w-[50%] h-[100vh] fixed z-[1100] md:hidden"
            : "hidden"
        }
      >
        <ul
          className="flex flex-col font-semibold content-between listed text-white mr-auto ml-auto"
        >
          <li className="mb-5">
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li className="mb-5">
            <a href="values">Values</a>
          </li>
          <li className="mb-5">
            <a href="our-schools">Our Schools</a>
          </li>
          <li className="mb-5">
            <a href="board">Board</a>
          </li>
          <li className="mb-5">
            <a href="news">News</a>
          </li>
          <li className="mb-5">
            <a href="contact">Contact</a>
          </li>
          <li>
            <button href="login">Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
