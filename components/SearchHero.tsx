import Image from "next/image";
import Link from "next/link";

const popularTerms = ["이성당", "초원사진관", "선유도", "군산역", "아이랑 갈 곳"];

const quickChoices = [
  { label: "군산 처음이에요", icon: "01" },
  { label: "아이랑 왔어요", icon: "02" },
  { label: "오늘 문 연 곳", icon: "03" },
  { label: "주차 편한 곳", icon: "04" },
  { label: "비 오는 날 갈 곳", icon: "05" },
  { label: "군산역 근처", icon: "06" },
] as const;

export default function SearchHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f3ea]">
      <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src="/images/gunsan-hero-banner.webp"
          alt="군산의 바다와 도심 풍경"
          fill
          priority
          sizes="46vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ea] via-[#f7f3ea]/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-7 sm:px-6 sm:py-9 lg:px-8 lg:py-14">
        <div className="max-w-[760px]">
          <p className="text-sm font-extrabold text-cyan-800">군산 여행과 생활 정보의 시작</p>
          <h1 className="mt-2 text-[1.75rem] font-black leading-[1.2] tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[2.75rem]">
            군산에서 어디 갈지 찾고 있나요?
          </h1>
          <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-700 sm:text-base">
            밥집, 카페, 관광지, 주차, 오늘 영업 정보까지 한 번에 찾으세요.
          </p>

          <Link
            id="main-search"
            href="/places"
            aria-label="군산 장소 검색 페이지로 이동"
            className="mt-5 flex h-14 items-center rounded-2xl border-2 border-[#123f67] bg-white pl-4 pr-1.5 shadow-lg shadow-slate-900/10 transition hover:border-cyan-700 sm:h-16 sm:pl-6"
          >
            <span className="min-w-0 flex-1 truncate text-sm font-semibold text-slate-500 sm:text-base">
              예: 주차 되는 카페, 아이랑 갈 곳, 군산역 맛집
            </span>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#123f67] text-white sm:h-12 sm:w-12" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.45 4.39l3.33 3.33a.75.75 0 0 1-1.06 1.06l-3.33-3.33A7 7 0 0 1 2 9Z" clipRule="evenodd" />
              </svg>
            </span>
          </Link>

          <div className="mt-3 hidden flex-wrap items-center gap-x-3 gap-y-2 sm:flex">
            <span className="text-xs font-bold text-slate-500">인기 검색어</span>
            {popularTerms.map((term) => (
              <Link key={term} href="/places" className="text-xs font-bold text-slate-700 underline decoration-slate-300 underline-offset-4 hover:text-cyan-800">
                {term}
              </Link>
            ))}
          </div>

          <div className="mt-6">
            <div className="mb-2.5 flex items-end justify-between">
              <h2 className="text-base font-black text-slate-950 sm:text-lg">관광객 빠른 선택</h2>
              <span className="text-xs font-semibold text-slate-500">상황에 맞게 바로 찾기</span>
            </div>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {quickChoices.map((choice) => (
                <Link
                  key={choice.label}
                  href="/places"
                  className="flex min-h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-extrabold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-300 hover:text-cyan-800"
                >
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-cyan-50 text-[10px] font-black text-cyan-800" aria-hidden="true">
                    {choice.icon}
                  </span>
                  {choice.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
