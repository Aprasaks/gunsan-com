import Link from "next/link";

export default function SearchHero() {
  return (
    <section className="bg-sky-50 px-5 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
        <div>
          <p className="text-sm font-semibold text-cyan-700">
            군산에 산다면, 군산.com. 군산에 여행 가고 싶다면, 군산.com.
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산의 모든 것,
            <br className="hidden sm:block" /> 군산.com에서 시작하세요
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            밥 먹을 곳, 쉬어갈 카페, 급하게 찾는 병원, 주차 되는 곳까지.
            군산에서 필요한 정보를 하나씩 모으고 있습니다.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            사장님이 알려준 정보와 실제 다녀온 사람이 확인한 정보를 나눠서
            보여줍니다.
          </p>

          <div className="mt-6 max-w-2xl rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
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
        </div>

        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl border border-sky-100 bg-white">
            <div className="flex h-44 flex-col justify-between bg-white p-5 lg:h-52">
              <div className="grid grid-cols-3 gap-2">
                <span className="h-12 rounded-lg bg-sky-100" />
                <span className="h-12 rounded-lg bg-emerald-100" />
                <span className="h-12 rounded-lg bg-amber-100" />
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wider text-sky-700">
                  GUNSAN PORTAL
                </p>
                <p className="mt-2 text-lg font-bold text-slate-900">
                  생활 정보와 여행 정보를 한곳에서
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  필요한 정보는 빠르게 찾고, 확인이 필요한 정보는 분명하게
                  표시합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/places"
              className="flex h-11 items-center justify-center rounded-lg border border-cyan-200 bg-white px-4 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-50"
            >
              장소 둘러보기
            </Link>
            <Link
              href="/submit"
              className="flex h-11 items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
            >
              정보 제보하기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
