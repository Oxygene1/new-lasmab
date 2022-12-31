import React from "react";
import { Button } from "../Button";
import { Typography } from "../Typography";
// this is the first container at the top which contains the background carousel animation

const StoryContainer = ({ props }) => {
  return (
    <div className="storyAnimate grid content-center">
      <div className="ml-auto mr-auto lg:ml-[10%] p-5 md:p-0">
        <div className="mb-10">
          <h1 className="text-white text-3xl md:text-6xl">
            Lets be part of <br /> Your story
          </h1>
        </div>
        <div>
          <Button variant="secondary" className="p-5">
            enroll your child
          </Button>
        </div>
        <div></div>
        <div className="mt-5">
          <Typography {...props} as="p" className="text-white">
            12,000+ people already joined the LASMAB community <br /> Get
            started today
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default StoryContainer;
