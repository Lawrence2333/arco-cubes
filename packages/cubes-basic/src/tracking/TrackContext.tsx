import { createContext, useContext } from "react";

type TrackInfoType = () => Record<string, any>;

export const TrackContext = createContext<TrackInfoType | undefined>(undefined);

export const useTrackInfo = () => {
  const context = useContext(TrackContext);
  if (!context) {
    return () => ({});
  }
  return context;
};
