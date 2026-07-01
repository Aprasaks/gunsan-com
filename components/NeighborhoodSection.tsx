import Link from "next/link";

const neighborhoodItems = [
  { key: "wolmyeong", label: "월명동", tone: "from-cyan-100 via-white to-sky-100" },
  { key: "susong", label: "수송동", tone: "from-sky-100 via-white to-slate-100" },
  { key: "naun", label: "나운동", tone: "from-teal-100 via-white to-cyan-50" },
  { key: "mijang", label: "미장동", tone: "from-slate-200 via-white to-sky-50" },
  { key: "soryong", label: "소룡동", tone: "from-blue-100 via-white to-cyan-100" },
] as const;

export default function NeighborhoodSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-cyan-700">동네별 보기</p>
      <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
        군산 동네별 보기
      </h2>
      <p className="mt-0.5 text-xs leading-5 text-slate-600">
        동네와 주요 생활권을 가볍게 둘러보세요.
      </p>

      <div className="mt-2 grid grid-cols-5 gap-1.5">
        {neighborhoodItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className="min-w-0 text-xs font-bold text-slate-700"
          >
            <span
              className={[
                "relative mx-auto block h-11 w-11 overflow-hidden rounded-full border border-slate-200 bg-gradient-to-br",
                item.tone,
              ].join(" ")}
              aria-hidden="true"
            >
              <span className="absolute bottom-[-10px] left-1/2 h-7 w-10 -translate-x-1/2 rounded-full bg-white/75" />
              <span className="absolute right-1.5 top-2 h-2 w-2 rounded-full bg-cyan-500/40" />
            </span>
            <span className="mt-1 block w-full truncate text-center text-[11px]">
              {item.label}
            </span>
          </button>
        ))}
      </div>

      <Link
        href="/places"
        className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
      >
        장소 둘러보기
      </Link>
    </section>
  );
}
