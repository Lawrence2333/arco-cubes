import * as Cubes from "arco-cubes-basic";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { cn } from "arco-cubes-basic";

interface Props {
  title?: string;
  thumbnail?: string;
  video_url: string;
  card_type?: "medium" | "large";
}

const VideoTiktokPlayerEmbed = ({ datas }: { datas: Props }) => {
  const { title, thumbnail, video_url, card_type = "medium" } = datas;
  const contextTrackInfo = Cubes.useTrackInfo();
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isMedium = card_type === "medium";

  const handlePlay = () => {
    setIsPlaying(true);
    Cubes.Tracker.trackBioViewClick(video_url, true, contextTrackInfo());
  };

  // 从TikTok URL中提取视频ID
  const getTikTokEmbedUrl = (url: string) => {
    const videoId = url.split("/").pop();
    return `https://www.tiktok.com/player/v1/${videoId}?music_info=1&description=1&music_info=0&rel=0&autoplay=1&closed_caption=0`;
  };

  return (
    <Cubes.SectionCard
      className={cn(
        "relative",
        isMedium && "p-0 !bg-transparent overflow-hidden"
      )}
    >
      {!isMedium && (
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Cubes.SocialIcon
              social="tiktok"
              className="w-5 h-5 flex-shrink-0"
            />
            <div className="text-base font-secondary font-medium text-on-primary break-all line-clamp-1 text-left">
              {title}
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-on-primary" />
        </div>
      )}
      <div className={cn("relative rounded-xl overflow-hidden aspect-[9/16]")}>
        <div className="w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src={getTikTokEmbedUrl(video_url)}
            title="TikTok video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share; fullscreen cross-origin"
            allowFullScreen
            style={{ visibility: isPlaying ? "visible" : "hidden" }}
          ></iframe>
          {!isPlaying && (
            <button
              onClick={handlePlay}
              className="group absolute inset-0 w-full h-full"
            >
              {thumbnail && !imgError && (
                <img
                  src={thumbnail}
                  alt={" "}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/20 transition-opacity flex items-center justify-center">
                <div className="w-16 h-16 rounded-full text-white/90 flex items-center justify-center">
                  <Cubes.PlayIcon className="w-8 h-8" />
                </div>
              </div>
            </button>
          )}
          {isMedium && !isPlaying && (
            <div className="absolute bottom-0 left-0 w-full px-5 my-3 text-white font-secondary text-base break-all line-clamp-1">
              {title}
            </div>
          )}
        </div>
      </div>
    </Cubes.SectionCard>
  );
};

export default VideoTiktokPlayerEmbed;
