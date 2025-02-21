import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "local-video-player-v2",
  meta_data: {
    name: "local-video-player-v2",
    display_name: "Local Video Player",
    type: "video",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/local-video-player-v2.png",
  },
  schema: {
    type: "object",
    properties: {
      card_type: {
        type: "string",
        description: "The type of card to display",
        editable: false,
        control: "select",
        options: [
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
      title: {
        type: "string",
        description: "The title of the video.",
        editable: true,
        control: "input",
      },
      thumbnail: {
        type: "string",
        description: "The thumbnail of the video.",
        editable: true,
        control: "image",
      },
      video_url: {
        type: "string",
        description: "The URL of the video.",
        editable: true,
        control: "link",
      },
    },
    required: ["video_url", "title", "thumbnail", "card_type"],
    default: {
      card_type: "large",
      title: "",
      thumbnail: "",
      video_url: "",
    },
    object_order: ["title", "thumbnail", "video_url"],
  },
  layouts: [
    {
      icon_name: "medium",
      name: "Medium",
      data: {
        card_type: "medium",
      },
    },
    {
      icon_name: "large",
      name: "Large",
      data: {
        card_type: "large",
      },
    },
  ],
  component: "",
  preset: {
    "local-video-player-v2-medium": {
      meta_data: {
        display_name: "Local Video Player Medium",
        name: "local-video-player-v2-medium",
        type: "video",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/video-local-player.png",
        description:
          "A local video player component designed for playing MP4 and other video files. The component displays a video thumbnail with a play icon overlay and has a fixed 16:9 aspect ratio. The video title is shown at the bottom of the thumbnail for easy identification. Clicking the thumbnail starts video playback. Clicking the video again will pause the playback. This component provides a simple, intuitive video viewing experience, ideal for embedding local video content.",
        tags: [
          "UI_pattern:video_player",
          "platform_specific:local-play",
          "layout:medium,video-16x9",
          "interaction:click-to-play",
          "support_multiple_links:false",
          "spacing:compact",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Medium",
      data: {
        card_type: "medium",
        title: "Video Title",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        video_url:
          "https://public.thearco.ai/arco-image-placeholder/arco-link-in-bio-demo.mp4",
      },
    },
    "local-video-player-v2-large": {
      meta_data: {
        display_name: "Local Video Player Large",
        name: "local-video-player-v2-large",
        type: "video",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/video-local-player.png",
        description:
          "A video player component featuring a video thumbnail with a play icon overlay. The video title is displayed at the top of the card for easy identification. Clicking the video starts playback. Clicking the video again will pause the playback. This component provides a simple and intuitive video viewing experience, ideal for embedding video content.",
        tags: [
          "UI_pattern:video_player",
          "platform_specific:local-play",
          "layout:large,video-16x9",
          "interaction:click-to-play",
          "support_multiple_links:false",
          "spacing:compact",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Large",
      data: {
        card_type: "large",
        title: "Video Title",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        video_url:
          "https://public.thearco.ai/arco-image-placeholder/arco-link-in-bio-demo.mp4",
      },
    },
  },
};

export default schema;
