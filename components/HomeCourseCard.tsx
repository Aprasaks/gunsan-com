import Link from "next/link";

import type { Course } from "@/types/course";

type HomeCourseCardProps = {
  course: Course;
  featured?: boolean;
};

export default function HomeCourseCard({ course, featured = false }: HomeCourseCardProps) {
  return (
    <article
      id={`course-${course.slug}`}
      className={[
        "flex h-full flex-col rounded-[1.6rem] border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6",
        featured
          ? "border-[#174d73] bg-[#174d73] text-white"
          : "border-slate-200 bg-white text-slate-950",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={[
          "rounded-full px-3 py-1 text-xs font-black",
          featured ? "bg-white/15 text-cyan-100" : "bg-orange-50 text-[#b64b31]",
        ].join(" ")}>
          {course.durationLabel}
        </span>
        <span className={featured ? "text-xs font-bold text-white/60" : "text-xs font-bold text-slate-400"}>
          {course.stops.length}개 정류장
        </span>
      </div>

      <h3 className="mt-5 text-xl font-black tracking-[-0.04em] sm:text-2xl">{course.title}</h3>
      <p className={featured ? "mt-1 text-sm font-bold text-cyan-100" : "mt-1 text-sm font-bold text-[#23678c]"}>
        {course.subtitle}
      </p>
      <p className={featured ? "mt-3 text-sm leading-6 text-white/72" : "mt-3 text-sm leading-6 text-slate-600"}>
        {course.summary}
      </p>

      <ol className="mt-5 space-y-2.5" aria-label={`${course.title} 주요 정류장`}>
        {course.stops.slice(0, 3).map((stop) => (
          <li key={stop.id} className="flex items-center gap-3 text-sm font-bold">
            <span className={[
              "grid h-7 w-7 shrink-0 place-items-center rounded-full text-[11px] font-black",
              featured ? "bg-white text-[#174d73]" : "bg-slate-100 text-slate-600",
            ].join(" ")}>
              {stop.order}
            </span>
            <span className="truncate">{stop.title}</span>
          </li>
        ))}
      </ol>

      <Link
        href="#essential"
        className={[
          "mt-auto pt-6 text-sm font-black",
          featured ? "text-cyan-100" : "text-[#174d73]",
        ].join(" ")}
      >
        필수 장소와 함께 보기 <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
