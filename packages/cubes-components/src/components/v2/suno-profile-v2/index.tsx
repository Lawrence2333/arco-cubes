import React, { useRef, useState, useCallback, memo } from "react";
import * as Cubes from "arco-cubes-basic";
import { cn, Lib } from "arco-cubes-basic";
import {
  ArrowUpRight,
  ThumbsUp,
  User,
  Music,
  type LucideIcon,
  Play,
} from "lucide-react";
import type { ThemeConfig } from "arco-cubes-types";

const StatsItem = ({
  icon: Icon,
  value,
}: {
  icon: LucideIcon;
  value?: number;
}) => {
  return (
    <div className="flex flex-row items-center justify-center gap-1 bg-tertiary/70 rounded-xl p-2.5">
      <Icon className="w-4 h-4 text-on-tertiary" />
      <div className="text-on-tertiary">
        {Cubes.Tools.formatNumber(value ?? 0)}
      </div>
    </div>
  );
};

interface AudioItem {
  audio_url?: string;
  audio_name?: string;
  thumbnail_url?: string;
  likes_count?: number;
  plays_count?: number;
}

interface ChannelInfoSunoProfileProps {
  datas: {
    card_type: "list" | "grid";
    creator_name?: string;
    description?: string;
    avatar?: string;
    likes_count?: number;
    followers_count?: number;
    plays_count?: number;
    button_text?: string;
    suno_profile_url?: string;
    suno_audio_list: AudioItem[];
  };
  theme: ThemeConfig;
}

const ArrowRight = ({ fill = "white" }: { fill?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M11.694 16.8799C10.2624 17.7388 9.54665 18.1683 8.95771 18.1134C8.44418 18.0655 7.97565 17.8002 7.67039 17.3845C7.32031 16.9077 7.32031 16.073 7.32031 14.4035V9.5964C7.32031 7.92694 7.32031 7.09221 7.67039 6.61544C7.97565 6.19972 8.44418 5.93444 8.95771 5.88657C9.54665 5.83168 10.2624 6.26114 11.694 7.12007L15.6999 9.52364C17.0612 10.3404 17.7419 10.7488 17.9728 11.277C18.1743 11.7379 18.1743 12.262 17.9728 12.723C17.7419 13.2511 17.0612 13.6595 15.6999 14.4763L11.694 16.8799Z"
        fill={fill}
      />
    </svg>
  );
};

const PauseIcon = ({ fill = "white" }: { fill?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className="shrink-0"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.82031 6C9.37031 6 9.82031 6.45 9.82031 7V17C9.82031 17.55 9.37031 18 8.82031 18C8.27031 18 7.82031 17.55 7.82031 17V7C7.82031 6.45 8.27031 6 8.82031 6ZM15.8203 6C16.3703 6 16.8203 6.45 16.8203 7V17C16.8203 17.55 16.3703 18 15.8203 18C15.2703 18 14.8203 17.55 14.8203 17V7C14.8203 6.45 15.2703 6 15.8203 6Z"
        fill={fill}
      />
    </svg>
  );
};

