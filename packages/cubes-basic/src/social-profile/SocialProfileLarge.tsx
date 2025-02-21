import React from "react";
import SectionCard from "../ui-components/SectionCard";
import { SocialIcon } from "../ui-components/SocialIcon";
import { formatNumber } from "../tracking/Tools";

export interface SocialProfileLargeProps {
  social: string;
  name: string;
  avatar?: string;
  followers_num?: number;
  post_text?: string;
  post_image?: string;
  profile_url?: string;
}

export const SocialProfileLarge = ({
  social,
  name,
  avatar,
  followers_num = 0,
  post_text,
  post_image,
  profile_url,
}: SocialProfileLargeProps) => {
  return (
    <SectionCard className="flex flex-col gap-3" href={profile_url}>
      <div className="flex flex-row items-center gap-2">
        <SocialIcon social={social} className="w-5 h-5" />
        <div className="text-base font-normal font-secondary text-on-primary">
          {social}
        </div>
      </div>
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-2 my-1">
          <img
            src={avatar}
            className="w-[48px] h-[48px] object-cover rounded-full"
          />
          <div className="flex flex-col gap-0.5">
            <div className="text-base font-medium font-secondary text-on-primary break-all line-clamp-1">
              {name}
            </div>
            <div className="text-sm font-normal text-on-primary/65 break-all line-clamp-1">
              {formatNumber(followers_num)}{" "}
              {social === "youtube" ? "Subscribers" : "Followers"}
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-3">
          <div className="flex flex-row items-center bg-tertiary font-secondary text-on-tertiary rounded-full h-8 p-3 font-normal shrink-0 text-sm">
            Follow
          </div>
        </div>
      </div>
      {post_text && (
        <div className="text-base px-1.5 font-normal text-on-primary/65 break-all line-clamp-2">
          {post_text}
        </div>
      )}
      {post_image && (
        <img
          src={post_image}
          className="w-full object-cover aspect-[16/10] rounded-xl mb-3"
        ></img>
      )}
    </SectionCard>
  );
};
