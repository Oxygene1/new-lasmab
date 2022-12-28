import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Typography } from "../../components/Typography";

const Admission = () => {
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
        className="flex border-b-[0.5px] border-solid border-white w-4/5 mr-auto ml-auto cursor-pointer"
      >
        <div className="w-5 h-5 rounded-full bg-[#fff] mt-3 mr-4"></div>
        <div className=" flex-1">
          <Typography className="text-[#fff] text-4xl">Admission</Typography>
        </div>
        <div>
          <IoIosArrowDropdown {...icons} className="w-7 h-7 mt-2" />
        </div>
      </div>
      <div
        className={
          selectedValue
            ? "block place-items-center bg-white/20 p-10 w-4/5 mr-auto ml-auto  mt-8 rounded-b-lg"
            : "hidden"
        }
      >
        <Typography className="text-lg text-[#fff]">
          End-to-end payments and financial management in a single solution.
          Meet the right platform.End-to-end payments and financial management
          in a single solution. Meet the right platform.
        </Typography>
      </div>
    </div>
  );
};

export default Admission;
