import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "tiktok-embed-video-player-v2",
  meta_data: {
    type: "video",
    name: "tiktok-embed-video-player-v2",
    display_name: "TikTok Embed Video Player",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/tiktok-embed-video-player-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      card_type: {
        type: "string",
        title: "Card Type",
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
        title: "Title",
        description: "The title to display",
        editable: false,
        control: "input",
      },
      thumbnail: {
        type: "string",
        title: "Thumbnail",
        description: "The thumbnail to display",
        editable: false,
        control: "image",
      },
      video_url: {
        type: "string",
        title: "Video URL",
        description: "The TikTok video URL to embed",
        editable: false,
        control: "link",
      },
    },
    default: {
      card_type: "large",
      title: "",
      thumbnail: "",
      video_url: "",
    },
    required: ["video_url", "title", "thumbnail", "card_type"],
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
  preset: {
    "tiktok-embed-video-player-v2-medium": {
      meta_data: {
        display_name: "TikTok Embed Video Player Medium",
        type: "video",
        name: "tiktok-embed-video-player-v2-medium",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/video-tiktok-player-embed-9x16.png",
        description:
          "A TikTok video player embed component that displays a TikTok video thumbnail with a play icon overlay. The component has a fixed 9:16 video ratio. The video title is shown at the bottom of the thumbnail for quick identification. Clicking the thumbnail dynamically loads an iframe with the official TikTok player for video playback. This component provides a lightweight initial load and an interactive viewing experience, making it ideal for embedding TikTok videos.",
        tags: [
          "UI_pattern:video_player",
          "platform_specific:TikTok",
          "layout:medium,video-9x16",
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
        title: "Video TikTok Player Embed 9x16 Title",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        video_url:
          "https://www.tiktok.com/@tiktok/video/7444624098380156206?is_from_webapp=1&sender_device=pc&web_id=7452722435364980232",
      },
    },
    "tiktok-embed-video-player-v2-large": {
      meta_data: {
        display_name: "TikTok Embed Video Player Large",
        type: "video",
        name: "tiktok-embed-video-player-v2-large",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/video-tiktok-player-embed-16x9.png",
        description:
          "A TikTok video player embed component that displays a TikTok video thumbnail with a play icon overlay. Clicking the thumbnail dynamically loads an iframe with the official TikTok player for video playback. The video title is displayed at the top of the card for clear context. Clicking anywhere on the card (outside the player) redirects users to the video’s TikTok URL. This component provides a lightweight initial load and an interactive viewing experience, making it ideal for embedding TikTok videos.",
        tags: [
          "UI_pattern:video_player",
          "platform_specific:TikTok",
          "layout:large,card,video-9x16",
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
        title: "Video TikTok Player Embed 16x9 Title",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        video_url:
          "https://www.tiktok.com/@tiktok/video/7444624098380156206?is_from_webapp=1&sender_device=pc&web_id=7452722435364980232",
      },
    },
  },
};

export default schema;
