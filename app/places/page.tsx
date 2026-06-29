"use client";

import CategoryTabs from "@/components/CategoryTabs";
import FilterPanel from "@/components/FilterPanel";
import Header from "@/components/Header";
import PlaceCard from "@/components/PlaceCard";
import RightSidebar from "@/components/RightSidebar";
import { places } from "@/data/places";

export default function PlacesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-100 bg-white px-4 py-7 sm:px-6 lg:py-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-cyan-700">장소 탐색</p>
              <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
                군산 장소 둘러보기
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                밥 먹을 곳, 쉬어갈 카페, 급하게 찾는 병원과 생활업체까지.
                군산에서 필요한 장소를 조건별로 둘러보세요.
              </p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
                업체가 알려준 정보와 방문자가 확인한 정보를 나눠서
                보여줍니다.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <span className="inline-flex h-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-sm font-semibold text-cyan-800">
                목록으로 보기
              </span>
              <span className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-500">
                지도에서 보기 준비 중
              </span>
            </div>
          </div>
        </div>
      </section>

      <CategoryTabs />

      <section className="px-4 py-6 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-5 lg:grid-cols-[288px_minmax(0,1fr)_320px] lg:items-start">
          <FilterPanel />

          <section aria-label="군산 장소 목록" className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <p className="text-sm font-semibold text-cyan-700">장소 목록</p>
              <h2 className="mt-2 text-xl font-bold text-slate-950 sm:text-2xl">
                조건에 맞는 군산 장소를 비교하세요
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                카테고리와 확인 상태를 보면서 장소 정보를 빠르게 비교할 수
                있습니다. 지금은 목록 중심으로 먼저 정리하고 있습니다.
              </p>
            </div>
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
