import Link from "next/link";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import HomeCategoryGrid from "@/components/HomeCategoryGrid";
import SearchHero from "@/components/SearchHero";
import { places } from "@/data/places";

const popularInfo = [
  {
    label: "군산사랑상품권",
    description: "사용처와 안내 정보 정리 예정",
    status: "coming-soon",
  },
  {
    label: "여객선터미널",
    description: "이용 전 확인 정보 정리 예정",
    status: "coming-soon",
  },
  {
    label: "은파호수공원",
    description: "산책과 주변 정보 정리 예정",
    status: "coming-soon",
  },
  {
    label: "군산시간여행축제",
    description: "공식 출처 기준 정리 예정",
    status: "coming-soon",
  },
  {
    label: "새만금방조제",
    description: "드라이브 정보 정리 예정",
    status: "coming-soon",
  },
  {
    label: "초원사진관",
    description: "방문 정보 정리 예정",
    status: "coming-soon",
  },
  {
    label: "주차장 정보",
    description: "주차 가능 장소 정리 예정",
    status: "coming-soon",
  },
  {
    label: "공영주차장",
    description: "공식 정보 기준 정리 예정",
    status: "coming-soon",
  },
] as const;

const todayItems = [
  {
    title: "날씨",
    summary: "준비 중",
    note: "실제 날씨 API 연결 전입니다",
  },
  {
    title: "미세먼지",
    summary: "준비 중",
    note: "실제 미세먼지 API 연결 전입니다",
  },
  {
    title: "일몰 시간",
    summary: "정리 예정",
    note: "확인된 시간 데이터가 없습니다",
  },
  {
    title: "오늘의 행사",
    summary: "공식 출처 기준 정리 예정",
    note: "행사 데이터 연결 전입니다",
  },
] as const;

