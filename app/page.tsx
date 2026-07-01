import Link from "next/link";

import EventFestivalSection from "@/components/EventFestivalSection";
import FeaturedPlaceCard from "@/components/FeaturedPlaceCard";
import Header from "@/components/Header";
import HomeCategoryGrid from "@/components/HomeCategoryGrid";
import MapPreviewSection from "@/components/MapPreviewSection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import PopularInfoSection from "@/components/PopularInfoSection";
import SearchHero from "@/components/SearchHero";
import TodayGunsanSection from "@/components/TodayGunsanSection";
import { featuredPlaces } from "@/data/featuredPlaces";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <SearchHero />

      <HomeCategoryGrid />

      <section className="px-4 pb-3 pt-2 sm:px-6 lg:px-8 lg:pb-4 lg:pt-2">
        <div className="mx-auto w-full max-w-[1440px] rounded-xl border border-slate-200 bg-white/80 p-2 shadow-sm shadow-slate-200/50">
          <div className="grid gap-2.5 lg:grid-cols-[minmax(0,0.56fr)_minmax(0,2.3fr)_minmax(0,0.56fr)]">
            <PopularInfoSection />

            <section className="rounded-lg border border-slate-200 bg-white p-2.5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeader
                  title="군산 장소 둘러보기"
                  description="대표 장소를 짧게 모았습니다."
                />
                <Link
                  href="/places"
                  aria-label="군산 장소 목록 페이지로 이동"
                  className="inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 sm:w-auto"
                >
                  더 보기
                </Link>
              </div>

              <div className="mt-2 grid gap-2 sm:grid-cols-2 xl:grid-cols-5">
                {featuredPlaces.map((place) => (
                  <FeaturedPlaceCard key={place.slug} place={place} />
                ))}
              </div>
            </section>

            <TodayGunsanSection />
          </div>

          <div className="mt-2 grid gap-2.5 lg:grid-cols-3">
            <EventFestivalSection />
            <MapPreviewSection />
            <NeighborhoodSection />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      {eyebrow ? (
        <p className="text-xs font-semibold text-cyan-700">{eyebrow}</p>
      ) : null}
      <h2 className="mt-0.5 max-w-3xl text-base font-bold leading-tight text-slate-950 sm:text-lg">
        {title}
      </h2>
      <p className="mt-0.5 max-w-3xl text-xs leading-5 text-slate-600">
        {description}
      </p>
    </div>
  );
}
