import Link from "next/link";

export default function SearchHero() {
  return (
    <section className="bg-sky-50 px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산의 모든 것,
            <br className="hidden sm:block" /> 군산.com에서 확인하세요
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            맛집부터 생활업체, 여행, 행사까지 군산 정보를 한곳에 모읍니다.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            업체 제공 정보와 방문자 확인 정보를 구분해 더 정확한 군산 정보를
            만들어갑니다.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <label htmlFor="hero-search" className="sr-only">
            군산 생활 정보 검색
          </label>
          <input
            id="hero-search"
            type="search"
            placeholder="남자 네일, 일요일 병원, 주차 카페"
            className="h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
          />

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Link
              href="/places"
              className="flex h-11 items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
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
