const popularItems = [
  { key: "gunsan-love-gift-card", label: "군산사랑상품권" },
  { key: "ferry-terminal", label: "여객선터미널" },
  { key: "eunpa-lake-park", label: "은파호수공원" },
  { key: "time-travel-festival", label: "군산시간여행축제" },
  { key: "saemangeum-seawall", label: "새만금방조제" },
  { key: "chowon-photo-studio", label: "초원사진관" },
  { key: "modern-history-museum", label: "군산근대역사박물관" },
  { key: "gunsan-city-civil-service", label: "군산시청 민원" },
  { key: "parking-info", label: "주차장 정보" },
  { key: "public-parking", label: "공영주차장" },
] as const;

export default function PopularInfoSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-3">
      <div>
        <p className="text-xs font-semibold text-cyan-700">군산 정보</p>
        <h2 className="mt-1 text-lg font-bold leading-tight text-slate-950">
          지금 많이 찾는 정보 🔥
        </h2>
      </div>

      <div className="mt-2.5 grid grid-cols-2 gap-1.5">
        {popularItems.map((item) => (
          <button
            key={item.key}
            type="button"
            aria-disabled="true"
            className="h-8 truncate rounded-full border border-cyan-100 bg-cyan-50/70 px-2.5 text-left text-xs font-bold text-slate-700"
          >
            {item.label}
          </button>
        ))}
      </div>
    </section>
  );
}
