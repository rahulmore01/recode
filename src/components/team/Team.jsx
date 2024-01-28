import React from "react";

const Team = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      {/* <h3 className="primary text-[28px] lg:text-[32px] text-darkPink mb-4 w-full text-center px-4">
        Meet Our Founding Team Recode
      </h3> */}
      {/* <p className="SpaceMonoRegular text-[14px] lg:text-[15px] text-lightGray w-full max-w-[440px] lg:max-w-[716px] text-center mb-[50px] px-4">
        We're building these tools both to empower the work of our extended
        community of changemakers as well as wishing we had it for own
        organizations!
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="flex  gap-6">
          <img src="/team/p1.png" alt="" className="w-[160px] lg:w-[280px]" />
          <img src="/team/p2.png" alt="" className="w-[160px] lg:w-[280px]" />
        </div>
        <div className="flex  gap-6">
          <img src="/team/p3.png" alt="" className="w-[160px] lg:w-[280px]" />
          <img src="/team/p4.png" alt="" className="w-[160px] lg:w-[280px]" />
        </div>
      </div> */}
      <div className="w-full flex flex-col justify-center items-center gap-8 mt-10">
        <div className="relative overflow-hidden flex flex-col justify-center items-center gap-2">
          <div className="h-1 w-screen bg-darkPink"></div>
          <div className="relative overflow-hidden w-screen text-center">
            <div className="inline-block whitespace-nowrap animate-marquee text-[40px]">
              <p className="inline-block primary text-transparent  ">
                <span className="text-stroke-red-500 text-skyBlue ">
                  Emerged thanks to the aligned vision of social impact
                  entrepreneurs, engineers and digital creators disrupting
                  ineffective systems.
                </span>
                {/* Duplicate the text to continue seamlessly */}
                <span className="text-stroke-red-500 text-skyBlue">
                  Emerged thanks to the aligned vision of social impact
                  entrepreneurs, engineers and digital creators disrupting
                  ineffective systems.
                </span>
                <span className="text-stroke-red-500 text-skyBlue">
                  Emerged thanks to the aligned vision of social impact
                  entrepreneurs, engineers and digital creators disrupting
                  ineffective systems.
                </span>
                <span className="text-stroke-red-500 text-skyBlue">
                  Emerged thanks to the aligned vision of social impact
                  entrepreneurs, engineers and digital creators disrupting
                  ineffective systems.
                </span>
              </p>
            </div>
          </div>
          <div className="h-1 w-screen bg-darkPink"></div>
        </div>

        <h3 className="primary text-[28px] lg:text-[32px] text-darkPink  w-full px-4 text-center">
          Our Launch Partners
        </h3>
        <p className="SpaceMonoRegular  text-[14px] lg:text-[15px] text-lightGray w-full max-w-[440px] lg:max-w-[716px] text-center px-4">
          We're piloting Recode in collaboration with these ten incredible
          organizations who will shape the portal based on needs among their own
          users and beneficiaries.
        </p>
        <div className="flex justify-center items-center gap-6 w-screen overflow-x-scroll">
          <img src="/morquee-logo/figma.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/cola.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/nike.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/aws.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/cloud.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/wp.png" alt="" className="h-[120px]" />
          <img src="/morquee-logo/adobe.png" alt="" className="h-[120px]" />
        </div>
      </div>
    </div>
  );
};

export default Team;
