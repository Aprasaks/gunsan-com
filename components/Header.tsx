import Link from "next/link";

const navigationLinks = [
  { href: "/places", label: "장소 둘러보기" },
  { href: "/submit", label: "제보하기" },
];

const portalLinks = [
  { label: "맛집", href: "/places", active: true },
  { label: "카페", href: "/places", active: true },
  { label: "병원/약국", href: "/places", active: true },
  { label: "생활업체", href: "/places", active: true },
  { label: "숙박", active: false },
  { label: "여행", active: false },
  { label: "행사·축제", active: false },
] as const;

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-2.5 sm:px-6">
        <div className="flex flex-col gap-2.5 lg:flex-row lg:items-center lg:gap-5">
          <Link
            href="/"
            className="shrink-0 text-xl font-bold tracking-normal text-slate-950"
            aria-label="군산.com 홈"
          >
            군산.com
          </Link>

          <div className="relative w-full min-w-0 lg:max-w-2xl">
            <label htmlFor="site-search" className="sr-only">
              군산 생활 정보 검색
            </label>
            <input
              id="site-search"
              type="search"
              placeholder="통합 검색 준비 중 · 장소는 목록에서 둘러보세요"
              readOnly
              className="h-10 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <nav
            className="grid w-full grid-cols-3 gap-2 text-sm font-medium text-slate-700 lg:ml-auto lg:flex lg:w-auto lg:flex-nowrap lg:items-center"
            aria-label="주요 메뉴"
          >
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-9 items-center justify-center rounded-md px-2 py-1.5 text-center transition hover:bg-slate-100 hover:text-slate-950 lg:px-3"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/owners"
              className="inline-flex min-h-9 items-center justify-center rounded-md border border-cyan-200 bg-cyan-50 px-2 py-1.5 text-center text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 lg:px-3"
            >
              사장님 안내
            </Link>
          </nav>
        </div>

        <nav
          className="mt-2 flex gap-2 overflow-x-auto border-t border-slate-100 pt-2 text-sm"
          aria-label="군산 정보 바로가기"
        >
          {portalLinks.map((link) =>
            link.active ? (
              <Link
                key={link.label}
                href={link.href}
                className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.label}
                className="shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 font-semibold text-slate-400"
              >
                {link.label} 준비 중
              </span>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
