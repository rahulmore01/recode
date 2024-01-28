import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";

const FeatureTitle = ({ children, id, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature, inViewFeature]);

  return (
    <div className="feature-container">
      <div
        ref={ref}
        className={classNames(
          "primary text-5 pt-16 font-heading transition-colors",
          isInView ? "text-mediumYellow" : "text-lightGray/10"
        )}
      >
        {children}
      </div>
      {description && (
        <div
          className={classNames(
            "SpaceMonoRegular text-[15px] pb-20 pt-6  font-heading transition-colors",
            isInView ? "text-lightGray" : "text-lightGray/10"
          )}
        >
          {description}
        </div>
      )}
    </div>
  );
};

export default FeatureTitle;

// import classNames from "classnames";
// import { useInView } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { useFeatureStore } from "./store";

// const FeatureTitle = ({ children, id, description }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "-50% 0px -50% 0px",
//   });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);

//   return (
//     <div className="feature-container">
//       <div
//         ref={ref}
//         className={classNames(
//           "primary text-5 py-16 font-heading transition-colors",
//           isInView ? "text-mediumYellow" : "text-lightGray/10"
//         )}
//       >
//         {children}
//       </div>
//       {description && (
//         <div
//           className={classNames(
//             "SpaceMonoRegular text-[15px] py-16 font-heading transition-colors",
//             isInView ? "text-lightGray" : "text-lightGray/10"
//           )}
//         >
//           {description}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeatureTitle;
// import classNames from "classnames";
// import { useInView } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { useFeatureStore } from "./store";

// const FeatureTitle = ({ children, id, description }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "-50% 0px -50% 0px",
//   });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);

//   return (
//     <div className="feature-container ">
//       <div
//         ref={ref}
//         className={classNames(
//           "primary text-5 feature-title py-16 font-heading  transition-colors",
//           isInView ? "text-mediumYellow" : "text-mediumYellow/10"
//         )}
//       >
//         {children}
//       </div>
//       {description && (
//         <div
//           className={classNames(
//             "primary text-[15px] feature-title py-16 font-heading  transition-colors",
//             isInView ? "!text-lightGray" : "text-lightGray/10"
//           )}
//         >
//           {description}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeatureTitle
// import classNames from "classnames";
// import { useInView } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { useFeatureStore } from "./store";

// const FeatureTitle = ({ children, id, description }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "-50% 0px -50% 0px",
//   });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);

//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);

//   return (
//     <div className="feature-container ">
//       <div
//         ref={ref}
//         className={classNames(
//           "primary text-5 feature-title py-16 font-heading  transition-colors",
//           isInView ? "text-mediumYellow" : "text-mediumYellow/10"
//         )}
//       >
//         {children}
//       </div>
//       {description && (
//         <div
//           className={classNames(
//             "primary text-[15px] feature-title py-16 font-heading  transition-colors",
//             isInView ? "!text-lightGray" : "text-lightGray/10"
//           )}
//         >
//           {description}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FeatureTitle;

// import classNames from "classnames";
// import { useInView } from "framer-motion";
// import React, { useEffect, useRef } from "react";
// import { useFeatureStore } from "./store";

// const FeatureTitle = ({ children, id }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, {
//     margin: "-50% 0px -50% 0px",
//   });
//   const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
//   const inViewFeature = useFeatureStore((state) => state.inViewFeature);
//   useEffect(() => {
//     if (isInView) setInViewFeature(id);
//     if (!isInView && inViewFeature === id) setInViewFeature(null);
//   }, [isInView, id, setInViewFeature, inViewFeature]);
//   return (
//     <p
//       ref={ref}
//       className={classNames(
//         "primary text-5 feature-title py-16 font-heading text-mediumYellow transition-colors",
//         isInView ? "text-black" : "text-gray-300"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export default FeatureTitle;
