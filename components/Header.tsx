import Link from "next/link";

import { getGunsanCurrentWeather } from "@/lib/weather";

const categoryLinks = [
  { label: "홈", href: "/" },
  { label: "정보" },
  { label: "맛집", href: "/places" },
  { label: "카페", href: "/places" },
  { label: "병원/약국", href: "/places" },
  { label: "생활업체", href: "/places" },
  { label: "숙박" },
  { label: "여행" },
  { label: "행사·축제" },
  { label: "커뮤니티" },
] as const;

function SearchBar({ id }: { id: string }) {
  return (
    <div className="flex h-10 items-center rounded-full border border-cyan-200 bg-slate-50 pr-1 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">
      <label htmlFor={id} className="sr-only">
        군산 정보 검색
      </label>
      <input
        id={id}
        type="search"
        placeholder="맛집, 병원, 카페, 행사 등 군산의 정보를 검색해 보세요"
        readOnly
        className="h-full flex-1 rounded-full bg-transparent pl-5 pr-2 text-sm text-slate-950 outline-none placeholder:text-slate-400"
      />
      <button
        type="button"
        aria-label="검색"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0786a5] text-white transition hover:bg-[#0f4f8a]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default async function Header() {
  const weather = await getGunsanCurrentWeather();

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="border-b border-slate-100">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 py-2">
            <Link href="/" className="shrink-0" aria-label="군산.com 홈">
              <span
                className="block text-[1.6rem] font-black leading-none tracking-[-0.055em] sm:text-[1.78rem]"
                style={{ fontWeight: 900 }}
              >
                <span className="text-[#0f4f8a]">군산</span>
                <span className="text-[#0786a5]">.com</span>
              </span>
            </Link>

            <div className="hidden min-w-0 flex-1 lg:block">
              <SearchBar id="site-search" />
            </div>

            <nav
              className="ml-auto flex shrink-0 items-center whitespace-nowrap text-xs font-semibold text-slate-600"
              aria-label="유틸 메뉴"
            >
              <span className="hidden min-w-[4.75rem] items-center gap-1 px-2 py-1 text-slate-700 lg:flex">
                <span aria-hidden="true">{weather?.icon ?? "☀"}</span>
                <span>
                  {weather ? `군산 ${weather.temperatureCelsius}℃` : "군산 날씨"}
                </span>
              </span>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              <span className="hidden px-2 py-1 text-slate-600 lg:block">
                공지사항
              </span>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              <Link
                href="/submit"
                className="hidden px-2 py-1 text-slate-600 transition hover:text-slate-950 lg:block"
              >
                제보하기
              </Link>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              <span className="hidden px-2 py-1 text-slate-600 lg:block">
                즐겨찾기
              </span>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              <Link
                href="/owners"
                className="ml-2 rounded-md bg-cyan-700 px-3 py-1.5 text-xs font-bold text-white transition hover:bg-cyan-800"
              >
                사장님 등록
              </Link>
            </nav>
          </div>

          <div className="pb-2 lg:hidden">
            <SearchBar id="site-search-mobile" />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <nav
          className="flex overflow-x-auto"
          aria-label="군산 정보 카테고리"
        >
          {categoryLinks.map((link) => {
            if ("href" in link) {
              const isHome = link.label === "홈";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={[
                    "shrink-0 px-3 py-2 text-sm font-semibold transition",
                    isHome
                      ? "border-b-2 border-cyan-500 text-cyan-700"
                      : "text-slate-700 hover:text-cyan-700",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              );
            }
            return (
              <span
                key={link.label}
                className="shrink-0 px-3 py-2 text-sm font-semibold text-slate-600"
              >
                {link.label}
              </span>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
