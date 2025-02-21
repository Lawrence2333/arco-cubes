"use client";

import { BackgroundImageView } from "arco-cubes-basic";
import type { Data } from "arco-cubes-types";
import { ResponsiveLayout } from "./ResponsiveLayout";
import { SectionRenderer } from "./SectionRenderer";
import Components from "arco-cubes-components";
import { injectCustomFonts } from "../utils/injectGoogleFonts";
import { MockPageData } from "arco-cubes-mock";
import { useState, useEffect } from "react";

export default function PreviewPage() {
  const pageData = MockPageData;
  const padding = pageData.theme.page_config.padding ?? 12;
  const gap = pageData.theme.page_config.gap ?? 12;
  const stylesVariables = pageData.theme.global_css;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDependencies = async () => {
      try {
        // 1. 设置CSS变量
        const variables = stylesVariables;
        Object.keys(variables).forEach((key) => {
          let value = variables[key];
          document.documentElement.style.setProperty(key, value);
        });

        // 3. 加载字体
        await injectFonts();

        // 4. 等待一小段时间确保字体应用
        await new Promise((resolve) => setTimeout(resolve, 100));

        // 5. 完成加载
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading dependencies:", error);
        setIsLoading(false);
      }
    };

    loadDependencies();
  }, [stylesVariables]);

  const injectFonts = async () => {
    const variables = pageData.theme.global_css;
    const fontFamilyKeys = Object.keys(variables).filter((key) =>
      key.startsWith("--font-family-")
    );
    const fontFamilyValues = fontFamilyKeys.map((key) => variables[key]);
    await Promise.all(
      fontFamilyValues.map((fontFamilyValue) =>
        injectCustomFonts(fontFamilyValue)
      )
    );
  };

  const queryData = (item: Data) => {
    const templateSchema =
      Components.schema[item.component_id as keyof typeof Components.schema];
    const preset = item.preset_id
      ? templateSchema.preset[item.preset_id]
      : undefined;
    // const schemaProperties = templateSchema.schema.properties as Record<
    //   string,
    //   JsonSchema
    // >;
    let target_data: Record<string, any> = {};
    if (preset) {
      for (const key in preset.data) {
        target_data[key] = preset.data[key];
      }
    }
    return {
      ...templateSchema.schema.default,
      ...target_data,
    };
  };

  function processPageData(
    data: Data[],
    layoutGroups: Array<{
      group_id: string;
      group_name: string;
      direction: string;
    }>
  ) {
    // 使用数组来存储已处理的组ID，保持顺序
    const processedGroupIds: string[] = [];
    // 使用对象来存储分组，便于访问
    const groupedSections: Record<
      string,
      {
        layoutGroup: {
          group_id: string;
          group_name: string;
          direction: string;
        };
        sections: Data[];
      }
    > = {};
    const standaloneSections: Data[] = [];

    // 遍历所有组件，保持原始顺序
    data.forEach((section) => {
      const layoutGroup = layoutGroups.find(
        (group) => section.layout_group_id === group.group_id
      );

      if (layoutGroup) {
        const groupId = layoutGroup.group_id;
        // 如果是新的组，记录顺序
        if (!processedGroupIds.includes(groupId)) {
          processedGroupIds.push(groupId);
        }
        // 添加到对应的组
        if (!groupedSections[groupId]) {
          groupedSections[groupId] = {
            layoutGroup,
            sections: [],
          };
        }
        groupedSections[groupId].sections.push(section);
      } else {
        standaloneSections.push(section);
      }
    });

    // 返回按原始顺序排列的组和独立部分
    return {
      processedGroupIds, // 用于保持顺序
      groupedSections, // 用于存储分组数据
      standaloneSections,
    };
  }

  const { processedGroupIds, groupedSections } = processPageData(
    pageData.data,
    pageData.layout_groups
  );

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-default">
        <div className="w-10 h-10 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  console.log("pageData", pageData);
  return (
    <div className="w-full min-h-screen bg-no-repeat bg-contain bg-fixed flex justify-center items-center bg-surface">
      {pageData && pageData.theme.page_config.background && (
        <BackgroundImageView
          background={pageData.theme.page_config.background}
        />
      )}
      <div
        className="relative w-full pc:max-w-none max-w-[550px] min-h-screen bg-no-repeat bg-contain bg-fixed mb-20"
        style={{
          paddingLeft: `${padding}px`,
          paddingRight: `${padding}px`,
        }}
      >
        <ResponsiveLayout
          gap={gap}
          leftContent={
            <SectionRenderer
              sections={groupedSections[processedGroupIds[0]].sections}
              componentMap={Components.component}
              componentSchemaMap={Components.schema}
              theme={pageData.theme}
              queryData={queryData}
              extraTrackInfo={pageData.extra_track_info}
            />
          }
          rightContent={
            <SectionRenderer
              sections={groupedSections[processedGroupIds[1]].sections}
              componentMap={Components.component}
              componentSchemaMap={Components.schema}
              theme={pageData.theme}
              queryData={queryData}
              extraTrackInfo={pageData.extra_track_info}
            />
          }
        />
      </div>
    </div>
  );
}

