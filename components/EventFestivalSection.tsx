const eventCategories = [
  {
    key: "time-travel-festival",
    badge: "축제",
    title: "군산시간여행축제",
    description: "근대문화역사박물관 일원",
    tone: "from-cyan-100 via-white to-sky-100",
  },
  {
    key: "eunpa-busking",
    badge: "공연",
    title: "은파호수공원 버스킹",
    description: "은파호수공원 물빛다리",
    tone: "from-sky-100 via-white to-slate-100",
  },
  {
    key: "saemangeum-youth-festa",
    badge: "체험",
    title: "새만금 청년 거리페스타",
    description: "새만금 수변공원 일원",
    tone: "from-teal-100 via-white to-cyan-100",
  },
  {
    key: "wolmyeong-night-market",
    badge: "야간",
    title: "월명동 야시장",
    description: "월명동 일원",
    tone: "from-slate-200 via-white to-cyan-50",
  },
  {
    key: "family-experience",
    badge: "가족",
    title: "가족 체험 프로그램",
    description: "아이와 함께 볼 정보",
    tone: "from-blue-100 via-white to-sky-50",
  },
  {
    key: "culture-exhibition",
    badge: "전시",
    title: "전시·문화 행사",
    description: "문화 행사 정보 확인",
    tone: "from-cyan-50 via-white to-slate-100",
  },
] as const;

const mainEventCategories = eventCategories.slice(0, 3);

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
        {mainEventCategories.map((item) => (
          <article
            key={item.key}
            className="min-w-0 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm shadow-slate-200/40"
          >
            <span
              className={[
                "relative block h-14 overflow-hidden bg-gradient-to-br",
                item.tone,
              ].join(" ")}
              aria-hidden="true"
            >
              <span className="absolute bottom-[-16px] right-[-10px] h-14 w-14 rounded-full bg-white/70" />
              <span className="absolute left-2 top-2 h-2 w-14 rounded-full bg-white/80" />
              <span className="absolute bottom-3 left-2 h-2 w-9 rounded-full bg-white/70" />
            </span>
            <div className="min-w-0 px-2 py-1.5">
              <span className="mb-0.5 inline-flex h-4 items-center rounded-full bg-cyan-50 px-1.5 text-[9px] font-bold text-cyan-700">
                {item.badge}
              </span>
              <span className="block truncate text-xs font-bold text-slate-950">
                {item.title}
              </span>
              <span className="block truncate text-[10px] font-semibold text-slate-500">
                {item.description}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
