import React from "react";
import QuickView from "../../components/QuickView";
import Carousel from "../carousel/Carousel";
import AboutSchool from "../dropdowns/AboutSchool";
import Portal from "../dropdowns/Portal";
import Admission from "../../layouts/dropdowns/Admission";
import Team from "../../layouts/dropdowns/Team";
import Contact from "../../layouts/dropdowns/Contact";
import FAQs from "../dropdowns/FAQs";

const Mainsections = () => {
  return (
    <div
      className="bg-primary w-full p-[5%] place-content-center justify-center"
      style={{ color: "#006600" }}
    >
      <QuickView />
      <Carousel />
      <div className="mt-10">
        <AboutSchool />
      </div>
      <div className="mt-5">
        <Portal />
      </div>
      <div className="mt-5">
        <Admission />
      </div>
      <div className="mt-5">
        <Team />
      </div>
      <div className="mt-5">
        <Contact />
      </div>
      <div className="mt-5">
        <FAQs />
      </div>
    </div>
  );
};

export default Mainsections;
