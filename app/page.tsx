import Link from "next/link";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import SearchHero from "@/components/SearchHero";
import { places } from "@/data/places";

const homeCategories = [
  {
    label: "맛집",
    description: "군산에서 밥 먹을 곳",
    visual: "food",
    status: "active",
    href: "/places",
  },
  {
    label: "카페",
    description: "쉬어갈 카페와 디저트",
    visual: "cafe",
    status: "active",
    href: "/places",
  },
  {
    label: "병원/약국",
    description: "급하게 찾는 의료 정보",
    visual: "medical",
    status: "active",
    href: "/places",
  },
  {
    label: "생활업체",
    description: "수리, 세탁, 생활 서비스",
    visual: "service",
    status: "active",
    href: "/places",
  },
  {
    label: "네일/뷰티",
    description: "네일, 미용, 관리 정보",
    visual: "beauty",
    status: "active",
    href: "/places",
  },
  {
    label: "숙박",
    description: "군산 여행 숙소 준비 중",
    visual: "stay",
    status: "coming-soon",
  },
  {
    label: "관광/여행",
    description: "명소와 여행 코스 준비 중",
    visual: "travel",
    status: "coming-soon",
  },
  {
    label: "행사·축제",
    description: "이벤트 행사 확인 준비 중",
    visual: "event",
    status: "coming-soon",
  },
] as const;

const popularInfo = [
  {
    label: "오늘 여는 병원",
    description: "급하게 병원이나 약국을 찾아야 할 때",
    group: "생활",
    status: "active",
    href: "/places",
  },
  {
    label: "주차 편한 카페",
    description: "차로 이동할 때 먼저 확인하고 싶은 정보",
    group: "생활",
    status: "active",
    href: "/places",
  },
  {
    label: "아이랑 가기 좋은 식당",
    description: "가족과 함께 가기 좋은 곳",
    group: "생활",
    status: "active",
    href: "/places",
  },
  {
    label: "혼밥 가능한 곳",
    description: "혼자 조용히 먹기 좋은 곳",
    group: "생활",
    status: "active",
    href: "/places",
  },
  {
    label: "남자 네일 가능한 곳",
    description: "처음 가기 전 확인하고 싶은 뷰티 정보",
    group: "생활",
    status: "active",
    href: "/places",
  },
  {
    label: "군산사랑상품권",
    description: "사용할 수 있는 곳 정리 예정",
    group: "생활",
    status: "coming-soon",
  },
  {
    label: "은파호수공원",
    description: "산책과 카페 정보를 함께 정리 예정",
    group: "여행",
    status: "coming-soon",
  },
  {
    label: "새만금방조제",
    description: "드라이브와 주변 정보를 정리 예정",
    group: "여행",
    status: "coming-soon",
  },
  {
    label: "근대거리 코스",
    description: "군산 여행 동선을 정리 예정",
    group: "여행",
    status: "coming-soon",
  },
  {
    label: "이번 주말 행사",
    description: "공식 출처 기준으로 정리 예정",
    group: "여행",
    status: "coming-soon",
  },
  {
    label: "군산 여행 숙소",
    description: "숙박 정보 준비 중",
    group: "여행",
    status: "coming-soon",
  },
  {
    label: "비 오는 날 갈 만한 곳",
    description: "날씨별 추천 정보 준비 중",
    group: "여행",
    status: "coming-soon",
  },
] as const;

const todayItems = [
  {
    title: "오늘 날씨",
    summary: "군산 날씨 정보 준비 중",
    note: "실제 날씨 연결 전입니다",
  },
  {
    title: "오늘의 행사",
    summary: "공식 출처 기준으로 정리 예정",
    note: "행사 데이터 준비 중",
  },
  {
    title: "산책하기 좋은 곳",
    summary: "은파, 금강, 월명공원 주변 정보 준비 중",
    note: "방문 정보 정리 예정",
  },
  {
    title: "여행 전 확인",
    summary: "주차, 숙박, 행사 정보를 함께 정리 예정",
    note: "여행 정보 준비 중",
  },
] as const;

