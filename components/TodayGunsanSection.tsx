import Link from "next/link";

import { getGunsanAirQuality } from "@/lib/api/airQuality";
import { getGunsanCurrentWeather } from "@/lib/api/weather";

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
  const today = new Date();
  const todayLabel = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  }).format(today);

  const todayItems: TodayInfoItem[] = [
    {
      key: "weather",
      label: "날씨",
      value: weather
        ? `${weather.temperatureCelsius}℃ · ${weather.label}`
        : "확인 중",
      icon: weather?.icon ?? "☀",
    },
    {
      key: "air-quality",
      label: "미세먼지",
      value:
        airQuality.grade === "unknown"
          ? "확인 중"
          : airQuality.label,
      icon: "≋",
    },
    {
      key: "sunset",
      label: "일몰 시간",
      value: "확인 중",
      icon: "◐",
    },
    {
      key: "today-event",
      label: "오늘의 행사",
      value: "공식 출처 확인",
      icon: "•",
    },
  ];

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm shadow-slate-200/40">
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-cyan-700">오늘의 군산</p>
          <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
            오늘의 군산
          </h2>
        </div>
        <time
          dateTime={today.toISOString()}
          className="mt-0.5 shrink-0 text-[11px] font-semibold text-slate-500"
        >
          {todayLabel}
        </time>
      </div>

      <div className="mt-2 divide-y divide-slate-100 border-y border-slate-100">
        {todayItems.map((item) => (
          <div
            key={item.key}
            className="flex min-h-8 items-center justify-between gap-2 py-1.5"
          >
            <div className="flex min-w-0 items-center gap-1.5">
              <span
                className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-cyan-50 text-[10px] font-bold text-cyan-800"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <p className="truncate text-xs font-semibold text-slate-600">
                {item.label}
              </p>
            </div>
            <p className="shrink-0 text-right text-xs font-bold text-slate-900">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-2 text-[11px] font-semibold leading-4 text-slate-500">
        방문 전 최신 정보를 한 번 더 확인해 주세요.
      </p>
      <Link
        href="/places"
        className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
      >
        더 많은 생활정보 보기
      </Link>
    </section>
  );
}
