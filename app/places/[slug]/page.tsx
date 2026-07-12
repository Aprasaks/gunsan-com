import Link from "next/link";
import { notFound } from "next/navigation";

import Header from "@/components/Header";
import StatusBadge from "@/components/StatusBadge";
import { places } from "@/data/places";
import type { PlaceOwnerInfo, PlaceVisitorInfo } from "@/types/place";

type PlaceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type InfoRow = {
  key: string;
  label: string;
  value: string;
};

const ownerInfoFields: {
  key: keyof PlaceOwnerInfo;
  label: string;
}[] = [
  { key: "openingHours", label: "영업시간" },
  { key: "closedDays", label: "휴무일" },
  { key: "parking", label: "주차" },
  { key: "reservation", label: "예약" },
  { key: "priceNote", label: "가격/메뉴 참고" },
  { key: "contactNote", label: "문의 안내" },
];

const visitorInfoFields: {
  key: keyof PlaceVisitorInfo;
  label: string;
}[] = [
  { key: "parkingNote", label: "주차 체감" },
  { key: "visitNote", label: "방문 분위기" },
  { key: "maleFriendlyNote", label: "남자 이용 가능 여부" },
  { key: "kidFriendlyNote", label: "아이와 함께 가기 좋은지" },
  { key: "photoNote", label: "사진 참고 정보" },
];

function getOwnerRows(ownerInfo: PlaceOwnerInfo): InfoRow[] {
  return ownerInfoFields.flatMap(({ key, label }) => {
    const value = ownerInfo[key];

    return value ? [{ key, label, value }] : [];
  });
}

function getVisitorRows(visitorInfo: PlaceVisitorInfo): InfoRow[] {
  return visitorInfoFields.flatMap(({ key, label }) => {
    const value = visitorInfo[key];

    return value ? [{ key, label, value }] : [];
  });
}

function getBasicRows({
  area,
  address,
  phone,
  openingHours,
  lastVerifiedAt,
}: {
  area: string;
  address?: string;
  phone?: string;
  openingHours?: string;
  lastVerifiedAt: string;
}): InfoRow[] {
  return [
    { key: "area", label: "지역", value: area },
    openingHours
      ? { key: "openingHours", label: "영업시간", value: openingHours }
      : null,
    address ? { key: "address", label: "주소", value: address } : null,
    phone ? { key: "phone", label: "전화", value: phone } : null,
    { key: "lastVerifiedAt", label: "정보 기준일", value: lastVerifiedAt },
  ].filter((row): row is InfoRow => row !== null);
}

function getTravelRows({
  description,
  area,
  tags,
  parking,
  openingHours,
  kidFriendlyNote,
  lastVerifiedAt,
  stayDuration,
  nearbyPlaces,
  rainyDaySuitability,
}: {
  description: string;
  area: string;
  tags: string[];
  parking?: string;
  openingHours?: string;
  kidFriendlyNote?: string;
  lastVerifiedAt: string;
  stayDuration?: string;
  nearbyPlaces?: string[];
  rainyDaySuitability?: string;
}): InfoRow[] {
  return [
    { key: "summary", label: "한 줄 요약", value: description },
    { key: "recommendedFor", label: "추천 상황", value: tags.slice(0, 3).join(" · ") },
    { key: "area", label: "위치/지역", value: area },
    stayDuration ? { key: "stayDuration", label: "체류 시간", value: stayDuration } : null,
    nearbyPlaces?.length
      ? { key: "nearbyPlaces", label: "같이 가기 좋은 곳", value: nearbyPlaces.join(" · ") }
      : null,
    parking ? { key: "parking", label: "주차 정보", value: parking } : null,
    openingHours ? { key: "openingHours", label: "운영시간", value: openingHours } : null,
    kidFriendlyNote ? { key: "kidFriendly", label: "아이 동반", value: kidFriendlyNote } : null,
    rainyDaySuitability
      ? { key: "rainyDay", label: "비 오는 날", value: rainyDaySuitability }
      : null,
    { key: "lastVerifiedAt", label: "마지막 확인 날짜", value: lastVerifiedAt },
  ].filter((row): row is InfoRow => row !== null);
}

export function generateStaticParams() {
  return places.map((place) => ({
    slug: place.slug,
  }));
}

