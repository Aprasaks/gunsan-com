import Link from "next/link";

const utilityLinks = [
  { label: "오늘의 군산", status: "준비 중", active: false },
  { label: "제보하기", href: "/submit", active: true },
  { label: "즐겨찾기", status: "준비 중", active: false },
  { label: "사장님 등록", href: "/owners", active: true },
] as const;

const portalLinks = [
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

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="border-b border-slate-100">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-2.5 sm:px-6 lg:flex-row lg:items-center lg:gap-4">
          <Link
            href="/"
            className="shrink-0"
            aria-label="군산.com 홈"
          >
            <span className="block text-xl font-bold tracking-normal text-slate-950">
              군산.com
            </span>
            <span className="block text-[11px] font-semibold text-cyan-700">
              군산의 모든 것
            </span>
          </Link>

          <div className="relative w-full min-w-0 lg:max-w-2xl">
            <label htmlFor="site-search" className="sr-only">
              군산 생활 정보 검색
            </label>
            <span
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400"
              aria-hidden="true"
            >
              검색
            </span>
            <input
              id="site-search"
              type="search"
              placeholder="맛집, 병원, 카페, 행사 정보를 검색해보세요"
              readOnly
              className="h-10 w-full rounded-lg border border-slate-300 bg-slate-50 pl-12 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <nav
            className="grid grid-cols-2 gap-1.5 text-xs font-semibold text-slate-600 sm:grid-cols-4 lg:ml-auto lg:flex lg:w-auto lg:flex-nowrap lg:items-center"
            aria-label="유틸 메뉴"
          >
            {utilityLinks.map((link) =>
              link.active ? (
                <Link
                  key={link.label}
                  href={link.href}
                  className={[
                    "inline-flex min-h-8 items-center justify-center rounded-md border px-2.5 py-1 text-center transition",
                    link.label === "사장님 등록"
                      ? "border-cyan-200 bg-cyan-50 text-cyan-800 hover:border-cyan-300 hover:bg-cyan-100"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={link.label}
                  className="inline-flex min-h-8 items-center justify-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-center text-slate-500"
                >
                  {link.label}
                  <span className="ml-1 text-[10px] text-slate-400">
                    {link.status}
                  </span>
                </span>
              ),
            )}
          </nav>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <nav
          className="flex gap-1.5 overflow-x-auto py-2 text-sm"
          aria-label="군산 정보 카테고리"
        >
          {portalLinks.map((link) =>
            link.active ? (
              <Link
                key={link.label}
                href={link.href}
                className="shrink-0 rounded-md px-3 py-1.5 font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-800"
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.label}
                className="shrink-0 rounded-md px-3 py-1.5 font-semibold text-slate-400"
              >
                {link.label}
                <span className="ml-1 text-[10px]">준비 중</span>
              </span>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
