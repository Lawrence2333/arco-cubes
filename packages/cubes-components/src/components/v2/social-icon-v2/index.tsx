import React from "react";
import * as Cubes from "arco-cubes-basic";
import type { SocialIconGroup } from "arco-cubes-basic";
import type { ThemeConfig } from "arco-cubes-types";
import { cn, Lib } from "arco-cubes-basic";

interface SocialLinksProps {
  datas: {
    social_links: {
      links: {
        link: string;
        icon_name: string;
      }[];
      icon_group?: SocialIconGroup;
    };
    show_border?: boolean;
  };
  theme: ThemeConfig;
  editor?: {
    editing?: boolean;
  };
}

export default function SocialLinks({
  datas,
  theme,
  editor,
}: SocialLinksProps) {
  const add_empty_button = editor?.editing ?? false;
  const { social_links, show_border = false } = datas;
  const { links, icon_group = "color-round" } = social_links;
  const global_css = theme?.global_css;

  if (add_empty_button && links.length === 0) {
    links.push({
      link: "",
      icon_name: "link",
    });
  }

  const tintColor = (group: SocialIconGroup) => {
    let color: undefined | string = undefined;
    if (group === "monochrome-round") {
      color = Lib.hexColor(global_css?.["--on-primary"] || "0 0 0");
    }
    return color;
  };

  const bgColor = (group: SocialIconGroup) => {
    if (group === "monochrome-round") {
      return Lib.hexColor(global_css?.["--primary"] || "0 0 0");
    } else if (group === "monochrome-shaped") {
      return Lib.hexColor(global_css?.["--on-surface"] || "0 0 0");
    }
    return undefined;
  };

  const isIconUrl = (icon_name: string) => {
    return icon_name.includes("https");
  };

  return (
    <Cubes.SectionCard
      bgEnable={false}
      className={cn(
        "flex gap-4 py-3 items-center justify-center pc:justify-start"
      )}
    >
      {links.map((item, index) => (
        <Cubes.Link
          key={index}
          href={item.link}
          className={`w-8 h-8 rounded-xl flex items-center justify-center hover:scale-110 transition-transform ${
            show_border ? "shadow-card border-card" : ""
          }`}
        >
          {isIconUrl(item.icon_name) ? (
            <img
              src={item.icon_name}
              alt={" "}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <Cubes.SocialIcon
              tintColor={tintColor(icon_group)}
              bgColor={bgColor(icon_group)}
              social={item.icon_name}
              group={icon_group}
              className="w-8 h-8"
            />
          )}
        </Cubes.Link>
      ))}
    </Cubes.SectionCard>
  );
}
