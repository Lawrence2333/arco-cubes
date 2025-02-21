import React from "react";
import * as Cubes from "arco-cubes-basic";

interface TiktokProfileProps {
  card_type: "small" | "medium" | "large";
  avatar?: string;
  name?: string;
  follower_num?: number;
  video_thumbnail_list?: string[];
  tiktok_profile_url?: string;
  use_card_radius?: boolean;
}

const TiktokProfile = ({ datas }: { datas: TiktokProfileProps }) => {
  const social = "tiktok";
  const {
    card_type = "small",
    avatar,
    name,
    follower_num = 0,
    video_thumbnail_list = [],
    tiktok_profile_url,
    use_card_radius = true,
  } = datas;

  const is_loading = !name;

  const renderMedium = () => {
    return (
      <Cubes.SocialProfileMedium
        social={social}
        name={name}
        avatar={avatar}
        followers_num={follower_num}
        post_image={video_thumbnail_list[0]}
        profile_url={tiktok_profile_url}
      />
    );
  };

  const renderLarge = () => {
    return (
      <Cubes.SocialProfileLargeGallery
        social={social}
        name={name}
        avatar={avatar}
        followers_num={follower_num}
        profile_url={tiktok_profile_url}
      >
        <div className="grid grid-cols-3 gap-3 w-full">
          {video_thumbnail_list.slice(0, 3).map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              className="w-full object-cover aspect-[9/16] rounded-xl"
            />
          ))}
        </div>
      </Cubes.SocialProfileLargeGallery>
    );
  };

  if (is_loading) {
    return <Cubes.SocialProfileMediumSkeleton />;
  }

  if (card_type === "small") {
    return (
      <Cubes.SocialProfileSmall
        social={social}
        name={"@" + name}
        profile_url={tiktok_profile_url}
        use_card_radius={use_card_radius}
      />
    );
  } else if (card_type === "medium") {
    return renderMedium();
  } else if (card_type === "large") {
    return renderLarge();
  }
  return null;
};

export default TiktokProfile;
