import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Typography } from "../../components/Typography";
import { BsFillChatDotsFill } from "react-icons/bs";
import { HiEnvelope } from "react-icons/hi2";
import { BsFillTelephoneFill } from "react-icons/bs";
const Portal = ({ props }) => {
  const [selectedValue, setSelectedValue] = useState(false);
  const icons = {
    color: "#fff",
  };
  return (
    <div>
      <div
        onClick={() => {
          setSelectedValue(!selectedValue);
        }}
        className="flex border-b-[0.3px] border-solid border-white w-4/5 mr-auto ml-auto cursor-pointer"
      >
        <div className="w-5 h-5 rounded-full bg-[#fff] mt-3 mr-4"></div>
        <div className=" flex-1">
          <Typography className="text-[#fff] text-2xl mdtext-3xl lg:text-4xl">
            Contact
          </Typography>
        </div>
        <div>
          <IoIosArrowDropdown {...icons} className="w-7 h-7 mt-2" />
        </div>
      </div>
      <div
        className={
          selectedValue
            ? "block lg:gap-5 lg:flex lg:flex-row md:justify-between place-items-center bg-white/20 p-3 md:p-10 w-4/5 mr-auto ml-auto  mt-8 rounded-b-lg"
            : "hidden"
        }
      >
        <div className="flex gap-3 mb-5 lg:mb-0">
          <HiEnvelope {...icons} />
          <a href="mailto:thelasmab@yahoo.com">
            <Typography {...props} className="text-white">
              thelasmab@yahoo.com
            </Typography>
          </a>
        </div>
        <div className="flex gap-3 mb-5 lg:mb-0">
          <BsFillTelephoneFill {...icons} />

          <a href="tel:+23481342343533">
            <Typography {...props} className="text-white">
              +23481342343533
            </Typography>
          </a>
        </div>
        <div className="flex gap-3">
          <BsFillChatDotsFill {...icons} />
          <Typography {...props} className="text-white">
            Chat with an admin
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Portal;
