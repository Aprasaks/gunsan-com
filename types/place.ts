export type PlaceCategory =
  | "맛집"
  | "카페"
  | "네일/뷰티"
  | "병원/약국"
  | "생활업체";

export type VerificationStatus =
  | "정보 수집됨"
  | "업체 제공"
  | "방문자 후기"
  | "방문자 사진"
  | "최근 확인됨"
  | "확인 필요"
  | "현장 차이 제보 있음"
  | "폐업/이전 확인 필요";

export type PlaceOwnerInfo = {
  openingHours?: string;
  closedDays?: string;
  parking?: string;
  reservation?: string;
  priceNote?: string;
  contactNote?: string;
};

export type PlaceVisitorInfo = {
  parkingNote?: string;
  visitNote?: string;
  maleFriendlyNote?: string;
  kidFriendlyNote?: string;
  photoNote?: string;
};

export type PlaceTravelGuide = {
  recommendedFor?: string[];
  stayDuration?: string;
  nearbyPlaces?: string[];
  rainyDaySuitability?: string;
  officialUrl?: string;
};

export type Place = {
  id: string;
  slug: string;
  name: string;
  category: PlaceCategory;
  area: string;
  description: string;
  tags: string[];
  statuses: VerificationStatus[];
  reviewCount: number;
  lastVerifiedAt: string;
  ownerInfo: PlaceOwnerInfo;
  visitorInfo: PlaceVisitorInfo;
  travelGuide?: PlaceTravelGuide;
  address?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
};
