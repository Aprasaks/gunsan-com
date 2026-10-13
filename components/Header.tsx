"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/brand/BrandLogo";

type NavItem = {
  label: string;
  href?: string;
  disabled?: boolean;
};

const navItems: NavItem[] = [
  { label: "여행코스", href: "/#courses" },
  { label: "지금 군산", disabled: true },
  { label: "둘러보기", href: "/places" },
  { label: "군산패스", disabled: true },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto grid h-16 w-full max-w-[1280px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:h-[72px] lg:grid-cols-[210px_minmax(0,1fr)_210px] lg:px-10">
        <div className="shrink-0">
          <BrandLogo />
        </div>

        <nav
          className="hidden min-w-0 items-center justify-center gap-8 lg:flex xl:gap-10"
          aria-label="주요 메뉴"
        >
          {navItems.map((item) => {
            if (item.disabled) {
              return (
                <span
                  key={item.label}
                  className="inline-flex h-11 cursor-default items-center text-[16px] font-bold tracking-[-0.03em] text-gunsan-navy"
                  aria-disabled="true"
                  title="준비 중"
                >
                  {item.label}
                </span>
              );
            }

            const active = item.href === "/places" ? pathname.startsWith("/places") : false;

            return (
              <Link
                key={item.label}
                href={item.href ?? "/"}
                aria-current={active ? "page" : undefined}
                className="group relative inline-flex h-11 items-center text-[16px] font-bold tracking-[-0.03em] text-gunsan-navy transition-colors hover:text-sea-blue"
              >
                {item.label}
                <span
                  className={[
                    "absolute inset-x-0 bottom-0 h-[2px] origin-center scale-x-0 bg-sea-blue transition-transform group-hover:scale-x-100",
                    active ? "scale-x-100" : "",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <Link
            href="/#start"
            className="inline-flex h-11 items-center gap-2.5 rounded-full bg-lantern px-5 text-[16px] font-black tracking-[-0.035em] text-gunsan-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ee8c35] hover:shadow-md"
          >
            내 여행 만들기
            <span className="rounded-full bg-[#0d72b7] px-2 py-0.5 text-[11px] font-black tracking-normal text-white">
              AI
            </span>
          </Link>
        </div>

        <details className="group relative justify-self-end lg:hidden">
          <summary
            className="grid h-10 w-10 cursor-pointer list-none place-items-center rounded-full text-gunsan-navy transition hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </summary>

          <nav
            className="absolute right-0 top-12 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
            aria-label="모바일 메뉴"
          >
            <Link
              href="/#start"
              className="mb-2 flex items-center justify-between rounded-xl bg-lantern px-4 py-3.5 text-[16px] font-black tracking-[-0.03em] text-gunsan-navy"
            >
              <span>내 여행 만들기</span>
              <span className="rounded-full bg-[#0d72b7] px-2 py-0.5 text-[11px] font-black tracking-normal text-white">
                AI
              </span>
            </Link>

            {navItems.map((item) => {
              if (item.disabled) {
                return (
                  <span
                    key={item.label}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-[16px] font-bold text-gunsan-navy"
                    aria-disabled="true"
                  >
                    {item.label}
                    <small className="text-[11px] font-bold text-slate-400">준비 중</small>
                  </span>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href ?? "/"}
                  className="flex items-center rounded-xl px-4 py-3 text-[16px] font-bold text-gunsan-navy transition hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </details>
      </div>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M5 8h14M5 16h14" />
    </svg>
  );
}
