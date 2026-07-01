import { getGunsanAirQuality } from "@/lib/api/airQuality";
import { getGunsanCurrentWeather } from "@/lib/weather";

type TodayInfoItem = {
  key: string;
  label: string;
  value: string;
  icon: string;
};

export default async function TodayGunsanSection() {
  const [weather, airQuality] = await Promise.all([
    getGunsanCurrentWeather(),
    getGunsanAirQuality(),
  ]);

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
      key: "air-quality",
      label: "대기질",
      value:
        airQuality.grade === "unknown"
          ? "확인 중"
          : `미세먼지 ${airQuality.label}`,
      icon: "≋",
    },
    {
      key: "local-check",
      label: "생활 체크",
      value: "방문 전 영업시간 확인",
      icon: "✓",
    },
  ];

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5">
      <p className="text-xs font-semibold text-cyan-700">오늘의 군산</p>
      <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
        나가기 전 확인
      </h2>

      <div className="mt-2 grid gap-1.5">
        {todayItems.map((item) => (
          <article
            key={item.key}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5"
          >
            <span
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-xs font-bold text-cyan-800"
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

      <p className="mt-2 rounded-lg border border-cyan-100 bg-cyan-50 px-2 py-1.5 text-xs font-semibold leading-4 text-cyan-900">
        방문 전 최신 정보를 한 번 더 확인해 주세요.
      </p>
    </section>
  );
}
