import { FC } from "react";

type Version = "v1" | "v2";

interface VersionSwitchProps {
  version: Version;
  onChange: (version: Version) => void;
  className?: string;
}

const VersionSwitch: FC<VersionSwitchProps> = ({
  version,
  onChange,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center bg-white/80 backdrop-blur rounded-full p-1 shadow-lg ${className}`}
    >
      <div
        className="absolute w-[72px] h-8 pc:w-[96px] pc:h-10 rounded-full bg-primary transition-all duration-200 ease-in-out"
        style={{
          transform: `translateX(${version === "v2" ? "76px" : "4px"})`,
        }}
      />
      <button
        onClick={() => onChange("v1")}
        className={`relative w-[72px] h-8 pc:w-[96px] pc:h-10 text-sm pc:text-base font-medium rounded-full transition-colors duration-200 ${
          version === "v1" ? "text-white" : "text-gray-600"
        }`}
      >
        V1
      </button>
      <button
        onClick={() => onChange("v2")}
        className={`relative w-[72px] h-8 pc:w-[96px] pc:h-10 text-sm pc:text-base font-medium rounded-full transition-colors duration-200 ${
          version === "v2" ? "text-white" : "text-gray-600"
        }`}
      >
        V2
      </button>
    </div>
  );
};

export default VersionSwitch;
