import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "local-audio-player-v2",
  meta_data: {
    name: "local-audio-player-v2",
    display_name: "Local Audio Player",
    description: "",
    tags: [],
    type: "audio",
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/local-audio-player-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      card_type: {
        type: "string",
        description: "The type of card.",
        control: "select",
        editable: false,
        options: [
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
      song_name: {
        type: "string",
        description: "The name of the song.",
        control: "input",
        editable: true,
      },
      creator_name: {
        type: "string",
        description: "The name of the creator.",
        control: "input",
        editable: true,
      },
      thumbnail: {
        type: "string",
        description: "The thumbnail of the audio.",
        control: "image",
        editable: true,
      },
      audio_url: {
        type: "string",
        description: "The URL of the audio file.",
        control: "link",
        editable: true,
      },
    },
    default: {
      card_type: "medium",
      song_name: "",
      thumbnail: "",
      audio_url: "",
    },
    required: ["audio_url", "song_name", "thumbnail", "card_type"],
    object_order: ["song_name", "creator_name", "thumbnail", "audio_url"],
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
    "local-audio-player-v2-medium": {
      meta_data: {
        name: "local-audio-player-v2-medium",
        display_name: "Local Audio Player",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/local-audio-player-v2.png",
        description:
          "A medium-sized local audio player component designed for playing MP3 and other audio files. It displays the track title, artist name, and an album cover. Clicking anywhere on the card will play or pause the audio. Includes a play button for clear and intuitive user interaction. Ideal for embedding self-hosted audio content, providing a simple and user-friendly listening experience.",
        tags: [
          "UI_pattern:audio_player",
          "platform_specific:local-play",
          "layout:medium",
          "spacing:compact",
          "support_multiple_links:false",
          "interaction:click-to-play",
        ],
        type: "audio",
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Medium",
      data: {
        card_type: "medium",
        song_name: "Song Name",
        creator_name: "Creator Name",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        audio_url:
          "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
      },
    },
    "local-audio-player-v2-large": {
      meta_data: {
        name: "local-audio-player-v2-large",
        display_name: "Local Audio Player",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/local-audio-player-v2.png",
        description:
          "A large local audio player component designed for playing MP3 and other audio files. It prominently displays the album cover, along with the track title and artist name. Clicking anywhere on the card will play or pause the audio. Features a large, easily accessible play button for intuitive user interaction. Ideal for embedding self-hosted audio content, offering a bold, immersive, and user-friendly listening experience.",
        tags: [
          "UI_pattern:audio_player",
          "platform_specific:local-play",
          "layout:large",
          "spacing:spacious",
          "support_multiple_links:false",
          "interaction:click-to-play",
        ],
        type: "audio",
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Large",
      data: {
        card_type: "large",
        song_name: "Song Name",
        creator_name: "Creator Name",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        audio_url:
          "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
      },
    },
  },
};

export default schema;
