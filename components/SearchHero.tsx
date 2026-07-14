import Image from "next/image";
import Link from "next/link";

const heroCourseLinks = [
  { label: "반나절", href: "#course-half-day" },
  { label: "1박 2일", href: "#course-one-night-two-days" },
  { label: "아이랑", href: "#course-family" },
  { label: "비 오는 날", href: "#course-rainy-day" },
  { label: "선유도", href: "#course-seonyudo" },
] as const;

export default function SearchHero() {
  return (
    <section className="relative isolate min-h-[660px] overflow-hidden bg-[#30566b] sm:min-h-[720px] lg:min-h-[820px]">
      <Image
        src="/images/gunsan-hero-banner.webp"
        alt="군산 바다와 도시 풍경"
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div className="absolute inset-0 -z-20 bg-black/18" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,31,48,0.78)_0%,rgba(8,31,48,0.4)_48%,rgba(8,31,48,0.06)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[64%] bg-gradient-to-t from-black/78 via-black/25 to-transparent" />

      <div className="mx-auto flex min-h-[660px] w-full max-w-[1540px] items-end px-4 pb-12 pt-28 sm:min-h-[720px] sm:px-6 sm:pb-16 lg:min-h-[820px] lg:px-10 lg:pb-20 lg:pt-44">
        <div className="w-full max-w-[1040px] text-white">
          <p className="text-sm font-black tracking-[0.12em] text-orange-200 sm:text-base">FIRST VISIT TO GUNSAN</p>
          <h1 className="mt-3 text-[2.45rem] font-black leading-[1.08] tracking-[-0.06em] drop-shadow-md sm:text-[3.8rem] lg:text-[4.8rem]">
            군산 처음이면,
            <br />이 코스 그대로 가보세요
          </h1>
          <p className="mt-4 max-w-[760px] text-base font-semibold leading-7 text-white/90 sm:text-xl sm:leading-8 lg:text-2xl">
            맛집, 카페, 관광지를 따로 찾느라 헤매지 않도록 군산에서 먼저 가볼 흐름을 정리했습니다.
          </p>

          <nav className="mt-7 flex flex-wrap gap-2.5 sm:mt-9" aria-label="대표 코스 바로가기">
            {heroCourseLinks.map((course, index) => (
              <Link
                key={course.label}
                href={course.href}
                className={[
                  "rounded-full border px-4 py-2.5 text-sm font-black transition hover:-translate-y-0.5 sm:px-5 sm:py-3 sm:text-base",
                  index === 0
                    ? "border-[#f08a27] bg-[#f08a27] text-white hover:bg-[#df7617]"
                    : "border-white/55 bg-black/15 text-white backdrop-blur-sm hover:bg-white hover:text-slate-950",
                ].join(" ")}
              >
                {course.label} 코스
              </Link>
            ))}
          </nav>

          <Link
            id="main-search"
            href="/places"
            aria-label="군산 전체 장소 검색 페이지로 이동"
            className="mt-8 flex h-12 max-w-[560px] items-center rounded-full border border-white/40 bg-white/92 px-5 text-slate-800 shadow-lg backdrop-blur transition hover:bg-white sm:h-14 sm:px-6"
          >
            <span className="min-w-0 flex-1 truncate text-sm font-bold text-slate-500 sm:text-base">
              이성당 다음 코스 · 아이랑 군산 · 선유도 가는 길
            </span>
            <SearchIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}
