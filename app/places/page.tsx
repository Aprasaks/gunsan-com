"use client";

import CategoryTabs from "@/components/CategoryTabs";
import FilterPanel from "@/components/FilterPanel";
import Header from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import RightSidebar from "@/components/RightSidebar";
import { places } from "@/data/places";

export default function PlacesPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-semibold text-cyan-700">장소 탐색</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산 장소 둘러보기
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            맛집, 카페, 병원, 생활업체까지 군산 정보를 한곳에서 확인하세요.
          </p>
        </div>
      </section>

      <CategoryTabs />

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[288px_minmax(0,1fr)_320px] lg:items-start">
          <FilterPanel />

          <section aria-label="군산 장소 목록" className="space-y-4">
            {places.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </section>

          <RightSidebar />
        </div>
      </section>
    </main>
  );
}
