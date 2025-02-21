import React from "react";
import * as Cubes from "arco-cubes-basic";

interface Props {
  card_type: "medium" | "large";
  spotify_url: string;
}

const AudioSpotifyPlayerEmbedAlbumStandard = ({ datas }: { datas: Props }) => {
  const { spotify_url, card_type } = datas;

  const fixUrl = (url: string) => {
    const types = ["album", "track", "playlist", "artist", "episode", "show"];
    const type = types.find((type) => url.includes(type));
    if (type) {
      return url.replace(
        `open.spotify.com/${type}/`,
        `open.spotify.com/embed/${type}/`
      );
    }
    return url;
  };

  return (
    <Cubes.SectionCard className="p-0 !bg-transparent overflow-hidden rounded-3xl">
      <iframe
        src={fixUrl(spotify_url)}
        width="100%"
        height={card_type === "medium" ? "152" : "352"}
        frameBorder="0"
        allowFullScreen
        allow="clipboard-write; encrypted-media; fullscreen;  cross-origin"
        loading="lazy"
        className="rounded-3xl"
      ></iframe>
    </Cubes.SectionCard>
  );
};

export default AudioSpotifyPlayerEmbedAlbumStandard;
