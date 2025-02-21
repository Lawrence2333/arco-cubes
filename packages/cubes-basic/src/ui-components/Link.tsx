import React from "react";
import { cn } from "../lib/utils";
import { useTrackInfo } from "../tracking/TrackContext";
import { Tracker } from "../tracking/Tracker";

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function Link({
  href,
  className,
  children,
  ...props
}: LinkProps) {
  const contextTrackInfo = useTrackInfo();
  return (
    <a
      href={href}
      className={cn("block text-inherit no-underline", className)}
      {...props}
      onClickCapture={(e) => {
        if (href) {
          e.preventDefault();
          window.open(href, "_blank");
          Tracker.trackBioViewClick(href, true, contextTrackInfo());
        }
      }}
    >
      {children}
    </a>
  );
}
