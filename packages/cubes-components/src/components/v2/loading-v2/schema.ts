import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "loading-v2",
  meta_data: {
    type: "status",
    name: "loading-v2",
    display_name: "Loading",
    description: "Loading component with animation. Not for use in production.",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-10",
    cover_url: "",
  },
  component: "",
  schema: {
    type: "object",
    properties: {},
    required: [],
    default: {},
  },
  preset: {
    "loading-v2-basic": {
      meta_data: {
        display_name: "Loading Basic",
        type: "status",
        name: "loading-v2-basic",
        cover_url: "",
        description: "",
        tags: [],
        version: "2.0.0",
        created_at: "2025-02-10",
      },
      data: {},
    },
  },
};

export default schema;
