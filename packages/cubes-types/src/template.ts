type TemplateType =
  | "social-profile"
  | "video"
  | "audio"
  | "page"
  | "theme"
  | "post" // 1.0.0
  | "profile"
  | "social" // 1.0.0
  | "title"
  | "channel-info" // 1.0.0
  | "gallery" // 1.0.0
  | "product-card"
  | "payment"
  | "newsletter"
  | "contact"
  | "promotion"
  | "status"
  | "location"
  | "call-to-action"
  | "social-icon";

interface PresetLayout {
  name: string; // 布局名称
  icon_name: "small" | "medium" | "large" | "grid" | "carousel" | "list"; // 图标名称
  data: Record<string, any>; // 布局数据
}

interface Preset {
  meta_data: MetaData; // 模板元数据
  layout_name?: string; // 布局名称
  data: Record<string, any>; // 模板数据
}

export type { Preset };

interface Template {
  id: string; // 模板ID
  meta_data: MetaData; // 模板元数据
  preset: Record<string, Preset>; // 模板预设
  component: string; // 核心组件代码
  schema: JsonSchema; // 组件配置
  layouts?: PresetLayout[]; // 布局
}

interface MetaData {
  id?: string; // 模板ID
  type: TemplateType; // 模板类型
  name: string; // 模板名称
  display_name?: string; // 模板显示名称
  cover_url?: string; // 模板封面
  description: string; // 模板描述
  tags: string[]; // 模板标签
  version: string; // 模板版本
  created_at: string; // 模板创建时间
}

export interface JsonSchema {
  title?: string;
  description?: string;
  type: "string" | "number" | "integer" | "boolean" | "array" | "object";
  editable?: boolean;
  control?:
    | "input"
    | "textarea"
    | "image"
    | "link"
    | "switch"
    | "social_icon"
    | "social_link"
    | "color"
    | "datetime"
    | "cta_link"
    | "select";
  options?: { title: string; value: string }[];
  properties?: Record<string, JsonSchema>;
  required?: string[];
  items?: JsonSchema;
  default?: any;
  object_order?: string[];
}

export type { Template };

interface BackgroundConfig {
  color?: string; // 背景颜色，默认背景颜色
  image?: string; // 背景图片
  blur?: number; // 背景模糊
  mask?: string; // 背景遮罩
}

export type { BackgroundConfig };

interface ThemeRule {
  id: string; // 规则ID，随机的id，用于区分不同的规则
  rule_type: "component_id" | "component_type";
  rule_value: string; // 规则值, 组件ID 或 组件类型
  preset_id?: string[]; // 预设ID
  target_layout_name?: string; // 目标布局名称
  data?: Record<string, any>; // 数据
}

interface ThemeConfig {
  meta_data: MetaData; // 样式元数据
  global_css: Record<string, string>; // 全局样式变量
  page_config: {
    padding?: number; // 内边距
    gap?: number; // 间距
    background?: BackgroundConfig; // 背景配置
  };
  extra_rules?: ThemeRule[];
}

interface SEOConfig {
  title: string; // 标题
  description: string; // 描述
  keywords: string[]; // 关键词
}

interface LayoutGroup {
  group_id: string;
  group_name: string;
  direction: "col" | "row";
}

interface Data {
  section_id: string;
  layout_group_id: string;
  component_id: string;
  preset_id?: string;
  layout_name?: string | null;
  datas: Record<string, any>;
}
export type { Data };

interface Page {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  data: Data[];
  theme: ThemeConfig; // 样式配置（默认 tailwind.config.js 获取的样式表）
  seo: SEOConfig; // SEO配置
  layout_groups: LayoutGroup[];
  extra_track_info?: Record<string, any>; // 额外跟踪信息
}

export type { Page, ThemeConfig };
