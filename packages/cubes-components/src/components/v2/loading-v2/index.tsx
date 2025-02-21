import React from "react";
import { ArrowUpRight } from "lucide-react";
import * as Cubes from "arco-cubes-basic";

const Loading = () => {
  return (
    <Cubes.SectionCard className="flex flex-col p-3 gap-3">
      <div className="w-full h-32 rounded-lg bg-on-primary/10 animate-pulse"></div>
      <div className="flex justify-between items-center px-1 rounded-lg">
        <div className="h-5 bg-on-primary/10 animate-pulse w-56"></div>
        <ArrowUpRight className="w-4 h-4 text-on-primary" />
      </div>
    </Cubes.SectionCard>
  );
};

export default Loading;
