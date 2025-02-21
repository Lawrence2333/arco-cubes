import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "spotify-embed-v2",
  meta_data: {
    type: "audio",
    name: "spotify-embed-v2",
    display_name: "Spotify Embed",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/spotify-embed-v2.png",
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
      spotify_url: {
        type: "string",
        title: "Spotify URL",
        description: "The Spotify URL to embed",
        editable: false,
        control: "link",
      },
    },
    default: {
      card_type: "medium",
      spotify_url: "",
    },
    required: ["spotify_url", "card_type"],
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
    "spotify-embed-v2-medium": {
      meta_data: {
        display_name: "Spotify Embed Medium",
        type: "audio",
        name: "spotify-embed-v2-medium",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/audio-spotify-player-embed-album-standard.png",
        description:
          "A compact Spotify audio player embed component designed for a clean and minimal listening experience. Loads the Spotify compact embed player, supporting Track, Playlist, Album, and Artist links. Includes play/pause controls, a progress bar, and access more actions.",
        tags: [
          "UI_pattern:audio_player",
          "platform_specific:Spotify",
          "layout:medium",
          "spacing:compact",
          "support_multiple_links:false",
          "interaction:click-to-play",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Medium",
      data: {
        card_type: "medium",
        spotify_url:
          "https://open.spotify.com/playlist/37i9dQZF1EQncLwOalG3K7?si=llb-UvSoQRuugZh2Nu7l4w",
      },
    },
    "spotify-embed-v2-large": {
      meta_data: {
        display_name: "Spotify Embed Large",
        type: "audio",
        name: "spotify-embed-v2-large",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/audio-spotify-player-embed-album-standard.png",
        description:
          "A normal Spotify audio player embed component designed for an interactive listening experience. Loads the Spotify normal embed player, supporting Track, Playlist, Album, and Artist links. Ideal for embedding Spotify content, offering a full-featured audio playback experience.",
        tags: [
          "UI_pattern:audio_player",
          "platform_specific:Spotify",
          "layout:large",
          "spacing:normal",
          "support_multiple_links:false",
          "interaction:click-to-play",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Large",
      data: {
        card_type: "large",
        spotify_url:
          "https://open.spotify.com/playlist/37i9dQZF1EQncLwOalG3K7?si=llb-UvSoQRuugZh2Nu7l4w",
      },
    },
  },
};

export default schema;
