import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "../../components";
import { Button } from "../../components";
import cn from "classnames";
const Questions = ({props}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const handleClick = () => {
    setIsLoading(true);
    const interval = setInterval(() => {
      // Do some async operation
      clearInterval(interval);
      setIsLoading(false);
    }, 1000);
  };
  return <div className="bg-[#671E78] p-10 lg:flex lg:flex-row">
    <div>
      <div>
        <Typography>Do you have any questions?</Typography>
      </div>
      <div>
        <Typography>fill our feedback for</Typography>
      </div>
    </div>
    <div>
    <form
          onSubmit={handleSubmit(onSubmit)}
          {...props}
          className={cn(
            "bg-white w-4/5 h-[468px] mr-auto ml-auto p-8 polygon"
          )}
        >
          <label className="text-[#808285]">PHONE NUMBER</label>
         
            <Typography {...props} className="flex-1">
              +234
            </Typography>
            <input
              type="number"
              {...props}
              className="outline-none  w-[85%]"
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
         
          {errors.firstName?.type === "required" && (
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
  </div>;
};

export default Questions;
