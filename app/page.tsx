import Link from "next/link";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import SearchHero from "@/components/SearchHero";
import { places } from "@/data/places";

const homeCategories = [
  {
    label: "맛집",
    description: "밥 먹을 곳을 찾을 때",
    status: "active",
    href: "/places",
  },
  {
    label: "카페",
    description: "쉬어갈 카페를 찾을 때",
    status: "active",
    href: "/places",
  },
  {
    label: "병원/약국",
    description: "급하게 문 연 곳이 필요할 때",
    status: "active",
    href: "/places",
  },
  {
    label: "생활업체",
    description: "생활에 필요한 업체를 찾을 때",
    status: "active",
    href: "/places",
  },
  {
    label: "네일/뷰티",
    description: "방문 전 확인할 정보가 필요할 때",
    status: "active",
    href: "/places",
  },
  {
    label: "숙박",
    description: "군산에서 머물 곳",
    status: "coming-soon",
  },
  {
    label: "관광/여행",
    description: "군산 여행 코스와 명소",
    status: "coming-soon",
  },
  {
    label: "행사/축제",
    description: "이번 주 군산에서 열리는 일",
    status: "coming-soon",
  },
  {
    label: "주차",
    description: "차를 두기 편한 곳",
    status: "coming-soon",
  },
  {
    label: "문화/여가",
    description: "공연, 전시, 산책 정보",
    status: "coming-soon",
  },
] as const;

const popularInfo = [
  "오늘 여는 병원",
  "주차 편한 카페",
  "아이랑 가기 좋은 식당",
  "군산사랑상품권",
  "은파호수공원",
  "새만금방조제",
  "이번 주말 행사",
] as const;

const todayItems = [
  "날씨 정보 준비 중",
  "오늘의 행사 준비 중",
  "산책하기 좋은 곳 준비 중",
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
            title="군산에서 필요한 곳으로 바로 들어가세요"
            description="지금은 장소 정보부터 작게 시작하고, 숙박과 여행, 행사 정보는 준비 중으로 표시합니다."
          />

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {homeCategories.map((category) => {
              const isActive = category.status === "active";
              const content = (
                <>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-bold text-slate-950">
                      {category.label}
                    </h3>
                    {!isActive ? (
                      <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                        준비 중
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>
                </>
              );

              if (isActive) {
                return (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="min-h-32 rounded-lg border border-slate-200 bg-white p-4 transition hover:border-cyan-300 hover:bg-cyan-50"
                  >
                    {content}
                  </Link>
                );
              }

              return (
                <div
                  key={category.label}
                  className="min-h-32 rounded-lg border border-slate-200 bg-slate-50 p-4"
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
            title="사는 사람도, 오는 사람도 자주 찾는 정보"
            description="군산에서 자주 확인하게 되는 주제를 먼저 모아둡니다."
          />

          <div className="mt-5 flex flex-wrap gap-2">
            {popularInfo.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                {item}
              </span>
            ))}
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
            title="오늘 필요한 정보는 준비 중입니다"
            description="날씨, 오늘의 행사, 산책하기 좋은 곳처럼 하루 단위로 확인할 정보를 담을 예정입니다."
          >
            <ul className="mt-4 space-y-2">
              {todayItems.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600"
                >
                  {item}
                </li>
              ))}
            </ul>
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
