import React from "react";
import { SocialIcon } from "../ui-components/SocialIcon";
import SectionCard from "../ui-components/SectionCard";
import { formatNumber } from "../tracking/Tools";
import { cn } from "../lib/utils";

export interface SocialProfileMediumProps {
  social: string;
  name?: string;
  avatar?: string;
  followers_num?: number;
  post_image?: string;
  profile_url?: string;
  thumbnail_ratio?: string;
}

export const SocialProfileMedium = ({
  social,
  name,
  avatar,
  followers_num,
  post_image,
  profile_url,
  thumbnail_ratio = "1/1",
}: SocialProfileMediumProps) => {
  const thumbnail_ratio_class = `aspect-[${thumbnail_ratio}]`;
  return (
    <SectionCard
      className="flex flex-row items-center justify-between gap-3"
      href={profile_url}
    >
      <div className="flex flex-col gap-2 h-[96px] justify-between">
        <div className="flex flex-row items-center gap-2">
          <img
            src={avatar}
            className="w-[48px] h-[48px] object-cover rounded-full my-1"
          />
          <div className="flex flex-col gap-0.5">
            <div className="text-base font-medium font-secondary text-on-primary break-all line-clamp-1">
              {name}
            </div>
            <div className="text-sm font-normal text-on-primary/65 break-all line-clamp-1">
              {followers_num && formatNumber(followers_num)}{" "}
              {social === "youtube" ? "Subscribers" : "Followers"}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="flex flex-row items-center bg-tertiary font-secondary text-on-tertiary rounded-full h-8 p-3 font-normal shrink-0 text-sm">
            {social === "youtube" ? "Subscribe" : "Follow"}
          </div>
        </div>
      </div>
      {post_image && (
        <div className="relative shrink-0">
          <img
            src={post_image}
            className={cn(
              "h-[96px] object-cover rounded-xl",
              thumbnail_ratio_class
            )}
          />
          <SocialIcon
            social={social}
            className="w-5 h-5 absolute top-1 right-1"
          />
        </div>
      )}
    </SectionCard>
  );
};
