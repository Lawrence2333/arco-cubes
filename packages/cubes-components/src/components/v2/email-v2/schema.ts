import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "email-v2",
  meta_data: {
    name: "email-v2",
    display_name: "Email",
    type: "contact",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-12",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/email-v2.png",
  },
  component: "",
  layouts: [
    {
      name: "Small",
      data: {
        card_type: "small",
        use_card_radius: false,
      },
      icon_name: "small",
    },
    {
      name: "Large",
      data: {
        card_type: "large",
        use_card_radius: true,
      },
      icon_name: "large",
    },
  ],
  schema: {
    type: "object",
    properties: {
      card_type: {
        type: "string",
        title: "Card Type",
        description: "Card Type",
        control: "select",
        editable: false,
        options: [
          { title: "Small", value: "small" },
          { title: "Large", value: "large" },
        ],
      },
      use_card_radius: {
        type: "boolean",
        title: "Use Card Radius",
        description: "Use Card Radius",
        control: "switch",
        editable: false,
      },
      email: {
        type: "string",
        title: "Email",
        description: "Email",
        control: "input",
        editable: true,
      },
      title: {
        type: "string",
        title: "Title",
        description: "Title",
        control: "input",
        editable: true,
      },
      description: {
        type: "string",
        title: "Description",
        description: "Description",
        control: "input",
        editable: true,
      },
    },
    default: {
      card_type: "large",
      email: "example@example.com",
      title: "Contact Us",
      description: "Get in touch with us",
    },
    required: ["card_type", "email", "title"],
    object_order: ["title", "description", "email"],
  },
  preset: {
    "email-small": {
      meta_data: {
        display_name: "Email Small",
        name: "email-small",
        type: "contact",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/contact-email.png",
        description:
          "A small email contact component featuring an email icon, a call-to-action message, and a button. Clicking the button triggers the mailto function, opening the user’s default email application to send a message. Ideal for facilitating quick and direct email communication.",
        tags: [
          "UI_pattern:contact",
          "platform_specific:mailto",
          "layout:horizontal,button,small",
          "spacing:compact",
          "interaction:click-to-send-email",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      layout_name: "Small",
      data: {
        card_type: "small",
        use_card_radius: false,
        email: "example@example.com",
        title: "Contact Us",
        description: "Get in touch with us",
      },
    },
    "email-large": {
      meta_data: {
        display_name: "Email Large",
        name: "email-large",
        type: "contact",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/contact-email.png",
        description:
          "A contact email component displaying an email address with a call-to-action button. Clicking the button triggers the mailto function, opening the user’s default email application to send a message. Ideal for facilitating quick and direct email communication.",
        tags: [
          "UI_pattern:contact",
          "platform_specific:mailto",
          "layout:vertical,card,large",
          "spacing:moderate",
          "interaction:click-to-send-email",
        ],
        version: "2.0.0",
        created_at: "2025-02-12",
      },
      layout_name: "Large",
      data: {
        card_type: "large",
        use_card_radius: true,
        email: "example@example.com",
        title: "Contact Us",
        description: "Get in touch with us",
      },
    },
  },
};

export default schema;
