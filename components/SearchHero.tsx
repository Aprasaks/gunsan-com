import Link from "next/link";

export default function SearchHero() {
  return (
    <section className="bg-sky-50 px-5 py-14 sm:px-6 lg:py-20">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_420px] lg:items-center">
        <div>
          <p className="mb-4 text-sm font-semibold text-cyan-700">군산.com</p>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산에서 매번 다시 물어봐야 했던 정보를 확인하세요
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            검색해도 애매한 군산 생활 정보를 한곳에 모아 검증합니다.
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
