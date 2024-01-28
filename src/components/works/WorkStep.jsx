import React from "react";

const WorkStep = ({ number, title, description }) => {
  return (
    <div className="p-4 border-skyBlue w-full rounded-tl-16 flex gap-6">
      <p className="text-darkGray lg:text-15 text-[16px] primary flex justify-center items-center border-4 border-darkPink bg-skyBlue rounded-full px-[23px] py-[19px] h-[62px] w-[64px]">
        {number}
      </p>
      <div className="flex flex-col">
        <h3 className=" primary text-[14px] lg:text-5  text-skyBlue">
          {title}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default WorkStep;
