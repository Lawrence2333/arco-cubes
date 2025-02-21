import * as Cubes from "arco-cubes-basic";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import { cn } from "arco-cubes-basic";

interface Props {
  title: string;
  thumbnail: string;
  video_url: string;
  card_type: "medium" | "large";
}

const VideoYoutubePlayerEmbed = ({ datas }: { datas: Props }) => {
  const { title, video_url, card_type } = datas;
  let thumbnail = datas.thumbnail;
  const isShorts = video_url.includes("/shorts/");
  const isMedium = card_type === "medium";
  const contextTrackInfo = Cubes.useTrackInfo();
  const getVideoId = (url: string) => {
    try {
      const urlObj = new URL(url);
      // 处理 watch?v= 格式
      const videoId = urlObj.searchParams.get("v");
      if (videoId) {
        return videoId;
      }
      // 处理直接路径格式
      const pathSegments = urlObj.pathname.split("/");
      return pathSegments[pathSegments.length - 1];
    } catch (e) {
      return null;
    }
  };

  const fixUrl = (url: string) => {
    if (url.includes("watch?v=")) {
      return url.replace("watch?v=", "embed/");
    }
    if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/");
    }
    if (url.includes("/shorts/")) {
      return url.replace("/shorts/", "/embed/");
    }
    return url;
  };

  const fix_video_url = fixUrl(video_url);

  if (!thumbnail) {
    const video_id = getVideoId(video_url);
    if (video_id) {
      thumbnail = `https://i.ytimg.com/vi/${video_id}/hqdefault.jpg`;
    }
  }

  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    Cubes.Tracker.trackBioViewClick(video_url, true, contextTrackInfo());
  };

  const YouTubeIcon = () => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M35.65 6.86C37.36 7.32 38.71 8.67 39.18 10.38C40 13.51 40 20 40 20C40 20 40 26.49 39.18 29.62C38.71 31.33 37.36 32.68 35.65 33.15C32.52 34 20 34 20 34C20 34 7.51 34 4.35 33.15C2.64 32.68 1.29 31.33 0.82 29.62C0 26.49 0 20 0 20C0 20 0 13.51 0.82 10.38C1.29 8.67 2.64 7.32 4.35 6.86C7.51 6 20 6 20 6C20 6 32.52 6 35.65 6.86Z"
          fill="#FF0000"
        />
        <path d="M26.42 20L16.01 26V14L26.42 20Z" fill="white" />
      </svg>
    );
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
              social="youtube"
              className="w-5 h-5 flex-shrink-0"
            />
            <div className="text-base font-secondary font-medium text-on-primary break-all line-clamp-1 text-left">
              {title}
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-on-primary" />
        </div>
      )}
      <div
        className={cn(
          "relative rounded-xl overflow-hidden",
          isShorts ? "aspect-[9/16]" : "aspect-[16/10]"
        )}
      >
        <div className="w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src={`${fix_video_url}${
              isPlaying
                ? "?autoplay=1&mute=1&enablejsapi=1&playsinline=1"
                : "?enablejsapi=1&playsinline=1"
            }`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="group absolute inset-0 w-full h-full"
          >
            {thumbnail && !imgError && (
              <img
                src={thumbnail}
                alt={" "}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            )}
            <div className="absolute inset-0 bg-black/20 transition-opacity flex items-center justify-center">
              <div className="w-16 h-16 rounded-full text-white/90 flex items-center justify-center">
                {isMedium ? <YouTubeIcon /> : <Cubes.PlayIcon />}
              </div>
            </div>
          </button>
        )}
        {isMedium && !isPlaying && (
          <div className="absolute bottom-0 left-0 w-full px-4 py-3 text-white font-secondary text-base break-all line-clamp-1">
            {title}
          </div>
        )}
      </div>
    </Cubes.SectionCard>
  );
};

export default VideoYoutubePlayerEmbed;
