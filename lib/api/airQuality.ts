export type AirQualityGrade = "good" | "normal" | "bad" | "very-bad" | "unknown";

export type AirQualitySummary = {
  grade: AirQualityGrade;
  label: string;
  stationName?: string;
  measuredAt?: string;
};

type AirKoreaItem = {
  stationName?: unknown;
  dataTime?: unknown;
  pm10Grade?: unknown;
  pm10Grade1h?: unknown;
};

type AirKoreaResponse = {
  response?: {
    body?: {
      items?: unknown;
    };
  };
};

const AIRKOREA_API_BASE_URL =
  "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";

const AIR_QUALITY_FALLBACK: AirQualitySummary = {
  grade: "unknown",
  label: "확인 중",
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function parseAirKoreaResponse(value: unknown): AirKoreaItem[] {
  if (!isRecord(value)) {
    return [];
  }

  const response = value as AirKoreaResponse;
  const items = response.response?.body?.items;

  if (!Array.isArray(items)) {
    return [];
  }

  return items
    .filter(isRecord)
    .map((item) => ({
      stationName: item.stationName,
      dataTime: item.dataTime,
      pm10Grade: item.pm10Grade,
      pm10Grade1h: item.pm10Grade1h,
    }));
}

function getGradeLabel(gradeValue: string): AirQualitySummary {
  if (gradeValue === "1") {
    return { grade: "good", label: "좋음" };
  }

  if (gradeValue === "2") {
    return { grade: "normal", label: "보통" };
  }

  if (gradeValue === "3") {
    return { grade: "bad", label: "나쁨" };
  }

  if (gradeValue === "4") {
    return { grade: "very-bad", label: "매우 나쁨" };
  }

  return AIR_QUALITY_FALLBACK;
}

function getGunsanStationItem(items: AirKoreaItem[]): AirKoreaItem | null {
  return (
    items.find(
      (item) =>
        typeof item.stationName === "string" && item.stationName.includes("군산"),
    ) ?? null
  );
}

export async function getGunsanAirQuality(): Promise<AirQualitySummary> {
  const serviceKey = process.env.AIRKOREA_SERVICE_KEY;

  if (!serviceKey) {
    return AIR_QUALITY_FALLBACK;
  }

  const apiUrl =
    `${AIRKOREA_API_BASE_URL}?serviceKey=${serviceKey}` +
    "&returnType=json&numOfRows=100&pageNo=1&sidoName=%EC%A0%84%EB%B6%81&ver=1.0";

  try {
    const response = await fetch(apiUrl, {
      next: { revalidate: 600 },
    });

    if (!response.ok) {
      return AIR_QUALITY_FALLBACK;
    }

    const items = parseAirKoreaResponse(await response.json());
    const stationItem = getGunsanStationItem(items);

    if (!stationItem) {
      return AIR_QUALITY_FALLBACK;
    }

    const gradeValue =
      typeof stationItem.pm10Grade1h === "string"
        ? stationItem.pm10Grade1h
        : stationItem.pm10Grade;

    if (typeof gradeValue !== "string") {
      return AIR_QUALITY_FALLBACK;
    }

    const summary = getGradeLabel(gradeValue);

    return {
      ...summary,
      stationName:
        typeof stationItem.stationName === "string"
          ? stationItem.stationName
          : undefined,
      measuredAt:
        typeof stationItem.dataTime === "string" ? stationItem.dataTime : undefined,
    };
  } catch {
    return AIR_QUALITY_FALLBACK;
  }
}
