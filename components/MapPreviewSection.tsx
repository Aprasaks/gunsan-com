export default function MapPreviewSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-cyan-700">지도에서 보기</p>
      <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
        지도에서 한눈에 보기
      </h2>
      <p className="mt-0.5 text-xs leading-5 text-slate-600">
        장소와 동선을 한눈에 보는 구조로 확장합니다.
      </p>

      <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 p-1.5">
        <div
          className="relative h-[132px] overflow-hidden rounded-lg border border-cyan-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(14,165,233,0.12),transparent_26%),radial-gradient(circle_at_78%_78%,rgba(20,184,166,0.16),transparent_28%)]" />
          <div className="absolute left-[-18px] top-10 h-7 w-[72%] rotate-[-10deg] rounded-full border border-sky-200/80" />
          <div className="absolute bottom-6 right-[-24px] h-8 w-[82%] rotate-[8deg] rounded-full border border-cyan-200/80" />
          <div className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cyan-600/10">
            <span className="relative h-9 w-9 rounded-full bg-cyan-700 shadow-sm">
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
            </span>
          </div>
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