const eventFestivalItems = [
  {
    title: "군산 시간여행축제",
    description: "군산 대표 축제 정보 정리 예정",
    label: "공식 출처 기준 정리 예정",
    visual: "축제",
  },
  {
    title: "공연·버스킹",
    description: "은파, 근대거리 주변 공연 정보 정리 예정",
    label: "준비 중",
    visual: "공연",
  },
  {
    title: "가족 체험",
    description: "아이와 함께 갈 만한 체험 정보 정리 예정",
    label: "가족 방문 정보 예정",
    visual: "체험",
  },
  {
    title: "전시·문화 행사",
    description: "군산에서 열리는 전시와 문화 행사 정리 예정",
    label: "문화 정보 예정",
    visual: "전시",
  },
] as const;

const mapPreviewKeywords = [
  "월명동",
  "수송동",
  "나운동",
  "은파",
  "새만금",
  "근대거리",
  "금강",
  "주차장",
  "병원/약국",
  "카페",
] as const;

const administrativeNeighborhoods = [
  {
    name: "월명동",
    description: "근대거리와 오래된 군산의 분위기",
  },
  {
    name: "조촌동",
    description: "시청 주변 생활 정보 정리 예정",
  },
  {
    name: "구암동",
    description: "구암동·내흥동 주변 정보 정리 예정",
  },
  {
    name: "경암동",
    description: "경암동 생활 정보 정리 예정",
  },
  {
    name: "수송동",
    description: "식당, 카페, 생활 정보가 모이는 곳",
  },
  {
    name: "나운1동",
    description: "나운1동 생활 정보 정리 예정",
  },
  {
    name: "나운2동",
    description: "나운2동 생활 정보 정리 예정",
  },
  {
    name: "나운3동",
    description: "나운3동 생활 정보 정리 예정",
  },
  {
    name: "소룡동",
    description: "생활업체와 산업단지 주변 정보 정리 예정",
  },
  {
    name: "미성동",
    description: "산북동, 내초동 주변 생활 정보 정리 예정",
  },
  {
    name: "해신동",
    description: "항만과 원도심 주변 정보 정리 예정",
  },
  {
    name: "신풍동",
    description: "신풍동 생활 정보 정리 예정",
  },
  {
    name: "삼학동",
    description: "삼학동 생활 정보 정리 예정",
  },
  {
    name: "중앙동",
    description: "중앙동 생활 정보 정리 예정",
  },
  {
    name: "흥남동",
    description: "흥남동 생활 정보 정리 예정",
  },
  {
    name: "개정동",
    description: "개정동 생활 정보 정리 예정",
  },
] as const;

const detailNeighborhoods = [
  "내흥동",
  "경장동",
  "미장동",
  "지곡동",
  "산북동",
  "오식도동",
  "비응도동",
] as const;

const localAreas = [
  {
    name: "은파 주변",
    description: "산책, 카페, 주차 정보 정리 예정",
    label: "생활권",
  },
  {
    name: "근대거리 주변",
    description: "여행 동선과 맛집 정보 정리 예정",
    label: "관광권역",
  },
  {
    name: "금강 주변",
    description: "산책과 드라이브 정보 정리 예정",
    label: "생활권",
  },
  {
    name: "새만금 주변",
    description: "드라이브와 여행 정보 정리 예정",
    label: "관광권역",
  },
  {
    name: "고군산군도 방향",
    description: "섬 여행 동선 정보 정리 예정",
    label: "관광권역",
  },
] as const;

const featuredPlaces = places.slice(0, 3);

