import React from "react";
import * as Cubes from "arco-cubes-basic";

interface InstagramProfileProps {
  card_type: "small" | "medium" | "large";
  avatar?: string;
  name?: string;
  follower_num?: number;
  post_image_list?: string[];
  ins_profile_url?: string;
  use_card_radius?: boolean;
}

const InstagramProfile = ({ datas }: { datas: InstagramProfileProps }) => {
  const social = "instagram";
  const {
    card_type = "small",
    avatar,
    name,
    follower_num = 0,
    post_image_list = [],
    ins_profile_url,
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
        post_image={post_image_list[0]}
        profile_url={ins_profile_url}
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
        profile_url={ins_profile_url}
      >
        <div className="columns-2 gap-3">
          <img
            src={post_image_list.length > 0 ? post_image_list[0] : ""}
            className="w-full object-cover aspect-square rounded-xl mb-3"
          />
          {post_image_list.length > 1 && (
            <img
              src={post_image_list[1]}
              className="w-full object-cover aspect-[4/5] rounded-xl"
            />
          )}
          {post_image_list.length > 2 && (
            <img
              src={post_image_list[2]}
              className="w-full object-cover aspect-[4/5] rounded-xl mb-3"
            />
          )}
          {post_image_list.length > 3 && (
            <img
              src={post_image_list[3]}
              className="w-full object-cover aspect-square rounded-xl"
            />
          )}
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
        profile_url={ins_profile_url}
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

export default InstagramProfile;
