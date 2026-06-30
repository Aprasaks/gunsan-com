import Image from "next/image";
import Link from "next/link";

const floatingCards = [
  {
    title: "군산 인기 장소",
    description: "지금 많이 찾는 장소를 확인하세요",
    href: "/places",
  },
  {
    title: "오늘의 군산",
    description: "생활 정보와 여행 정보를 함께 정리합니다",
  },
] as const;

export default function SearchHero() {
  return (
    <section className="border-b border-slate-200">
      <div className="relative mx-auto min-h-[20rem] w-full max-w-[1440px] overflow-hidden bg-slate-900 sm:min-h-[20.5rem] lg:min-h-[17rem]">
        <Image
          src="/images/gunsan-hero-banner.webp"
          alt="군산의 주요 풍경을 담은 대표 배너 이미지"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 1440px"
          className="object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.88)_34%,rgba(255,255,255,0.34)_64%,rgba(15,23,42,0.12)_100%)]" />

        <div className="relative grid min-h-[20rem] gap-3 p-4 sm:min-h-[20.5rem] sm:p-5 lg:min-h-[17rem] lg:grid-cols-[minmax(0,1fr)_260px] lg:p-5">
          {/* 좌측: 타이틀 + 부제 */}
          <div className="flex min-w-0 flex-col justify-center">
            <h1 className="max-w-2xl text-3xl font-bold leading-tight text-slate-950 sm:text-4xl lg:text-[2.3rem]">
              군산의 모든 것,
            </h1>
            <p className="mt-2 max-w-lg text-sm leading-6 text-slate-700 sm:text-base">
              맛집부터 생활정보, 여행과 행사까지
              <br /> 군산의 정확한 정보를 한 곳에 모았습니다.
            </p>
          </div>

          {/* 우측: 플로팅 카드 (데스크탑만) */}
          <div className="hidden items-center justify-end lg:flex">
            <div className="flex w-full max-w-[240px] flex-col gap-2">
              {floatingCards.map((card) =>
                "href" in card ? (
                  <Link
                    key={card.title}
                    href={card.href}
                    className="rounded-xl border border-white/80 bg-white/90 px-3 py-2.5 backdrop-blur transition hover:bg-white"
                  >
                    <p className="text-sm font-bold text-slate-900">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-600">
                      {card.description}
                    </p>
                  </Link>
                ) : (
                  <div
                    key={card.title}
                    className="rounded-xl border border-white/75 bg-white/75 px-3 py-2.5 backdrop-blur"
                  >
                    <p className="text-sm font-bold text-slate-900">
                      {card.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-5 text-slate-500">
                      {card.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
