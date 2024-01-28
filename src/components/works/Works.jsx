import FeatureTitle from "../features/title";
import {
  Availability,
  Colors,
  Music,
  SchedulingLinks,
  Team,
  Team1,
  Todo,
} from "@/components/features/card";
import React, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";

const Works = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  const features = [
    {
      step: 1,
      title: "Nonprofits Post Content Requests ",
      id: "todo-list",
      card: Todo,
      description:
        "Nonprofits submit requests detailing the types of custom branded content needed for their social media and campaigns.",
      isInView: false,
    },
    {
      step: 2,
      title: "Creatives Claim Aligned Requests",
      id: "colors",
      card: Colors,
      description:
        "Creatives review open requests and claim nonprofit projects matching their skills, values and availability.",
      isInView: false,
    },
    {
      step: 3,
      title: "Creatives Develop Custom Assets",
      id: "availability",
      card: Availability,
      description:
        "After claiming a request, creatives design branded social posts, graphics, videos or other assets based on provided nonprofit brand guidelines.",
      isInView: false,
    },
    {
      step: 4,
      title: "Nonprofits Launch Voting Rounds",
      id: "music",
      card: Music,
      description:
        "Nonprofits select their favorite 3-6 submissions and launch community voting rounds to decide on winning entries.",
      isInView: false,
    },
    {
      step: 5,
      title: "Winning Entry Gets Published",
      id: "scheduling-links",
      card: SchedulingLinks,
      description:
        "The nonprofit publishes the community-chosen submission on their social platforms and marketing materials.",
      isInView: false,
    },

    {
      step: 6,
      title: "Community Engagement Amplifies Reach",
      id: "team1",
      card: Team,
      description:
        "The collective community shares and engages with published creative posts to extend their reach and impact.",
      isInView: false,
    },
    {
      step: 7,
      title: "Creatives Earn Points for Rewards",
      id: "team",
      card: Team1,
      description:
        "Creatives earn points and build leaderboard status throughout the process, redeeming credits for rewards.",
      isInView: false,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 mt-20" id="works">
      <h3 className="primary text-[28px] lg:text-[32px] text-darkPink text-center">
        OUR ROADMAP Over the next year we aim to
      </h3>
      <div className="flex w-full items-start gap-20">
        <div className="w-full py-[50vh]">
          <ul>
            {features.map((feature) => (
              <li
                key={feature.id}
                className="flex justify-center items-center gap-6"
              >
                <p
                  className={classNames(
                    "text-darkGray lg:text-15 text-[16px] primary flex justify-center items-center border-4 border-darkPink bg-skyBlue rounded-full px-[23px] py-[19px] h-[62px] w-[64px]",
                    {
                      "opacity-100": !feature.isInView,
                      "opacity-10": feature.isInView,
                    }
                  )}
                >
                  {feature.step}
                </p>
                <div className="flex flex-col gap-6">
                  <FeatureTitle
                    id={feature.id}
                    description={feature.description}
                  >
                    <div className="flex flex-col gap-6">
                      <span>{feature.title}</span>
                    </div>
                  </FeatureTitle>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="sticky top-0 flex h-screen w-full items-center">
          <div className="relative aspect-square w-[486px] h-[638px] rounded-2xl bg-gray-100 mt-28">
            {features.map((feature) => (
              <feature.card id={feature.id} key={feature.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </div>
  );
};
export default Works;
// import FeatureTitle from "../features/title";
// import {
//   Availability,
//   Colors,
//   Music,
//   SchedulingLinks,
//   Team,
//   Team1,
//   Todo,
// } from "@/components/features/card";
// const Works = () => {

//   const features = [
//     {
//       step: 1,
//       title: "Nonprofits Post Content Requests ",
//       id: "todo-list",
//       card: Todo,
//       description:
//         "Nonprofits submit requests detailing the types of custom branded content needed for their social media and campaigns.",
//     },
//     {
//       step: 2,
//       title: "Creatives Claim Aligned Requests",
//       id: "colors",
//       card: Colors,
//       description:
//         "Creatives review open requests and claim nonprofit projects matching their skills, values and availability.",
//     },
//     {
//       step: 3,
//       title: "Creatives Develop Custom Assets",
//       id: "availability",
//       card: Availability,
//       description:
//         "After claiming a request, creatives design branded social posts, graphics, videos or other assets based on provided nonprofit brand guidelines.",
//     },
//     {
//       step: 4,
//       title: "Nonprofits Launch Voting Rounds",
//       id: "music",
//       card: Music,
//       description:
//         "Nonprofits select their favorite 3-6 submissions and launch community voting rounds to decide on winning entries.",
//     },
//     {
//       step: 5,
//       title: "Winning Entry Gets Published",
//       id: "scheduling-links",
//       card: SchedulingLinks,
//       description:
//         "The nonprofit publishes the community-chosen submission on their social platforms and marketing materials.",
//     },
//     {
//       step: 6,
//       title: "Community Engagement Amplifies Reach",
//       id: "team1",
//       card: Team,
//       description:
//         "The collective community shares and engages with published creative posts to extend their reach and impact.",
//     },
//     {
//       step: 7,
//       title: "Creatives Earn Points for Rewards",
//       id: "team",
//       card: Team1,
//       description:
//         "Creatives earn points and build leaderboard status throughout the process, redeeming credits for rewards.",
//     },
//   ];

//   return (
//     <div className="mx-auto max-w-6xl px-4 mt-20">
//       <div className="flex w-full items-start gap-20">
//         <div className=" w-full py-[50vh]">
//           <ul>
//             {features.map((feature) => (
//               <li
//                 key={feature.id}
//                 className="flex justify-center items-center gap-6"
//               >
//                 <p className="text-darkGray lg:text-15 text-[16px] primary flex  justify-center items-center border-4 border-darkPink bg-skyBlue rounded-full px-[23px] py-[19px] h-[62px] w-[64px]">
//                   {feature.step}
//                 </p>
//                 <div className="flex flex-col">
//                   <FeatureTitle id={feature.id}>
//                     <div className="flex flex-col gap-2">
//                       <span>{feature.title}</span>
//                       <span className="SpaceMonoRegular ">
//                         {/* <span className="SpaceMonoRegular text-lightGray"> */}
//                         {feature.description}
//                       </span>
//                     </div>
//                   </FeatureTitle>
//                   {/* <p className="SpaceMonoRegular">{feature.description}</p> */}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="sticky top-0 flex h-screen w-full items-center">
//           <div className="relative aspect-square w-[486px] h-[638px] rounded-2xl bg-gray-100 mt-28">
//             {features.map((feature) => (
//               <feature.card id={feature.id} key={feature.id} />
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className="h-[50vh]"></div>
//     </div>
//   );
// };

// export default Works;
// import { stagger, useAnimate } from "framer-motion";
// import {
//   Availability,
//   Colors,
//   Music,
//   SchedulingLinks,
//   Team,
//   Todo,
// } from "@/components/features/card";
// import { FeatureTitle } from "@/components/features/title";
// import { MusicVisual, OtherVisual } from "@/components/features/visual";
// import Hero from "@/components/features/hero";
// import { useFeatureStore } from "@/components/features/store";
// import { useEffect } from "react";
// import { useHidePageOverflow } from "@/utils/toggle-page-overflow";
// import { useEscapePress } from "@/utils/use-escape-press";

// const features = [
//   {
//     title: "Use your calendar as a todo list",
//     id: "todo-list",
//     card: Todo,
//     //      visual: OtherVisual,
//   },
//   {
//     title: "Color your calendar to organize",
//     id: "colors",
//     card: Colors,
//     //      visual: OtherVisual,
//   },
//   {
//     title: "Instantly know if someone is available",
//     id: "availability",
//     card: Availability,
//     //      visual: OtherVisual,
//   },
//   {
//     title: "Track what you listened to when",
//     id: "music",
//     card: Music,
//     visual: MusicVisual,
//   },
//   {
//     title: "Send scheduling links guests love",
//     id: "scheduling-links",
//     card: SchedulingLinks,
//     //      visual: OtherVisual,
//   },
//   {
//     title: "Always know what your team is up to",
//     id: "team",
//     card: Team,
//     //      visual: OtherVisual,
//   },
// ];

// const Works = () => {
//   const [scope, animate] = useAnimate();
//   const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
//   const lastFullscreenFeature = useFeatureStore(
//     (state) => state.lastFullscreenFeature
//   );
//   const setFullscreenFeature = useFeatureStore(
//     (state) => state.setFullscreenFeature
//   );

//   const onEscapePress = () => {
//     if (fullscreenFeature) setFullscreenFeature(null);
//   };

//   useEscapePress(onEscapePress);
//   useHidePageOverflow(!!fullscreenFeature);

//   useEffect(() => {
//     if (fullscreenFeature) {
//       animate([
//         [
//           ".feature-title",
//           { opacity: 0, x: "-200px" },
//           { duration: 0.3, delay: stagger(0.05) },
//         ],
//         [
//           `.visual-${lastFullscreenFeature}`,
//           { opacity: 1, scale: 1, pointerEvents: "auto" },
//           { at: "<" },
//         ],
//         [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
//         [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
//         [
//           ".back-to-site-btn",
//           { opacity: 1, y: "0px" },
//           { at: "<", duration: 0.3 },
//         ],
//       ]);
//     } else {
//       animate([
//         [
//           ".feature-title",
//           { opacity: 1, x: "0px" },
//           { duration: 0.3, delay: stagger(0.05) },
//         ],
//         [
//           `.visual-${lastFullscreenFeature}`,
//           { opacity: 0, scale: 0.75, pointerEvents: "none" },
//           { at: "<" },
//         ],
//         [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
//         [
//           ".back-to-site-btn",
//           { opacity: 0, y: "300px" },
//           { at: "<", duration: 0.3 },
//         ],
//         [".active-card .show-me-btn", { opacity: 1 }],
//       ]);
//     }
//   }, [animate, fullscreenFeature, lastFullscreenFeature]);

//   return (
//     <div className="mx-auto max-w-6xl px-4">
//       <Hero />
//       <div ref={scope}>
//         {features.map((feature) => (
//           <feature.visual id={feature.id} key={feature.id} />
//         ))}
//         <button
//           onClick={() => setFullscreenFeature(null)}
//           className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
//         >
//           Back to site
//         </button>
//         <div className="flex w-full items-start gap-20">
//           <div className="w-full py-[50vh]">
//             <ul>
//               {features.map((feature) => (
//                 <li key={feature.id}>
//                   <FeatureTitle id={feature.id}>{feature.title}</FeatureTitle>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="sticky top-0 flex h-screen w-full items-center">
//             <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
//               {features.map((feature) => (
//                 <feature.card id={feature.id} key={feature.id} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="h-screen">More room to scroll</div>
//     </div>
//   );
// };

// export default Works;
