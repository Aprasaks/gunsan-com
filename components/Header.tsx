import Link from "next/link";

const categoryLinks = [
  { label: "홈", href: "/", active: true },
  { label: "정보", active: false },
  { label: "맛집", href: "/places", active: true },
  { label: "카페", href: "/places", active: true },
  { label: "병원/약국", href: "/places", active: true },
  { label: "생활업체", href: "/places", active: true },
  { label: "숙박", active: false },
  { label: "여행", active: false },
  { label: "행사·축제", active: false },
  { label: "커뮤니티", active: false },
] as const;

function SearchBar({ id }: { id: string }) {
  return (
    <div className="flex h-11 items-center rounded-full border border-cyan-200 bg-slate-50 pr-1 transition focus-within:border-cyan-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-cyan-100">
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
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0786a5] text-white transition hover:bg-[#0f4f8a]"
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

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      {/* ── 1단: 로고 + 검색 + 유틸 ── */}
      <div className="border-b border-slate-100">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="flex items-center gap-4 py-2.5">
            {/* 로고 */}
            <Link href="/" className="shrink-0" aria-label="군산.com 홈">
              <span
                className="block text-[1.625rem] font-black leading-none tracking-[-0.04em] sm:text-[1.75rem]"
                style={{ fontWeight: 900 }}
              >
                <span className="text-[#0f4f8a]">군산</span>
                <span className="text-[#0786a5]">.com</span>
              </span>
            </Link>

            {/* 검색창 (데스크탑) */}
            <div className="hidden lg:block lg:w-80">
              <SearchBar id="site-search" />
            </div>

            {/* 유틸 메뉴 */}
            <nav
              className="ml-auto flex shrink-0 items-center text-sm"
              aria-label="유틸 메뉴"
            >
              {/* 날씨 — 준비 중 */}
              <span className="hidden items-center gap-1 px-2.5 py-1 text-slate-400 lg:flex">
                <span aria-hidden="true">☀</span>
                <span>날씨</span>
              </span>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              {/* 공지사항 — 준비 중 */}
              <span className="hidden px-2.5 py-1 text-slate-400 lg:block">
                공지사항
              </span>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              {/* 제보하기 */}
              <Link
                href="/submit"
                className="hidden px-2.5 py-1 text-slate-600 transition hover:text-slate-950 lg:block"
              >
                제보하기
              </Link>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              {/* 즐겨찾기 — 준비 중 */}
              <span className="hidden px-2.5 py-1 text-slate-400 lg:block">
                즐겨찾기
              </span>
              <span
                className="hidden h-3.5 w-px bg-slate-200 lg:block"
                aria-hidden="true"
              />

              {/* 사장님 등록 — CTA, 항상 노출 */}
              <Link
                href="/owners"
                className="ml-2 rounded-md bg-cyan-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-cyan-800"
              >
                사장님 등록
              </Link>
            </nav>
          </div>

          {/* 검색창 (모바일) */}
          <div className="pb-2.5 lg:hidden">
            <SearchBar id="site-search-mobile" />
          </div>
        </div>
      </div>

      {/* ── 2단: 카테고리 네비 ── */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
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
                    "shrink-0 px-3 py-2.5 text-sm font-semibold transition",
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
                className="shrink-0 px-3 py-2.5 text-sm font-semibold text-slate-400"
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