export default async function PlaceDetailPage({ params }: PlaceDetailPageProps) {
  const { slug } = await params;
  const place = places.find((item) => item.slug === slug);

  if (!place) {
    notFound();
  }

  const ownerRows = getOwnerRows(place.ownerInfo);
  const visitorRows = getVisitorRows(place.visitorInfo);
  const basicRows = getBasicRows({
    area: place.area,
    address: place.address,
    phone: place.phone,
    openingHours: place.ownerInfo.openingHours,
    lastVerifiedAt: place.lastVerifiedAt,
  });
  const travelRows = getTravelRows({
    description: place.description,
    area: place.area,
    tags: place.travelGuide?.recommendedFor ?? place.tags,
    parking: place.visitorInfo.parkingNote ?? place.ownerInfo.parking,
    openingHours: place.ownerInfo.openingHours,
    kidFriendlyNote: place.visitorInfo.kidFriendlyNote,
    lastVerifiedAt: place.lastVerifiedAt,
    stayDuration: place.travelGuide?.stayDuration,
    nearbyPlaces: place.travelGuide?.nearbyPlaces,
    rainyDaySuitability: place.travelGuide?.rainyDaySuitability,
  });
  const needsVerification = place.statuses.some(
    (status) => status === "확인 필요" || status === "폐업/이전 확인 필요",
  );

  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <section className="px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1200px]">
          <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/places"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-slate-200 bg-white px-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800 sm:w-auto"
            >
              장소 목록으로 돌아가기
            </Link>
            <Link
              href="/submit"
              className="inline-flex h-9 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 sm:w-auto"
            >
              정보가 다르면 제보해주세요
            </Link>
          </div>

          <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/50 sm:p-5">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="min-w-0">
                <p className="text-sm font-bold text-cyan-700">
                  {place.category} · {place.area}
                </p>
                <h1 className="mt-1 text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
                  {place.name}
                </h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base">
                  {place.description}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                {place.statuses.map((status) => (
                  <StatusBadge key={status} status={status} />
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {place.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="mt-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40 sm:p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold text-cyan-700">방문자 관점으로 다시 정리</p>
                <h2 className="mt-1 text-xl font-black text-slate-950">가기 전에 한눈에 확인하세요</h2>
              </div>
              {place.travelGuide?.officialUrl ? (
                <a
                  href={place.travelGuide.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-cyan-800 underline underline-offset-4"
                >
                  공식 정보 확인 ↗
                </a>
              ) : null}
            </div>
            <dl className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {travelRows.map((row) => (
                <div key={row.key} className="rounded-xl border border-slate-200 bg-[#fbfaf7] p-3">
                  <dt className="text-xs font-extrabold text-slate-500">{row.label}</dt>
                  <dd className="mt-1 text-sm font-semibold leading-5 text-slate-800">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mt-3 grid gap-3 lg:grid-cols-[0.9fr_1.1fr_1.1fr]">
            <InfoCard
              title="기본 정보"
              description="방문 전에 먼저 확인할 항목입니다."
              rows={basicRows}
              tone="slate"
            />
            <InfoCard
              title="업체 제공 정보"
              description="사장님 또는 업체가 제공한 정보입니다."
              rows={ownerRows}
              tone="sky"
            />
            <InfoCard
              title="방문자 확인 정보"
              description="방문자 제보나 확인 내용을 따로 정리합니다."
              rows={visitorRows}
              tone="emerald"
            />
          </section>

          {needsVerification ? (
            <section className="mt-3 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
              <h2 className="text-sm font-bold text-yellow-950">
                확인이 필요한 정보가 있습니다
              </h2>
              <p className="mt-1 text-sm leading-6 text-yellow-900/85">
                영업 여부, 휴무일, 주차처럼 변동 가능성이 있는 항목은 방문 전
                한 번 더 확인하는 것이 좋습니다.
              </p>
            </section>
          ) : null}

          <section className="mt-3 rounded-xl border border-cyan-200 bg-white p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-950">
                  정보가 다르다면 제보해주세요
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  영업시간, 휴무일, 주차, 위치가 실제와 다르면 알려주세요.
                </p>
              </div>
              <Link
                href="/submit"
                className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800 sm:w-auto"
              >
                정보 차이 제보하기
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  title,
  description,
  rows,
  tone,
}: {
  title: string;
  description: string;
  rows: InfoRow[];
  tone: "slate" | "sky" | "emerald";
}) {
  const toneClass = {
    slate: "border-slate-200 bg-white",
    sky: "border-sky-200 bg-sky-50",
    emerald: "border-emerald-200 bg-emerald-50",
  }[tone];

  const rowClass = {
    slate: "border-slate-200 bg-slate-50",
    sky: "border-sky-100 bg-white",
    emerald: "border-emerald-100 bg-white",
  }[tone];

  return (
    <section className={["rounded-xl border p-4", toneClass].join(" ")}>
      <h2 className="text-lg font-bold text-slate-950">{title}</h2>
      <p className="mt-1 text-sm leading-5 text-slate-600">{description}</p>

      <dl className="mt-3 grid gap-2">
        {rows.length > 0 ? (
          rows.map((row) => (
            <div key={row.key} className={["rounded-lg border p-3", rowClass].join(" ")}>
              <dt className="text-xs font-bold text-slate-700">{row.label}</dt>
              <dd className="mt-1 text-sm leading-5 text-slate-700">{row.value}</dd>
            </div>
          ))
        ) : (
          <div className={["rounded-lg border p-3", rowClass].join(" ")}>
            <p className="text-sm leading-5 text-slate-600">
              아직 표시할 정보가 없습니다.
            </p>
          </div>
        )}
      </dl>
    </section>
  );
}
