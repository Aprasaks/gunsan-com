import Image from "next/image";
import Link from "next/link";

const quickChoices = [
  { label: "당일치기", href: "#start" },
  { label: "1박 2일", href: "#start" },
  { label: "데이트", href: "#start" },
  { label: "가족", href: "#start" },
  { label: "바다", href: "#start" },
  { label: "근대문화", href: "#start" },
] as const;

export default function SearchHero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden bg-[#0b2d46] sm:min-h-[760px] lg:min-h-[820px]">
      <Image
        src="/images/gunsan-hero-banner.webp"
        alt="군산의 바다와 도시 풍경"
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-black/18" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,24,39,0.88)_0%,rgba(3,24,39,0.63)_43%,rgba(3,24,39,0.12)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[56%] bg-gradient-to-t from-[#071c2a] via-[#071c2a]/28 to-transparent" />

      <div className="mx-auto grid min-h-[720px] w-full max-w-[1440px] items-end gap-10 px-4 pb-12 pt-28 sm:min-h-[760px] sm:px-6 sm:pb-16 lg:min-h-[820px] lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-18 lg:pt-36">
        <div className="max-w-[760px] text-white">
          <p className="text-xs font-black tracking-[0.18em] text-cyan-200 sm:text-sm">GUNSAN TRAVEL, BEFORE YOU GO</p>
          <h1 className="mt-4 text-[2.7rem] font-black leading-[1.04] tracking-[-0.065em] drop-shadow-lg sm:text-[4rem] lg:text-[5.1rem]">
            오늘 군산,
            <br />어떻게 여행할까요?
          </h1>
          <p className="mt-5 max-w-[680px] text-base font-semibold leading-7 text-white/84 sm:text-xl sm:leading-8">
            관광지를 따로 고르지 않아도 됩니다. 원하는 여행 스타일을 고르면 관광지부터 먹거리, 카페, 다음 이동까지 한 코스로 이어드립니다.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="여행 스타일 빠른 선택">
            {quickChoices.map((choice) => (
              <Link
                key={choice.label}
                href={choice.href}
                className="rounded-full border border-white/35 bg-black/18 px-4 py-2.5 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[#0d3557]"
              >
                {choice.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#start" className="rounded-full bg-[#0f75d8] px-6 py-3.5 text-sm font-black text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#0b66bf] sm:text-base">
              내 여행코스 추천받기 →
            </Link>
            <Link href="#preview" className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur transition hover:bg-white/18 sm:text-base">
              ▶ 코스 미리 여행하기
            </Link>
          </div>
        </div>

        <aside className="hidden self-end lg:block">
          <div className="ml-auto w-full max-w-[430px] rounded-[2rem] border border-white/20 bg-black/28 p-5 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-black tracking-[0.16em] text-cyan-200">LIVE ROUTE PREVIEW</p>
                <h2 className="mt-1 text-2xl font-black tracking-[-0.045em]">가기 전에, 먼저 걸어보세요</h2>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-lg text-[#0d3557]">▶</span>
            </div>

            <div className="mt-6 space-y-3">
              <RouteStep number="1" title="근대역사박물관" meta="여행의 시작" />
              <RouteConnector label="도보 이동" />
              <RouteStep number="2" title="초원사진관" meta="추억을 남기는 곳" />
              <RouteConnector label="점심 추천" accent />
              <RouteStep number="3" title="근대거리" meta="골목을 따라 걷기" />
            </div>

            <p className="mt-6 text-sm font-semibold leading-6 text-white/62">
              실제 서비스에서는 드론·1인칭 영상과 지도 이동선을 결합해 코스를 20~30초 안에 미리 체험하게 됩니다.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

function RouteStep({ number, title, meta }: { number: string; title: string; meta: string }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3.5">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#0d3557]">{number}</span>
      <div>
        <strong className="block text-sm font-black">{title}</strong>
        <span className="mt-0.5 block text-xs font-semibold text-white/58">{meta}</span>
      </div>
    </div>
  );
}

function RouteConnector({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <div className="flex items-center gap-3 pl-[1.1rem] text-xs font-black text-white/58">
      <span className={accent ? "h-5 w-px bg-orange-300" : "h-5 w-px bg-white/25"} aria-hidden="true" />
      <span className={accent ? "text-orange-200" : undefined}>{label}</span>
    </div>
  );
}
