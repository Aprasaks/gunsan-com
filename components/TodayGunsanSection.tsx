import { getGunsanCurrentWeather } from "@/lib/weather";

type TodayInfoItem = {
  key: string;
  label: string;
  value: string;
  icon: string;
};

export default async function TodayGunsanSection() {
  const weather = await getGunsanCurrentWeather();

  const todayItems: TodayInfoItem[] = [
    {
      key: "weather",
      label: "날씨",
      value: weather
        ? `${weather.temperatureCelsius}℃ · ${weather.label}`
        : "군산 날씨 확인 중",
      icon: weather?.icon ?? "☀",
    },
    {
      key: "local-check",
      label: "생활 체크",
      value: "방문 전 영업시간 확인",
      icon: "✓",
    },
    {
      key: "trip-check",
      label: "여행 체크",
      value: "선유도·근대거리 이동 전 확인",
      icon: "→",
    },
  ];

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-3">
      <p className="text-xs font-semibold text-cyan-700">오늘의 군산</p>
      <h2 className="mt-1 text-lg font-bold leading-tight text-slate-950">
        나가기 전 확인
      </h2>

      <div className="mt-2.5 grid gap-2">
        {todayItems.map((item) => (
          <article
            key={item.key}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-2"
          >
            <span
              className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-white text-sm font-bold text-cyan-800"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-semibold text-slate-500">
                {item.label}
              </p>
              <p className="truncate text-sm font-bold text-slate-900">
                {item.value}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-2.5 rounded-lg border border-cyan-100 bg-cyan-50 px-2.5 py-2 text-xs font-semibold leading-4 text-cyan-900">
        행사와 이동 정보는 공식 출처를 확인해 주세요.
      </p>
    </section>
  );
}
