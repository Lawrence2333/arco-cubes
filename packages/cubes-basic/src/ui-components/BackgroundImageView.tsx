import React from "react";
import type { BackgroundConfig } from "arco-cubes-types";
import { cn } from "../lib/utils";

export default function BackgroundImageView({
  background,
}: {
  background: BackgroundConfig;
}) {
  const { image, blur, mask } = background;

  if (!image || image.length === 0) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <img
        src={image}
        alt="background"
        className={cn("fixed top-0 left-0 object-fill w-full")}
        style={{
          filter: `blur(${blur}px)`,
          mask: mask ?? undefined,
        }}
      />
    </div>
  );
}
