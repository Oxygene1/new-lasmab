import React, { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Typography } from "../../components/Typography";
import { Button } from "../../components";
import { useForm } from "react-hook-form";
import NigeriaFlag from "../../assets/nigeriaFlag.svg";
import cn from "classnames";
const Admission = ({ props }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
          <Typography className="text-[#fff] text-2xl md:text-3xl lg:text-4xl">Admission</Typography>
        </div>
        <div>
          <IoIosArrowDropdown {...icons} className="w-7 h-7 mt-2" />
        </div>
      </div>
      <div
        className={
          selectedValue
            ? "block place-items-center md:bg-white/20 md:p-10 w-[100%] md:w-[51.75%] mr-auto ml-auto  mt-8 rounded-b-lg"
            : "hidden"
        }
      >
        <div className="flex flex-col place-items-center mb-[3rem]">
          <div>
            <Typography {...props} className="text-white">
              Sign up Today
            </Typography>
          </div>
          <div>
            <Typography {...props} className="text-xl text-white">
              Start Your Child's Registration
            </Typography>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          {...props}
          className={cn(
            "bg-white w-[100%] h-[100%] mr-auto ml-auto p-8 polygon"
          )}
        >
          <label className="text-[#808285]">PHONE NUMBER</label>
          <div className="border-b-2 border-[#1B1C31] border-solid w-full mb-[2rem] flex flex-row">
            <img src={NigeriaFlag} alt="" className="w-5 h5 flex-1 mr-2" />
            <Typography {...props} className="flex-1">
              +234
            </Typography>
            <input
              type="tel"
              {...props}
              className="outline-none  w-[85%]"
              {...register("phone", { required: true })}
              aria-invalid={errors.phone ? "true" : "false"}
            />
          </div>
          {errors.phone?.type === "required" && (
            <p role="alert" {...props} className="text-red-600">
              Phone number is required
            </p>
          )}
          <label className="text-[#808285]">EMAIL</label>
          <input
            {...props}
            className="outline-none border-b-2 border-[#1B1C31] border-solid w-full mb-[2rem]"
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
          />
          {errors.mail && (
            <p role="alert" {...props} className="text-red-600">
              {errors.mail?.message}
            </p>
          )}

          <Button
            {...props}
            isLoading={isLoading}
            onClick={handleClick}
            className="text-white bg-primary p-5 w-[100%] mt-40"
            title="submit"
          >
            Verify registration
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Admission;
