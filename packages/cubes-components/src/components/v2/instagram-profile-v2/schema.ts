import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "instagram-profile-v2",
  meta_data: {
    type: "social-profile",
    name: "instagram-profile-v2",
    display_name: "Instagram Profile",
    description: "Instagram Profile",
    tags: ["instagram", "profile"],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/instagram-profile-v2.png",
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
        description: "Follower Num",
        editable: false,
        control: "input",
      },
      post_image_list: {
        type: "array",
        description: "Post Image List",
        editable: false,
        control: "image",
        items: {
          type: "string",
          description: "Post Image",
          editable: false,
          control: "image",
        },
      },
      ins_profile_url: {
        type: "string",
        description: "Ins Profile Url",
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
    default: {
      card_type: "medium",
      use_card_radius: true,
      avatar: "",
      name: "",
      bio: "",
      follower_num: 0,
      post_image_list: [],
      ins_profile_url: "",
    },
    required: [
      "card_type",
      "avatar",
      "name",
      "post_image_list",
      "ins_profile_url",
    ],
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
    "instagram-profile-v2-small": {
      meta_data: {
        name: "instagram-profile-v2-small",
        display_name: "Instagram Profile Small",
        description:
          "A Instagram profile button featuring the Instagram logo, the username, and a “Follow” button with the follower count. The entire card is clickable, redirecting users to the corresponding Instagram profile URL. Ideal for embedding Instagram profile links, providing quick access with a minimalist design.",
        tags: [
          "UI_pattern:instagram-profile",
          "platform_specific:Instagram",
          "layout:horizontal,small,button",
          "interaction:click-to-jump",
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
        follower_num: 1001,
        post_image_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        ins_profile_url: "https://arco.ai",
      },
    },
    "instagram-profile-v2-medium": {
      meta_data: {
        name: "instagram-profile-v2-medium",
        display_name: "Instagram Profile Medium",
        description:
          "A medium-sized Instagram profile card featuring a circular avatar, username, a subheading, a “Follow” button with the follower count, and a 1:1 ratio image with the Instagram logo overlay in the corner. The entire card is clickable, redirecting users to the corresponding Instagram profile URL. The profile image is on the left, followed by the username and subheading stacked vertically. The “Follow” button is positioned below the text, with a background for clear visibility. On the right, there’s a square image (1:1 ratio) with rounded corners and an Instagram logo overlay at the top-right corner. Ideal for embedding Instagram profiles, offering a compact yet detailed view with easy access.",
        tags: [
          "UI_pattern:instagram-profile",
          "platform_specific:Instagram",
          "layout:medium,card,image-1x1",
          "interaction:click-to-jump",
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
        follower_num: 1001,
        post_image_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        ins_profile_url: "https://arco.ai",
      },
    },
    "instagram-profile-v2-large": {
      meta_data: {
        name: "instagram-profile-v2-large",
        display_name: "Instagram Profile Large",
        description:
          "A large Instagram profile card featuring the Instagram logo at the top, followed by a circular avatar, username, a subheading, and a “Follow” button with the follower count. Below this section is a 4-image grid gallery, showcasing the user’s posts. The entire card is clickable, redirecting users to the corresponding Instagram profile URL. The 4-image grid forms an irregular masonry layout, for a clean, dynamic look. Ideal for embedding Instagram profiles, offering a detailed view of the profile with quick access to recent posts.",
        tags: [
          "UI_pattern:instagram-profile",
          "platform_specific:Instagram",
          "layout:large,grid,column-two,irregular-masonry,asymmetry",
          "interaction:click-to-jump",
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
        follower_num: 999,
        post_image_list: [
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        ],
        ins_profile_url: "https://arco.ai",
      },
    },
  },
};

export default schema;
