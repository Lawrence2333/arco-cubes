import React from "react";
import SectionCard from "../ui-components/SectionCard";

export const SocialProfileLargeSkeleton = () => {
  return (
    <SectionCard className="flex flex-col gap-3">
      <div className="flex flex-row items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-on-primary/20 animate-pulse"></div>
        <div className="h-4 w-16 rounded-full bg-on-primary/20 animate-pulse"></div>
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-2">
          <div className="w-[48px] h-[48px] rounded-full bg-on-primary/20 animate-pulse"></div>
          <div className="flex flex-col gap-0.5">
            <div className="h-4 w-32 rounded-full bg-on-primary/20 animate-pulse"></div>
            <div className="h-3 w-24 rounded-full bg-on-primary/20 animate-pulse"></div>
          </div>
        </div>
        <div className="h-8 w-24 rounded-full bg-on-primary/20 animate-pulse"></div>
      </div>
      <div className="w-full aspect-[16/10] rounded-xl bg-on-primary/20 animate-pulse"></div>
    </SectionCard>
  );
};
