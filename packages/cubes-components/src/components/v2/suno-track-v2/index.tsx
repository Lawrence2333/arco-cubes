import React, { useState, useRef } from "react";
import * as Cubes from "arco-cubes-basic";
import { cn, Lib } from "arco-cubes-basic";
import type { ThemeConfig } from "arco-cubes-types";
interface Props {
  card_type: "medium" | "large";
  suno_mp3_url: string;
  suno_track_url: string;
  song_name: string;
  creator_name: string;
  thumbnail?: string;
}

const SunoTrack = ({ datas, theme }: { datas: Props; theme: ThemeConfig }) => {
  const {
    suno_mp3_url,
    suno_track_url,
    song_name,
    creator_name,
    thumbnail,
    card_type,
  } = datas;
  const contextTrackInfo = Cubes.useTrackInfo();
  const { global_css } = theme;
  const css_on_secondary = global_css["--on-tertiary"];
  const rgbColor = Lib.hexColor(css_on_secondary ?? "");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const PlayIcon = (color: string = "currentColor", size: number = 16) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.5 3.13397C4.5 2.37564 5.31824 1.91104 5.96247 2.29238L12.8839 6.15841C13.5281 6.53975 13.5281 7.46025 12.8839 7.84159L5.96247 11.7076C5.31824 12.089 4.5 11.6244 4.5 10.866V3.13397Z"
          fill={color}
        />
      </svg>
    );
  };

  const PauseIcon = (color: string = "currentColor", size: number = 16) => {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.5 3C5.5 2.72386 5.72386 2.5 6 2.5H7C7.27614 2.5 7.5 2.72386 7.5 3V13C7.5 13.2761 7.27614 13.5 7 13.5H6C5.72386 13.5 5.5 13.2761 5.5 13V3ZM9.5 3C9.5 2.72386 9.72386 2.5 10 2.5H11C11.2761 2.5 11.5 2.72386 11.5 3V13C11.5 13.2761 11.2761 13.5 11 13.5H10C9.72386 13.5 9.5 13.2761 9.5 13V3Z"
          fill={color}
        />
      </svg>
    );
  };

  const handlePlayPause = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    Cubes.Tracker.trackBioViewClick(suno_mp3_url, false, contextTrackInfo());
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const renderMedium = () => {
    return (
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-0.5 px-1">
            <div className="text-base font-secondary font-medium text-on-primary break-all line-clamp-1">
              {song_name}
            </div>
            <div className="text-sm font-primary text-on-primary/70 break-all line-clamp-1">
              {creator_name}
            </div>
          </div>

          <button
            onClick={handlePlayPause}
            className="flex items-center gap-1 bg-tertiary mt-3 rounded-full w-fit hover:opacity-90 transition-opacity"
          >
            <div className="pl-2 rounded-full text-on-tertiary flex items-center justify-center">
              {isPlaying ? PauseIcon(rgbColor) : PlayIcon(rgbColor)}
            </div>
            <span className="text-sm font-secondary font-medium py-1 pr-3 text-on-tertiary">
              {isPlaying ? "Pause" : "Play"}
            </span>
          </button>
        </div>

        {thumbnail && (
          <div className="w-[90px] h-[90px] rounded-xl overflow-hidden relative">
            <img
              src={thumbnail}
              alt={" "}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Cubes.SocialIcon
                social="suno"
                group="monochrome-round"
                className="w-4 h-4"
                bgColor="white"
                tintColor="black"
              />
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderLarge = () => {
    return (
      <div className="w-full aspect-square relative">
        <div className="absolute top-3 left-3">
          <Cubes.SocialIcon
            social="suno"
            group="monochrome-round"
            className="w-8 h-8"
            bgColor="white"
            tintColor="black"
          />
        </div>
        <img src={thumbnail} alt={" "} className="w-full h-full object-cover" />
        <div className="absolute w-full h-full top-0 left-0 flex items-end justify-between p-4 bg-black/30">
          <div className="flex flex-col gap-2">
            <div className="text-base font-secondary font-medium text-white break-all line-clamp-1">
              {song_name}
            </div>
            <div className="text-sm font-primary text-white/70 break-all line-clamp-1">
              {creator_name}
            </div>
          </div>
          <button
            onClick={handlePlayPause}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white/70"
          >
            {isPlaying ? PauseIcon("black", 24) : PlayIcon("black", 24)}
          </button>
        </div>
      </div>
    );
  };

  const renderContent = () => (
    <Cubes.SectionCard
      className={cn(
        "relative",
        card_type === "large" && "p-0 !bg-transparent overflow-hidden"
      )}
    >
      {card_type === "medium" && renderMedium()}
      {card_type === "large" && renderLarge()}
      <audio
        ref={audioRef}
        src={suno_mp3_url}
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />
    </Cubes.SectionCard>
  );

  return (
    <>
      {suno_track_url ? (
        <a
          href={suno_track_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
          onClick={(e) => {
            e.stopPropagation();
            Cubes.Tracker.trackBioViewClick(
              suno_mp3_url,
              true,
              contextTrackInfo()
            );
          }}
        >
          {renderContent()}
        </a>
      ) : (
        renderContent()
      )}
    </>
  );
};

export default SunoTrack;
