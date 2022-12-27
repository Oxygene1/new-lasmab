import React from "react";
import QuickView from "../../components/QuickView";
import Carousel from "../carousel/Carousel";
const Mainsections = () => {
  return (
    <div className="bg-primary w-full p-16 place-content-center justify-center">
      <QuickView />
      <Carousel />
    </div>
  );
};

export default Mainsections;
