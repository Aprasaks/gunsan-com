import Link from "next/link";

import type { Course } from "@/types/course";

type HomeCourseCardVariant = "featured" | "secondary" | "compact";

type HomeCourseCardProps = {
  course: Course;
  variant: HomeCourseCardVariant;
};

export default function HomeCourseCard({ course, variant }: HomeCourseCardProps) {
  const featured = variant === "featured";
  const compact = variant === "compact";
  const visibleStops = course.stops.slice(0, 3);

  return (
    <article
      id={`course-${course.slug}`}
      className={[
        "flex h-full flex-col border shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        featured
          ? "rounded-[1.75rem] border-[#174d73] bg-[#174d73] p-6 text-white sm:p-8"
          : compact
            ? "rounded-[1.25rem] border-slate-200 bg-white p-4 text-slate-950"
            : "rounded-[1.4rem] border-slate-200 bg-white p-5 text-slate-950 sm:p-6",
      ].join(" ")}
    >
      <div className="flex items-center justify-between gap-3">
        <span className={[
          "rounded-full font-black",
          compact ? "px-2.5 py-1 text-[11px]" : "px-3 py-1 text-xs",
          featured ? "bg-white/15 text-cyan-100" : "bg-orange-50 text-[#b64b31]",
        ].join(" ")}>
          {featured ? "군산 처음이면 이 코스부터" : course.durationLabel}
        </span>
        {!compact ? (
          <span className={featured ? "text-xs font-bold text-white/60" : "text-xs font-bold text-slate-400"}>
            {course.stops.length}개 정류장
          </span>
        ) : null}
      </div>

      <h3 className={[
        "font-black tracking-[-0.04em]",
        featured ? "mt-6 text-3xl sm:text-[2.35rem]" : compact ? "mt-4 text-lg" : "mt-4 text-xl sm:text-2xl",
      ].join(" ")}>
        {course.title}
      </h3>

      <p className={[
        "font-bold",
        featured ? "mt-2 text-base text-cyan-100" : compact ? "mt-1 text-xs text-[#23678c]" : "mt-1 text-sm text-[#23678c]",
      ].join(" ")}>
        {course.recommendedFor[0]}
      </p>

      {featured ? (
        <p className="mt-4 max-w-xl text-sm leading-6 text-white/72 sm:text-base">{course.summary}</p>
      ) : null}

      {compact ? (
        <p className="mt-4 line-clamp-2 text-xs font-semibold leading-5 text-slate-600">
          {visibleStops.map((stop) => stop.title).join(" · ")}
        </p>
      ) : (
        <ol className={featured ? "mt-6 grid gap-2.5 sm:grid-cols-3" : "mt-4 flex flex-wrap gap-2"} aria-label={`${course.title} 대표 정류장`}>
          {visibleStops.map((stop) => (
            <li
              key={stop.id}
              className={[
                "flex min-w-0 items-center gap-2 text-sm font-bold",
                featured ? "rounded-xl bg-white/10 px-3 py-3" : "rounded-full bg-slate-50 px-3 py-2 text-xs",
              ].join(" ")}
            >
              <span className={[
                "grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-black",
                featured ? "bg-white text-[#174d73]" : "bg-white text-slate-500 ring-1 ring-slate-200",
              ].join(" ")}>
                {stop.order}
              </span>
              <span className="truncate">{stop.title}</span>
            </li>
          ))}
        </ol>
      )}

      <Link
        href={`/courses/${course.slug}`}
        className={[
          "mt-auto inline-flex items-center font-black",
          featured ? "pt-7 text-base text-cyan-100" : compact ? "pt-5 text-xs text-[#174d73]" : "pt-5 text-sm text-[#174d73]",
        ].join(" ")}
      >
        {featured ? "이 코스 보기" : "코스 보기"} <span className="ml-2" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
