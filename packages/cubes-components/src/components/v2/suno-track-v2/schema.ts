import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "suno-track-v2",
  meta_data: {
    name: "suno-track-v2",
    display_name: "Suno Track",
    description: "",
    tags: [],
    type: "audio",
    version: "2.0.0",
    created_at: "2025-02-11",
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
        editable: false,
      },
      creator_name: {
        type: "string",
        description: "The name of the creator.",
        control: "input",
        editable: false,
      },
      thumbnail: {
        type: "string",
        description: "The thumbnail of the audio.",
        control: "image",
        editable: false,
      },
      suno_mp3_url: {
        type: "string",
        description: "The URL of the suno audio file.",
        control: "link",
        editable: false,
      },
      suno_track_url: {
        type: "string",
        description: "The URL of the suno track.",
        control: "link",
        editable: false,
      },
    },
    default: {
      card_type: "medium",
      song_name: "Song Name",
      creator_name: "Creator Name",
      thumbnail:
        "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
      suno_mp3_url:
        "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
      suno_track_url: "https://suno.com/",
    },
    required: [
      "song_name",
      "creator_name",
      "thumbnail",
      "suno_mp3_url",
      "suno_track_url",
    ],
    object_order: [
      "song_name",
      "creator_name",
      "thumbnail",
      "suno_mp3_url",
      "suno_track_url",
    ],
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
    "suno-track-v2-medium": {
      meta_data: {
        name: "suno-track-v2-medium",
        display_name: "Suno Track",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/local-audio-player-v2.png",
        description:
          "A medium-sized Suno track player component that displays the track title, the artist name, and the thumbnail. Clicking anywhere on the card will play or pause the audio. Includes a play button for clear user interaction. Ideal for embedding Suno audio tracks, offering a simple and intuitive listening experience.",
        tags: [
          "UI_pattern:audio_player",
          "platform_specific:Suno",
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
        song_name: "Suno Song Name",
        creator_name: "Suno Creator Name",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        suno_mp3_url:
          "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
        suno_track_url: "https://suno.com/",
      },
    },
    "suno-track-v2-large": {
      meta_data: {
        name: "suno-track-v2-large",
        display_name: "Suno Track",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/local-audio-player-v2.png",
        description:
          "A large Suno track player component that displays the track title, the artist name, and a prominent thumbnail. Clicking anywhere on the card will play or pause the audio. Includes a large, easily accessible play button for clear user interaction. Ideal for embedding Suno audio tracks, providing a bold, immersive, and intuitive listening experience.",
        tags: [
          "UI_pattern:audio_player",
          "platform_specific:Suno",
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
        song_name: "Suno Song Name",
        creator_name: "Suno Creator Name",
        thumbnail:
          "https://public.arco.ai/arco-images/cube/cube-gallery-image.png",
        suno_mp3_url:
          "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
        suno_track_url: "https://suno.com/",
      },
    },
  },
};

export default schema;
