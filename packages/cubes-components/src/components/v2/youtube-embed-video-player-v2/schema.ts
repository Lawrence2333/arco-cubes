import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "youtube-embed-video-player-v2",
  meta_data: {
    type: "video",
    name: "youtube-embed-video-player-v2",
    display_name: "YouTube Embed Video Player",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/youtube-embed-video-player-v2.png",
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
        editable: true,
        control: "input",
      },
      thumbnail: {
        type: "string",
        title: "Thumbnail",
        description: "The thumbnail to display",
        editable: true,
        control: "image",
      },
      video_url: {
        type: "string",
        title: "Video URL",
        description: "The video URL to embed",
        editable: false,
        control: "link",
      },
    },
    default: {
      card_type: "medium",
      video_url: "",
      title: "",
      thumbnail: "",
    },
    required: ["video_url", "title", "card_type"],
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
    "youtube-embed-video-player-v2-medium": {
      meta_data: {
        type: "video",
        name: "youtube-embed-video-player-v2-medium",
        display_name: "YouTube Embed Video Player Medium",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/video-youtube-player-embed.png",
        description:
          "A YouTube video player embed component that displays a YouTube video thumbnail with a play icon overlay. The video title is shown at the bottom of the thumbnail for quick identification. Clicking the thumbnail dynamically loads an iframe with the official YouTube player for video playback. The video aspect ratio adapts based on the video type: 16:9 for regular YouTube videos. 9:16 for YouTube Shorts. This component provides a lightweight initial load and an interactive viewing experience, making it ideal for embedding both regular YouTube videos and Shorts.",
        tags: [
          "UI_pattern:video_player",
          "platform_specific:YouTube",
          "layout:medium, regular-video-16x9, shorts-9x16",
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
        video_url: "https://youtu.be/sQIipbVwYnQ",
        title: "Video YouTube Player Embed Title",
      },
    },
    "youtube-embed-video-player-v2-large": {
      meta_data: {
        type: "video",
        name: "youtube-embed-video-player-v2-large",
        display_name: "YouTube Embed Video Player Large",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/video-youtube-player-embed-see-all.png",
        description:
          "A YouTube video player embed component that displays a YouTube video thumbnail with a play icon overlay. Clicking the thumbnail dynamically loads an iframe with the official YouTube player for video playback. The video title is displayed at the top of the card for clear context. Clicking anywhere on the card (outside the player) redirects users to the video’s YouTube URL. The video aspect ratio adapts based on the video type: 16:9 for regular YouTube videos. 9:16 for YouTube Shorts. This component provides a lightweight initial load and an interactive viewing experience, making it ideal for embedding both regular YouTube videos and Shorts.",
        tags: [
          "UI_pattern:video_player",
          "platform_specific:YouTube",
          "layout:large,card,regular-video-16x9, shorts-9x16",
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
        title: "Video Youtube Player Embed See All Title",
        video_url: "https://www.youtube.com/watch?v=fXS_gkWAIs0",
      },
    },
  },
};

export default schema;
