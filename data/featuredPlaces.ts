export type FeaturedPlace = {
  slug: string;
  name: string;
  badge: string;
  meta: string;
  description: string;
  image?: string;
  imageAlt: string;
};

export const featuredPlaces: FeaturedPlace[] = [
  {
    slug: "eunpa-lake-park",
    name: "은파호수공원",
    badge: "인기",
    meta: "공원 · 호수",
    description: "산책과 휴식이 좋은 군산 대표 공원",
    image: "/images/places/eunpa-lake-park.webp",
    imageAlt: "은파호수공원 산책로와 호수 풍경",
  },
  {
    slug: "wolmyeong-park",
    name: "월명공원",
    badge: "자연",
    meta: "공원 · 전망",
    description: "군산 시내와 바다를 함께 느낄 수 있는 도심 공원",
    image: "/images/places/wolmyeong-park.webp",
    imageAlt: "월명공원 대표 이미지",
  },
  {
    slug: "gunsan-modern-history-museum",
    name: "군산근대역사박물관",
    badge: "역사",
    meta: "근대문화 · 역사",
    description: "군산의 근대문화와 항구 역사를 살펴볼 수 있는 공간",
    image: "/images/places/gunsan-modern-history-museum.webp",
    imageAlt: "군산근대역사박물관 대표 이미지",
  },
  {
    slug: "gyeongam-dong-railroad-village",
    name: "경암동 철길마을",
    badge: "사진",
    meta: "산책 · 사진",
    description: "오래된 철길 풍경을 따라 걷는 군산의 사진 명소",
    image: "/images/places/gyeongam-dong-railroad-village.webp",
    imageAlt: "경암동 철길마을 대표 이미지",
  },
  {
    slug: "saemangeum-seawall",
    name: "새만금방조제",
    badge: "드라이브",
    meta: "바다 · 드라이브",
    description: "서해의 바다 풍경을 따라 이어지는 대표 코스",
    image: "/images/places/saemangeum-seawall.webp",
    imageAlt: "새만금방조제 대표 이미지",
  },
];
