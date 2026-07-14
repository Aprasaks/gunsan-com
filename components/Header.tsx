import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { label: "코스", href: "/#courses" },
  { label: "필수장소", href: "/#essential" },
  { label: "대표먹거리", href: "/#food" },
  { label: "군산다운카페", href: "/#cafe" },
  { label: "선유도", href: "/#course-seonyudo" },
  { label: "지도", href: "/map" },
] as const;

export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={[
        "z-40 w-full border-b",
        overlay
          ? "absolute inset-x-0 top-0 border-white/25 bg-transparent"
          : "border-slate-200 bg-white",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1540px] items-center px-4 sm:px-6 lg:h-[7.25rem] lg:px-10">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="군산.com 홈">
          <Image src="/images/logo.png" alt="" width={292} height={279} className="h-11 w-11 object-contain drop-shadow-sm lg:h-16 lg:w-16" />
          <span className={[
            "text-[1.75rem] font-semibold leading-none tracking-[0.03em] sm:text-[2rem] lg:text-[2.65rem]",
            overlay ? "text-white drop-shadow-sm" : "text-slate-950",
          ].join(" ")}>
            군산<span className={overlay ? "font-extrabold text-white" : "font-extrabold text-[#ee712f]"}>.com</span>
          </span>
        </Link>

        <nav className="ml-10 hidden h-full items-center gap-5 xl:flex 2xl:ml-14 2xl:gap-8" aria-label="주요 메뉴">
          {primaryLinks.map((link) => (
            <Link key={link.label} href={link.href} className={[
              "inline-flex h-full items-center text-base font-extrabold tracking-[-0.03em] transition 2xl:text-lg",
              overlay ? "text-white drop-shadow-sm hover:text-orange-200" : "text-slate-900 hover:text-[#dc5b32]",
            ].join(" ")}>
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="ml-auto flex items-center gap-1 sm:gap-3" aria-label="서비스 메뉴">
          <Link href="/submit" className={[
            "hidden px-2 py-3 text-sm font-bold transition sm:block lg:text-base",
            overlay ? "text-white drop-shadow-sm hover:text-orange-200" : "text-slate-700 hover:text-[#dc5b32]",
          ].join(" ")}>제보하기</Link>
          <Link href="/owners" className={[
            "hidden px-2 py-3 text-sm font-bold transition md:block lg:text-base",
            overlay ? "text-white drop-shadow-sm hover:text-orange-200" : "text-slate-700 hover:text-[#dc5b32]",
          ].join(" ")}>사장님등록</Link>
          <Link href="/places" aria-label="전체 장소 검색" className={[
            "grid h-11 w-11 place-items-center rounded-full transition",
            overlay ? "text-white hover:bg-white/15" : "text-slate-900 hover:bg-slate-100",
          ].join(" ")}>
            <SearchIcon />
          </Link>
          <Link href="/#courses" aria-label="코스 메뉴" className={[
            "grid h-11 w-11 place-items-center rounded-full transition xl:hidden",
            overlay ? "text-white hover:bg-white/15" : "text-slate-900 hover:bg-slate-100",
          ].join(" ")}>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </Link>
        </nav>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}
