import Link from "next/link";

const navigationLinks = [
  { href: "/places", label: "장소 둘러보기" },
  { href: "/submit", label: "제보하기" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-normal text-slate-950"
          aria-label="군산.com 홈"
        >
          군산.com
        </Link>

        <div className="relative w-full min-w-0 lg:max-w-md">
          <label htmlFor="site-search" className="sr-only">
            군산 생활 정보 검색
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="맛집, 병원, 카페, 행사 등 군산 정보 검색"
            className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
              className="inline-flex min-h-10 items-center justify-center rounded-md px-2 py-2 text-center transition hover:bg-slate-100 hover:text-slate-950 lg:px-3"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/owners"
            className="inline-flex min-h-10 items-center justify-center rounded-md border border-cyan-200 bg-cyan-50 px-2 py-2 text-center text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 lg:px-3"
          >
            사장님 등록
          </Link>
        </nav>
      </div>
    </header>
  );
}
