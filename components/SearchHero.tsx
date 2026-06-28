import Link from "next/link";

export default function SearchHero() {
  return (
    <section className="bg-sky-50 px-5 py-8 sm:px-6 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_380px] lg:items-center">
        <div>
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산의 모든 것,
            <br className="hidden sm:block" /> 군산.com에서 확인하세요
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg">
            밥 먹을 곳, 쉬어갈 카페, 급하게 찾는 병원, 주차 되는 곳까지.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            사장님이 알려준 정보와 실제 다녀온 사람이 확인한 정보를 나눠서
            보여줍니다.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="overflow-hidden rounded-xl border border-sky-100">
            <div className="flex h-40 items-end bg-gradient-to-br from-sky-100 to-cyan-50 p-5 lg:h-44">
              <div>
                <p className="text-xs font-semibold tracking-wider text-sky-700">
                  군산의 오늘
                </p>
                <p className="mt-1 text-sm font-medium text-slate-700">
                  군산에서 필요한 정보를 하나씩 모으고 있습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
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
