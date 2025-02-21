import React from "react";
import * as Cubes from "arco-cubes-basic";

interface FacebookProfileProps {
  card_type: "small" | "large";
  avatar: string;
  name: string;
  followers_num?: number;
  post_text?: string;
  post_image?: string;
  facebook_profile_url: string;
  use_card_radius?: boolean;
}

const FacebookProfile = ({ datas }: { datas: FacebookProfileProps }) => {
  const social = "facebook";
  const {
    card_type = "small",
    avatar,
    name,
    followers_num = 0,
    post_text,
    post_image,
    facebook_profile_url,
    use_card_radius = true,
  } = datas;

  const is_loading = !name || !facebook_profile_url || !avatar;

  if (is_loading) {
    return <Cubes.SocialProfileLargeSkeleton />;
  }

  if (card_type === "small") {
    return (
      <Cubes.SocialProfileSmall
        social={social}
        name={name}
        profile_url={facebook_profile_url}
        use_card_radius={use_card_radius}
      />
    );
  } else if (card_type === "large") {
    return (
      <Cubes.SocialProfileLarge
        social={social}
        name={name}
        avatar={avatar}
        followers_num={followers_num}
        post_text={post_text}
        post_image={post_image}
        profile_url={facebook_profile_url}
      />
    );
  }
  return null;
};

export default FacebookProfile;
