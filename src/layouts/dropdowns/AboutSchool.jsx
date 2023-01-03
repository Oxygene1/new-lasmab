import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Typography } from "../../components/Typography";
function Example() {
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
        className="flex border-b-[0.3px] border-solid border-white w-4/5 mr-auto ml-auto"
      >
        <div className="w-4 h-4 rounded-full bg-[#fff] mt-2 mr-4"></div>
        <div className=" flex-1">
          <Typography className="text-[#fff] text-2xl md:text-3xl">
            About the school
          </Typography>
        </div>
        <div>
          <IoIosArrowDropdown {...icons} className="w-7 h-7 mb-[0.2rem]" />
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
}
export default Example;
