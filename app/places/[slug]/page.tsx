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

type InfoRow = {
  key: string;
  label: string;
  value: string;
};

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
  const needsVerification = place.statuses.some(
    (status) => status === "확인 필요" || status === "폐업/이전 확인 필요",
  );

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-100 bg-white px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm font-semibold text-cyan-700">장소 상세</p>

          <p className="mt-4 text-sm font-medium text-slate-500">
            {place.category} · {place.area}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            {place.name}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {place.description}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-500">
            방문 전 참고할 수 있도록 업체가 알려준 정보와 방문자가 확인한
            정보를 나눠서 보여줍니다.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {place.statuses.map((status) => (
              <StatusBadge key={status} status={status} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {place.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <dl className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="font-semibold text-slate-800">후기 수</dt>
              <dd className="mt-1">{place.reviewCount}개</dd>
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
              <dt className="font-semibold text-slate-800">최근 확인일</dt>
              <dd className="mt-1">{place.lastVerifiedAt}</dd>
            </div>
            {place.address ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <dt className="font-semibold text-slate-800">주소</dt>
                <dd className="mt-1">{place.address}</dd>
              </div>
            ) : null}
            {place.phone ? (
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <dt className="font-semibold text-slate-800">전화</dt>
                <dd className="mt-1">{place.phone}</dd>
              </div>
            ) : null}
          </dl>

          {needsVerification ? (
            <div className="mt-6 rounded-xl border border-yellow-200 bg-yellow-50 p-4">
              <h2 className="text-sm font-bold text-yellow-900">
                확인이 필요한 정보가 있습니다
              </h2>
              <p className="mt-2 text-sm leading-6 text-yellow-900/80">
                아직 최신 정보 확인이 필요한 항목이 있습니다. 방문 전 영업
                여부나 휴무일은 한 번 더 확인해주세요.
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-sky-200 bg-sky-50 p-5">
            <div className="border-b border-sky-100 pb-4">
              <p className="text-sm font-semibold text-sky-700">
                사장님 또는 업체가 알려준 정보
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-950">
                업체 제공 정보
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              사장님 또는 업체가 제공한 정보입니다. 방문 전 변동 가능성이 있는
              정보는 한 번 더 확인하는 것이 좋습니다.
            </p>
            <dl className="mt-5 space-y-4">
              {ownerRows.map((row) => (
                <div
                  key={row.key}
                  className="rounded-lg border border-sky-100 bg-white p-4"
                >
                  <dt className="text-sm font-semibold text-slate-800">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="border-b border-emerald-100 pb-4">
              <p className="text-sm font-semibold text-emerald-700">
                실제 방문 기준으로 확인하는 정보
              </p>
              <h2 className="mt-1 text-xl font-bold text-slate-950">
                방문자 확인 정보
              </h2>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              실제 방문자 제보나 확인 내용을 기준으로 정리하는 영역입니다.
            </p>
            <dl className="mt-5 space-y-4">
              {visitorRows.map((row) => (
                <div
                  key={row.key}
                  className="rounded-lg border border-emerald-100 bg-white p-4"
                >
                  <dt className="text-sm font-semibold text-slate-800">
                    {row.label}
                  </dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-xl border border-cyan-200 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-950">
            정보가 달라졌나요?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            영업시간, 휴무일, 주차, 위치가 실제와 다르다면 알려주세요.
            군산.com은 제보를 바탕으로 정보를 더 정확하게 정리합니다.
          </p>
          <Link
            href="/submit"
            className="mt-4 inline-flex h-10 items-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
          >
            정보 차이 제보하기
          </Link>
        </div>
      </section>
    </main>
  );
}
