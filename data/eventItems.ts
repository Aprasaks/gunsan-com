import type { EventItem } from "@/types/event";

export const officialEventListUrl = "https://www.gunsan.go.kr/tour/m2101";

export const eventItems: EventItem[] = [
  {
    id: "gunsan-time-travel-festival",
    title: "군산시간여행축제",
    category: "축제",
    location: "시간여행마을 일원",
    periodLabel: "2026.10.02~10.05",
    description: "근대 군산을 주제로 한 군산 대표 축제",
    sourceName: "군산시간여행축제 공식 사이트",
    sourceUrl: "https://festival.gunsan.go.kr/",
    additionalSourceUrl: "https://festival.gunsan.go.kr/contents.htm?code=3_1_1",
    sourceType: "festival-site",
    verificationStatus: "official-source",
  },
  {
    id: "gunsan-jjamppong-festival",
    title: "군산짬뽕페스티벌",
    category: "축제",
    location: "백년광장 일원",
    description: "군산 짬뽕 문화를 다루는 지역 축제",
    sourceName: "군산문화관광",
    sourceUrl: "https://www.gunsan.go.kr/tour/m2101/view/5235377",
    sourceType: "official-gunsan",
    verificationStatus: "official-source",
  },
];
