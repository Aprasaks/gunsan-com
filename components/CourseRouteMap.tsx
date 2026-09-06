"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { homeCourses } from "@/data/courses";
import type { CourseStop } from "@/types/course";

const visibleCourseSlugs = ["first-gunsan", "seonyudo", "family"] as const;
const mapCourses = visibleCourseSlugs
  .map((slug) => homeCourses.find((course) => course.slug === slug))
  .filter((course): course is (typeof homeCourses)[number] => Boolean(course));

export default function CourseRouteMap() {
  const [selectedSlug, setSelectedSlug] = useState(mapCourses[0]?.slug ?? "");
  const [activeStop, setActiveStop] = useState(0);
  const course = mapCourses.find((item) => item.slug === selectedSlug) ?? mapCourses[0];

  if (!course) return null;

  return (
    <div className="grid min-h-[670px] overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-[340px_minmax(0,1fr)]">
      <aside className="border-b border-slate-200 bg-[#f4f1e9] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <p className="text-[10px] font-black tracking-[0.18em] text-sea-blue">SELECT A ROUTE</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.05em] text-gunsan-navy">어떤 하루를 볼까요?</h2>
        <div className="mt-6 space-y-2" role="tablist" aria-label="지도에서 볼 코스">
          {mapCourses.map((item) => {
            const selected = item.slug === course.slug;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => { setSelectedSlug(item.slug); setActiveStop(0); }}
                className={[
                  "w-full border-l-2 px-4 py-3 text-left transition",
                  selected ? "border-lantern bg-white text-gunsan-navy shadow-sm" : "border-transparent text-slate-500 hover:bg-white/60",
                ].join(" ")}
              >
                <strong className="block text-sm font-black">{item.title}</strong>
                <span className="mt-1 block text-xs font-bold opacity-65">{item.estimatedTime} · {item.transportLabel}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 border-t border-slate-300 pt-6">
          <p className="text-xs font-black text-gunsan-navy">코스 범례</p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-slate-500">
            {(["place", "food", "cafe", "event"] as const).map((type) => (
              <span key={type} className="flex items-center gap-2">
                <span className={["h-2 w-2 rounded-full", markerTone(type)].join(" ")} />
                {stopTypeLabel(type)}
              </span>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs font-medium leading-5 text-slate-500">
          이 화면은 코스 순서를 확인하는 지도 MVP입니다. 실제 좌표, 길찾기, 교통 상황은 지도 SDK 연결 후 제공합니다.
        </p>
      </aside>

      <section className="relative min-h-[560px] overflow-hidden" aria-label={`${course.title} 동선 지도`}>
        <Image src="/images/ui/map-preview.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 900px" className="object-cover opacity-42" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.35),rgba(223,233,233,0.3))]" />

        <div className="relative z-10 flex min-h-[560px] flex-col p-5 sm:p-8 lg:min-h-[670px] lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-black tracking-[0.16em] text-sea-blue">CURRENT ROUTE</p>
              <h3 className="mt-1 text-2xl font-black tracking-[-0.05em] text-gunsan-navy sm:text-3xl">{course.title}</h3>
              <p className="mt-2 max-w-xl text-sm font-medium leading-6 text-slate-600">{course.summary}</p>
            </div>
            <Link href={`/courses/${course.slug}`} className="shrink-0 rounded-full bg-gunsan-navy px-5 py-3 text-sm font-black text-white">
              코스 실행 화면 →
            </Link>
          </div>

          <ol className="my-auto grid gap-3 py-10 sm:grid-cols-2 lg:grid-cols-3" aria-label={`${course.title} 정류장`}>
            {course.stops.map((stop, index) => (
              <li key={stop.id}>
                <button
                  type="button"
                  aria-pressed={activeStop === index}
                  onClick={() => setActiveStop(index)}
                  className={[
                    "relative w-full border p-4 text-left shadow-sm backdrop-blur transition",
                    activeStop === index ? "border-lantern bg-white shadow-lg" : "border-white/75 bg-white/78 hover:bg-white",
                  ].join(" ")}
                >
                  <span className={["grid h-8 w-8 place-items-center rounded-full text-xs font-black text-white", markerTone(stop.stopType)].join(" ")}>{stop.order}</span>
                  <strong className="mt-3 block text-sm font-black text-gunsan-navy">{stop.title}</strong>
                  <span className="mt-1 block text-[10px] font-bold tracking-[0.1em] text-slate-400">{stopTypeLabel(stop.stopType)}</span>
                  {index < course.stops.length - 1 ? <span className="absolute -bottom-3 left-8 h-3 border-l border-dashed border-sea-blue/60" aria-hidden="true" /> : null}
                </button>
              </li>
            ))}
          </ol>

          {course.stops[activeStop] ? (
            <div className="ml-auto w-full max-w-lg border-l-4 border-lantern bg-gunsan-navy p-5 text-white shadow-xl">
              <p className="text-[10px] font-black tracking-[0.16em] text-[#9ecadf]">STOP {activeStop + 1} · {stopTypeLabel(course.stops[activeStop].stopType)}</p>
              <h4 className="mt-1 text-xl font-black">{course.stops[activeStop].title}</h4>
              <p className="mt-2 text-sm font-medium leading-6 text-white/62">{course.stops[activeStop].reason}</p>
              {course.stops[activeStop + 1] ? <p className="mt-3 text-xs font-bold text-lantern">다음 · {course.stops[activeStop + 1].title}</p> : <p className="mt-3 text-xs font-bold text-lantern">코스 마무리</p>}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}

function markerTone(type: CourseStop["stopType"]) {
  if (type === "food" || type === "cafe") return "bg-lantern";
  if (type === "event" || type === "rest") return "bg-sea-blue";
  return "bg-gunsan-navy";
}

function stopTypeLabel(type: CourseStop["stopType"]) {
  const labels: Record<CourseStop["stopType"], string> = {
    place: "관광지",
    food: "맛집",
    cafe: "카페",
    rest: "휴식",
    move: "이동",
    event: "축제·체험",
  };
  return labels[type];
}
