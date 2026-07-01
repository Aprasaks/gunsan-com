export type FeaturedPlace = {
  slug: string;
  name: string;
  badge: string;
  description: string;
  image?: string;
  imageAlt: string;
};

export const featuredPlaces: FeaturedPlace[] = [
  {
    slug: "eunpa-lake-park",
    name: "은파호수공원",
    badge: "산책",
    description: "호수 산책과 야경을 함께 볼 수 있는 군산 대표 공원",
    image: "/images/places/eunpa-lake-park.webp",
    imageAlt: "은파호수공원 산책로와 호수 풍경",
  },
  {
    slug: "wolmyeong-park",
    name: "월명공원",
    badge: "자연",
    description: "군산 시내와 바다를 함께 느낄 수 있는 도심 공원",
    imageAlt: "월명공원 대표 이미지",
  },
  {
    slug: "gunsan-modern-history-museum",
    name: "군산근대역사박물관",
    badge: "역사",
    description: "군산의 근대문화와 항구 역사를 살펴볼 수 있는 공간",
    imageAlt: "군산근대역사박물관 대표 이미지",
  },
  {
    slug: "gyeongam-dong-railroad-village",
    name: "경암동 철길마을",
    badge: "사진",
    description: "오래된 철길 풍경을 따라 걷는 군산의 사진 명소",
    imageAlt: "경암동 철길마을 대표 이미지",
  },
  {
    slug: "saemangeum-seawall",
    name: "새만금방조제",
    badge: "바다",
    description: "바다와 방조제를 따라 이어지는 군산 대표 드라이브 코스",
    imageAlt: "새만금방조제 대표 이미지",
  },
];
