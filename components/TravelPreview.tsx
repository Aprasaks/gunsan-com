"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { Course } from "@/types/course";

type ViewMode = "drone" | "walk";

type TravelPreviewProps = {
  course: Course;
  compact?: boolean;
};

const placeImages: Record<string, string> = {
  "gunsan-modern-history-museum": "/images/places/gunsan-modern-history-museum.webp",
  "wolmyeong-park": "/images/places/wolmyeong-park.webp",
  "eunpa-lake-park": "/images/places/eunpa-lake-park.webp",
  "gyeongam-dong-railroad-village": "/images/places/gyeongam-dong-railroad-village.webp",
  "saemangeum-seawall": "/images/places/saemangeum-seawall.webp",
};

const fallbackImages = [
  "/images/gunsan-hero-banner.webp",
  "/images/categories/category-travel.webp",
  "/images/categories/category-food.webp",
  "/images/categories/category-cafe.webp",
];

export default function TravelPreview({ course, compact = false }: TravelPreviewProps) {
  const scenes = useMemo(
    () =>
      course.stops.map((stop, index) => ({
        ...stop,
        image: stop.placeSlug ? placeImages[stop.placeSlug] ?? fallbackImages[index % fallbackImages.length] : fallbackImages[index % fallbackImages.length],
      })),
    [course.stops],
  );

  const [sceneIndex, setSceneIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>("drone");

  useEffect(() => {
    if (!playing || scenes.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setSceneIndex((current) => (current + 1) % scenes.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, [playing, scenes.length]);

  const scene = scenes[sceneIndex];

  if (!scene) {
    return null;
  }

  return (
    <section
      id="preview"
      className={[
        "overflow-hidden bg-[#071c2a] text-white shadow-2xl",
        compact ? "rounded-[1.5rem]" : "rounded-[2rem]",
      ].join(" ")}
    >
      <div className={compact ? "relative min-h-[420px]" : "relative min-h-[560px] lg:min-h-[640px]"}>
        {scenes.map((item, index) => (
          <Image
            key={`${item.id}-${index}`}
            src={item.image}
            alt=""
            fill
            sizes={compact ? "(max-width: 1024px) 100vw, 720px" : "100vw"}
            className={[
              "object-cover transition-opacity duration-700",
              index === sceneIndex ? "opacity-100" : "opacity-0",
              viewMode === "drone" ? "preview-drift" : "preview-walk",
            ].join(" ")}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,18,28,0.82)_0%,rgba(4,18,28,0.45)_48%,rgba(4,18,28,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#06131c] via-[#06131c]/35 to-transparent" />

        <div className="relative flex min-h-[inherit] flex-col p-5 sm:p-7 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/25 p-1 backdrop-blur-md">
              <ModeButton selected={viewMode === "drone"} onClick={() => setViewMode("drone")}>드론 시점</ModeButton>
              <ModeButton selected={viewMode === "walk"} onClick={() => setViewMode("walk")}>1인칭 시점</ModeButton>
            </div>
            <p className="rounded-full border border-white/20 bg-black/25 px-3 py-2 text-xs font-black backdrop-blur-md">
              {sceneIndex + 1} / {scenes.length}
            </p>
          </div>

          <div className="mt-auto max-w-2xl pb-3">
            <p className="text-xs font-black tracking-[0.16em] text-cyan-200">COURSE PREVIEW · {course.durationLabel}</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] sm:text-4xl lg:text-5xl">{course.title}</h2>
            <div className="mt-6 flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#123f67]">
                {scene.order}
              </span>
              <div>
                <h3 className="text-xl font-black sm:text-2xl">{scene.title}</h3>
                <p className="mt-1 max-w-xl text-sm font-semibold leading-6 text-white/72 sm:text-base">{scene.reason}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setPlaying((current) => !current)}
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-black text-slate-950 transition hover:bg-cyan-50"
              >
                <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
                {playing ? "잠시 멈추기" : "계속 미리보기"}
              </button>
              <Link href={`/courses/${course.slug}`} className="rounded-full border border-white/35 bg-black/20 px-4 py-2.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/12">
                이 코스로 여행하기 →
              </Link>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6">
            {scenes.slice(0, 6).map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`${item.title} 장면 보기`}
                onClick={() => {
                  setSceneIndex(index);
                  setPlaying(false);
                }}
                className={[
                  "relative h-14 overflow-hidden rounded-xl border transition sm:h-16",
                  index === sceneIndex ? "border-white ring-2 ring-white/40" : "border-white/20 opacity-65 hover:opacity-100",
                ].join(" ")}
              >
                <Image src={item.image} alt="" fill sizes="140px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ModeButton({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={[
        "rounded-full px-3.5 py-2 text-xs font-black transition sm:text-sm",
        selected ? "bg-white text-slate-950" : "text-white/75 hover:text-white",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
