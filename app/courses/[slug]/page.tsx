import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import { homeCourses } from "@/data/courses";
import { places } from "@/data/places";
import type { CourseStop } from "@/types/course";

type CourseDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const placeSlugs = new Set(places.map((place) => place.slug));

export function generateStaticParams() {
  return homeCourses.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = homeCourses.find((item) => item.slug === slug);

  if (!course) {
    return {};
  }

  return {
    title: `${course.title} | 군산.com`,
    description: course.summary,
  };
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = homeCourses.find((item) => item.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-slate-950">
      <Header />

      <section className="bg-[#123f67] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-[1180px]">
          <Link href="/#courses" className="inline-flex text-sm font-black text-cyan-100 transition hover:text-white">
            ← 코스 다시 고르기
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/12 px-3 py-1.5 text-xs font-black text-cyan-100">
                  {course.durationLabel}
                </span>
                <span className="rounded-full bg-[#f08a27] px-3 py-1.5 text-xs font-black text-white">
                  군산.com 1차 편집 코스
                </span>
              </div>
              <p className="mt-6 text-xs font-black tracking-[0.15em] text-orange-200">FOLLOW THIS COURSE</p>
              <h1 className="mt-2 text-4xl font-black leading-tight tracking-[-0.055em] sm:text-5xl lg:text-6xl">
                {course.title}
              </h1>
              <p className="mt-3 text-lg font-bold text-cyan-100 sm:text-xl">{course.subtitle}</p>
              <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-white/75 sm:text-base">
                {course.summary}
              </p>
            </div>

            <aside className="rounded-[1.5rem] border border-white/15 bg-white/9 p-5 sm:p-6">
              <p className="text-xs font-black tracking-[0.12em] text-cyan-200">이런 여행에 맞습니다</p>
              <ul className="mt-4 space-y-3">
                {course.recommendedFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-white/85">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#f08a27]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <div>
            <p className="text-[11px] font-black tracking-[0.15em] text-[#b64b31]">COURSE STOPS</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.045em] sm:text-4xl">이 순서로 둘러보세요</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-600 sm:text-base">
              정류장 수를 늘리기보다 각 장소를 넣은 이유와 다음 판단에 필요한 내용을 먼저 정리했습니다.
            </p>

            <ol className="mt-8 space-y-4" aria-label={`${course.title} 정류장 순서`}>
              {course.stops.map((stop, index) => (
                <CourseStopItem
                  key={stop.id}
                  stop={stop}
                  isLast={index === course.stops.length - 1}
                />
              ))}
            </ol>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-6">
            <section className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-black tracking-[0.12em] text-[#b64b31]">방문 전 확인</p>
              <h2 className="mt-2 text-xl font-black tracking-[-0.035em]">확정 정보와 추천을 구분합니다</h2>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{course.sourceNote}</p>
              <ul className="mt-4 space-y-2 text-xs font-bold leading-5 text-slate-500">
                <li>• 운영시간과 휴무일은 공식 정보로 다시 확인</li>
                <li>• 주차와 교통은 방문일 현장 상황에 따라 달라질 수 있음</li>
                <li>• 표시된 순서는 군산.com의 편집 제안</li>
              </ul>
              <a
                href="https://www.gunsan.go.kr/tour"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex text-sm font-black text-cyan-800 underline decoration-cyan-300 underline-offset-4"
              >
                군산문화관광 공식 정보 ↗
              </a>
            </section>

            <section className="rounded-[1.4rem] bg-[#e8f4f5] p-5">
              <p className="text-xs font-black tracking-[0.12em] text-cyan-800">현장 정보가 다르다면</p>
              <h2 className="mt-2 text-xl font-black tracking-[-0.035em]">코스를 함께 바로잡아 주세요</h2>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">
                휴관, 이동 불편, 주차와 날씨 대안처럼 실제 여행에서 달랐던 점을 알려주세요.
              </p>
              <Link href="/submit" className="mt-5 inline-flex rounded-full bg-[#123f67] px-4 py-2.5 text-sm font-black text-white">
                정보 차이 제보하기
              </Link>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

function CourseStopItem({ stop, isLast }: { stop: CourseStop; isLast: boolean }) {
  const hasPlacePage = stop.placeSlug ? placeSlugs.has(stop.placeSlug) : false;

  return (
    <li className="relative grid grid-cols-[44px_minmax(0,1fr)] gap-4 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-5">
      {!isLast ? (
        <span className="absolute bottom-[-1rem] left-[21px] top-11 w-px bg-slate-200 sm:left-[27px] sm:top-14" aria-hidden="true" />
      ) : null}
      <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-[#123f67] text-sm font-black text-white shadow-sm sm:h-14 sm:w-14 sm:text-base">
        {stop.order}
      </span>
      <article className="rounded-[1.4rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.1em] text-cyan-700">{stopTypeLabel(stop.stopType)}</p>
            <h3 className="mt-1 text-xl font-black tracking-[-0.035em] sm:text-2xl">{stop.title}</h3>
          </div>
          {hasPlacePage && stop.placeSlug ? (
            <Link href={`/places/${stop.placeSlug}`} className="shrink-0 text-sm font-black text-[#b64b31]">
              장소 정보 보기 →
            </Link>
          ) : null}
        </div>

        <div className="mt-5 rounded-xl bg-[#fbfaf7] p-4">
          <strong className="text-xs font-black text-slate-500">왜 여기인가</strong>
          <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">{stop.reason}</p>
        </div>

        {stop.note ? (
          <div className="mt-3 rounded-xl border border-orange-200 bg-orange-50 p-4">
            <strong className="text-xs font-black text-[#a4472e]">방문 전 확인</strong>
            <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">{stop.note}</p>
          </div>
        ) : null}
      </article>
    </li>
  );
}

function stopTypeLabel(type: CourseStop["stopType"]) {
  const labels: Record<CourseStop["stopType"], string> = {
    place: "장소",
    food: "먹거리",
    cafe: "카페",
    rest: "휴식",
    move: "이동 구간",
    event: "행사",
  };

  return labels[type];
}
