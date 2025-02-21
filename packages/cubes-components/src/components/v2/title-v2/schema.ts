import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "title-v2",
  meta_data: {
    type: "title",
    name: "title-v2",
    display_name: "Title",
    description:
      "A title and description component. Ideal for section headers, card summaries, or callout content.",
    tags: ["layout:vertical", "interaction:show", "spacing:moderate"],
    version: "2.0.0",
    created_at: "2025-02-10",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/title-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      title: {
        type: "string",
        title: "Title",
        description: "The title text to display",
        editable: true,
        control: "input",
      },
      description: {
        type: "string",
        title: "Description",
        description: "The description text to display",
        editable: true,
        control: "input",
      },
      align: {
        type: "string",
        title: "Align",
        description: "The alignment of the title and description",
        default: "center",
        control: "select",
        editable: false,
        options: [
          { title: "Left", value: "left" },
          { title: "Center", value: "center" },
          { title: "Right", value: "right" },
        ],
      },
    },
    required: ["title", "align"],
    object_order: ["title", "description"],
    default: {
      title: "Title",
      description: "Description",
      align: "center",
    },
  },
  preset: {
    "title-v2-basic": {
      meta_data: {
        display_name: "Title Basic",
        type: "title",
        name: "title-v2-basic",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/title-center.png",
        description:
          "A title and description component. Ideal for section headers, card summaries, or callout content.",
        tags: [
          "layout:vertical",
          "alignment:center",
          "interaction:show",
          "spacing:moderate",
        ],
        version: "2.0.0",
        created_at: "2025-02-10",
      },
      data: {
        title: "Title",
        description: "",
        align: "center",
      },
    },
  },
};

export default schema;
