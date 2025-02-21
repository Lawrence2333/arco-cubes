import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "social-icon-v2",
  meta_data: {
    name: "social-icon-v2",
    display_name: "Social Icon Links",
    type: "social-icon",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-12",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/social-icon-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      social_links: {
        type: "object",
        title: "Social Links",
        description: "Social Links",
        control: "social_link",
        editable: true,
        properties: {
          icon_group: {
            type: "string",
            title: "Icon Type",
            description: "Icon Type",
            default: "monochrome-round",
            editable: false,
            control: "select",
            options: [
              { title: "Monochrome Round", value: "monochrome-round" },
              { title: "Monochrome Shaped", value: "monochrome-shaped" },
              { title: "Color Round", value: "color-round" },
              { title: "Color Shape", value: "color-shape" },
            ],
          },
          links: {
            type: "array",
            title: "Social Links",
            description: "Social Links",
            editable: true,
            items: {
              type: "object",
              properties: {
                link: {
                  type: "string",
                  title: "Link",
                  description: "Link",
                  editable: true,
                },
                icon_name: {
                  type: "string",
                  title: "Icon Name",
                  description: "Icon Name",
                  editable: true,
                },
              },
              default: {
                link: "https://arco.ai",
                icon_name: "default",
              },
              required: ["link", "icon_name"],
              object_order: ["link", "icon_name"],
            },
          },
        },
        required: ["icon_group", "links"],
        object_order: ["icon_group", "links"],
      },
      show_border: {
        type: "boolean",
        title: "Show Border",
        description: "Show Border",
        default: false,
        editable: false,
        control: "switch",
      },
    },
    required: ["social_links", "show_border"],
    object_order: ["social_links", "show_border"],
    default: {
      social_links: {
        icon_group: "color-shape",
        links: [],
      },
      show_border: false,
    },
  },
  preset: {
    "social-round-color": {
      meta_data: {
        display_name: "Social Icon Links Color Round",
        name: "social-round-color",
        type: "social-icon",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/social-round-color.png",
        description:
          "A customizable social media links component for displaying your social presence. Each icon is presented as a logo with a solid background for better visibility. The icons are colorful and use the official brand colors of each platform, enhancing brand recognition and visual appeal. This social icon component is designed to be displayed together with the profile component. On desktop devices, it appears on the left side alongside the profile component.",
        tags: [
          "UI_pattern:icon_list",
          "layout:horizontal",
          "alignment:mobile-center,desktop-left",
          "interaction:click-to-jump",
          "support_multiple_links:true",
          "spacing:moderate",
          "icon_style:round-color",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      data: {
        show_border: false,
        social_links: {
          icon_group: "color-round",
          links: [],
        },
      },
    },
    "social-round-monochrome": {
      meta_data: {
        display_name: "Social Icon Links Monochrome Round",
        name: "social-round-monochrome",
        type: "social-icon",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/social-round-monochrome.png",
        description:
          "A customizable social media links component for displaying your social presence. Each icon is presented as a logo with a solid background for better visibility. Both the background and logo are in monochrome, ensuring a clean and minimalist look. This social icon component is designed to be displayed together with the profile component. On desktop devices, it appears on the left side alongside the profile component.",
        tags: [
          "UI_pattern:icon_list",
          "layout:horizontal",
          "alignment:mobile-center,desktop-left",
          "interaction:click-to-jump",
          "support_multiple_links:true",
          "spacing:moderate",
          "icon_style:round-monochrome",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      data: {
        show_border: false,
        social_links: {
          icon_group: "monochrome-round",
          links: [
            {
              link: "https://arco.ai",
              icon_name: "arco",
            },
            {
              link: "https://x.com/Arco_Ai",
              icon_name: "x",
            },
            {
              link: "https://www.instagram.com/_arco.ai/",
              icon_name: "instagram",
            },
            {
              link: "https://www.youtube.com/@Arco_AI",
              icon_name: "youtube",
            },
          ],
        },
      },
    },
    "social-shaped-color": {
      meta_data: {
        display_name: "Social Icon Links Color Shaped",
        name: "social-shaped-color",
        type: "social-icon",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/social-shaped-color.png",
        description:
          "A customizable social media links component for displaying your social presence. The icons are presented as pure logos without any background for a clean and seamless appearance. The icons are colorful and use the official brand colors of each platform, enhancing brand recognition and visual appeal. This social icon component is designed to be displayed together with the profile component. On desktop devices, it appears on the left side alongside the profile component.",
        tags: [
          "UI_pattern:icon_list",
          "layout:horizontal",
          "alignment:mobile-center,desktop-left",
          "interaction:click-to-jump",
          "support_multiple_links:true",
          "spacing:moderate",
          "icon_style:shaped-color",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      data: {
        show_border: false,
        social_links: {
          icon_group: "color-shape",
          links: [
            {
              link: "https://arco.ai",
              icon_name: "arco",
            },
            {
              link: "https://x.com/Arco_Ai",
              icon_name: "x",
            },
            {
              link: "https://www.instagram.com/_arco.ai/",
              icon_name: "instagram",
            },
            {
              link: "https://www.youtube.com/@Arco_AI",
              icon_name: "youtube",
            },
          ],
        },
      },
    },
    "social-shaped-monochrome": {
      meta_data: {
        display_name: "Social Icon Links Monochrome Shaped",
        name: "social-shaped-monochrome",
        type: "social-icon",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/social-shaped-monochrome.png",
        description:
          "A customizable social media links component for displaying your social presence. The icons are presented as pure logos without any background for a clean and seamless appearance. All logos are in monochrome, ensuring a minimalist and consistent style. This social icon component is designed to be displayed together with the profile component. On desktop devices, it appears on the left side alongside the profile component.",
        tags: [
          "UI_pattern:icon_list",
          "layout:horizontal",
          "alignment:mobile-center,desktop-left",
          "interaction:click-to-jump",
          "support_multiple_links:true",
          "spacing:moderate",
          "icon_style:shaped-monochrome",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      data: {
        show_border: false,
        social_links: {
          icon_group: "monochrome-shaped",
          links: [
            {
              link: "https://arco.ai",
              icon_name: "arco",
            },
            {
              link: "https://x.com/Arco_Ai",
              icon_name: "x",
            },
            {
              link: "https://www.instagram.com/_arco.ai/",
              icon_name: "instagram",
            },
            {
              link: "https://www.youtube.com/@Arco_AI",
              icon_name: "youtube",
            },
          ],
        },
      },
    },
  },
};

export default schema;