function CategoryVisual({
  kind,
  active,
}: {
  kind: (typeof homeCategories)[number]["visual"];
  active: boolean;
}) {
  const baseColor = active ? "bg-cyan-600" : "bg-slate-300";
  const softColor = active ? "bg-cyan-100" : "bg-slate-100";
  const lineColor = active ? "bg-teal-300" : "bg-slate-200";

  if (kind === "food") {
    return (
      <div className="relative h-12 w-16">
        <div className={`absolute bottom-1 left-2 h-8 w-10 rounded-full ${softColor}`} />
        <div className={`absolute bottom-3 left-4 h-4 w-6 rounded-full ${baseColor}`} />
        <div className={`absolute right-2 top-2 h-8 w-1.5 rounded-full ${lineColor}`} />
      </div>
    );
  }

  if (kind === "cafe") {
    return (
      <div className="relative h-12 w-16">
        <div className={`absolute bottom-2 left-3 h-7 w-8 rounded-b-lg rounded-t-sm ${baseColor}`} />
        <div className={`absolute bottom-4 right-3 h-4 w-4 rounded-full border-2 ${active ? "border-cyan-600" : "border-slate-300"}`} />
        <div className={`absolute left-3 top-1 h-1 w-8 rounded-full ${lineColor}`} />
      </div>
    );
  }

  if (kind === "medical") {
    return (
      <div className="relative grid h-12 w-16 place-items-center">
        <div className={`h-10 w-10 rounded-full ${softColor}`} />
        <div className={`absolute h-6 w-2 rounded-full ${baseColor}`} />
        <div className={`absolute h-2 w-6 rounded-full ${baseColor}`} />
      </div>
    );
  }

  if (kind === "service") {
    return (
      <div className="relative h-12 w-16">
        <div className={`absolute bottom-2 left-2 h-8 w-11 rounded-lg ${softColor}`} />
        <div className={`absolute bottom-6 left-6 h-2 w-5 rounded-full ${baseColor}`} />
        <div className={`absolute bottom-3 right-3 h-6 w-2 rotate-45 rounded-full ${lineColor}`} />
      </div>
    );
  }

  if (kind === "beauty") {
    return (
      <div className="relative h-12 w-16">
        <div className={`absolute bottom-2 left-2 h-7 w-5 rounded-full ${softColor}`} />
        <div className={`absolute bottom-3 left-8 h-8 w-2 rotate-45 rounded-full ${baseColor}`} />
        <div className={`absolute bottom-2 right-4 h-3 w-3 rounded-full ${lineColor}`} />
      </div>
    );
  }

  if (kind === "stay") {
    return (
      <div className="relative h-12 w-16">
        <div className={`absolute bottom-2 left-2 h-7 w-12 rounded-lg ${softColor}`} />
        <div className={`absolute bottom-3 left-4 h-3 w-4 rounded ${baseColor}`} />
        <div className={`absolute bottom-3 right-3 h-3 w-4 rounded ${lineColor}`} />
      </div>
    );
  }

  if (kind === "travel") {
    return (
      <div className="relative h-12 w-16">
        <div className={`absolute bottom-2 left-2 h-7 w-12 rounded-lg ${softColor}`} />
        <div className={`absolute bottom-4 left-4 h-4 w-6 rounded-t-full ${baseColor}`} />
        <div className={`absolute bottom-3 right-3 h-2 w-2 rounded-full ${lineColor}`} />
        <div className={`absolute left-3 top-2 h-1 w-10 rounded-full ${lineColor}`} />
      </div>
    );
  }

  return (
    <div className="relative h-12 w-16">
      <div className={`absolute left-3 top-2 h-3 w-3 rounded-full ${baseColor}`} />
      <div className={`absolute right-4 top-4 h-2.5 w-2.5 rounded-full ${lineColor}`} />
      <div className={`absolute bottom-2 left-5 h-4 w-4 rounded-full ${softColor}`} />
      <div className={`absolute bottom-3 right-2 h-3 w-3 rounded-full ${baseColor}`} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <SearchHero />

      <section className="border-b border-slate-100 bg-white px-4 py-3 sm:px-6 lg:py-3">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="주요 카테고리"
              title="군산에서 무엇을 찾고 있나요?"
              description="생활 정보와 여행 정보를 빠르게 들어갈 수 있게 정리하고 있습니다."
            />
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-500">
              준비 중 항목은 실제 기능 연결 전입니다
            </span>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-8">
            {homeCategories.map((category) => {
              const isActive = category.status === "active";
              const content = (
                <>
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={[
                        "rounded-full border px-2 py-0.5 text-[11px] font-semibold",
                        isActive
                          ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-white text-slate-500",
                      ].join(" ")}
                    >
                      {isActive ? "바로 보기" : "준비 중"}
                    </span>
                    <div aria-hidden="true" className="-mr-2 -mt-2">
                      <CategoryVisual
                        kind={category.visual}
                        active={isActive}
                      />
                    </div>
                  </div>
                  <div className="mt-1.5">
                    <h3
                      className={[
                        "text-sm font-bold leading-5",
                        isActive ? "text-slate-950" : "text-slate-500",
                      ].join(" ")}
                    >
                      {category.label}
                    </h3>
                    <p
                      className={[
                        "mt-1 text-xs leading-4",
                        isActive ? "text-slate-600" : "text-slate-500",
                      ].join(" ")}
                    >
                      {category.description}
                    </p>
                  </div>
                </>
              );

              if (isActive) {
                return (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="min-h-[6.2rem] rounded-lg border border-slate-200 bg-white p-2.5 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={category.label}
                  className="min-h-[6.2rem] rounded-lg border border-slate-200 bg-slate-50 p-2.5 opacity-85"
                  aria-disabled="true"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-4 sm:px-6 lg:py-5">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
            <section className="rounded-lg border border-slate-200 bg-white p-4">
              <SectionHeader
                eyebrow="지금 많이 찾는 정보"
                title="지금 많이 찾는 군산 정보"
                description="생활 정보와 여행 전 확인할 정보를 빠르게 훑어볼 수 있게 모으고 있습니다."
              />

              <div className="mt-3 grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                {popularInfo.slice(0, 9).map((item) => {
                  const isActive = item.status === "active";
                  const content = (
                    <>
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={[
                            "rounded-full border px-2.5 py-1 text-xs font-semibold",
                            isActive
                              ? "border-cyan-100 bg-cyan-50 text-cyan-800"
                              : "border-slate-200 bg-slate-50 text-slate-500",
                          ].join(" ")}
                        >
                          {item.group}
                        </span>
                        <span
                          className={[
                            "shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold",
                            isActive
                              ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                              : "border-slate-200 bg-white text-slate-500",
                          ].join(" ")}
                        >
                          {isActive ? "장소 보기" : "정리 예정"}
                        </span>
                      </div>
                      <h3
                        className={[
                          "mt-2 text-sm font-bold",
                          isActive ? "text-slate-950" : "text-slate-500",
                        ].join(" ")}
                      >
                        {item.label}
                      </h3>
                      <p
                        className={[
                          "mt-1 text-xs leading-5",
                          isActive ? "text-slate-600" : "text-slate-500",
                        ].join(" ")}
                      >
                        {item.description}
                      </p>
                    </>
                  );

                  if (isActive) {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="rounded-lg border border-slate-200 bg-slate-50 p-2.5 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                      >
                        {content}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-200 bg-white p-2.5"
                      aria-disabled="true"
                    >
                      {content}
                    </div>
                  );
                })}
              </div>
            </section>

            <InfoPanel
              eyebrow="오늘의 군산"
              title="나가기 전 확인할 정보"
              description="날씨, 행사, 산책하기 좋은 곳처럼 오늘 확인하면 좋은 정보를 모으고 있습니다."
            >
              <div className="mt-3 grid gap-2.5">
                {todayItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-2.5"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
                        준비 중
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-5 text-slate-600">
                      {item.summary}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
            </InfoPanel>
          </div>

          <section className="mt-4 rounded-lg border border-slate-200 bg-white p-3.5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow="군산 장소 둘러보기"
                title="업체 제공 정보와 방문자 확인 정보를 나눠서 봅니다"
                description="더미 데이터 기반으로 정보 출처와 확인 상태가 보이도록 정리했습니다."
              />
              <Link
                href="/places"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 sm:w-auto"
              >
                장소 목록 보기
              </Link>
            </div>

            <div className="mt-3 grid gap-3 lg:grid-cols-3">
              {featuredPlaces.map((place) => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white px-4 py-6 sm:px-6 lg:py-7">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="확장 정보"
            title="행사, 지도, 동네 정보도 한곳에서"
            description="아직 실제 기능은 준비 중이지만, 군산 생활과 여행에 필요한 정보를 이어서 정리할 예정입니다."
          />
        </div>
        <div className="mx-auto mt-4 grid w-full max-w-6xl gap-4 lg:grid-cols-3">
          <InfoPanel
            eyebrow="행사·축제"
            title="군산에 오기 전 확인할 정보"
            description="축제, 공연, 전시, 체험 정보를 공식 출처 기준으로 정리할 예정입니다."
          >
            <div className="mt-4 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {eventFestivalItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="flex gap-3">
                    <div className="grid h-12 min-w-12 place-items-center rounded-xl border border-cyan-100 bg-white text-xs font-bold text-cyan-800">
                      {item.visual}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                          준비 중
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {item.description}
                      </p>
                      <p className="mt-1 text-[11px] font-semibold text-slate-500">
                        {item.label}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </InfoPanel>

          <InfoPanel
            eyebrow="지도에서 보기"
            title="지도에서 한눈에 보기"
            description="월명동, 수송동, 은파, 근대거리, 새만금 주변 정보를 지도에서 볼 수 있도록 준비하고 있습니다."
          >
            <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3">
              <div className="relative min-h-52 overflow-hidden rounded-xl border border-cyan-100 bg-white">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:34px_34px]" />
                <div className="absolute inset-x-6 top-20 h-10 rounded-[999px] border border-cyan-200/70" />
                <div className="absolute bottom-10 left-8 right-8 h-10 rounded-[999px] border border-teal-200/70" />
                <span className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
                  준비 중
                </span>
                <div className="absolute left-7 top-8 h-3 w-3 rounded-full border-2 border-white bg-cyan-600" />
                <div className="absolute right-12 top-14 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                <div className="absolute bottom-12 left-1/3 h-3 w-3 rounded-full border-2 border-white bg-sky-500" />
                <div className="absolute bottom-8 right-9 h-3 w-3 rounded-full border-2 border-white bg-slate-500" />
                <div className="absolute left-4 top-16 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  월명동
                </div>
                <div className="absolute bottom-5 left-5 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  은파
                </div>
                <div className="absolute right-4 top-24 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  수송동
                </div>
                <div className="absolute bottom-16 right-6 rounded-full border border-slate-200 bg-white/95 px-2.5 py-1 text-xs font-semibold text-slate-600">
                  근대거리
                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl border border-cyan-200 bg-cyan-50 px-3 py-2 text-center">
                  <p className="text-xs font-bold text-cyan-800">
                    지도 preview
                  </p>
                  <p className="mt-0.5 text-[11px] font-semibold text-slate-500">
                    실제 위치 데이터 없음
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {mapPreviewKeywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <span className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-500">
                  지도 보기 준비 중
                </span>
                <Link
                  href="/places"
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
                >
                  목록으로 먼저 둘러보기
                </Link>
              </div>
            </div>
          </InfoPanel>

          <InfoPanel
            eyebrow="동네별 보기"
            title="군산을 동네별로 둘러보기"
            description="사는 곳 근처 정보부터 여행 동선 주변 정보까지 공식 명칭 기준으로 나눠볼 수 있도록 준비하고 있습니다."
          >
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xs font-bold text-slate-900">행정동</h3>
                  <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                    공식 명칭 기준
                  </span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {administrativeNeighborhoods.slice(0, 10).map((item) => (
                    <span
                      key={item.name}
                      className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-600"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2">
                <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xs font-bold text-slate-900">
                      생활권/관광권역
                    </h3>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-cyan-800">
                      행정동과 별도
                    </span>
                  </div>
                  <div className="mt-2 grid gap-2">
                    {localAreas.slice(0, 5).map((area) => (
                      <div
                        key={area.name}
                        className="flex items-center justify-between gap-3 rounded-lg bg-white/80 px-2.5 py-2"
                      >
                        <span className="text-xs font-bold text-slate-700">
                          {area.name}
                        </span>
                        <span className="rounded-full border border-cyan-100 bg-cyan-50 px-2 py-0.5 text-[11px] font-semibold text-cyan-800">
                          {area.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-3">
                  <p className="text-xs font-bold text-slate-900">
                    세부 지역 정리 예정
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {detailNeighborhoods.slice(0, 7).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-3 text-xs font-semibold text-slate-500">
                실제 동네 필터 기능은 준비 중입니다.
              </p>
            </div>
          </InfoPanel>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white px-4 py-6 sm:px-6 lg:py-7">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeader
              eyebrow="동네별 보기"
              title="군산을 동네별로 둘러보기"
              description="군산의 공식 행정동과 주요 생활권을 기준으로 정보를 정리할 예정입니다. 사는 곳 근처 정보부터 여행 동선 주변 정보까지, 군산을 더 정확하게 나눠볼 수 있도록 준비하고 있습니다."
            />

            <div className="mt-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-slate-900">행정동</h3>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                  공식 명칭 기준
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {administrativeNeighborhoods.map((neighborhood) => (
                  <article
                    key={neighborhood.name}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-slate-900">
                        {neighborhood.name}
                      </h4>
                      <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
                        행정동
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-5 text-slate-600">
                      {neighborhood.description}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      준비 중
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-slate-900">
                  세부 지역
                </h3>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                  세부 지역 정리 예정
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {detailNeighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-semibold text-slate-600"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-sm font-bold text-slate-900">
                  생활권/관광권역
                </h3>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                  행정동과 별도 구분
                </span>
              </div>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {localAreas.map((area) => (
                  <article
                    key={area.name}
                    className="rounded-lg border border-slate-200 bg-white p-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h4 className="text-sm font-bold text-slate-900">
                        {area.name}
                      </h4>
                      <span className="shrink-0 rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">
                        {area.label}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-5 text-slate-600">
                      {area.description}
                    </p>
                    <p className="mt-2 text-xs font-medium text-slate-500">
                      준비 중
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <aside className="rounded-lg border border-cyan-200 bg-cyan-50 p-4 lg:p-5">
            <p className="text-sm font-semibold text-cyan-800">
              정보가 달라졌나요?
            </p>
            <h2 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
              군산 정보는 제보로 더 정확해집니다
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              영업시간, 휴무일, 주차, 아이 동반, 남자 이용 가능 여부처럼 직접
              확인한 정보가 있다면 알려주세요.
            </p>
            <Link
              href="/submit"
              className="mt-5 inline-flex h-11 w-full items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800 sm:w-auto"
            >
              정보 제보하기
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold text-cyan-700">{eyebrow}</p>
      <h2 className="mt-2 max-w-3xl text-xl font-bold leading-tight text-slate-950 sm:text-2xl">
        {title}
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function InfoPanel({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-cyan-700">{eyebrow}</p>
      <h2 className="mt-2 text-xl font-bold leading-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      {children}
    </section>
  );
}
