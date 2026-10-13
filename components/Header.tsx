"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BrandLogo from "@/components/brand/BrandLogo";

const navItems = [
  { label: "추천 코스", href: "/#courses" },
  { label: "여행지", href: "/places" },
] as const;

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/96 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center px-5 sm:px-8 lg:h-[74px] lg:px-10">
        <div className="shrink-0">
          <BrandLogo />
        </div>

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
          aria-label="주요 메뉴"
        >
          <Link
            href="/#start"
            className="mr-4 inline-flex h-11 items-center gap-2.5 rounded-[10px] bg-gunsan-navy px-5 text-[16px] font-extrabold tracking-[-0.035em] text-white shadow-[0_4px_14px_rgba(15,46,77,0.10)] transition hover:-translate-y-px hover:bg-[#163f67] hover:shadow-[0_7px_18px_rgba(15,46,77,0.14)]"
          >
            <span className="h-2 w-2 rounded-full bg-lantern" aria-hidden="true" />
            여행 만들기
          </Link>

          {navItems.map((item) => {
            const active =
              item.href === "/places"
                ? pathname.startsWith("/places")
                : false;

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "group relative inline-flex h-11 items-center rounded-lg px-4 text-[16px] font-bold tracking-[-0.03em] text-gunsan-navy transition hover:bg-slate-50 hover:text-[#167db8]",
                  active ? "text-[#167db8]" : "",
                ].join(" ")}
              >
                {item.label}
                <span
                  className={[
                    "absolute inset-x-4 bottom-[3px] h-[2px] origin-center scale-x-0 bg-[#167db8] transition-transform group-hover:scale-x-100",
                    active ? "scale-x-100" : "",
                  ].join(" ")}
                  aria-hidden="true"
                />
              </Link>
            );
          })}

          <span className="mx-2 h-5 w-px bg-slate-200" aria-hidden="true" />

          <span
            className="inline-flex h-11 cursor-default items-center rounded-lg px-4 text-[16px] font-bold tracking-[-0.03em] text-gunsan-navy/72"
            title="지금 군산 콘텐츠 준비 중"
          >
            지금 군산
          </span>

          <span
            className="inline-flex h-11 cursor-default items-center rounded-lg px-4 text-[16px] font-bold tracking-[-0.03em] text-gunsan-navy/72"
            title="군산패스 준비 중"
          >
            군산패스
          </span>
        </nav>

        <details className="group relative ml-auto lg:hidden">
          <summary
            className="grid h-11 w-11 cursor-pointer list-none place-items-center rounded-xl text-gunsan-navy transition hover:bg-slate-100 [&::-webkit-details-marker]:hidden"
            aria-label="메뉴 열기"
          >
            <MenuIcon />
          </summary>

          <nav
            className="absolute right-0 top-13 w-72 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
            aria-label="모바일 메뉴"
          >
            <Link
              href="/#start"
              className="mb-2 flex items-center gap-2.5 rounded-xl bg-gunsan-navy px-4 py-3.5 text-[16px] font-extrabold tracking-[-0.03em] text-white"
            >
              <span className="h-2 w-2 rounded-full bg-lantern" aria-hidden="true" />
              여행 만들기
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center rounded-xl px-4 py-3 text-[16px] font-bold tracking-[-0.025em] text-gunsan-navy transition hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-1 border-t border-slate-100" />

            <span className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-bold text-gunsan-navy/60">
              지금 군산
              <small className="text-[11px] font-semibold text-slate-400">준비 중</small>
            </span>
            <span className="flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-bold text-gunsan-navy/60">
              군산패스
              <small className="text-[11px] font-semibold text-slate-400">준비 중</small>
            </span>
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
