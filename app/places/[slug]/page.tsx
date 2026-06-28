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
  { key: "openingHours", label: "운영 시간" },
  { key: "closedDays", label: "휴무일" },
  { key: "parking", label: "주차" },
  { key: "reservation", label: "예약" },
  { key: "priceNote", label: "가격 메모" },
  { key: "contactNote", label: "문의 메모" },
];

const visitorInfoFields: {
  key: keyof PlaceVisitorInfo;
  label: string;
}[] = [
  { key: "parkingNote", label: "주차 확인" },
  { key: "visitNote", label: "방문 메모" },
  { key: "maleFriendlyNote", label: "남자 이용" },
  { key: "kidFriendlyNote", label: "아이 동반" },
  { key: "photoNote", label: "방문자 사진" },
];

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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <div className="flex flex-wrap gap-2">
            {place.statuses.map((status) => (
              <StatusBadge key={status} status={status} />
            ))}
          </div>

          <p className="mt-5 text-sm font-medium text-slate-500">
            {place.area} · {place.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            {place.name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            {place.description}
          </p>

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
            <div>
              <dt className="font-semibold text-slate-800">후기 수</dt>
              <dd className="mt-1">{place.reviewCount}개</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">최근 확인일</dt>
              <dd className="mt-1">{place.lastVerifiedAt}</dd>
            </div>
            {place.address ? (
              <div>
                <dt className="font-semibold text-slate-800">주소</dt>
                <dd className="mt-1">{place.address}</dd>
              </div>
            ) : null}
            {place.phone ? (
              <div>
                <dt className="font-semibold text-slate-800">전화</dt>
                <dd className="mt-1">{place.phone}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-2">
          <section className="rounded-xl border border-sky-100 bg-sky-50 p-5">
            <h2 className="text-lg font-bold text-slate-950">업체 제공 정보</h2>
            <p className="mt-1 text-sm text-slate-500">
              사장님 또는 업체가 제공한 정보입니다. 방문 전 최신 여부를 확인하세요.
            </p>
            <dl className="mt-5 space-y-4">
              {ownerInfoFields.map(({ key, label }) => {
                const value = place.ownerInfo[key];

                return value ? (
                  <div key={key}>
                    <dt className="text-sm font-semibold text-slate-800">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-600">
                      {value}
                    </dd>
                  </div>
                ) : null;
              })}
            </dl>
          </section>

          <section className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
            <h2 className="text-lg font-bold text-slate-950">
              방문자 확인 정보
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              실제 방문자 제보 또는 확인 정보가 들어갈 영역입니다.
            </p>
            <dl className="mt-5 space-y-4">
              {visitorInfoFields.map(({ key, label }) => {
                const value = place.visitorInfo[key];

                return value ? (
                  <div key={key}>
                    <dt className="text-sm font-semibold text-slate-800">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-slate-600">
                      {value}
                    </dd>
                  </div>
                ) : null;
              })}
            </dl>
          </section>
        </div>
      </section>

      <section className="px-5 pb-12 sm:px-6">
        <div className="mx-auto max-w-5xl rounded-xl border border-cyan-100 bg-white p-5">
          <h2 className="text-lg font-bold text-slate-950">
            정보가 달라졌나요?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            실제 방문 정보와 다르다면 제보해주세요.
          </p>
          <Link
            href="/submit"
            className="mt-4 inline-flex h-10 items-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
          >
            제보하기
          </Link>
        </div>
      </section>
    </main>
  );
}
