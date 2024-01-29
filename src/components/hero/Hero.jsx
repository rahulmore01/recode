import React from "react";
import Chatbot from "../Chatbot";

const Hero = () => {
  return (
    <div className="relative  xlg:h-[74vh]  w-screen text-lightGray flex flex-col justify-center items-center pt-32 lg:pt-28 xlg:pt-20">
      <div className="w-full object-fill lg:max-w-[1200px] md:px-4 relative xlg:max-w-[1450px]">
        <img
          src="/hero-bg.png"
          alt="bgImg"
          className="w-full h-[260px] md:h-[440px] lg:h-full object-cover"
        />
        <p className="absolute inset-x-0 -bottom-6 md:bottom-10  lg:bottom-0 SpaceMonoRegular text-center text-[14px] lg:text-[20px]  uppercase mx-auto max-w-[290px] mlg:max-w-[440px] ">
          Connecting nonprofits, creatives, and philanthropists from around the
          cosmos to accelerate collaboration and amplify impact.
        </p>
      </div>
      <Chatbot />
    </div>
  );
};

export default Hero;
