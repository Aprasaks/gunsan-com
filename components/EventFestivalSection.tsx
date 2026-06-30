const eventCategories = [
  { key: "festival", label: "축제", note: "공식 출처 기준 확인" },
  { key: "performance", label: "공연", note: "공연 정보 확인" },
  { key: "exhibition", label: "전시", note: "전시 정보 확인" },
  { key: "experience", label: "체험", note: "가족 나들이 확인" },
] as const;

export default function EventFestivalSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-cyan-700">행사·축제</p>
      <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
        군산 행사·축제
      </h2>
      <p className="mt-0.5 text-xs leading-5 text-slate-600">
        축제, 공연, 전시, 체험 정보를 공식 출처 기준으로 확인합니다.
      </p>

      <div className="mt-2 grid grid-cols-2 gap-1.5">
        {eventCategories.map((item) => (
          <article
            key={item.key}
            className="flex min-h-12 items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-1.5"
          >
            <span
              className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-white text-xs font-black text-cyan-800"
              aria-hidden="true"
            >
              {item.label.slice(0, 1)}
            </span>
            <span className="min-w-0">
              <span className="block truncate text-xs font-bold text-slate-900">
                {item.label}
              </span>
              <span className="block truncate text-[10px] font-semibold text-slate-500">
                {item.note}
              </span>
            </span>
          </article>
        ))}
      </div>

      <button
        type="button"
        className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800"
      >
        행사 정보 보기
      </button>
    </section>
  );
}
