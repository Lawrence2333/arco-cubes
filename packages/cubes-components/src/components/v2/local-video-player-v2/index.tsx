import React, { useState } from "react";
import * as Cubes from "arco-cubes-basic";
import { cn } from "arco-cubes-basic";
interface Props {
  card_type?: "medium" | "large";
  video_url: string;
  title?: string;
  thumbnail?: string;
}

const VideoLocalPlayer = ({ datas }: { datas: Props }) => {
  const contextTrackInfo = Cubes.useTrackInfo();
  const { video_url, title, thumbnail, card_type = "medium" } = datas;
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgError, setImgError] = useState(false);
  const isMedium = card_type === "medium";

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    Cubes.Tracker.trackBioViewClick(video_url, true, contextTrackInfo());
    setIsPlaying(true);
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
          <div className="text-base font-secondary font-medium text-on-primary break-all line-clamp-1 text-left px-1">
            {title}
          </div>
        </div>
      )}
      <div className="relative aspect-[16/10] rounded-xl overflow-hidden">
        {isPlaying || imgError ? (
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay={!imgError}
            src={video_url}
          />
        ) : (
          <button
            onClick={handlePlay}
            className="group absolute inset-0 w-full h-full cursor-pointer"
          >
            {thumbnail && !imgError && (
              <img
                src={thumbnail}
                alt={" "}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 w-full bg-black/20 transition-opacity flex items-center justify-center">
              <Cubes.PlayIcon />
              {isMedium && (
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 text-white font-secondary text-base break-all line-clamp-1 text-left">
                  {title}
                </div>
              )}
            </div>
          </button>
        )}
      </div>
    </Cubes.SectionCard>
  );
};

export default VideoLocalPlayer;
