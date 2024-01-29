import classNames from "classnames";
import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";

const FeatureTitle = ({ children, id }) => {
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
    <div
      ref={ref}
      className={classNames(
        "primary text-5 feature-title py-16 font-heading  transition-colors",
        isInView ? "text-mediumYellow" : "text-mediumYellow/10"
      )}
    >
      {children}
    </div>
  );
};

export default FeatureTitle;
