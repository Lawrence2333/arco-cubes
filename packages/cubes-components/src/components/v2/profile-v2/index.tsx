import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import { cn, Lib } from "arco-cubes-basic";
import type { ThemeConfig } from "arco-cubes-types";
import * as Cubes from "arco-cubes-basic";

const useIsPc = () => {
  const [isPc, setIsPc] = useState<boolean | null>(null);

  useEffect(() => {
    const targetWindow =
      // @ts-ignore
      typeof iframeWindow !== "undefined" ? iframeWindow : window;
    const checkWidth = () => {
      setIsPc(targetWindow.innerWidth >= 1280);
    };

    checkWidth();
    targetWindow.addEventListener("resize", checkWidth);

    return () => targetWindow.removeEventListener("resize", checkWidth);
  }, []);

  return isPc;
};

interface HeaderProfileProps {
  datas: {
    avatar: string;
    name: string;
    bio?: string;
    status?: string;
    ip?: string;
    name_italic?: boolean;
    header_style?: "classic" | "portrait" | "banner";
    background_color?: string;
    name_color?: string;
    show_border?: boolean;
  };
  theme?: ThemeConfig;
}

const convertBoxShadowToTextShadow = (boxShadow: string) => {
  // box-shadow 格式: "0 2px 4px 0 rgba(0,0,0,0.1)"
  const parts = boxShadow.split(" ");
  if (parts.length >= 5) {
    // 提取 x y blur 和 color
    const [x, y, blur, , color] = parts;
    return `${x} ${y} ${blur} ${color}`;
  }
  return boxShadow;
};

const HeaderProfile = ({ datas, theme }: HeaderProfileProps) => {
  const {
    name,
    avatar,
    bio,
    status,
    ip,
    name_italic = false,
    header_style = "classic",
    show_border = false,
    name_color,
  } = datas;

  const isPc = useIsPc();

  const boxShadow = show_border ? theme?.global_css["--card-shadow"] : "";
  const textShadow = boxShadow ? convertBoxShadowToTextShadow(boxShadow) : "";

  const borderColor = show_border
    ? Lib.rgb(theme?.global_css["--outline"] || "0 0 0")
    : "";

  const nameDiv = () => {
    return (
      <div
        className={`text-[36px] font-normal ${
          name_italic ? "italic" : ""
        } text-on-surface font-secondary break-all line-clamp-2 text-center pc:text-left`}
        style={{
          textShadow,
          WebkitTextStroke: borderColor ? `1px ${borderColor}` : "none",
          color: name_color,
        }}
      >
        {name}
      </div>
    );
  };

  const bioDiv = () => {
    return (
      <div
        className={cn(
          "text-on-surface/70 text-sm break-all line-clamp-3 text-center pc:text-left",
          name_italic ? "italic" : ""
        )}
      >
        {bio}
      </div>
    );
  };

  const statusDiv = () => {
    return (
      status && (
        <div className="flex items-center justify-center border-on-surface/70 border h-5 rounded-full gap-1 px-3 pc:justify-start">
          <div className="w-2 h-2 rounded-full bg-[#3AEE34] flex-shrink-0"></div>
          <div className="text-on-surface text-xs max-w-[160px] break-all line-clamp-1">
            {status}
          </div>
        </div>
      )
    );
  };

  const ipDiv = () => {
    return (
      ip && (
        <div className="flex items-center justify-center border-on-surface/70 border rounded-full h-5 gap-1 px-3">
          <MapPin className="w-2 h-2 text-on-surface flex-shrink-0" />
          <div className="text-on-surface text-xs max-w-[160px] break-all line-clamp-1">
            {ip}
          </div>
        </div>
      )
    );
  };

  if (isPc === null || isPc === undefined) {
    return null;
  }

  if (header_style === "classic" || (isPc && header_style === "portrait")) {
    return (
      <Cubes.SectionCard
        bgEnable={false}
        className={cn(
          "flex flex-col w-full items-center gap-2 mb-3 flex-shrink-0 pc:min-h-[323px] pc:items-start"
        )}
      >
        <div className="flex flex-col items-center justify-center gap-2 py-0 pc:items-start">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden mt-[45px] mb-4 pc:w-[200px] pc:h-[200px] pc:mt-0">
            <img src={avatar} alt=" " className="w-full h-full object-cover" />
          </div>
          {nameDiv()}
          {bioDiv()}
          {(status || ip) && (
            <div className="flex items-center justify-center gap-1.5">
              {statusDiv()}
              {ipDiv()}
            </div>
          )}
        </div>
      </Cubes.SectionCard>
    );
  } else if (header_style === "portrait") {
    const bgColor = (theme?.global_css["--surface"] || "255 255 255").replace(
      / /g,
      ","
    );
    const maskLinear = `linear-gradient(to bottom, 
      rgba(${bgColor}, 1) 50%, 
      rgba(${bgColor}, 0.7) 65%, 
      rgba(${bgColor}, 0.3) 80%,
      rgba(${bgColor}, 0) 100%
    )`;
    return (
      <Cubes.SectionCard
        bgEnable={false}
        className={cn(
          "flex flex-col items-center relative",
          "justify-end gap-1 aspect-square mb-3 overflow-visible pc:max-w-[400px]"
        )}
      >
        <div
          className={cn("absolute left-[50%] top-0 h-full translate-x-[-50%]")}
          style={{ width: "100vw" }}
        >
          <img
            src={avatar}
            alt=" "
            className="h-full w-full object-cover z-[-1]"
            style={{
              maskImage: maskLinear,
              WebkitMaskImage: maskLinear,
              objectPosition: "center",
            }}
          />
        </div>
        <div className="absolute flex flex-col items-center justify-center gap-2">
          {nameDiv()}
          {bioDiv()}
          {(status || ip) && (
            <div className="flex items-center justify-center gap-2">
              {statusDiv()}
              {ipDiv()}
            </div>
          )}
        </div>
      </Cubes.SectionCard>
    );
  } else if (header_style === "banner") {
    return (
      <Cubes.SectionCard
        bgEnable={false}
        className="flex flex-col items-start mb-3 pc:max-w-[400px] "
      >
        <div className="w-full aspect-[16/10] overflow-hidden mt-6 pc:mt-0 rounded-3xl">
          <img src={avatar} alt=" " className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col items-start gap-2 mt-6">
          {nameDiv()}
          {bioDiv()}
          {(status || ip) && (
            <div className="flex flex-col items-start justify-center gap-1">
              {statusDiv()}
              {ipDiv()}
            </div>
          )}
        </div>
      </Cubes.SectionCard>
    );
  }
  return null;
};

export default HeaderProfile;
