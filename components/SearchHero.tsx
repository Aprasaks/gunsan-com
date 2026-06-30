import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  {
    title: "장소 둘러보기",
    description: "군산의 인기 장소를 확인해보세요",
    href: "/places",
    active: true,
  },
  {
    title: "지도에서 보기",
    description: "지도 기능은 준비 중입니다",
    active: false,
  },
] as const;

const visualKeywords = [
  "새만금",
  "금강",
  "은파",
  "근대거리",
  "수송동",
  "월명동",
] as const;

export default function SearchHero() {
  return (
    <section className="border-b border-sky-100 bg-slate-50 px-4 py-2 sm:px-6 lg:py-2.5">
      <div className="relative mx-auto min-h-[20rem] w-full max-w-6xl overflow-hidden rounded-xl border border-sky-100 bg-slate-900 sm:min-h-[20.5rem] lg:min-h-[17rem]">
        <Image
          src="/images/gunsan-hero-banner.webp"
          alt="군산의 주요 풍경을 담은 대표 배너 이미지"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1152px"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_34%,rgba(255,255,255,0.34)_64%,rgba(15,23,42,0.12)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.24))]" />

        <div className="relative grid min-h-[20rem] gap-3 p-4 sm:min-h-[20.5rem] sm:p-5 lg:min-h-[17rem] lg:grid-cols-[minmax(0,1fr)_280px] lg:p-5">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
              군산 대표 정보 포털
            </p>
            <h1 className="mt-2 max-w-2xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-[2.3rem]">
              군산의 모든 것,
              <br className="hidden sm:block" /> 군산.com
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-700 sm:text-base">
              맛집부터 생활정보, 여행과 행사까지 군산의 정확한 정보를 한 곳에
              모았습니다.
            </p>
            <p className="mt-1.5 max-w-xl text-sm font-semibold leading-5 text-slate-700">
              군산에 산다면, 군산.com. 군산에 여행 가고 싶다면,
              군산.com.
            </p>
            <p className="mt-1 max-w-xl text-xs leading-5 text-slate-500 sm:text-sm">
              사장님이 알려준 정보와 실제 다녀온 사람이 확인한 정보를 나눠서
              보여줍니다.
            </p>

            <div className="mt-3 max-w-xl rounded-xl border border-slate-200 bg-white/95 p-1.5">
              <label htmlFor="home-search" className="sr-only">
                군산 정보 검색
              </label>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  id="home-search"
                  type="search"
                  placeholder="맛집, 병원, 카페, 행사 등 군산의 정보를 검색해 보세요"
                  readOnly
                  className="min-h-10 flex-1 rounded-lg border border-transparent bg-slate-50 px-4 text-sm text-slate-950 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
                <Link
                  href="/places"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
                >
                  장소 둘러보기
                </Link>
              </div>
            </div>
            <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-500">
              통합 검색은 준비 중입니다. 지금은 장소 목록에서 먼저 둘러볼 수
              있습니다.
            </p>

            <div className="mt-2 flex max-w-xl flex-wrap gap-1.5">
              {visualKeywords.map((keyword) => (
                <span
                  key={keyword}
                  className="rounded-full border border-white/80 bg-white/80 px-2.5 py-1 text-xs font-semibold text-slate-700"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-end lg:justify-end">
            <div className="grid w-full max-w-sm gap-1.5 lg:mb-1">
              {quickLinks.map((item) =>
                item.active ? (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-lg border border-white/80 bg-white/90 p-2.5 text-slate-900 backdrop-blur transition hover:bg-white"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600">
                          {item.description}
                        </p>
                      </div>
                      <span className="rounded-full bg-cyan-700 px-2 py-1 text-[11px] font-semibold text-white">
                        이동
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div
                    key={item.title}
                    className="rounded-lg border border-white/75 bg-white/75 p-2.5 text-slate-700 backdrop-blur"
                    aria-disabled="true"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold">{item.title}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                      <span className="rounded-full border border-slate-200 bg-white px-2 py-1 text-[11px] font-semibold text-slate-500">
                        준비 중
                      </span>
                    </div>
                  </div>
                ),
              )}

              <div className="hidden rounded-lg border border-white/75 bg-white/70 p-2.5 backdrop-blur sm:block">
                <p className="text-xs font-semibold text-cyan-800">
                  군산의 오늘
                </p>
                <p className="mt-1 text-sm font-bold text-slate-900">
                  생활 정보와 여행 정보를 함께 정리합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
