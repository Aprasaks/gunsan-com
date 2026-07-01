import Link from "next/link";

import Header from "@/components/Header";
import { featuredPlaces } from "@/data/featuredPlaces";

export default function MapPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-100 bg-white px-4 py-7 sm:px-6 lg:py-8">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-cyan-700">군산 지도</p>
              <h1 className="mt-2 text-2xl font-bold leading-tight text-slate-950 sm:text-4xl">
                지도에서 군산 보기
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                대표 장소를 지도 기준으로 둘러볼 수 있도록 준비하고
                있습니다. 실제 위치 정보는 공식 지도 연결 후 제공합니다.
              </p>
            </div>

            <Link
              href="/places"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
            >
              장소 목록 보기
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 py-5 sm:px-6 lg:py-7">
        <div className="mx-auto grid w-full max-w-[1440px] gap-4 lg:grid-cols-[minmax(0,1fr)_360px]">
          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-cyan-700">지도 영역</p>
              <h2 className="mt-1 text-lg font-bold text-slate-950">
                군산 대표 장소 지도
              </h2>
            </div>

            <div className="p-3 sm:p-4">
              <div
                className="relative min-h-[360px] overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 sm:min-h-[440px]"
                aria-label="지도 기능 준비 영역"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_78%_72%,rgba(20,184,166,0.16),transparent_28%)]" />
                <div className="absolute left-[-12%] top-16 h-12 w-[72%] rotate-[-9deg] rounded-full border border-sky-200/80 bg-white/20" />
                <div className="absolute bottom-20 right-[-14%] h-14 w-[80%] rotate-[7deg] rounded-full border border-cyan-200/80 bg-white/25" />
                <div className="absolute left-[12%] top-[58%] h-10 w-[52%] rotate-[18deg] rounded-full border border-slate-200/70 bg-white/20" />

                <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-cyan-600/10">
                  <span className="relative h-16 w-16 rounded-full bg-cyan-700 shadow-sm shadow-cyan-900/10">
                    <span className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-lg border border-white/80 bg-white/85 p-3 shadow-sm shadow-slate-200/60 backdrop-blur">
                  <p className="text-sm font-bold text-slate-950">
                    대표 장소를 지도 기준으로 볼 수 있게 준비하고 있습니다.
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    좌표, 거리, 현재 위치 정보는 공식 지도 연결 후 검증된
                    값만 표시합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <aside className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-cyan-700">
                  대표 장소
                </p>
                <h2 className="mt-1 text-lg font-bold text-slate-950">
                  지도에서 함께 볼 장소
                </h2>
              </div>
            </div>

            <div className="mt-3 space-y-2">
              {featuredPlaces.map((place) => (
                <article
                  key={place.slug}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="min-w-0 truncate text-sm font-bold text-slate-950">
                      {place.name}
                    </h3>
                    <span className="shrink-0 rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-bold text-cyan-700">
                      {place.badge}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {place.meta}
                  </p>
                  <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-600">
                    {place.description}
                  </p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
