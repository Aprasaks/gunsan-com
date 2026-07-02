import Link from "next/link";

import Header from "@/components/Header";
import LocationPermissionPanel from "@/components/LocationPermissionPanel";
import MapCategoryTabs from "@/components/MapCategoryTabs";
import NearbyPlaceList from "@/components/NearbyPlaceList";

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
                내 주변 군산 찾기
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                현재 위치 또는 동네 기준으로 가까운 군산 정보를 둘러볼 수
                있습니다. 위치 정보는 사용자가 요청할 때만 확인하고 저장하지
                않습니다.
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
        <div className="mx-auto grid w-full max-w-[1440px] gap-4 lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="order-2 space-y-3 lg:order-1">
            <LocationPermissionPanel />
            <MapCategoryTabs />
            <NearbyPlaceList />
          </aside>

          <section className="order-1 overflow-hidden rounded-xl border border-slate-200 bg-white lg:order-2">
            <div className="border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-cyan-700">지도 영역</p>
              <h2 className="mt-1 text-lg font-bold text-slate-950">
                위치 기반 탐색 준비
              </h2>
            </div>

            <div className="p-3 sm:p-4">
              <div
                className="relative min-h-[340px] overflow-hidden rounded-xl border border-cyan-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 sm:min-h-[460px]"
                aria-label="위치 기반 지도 기능 준비 영역"
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
                    위치 기반 장소 데이터 준비 중
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    지도 API, 검증된 좌표, 장소 데이터가 연결된 뒤 실제 주변
                    결과를 표시합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
