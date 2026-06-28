"use client";

import CategoryTabs from "@/components/CategoryTabs";
import FilterPanel from "@/components/FilterPanel";
import Header from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import QuickQuestionChips from "@/components/QuickQuestionChips";
import RightSidebar from "@/components/RightSidebar";
import SearchHero from "@/components/SearchHero";
import { places } from "@/data/places";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-6xl">
          <p className="text-sm font-semibold text-cyan-700">군산.com</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산의 모든 것, 군산.com에서 확인하세요
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            맛집부터 생활업체, 여행, 행사까지 군산 정보를 한곳에 모읍니다.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            업체 제공 정보와 방문자 확인 정보를 구분해 더 정확한 군산 정보를
            만들어갑니다.
          </p>
        </div>
      </section>

      <SearchHero />
      <QuickQuestionChips />
      <CategoryTabs />

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[288px_minmax(0,1fr)_320px] lg:items-start">
          <FilterPanel />

          <section aria-label="장소 목록" className="space-y-4">
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
