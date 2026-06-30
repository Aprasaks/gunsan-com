const eventCategories = [
  { key: "festival", label: "축제" },
  { key: "performance", label: "공연" },
  { key: "exhibition", label: "전시" },
  { key: "experience", label: "체험" },
  { key: "family", label: "가족 행사" },
  { key: "weekend", label: "주말 나들이" },
] as const;

export default function EventFestivalSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-xs font-semibold text-cyan-700">행사·축제</p>
      <h2 className="mt-1 text-lg font-bold leading-tight text-slate-950">
        군산 행사·축제
      </h2>
      <p className="mt-1 text-sm leading-5 text-slate-600">
        축제, 공연, 전시, 체험 정보를 공식 출처 기준으로 확인합니다.
      </p>

      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        {eventCategories.map((item) => (
          <span
            key={item.key}
            className="inline-flex h-8 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-2.5 text-xs font-bold text-slate-700"
          >
            {item.label}
          </span>
        ))}
      </div>

      <button
        type="button"
        className="mt-2.5 inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800"
      >
        행사 정보 보기
      </button>
    </section>
  );
}
