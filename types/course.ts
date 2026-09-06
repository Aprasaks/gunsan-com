export type CourseTheme =
  | "first-visit"
  | "half-day"
  | "one-night-two-days"
  | "two-nights-three-days"
  | "family"
  | "rainy-day"
  | "seonyudo";

export type CourseStop = {
  id: string;
  order: number;
  title: string;
  placeSlug?: string;
  stopType: "place" | "food" | "cafe" | "rest" | "move" | "event";
  reason: string;
  note?: string;
  stayDuration?: string;
  nextMove?: string;
};

export type Course = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  theme: CourseTheme;
  durationLabel: string;
  estimatedTime: string;
  transportLabel: string;
  recommendedFor: string[];
  notRecommendedFor: string[];
  summary: string;
  stops: CourseStop[];
  routeNote: string;
  alternativeStops: string[];
  sourceNote: string;
};
