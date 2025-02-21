import React from "react";
import { cn } from "arco-cubes-basic";
import * as Cubes from "arco-cubes-basic";

interface Props {
  title: string;
  description: string;
  align?: "left" | "center" | "right";
}

const Title = ({ datas }: { datas: Props }) => {
  const { title, description, align = "center" } = datas;
  const alignClass = cn(
    align === "left" ? "items-start text-left" : "",
    align === "right" ? "items-end text-right" : "",
    align === "center" ? "items-center text-center" : ""
  );
  return (
    <Cubes.SectionCard
      bgEnable={false}
      className={cn(
        "flex flex-col pt-3 px-1.5 pb-1.5 gap-0.5 bg-secondary",
        alignClass
      )}
    >
      <div className="text-on-secondary font-secondary font-medium text-xl break-all line-clamp-1">
        {title}
      </div>
      {description && (
        <div className="text-on-secondary/70 font-primary text-sm break-all line-clamp-2">
          {description}
        </div>
      )}
    </Cubes.SectionCard>
  );
};

export default Title;
