import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
const Header = () => {
  const [isNavExpanded, isSetNavExpanded] = useState(false);
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
              <NavLink exact="true" activeclassname="active"  to="">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="values">Values</NavLink>
            </li>
            <li>
              <NavLink to="our-schools">Our Schools</NavLink>
            </li>
            <li>
              <NavLink to="board">Board</NavLink>
            </li>
            <li>
              <NavLink to="news">News</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              <button to="login">Login</button>
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
