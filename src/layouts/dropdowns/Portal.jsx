import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Typography } from "../../components/Typography";
import { Button } from "../../components";
const Portal = ({ props }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState(false);
  const icons = {
    color: "#fff",
  };
  const handleClick = () => {
    setIsLoading(true);
    const interval = setInterval(() => {
      // Do some async operation
      clearInterval(interval);
      setIsLoading(false);
    }, 1000);
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
          <Typography className="text-[#fff] text-2xl mdtext-3xl lg:text-4xl">Portal</Typography>
        </div>
        <div>
          <IoIosArrowDropdown {...icons} className="w-7 h-7 mt-2" />
        </div>
      </div>
      <div
        className={
          selectedValue
            ? "sm:block place-items-center p-10 sm:w-4/5 lg:w-2/4 mr-auto ml-auto  mt-8 lg:flex flex-row"
            : "hidden"
        }
      >
        <div className="lg:flex-1">
          <Button
            {...props}
            isLoading={isLoading}
            onClick={handleClick}
            className="text-primary bg-white p-9"
          >
            Parent Portal
          </Button>
        </div>
        <div>
          <Button {...props} className="text-primary bg-white p-9">
            Student Portal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
