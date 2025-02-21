// import React from "react";
// import * as Babel from "@babel/standalone";
// import { Data, Template, ThemeConfig } from "../schema/template";
// import * as utils from "@/lib/utils";
// import * as injectTailwind from "@/utils/injectTailwind";
// import * as Cubes from "@arco/cubes";
// import * as LucideIcon from "lucide-react";

// const DynamicSection = ({
//   template,
//   props,
//   theme,
// }: {
//   template: Template;
//   props: Record<string, any>;
//   theme?: ThemeConfig;
// }) => {
//   try {
//     const processedContent = template.component
//       .replace(/@lib\/utils/g, "@/lib/utils")
//       .replace(/@utils\/injectTailwind/g, "@/utils/injectTailwind")
//       .replace(/@components\/cubes/g, "@/components/cubes")
//       .replace(/lucide-react/g, "lucide-react");

//     const transformedCode = Babel.transform(processedContent, {
//       presets: [
//         "react",
//         [
//           "typescript",
//           {
//             isTSX: true,
//             allExtensions: true,
//           },
//         ],
//       ],
//       plugins: ["transform-modules-umd"],
//     }).code;

//     const fakeRequire = (moduleName: string) => {
//       const modules = {
//         react: React,
//         "@/lib/utils": utils,
//         "@/utils/injectTailwind": injectTailwind,
//         "@/components/cubes": Cubes,
//         "lucide-react": LucideIcon,
//       };

//       return modules[moduleName];
//     };

//     const Component = new Function(
//       "require",
//       `
//       let exports = {};
//       ${transformedCode}
//       return exports.default || exports;
//     `
//     )(fakeRequire);

//     const data: Record<string, any> = {};
//     Object.keys(template.schema).forEach((key) => {
//       data[key] = template.schema[key].default;
//     });

//     if (props.datas) {
//       Object.keys(props.datas).forEach((key) => {
//         data[key] = props.datas[key];
//       });
//     }

//     return <Component datas={data} theme={theme} />;
//   } catch (error) {
//     return (
//       <div className="text-red-500">
//         Component {template.id} Error: {error.message}
//       </div>
//     );
//   }
// };

// export default function SectionItem({
//   section,
//   template,
//   showName = false,
//   theme,
// }: {
//   section: Data;
//   template: Template;
//   showName?: boolean;
//   theme?: ThemeConfig;
// }) {
//   return (
//     <div className="relative" id={section.component_id + section.section_id}>
//       <DynamicSection template={template} props={section} theme={theme} />
//       {showName && (
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-t-md text-sm">
//           {template.id}
//         </div>
//       )}
//     </div>
//   );
// }