const ChannelInfoSunoProfile = ({
  datas,
  theme,
}: ChannelInfoSunoProfileProps) => {
  const {
    creator_name,
    description,
    avatar,
    likes_count,
    followers_count,
    plays_count,
    button_text,
    suno_profile_url,
    suno_audio_list,
    card_type,
  } = datas;
  const { global_css } = theme;
  const css_on_primary = global_css["--on-primary"];
  const iconRgbColor = Lib.rgb(css_on_primary ?? "");
  const contextTrackInfo = Cubes.useTrackInfo();
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlayPause = useCallback(
    (index: number) => (e: React.MouseEvent) => {
      e.stopPropagation();

      const audio = audioRef.current;
      if (!audio) return;

      if (playingIndex === index) {
        audio.pause();
        audio.currentTime = 0;
        setPlayingIndex(null);
      } else {
        audio.src = suno_audio_list?.[index]?.audio_url ?? "";
        audio.play().catch((error) => {
          console.error("播放失败:", error);
          setPlayingIndex(null);
        });
        setPlayingIndex(index);
      }
    },
    [playingIndex, suno_audio_list]
  );

  const ListGridItem = memo(
    ({ item, index }: { item: AudioItem; index: number }) => {
      const isCurrentPlaying = playingIndex === index;
      const handleClick = useCallback(
        (e: React.MouseEvent) => {
          handlePlayPause(index)(e);
          Cubes.Tracker.trackBioViewClick(
            suno_profile_url ?? "",
            false,
            contextTrackInfo()
          );
        },
        [index]
      );

      if (card_type === "list") {
        return (
          <div
            className="flex flex-row items-center justify-between"
            onClick={handleClick}
          >
            <div className="flex flex-row items-center gap-3">
              <img
                src={item.thumbnail_url}
                className="w-12 h-12 rounded-[12px]"
                alt={" "}
              />
              <div className="text-base font-medium text-on-primary break-all line-clamp-1">
                {item.audio_name}
              </div>
            </div>
            {isCurrentPlaying ? (
              <PauseIcon fill={iconRgbColor} />
            ) : (
              <ArrowRight fill={iconRgbColor} />
            )}
          </div>
        );
      } else {
        return (
          <div className="relative group">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={item.thumbnail_url}
                className="w-full h-full object-cover"
                alt={" "}
                loading="lazy"
              />
              <div
                className="absolute inset-0 cursor-pointer"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%)",
                }}
                onClick={handleClick}
              >
                <div className="absolute right-2 top-2">
                  {isCurrentPlaying ? <PauseIcon /> : <ArrowRight />}
                </div>
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                  <div className="flex items-center gap-1 bg-[#9D9D9D33] rounded-full px-2 py-0.5 justify-center">
                    <Play className="w-2.5 h-2.5 text-white" />
                    <span className="text-white italic font-medium text-xs">
                      {Cubes.Tools.formatNumber(item.plays_count ?? 0)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#9D9D9D33] rounded-full px-2 py-0.5 justify-center">
                    <ThumbsUp className="w-2.5 h-2.5 text-white" />
                    <span className="text-white italic font-medium text-xs">
                      {Cubes.Tools.formatNumber(item.likes_count ?? 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-1.5 px-1">
              <div className="text-base font-medium text-on-primary break-all line-clamp-1">
                {item.audio_name}
              </div>
            </div>
          </div>
        );
      }
    }
  );

  ListGridItem.displayName = "ListGridItem";

  return (
    <Cubes.SectionCard>
      <audio
        ref={audioRef}
        onEnded={() => setPlayingIndex(null)}
        onPause={() => setPlayingIndex(null)}
        preload="none"
      />
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <Cubes.SocialIcon social="suno" className="w-4 h-4" />
          <div className="text-base text-on-primary font-secondary">Suno</div>
        </div>
        <Cubes.Link
          href={suno_profile_url ?? ""}
          className="flex flex-row gap-1 items-center justify-center"
        >
          <div className="text-xs text-on-primary/70 break-all line-clamp-1 max-w-[100px]">
            {button_text ?? "More"}
          </div>
          <ArrowUpRight className="w-4 h-4 text-on-primary/70" />
        </Cubes.Link>
      </div>
      <div className="flex flex-row gap-3 items-center justify-start py-1 my-3">
        {avatar && (
          <img src={avatar} className="w-12 h-12 rounded-full" alt={" "} />
        )}
        <div>
          <div className="text-xl text-on-primary font-bold break-all line-clamp-1">
            {creator_name}
          </div>
          <div className="text-sm text-on-primary/65 break-all line-clamp-1">
            @{description}
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 gap-3">
        <StatsItem icon={ThumbsUp} value={likes_count} />
        <StatsItem icon={User} value={followers_count} />
        <StatsItem icon={Music} value={plays_count} />
      </div>
      <div
        className={cn(
          "gap-3 pt-3",
          card_type === "grid" ? "grid grid-cols-2" : "flex flex-col gap-3"
        )}
      >
        {suno_audio_list.map((item, index) => (
          <ListGridItem key={index} item={item} index={index} />
        ))}
      </div>
    </Cubes.SectionCard>
  );
};

export default ChannelInfoSunoProfile;
