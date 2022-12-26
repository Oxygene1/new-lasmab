import React from "react";
import { Button } from "../Button";

// this is the first container at the top which contains the background carousel animation
const StoryContainer = () => {
  return (
    <div className="storyAnimate grid content-center">
      <div className="ml-56">
        <div className="mb-10">
          <h1 className="text-white text-6xl">
            Lets be part of <br /> Your story
          </h1>
        </div>
        <div>
          <Button variant="secondary" className="p-5">
            enroll your child
          </Button>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default StoryContainer;
