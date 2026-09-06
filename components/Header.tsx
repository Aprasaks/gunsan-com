import Link from "next/link";

import BrandLogo from "@/components/brand/BrandLogo";

const primaryLinks = [
  { label: "여행코스", href: "/#courses" },
  { label: "관광지", href: "/places" },
  { label: "맛집·카페", href: "/places" },
  { label: "축제·체험", href: "/#spot" },
  { label: "여행지도", href: "/map" },
] as const;

export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={[
        "z-50 w-full border-b",
        overlay
          ? "absolute inset-x-0 top-0 border-white/15 bg-gradient-to-b from-black/45 to-transparent"
          : "sticky top-0 border-slate-200/70 bg-ivory/92 backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center px-5 sm:px-8 lg:h-[5.25rem] lg:px-10">
        <BrandLogo inverse={overlay} />

        <nav className="ml-12 hidden items-center gap-7 xl:flex" aria-label="주요 메뉴">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "text-sm font-bold tracking-[-0.02em] transition",
                overlay ? "text-white/78 hover:text-white" : "text-slate-600 hover:text-gunsan-navy",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-1 sm:flex">
          <Link
            href="/places"
            aria-label="군산 장소 검색"
            className={[
              "grid h-10 w-10 place-items-center rounded-full transition",
              overlay ? "text-white hover:bg-white/10" : "text-gunsan-navy hover:bg-navy-soft",
            ].join(" ")}
          >
            <SearchIcon />
          </Link>
          <Link
            href="/#preview"
            className={[
              "px-3 py-2 text-sm font-bold transition",
              overlay ? "text-white/78 hover:text-white" : "text-slate-600 hover:text-gunsan-navy",
            ].join(" ")}
          >
            찜·저장
          </Link>
          <Link
            href="/#start"
            className="ml-2 rounded-full bg-lantern px-5 py-2.5 text-sm font-black text-gunsan-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ffad5e]"
          >
            코스 추천받기
          </Link>
        </div>

        <details className="group relative ml-auto sm:hidden">
          <summary
            className={[
              "grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full [&::-webkit-details-marker]:hidden",
              overlay ? "text-white" : "text-gunsan-navy",
            ].join(" ")}
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </summary>
          <nav className="absolute right-0 top-12 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-gunsan-navy shadow-2xl" aria-label="모바일 메뉴">
            {primaryLinks.map((link) => (
              <Link key={link.label} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-bold hover:bg-navy-soft">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 8h14M5 16h14" />
    </svg>
  );
}
