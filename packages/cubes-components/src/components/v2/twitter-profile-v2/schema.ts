import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "twitter-profile-v2",
  meta_data: {
    name: "twitter-profile-v2",
    display_name: "Twitter Profile",
    description: "",
    type: "social-profile",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-12",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/twitter-profile-v2.png",
  },
  component: "",
  layouts: [
    {
      name: "Small",
      icon_name: "small",
      data: {
        card_type: "small",
      },
    },
    {
      name: "Large",
      icon_name: "large",
      data: {
        card_type: "large",
      },
    },
  ],
  schema: {
    type: "object",
    properties: {
      card_type: {
        title: "Card Type",
        type: "string",
        description: "The type of the card",
        editable: false,
        control: "select",
        options: [
          { title: "Small", value: "small" },
          { title: "Large", value: "large" },
        ],
      },
      avatar: {
        title: "Avatar",
        type: "string",
        description: "The avatar of the twitter profile",
        editable: false,
      },
      name: {
        title: "Name",
        type: "string",
        description: "The name of the twitter profile",
        editable: false,
      },
      followers_num: {
        title: "Followers Number",
        type: "number",
        description: "The follower number of the twitter profile",
        editable: false,
      },
      post_text: {
        title: "Post Text",
        type: "string",
        description: "The text of the post",
        editable: false,
      },
      post_image: {
        title: "Post Image",
        type: "string",
        description: "The image of the post",
        editable: false,
      },
      twitter_profile_url: {
        title: "Twitter Profile URL",
        type: "string",
        description: "The url of the twitter profile",
        editable: false,
      },
    },
    object_order: [
      "card_type",
      "avatar",
      "name",
      "followers_num",
      "post_text",
      "post_image",
      "twitter_profile_url",
    ],
    default: {
      card_type: "large",
      avatar: "",
      name: "",
      twitter_profile_url: "",
    },
    required: ["name", "twitter_profile_url", "card_type", "avatar"],
  },
  preset: {
    "twitter-profile-v2-small": {
      meta_data: {
        name: "twitter-profile-v2-small",
        display_name: "Twitter Profile Small",
        description:
          "A X (Twitter) profile button featuring the X logo, the username, and a “Follow” button with the follower count. The entire card is clickable, redirecting users to the corresponding X/Twitter profile URL. Ideal for embedding X/Twitter profile links, providing quick access with a minimalist design.",
        type: "social-profile",
        tags: [
          "UI_pattern:twitter-profile",
          "platform_specific:Twitter,X",
          "layout:horizontal,small,button",
          "interaction:click-to-jump",
          "support_multiple_links:false",
          "spacing:compact",
          "special:follow_button",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      layout_name: "Small",
      data: {
        card_type: "small",
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        name: "The name of the twitter profile",
        followers_num: 1000,
        post_text: "The text of the post",
        post_image:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        twitter_profile_url: "https://x.com/thearco",
      },
    },
    "twitter-profile-v2-large": {
      meta_data: {
        name: "twitter-profile-v2-large",
        display_name: "Twitter Profile Large",
        description:
          "A large Twitter/X profile card featuring the X logo and a close icon at the top. Below that, it displays a circular avatar, username, a subheading, and a bold “Follow” button with the follower count. The card also includes a tweet-like text section for sharing updates or messages, followed by an image preview. The entire card is clickable, redirecting users to the corresponding Twitter/X profile URL. Ideal for embedding Twitter/X profiles, providing quick access to the profile and showcasing featured content.",
        type: "social-profile",
        tags: [
          "UI_pattern:twitter-profile",
          "platform_specific:Twitter,X",
          "layout:large,card",
          "interaction:click-to-jump",
          "support_multiple_links:false",
          "spacing:compact",
          "special:follow_button",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      layout_name: "Large",
      data: {
        card_type: "large",
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        name: "The name of the twitter profile",
        followers_num: 1000,
        post_text: "The text of the post",
        post_image:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        twitter_profile_url: "https://x.com/thearco",
      },
    },
  },
};

export default schema;
