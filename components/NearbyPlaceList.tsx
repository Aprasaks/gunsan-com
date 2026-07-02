"use client";

import { useState } from "react";

const neighborhoods = ["월명동", "수송동", "나운동", "미장동", "소룡동"] as const;

export default function NearbyPlaceList() {
  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState<(typeof neighborhoods)[number]>("월명동");

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-cyan-700">동네 선택</p>
      <h2 className="mt-1 text-lg font-bold text-slate-950">
        동네 기준으로 보기
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        위치 권한을 사용하지 않아도 동네 기준으로 군산 정보를 둘러볼 수
        있게 준비합니다.
      </p>

      <div className="mt-3 grid grid-cols-2 gap-1.5 sm:grid-cols-5 lg:grid-cols-2">
        {neighborhoods.map((neighborhood) => {
          const isSelected = selectedNeighborhood === neighborhood;

          return (
            <button
              key={neighborhood}
              type="button"
              className={[
                "h-9 rounded-lg border px-2 text-xs font-bold transition",
                isSelected
                  ? "border-cyan-600 bg-cyan-50 text-cyan-800"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-cyan-200 hover:bg-cyan-50",
              ].join(" ")}
              onClick={() => {
                setSelectedNeighborhood(neighborhood);
              }}
            >
              {neighborhood}
            </button>
          );
        })}
      </div>

      <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
        <p className="text-xs font-bold text-slate-700">
          {selectedNeighborhood} 기준 장소 데이터 준비 중
        </p>
        <p className="mt-1 text-xs leading-5 text-slate-500">
          실제 장소 목록과 위치 기반 정보는 검증된 위치 데이터 연결 후
          표시합니다.
        </p>
      </div>
    </section>
  );
}
