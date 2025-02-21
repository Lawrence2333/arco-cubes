import React from "react";
import { cn } from "../lib/utils";
export type SocialIconGroup =
  | "color-round" // 彩色圆圈
  | "color-shape" // 彩色形状
  | "monochrome-round" // 单色圆圈
  | "monochrome-shaped"; // 单色形状

export const SocialIcon = ({
  social,
  group = "color-round",
  className,
  tintColor,
  bgColor,
}: {
  social: string;
  group?: SocialIconGroup;
  className?: string;
  tintColor?: string;
  bgColor?: string;
}) => {
  const iconUrl = getIconUrl(social, group, tintColor, bgColor);
  return <img src={iconUrl} alt={social} className={cn(className)} />;
};

const getIconUrl = (
  social: string,
  group: SocialIconGroup,
  tintColor?: string,
  bgColor?: string
) => {
  const params = new URLSearchParams();
  if (tintColor) {
    params.set("tint", tintColor);
  }
  if (bgColor) {
    params.set("bg", bgColor);
  }
  if (params.size > 0) {
    return `https://public.thearco.ai/arco-for-generation/icons/${group}/${social}?${params.toString()}`;
  }
  return `https://public.thearco.ai/arco-for-generation/icons/${group}/${social}`;
};
