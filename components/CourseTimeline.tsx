import Link from "next/link";

import type { Course, CourseStop } from "@/types/course";

type CourseTimelineProps = {
  course: Course;
  placeSlugs: Set<string>;
};

export default function CourseTimeline({ course, placeSlugs }: CourseTimelineProps) {
  return (
    <ol className="mt-10 space-y-0" aria-label={`${course.title} 실제 여행 순서`}>
      {course.stops.map((stop, index) => (
        <li key={stop.id}>
          <CourseStopItem stop={stop} isLast={index === course.stops.length - 1} hasPlacePage={Boolean(stop.placeSlug && placeSlugs.has(stop.placeSlug))} />
          {index < course.stops.length - 1 ? <DecisionStop type={index % 2 === 0 ? "food" : "cafe"} /> : null}
        </li>
      ))}
    </ol>
  );
}

function CourseStopItem({ stop, isLast, hasPlacePage }: { stop: CourseStop; isLast: boolean; hasPlacePage: boolean }) {
  return (
    <div className="relative grid grid-cols-[42px_minmax(0,1fr)] gap-4 sm:grid-cols-[58px_minmax(0,1fr)] sm:gap-5">
      {!isLast ? <span className="absolute bottom-[-5rem] left-[20px] top-11 border-l border-dashed border-sea-blue/45 sm:left-[28px] sm:top-14" aria-hidden="true" /> : null}
      <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-gunsan-navy font-mono text-xs font-black text-white sm:h-14 sm:w-14">0{stop.order}</span>

      <article className="border-t border-slate-300 py-5 sm:py-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-[10px] font-black tracking-[0.15em] text-sea-blue">{stopTypeLabel(stop.stopType)}</p>
            <h3 className="mt-1 text-2xl font-black tracking-[-0.045em] text-gunsan-navy">{stop.title}</h3>
          </div>
          {hasPlacePage && stop.placeSlug ? (
            <Link href={`/places/${stop.placeSlug}`} className="shrink-0 text-sm font-black text-sea-blue">장소 정보 →</Link>
          ) : null}
        </div>
        <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-slate-600">{stop.reason}</p>

        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          {stop.stayDuration ? (
            <div className="border-l-2 border-slate-200 pl-3"><dt className="text-[10px] font-black tracking-[0.1em] text-slate-400">머무는 방식</dt><dd className="mt-1 font-bold text-slate-700">{stop.stayDuration}</dd></div>
          ) : null}
          {stop.nextMove ? (
            <div className="border-l-2 border-sea-blue/45 pl-3"><dt className="text-[10px] font-black tracking-[0.1em] text-slate-400">다음 이동</dt><dd className="mt-1 font-bold text-slate-700">{stop.nextMove}</dd></div>
          ) : null}
        </dl>

        {stop.note ? <p className="mt-5 border-l-2 border-lantern bg-orange-50 px-4 py-3 text-sm font-semibold leading-6 text-slate-700"><strong className="mr-2 text-orange-800">확인</strong>{stop.note}</p> : null}
      </article>
    </div>
  );
}

function DecisionStop({ type }: { type: "food" | "cafe" }) {
  const isFood = type === "food";
  return (
    <div className="relative ml-[20px] grid grid-cols-[1px_minmax(0,1fr)] gap-8 py-3 sm:ml-[28px] sm:gap-9">
      <span className="h-full border-l border-dashed border-sea-blue/45" aria-hidden="true" />
      <div className="border-l-4 border-lantern bg-white px-5 py-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <strong className="text-sm font-black text-gunsan-navy">{isFood ? "점심 선택 구간" : "카페 휴식 구간"}</strong>
          <span className="text-[10px] font-black tracking-[0.1em] text-orange-700">COURSE CHOICE</span>
        </div>
        <p className="mt-2 text-xs font-medium leading-5 text-slate-500">
          {isFood ? "다음 장소와 동선이 맞는 식당 후보 2~3곳을 고르는 자리입니다." : "산책 뒤 쉬기 좋은 카페 후보 2~3곳을 고르는 자리입니다."} 실제 장소명은 운영 정보와 동선을 확인한 뒤 연결합니다.
        </p>
      </div>
    </div>
  );
}

function stopTypeLabel(type: CourseStop["stopType"]) {
  const labels: Record<CourseStop["stopType"], string> = {
    place: "관광지",
    food: "맛집",
    cafe: "카페",
    rest: "휴식",
    move: "이동 구간",
    event: "축제·체험",
  };
  return labels[type];
}
