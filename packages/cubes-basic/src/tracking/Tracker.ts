import { trackEvent } from "../lib/track";
import type { Template, Data, ThemeConfig } from "arco-cubes-types";

enum EventType {
  click = "bio_view_click",
}

enum EventProperty {
  bio_project_id = "bio_project_id",
  bio_group_id = "bio_group_id",
  // bio_create_time = "bio_create_time",
  // bio_project_uri = "bio_project_uri",
  component_id = "component_id",
  component_name = "component_name",
  component_type = "component_type",
  component_version = "component_version",
  section_id = "section_id",
  preset_name = "preset_name",
  referrer_url = "referrer_url",
  referrer_domain = "referrer_domain",
  theme_name = "theme_name",
  // theme_id = "theme_id",

  is_jump = "is_jump",
  jump_url = "jump_url",
}

const componentParams = (template: Template) => {
  return {
    component_id: template.id,
    component_name: template.meta_data.name,
    component_type: template.meta_data.type,
    component_version: template.meta_data.version,
  };
};

const sectionParams = (section: Data, template: Template) => {
  const preset = section.preset_id ? template.preset[section.preset_id] : null;
  return {
    section_id: section.section_id,
    preset_name: preset?.meta_data.name,
  };
};

const themeParams = (theme: ThemeConfig) => {
  return {
    theme_name: theme.meta_data.name,
  };
};

const referrerParams = () => {
  try {
    const referrer =
      typeof window !== "undefined" ? window.document.referrer : "";
    if (!referrer) {
      return {
        referrer_url: "",
        referrer_domain: "",
      };
    }
    const url = new URL(referrer);
    return {
      referrer_url: referrer,
      referrer_domain: url.hostname,
    };
  } catch (error) {
    return {
      referrer_url: "",
      referrer_domain: "",
    };
  }
};

const baseParams = (
  template: Template,
  section: Data,
  theme: ThemeConfig,
  extraTrackInfo: Record<string, any> = {}
) => {
  return {
    ...componentParams(template),
    ...sectionParams(section, template),
    ...themeParams(theme),
    ...referrerParams(),
    ...extraTrackInfo,
  };
};

const trackBioViewClick = (
  jumpUrl: string,
  isJump: boolean = false,
  extraTrackInfo: Record<string, any> = {}
) => {
  trackEvent(EventType.click, {
    ...extraTrackInfo,
    [EventProperty.jump_url]: jumpUrl,
    [EventProperty.is_jump]: isJump,
  });
};

export const Tracker = {
  trackBioViewClick,
  baseParams,
};
