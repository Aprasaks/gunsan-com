"use client";

import { useState } from "react";

import EventDetailModal from "@/components/EventDetailModal";
import { eventItems, officialEventListUrl } from "@/data/eventItems";
import type { EventItem } from "@/types/event";

const EVENT_CARD_COUNT = 4;
const mainEventItems = eventItems.slice(0, EVENT_CARD_COUNT);
const pendingEventCards = Array.from(
  { length: Math.max(0, EVENT_CARD_COUNT - mainEventItems.length) },
  (_, index) => index,
);

const thumbnailTones = [
  "from-cyan-100 via-white to-sky-100",
  "from-slate-100 via-white to-sky-100",
  "from-teal-100 via-white to-cyan-50",
  "from-blue-100 via-white to-slate-100",
] as const;

export default function EventFestivalSection() {
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  return (
    <section className="h-full w-full rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm shadow-slate-200/40">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-cyan-700">행사·축제</p>
          <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
            군산 행사·축제
          </h2>
          <p className="mt-0.5 text-xs leading-5 text-slate-600">
            축제, 공연, 전시, 체험 정보를 공식 출처 기준으로 확인합니다.
          </p>
        </div>

        <a
          href={officialEventListUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 shrink-0 text-xs font-bold text-cyan-700"
          aria-label="군산문화관광 행사 목록 새 창에서 보기"
        >
          더보기
        </a>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
        {mainEventItems.map((item, index) => (
          <article
            key={item.id}
            className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/40"
          >
            <button
              type="button"
              className="flex h-full w-full flex-col text-left transition hover:bg-slate-50"
              onClick={() => {
                setSelectedEvent(item);
              }}
            >
              <span
                className={[
                  "relative block h-14 overflow-hidden bg-gradient-to-br",
                  thumbnailTones[index % thumbnailTones.length],
                ].join(" ")}
                aria-hidden="true"
              >
                <span className="absolute bottom-[-16px] right-[-10px] h-14 w-14 rounded-full bg-white/70" />
                <span className="absolute left-2 top-2 h-2 w-14 rounded-full bg-white/80" />
                <span className="absolute bottom-3 left-2 h-2 w-9 rounded-full bg-white/70" />
              </span>
              <span className="block min-w-0 px-2 pb-1 pt-1.5">
                <span className="mb-0.5 inline-flex h-4 items-center rounded-full bg-cyan-50 px-1.5 text-[9px] font-bold text-cyan-700">
                  {item.category}
                </span>
                <span className="block truncate text-xs font-bold text-slate-950">
                  {item.title}
                </span>
                <span className="block truncate text-[10px] font-semibold text-slate-500">
                  {item.location ?? item.description}
                </span>
                <span className="mt-1 inline-flex h-4 max-w-full items-center rounded-full bg-cyan-50 px-1.5 text-[9px] font-bold text-cyan-700">
                  공식 출처 기준
                </span>
                <span className="mt-0.5 block truncate text-[10px] font-bold text-cyan-700">
                  {item.sourceName}
                </span>
              </span>
            </button>
          </article>
        ))}

        {pendingEventCards.map((slot) => (
          <article
            key={`pending-event-${slot}`}
            className="min-w-0 overflow-hidden rounded-lg border border-dashed border-slate-200 bg-slate-50/80"
          >
            <div className="flex h-full flex-col">
              <span
                className="relative block h-14 overflow-hidden bg-gradient-to-br from-slate-100 via-white to-sky-50"
                aria-hidden="true"
              >
                <span className="absolute inset-x-3 top-2 h-2 rounded-full bg-white/85" />
                <span className="absolute bottom-[-18px] right-[-12px] h-16 w-16 rounded-full bg-white/75" />
                <span className="absolute bottom-3 left-2 h-2 w-10 rounded-full bg-slate-200/75" />
              </span>
              <span className="block min-w-0 px-2 pb-1 pt-1.5">
                <span className="mb-0.5 inline-flex h-4 items-center rounded-full bg-slate-100 px-1.5 text-[9px] font-bold text-slate-600">
                  확인 중
                </span>
                <span className="block truncate text-xs font-bold text-slate-700">
                  행사 정보 확인 중
                </span>
                <span className="block truncate text-[10px] font-semibold text-slate-500">
                  공식 출처 확인 후 업데이트됩니다.
                </span>
                <span className="mt-1 inline-flex h-4 max-w-full items-center rounded-full bg-white px-1.5 text-[9px] font-bold text-slate-500">
                  공식 출처 기준
                </span>
              </span>
            </div>
          </article>
        ))}
      </div>

      <EventDetailModal
        event={selectedEvent}
        onClose={() => {
          setSelectedEvent(null);
        }}
      />
    </section>
  );
}