// import { getAllThemeIds, getThemeConfig } from "@themes";
// import { ArrowBigDown, ArrowBigUp } from "lucide-react";

// export default function PreviewPage() {
//   const [version, setVersion] = useState<"v1" | "v2">("v1");
//   const [currentThemeId, setCurrentThemeId] = useState<string | null>(null);
//   const [currentTheme, setCurrentTheme] = useState<ThemeConfig | null>(null);
//   const [showControls, setShowControls] = useState(true);

//   const defaultData = data;

//   // 加载选中的主题
//   useEffect(() => {
//     if (currentThemeId) {
//       getThemeConfig(currentThemeId)
//         .then((theme) => {
//           console.log(theme);
//           setCurrentTheme(theme);
//         })
//         .catch((error) => {
//           console.error(`Failed to load theme: ${currentThemeId}`, error);
//           setCurrentTheme(null);
//         });
//     } else {
//       setCurrentTheme(null);
//     }
//   }, [currentThemeId]);

//   const pageData = {
//     ...defaultData,
//     theme: currentTheme ?? defaultData.theme,
//   };

//   const queryData = (item: Data, themeConfig: ThemeConfig) => {
//     const templateSchema = componentSchemaMap[item.component_id];
//     // console.log("templateSchema", templateSchema);
//     const preset = templateSchema.preset[item.preset_id];
//     const schemaProperties = templateSchema.schema.properties as Record<
//       string,
//       JsonSchema
//     >;
//     let target_data: Record<string, any> = {};
//     if (preset) {
//       for (const key in preset.data) {
//         target_data[key] = preset.data[key];
//       }
//     }

//     if (USE_PRE_RELEASE_COMPONENT_DEFAULT_DATA) {
//       const extraRules = themeConfig.extra_rules;

//       if (extraRules) {
//         for (const rule of extraRules) {
//           if (
//             rule.rule_type === "component_id" &&
//             rule.rule_value === item.component_id
//           ) {
//             if (rule.data) {
//               for (const key in rule.data) {
//                 if (
//                   !rule.target_layout_name ||
//                   rule.target_layout_name === item.layout_name
//                 ) {
//                   target_data[key] = rule.data[key];
//                 }
//               }
//             }
//           } else if (
//             rule.rule_type === "component_type" &&
//             rule.rule_value === templateSchema.meta_data.type
//           ) {
//             if (rule.data) {
//               for (const key in rule.data) {
//                 if (
//                   !rule.target_layout_name ||
//                   rule.target_layout_name === item.layout_name
//                 ) {
//                   // console.log("item", item);
//                   // console.log("rule", rule);
//                   target_data[key] = rule.data[key];
//                 } else {
//                   console.error(
//                     "rule.target_layout_name",
//                     rule.target_layout_name,
//                     "item.layout_name",
//                     item.layout_name
//                   );
//                 }
//               }
//             }
//           } else {
//             console.log("rule", rule);
//           }
//         }
//       }

//       console.log("target_data for component", item.component_id, target_data);

//       return {
//         ...templateSchema.schema.default,
//         ...target_data,
//       };
//     }

//     if (item.datas) {
//       Object.keys(item.datas).forEach((key) => {
//         target_data[key] = item.datas[key];
//       });
//     }

