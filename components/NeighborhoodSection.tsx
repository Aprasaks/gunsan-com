import Link from "next/link";

const neighborhoodItems = [
  {
    key: "wolmyeong",
    label: "월명동",
    tone: "from-sky-100 via-white to-cyan-100",
    accent: "bg-cyan-600/70",
  },
  {
    key: "susong",
    label: "수송동",
    tone: "from-slate-100 via-white to-sky-100",
    accent: "bg-sky-600/65",
  },
  {
    key: "naun",
    label: "나운동",
    tone: "from-teal-100 via-white to-cyan-50",
    accent: "bg-teal-600/65",
  },
  {
    key: "mijang",
    label: "미장동",
    tone: "from-blue-100 via-white to-slate-100",
    accent: "bg-blue-600/60",
  },
  {
    key: "soryong",
    label: "소룡동",
    tone: "from-cyan-100 via-white to-sky-50",
    accent: "bg-cyan-700/65",
  },
] as const;

export default function NeighborhoodSection() {
  return (
    <section className="flex h-full w-full flex-col rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm shadow-slate-200/40">
      <div className="min-w-0">
        <p className="text-xs font-semibold text-cyan-700">동네별 보기</p>
        <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
          군산 동네별 보기
        </h2>
        <p className="mt-0.5 text-xs leading-5 text-slate-600">
          동네를 골라 군산 정보를 살펴보세요.
        </p>
      </div>

      <div className="mt-2 grid grid-cols-3 gap-1.5 sm:grid-cols-5">
        {neighborhoodItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className="group min-w-0 rounded-lg border border-slate-100 bg-slate-50/60 px-1.5 py-1.5 text-xs font-bold text-slate-700 transition hover:border-cyan-100 hover:bg-cyan-50/60"
            aria-label={`${item.label} 동네 보기`}
          >
            <span
              className={[
                "relative mx-auto block h-12 w-12 overflow-hidden rounded-full border border-slate-200 bg-gradient-to-br shadow-sm shadow-slate-200/70 transition group-hover:border-cyan-200 sm:h-14 sm:w-14",
                item.tone,
              ].join(" ")}
              aria-hidden="true"
            >
              <span className="absolute inset-x-0 bottom-0 h-5 bg-gradient-to-t from-slate-300/70 to-transparent" />
              <span
                className={[
                  "absolute bottom-2 left-1/2 h-4 w-12 -translate-x-1/2 rounded-[50%] opacity-80",
                  item.accent,
                ].join(" ")}
              />
              <span className="absolute bottom-1.5 left-1 h-2 w-8 rounded-full bg-white/75" />
              <span className="absolute bottom-1.5 right-1 h-2 w-5 rounded-full bg-white/70" />
              <span className="absolute left-2 top-3 h-5 w-2 rounded-sm bg-white/80" />
              <span className="absolute left-4 top-2.5 h-5 w-2 rounded-sm bg-white/70" />
              <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-amber-300/80" />
            </span>
            <span className="mt-1 block w-full truncate text-center text-[11px]">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-auto pt-2">
        <Link
          href="/places"
          className="inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
        >
          동네 둘러보기
        </Link>
      </div>
    </section>
  );
}
