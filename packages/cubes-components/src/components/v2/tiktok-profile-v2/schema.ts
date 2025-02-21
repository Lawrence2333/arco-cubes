import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "tiktok-profile-v2",
  meta_data: {
    type: "social-profile",
    name: "tiktok-profile-v2",
    display_name: "Tiktok Profile",
    description: "Tiktok Profile",
    tags: ["tiktok", "profile"],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/tiktok-profile-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      card_type: {
        type: "string",
        description: "Card Type",
        editable: false,
        control: "select",
        options: [
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
      avatar: {
        type: "string",
        description: "Avatar",
        editable: false,
        control: "image",
      },
      name: {
        type: "string",
        description: "Name",
        editable: false,
        control: "input",
      },
      follower_num: {
        type: "number",
        description: "Follower Number",
        editable: false,
      },
      video_thumbnail_list: {
        type: "array",
        description: "Video Thumbnail List",
        editable: false,
        control: "image",
        items: {
          type: "string",
          description: "Video Thumbnail",
          editable: false,
          control: "image",
        },
      },
      tiktok_profile_url: {
        type: "string",
        description: "Tiktok Profile Url",
        editable: false,
        control: "input",
      },
      use_card_radius: {
        type: "boolean",
        description: "Use Card Radius",
        editable: false,
        control: "switch",
      },
    },
    required: [
      "name",
      "tiktok_profile_url",
      "card_type",
      "avatar",
      "video_thumbnail_list",
    ],
    default: {
      card_type: "medium",
      avatar: "",
      name: "",
      video_thumbnail_list: [],
      tiktok_profile_url: "",
    },
  },
  layouts: [
    {
      icon_name: "small",
      name: "Small",
      data: {
        card_type: "small",
        use_card_radius: false,
      },
    },
    {
      icon_name: "medium",
      name: "Medium",
      data: {
        card_type: "medium",
        use_card_radius: true,
      },
    },
    {
      icon_name: "large",
      name: "Large",
      data: {
        card_type: "large",
        use_card_radius: true,
      },
    },
  ],
  preset: {
    "tiktok-profile-v2-small": {
      meta_data: {
        name: "tiktok-profile-v2-small",
        display_name: "Tiktok Profile Small",
        description:
          "A TikTok profile button featuring the TikTok logo, the username, and a “Follow” button with the follower count. The entire card is clickable, redirecting users to the corresponding TikTok profile URL. Ideal for embedding TikTok profile links, providing quick access with a minimalist design.",
        tags: [
          "UI_pattern:tiktok-profile",
          "platform_specific:TikTok",
          "layout:horizontal,small,button",
          "interaction:click-to-jump",
          "support_multiple_links:false",
          "spacing:compact",
          "special:follow_button",
        ],
        type: "social-profile",
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Small",
      data: {
        card_type: "small",
        use_card_radius: false,
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        name: "UserName",
        follower_num: 1000,
        video_thumbnail_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        tiktok_profile_url: "https://arco.ai",
      },
    },
    "tiktok-profile-v2-medium": {
      meta_data: {
        name: "tiktok-profile-v2-medium",
        display_name: "Tiktok Profile Medium",
        description:
          "A medium-sized TikTok profile card featuring a circular avatar, username, a subheading, a “Follow” button with the follower count, and a 1:1 ratio image with the TikTok logo overlay in the corner. The entire card is clickable, redirecting users to the corresponding TikTok profile URL. The profile image is on the left, followed by the username and subheading stacked vertically. The “Follow” button is positioned below the text, with a background for clear visibility. On the right, there’s a image (1:1 ratio) and an TikTok logo overlay at the top-right corner. Ideal for embedding TikTok profiles, offering a compact yet detailed view with easy access.",
        tags: [
          "UI_pattern:tiktok-profile",
          "platform_specific:TikTok",
          "layout:medium,card,image-1x1",
          "interaction:click-to-jump",
          "support_multiple_links:false",
          "spacing:compact",
          "special:follow_button",
        ],
        type: "social-profile",
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Medium",
      data: {
        card_type: "medium",
        use_card_radius: true,
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        name: "UserName",
        follower_num: 1230,
        video_thumbnail_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        tiktok_profile_url: "https://arco.ai",
      },
    },
    "tiktok-profile-v2-large": {
      meta_data: {
        name: "tiktok-profile-v2-large",
        display_name: "Tiktok Profile Large",
        description:
          "A large TikTok profile card featuring the TikTok logo at the top, followed by a circular avatar, username, a subheading, and a bold “Follow” button with the follower count. Below the profile section is a 3-video thumbnail (9:16 ratio) grid, showcasing featured content. The entire card is clickable, redirecting users to the corresponding TikTok profile URL. Ideal for embedding TikTok profiles, providing quick access to the channel and highlighting recent videos.",
        tags: [
          "UI_pattern:tiktok-profile",
          "platform_specific:TikTok",
          "layout:large,grid,column-three,symmetry,image-9x16",
          "interaction:click-to-jump",
          "support_multiple_links:false",
          "spacing:compact",
          "special:follow_button",
        ],
        type: "social-profile",
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Large",
      data: {
        card_type: "large",
        use_card_radius: true,
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        name: "UserName",
        follower_num: 1230,
        video_thumbnail_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        tiktok_profile_url: "https://arco.ai",
      },
    },
  },
};

export default schema;
