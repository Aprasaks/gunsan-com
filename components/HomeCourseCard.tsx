import Image from "next/image";
import Link from "next/link";

import type { Course } from "@/types/course";

type HomeCourseCardVariant = "featured" | "secondary" | "compact";

type HomeCourseCardProps = {
  course: Course;
  variant: HomeCourseCardVariant;
};

const courseImages: Partial<Record<Course["theme"], string>> = {
  "first-visit": "/images/places/gunsan-modern-history-museum.webp",
  "half-day": "/images/places/gyeongam-dong-railroad-village.webp",
  "one-night-two-days": "/images/gunsan-hero-banner.webp",
  "two-nights-three-days": "/images/places/eunpa-lake-park.webp",
  family: "/images/places/eunpa-lake-park.webp",
  "rainy-day": "/images/places/gunsan-modern-history-museum.webp",
  seonyudo: "/images/places/saemangeum-seawall.webp",
};

export default function HomeCourseCard({ course, variant }: HomeCourseCardProps) {
  const featured = variant === "featured";
  const image = courseImages[course.theme] ?? "/images/gunsan-hero-banner.webp";
  const visibleStops = course.stops.slice(0, 4);

  return (
    <article
      id={`course-${course.slug}`}
      className={[
        "group overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl",
        featured ? "lg:min-h-[520px]" : "h-full",
      ].join(" ")}
    >
      <div className={featured ? "relative h-64 sm:h-72" : "relative h-52"}>
        <Image
          src={image}
          alt=""
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 680px" : "(max-width: 768px) 100vw, 420px"}
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 text-white sm:p-6">
          <div>
            <span className="rounded-full bg-white/18 px-3 py-1.5 text-xs font-black backdrop-blur-md">{course.durationLabel}</span>
            <h3 className={featured ? "mt-3 text-3xl font-black tracking-[-0.05em]" : "mt-3 text-2xl font-black tracking-[-0.045em]"}>{course.title}</h3>
          </div>
          <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-xs font-black backdrop-blur-md">{course.stops.length} stops</span>
        </div>
      </div>

      <div className="flex h-full flex-col p-5 sm:p-6">
        <p className="text-sm font-bold text-[#0f75d8]">{course.subtitle}</p>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{course.summary}</p>

        <ol className="mt-5 flex flex-wrap gap-2" aria-label={`${course.title} 주요 순서`}>
          {visibleStops.map((stop) => (
            <li key={stop.id} className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-2 text-xs font-bold text-slate-600">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#e7f3ff] text-[10px] font-black text-[#0f75d8]">{stop.order}</span>
              {stop.title}
            </li>
          ))}
        </ol>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Link href={`/courses/${course.slug}`} className="rounded-full bg-[#0d3557] px-4 py-2.5 text-sm font-black text-white transition hover:bg-[#092a46]">
            코스 자세히 보기
          </Link>
          <Link href={`/courses/${course.slug}#preview`} className="rounded-full border border-slate-200 px-4 py-2.5 text-sm font-black text-slate-700 transition hover:border-[#0f75d8] hover:text-[#0f75d8]">
            ▶ 미리 여행
          </Link>
        </div>
      </div>
    </article>
  );
}
