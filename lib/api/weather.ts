const GUNSAN_LATITUDE = 35.9677;
const GUNSAN_LONGITUDE = 126.7366;

type OpenMeteoCurrent = {
  temperature_2m?: unknown;
  weather_code?: unknown;
};

type OpenMeteoResponse = {
  current?: OpenMeteoCurrent;
};

export type CurrentWeather = {
  temperatureCelsius: number;
  weatherCode: number;
  label: string;
  icon: string;
};

const WEATHER_API_URL =
  `https://api.open-meteo.com/v1/forecast?latitude=${GUNSAN_LATITUDE}` +
  `&longitude=${GUNSAN_LONGITUDE}` +
  "&current=temperature_2m,weather_code&timezone=Asia%2FSeoul";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseOpenMeteoResponse(value: unknown): OpenMeteoResponse | null {
  if (!isRecord(value) || !isRecord(value.current)) {
    return null;
  }

  return {
    current: {
      temperature_2m: value.current.temperature_2m,
      weather_code: value.current.weather_code,
    },
  };
}

function getWeatherMeta(
  weatherCode: number,
): Pick<CurrentWeather, "icon" | "label"> {
  if (weatherCode === 0) {
    return { icon: "☀", label: "맑음" };
  }

  if ([1, 2, 3].includes(weatherCode)) {
    return { icon: "☁", label: "구름" };
  }

  if ([45, 48].includes(weatherCode)) {
    return { icon: "≋", label: "안개" };
  }

  if ([51, 53, 55, 56, 57].includes(weatherCode)) {
    return { icon: "☔", label: "이슬비" };
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) {
    return { icon: "☔", label: "비" };
  }

  if ([71, 73, 75, 77].includes(weatherCode)) {
    return { icon: "❄", label: "눈" };
  }

  if ([95, 96, 99].includes(weatherCode)) {
    return { icon: "⚡", label: "뇌우" };
  }

  return { icon: "☀", label: "날씨" };
}

export async function getGunsanCurrentWeather(): Promise<CurrentWeather | null> {
  try {
    const response = await fetch(WEATHER_API_URL, {
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      return null;
    }

    const data = parseOpenMeteoResponse(await response.json());
    const temperature = data?.current?.temperature_2m;
    const weatherCode = data?.current?.weather_code;

    if (
      typeof temperature !== "number" ||
      !Number.isFinite(temperature) ||
      typeof weatherCode !== "number" ||
      !Number.isFinite(weatherCode)
    ) {
      return null;
    }

    const roundedWeatherCode = Math.trunc(weatherCode);
    const meta = getWeatherMeta(roundedWeatherCode);

    return {
      temperatureCelsius: Math.round(temperature),
      weatherCode: roundedWeatherCode,
      label: meta.label,
      icon: meta.icon,
    };
  } catch {
    return null;
  }
}
