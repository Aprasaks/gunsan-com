import Link from "next/link";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import SearchHero from "@/components/SearchHero";
import { places } from "@/data/places";

const homeCategories = [
  {
    label: "맛집",
    description: "군산에서 밥 먹을 곳 찾기",
    icon: "밥",
    status: "active",
    href: "/places",
  },
  {
    label: "카페",
    description: "쉬어갈 카페와 디저트",
    icon: "차",
    status: "active",
    href: "/places",
  },
  {
    label: "병원/약국",
    description: "급하게 찾는 병원과 약국",
    icon: "의료",
    status: "active",
    href: "/places",
  },
  {
    label: "생활업체",
    description: "수리, 세탁, 생활 서비스",
    icon: "생활",
    status: "active",
    href: "/places",
  },
  {
    label: "네일/뷰티",
    description: "네일, 미용, 관리 정보",
    icon: "뷰티",
    status: "active",
    href: "/places",
  },
  {
    label: "숙박",
    description: "군산 여행 숙소 준비 중",
    icon: "숙박",
    status: "coming-soon",
  },
  {
    label: "관광/여행",
    description: "군산 여행 코스 준비 중",
    icon: "여행",
    status: "coming-soon",
  },
  {
    label: "행사/축제",
    description: "군산 행사와 축제 준비 중",
    icon: "행사",
    status: "coming-soon",
  },
  {
    label: "주차",
    description: "주차 정보 준비 중",
    icon: "주차",
    status: "coming-soon",
  },
  {
    label: "문화/여가",
    description: "전시, 공연, 체험 준비 중",
    icon: "문화",
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

const neighborhoods = [
  "월명동",
  "수송동",
  "나운동",
  "미장동",
  "소룡동",
  "은파 주변",
  "근대거리 주변",
] as const;

const featuredPlaces = places.slice(0, 3);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <SearchHero />

      <section className="border-b border-slate-100 bg-white px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="주요 카테고리"
            title="군산에서 무엇을 찾고 있나요?"
            description="사는 사람에게 필요한 생활 정보부터, 군산에 오는 사람이 찾는 여행 정보까지 하나씩 모으고 있습니다."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {homeCategories.map((category) => {
              const isActive = category.status === "active";
              const content = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={[
                        "inline-flex h-9 min-w-9 items-center justify-center rounded-lg border px-2 text-xs font-bold",
                        isActive
                          ? "border-cyan-100 bg-cyan-50 text-cyan-800"
                          : "border-slate-200 bg-white text-slate-500",
                      ].join(" ")}
                    >
                      {category.icon}
                    </span>
                    <span
                      className={[
                        "shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold",
                        isActive
                          ? "border-emerald-100 bg-emerald-50 text-emerald-700"
                          : "border-slate-200 bg-slate-50 text-slate-500",
                      ].join(" ")}
                    >
                      {isActive ? "장소 보기" : "준비 중"}
                    </span>
                  </div>
                  <h3
                    className={[
                      "mt-4 text-base font-bold",
                      isActive ? "text-slate-950" : "text-slate-500",
                    ].join(" ")}
                  >
                    {category.label}
                  </h3>
                  <p
                    className={[
                      "mt-2 text-sm leading-6",
                      isActive ? "text-slate-600" : "text-slate-500",
                    ].join(" ")}
                  >
                    {category.description}
                  </p>
                </>
              );

              if (isActive) {
                return (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="min-h-36 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={category.label}
                  className="min-h-36 rounded-lg border border-slate-200 bg-slate-50 p-4"
                  aria-disabled="true"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            eyebrow="지금 많이 찾는 정보"
            title="지금 많이 찾는 군산 정보"
            description="급하게 필요한 생활 정보부터, 군산에 오기 전에 확인하고 싶은 여행 정보까지 모으고 있습니다."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {popularInfo.map((item) => {
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
                      {isActive ? "장소 보기" : "곧 정리 예정"}
                    </span>
                  </div>
                  <h3
                    className={[
                      "mt-3 text-base font-bold",
                      isActive ? "text-slate-950" : "text-slate-500",
                    ].join(" ")}
                  >
                    {item.label}
                  </h3>
                  <p
                    className={[
                      "mt-2 text-sm leading-6",
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
                    className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-200 bg-white/70 p-4"
                  aria-disabled="true"
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeader
              eyebrow="군산 장소 둘러보기"
              title="업체 제공 정보와 방문자 확인 정보를 나눠서 봅니다"
              description="아직은 더미 데이터 기반이지만, 정보의 출처와 확인 상태를 분명히 보여주는 구조로 만듭니다."
            />
            <Link
              href="/places"
              className="inline-flex h-11 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
            >
              장소 목록 보기
            </Link>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {featuredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-3">
          <InfoPanel
            eyebrow="오늘의 군산"
            title="군산에 나가기 전 확인할 정보"
            description="날씨, 행사, 산책하기 좋은 곳처럼 오늘 확인하면 좋은 정보를 모으고 있습니다."
          >
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {todayItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">
                      준비 중
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.summary}
                  </p>
                  <p className="mt-2 text-xs font-medium text-slate-500">
                    {item.note}
                  </p>
                </article>
              ))}
            </div>
          </InfoPanel>

          <InfoPanel
            eyebrow="행사/축제"
            title="공식 출처 기준으로 정리할 예정입니다"
            description="군산 행사와 축제 정보를 공식 출처 기준으로 확인해 정리하는 영역입니다. 지금은 준비 중 안내만 표시합니다."
          />

          <InfoPanel
            eyebrow="지도에서 보기"
            title="군산 장소 지도 보기는 준비 중입니다"
            description="군산 장소를 지도에서 볼 수 있도록 준비하고 있습니다. 지금은 지도 연결 없이 준비 중 상태만 보여줍니다."
          />
        </div>
      </section>

      <section className="bg-white px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div>
            <SectionHeader
              eyebrow="동네별 보기"
              title="군산을 동네와 권역으로 나눠 볼 수 있게 준비합니다"
              description="지금은 동네 이름만 먼저 보여주고, 실제 동네별 탐색은 나중에 다룹니다."
            />
            <div className="mt-5 flex flex-wrap gap-2">
              {neighborhoods.map((neighborhood) => (
                <span
                  key={neighborhood}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-lg border border-cyan-200 bg-cyan-50 p-5">
            <p className="text-sm font-semibold text-cyan-800">
              정보가 달라졌나요?
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              군산 정보는 제보로 더 정확해집니다
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              영업시간, 휴무일, 주차, 아이 동반, 남자 이용 가능 여부처럼 직접
              확인한 정보가 있다면 알려주세요.
            </p>
            <Link
              href="/submit"
              className="mt-5 inline-flex h-11 items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
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
      <h2 className="mt-2 max-w-3xl text-2xl font-bold leading-tight text-slate-950 sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
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
    <section className="rounded-lg border border-slate-200 bg-white p-5">
      <p className="text-sm font-semibold text-cyan-700">{eyebrow}</p>
      <h2 className="mt-2 text-xl font-bold leading-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
      {children}
    </section>
  );
}