const eventFestivalItems = [
  {
    title: "군산 시간여행축제",
    description: "공식 출처 기준 정리 예정",
    label: "공식 출처 기준 정리 예정",
    visual: "축제",
  },
  {
    title: "은파 공연·버스킹",
    description: "일정 정보 준비 중",
    label: "일정 정보 준비 중",
    visual: "공연",
  },
  {
    title: "가족 체험 프로그램",
    description: "아이와 함께 갈 만한 정보 예정",
    label: "가족 방문 정보 예정",
    visual: "체험",
  },
  {
    title: "전시·문화 행사",
    description: "문화 행사 정보 정리 예정",
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

const featuredPlaces = places.slice(0, 5);

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <SearchHero />

      <HomeCategoryGrid />

      <section className="px-4 pb-3 pt-2 sm:px-6 lg:px-8 lg:pb-4 lg:pt-2">
        <div className="mx-auto w-full max-w-[1440px] rounded-xl border border-slate-200 bg-white/80 p-2 shadow-sm shadow-slate-200/50">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.55fr)_minmax(0,0.8fr)]">
            <section className="rounded-lg border border-slate-200 bg-white p-3">
              <SectionHeader
                eyebrow="지금 많이 찾는 정보"
                title="자주 확인하는 군산 정보"
                description="생활 정보와 여행 전 확인할 내용을 정리하고 있습니다."
              />

              <div className="mt-2.5 grid grid-cols-2 gap-2">
                {popularInfo.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2"
                    aria-disabled="true"
                  >
                    <h3 className="truncate text-sm font-bold text-slate-900">
                      {item.label}
                    </h3>
                    <p className="mt-1 line-clamp-1 text-[11px] font-semibold leading-4 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-lg border border-slate-200 bg-white p-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeader
                eyebrow="군산 장소 둘러보기"
                title="먼저 정리된 군산 장소"
                description="기존 seed 장소를 기준으로 정보 출처와 확인 상태를 보여줍니다."
              />
              <Link
                href="/places"
                className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 sm:w-auto"
              >
                더 보기
              </Link>
            </div>

            <div className="mt-2.5 grid gap-2 sm:grid-cols-2">
              {featuredPlaces.slice(0, 4).map((place) => (
                <Link
                  key={place.id}
                  href={`/places/${place.slug}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-2 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                >
                  <div className="flex gap-3">
                    <div
                      className="grid h-10 min-w-10 place-items-center rounded-lg border border-cyan-100 bg-white text-xs font-bold text-cyan-800"
                      aria-hidden="true"
                    >
                      {place.category.slice(0, 2)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-slate-950">
                            {place.name}
                          </h3>
                          <p className="mt-0.5 text-xs font-semibold text-slate-500">
                            {place.area} · {place.category}
                          </p>
                        </div>
                        <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                          {place.statuses[0]}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-xs leading-4 text-slate-600">
                        {place.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

            <InfoPanel
              eyebrow="오늘의 군산"
              title="나가기 전 확인할 정보"
              description="날씨와 행사 정보가 들어갈 자리를 먼저 정리합니다."
            >
              <div className="mt-2.5 grid gap-2">
                {todayItems.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                        {item.summary}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-4 text-slate-500">
                      {item.note}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-2.5 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-semibold leading-4 text-slate-500">
                실제 날씨, 미세먼지, 행사 데이터는 아직 연결하지 않았습니다.
              </p>
            </InfoPanel>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
            <p className="text-sm font-bold text-slate-900">확장 정보</p>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
              준비 중 영역
            </span>
          </div>

          <div className="mt-2 grid gap-3 lg:grid-cols-3">
            <InfoPanel
              eyebrow="행사·축제"
              title="공식 출처 기준 정리 예정"
              description="군산 행사와 축제 정보를 확인할 수 있도록 준비 중입니다."
            >
              <div className="mt-2.5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {eventFestivalItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-2"
                >
                  <div className="flex gap-3">
                    <div className="grid h-10 min-w-10 place-items-center rounded-lg border border-cyan-100 bg-white text-xs font-bold text-cyan-800">
                      {item.visual}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="line-clamp-1 text-sm font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                          준비 중
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-4 text-slate-600">
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
              description="원하는 장소를 지도에서 확인할 수 있도록 준비 중입니다."
            >
              <div className="mt-2.5 rounded-lg border border-slate-200 bg-slate-50 p-2">
                <div className="relative min-h-36 overflow-hidden rounded-lg border border-cyan-100 bg-white">
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.22)_1px,transparent_1px)] bg-[size:30px_30px]" />
                  <div className="absolute -left-5 top-12 h-8 w-11/12 rotate-[-8deg] rounded-[999px] border border-cyan-200/70" />
                  <div className="absolute bottom-8 left-8 right-6 h-8 rotate-[6deg] rounded-[999px] border border-teal-200/70" />
                  <span className="absolute right-3 top-3 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
                    준비 중
                  </span>
                  <div className="absolute left-7 top-8 h-3 w-3 rounded-full border-2 border-white bg-cyan-600" />
                  <div className="absolute right-12 top-14 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
                  <div className="absolute bottom-10 left-1/3 h-3 w-3 rounded-full border-2 border-white bg-sky-500" />
                  <div className="absolute bottom-8 right-9 h-3 w-3 rounded-full border-2 border-white bg-slate-500" />
                  <div className="absolute left-4 top-14 rounded-full border border-slate-200 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    월명동
                  </div>
                  <div className="absolute bottom-4 left-5 rounded-full border border-slate-200 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    은파
                  </div>
                  <div className="absolute right-4 top-20 rounded-full border border-slate-200 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    수송동
                  </div>
                  <div className="absolute bottom-11 right-6 rounded-full border border-slate-200 bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                    근대거리
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 text-center">
                    <p className="text-[11px] font-bold text-cyan-800">
                      지도 preview
                    </p>
                    <p className="mt-0.5 text-[10px] font-semibold text-slate-500">
                      실제 위치 데이터 없음
                    </p>
                  </div>
                </div>

                <div className="mt-2 flex flex-wrap gap-1.5">
                  {mapPreviewKeywords.slice(0, 5).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-600"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <span className="inline-flex h-8 items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-500">
                    지도 보기 준비 중
                  </span>
                  <Link
                    href="/places"
                    className="inline-flex h-8 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
                  >
                    목록으로 보기
                  </Link>
                </div>
              </div>
            </InfoPanel>

            <InfoPanel
              eyebrow="동네별 보기"
              title="동네별로 보기"
              description="생활권과 여행 동선을 나눠볼 수 있도록 준비 중입니다."
            >
              <div className="mt-2.5 space-y-2">
                <div className="rounded-lg border border-slate-200 bg-slate-50 p-2.5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xs font-bold text-slate-900">행정동</h3>
                    <span className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] font-semibold text-slate-500">
                      공식 명칭 기준
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {administrativeNeighborhoods.slice(0, 5).map((item) => (
                      <span
                        key={item.name}
                        className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-xs font-semibold text-slate-600"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-2">
                  <div className="rounded-lg border border-cyan-100 bg-cyan-50 p-2.5">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-xs font-bold text-slate-900">
                        생활권/관광권역
                      </h3>
                      <span className="rounded-full bg-white px-2 py-0.5 text-[11px] font-semibold text-cyan-800">
                        행정동과 별도
                      </span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {localAreas.slice(0, 5).map((area) => (
                        <span
                          key={area.name}
                          className="rounded-full bg-white/85 px-2 py-0.5 text-xs font-semibold text-slate-700"
                        >
                          {area.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-white p-2.5">
                    <p className="text-xs font-bold text-slate-900">
                      세부 지역 정리 예정
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {detailNeighborhoods.slice(0, 7).map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-500"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs font-semibold text-slate-500">
                  실제 동네 필터 기능은 준비 중입니다.
                </p>
              </div>
            </InfoPanel>
          </div>
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
      <p className="text-xs font-semibold text-cyan-700">{eyebrow}</p>
      <h2 className="mt-1 max-w-3xl text-lg font-bold leading-tight text-slate-950 sm:text-xl">
        {title}
      </h2>
      <p className="mt-1 max-w-3xl text-sm leading-5 text-slate-600">
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
    <section className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-xs font-semibold text-cyan-700">{eyebrow}</p>
      <h2 className="mt-1 text-lg font-bold leading-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-1 text-sm leading-5 text-slate-600">{description}</p>
      {children}
    </section>
  );
}
