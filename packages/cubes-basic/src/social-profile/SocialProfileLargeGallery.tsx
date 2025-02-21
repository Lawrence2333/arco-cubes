import React, { type ReactNode } from "react";
import { SocialIcon } from "../ui-components/SocialIcon";
import SectionCard from "../ui-components/SectionCard";
import { formatNumber } from "../tracking/Tools";

export interface SocialProfileLargeGalleryProps {
  social: string;
  name?: string;
  avatar?: string;
  followers_num?: number;
  profile_url?: string;
  children: ReactNode;
}

export const SocialProfileLargeGallery = ({
  social,
  name,
  avatar,
  followers_num,
  profile_url,
  children,
}: SocialProfileLargeGalleryProps) => {
  return (
    <SectionCard className="flex flex-col gap-3" href={profile_url}>
      <div className="w-full flex flex-row items-center gap-2">
        <SocialIcon social={social} className="w-5 h-5" />
        <div className="text-base font-normal font-secondary text-on-primary capitalize">
          {social}
        </div>
      </div>
      <div className="flex flex-col w-full gap-3">
        <div className="flex flex-row items-center gap-3 justify-between w-full">
          <div className="flex flex-row items-center gap-3 my-1">
            <img
              src={avatar}
              className="w-[48px] h-[48px] object-cover rounded-full"
            />
            <div className="flex flex-col gap-1">
              <div className="text-base font-medium font-secondary text-on-primary break-all line-clamp-1">
                {name}
              </div>
              <div className="text-sm font-normal text-on-primary/65 break-all line-clamp-1">
                {followers_num && formatNumber(followers_num)}{" "}
                {social === "youtube" ? "Subscribers" : "Followers"}
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-3 shrink-0">
            <div className="flex flex-row items-center bg-tertiary font-secondary text-on-tertiary rounded-full h-8 p-3 font-normal text-sm">
              {social === "youtube" ? "Subscribe" : "Follow"}
            </div>
          </div>
        </div>
        {children}
      </div>
    </SectionCard>
  );
};
