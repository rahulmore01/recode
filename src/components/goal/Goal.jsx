import React from "react";

const Goal = () => {
  return (
    <div
      className="flex flex-col-reverse lg:flex-row justify-center items-center gap:20  mlg:gap-[120px] p-6 my-10"
      id="goal"
    >
      <div className="w-full max-w-[590px] flex flex-col justify-center items-center lg:justify-start lg:items-start   gap-6">
        <h3 className="primary w-full text-[28px] lg:text-[32px] text-darkPink text-center lg:text-start mt-20 lg:mt-0">
          our goal
        </h3>
        <p className="SpaceMonoRegular text-[14px]  lg:text-[15px] text-lightGray ">
          We establish an equitable portal where conscious causes gain
          resources, community builders earn rewards, and life-affirming
          messages spread further through the collective power of human
          creativity blended with ethical technology for global good.
        </p>
        <button className="primary text-[15px] text-darkGray px-[21px] py-[19px] bg-skyBlue rounded-full w-[160px]">
          Early access
        </button>
      </div>
      <div className="w-[297px] h-[286px] lg:w-[450px] lg:h-[450px] mt-14">
        <img src="/goal.png" alt="goal.png" className="h-full w-full" />
      </div>
    </div>
  );
};

export default Goal;
