// import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";

const Header = () => {
  // const [isNavExpanded, isSetNavExpanded] = useState(false);

  return (
    <div>
      <div id="blur-back" className="flex flex-row p-4 container">
        <div className="">
          <img
            className="w-20 h-10"
            src="https://visme.co/blog/wp-content/uploads/2017/08/40-Creative-Logo-Designs-to-Inspire-You-Databerry-2.jpg"
            alt=""
          />
        </div>
        <div className="navigation">
          <ul className="flex flex-row content-between listed text-white">
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
            <li>
              <button href="login">Login</button>
            </li>
          </ul>
        </div>
        <div className="hamburger">
          <HiMenu style={{ color: "white" }} className="w-10 h-8" />
        </div>
      </div>
      <div className="mobile"></div>
    </div>
  );
};

export default Header;
