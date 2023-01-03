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
        <div className="w-4 h-4 rounded-full bg-[#fff] mt-2 mr-4"></div>
        <div className=" flex-1">
          <Typography className="text-[#fff] text-2xl md:text-3xl">
            Portal
          </Typography>
        </div>
        <div>
        <IoIosArrowDropdown {...icons} className="w-7 h-7 mb-[0.2rem]" />
        </div>
      </div>
      <div
        className={
          selectedValue
            ? "flex flex-col md:flex place-items-center justify-center p-10 md:w-4/5 w-[100%] lg:w-4/5 mr-auto ml-auto mt-5  md:mt-8 md:flex-row"
            : "hidden"
        }
      >
        <div className=" md:flex-1 mb-5 md:mb-0">
          <Button
            {...props}
            isLoading={isLoading}
            onClick={handleClick}
            className="text-primary bg-white p-6 md:p-9  md:w-auto"
          >
            Parent Portal
          </Button>
        </div>
        <div>
          <Button
            {...props}
            className="text-primary bg-white p-6 md:p-9 md:w-auto"
          >
            Student Portal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
