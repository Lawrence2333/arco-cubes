export interface TrackingInterface {
  trackEvent: (event: string, data: Record<string, any>) => void;
}

// 默认的空实现
const defaultTracker: TrackingInterface = {
  trackEvent: () => {},
};

let currentTracker: TrackingInterface = defaultTracker;

export const setTracker = (tracker: TrackingInterface) => {
  currentTracker = tracker;
};

export const trackEvent = (event: string, data: Record<string, any>) => {
  currentTracker.trackEvent(event, data);
};
