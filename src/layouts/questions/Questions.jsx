import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Typography } from "../../components";
import { Button } from "../../components";
import cn from "classnames";
const Questions = ({ props }) => {
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
  return (
    <div className="bg-[#671E78] p-10 lg:flex lg:flex-row place-items-center justify-items-center justify-center">
      <div>
        <div>
          <Typography {...props} className="text-white text-2xl">
            Do you have any <br /> questions?
          </Typography>
        </div>
        <div>
          <Typography className="text-white text-xl">
            fill our feedback for
          </Typography>
        </div>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          {...props}
          className={cn("bg-white w-4/5 h-[60%] mr-auto ml-auto p-8 polygon")}
        >
          <div className="flex flex-col">
            <label className="text-[#808285]">NAME:</label>
            <input
              type="text"
              placeholder="Full Name"
              {...props}
              className="outline-none  w-[100%] border-b-2 border-[#1B1C31] border-solid"
              {...register("fullName", { required: true })}
              aria-invalid={errors.fullName ? "true" : "false"}
            />

            {errors.fullName?.type === "required" && (
              <p role="alert" {...props} className="text-red-600">
                Your full name is required
              </p>
            )}
          </div>

          <div className="flex lg:flex-row sm:flex-col mt-5 gap-7">
            <div>
              <label className="text-[#808285]">EMAIL</label>

              <input
                {...props}
                placeholder="Your email address"
                className="outline-none border-b-2 border-[#1B1C31] border-solid w-full"
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail && (
                <p role="alert" {...props} className="text-red-600">
                  {errors.mail?.message}
                </p>
              )}
            </div>
            <div>
              <label className="text-[#808285]">PHONE</label>

              <input
                {...props}
                type="tel"
                placeholder="Your phone number"
                className="outline-none border-b-2 border-[#1B1C31] border-solid w-full"
                {...register("phone", {
                  required: "Your phone number is required",
                })}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p role="alert" {...props} className="text-red-600">
                  {errors.phone?.message}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label className="text-[#808285]">FEEDBACK:</label>
            <textarea
              placeholder="your feedback here"
              {...register("feedback", {
                required: "Feedback message is required",
              })}
              aria-invalid={errors.feedback ? "true" : "false"}
              className="outline-none  border-b-2 border-[#1B1C31] border-solid w-full"
            ></textarea>

            {errors.feedback && (
              <p role="alert" {...props} className="text-red-600">
                {errors.feedback?.message}
              </p>
            )}
          </div>

          <Button
            {...props}
            isLoading={isLoading}
            onClick={handleClick}
            className="text-white bg-primary p-5 w-[100%] mt-40"
            title="submit"
          >
            send message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Questions;
