"use client";

import { useEffect } from "react";

import type { EventItem } from "@/types/event";

type EventDetailModalProps = {
  event: EventItem | null;
  onClose: () => void;
};

export default function EventDetailModal({
  event,
  onClose,
}: EventDetailModalProps) {
  useEffect(() => {
    if (!event) {
      return;
    }

    const handleKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6"
      role="presentation"
      onClick={onClose}
    >
      <section
        aria-labelledby="event-detail-title"
        aria-modal="true"
        role="dialog"
        className="max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-950/20"
        onClick={(clickEvent) => {
          clickEvent.stopPropagation();
        }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-4 py-3">
          <div className="min-w-0">
            <p className="text-xs font-bold text-cyan-700">
              공식 출처 기준 요약
            </p>
            <h2
              id="event-detail-title"
              className="mt-1 text-xl font-bold leading-tight text-slate-950"
            >
              {event.title}
            </h2>
          </div>

          <button
            type="button"
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-lg leading-none text-slate-500 transition hover:border-cyan-200 hover:text-cyan-700"
            onClick={onClose}
            aria-label="행사 상세 닫기"
          >
            ×
          </button>
        </div>

        <div className="space-y-4 px-4 py-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="inline-flex h-6 items-center rounded-full bg-cyan-50 px-2 text-xs font-bold text-cyan-700">
              {event.category}
            </span>
            <span className="inline-flex h-6 items-center rounded-full border border-slate-200 bg-slate-50 px-2 text-xs font-bold text-slate-600">
              공식 출처 기준
            </span>
          </div>

          <dl className="grid gap-2 rounded-lg border border-slate-200 bg-slate-50 p-3 text-sm">
            {event.periodLabel ? (
              <div className="flex gap-3">
                <dt className="w-12 shrink-0 font-bold text-slate-700">기간</dt>
                <dd className="min-w-0 text-slate-600">{event.periodLabel}</dd>
              </div>
            ) : null}
            {event.location ? (
              <div className="flex gap-3">
                <dt className="w-12 shrink-0 font-bold text-slate-700">장소</dt>
                <dd className="min-w-0 text-slate-600">{event.location}</dd>
              </div>
            ) : null}
            <div className="flex gap-3">
              <dt className="w-12 shrink-0 font-bold text-slate-700">출처</dt>
              <dd className="min-w-0 text-slate-600">{event.sourceName}</dd>
            </div>
          </dl>

          <div>
            <h3 className="text-sm font-bold text-slate-950">요약</h3>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              {event.summary ?? event.description}
            </p>
          </div>

          {event.highlights && event.highlights.length > 0 ? (
            <div>
              <h3 className="text-sm font-bold text-slate-950">핵심 정보</h3>
              <ul className="mt-2 space-y-1.5">
                {event.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-5 text-slate-600"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <p className="rounded-lg bg-cyan-50 px-3 py-2 text-xs leading-5 text-cyan-900">
            자세한 내용은 공식 출처에서 확인하세요.
          </p>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href={event.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-bold text-white transition hover:bg-cyan-800"
            >
              공식 출처 보기
            </a>
            {event.additionalSourceUrl ? (
              <a
                href={event.additionalSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-cyan-200 bg-white px-4 text-sm font-bold text-cyan-800 transition hover:bg-cyan-50"
              >
                프로그램 보기
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
