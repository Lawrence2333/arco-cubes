import React from "react";
import SectionCard from "../ui-components/SectionCard";

export const SocialProfileMediumSkeleton = () => {
  return (
    <SectionCard className="flex flex-row items-center justify-between gap-3">
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <div className="w-[48px] h-[48px] rounded-full bg-on-primary/20 animate-pulse"></div>
          <div className="flex flex-col gap-1">
            <div className="h-4 w-32 rounded-full bg-on-primary/20 animate-pulse"></div>
            <div className="h-3 w-24 rounded-full bg-on-primary/20 animate-pulse"></div>
          </div>
        </div>
        <div className="h-8 w-24 rounded-full bg-on-primary"></div>
      </div>
      <div className="relative w-[96px] h-[96px] shrink-0">
        <div className="w-full h-full rounded-xl bg-on-primary/20 animate-pulse"></div>
      </div>
    </SectionCard>
  );
};
