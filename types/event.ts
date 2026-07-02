export type EventSourceType =
  | "official-gunsan"
  | "festival-site"
  | "tour-api"
  | "standard-data"
  | "manual";

export type EventVerificationStatus = "official-source" | "needs-check";

export type EventItem = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location?: string;
  periodLabel?: string;
  description: string;
  summary?: string;
  highlights?: string[];
  image?: string;
  sourceName: string;
  sourceUrl: string;
  additionalSourceUrl?: string;
  sourceType: EventSourceType;
  verificationStatus: EventVerificationStatus;
};
