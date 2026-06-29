import Link from "next/link";

const quickLinks = [
  { label: "장소 둘러보기", href: "/places", active: true },
  { label: "정보 제보", href: "/submit", active: true },
  { label: "사장님 안내", href: "/owners", active: true },
  { label: "지도에서 보기 준비 중", active: false },
] as const;

export default function SearchHero() {
  return (
    <section className="border-b border-sky-100 bg-slate-50 px-4 py-5 sm:px-6 lg:py-7">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-sky-100 bg-white">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_440px]">
          <div className="min-w-0 p-5 sm:p-7 lg:p-8">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1.5 text-sm font-semibold text-cyan-800">
              군산 대표 정보 포털
            </p>
            <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              군산의 모든 것,
              <br className="hidden sm:block" /> 군산.com에서 시작하세요
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
              맛집부터 생활정보, 여행과 행사까지 군산 정보를 한곳에 모으고
              있습니다.
            </p>
            <p className="mt-3 max-w-2xl text-sm font-semibold leading-6 text-slate-700 sm:text-base">
              군산에 산다면, 군산.com. 군산에 여행 가고 싶다면,
              군산.com.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
              사장님이 알려준 정보와 실제 다녀온 사람이 확인한 정보를 나눠서
              보여줍니다.
            </p>

            <div className="mt-5 max-w-2xl rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
              <label htmlFor="home-search" className="sr-only">
                군산 정보 검색
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="home-search"
                  type="search"
                  placeholder="맛집, 병원, 카페, 행사 등 군산의 정보를 검색해 보세요"
                  readOnly
                  className="min-h-11 flex-1 rounded-lg border border-transparent bg-slate-50 px-4 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
                <Link
                  href="/places"
                  className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-700 px-5 text-sm font-semibold text-white transition hover:bg-cyan-800"
                >
                  장소 둘러보기
                </Link>
              </div>
            </div>
            <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500">
              통합 검색은 준비 중입니다. 지금은 장소 목록에서 먼저 둘러볼 수
              있습니다.
            </p>

            <div className="mt-4 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
              {quickLinks.map((item) =>
                item.active ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    key={item.label}
                    className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm font-semibold text-slate-500"
                  >
                    {item.label}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden border-t border-sky-100 bg-sky-100 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(14,165,233,0.26),transparent_28%),radial-gradient(circle_at_78%_28%,rgba(20,184,166,0.22),transparent_30%),linear-gradient(135deg,#f0f9ff,#ecfeff_48%,#f8fafc)]" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:36px_36px]" />

            <div className="relative flex min-h-80 flex-col justify-between p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-xs font-semibold text-cyan-800">
                  이미지/GIF 자리
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500">
                  새만금 · 금강 · 은파 · 근대거리
                </span>
              </div>

              <div className="mt-6 grid gap-3">
                {[
                  ["오늘의 군산", "날씨 · 행사 준비 중"],
                  ["지도에서 보기", "지도 기능 준비 중"],
                  ["동네별 보기", "행정동 기준 정리 예정"],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-white/80 bg-white/85 p-4"
                  >
                    <p className="text-sm font-bold text-slate-950">
                      {title}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-white/80 bg-white/90 p-4">
                <p className="text-xs font-semibold text-slate-500">
                  추후 대표 비주얼
                </p>
                <p className="mt-1 text-lg font-bold text-slate-950">
                  군산의 생활과 여행 정보를 한 화면에서
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  실제 이미지, 영상, 지도 데이터는 이후 이슈에서 연결합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
