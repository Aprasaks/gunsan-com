"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/brand/BrandLogo";

type NavItem = {
  label: string;
  href?: string;
  accent?: boolean;
  disabled?: boolean;
};

const primaryLinks: NavItem[] = [
  { label: "내 여행 만들기", href: "/#start", accent: true },
  { label: "여행코스", href: "/#courses" },
  { label: "지금 군산", disabled: true },
  { label: "둘러보기", href: "/places" },
  { label: "군산패스", disabled: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1360px] items-center gap-5 px-5 sm:px-8 lg:h-[68px] lg:px-10">
        <div className="shrink-0">
          <BrandLogo />
        </div>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-6 lg:flex xl:gap-9" aria-label="주요 메뉴">
          {primaryLinks.map((link) => {
            if ("disabled" in link) {
              return (
                <span
                  key={link.label}
                  className="inline-flex h-10 cursor-default items-center text-[15px] font-extrabold tracking-[-0.025em] text-gunsan-navy xl:text-base"
                  aria-disabled="true"
                  title="준비 중"
                >
                  {link.label}
                </span>
              );
            }

            const active = link.href === "/places" ? pathname.startsWith("/places") : false;

            return (
              <Link
                key={link.label}
                href={link.href ?? "/"}
                aria-current={active ? "page" : undefined}
                className={[
                  "group relative inline-flex h-10 items-center text-[15px] font-extrabold tracking-[-0.025em] text-gunsan-navy transition-colors hover:text-sea-blue xl:text-base",
                  "accent" in link && link.accent ? "gap-2" : "",
                ].join(" ")}
              >
                {link.label}
                {"accent" in link && link.accent ? (
                  <span className="rounded-full bg-[#0d72b7] px-2 py-0.5 text-[11px] font-black tracking-normal text-white">
                    AI
                  </span>
                ) : null}
                <span
                  className={[
                    "absolute inset-x-0 bottom-0 h-0.5 origin-center scale-x-0 bg-sea-blue transition-transform group-hover:scale-x-100",
                    active ? "scale-x-100" : "",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden items-center lg:flex">
          <Link
            href="/places"
            className="grid h-10 w-10 place-items-center rounded-full text-gunsan-navy transition hover:bg-slate-100"
            aria-label="군산 장소 검색"
            title="검색"
          >
            <SearchIcon />
          </Link>
        </div>

        <details className="group relative ml-auto lg:hidden">
          <summary
            className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full text-gunsan-navy transition hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </summary>

          <nav className="absolute right-0 top-12 w-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10" aria-label="모바일 메뉴">
            {primaryLinks.map((link) => {
              if ("disabled" in link && link.disabled) {
                return (
                  <span
                    key={link.label}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-extrabold text-gunsan-navy"
                    aria-disabled="true"
                  >
                    {link.label}
                    <small className="text-[11px] font-bold text-slate-400">준비 중</small>
                  </span>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href ?? "/"}
                  className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-extrabold text-gunsan-navy transition hover:bg-slate-50"
                >
                  <span>{link.label}</span>
                  {"accent" in link && link.accent ? (
                    <span className="rounded-full bg-[#0d72b7] px-2 py-0.5 text-[11px] font-black text-white">AI</span>
                  ) : null}
                </Link>
              );
            })}

            <Link
              href="/places"
              className="mt-1 flex items-center gap-2 border-t border-slate-100 px-4 py-3 text-[15px] font-semibold text-slate-600"
            >
              <SearchIcon />
              군산에서 찾기
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
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
