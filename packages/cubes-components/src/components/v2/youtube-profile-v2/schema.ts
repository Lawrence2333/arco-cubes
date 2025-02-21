import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "youtube-profile-v2",
  meta_data: {
    type: "social-profile",
    name: "youtube-profile-v2",
    display_name: "Youtube Profile",
    description: "Youtube Profile",
    tags: ["youtube", "profile"],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/youtube-profile-v2.png",
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
      subscribe_num: {
        type: "number",
        description: "Subscribe Number",
        editable: false,
        control: "input",
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
      youtube_profile_url: {
        type: "string",
        description: "Youtube Profile Url",
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
      "youtube_profile_url",
      "card_type",
      "avatar",
      "video_thumbnail_list",
    ],
    default: {
      card_type: "medium",
      avatar: "",
      name: "",
      video_thumbnail_list: [],
      youtube_profile_url: "",
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
    "youtube-profile-v2-small": {
      meta_data: {
        name: "youtube-profile-v2-small",
        display_name: "Youtube Profile Small",
        description:
          "A YouTube profile button featuring the YouTube logo, the username, and a “Subscribe” button with the subscriber count. The entire card is clickable, redirecting users to the corresponding YouTube profile URL. Ideal for embedding YouTube profile links, providing quick access with a minimalist design.",
        tags: [
          "UI_pattern:youtube-profile",
          "platform_specific:YouTube",
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
        subscribe_num: 1000,
        video_thumbnail_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        youtube_profile_url: "https://arco.ai",
      },
    },
    "youtube-profile-v2-medium": {
      meta_data: {
        name: "youtube-profile-v2-medium",
        display_name: "Youtube Profile Medium",
        description:
          "A medium-sized YouTube profile card featuring a circular avatar, username, a subheading, a “Subscribe” button with the subscriber count, and a 16:9 ratio image with the YouTube logo overlay in the corner. The entire card is clickable, redirecting users to the corresponding YouTube profile URL. The profile image is on the left, followed by the username and subheading stacked vertically. The “Subscribe” button is positioned below the text, with a background for clear visibility. On the right, there’s a image (16:9 ratio) and an YouTube logo overlay at the top-right corner. Ideal for embedding YouTube profiles, offering a compact yet detailed view with easy access.",
        tags: [
          "UI_pattern:youtube-profile",
          "platform_specific:YouTube",
          "layout:medium,card,image-16x9",
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
        subscribe_num: 4123282,
        video_thumbnail_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        youtube_profile_url: "https://arco.ai",
      },
    },
    "youtube-profile-v2-large": {
      meta_data: {
        name: "youtube-profile-v2-large",
        display_name: "Youtube Profile Large",
        description:
          "A large YouTube profile card featuring the YouTube logo at the top, followed by a circular avatar, username, a subheading, and a bold “Subscribe” button with the subscriber count. Below the profile section is a 4-video thumbnail (16:9 ratio) grid, showcasing featured content. The entire card is clickable, redirecting users to the corresponding YouTube profile URL. Ideal for embedding YouTube profiles, providing quick access to the channel and highlighting recent videos.",
        tags: [
          "UI_pattern:youtube-profile",
          "platform_specific:YouTube",
          "layout:large,grid,column-two,symmetry,image-16x9",
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
        subscribe_num: 88888888,
        video_thumbnail_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        youtube_profile_url: "https://arco.ai",
      },
    },
  },
};

export default schema;
