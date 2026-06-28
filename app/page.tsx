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

      <SearchHero />
      <QuickQuestionChips />
      <CategoryTabs />

      <section className="px-5 py-6 sm:px-6 lg:py-8">
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
