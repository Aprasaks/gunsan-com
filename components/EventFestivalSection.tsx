const eventCategories = [
  {
    key: "festival",
    badge: "확인",
    title: "축제 소식",
    note: "공식 출처 기준",
    tone: "from-cyan-100 via-white to-sky-100",
  },
  {
    key: "performance",
    badge: "공연",
    title: "공연·버스킹",
    note: "공연 정보 확인",
    tone: "from-sky-100 via-white to-slate-100",
  },
  {
    key: "exhibition",
    badge: "전시",
    title: "전시·문화",
    note: "문화 행사 확인",
    tone: "from-slate-200 via-white to-cyan-50",
  },
  {
    key: "experience",
    badge: "체험",
    title: "가족 체험",
    note: "나들이 정보 확인",
    tone: "from-teal-100 via-white to-cyan-100",
  },
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
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <span
              className={[
                "relative block h-10 overflow-hidden bg-gradient-to-br",
                item.tone,
              ].join(" ")}
              aria-hidden="true"
            >
              <span className="absolute bottom-[-12px] right-[-8px] h-10 w-10 rounded-full bg-white/70" />
              <span className="absolute left-2 top-2 h-2 w-12 rounded-full bg-white/80" />
            </span>
            <span className="block min-w-0 px-2 py-1.5">
              <span className="mb-0.5 inline-flex h-4 items-center rounded-full bg-cyan-50 px-1.5 text-[9px] font-bold text-cyan-700">
                {item.badge}
              </span>
              <span className="block truncate text-xs font-bold text-slate-950">
                {item.title}
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
