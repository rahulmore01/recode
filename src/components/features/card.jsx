import React from "react";
import classNames from "classnames";
import { useFeatureStore } from "./store";

const FeatureCard = ({ children, id, imageUrl }) => {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  return (
    <div
      className={classNames(
        "absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br transition-opacity",
        inViewFeature === id
          ? "active-card opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <img
        src={imageUrl}
        alt={`Feature ${id}`}
        className="w-full h-full object-cover rounded-2xl"
      />
      {children}
    </div>
  );
};

export const Todo = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1671920090611-9a40303b52cb?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};

export const Colors = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1706065456531-8545fc5050f4?q=80&w=2553&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};

export const Availability = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1706061751033-00868d1c6b72?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};

export const Music = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1705657309585-bfd95e05d0fb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};

export const SchedulingLinks = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1705787333828-1b1dd2b851ac?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};

export const Team = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1706061751033-00868d1c6b72?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};
export const Team1 = ({ id }) => {
  const imageUrl =
    "https://plus.unsplash.com/premium_photo-1705352059948-e5512efca860?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};
export const Team2 = ({ id }) => {
  const imageUrl =
    "https://images.unsplash.com/photo-1706061751033-00868d1c6b72?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return <FeatureCard id={id} imageUrl={imageUrl} />;
};
