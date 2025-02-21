import React from "react";
import { cn } from "../lib/utils";
import SectionCard from "../ui-components/SectionCard";
import { SocialIcon } from "../ui-components/SocialIcon";

export interface SocialProfileSmallProps {
  social: string;
  name: string;
  profile_url?: string;
  use_card_radius?: boolean;
}

export const SocialProfileSmall = ({
  social,
  name,
  profile_url,
  use_card_radius = true,
}: SocialProfileSmallProps) => {
  const renderFollowButton = () => {
    const follower_num_text = social === "youtube" ? "Subscribe" : "Follow";
    return (
      <div className="flex flex-row items-center bg-tertiary font-secondary text-on-tertiary rounded-full h-8 p-3 font-normal shrink-0 text-sm">
        {follower_num_text}
      </div>
    );
  };

  return (
    <SectionCard
      className={cn(
        "items-center justify-between flex flex-row gap-2",
        use_card_radius ? "rounded-3xl" : "rounded-full"
      )}
      href={profile_url}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        <div className="flex flex-row items-center">
          <SocialIcon social={social} className="w-8 h-8 shrink-0" />
        </div>
        <div className="text-base font-medium font-secondary text-on-primary break-all line-clamp-1">
          {name}
        </div>
      </div>
      {renderFollowButton()}
    </SectionCard>
  );
};
