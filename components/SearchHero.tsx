import Image from "next/image";
import Link from "next/link";

const quickChoices = ["당일치기", "1박 2일", "데이트", "가족", "바다", "근대문화"] as const;

export default function SearchHero() {
  return (
    <section className="relative isolate min-h-[680px] overflow-hidden bg-gunsan-navy sm:min-h-[720px] lg:min-h-[820px]">
      <Image
        src="/images/gunsan-hero-banner.webp"
        alt="군산의 바다와 도시가 이어지는 풍경"
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-[58%_center]"
      />
      <div className="absolute inset-0 -z-20 bg-black/20" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,26,42,0.94)_0%,rgba(6,26,42,0.7)_46%,rgba(6,26,42,0.12)_82%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[58%] bg-gradient-to-t from-[#071925] via-[#071925]/30 to-transparent" />

      <div className="mx-auto grid min-h-[680px] w-full max-w-[1440px] items-end gap-12 px-5 pb-12 pt-28 sm:min-h-[720px] sm:px-8 sm:pb-16 lg:min-h-[820px] lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-20">
        <div className="max-w-[750px] text-white">
          <div className="flex items-center gap-3 text-[11px] font-black tracking-[0.2em] text-[#a8d5e8] sm:text-xs">
            <span className="h-px w-10 bg-lantern" aria-hidden="true" />
            GUNSAN TRAVEL CURATION
          </div>
          <h1 className="mt-5 text-[2.85rem] font-black leading-[1.02] tracking-[-0.07em] drop-shadow-lg sm:text-[4.3rem] lg:text-[5.45rem]">
            오늘 군산,
            <br />어떻게 여행할까요?
          </h1>
          <p className="mt-6 max-w-[650px] text-base font-semibold leading-7 text-white/78 sm:text-xl sm:leading-8">
            원하는 여행 스타일을 고르면 관광지부터 맛집·카페·놀거리까지 하나의 코스로 이어드립니다.
          </p>

          <div className="mt-7 flex max-w-2xl gap-2 overflow-x-auto pb-1 sm:flex-wrap" aria-label="여행 스타일 빠른 선택">
            {quickChoices.map((label) => (
              <Link
                key={label}
                href="#start"
                className="shrink-0 rounded-full border border-white/30 bg-black/16 px-4 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-gunsan-navy"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="#start" className="inline-flex min-h-13 items-center justify-center rounded-full bg-lantern px-7 py-3.5 text-base font-black text-gunsan-navy shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#ffad5e]">
              내 여행코스 추천받기
              <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <Link href="#preview" className="inline-flex min-h-13 items-center justify-center rounded-full border border-white/35 bg-white/8 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/16">
              <span className="mr-2 text-xs" aria-hidden="true">▶</span>
              먼저 여행해보기
            </Link>
          </div>
        </div>

        <aside className="hidden justify-self-end lg:block" aria-label="대표 코스 흐름 미리보기">
          <div className="w-[410px] rounded-t-[11rem] border border-white/22 bg-[#071925]/46 px-7 pb-7 pt-20 text-white shadow-2xl backdrop-blur-xl">
            <p className="text-[10px] font-black tracking-[0.2em] text-[#a8d5e8]">ONE DAY IN GUNSAN</p>
            <h2 className="mt-2 text-3xl font-black tracking-[-0.055em]">하루가 한눈에</h2>
            <div className="mt-7 space-y-0">
              <RouteStep number="01" title="근대역사박물관" kind="관광" />
              <RouteLine label="도보 이동" />
              <RouteStep number="02" title="근대거리" kind="골목 산책" />
              <RouteLine label="점심 선택" accent />
              <RouteStep number="03" title="은파호수공원" kind="저녁 산책" />
            </div>
            <p className="mt-7 border-t border-white/14 pt-5 text-sm font-medium leading-6 text-white/55">
              가기 전에는 장면으로, 현장에서는 다음 장소로 이어집니다.
            </p>
          </div>
        </aside>
      </div>

      <div className="absolute bottom-5 right-8 hidden items-center gap-3 text-[10px] font-bold tracking-[0.18em] text-white/45 lg:flex">
        <span>SCROLL TO PLAN</span>
        <span className="h-px w-12 bg-white/35" aria-hidden="true" />
      </div>
    </section>
  );
}

function RouteStep({ number, title, kind }: { number: string; title: string; kind: string }) {
  return (
    <div className="grid grid-cols-[42px_1fr_auto] items-center gap-3 border-b border-white/10 py-3.5">
      <span className="font-mono text-xs font-bold text-lantern">{number}</span>
      <strong className="text-sm font-extrabold">{title}</strong>
      <span className="text-[11px] font-bold text-white/45">{kind}</span>
    </div>
  );
}

function RouteLine({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div className="flex h-8 items-center gap-3 pl-5 text-[10px] font-bold tracking-[0.1em] text-white/45">
      <span className={accent ? "h-full w-px bg-lantern" : "h-full w-px bg-white/18"} aria-hidden="true" />
      <span className={accent ? "text-[#ffc184]" : undefined}>{label}</span>
    </div>
  );
}
