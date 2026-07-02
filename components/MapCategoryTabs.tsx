"use client";

import { useState } from "react";

const mapCategories = [
  "맛집",
  "카페",
  "디저트",
  "관광",
  "병원·약국",
  "생활업체",
] as const;

export default function MapCategoryTabs() {
  const [selectedCategory, setSelectedCategory] =
    useState<(typeof mapCategories)[number]>("맛집");

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-cyan-700">카테고리</p>
      <h2 className="mt-1 text-lg font-bold text-slate-950">
        지도에서 볼 정보
      </h2>

      <div className="mt-3 flex flex-wrap gap-1.5" role="tablist">
        {mapCategories.map((category) => {
          const isSelected = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={isSelected}
              className={[
                "h-8 rounded-full border px-3 text-xs font-bold transition",
                isSelected
                  ? "border-cyan-600 bg-cyan-700 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-cyan-200 hover:bg-cyan-50",
              ].join(" ")}
              onClick={() => {
                setSelectedCategory(category);
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
        {selectedCategory} 위치 기반 정보는 준비 중입니다. 실제 위치 계산과
        주변 결과는 지도 API와 장소 데이터 연결 후 제공합니다.
      </p>
    </section>
  );
}
