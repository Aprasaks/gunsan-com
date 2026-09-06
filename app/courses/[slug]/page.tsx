import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import TravelPreview from "@/components/TravelPreview";
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
  return homeCourses.map((course) => ({ slug: course.slug }));
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
    <main className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-slate-950">
      <Header />

      <section className="px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
        <div className="mx-auto w-full max-w-[1180px]">
          <Link href="/#courses" className="inline-flex text-sm font-black text-[#0f75d8] transition hover:text-[#0b66bf]">
            ← 다른 코스 보기
          </Link>

          <div className="mt-8 grid gap-7 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-[#e7f3ff] px-3 py-1.5 text-xs font-black text-[#0f75d8]">{course.durationLabel}</span>
                <span className="rounded-full bg-white px-3 py-1.5 text-xs font-black text-slate-600 ring-1 ring-slate-200">{course.stops.length}개 여행 지점</span>
              </div>
              <p className="mt-6 text-xs font-black tracking-[0.16em] text-[#0f75d8]">YOUR GUNSAN COURSE</p>
              <h1 className="mt-2 text-4xl font-black leading-[1.05] tracking-[-0.06em] text-[#0d3557] sm:text-5xl lg:text-6xl">{course.title}</h1>
              <p className="mt-4 text-lg font-bold text-slate-600 sm:text-xl">{course.subtitle}</p>
              <p className="mt-4 max-w-3xl text-sm font-semibold leading-7 text-slate-500 sm:text-base">{course.summary}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="#preview" className="rounded-full bg-[#0f75d8] px-5 py-3 text-sm font-black text-white transition hover:bg-[#0b66bf]">▶ 이 코스 미리 여행하기</Link>
                <Link href="#route" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:border-[#0f75d8] hover:text-[#0f75d8]">실제 순서 보기</Link>
              </div>
            </div>

            <aside className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <p className="text-xs font-black tracking-[0.12em] text-[#0f75d8]">이런 여행에 잘 맞아요</p>
              <ul className="mt-4 space-y-3">
                {course.recommendedFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0f75d8]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#081b28] px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-[1280px]">
          <TravelPreview course={course} />
        </div>
      </section>

      <section id="route" className="scroll-mt-24 px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-22">
        <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
          <div>
            <p className="text-[11px] font-black tracking-[0.16em] text-[#0f75d8]">REAL TRAVEL FLOW</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] text-[#0d3557] sm:text-4xl">이 순서대로 움직이면 됩니다</h2>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-7 text-slate-500 sm:text-base">
              장소 수를 늘리지 않고 이동 순서와 각 장소를 넣은 이유를 먼저 보여줍니다. 먹거리와 카페는 실제 검증 데이터가 붙는 단계에서 동선 사이에 선택지로 연결합니다.
            </p>

            <ol className="mt-9 space-y-4" aria-label={`${course.title} 여행 순서`}>
              {course.stops.map((stop, index) => (
                <CourseStopItem key={stop.id} stop={stop} isLast={index === course.stops.length - 1} />
              ))}
            </ol>
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <section className="rounded-[1.5rem] bg-[#0d3557] p-5 text-white shadow-lg sm:p-6">
              <p className="text-xs font-black tracking-[0.12em] text-cyan-200">여행 중에는</p>
              <h2 className="mt-2 text-xl font-black tracking-[-0.04em]">지도에서 다음 이동만 확인하세요</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-white/65">코스를 고른 뒤에는 검색보다 현재 위치와 다음 장소에 집중하는 구조로 이어집니다.</p>
              <Link href="/map" className="mt-5 inline-flex rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#0d3557]">여행지도 열기 →</Link>
            </section>

            <section className="rounded-[1.5rem] border border-[#b9d8f2] bg-[#eaf5ff] p-5 sm:p-6">
              <p className="text-xs font-black tracking-[0.12em] text-[#0f75d8]">GUNSAN.COM SPOT</p>
              <h2 className="mt-2 text-xl font-black tracking-[-0.04em] text-[#0d3557]">현장 QR에서도 코스를 이어갑니다</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">관광지 QR을 찍으면 장소 이야기, 주변 추천, 다음 목적지를 바로 보여주는 방향입니다.</p>
              <Link href="/#spot" className="mt-5 inline-flex text-sm font-black text-[#0f75d8]">QR 서비스 보기 →</Link>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 sm:p-6">
              <p className="text-xs font-black tracking-[0.12em] text-slate-500">방문 전 확인</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{course.sourceNote}</p>
              <a href="https://www.gunsan.go.kr/tour" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex text-sm font-black text-[#0f75d8] underline decoration-blue-200 underline-offset-4">군산문화관광 공식 정보 ↗</a>
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
    <li className="relative grid grid-cols-[46px_minmax(0,1fr)] gap-4 sm:grid-cols-[58px_minmax(0,1fr)] sm:gap-5">
      {!isLast ? <span className="absolute bottom-[-1rem] left-[22px] top-12 w-px bg-[#b9d8f2] sm:left-[28px] sm:top-15" aria-hidden="true" /> : null}
      <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-[#0f75d8] text-sm font-black text-white shadow-sm sm:h-14 sm:w-14 sm:text-base">{stop.order}</span>

      <article className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.1em] text-[#0f75d8]">{stopTypeLabel(stop.stopType)}</p>
            <h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-[#0d3557] sm:text-2xl">{stop.title}</h3>
          </div>
          {hasPlacePage && stop.placeSlug ? (
            <Link href={`/places/${stop.placeSlug}`} className="shrink-0 text-sm font-black text-[#0f75d8]">장소 정보 →</Link>
          ) : null}
        </div>

        <div className="mt-5 rounded-2xl bg-[#f6f8fb] p-4">
          <strong className="text-xs font-black text-slate-500">왜 여기인가</strong>
          <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">{stop.reason}</p>
        </div>

        {!isLast ? (
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs font-black text-slate-500">
            <span className="rounded-full bg-[#e7f3ff] px-3 py-2 text-[#0f75d8]">다음 장소로 이동</span>
            <span className="rounded-full bg-orange-50 px-3 py-2 text-orange-700">이동 중 먹거리·카페 추천 영역</span>
          </div>
        ) : null}

        {stop.note ? (
          <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-4">
            <strong className="text-xs font-black text-orange-800">방문 전 확인</strong>
            <p className="mt-1.5 text-sm font-semibold leading-6 text-slate-700">{stop.note}</p>
          </div>
        ) : null}
      </article>
    </li>
  );
}

function stopTypeLabel(type: CourseStop["stopType"]) {
  const labels: Record<CourseStop["stopType"], string> = {
    place: "관광지",
    food: "먹거리",
    cafe: "카페",
    rest: "휴식",
    move: "이동 구간",
    event: "행사",
  };

  return labels[type];
}
