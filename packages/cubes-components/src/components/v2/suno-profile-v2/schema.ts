import type { Template } from "arco-cubes-types";

const schema: Template = {
  id: "suno-profile-v2",
  meta_data: {
    type: "audio",
    name: "suno-profile-v2",
    display_name: "Suno Profile",
    description: "",
    tags: [],
    version: "2.0.0",
    created_at: "2025-02-11",
    cover_url:
      "https://public.arco.ai/arco-for-generation/component-covers/suno-profile-v2.png",
  },
  component: "",
  schema: {
    type: "object",
    properties: {
      card_type: {
        type: "string",
        title: "Card Type",
        description: "Card Type",
        editable: false,
        control: "select",
        options: [
          { title: "List", value: "list" },
          { title: "Grid", value: "grid" },
        ],
      },
      creator_name: {
        type: "string",
        title: "Creator Name",
        description: "Creator Name",
        control: "input",
        editable: false,
      },
      description: {
        type: "string",
        title: "Description",
        description: "Description",
        default: "Card Description",
        editable: false,
        control: "input",
      },
      avatar: {
        type: "string",
        title: "Avatar",
        description: "Avatar",
        default:
          "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        editable: false,
        control: "image",
      },
      likes_count: {
        type: "number",
        title: "Likes Count",
        description: "Likes Count",
        default: 0,
        editable: false,
        control: "input",
      },
      followers_count: {
        type: "number",
        title: "Followers Count",
        description: "Followers Count",
        default: 0,
        editable: false,
        control: "input",
      },
      plays_count: {
        type: "number",
        title: "Plays Count",
        description: "Plays Count",
        default: 0,
        editable: false,
        control: "input",
      },
      button_text: {
        type: "string",
        title: "Button Text",
        description: "Button Text",
        default: "See All",
        editable: false,
        control: "input",
      },
      suno_profile_url: {
        type: "string",
        title: "Suno Profile URL",
        description: "Suno Profile URL",
        default: "https://arco.ai",
        editable: false,
        control: "link",
      },
      suno_audio_list: {
        type: "array",
        title: "Suno Audio List",
        description: "Suno Audio List",
        default: [],
        editable: false,
        items: {
          type: "object",
          properties: {
            audio_url: {
              type: "string",
              title: "Audio URL",
              description: "Audio URL",
              default: "https://arco.ai",
              editable: false,
              control: "link",
            },
            audio_name: {
              type: "string",
              title: "Audio Name",
              description: "Audio Name",
              default: "Audio Name",
              editable: false,
              control: "input",
            },
            thumbnail_url: {
              type: "string",
              title: "Thumbnail URL",
              description: "Thumbnail URL",
              default:
                "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
              editable: false,
              control: "image",
            },
            likes_count: {
              type: "number",
              title: "Likes Count",
              description: "Likes Count",
              default: 0,
              editable: false,
              control: "input",
            },
            plays_count: {
              type: "number",
              title: "Plays Count",
              description: "Plays Count",
              default: 0,
              editable: false,
              control: "input",
            },
          },
          object_order: [
            "audio_url",
            "audio_name",
            "thumbnail_url",
            "likes_count",
            "plays_count",
          ],
          required: ["audio_url", "audio_name", "thumbnail_url"],
          default: {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 140,
            plays_count: 42,
          },
        },
      },
    },
    object_order: [
      "creator_name",
      "description",
      "avatar",
      "likes_count",
      "followers_count",
      "plays_count",
      "button_text",
      "suno_profile_url",
      "suno_audio_list",
    ],
    required: [
      "card_type",
      "creator_name",
      "avatar",
      "likes_count",
      "followers_count",
      "plays_count",
      "suno_profile_url",
      "suno_audio_list",
    ],
    default: {
      card_type: "grid",
      creator_name: "",
      description: "",
      avatar: "",
      likes_count: 0,
      followers_count: 0,
      plays_count: 0,
      suno_profile_url: "",
      suno_audio_list: [],
    },
  },
  layouts: [
    {
      icon_name: "grid",
      name: "Grid",
      data: {
        card_type: "grid",
      },
    },
    {
      icon_name: "list",
      name: "List",
      data: {
        card_type: "list",
      },
    },
  ],
  preset: {
    "suno-profile-v2-list": {
      meta_data: {
        type: "audio",
        name: "suno-profile-v2-list",
        display_name: "Suno Profile List",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/channel-info-suno-profile.png",
        description:
          "A Suno profile list component that displays the user’s profile information (username, subheading, avatar) along with key statistics like total likes, followers, and plays. Clicking the button in the top right corner redirects to the corresponding Suno profile URL. Below the profile section is a list of audio tracks, each showing a thumbnail, track title, and a play icon. Clicking anywhere on a track row plays the corresponding MP3 file, changing the play icon to a pause icon. Clicking the same row again pauses the audio, switching the pause icon back to the play icon. Ideal for showcasing user-generated audio content with an interactive, easy-to-navigate channel overview.",
        tags: [
          "UI_pattern:suno-profile",
          "platform_specific:suno",
          "layout:vertical,list",
          "spacing:compact",
          "support_multiple_links:false",
          "special:view-all-button",
          "interaction:click-to-play",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "List",
      data: {
        card_type: "list",
        creator_name: "arco.aiarco.aiarco.aiarco.aiarco.aiarco.aiarco.ai",
        description:
          "Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description Card Description",
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        likes_count: 230,
        followers_count: 1234,
        plays_count: 5135322,
        button_text:
          "as das das das ads as das das da asd asd asd asd as das  dassa",
        suno_profile_url: "https://arco.ai",
        suno_audio_list: [
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "AudioNameAudioNameAudioNameAudioNameAudioName ",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 140,
            plays_count: 42,
          },
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 123123,
            plays_count: 4234,
          },
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 123123,
            plays_count: 4234,
          },
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 0,
            plays_count: 0,
          },
        ],
      },
    },
    "suno-profile-v2-grid": {
      meta_data: {
        type: "audio",
        name: "suno-profile-v2-grid",
        display_name: "Suno Profile Grid",
        cover_url:
          "https://public.arco.ai/arco-for-generation/component-covers/channel-info-suno-profile.png",
        description:
          "A Suno profile component displaying the user’s profile information (username, description, avatar) and key statistics, including total likes, followers, and plays. It includes a “More” button linking to the full Suno channel via a specified URL. Below the profile section, a list of social audio posts is displayed, each showing an audio thumbnail, name, description, like count, and play count. Clicking a thumbnail plays the corresponding MP3 file, toggling the play/pause icon accordingly. When populating the list of social audio posts, only an even number of links can be added to ensure proper display alignment. Ideal for showcasing user-generated audio content with an interactive and detailed channel overview.",
        tags: [
          "UI_pattern:suno-profile",
          "platform_specific:suno",
          "layout:vertical,column_two,grid",
          "spacing:compact",
          "special:view-all-button",
          "support_multiple_links:false",
          "interaction:click-to-play",
        ],
        version: "2.0.0",
        created_at: "2025-02-11",
      },
      layout_name: "Grid",
      data: {
        card_type: "grid",
        creator_name: "arco.ai",
        description: "Card Description",
        avatar: "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
        likes_count: 230,
        followers_count: 1234,
        plays_count: 5135322,
        button_text: "More",
        suno_profile_url: "https://arco.ai",
        suno_audio_list: [
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 140,
            plays_count: 42,
          },
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 123123,
            plays_count: 4234,
          },
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 123123,
            plays_count: 4234,
          },
          {
            audio_url:
              "https://public.thearco.ai/arco-image-placeholder/electric-night.mp3",
            audio_name: "Audio Name",
            thumbnail_url:
              "https://public.arco.ai/arco-images/cube/cube-avatar-image.png",
            likes_count: 0,
            plays_count: 0,
          },
        ],
      },
    },
  },
};

export default schema;