//     const extraRules = themeConfig.extra_rules;

//     if (extraRules) {
//       for (const rule of extraRules) {
//         if (
//           rule.rule_type === "component_id" &&
//           rule.rule_value === item.component_id
//         ) {
//           if (rule.data) {
//             for (const key in rule.data) {
//               if (
//                 !rule.target_layout_name ||
//                 rule.target_layout_name === item.layout_name
//               ) {
//                 target_data[key] = rule.data[key];
//               }
//             }
//           }
//         } else if (
//           rule.rule_type === "component_type" &&
//           rule.rule_value === templateSchema.meta_data.type
//         ) {
//           if (rule.data) {
//             for (const key in rule.data) {
//               if (
//                 !rule.target_layout_name ||
//                 rule.target_layout_name === item.layout_name
//               ) {
//                 target_data[key] = rule.data[key];
//               }
//             }
//           }
//         }
//       }
//     }

//     const requiredKeys = templateSchema.schema.required ?? [];

//     Object.keys(schemaProperties).forEach((key) => {
//       if (target_data[key] === undefined) {
//         if (!requiredKeys.includes(key)) {
//           if (schemaProperties[key].default) {
//             target_data[key] = schemaProperties[key].default;
//           }
//         } else {
//           throw new Error(`${key} is required`);
//         }
//       }
//     });

//     return target_data;
//   };

//   const { processedGroupIds, groupedSections, standaloneSections } =
//     processPageData(pageData.data, pageData.layout_groups);

//   if (isLoading) {
//     return (
//       <div className="w-full h-screen flex items-center justify-center bg-default">
//         <div className="w-10 h-10 border-4 border-secondary border-t-primary rounded-full animate-spin"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full min-h-screen bg-no-repeat bg-contain bg-fixed flex justify-center items-center bg-surface">
//       {pageData && pageData.theme.page_config.background && (
//         <BackgroundImageView
//           background={pageData.theme.page_config.background}
//         />
//       )}
//       <div
//         className="relative w-full pc:max-w-none max-w-[550px] min-h-screen bg-no-repeat bg-contain bg-fixed mb-20"
//         style={{
//           paddingLeft: `${padding}px`,
//           paddingRight: `${padding}px`,
//         }}
//       >
//         <ResponsiveLayout
//           gap={gap}
//           leftContent={
//             <SectionRenderer
//               sections={groupedSections[processedGroupIds[0]].sections}
//               componentMap={componentMap}
//               componentSchemaMap={componentSchemaMap}
//               theme={pageData.theme}
//               queryData={queryData}
//               extraTrackInfo={pageData.extra_track_info}
//             />
//           }
//           rightContent={
//             <SectionRenderer
//               sections={groupedSections[processedGroupIds[1]].sections}
//               componentMap={componentMap}
//               componentSchemaMap={componentSchemaMap}
//               theme={pageData.theme}
//               queryData={queryData}
//               extraTrackInfo={pageData.extra_track_info}
//             />
//           }
//         />
//       </div>
//       <div
//         className={`fixed top-16 right-4 z-2000 flex flex-col gap-2 transition-opacity duration-300`}
//       >
//         <div
//           className={`flex justify-end flex-col ${
//             showControls ? "opacity-100" : "opacity-0 pointer-events-none"
//           }`}
//         >
//           <VersionSwitch version={version} onChange={setVersion} />
//           <select
//             className="p-2 rounded bg-white border border-gray-300"
//             value={currentThemeId || ""}
//             onChange={(e) => setCurrentThemeId(e.target.value || null)}
//           >
//             <option value="">Default Theme</option>
//             {getAllThemeIds().map((themeId) => (
//               <option key={themeId} value={themeId}>
//                 {themeId}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="absolute top-0 right-0 w-6 h-6 cursor-pointer items-center justify-center text-white bg-black rounded-full p-1">
//           {showControls ? (
//             <ArrowBigUp
//               onClick={() => setShowControls(!showControls)}
//               className="w-full h-full"
//             />
//           ) : (
//             <ArrowBigDown
//               onClick={() => setShowControls(!showControls)}
//               className="w-full h-full"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
