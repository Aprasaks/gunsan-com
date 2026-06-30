import Link from "next/link";

const neighborhoodItems = [
  { key: "wolmyeong", label: "월명동", tone: "bg-cyan-50 text-cyan-800" },
  { key: "susong", label: "수송동", tone: "bg-sky-50 text-sky-800" },
  { key: "naun", label: "나운동", tone: "bg-teal-50 text-teal-800" },
  { key: "mijang", label: "미장동", tone: "bg-slate-100 text-slate-700" },
  { key: "soryong", label: "소룡동", tone: "bg-blue-50 text-blue-800" },
] as const;

export default function NeighborhoodSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-cyan-700">동네별 보기</p>
      <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
        군산 동네별 보기
      </h2>
      <p className="mt-0.5 text-xs leading-5 text-slate-600">
        군산의 동네와 주요 생활권을 가볍게 둘러보세요.
      </p>

      <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
        {neighborhoodItems.map((item) => (
          <button
            key={item.key}
            type="button"
            className="flex w-14 shrink-0 flex-col items-center gap-1 text-xs font-bold text-slate-700"
          >
            <span
              className={[
                "grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-sm font-black",
                item.tone,
              ].join(" ")}
              aria-hidden="true"
            >
              {item.label.slice(0, 1)}
            </span>
            <span className="w-full truncate text-center">{item.label}</span>
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
