import Link from "next/link";

const navigationLinks = [
  { href: "/places", label: "장소 둘러보기" },
  { href: "/submit", label: "제보하기" },
];

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-6">
        <Link
          href="/"
          className="shrink-0 text-xl font-bold tracking-normal text-slate-950"
          aria-label="군산.com 홈"
        >
          군산.com
        </Link>

        <div className="relative w-full lg:max-w-md">
          <label htmlFor="site-search" className="sr-only">
            군산 생활 정보 검색
          </label>
          <input
            id="site-search"
            type="search"
            placeholder="남자 네일, 일요일 병원, 주차 카페"
            className="h-11 w-full rounded-lg border border-slate-300 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-600 focus:bg-white focus:ring-4 focus:ring-cyan-100"
          />
        </div>

        <nav
          className="flex flex-wrap items-center gap-2 text-sm font-medium text-slate-700 lg:ml-auto lg:flex-nowrap"
          aria-label="주요 메뉴"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/owners"
            className="rounded-md border border-cyan-200 bg-cyan-50 px-3 py-2 text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100"
          >
            사장님 등록
          </Link>
        </nav>
      </div>
    </header>
  );
}
