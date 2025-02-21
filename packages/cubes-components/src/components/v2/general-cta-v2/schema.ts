import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "general-cta-v2",
  meta_data: {
    name: "general-cta-v2",
    display_name: "General CTA",
    type: "call-to-action",
    description: "A general call-to-action component.",
    tags: ["general-cta"],
    version: "2.0.0",
    created_at: "2025-02-10",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/general-cta-v2.png",
  },
  component: "",
  layouts: [
    {
      icon_name: "small",
      name: "Small",
      data: {
        use_card_radius: false,
        cta_style: "small",
      },
    },
    {
      icon_name: "large",
      name: "Large",
      data: {
        use_card_radius: true,
        cta_style: "large",
      },
    },
    {
      icon_name: "grid",
      name: "Grid",
      data: {
        use_card_radius: true,
        cta_style: "grid",
      },
    },
    {
      icon_name: "carousel",
      name: "Carousel",
      data: {
        use_card_radius: true,
        cta_style: "carousel",
      },
    },
  ],
  schema: {
    type: "object",
    default: {
      use_card_radius: false,
      cta_style: "small",
      cta_list: [],
    },
    properties: {
      use_card_radius: {
        type: "boolean",
        description: "Whether to use card radius",
        editable: false,
        control: "switch",
      },
      cta_style: {
        type: "string",
        description: "The style of the cta",
        editable: false,
        control: "select",
        options: [
          { title: "Small", value: "small" },
          { title: "Grid", value: "grid" },
          { title: "Large", value: "large" },
          { title: "Carousel", value: "carousel" },
        ],
      },
      cta_list: {
        type: "array",
        editable: true,
        items: {
          type: "object",
          control: "cta_link",
          properties: {
            avatar: {
              type: "string",
              description: "The avatar of the cta using in small cta",
              editable: true,
              control: "image",
            },
            title: {
              type: "string",
              description: "The title of the cta",
              editable: true,
              control: "input",
            },
            image: {
              type: "string",
              description: "The image of the cta",
              editable: true,
              control: "image",
            },
            jump_url: {
              type: "string",
              description: "The jump url of the cta",
              editable: true,
            },
          },
          required: ["title", "image", "jump_url", "avatar"],
          default: {
            title: "",
            image: "",
            jump_url: "",
            avatar: "",
          },
        },
      },
    },
    required: ["cta_list", "cta_style", "use_card_radius"],
  },
  preset: {
    "general-cta-v2-small": {
      meta_data: {
        name: "general-cta-v2-small",
        display_name: "General CTA Small",
        type: "call-to-action",
        description:
          "A sleek CTA button component featuring a thumbnail image and a title. Clicking the button opens an external link, making it ideal for content lists, product cards, or feature previews where quick access to more detailed information is needed. This component supports multiple links, displayed as a vertically stacked button list, ensuring a consistent and organized UI when handling multiple actions.",
        tags: [
          "UI_pattern:general-cta",
          "layout:vertical,button,small",
          "interaction:click-to-jump",
          "support_multiple_links:true",
          "spacing:moderate",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Small",
      data: {
        use_card_radius: false,
        cta_style: "small",
        cta_list: [
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Small",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
        ],
      },
    },
    "general-cta-v2-grid": {
      meta_data: {
        name: "general-cta-v2-grid",
        display_name: "General CTA Grid",
        type: "call-to-action",
        description:
          "A grid-based card component featuring 1:1 images and titles. The layout divides each row into two equally spaced columns, and clicking on any card redirects users to a specified link. When populating the data, only an even number of items can be added to ensure proper alignment of the grid. Ideal for presenting products, articles, or featured items in a structured and visually appealing format.",
        tags: [
          "UI_pattern:general-cta",
          "layout:horizontal,column-two,grid,image-1x1",
          "interaction:click-to-jump",
          "support_multiple_links:true",
          "spacing:moderate",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Grid",
      data: {
        cta_style: "grid",
        use_card_radius: true,
        cta_list: [
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Grid1",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Grid2",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
        ],
      },
    },
    "general-cta-v2-large": {
      meta_data: {
        name: "general-cta-v2-large",
        display_name: "General CTA Large",
        type: "call-to-action",
        description:
          "A clickable hero card component featuring a 16:9 image and a title. Clicking the card redirects users to a specified link, making it ideal for showcasing products, articles, or featured content with a clear call-to-action. When there is only one link, the slider indicator (dots) is hidden. When there are multiple links, a slider indicator appears, and users can swipe left or right to navigate between items. Image, title, and link change together as users swipe, ensuring that clicking on each image redirects to its corresponding link.",
        tags: [
          "UI_pattern:general-cta",
          "layout:vertical,hero-card,large,slider,image-16x9",
          "interaction:click-to-jump,swipeable",
          "support_multiple_links:true",
          "spacing:moderate",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Large",
      data: {
        use_card_radius: true,
        cta_style: "large",
        cta_list: [
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Large",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Large2",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
        ],
      },
    },
    "general-cta-v2-carousel": {
      meta_data: {
        name: "general-cta-v2-carousel",
        display_name: "General CTA Carousel",
        type: "call-to-action",
        description:
          "A carousel component featuring 1:1 images and titles. Cards are displayed in a horizontal layout, supporting click-to-redirect functionality for each card. When there are more than 3 items, the component becomes horizontally scrollable. Ensure the number of items does not exceed 3 significantly when filling in data to maintain optimal visibility and user engagement. Ideal for showcasing multiple products, articles, or featured content in a compact and interactive format.",
        tags: [
          "UI_pattern:general-cta",
          "layout:horizontal,carousel,image-1x1",
          "interaction:click-to-jump,swipeable",
          "support_multiple_links:true",
          "spacing:moderate",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Carousel",
      data: {
        cta_style: "carousel",
        use_card_radius: true,
        cta_list: [
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Carousel1",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
          {
            avatar:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            title: "General CTA Carousel2",
            image:
              "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
            jump_url: "https://arco.ai",
          },
        ],
      },
    },
  },
};

export default schema;
