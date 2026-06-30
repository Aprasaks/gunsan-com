const mapKeywords = [
  { key: "modern-street", label: "근대거리" },
  { key: "eunpa-area", label: "은파 주변" },
  { key: "seonyudo", label: "선유도" },
  { key: "saemangeum", label: "새만금" },
  { key: "wolmyeong", label: "월명동" },
  { key: "susong", label: "수송동" },
] as const;

export default function MapPreviewSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-cyan-700">지도에서 보기</p>
      <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
        지도에서 한눈에 보기
      </h2>
      <p className="mt-0.5 text-xs leading-5 text-slate-600">
        군산의 장소와 동선을 한눈에 볼 수 있는 구조로 확장합니다.
      </p>

      <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-1.5">
        <div
          className="relative h-20 overflow-hidden rounded-lg border border-cyan-100 bg-white"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:28px_28px]" />
          <div className="absolute -left-6 top-9 h-7 w-11/12 rotate-[-8deg] rounded-full border border-cyan-200/80" />
          <div className="absolute bottom-5 left-8 right-5 h-7 rotate-[6deg] rounded-full border border-teal-200/80" />
          <span className="absolute left-8 top-7 h-2.5 w-2.5 rounded-full border-2 border-white bg-cyan-600" />
          <span className="absolute right-14 top-11 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" />
          <span className="absolute bottom-7 left-1/3 h-2.5 w-2.5 rounded-full border-2 border-white bg-sky-500" />
          <span className="absolute bottom-5 right-9 h-2.5 w-2.5 rounded-full border-2 border-white bg-slate-500" />
        </div>

        <div className="mt-1.5 grid grid-cols-3 gap-1">
          {mapKeywords.slice(0, 6).map((keyword) => (
            <span
              key={keyword.key}
              className="inline-flex h-6 items-center justify-center rounded-full border border-slate-200 bg-white px-1.5 text-[10px] font-bold text-slate-700"
            >
              {keyword.label}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800"
      >
        지도 보기
      </button>
    </section>
  );
}
