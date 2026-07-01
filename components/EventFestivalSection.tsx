import { eventItems } from "@/data/eventItems";

const mainEventItems = eventItems.slice(0, 3);

const thumbnailTones = [
  "from-cyan-100 via-white to-sky-100",
  "from-slate-100 via-white to-sky-100",
  "from-teal-100 via-white to-cyan-50",
] as const;

export default function EventFestivalSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
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

        <button
          type="button"
          className="mt-0.5 shrink-0 text-xs font-bold text-cyan-700"
        >
          더보기
        </button>
      </div>

      <div className="mt-2 grid gap-2 sm:grid-cols-3">
        {mainEventItems.map((item, index) => (
          <article
            key={item.id}
            className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/40"
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
            <div className="min-w-0 px-2 py-1.5">
              <span className="mb-0.5 inline-flex h-4 items-center rounded-full bg-cyan-50 px-1.5 text-[9px] font-bold text-cyan-700">
                {item.category}
              </span>
              <span className="block truncate text-xs font-bold text-slate-950">
                {item.title}
              </span>
              <span className="block truncate text-[10px] font-semibold text-slate-500">
                {item.location ?? item.description}
              </span>
              <a
                href={item.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block truncate text-[10px] font-bold text-cyan-700"
                aria-label={`${item.title} 공식 출처 새 창에서 보기`}
              >
                {item.sourceName}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
