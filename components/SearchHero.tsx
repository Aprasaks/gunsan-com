import Link from "next/link";

const quickLinks = [
  { label: "장소 둘러보기", href: "/places", active: true },
  { label: "정보 제보", href: "/submit", active: true },
  { label: "사장님 안내", href: "/owners", active: true },
  { label: "지도에서 보기 준비 중", active: false },
] as const;

const visualKeywords = ["새만금", "금강", "은파", "근대거리"] as const;

const visualCards = [
  {
    title: "생활 정보",
    description: "병원 · 주차 · 생활업체",
    tone: "border-cyan-200 bg-white/90 text-cyan-900",
  },
  {
    title: "여행 정보",
    description: "은파 · 새만금 · 근대거리",
    tone: "border-sky-200 bg-white/90 text-sky-900",
  },
  {
    title: "확장 예정",
    description: "지도 · 행사 · 동네별 보기",
    tone: "border-slate-200 bg-white/85 text-slate-700",
  },
] as const;

export default function SearchHero() {
  return (
    <section className="border-b border-sky-100 bg-slate-50 px-4 py-5 sm:px-6 lg:py-6">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-sky-100 bg-white">
        <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_470px]">
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

          <div className="relative overflow-hidden border-t border-sky-100 bg-sky-50 lg:border-l lg:border-t-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgba(14,165,233,0.22),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(20,184,166,0.2),transparent_28%),linear-gradient(135deg,#f0f9ff,#ecfeff_45%,#f8fafc)]" />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(14,165,233,0.16)_0_1px,transparent_1px_46px),linear-gradient(180deg,rgba(148,163,184,0.14)_0_1px,transparent_1px_34px)] bg-[size:46px_34px]" />
            <div className="absolute left-6 right-6 top-20 h-24 rounded-[999px] border border-white/70 bg-white/20" />
            <div className="absolute bottom-16 left-10 right-10 h-20 rounded-[999px] border border-cyan-200/60 bg-cyan-100/20" />

            <div className="relative flex min-h-80 flex-col gap-4 p-4 sm:p-5 lg:min-h-[430px]">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-cyan-200 bg-white/85 px-3 py-1 text-xs font-semibold text-cyan-800">
                  비주얼 placeholder
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold text-slate-500">
                  실제 이미지 연결 전
                </span>
              </div>

              <div className="rounded-[1.25rem] border border-white/80 bg-white/75 p-4 backdrop-blur">
                <div className="flex min-h-40 flex-col justify-between rounded-2xl border border-cyan-200/80 bg-[linear-gradient(135deg,rgba(240,249,255,0.92),rgba(236,254,255,0.88)),radial-gradient(circle_at_28%_28%,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_72%_62%,rgba(20,184,166,0.14),transparent_30%)] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold text-cyan-700">
                        군산의 오늘
                      </p>
                      <p className="mt-2 text-2xl font-bold leading-tight text-slate-950">
                        사는 사람도,
                        <br />
                        오는 사람도
                      </p>
                    </div>
                    <div className="grid h-14 w-14 place-items-center rounded-2xl border border-cyan-200 bg-white/80 text-xs font-bold text-cyan-700">
                      군산
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {visualKeywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-white bg-white/80 px-3 py-1 text-xs font-semibold text-slate-700"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    군산에서 필요한 정보를 여기서 시작합니다.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 lg:grid-cols-1">
                {visualCards.map((card) => (
                  <div
                    key={card.title}
                    className={`rounded-xl border p-3 ${card.tone}`}
                  >
                    <p className="text-sm font-bold">{card.title}</p>
                    <p className="mt-1 text-xs font-semibold opacity-75">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-auto grid gap-2">
                <Link
                  href="/places"
                  className="rounded-xl border border-cyan-200 bg-cyan-700 p-4 text-white transition hover:bg-cyan-800"
                >
                  <p className="text-sm font-bold">장소 둘러보기</p>
                  <p className="mt-1 text-xs font-medium text-cyan-50">
                    군산의 장소 정보를 먼저 확인해보세요.
                  </p>
                </Link>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1">
                  <span className="rounded-xl border border-slate-200 bg-white/85 p-3">
                    <span className="block text-sm font-bold text-slate-700">
                      지도에서 보기 준비 중
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-5 text-slate-500">
                      군산 장소를 지도에서 볼 수 있도록 준비하고 있습니다.
                    </span>
                  </span>
                  <span className="rounded-xl border border-slate-200 bg-white/85 p-3">
                    <span className="block text-sm font-bold text-slate-700">
                      행사 정보 준비 중
                    </span>
                    <span className="mt-1 block text-xs font-medium leading-5 text-slate-500">
                      군산 행사와 축제 정보를 정리할 예정입니다.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
