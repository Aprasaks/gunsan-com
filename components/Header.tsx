"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/brand/BrandLogo";

const browseLinks = [
  { label: "명소", href: "/places" },
  { label: "맛집", href: "/places" },
  { label: "카페", href: "/places" },
] as const;

export default function Header() {
  const pathname = usePathname();
  const courseActive = pathname.startsWith("/courses");
  const browseActive = pathname.startsWith("/places");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto grid h-[4.5rem] w-full max-w-[1280px] grid-cols-[minmax(0,1fr)_44px] items-center px-5 sm:h-20 sm:px-8 lg:h-28 lg:grid-cols-[290px_minmax(0,1fr)] lg:px-10">
        <BrandLogo />

        <nav className="hidden items-center justify-center gap-14 lg:flex" aria-label="주요 메뉴">
          <Link
            href="/#courses"
            aria-current={courseActive ? "page" : undefined}
            className={menuClass(courseActive)}
          >
            여행코스
          </Link>

          <span
            className="cursor-default py-2 text-sm font-semibold tracking-[-0.02em] text-gunsan-navy"
            aria-disabled="true"
            title="축제·체험 전용 페이지 준비 중"
          >
            축제·체험
          </span>

          <details className="group relative">
            <summary
              className={[menuClass(browseActive), "flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden"].join(" ")}
              aria-current={browseActive ? "page" : undefined}
            >
              둘러보기
              <ChevronIcon />
            </summary>
            <div className="absolute left-1/2 top-[calc(100%+0.75rem)] w-44 -translate-x-1/2 border border-slate-200 bg-white py-2">
              {browseLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-5 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-gunsan-navy"
                >
                  {link.label}
                </Link>
              ))}
              <span className="block cursor-default px-5 py-2.5 text-sm font-medium text-slate-400" aria-disabled="true" title="숙소 전용 페이지 준비 중">
                숙소
              </span>
            </div>
          </details>
        </nav>

        <details className="group relative justify-self-end lg:hidden">
          <summary
            className="grid h-10 w-10 cursor-pointer list-none place-items-center text-gunsan-navy [&::-webkit-details-marker]:hidden"
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </summary>
          <nav className="absolute right-0 top-12 w-60 border border-slate-200 bg-white p-2 text-gunsan-navy" aria-label="모바일 메뉴">
            <Link href="/#courses" className={mobileMenuClass(courseActive)} aria-current={courseActive ? "page" : undefined}>
              여행코스
            </Link>
            <span className="block cursor-default px-4 py-3 text-sm font-semibold" aria-disabled="true" title="축제·체험 전용 페이지 준비 중">
              축제·체험
            </span>
            <details className="group/browse border-t border-slate-100">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
                둘러보기
                <ChevronIcon />
              </summary>
              <div className="border-t border-slate-100 bg-slate-50 py-1">
                {browseLinks.map((link) => (
                  <Link key={link.label} href={link.href} className="block px-6 py-2.5 text-sm font-medium text-slate-600">
                    {link.label}
                  </Link>
                ))}
                <span className="block cursor-default px-6 py-2.5 text-sm font-medium text-slate-400" aria-disabled="true" title="숙소 전용 페이지 준비 중">
                  숙소
                </span>
              </div>
            </details>
          </nav>
        </details>
      </div>
    </header>
  );
}

function menuClass(active: boolean) {
  return [
    "border-b py-2 text-sm font-semibold tracking-[-0.02em] text-gunsan-navy transition-colors",
    active ? "border-sea-blue" : "border-transparent hover:border-slate-300",
  ].join(" ");
}

function mobileMenuClass(active: boolean) {
  return [
    "block border-l-2 px-4 py-3 text-sm font-semibold",
    active ? "border-sea-blue bg-slate-50" : "border-transparent",
  ].join(" ");
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-slate-400 transition-transform group-open:rotate-180 group-open/browse:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="m4 6 4 4 4-4" />
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
