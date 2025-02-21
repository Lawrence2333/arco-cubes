import React from "react";
import * as Cubes from "arco-cubes-basic";
import { type ThemeConfig } from "arco-cubes-types";
import { cn, Lib } from "arco-cubes-basic";

interface PromotionalBannerProps {
  datas: {
    banner_text: string;
    jump_url: string;
    position: "top-fixed" | "bottom-fixed" | "flexible";
  };
  theme: ThemeConfig;
}

const PromotionalBanner = ({ datas, theme }: PromotionalBannerProps) => {
  const { banner_text, jump_url, position } = datas;

  if (!banner_text) {
    return null;
  }

  const tintColor = Lib.rgb(theme.global_css["--primary"] || "0 0 0");
  const bgColor = Lib.rgb(theme.global_css["--on-primary"] || "0 0 0");

  const TopStar = () => {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Star 12"
          d="M14.9826 2.98538C14.7406 1.0049 11.8688 1.00485 11.6267 2.98538L11.2739 5.87311C10.9753 8.31598 9.05035 10.241 6.60749 10.5395L3.71976 10.8924C1.73928 11.1344 1.73922 14.0062 3.71976 14.2483L6.60749 14.6011C9.05035 14.8997 10.9753 16.8246 11.2739 19.2675L11.6267 22.1552C11.8688 24.1358 14.7406 24.1358 14.9826 22.1552L15.3355 19.2675C15.634 16.8246 17.559 14.8997 20.0019 14.6011L22.8896 14.2483C24.8701 14.0062 24.8701 11.1344 22.8896 10.8924L20.0019 10.5395C17.559 10.241 15.634 8.31598 15.3355 5.87311L14.9826 2.98538Z"
          fill={tintColor}
          stroke={bgColor}
          strokeWidth="3"
        />
      </svg>
    );
  };

  const TopSmStar = () => {
    return (
      <svg
        width="9"
        height="7"
        viewBox="0 0 9 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Star 14"
          d="M4.18662 0.0611957C4.19802 -0.0203987 4.33323 -0.0203985 4.34463 0.0611959L4.49212 1.11728C4.65184 2.2609 5.68175 3.16206 6.98874 3.30182L8.19569 3.43087C8.28894 3.44084 8.28894 3.55916 8.19569 3.56913L6.98873 3.69818C5.68174 3.83794 4.65184 4.7391 4.49212 5.88272L4.34463 6.9388C4.33323 7.0204 4.19802 7.0204 4.18662 6.9388L4.03913 5.88272C3.87941 4.7391 2.8495 3.83794 1.54252 3.69818L0.335563 3.56913C0.242312 3.55916 0.242312 3.44084 0.335563 3.43087L1.54252 3.30182C2.84951 3.16206 3.87941 2.26089 4.03913 1.11728L4.18662 0.0611957Z"
          fill={tintColor}
        />
      </svg>
    );
  };

  const BottomStar = () => {
    return (
      <svg
        width="20"
        height="19"
        viewBox="0 0 20 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Star 13"
          d="M11.3829 2.9317C11.1497 1.02279 8.3816 1.02274 8.14832 2.9317L7.90864 4.893C7.73272 6.33265 6.59827 7.46709 5.15862 7.64302L3.19733 7.88269C1.28842 8.11596 1.28836 10.884 3.19733 11.1173L5.15862 11.357C6.59827 11.5329 7.73272 12.6674 7.90864 14.107L8.14832 16.0683C8.38159 17.9772 11.1497 17.9772 11.3829 16.0683L11.6226 14.107C11.7985 12.6674 12.933 11.5329 14.3726 11.357L16.3339 11.1173C18.2429 10.884 18.2429 8.11597 16.3339 7.88269L14.3726 7.64302C12.933 7.46709 11.7985 6.33265 11.6226 4.893L11.3829 2.9317Z"
          fill={tintColor}
          stroke={bgColor}
          strokeWidth="3"
        />
      </svg>
    );
  };

  const positionClass =
    position === "flexible"
      ? "relative"
      : position === "top-fixed"
      ? "fixed left-0 right-0 top-4 z-50"
      : "fixed left-0 right-0 bottom-[64px] z-50";

  return (
    <Cubes.SectionCard
      bgEnable={false}
      className={`${positionClass} mx-auto flex justify-center`}
      style={{
        maxWidth: "fit-content",
        margin: "0 auto",
      }}
    >
      <Cubes.Link
        href={jump_url}
        className="relative cursor-pointer inline-block"
      >
        <div
          className="relative text-primary rounded-full bg-on-primary"
          style={{
            boxShadow:
              "0 0 2px 0 rgba(12, 12, 13, 0.20), 0 16px 32px -1px rgba(12, 12, 13, 0.10)",
          }}
        >
          <div className="relative flex items-center justify-center px-5 py-2">
            <p className="text-sm font-bold italic text-primary leading-[140%] font-tertiary text-center">
              {banner_text}
            </p>
          </div>
        </div>
        <div className="absolute" style={{ top: "-6px", left: "-6px" }}>
          <TopStar />
        </div>
        <div className="absolute" style={{ top: "10px", left: "9px" }}>
          <TopSmStar />
        </div>
        <div className="absolute" style={{ bottom: "-3px", right: "-3px" }}>
          <BottomStar />
        </div>
      </Cubes.Link>
    </Cubes.SectionCard>
  );
};

export default PromotionalBanner;
