import { Data, ThemeConfig } from "arco-cubes-types";
import { TrackContext } from "arco-cubes-basic";
import * as Cubes from "arco-cubes-basic";

interface SectionRendererProps {
  sections: Data[];
  componentMap: any;
  componentSchemaMap: any;
  theme: ThemeConfig;
  queryData: (item: Data, theme: ThemeConfig) => any;
  extraTrackInfo?: Record<string, any>;
}

export const SectionRenderer: React.FC<SectionRendererProps> = ({
  sections,
  componentMap,
  componentSchemaMap,
  theme,
  queryData,
  extraTrackInfo,
}) => {
  return (
    <>
      {sections.map((item) => {
        const schema = componentSchemaMap[item.component_id];
        if (!schema) {
          console.error(`Schema not found for component ${item.component_id}`);
          return null;
        }
        if (!schema.preset) {
          console.error(`Preset not found for component ${item.component_id}`);
          return null;
        }
        // const preset = schema.preset[item.preset_id];
        // if (!preset) {
        //   console.error(`Preset not found for component ${item.preset_id}`);
        //   return null;
        // }
        const Component = componentMap[item.component_id];
        if (!Component) {
          console.error(`Component not found ${item.component_id}`);
          return null;
        }
        try {
          const data = queryData(item, theme);
          return (
            <div key={item.section_id + item.preset_id} id={item.component_id}>
              <TrackContext.Provider
                value={() => ({
                  ...Cubes.Tracker.baseParams(
                    schema,
                    item,
                    theme,
                    extraTrackInfo
                  ),
                })}
              >
                <Component
                  datas={data}
                  theme={theme}
                  editor={{ add_empty_button: true }}
                />
              </TrackContext.Provider>
            </div>
          );
        } catch (error: any) {
          return (
            <div key={item.section_id}>
              Error on {item.preset_id}: {error.message}
            </div>
          );
        }
      })}
    </>
  );
};
