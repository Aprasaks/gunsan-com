export type EventSourceType =
  | "official-gunsan"
  | "festival-site"
  | "tour-api"
  | "standard-data"
  | "manual";

export type EventVerificationStatus = "official-source" | "needs-check";

export type EventItem = {
  id: string;
  title: string;
  category: string;
  location?: string;
  periodLabel?: string;
  description: string;
  image?: string;
  sourceName: string;
  sourceUrl: string;
  sourceType: EventSourceType;
  verificationStatus: EventVerificationStatus;
};
