import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "countdown-v2",
  meta_data: {
    name: "countdown-v2",
    display_name: "Countdown",
    type: "promotion",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-12",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/countdown-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      title: {
        type: "string",
        title: "Countdown Title",
        description: "The text shown above the countdown timer",
        control: "input",
        editable: true,
      },
      description: {
        type: "string",
        title: "Description",
        description: "The description shown below the countdown timer",
        control: "input",
        editable: true,
      },
      deadline: {
        type: "string",
        title: "End Time",
        description:
          "The date and time when the countdown should end (ISO format)",
        editable: true,
        control: "datetime",
      },
      jump_url: {
        type: "string",
        title: "Jump URL",
        description: "The URL to jump",
        editable: true,
        control: "link",
      },
      show_background: {
        type: "boolean",
        title: "Show Background",
        description: "Show Background",
        default: false,
        editable: false,
        control: "switch",
      },
      shape: {
        type: "string",
        title: "Shape",
        description: "Shape",
        default: "square",
        editable: false,
        control: "select",
        options: [
          { title: "Square", value: "square" },
          { title: "Circle", value: "circle" },
        ],
      },
    },
    default: {
      title: "Title",
      description: "Description",
      deadline: "2025-01-17T23:59:59",
      jump_url: "https://arco.ai",
      show_background: true,
      shape: "circle",
    },
    required: ["title", "deadline", "show_background", "shape"],
    object_order: ["title", "description", "deadline", "jump_url"],
  },
  preset: {
    "countdown-basic-v2": {
      meta_data: {
        display_name: "Countdown Basic",
        name: "countdown-basic-v2",
        type: "promotion",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/promotion-countdown.png",
        description:
          "A countdown timer component designed to display time-sensitive deals and promotional offers, creating urgency and encouraging user engagement.",
        tags: [
          "UI_pattern:countdown",
          "layout:vertical",
          "spacing:compact",
          "interaction:click-to-jump",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      data: {
        description: "40% OFF ENDING SOON 🎯 ENDS IN",
        title: "40% OFF ENDING SOON 🎯 ENDS IN",
        deadline: "2025-02-25T23:59:59",
        jump_url: "https://arco.ai",
        shape: "circle",
        show_background: true,
      },
    },
  },
};

export default schema;
