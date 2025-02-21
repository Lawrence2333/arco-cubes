import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "banner-v2",
  meta_data: {
    name: "banner-v2",
    display_name: "Banner",
    type: "promotion",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-12",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/banner-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      banner_text: {
        type: "string",
        title: "Banner Text",
        description:
          "The text to display in the promotional banner. The banner will automatically adjust its width based on the text length.",
        editable: true,
        control: "input",
      },
      jump_url: {
        type: "string",
        title: "Jump URL",
        description: "URL to navigate to when banner is clicked",
        editable: true,
        control: "link",
      },
      position: {
        type: "string",
        title: "Position",
        description: "The position of the banner",
        default: "bottom-fixed",
        editable: false,
        options: [
          { title: "Top Fixed", value: "top-fixed" },
          { title: "Bottom Fixed", value: "bottom-fixed" },
          { title: "Flexible", value: "flexible" },
        ],
        control: "select",
      },
    },
    default: {
      banner_text: "Christmas Special: 40% OFF!",
      jump_url: "https://arco.ai/",
      position: "bottom-fixed",
    },
    required: ["banner_text", "jump_url", "position"],
    object_order: ["banner_text", "jump_url", "position"],
  },
  preset: {
    "banner-basic": {
      meta_data: {
        display_name: "Banner Basic",
        name: "banner-basic",
        type: "promotion",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/promotion-banner-default.png",
        description:
          "A banner component with a default background color and a clickable area that redirects to a specified link. It supports flexible positioning: fixed at the top or bottom of the page or embedded as a regular section within the page layout. Ideal for promoting announcements, discounts, or special offers, either as a persistent banner or integrated within the page content.",
        tags: [
          "UI_pattern:banner",
          "spacing:compact",
          "interaction:click-to-jump",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      data: {
        banner_text: "Christmas Special: 40% OFF!",
        jump_url: "https://arco.ai/",
        position: "bottom-fixed",
      },
    },
  },
};

export default schema;
