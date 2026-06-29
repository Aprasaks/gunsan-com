import Link from "next/link";

const quickLinks = [
  { label: "장소 둘러보기", href: "/places", active: true },
  { label: "정보 제보", href: "/submit", active: true },
  { label: "사장님 등록", href: "/owners", active: true },
  { label: "행사 준비 중", active: false },
] as const;

export default function SearchHero() {
  return (
    <section className="border-b border-sky-100 bg-sky-50 px-4 py-7 sm:px-6 lg:py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1fr)_410px] lg:items-center">
        <div className="min-w-0">
          <p className="inline-flex rounded-full border border-cyan-200 bg-white px-3 py-1.5 text-sm font-semibold text-cyan-800">
            군산 대표 정보 포털
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산의 모든 것,
            <br className="hidden sm:block" /> 군산.com에서 시작하세요
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            밥 먹을 곳, 쉬어갈 카페, 급하게 찾는 병원, 주차 되는 곳부터
            군산 여행 정보까지. 군산에서 필요한 정보를 하나씩 모으고
            있습니다.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            사장님이 알려준 정보와 실제 다녀온 사람이 확인한 정보를 나눠서
            보여줍니다.
          </p>

          <div className="mt-5 max-w-2xl rounded-xl border border-slate-200 bg-white p-2">
            <label htmlFor="home-search" className="sr-only">
              군산 정보 검색
            </label>
            <div className="flex flex-col gap-2 sm:flex-row">
              <input
                id="home-search"
                type="search"
                placeholder="맛집, 병원, 카페, 행사 등 군산의 정보를 검색해 보세요"
                className="min-h-11 flex-1 rounded-lg border border-transparent bg-slate-50 px-4 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />
              <Link
                href="/places"
                className="inline-flex min-h-11 items-center justify-center rounded-lg bg-cyan-700 px-5 text-sm font-semibold text-white transition hover:bg-cyan-800"
              >
                둘러보기
              </Link>
            </div>
          </div>

          <div className="mt-4 grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
            {quickLinks.map((item) =>
              item.active ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-cyan-200 bg-white px-3 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.label}
                  className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 bg-white/70 px-3 text-sm font-semibold text-slate-500"
                >
                  {item.label}
                </span>
              ),
            )}
          </div>
        </div>

        <div className="min-w-0 overflow-hidden rounded-xl border border-sky-100 bg-white">
          <div className="flex flex-col justify-between p-4 sm:min-h-72 sm:p-5">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-semibold text-cyan-700">
                  군산의 오늘
                </p>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-500">
                  준비 중 정보 포함
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {["새만금", "금강", "은파", "근대거리"].map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-800"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3 lg:grid-cols-1">
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  생활 정보
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  병원 · 주차 · 생활업체
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  여행 정보
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  은파 · 새만금 · 근대거리
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-500">
                  확장 예정
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  지도 · 행사 · 동네별 보기
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
