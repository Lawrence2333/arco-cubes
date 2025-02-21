import React from "react";
import * as Cubes from "arco-cubes-basic";

interface YoutubeProfileProps {
  card_type: "small" | "medium" | "large";
  avatar?: string;
  name?: string;
  video_thumbnail_list?: string[];
  subscribe_num?: number;
  youtube_profile_url?: string;
  use_card_radius?: boolean;
}

const YoutubeProfile = ({ datas }: { datas: YoutubeProfileProps }) => {
  const social = "youtube";
  const {
    card_type = "small",
    avatar,
    name,
    video_thumbnail_list = [],
    subscribe_num,
    youtube_profile_url,
    use_card_radius = true,
  } = datas;

  const is_loading = !name;

  const renderMedium = () => {
    return (
      <Cubes.SocialProfileMedium
        social={social}
        name={"@" + name}
        avatar={avatar}
        followers_num={subscribe_num}
        post_image={video_thumbnail_list[0]}
        profile_url={youtube_profile_url}
        thumbnail_ratio="16/9"
      />
    );
  };

  const renderLarge = () => {
    return (
      <Cubes.SocialProfileLargeGallery
        social={social}
        name={name}
        avatar={avatar}
        followers_num={subscribe_num}
        profile_url={youtube_profile_url}
      >
        <div className="grid grid-cols-2 gap-3 w-full">
          {video_thumbnail_list.map((thumbnail, index) => (
            <img
              key={index}
              src={thumbnail}
              className="w-full object-cover aspect-[16/9] rounded-xl"
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
        name={name}
        profile_url={youtube_profile_url}
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

export default YoutubeProfile;
