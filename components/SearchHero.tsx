import Image from "next/image";
import Link from "next/link";

const routeStops = ["근대역사박물관", "초원사진관", "점심 추천", "은파호수공원"] as const;

export default function SearchHero() {
  return (
    <section className="border-b border-slate-200 bg-[#fbfaf6]">
      <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-16 lg:px-10 lg:py-20">
        <div className="max-w-[620px]">
          <div className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-sea-blue sm:text-[11px]">
            <span className="h-px w-9 bg-sea-blue" aria-hidden="true" />
            GUNSAN TRAVEL GUIDE
          </div>
          <h1 className="mt-6 text-[2.8rem] font-black leading-[1.1] tracking-[-0.06em] text-gunsan-navy sm:text-[3.8rem] lg:text-[4.5rem]">
            걷는 순간,
            <br />다시 만나는 군산
          </h1>
          <p className="mt-6 max-w-[540px] text-base font-medium leading-8 text-slate-600 sm:text-lg">
            군산의 관광지, 먹거리, 카페, 축제를
            <br className="hidden sm:block" /> 하나의 여행코스로 이어드립니다.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#start"
              className="inline-flex h-12 items-center justify-center bg-lantern px-6 text-sm font-extrabold text-gunsan-navy transition-colors hover:bg-[#ee8c35]"
            >
              군산 여행 시작하기
            </Link>
            <Link
              href="#courses"
              className="inline-flex h-12 items-center justify-center border border-gunsan-navy px-6 text-sm font-extrabold text-gunsan-navy transition-colors hover:bg-gunsan-navy hover:text-white"
            >
              추천 코스 보기
              <span className="ml-3" aria-hidden="true">→</span>
            </Link>
          </div>

          <p className="mt-10 border-l border-sea-blue pl-4 text-xs font-medium leading-5 text-slate-500">
            처음 온 군산도 헤매지 않도록, 가야 할 곳만 실제 이동 순서로 정리했습니다.
          </p>
        </div>

        <figure className="border border-slate-200 bg-white">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
            <Image
              src="/images/places/gunsan-modern-history-museum.webp"
              alt="맑은 날의 군산근대역사박물관"
              fill
              preload
              sizes="(max-width: 1024px) 100vw, 760px"
              className="object-cover"
            />
          </div>
          <figcaption className="grid gap-5 border-t border-slate-200 px-5 py-5 sm:grid-cols-[150px_1fr] sm:px-6">
            <div>
              <p className="text-[10px] font-bold tracking-[0.16em] text-lantern">TODAY&apos;S ROUTE</p>
              <p className="mt-1 text-sm font-extrabold text-gunsan-navy">군산 시간여행 코스</p>
            </div>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-semibold leading-5 text-slate-500" aria-label="오늘 추천 코스">
              {routeStops.map((stop, index) => (
                <li key={stop} className="flex items-center gap-2">
                  <span>{stop}</span>
                  {index < routeStops.length - 1 ? <span className="text-sea-blue" aria-hidden="true">→</span> : null}
                </li>
              ))}
            </ol>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
