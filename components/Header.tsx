import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { label: "여행코스", href: "/#courses" },
  { label: "미리여행", href: "/#preview" },
  { label: "여행지도", href: "/map" },
  { label: "현장 QR", href: "/#spot" },
] as const;

export default function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header
      className={[
        "z-50 w-full border-b",
        overlay
          ? "absolute inset-x-0 top-0 border-white/15 bg-gradient-to-b from-black/35 to-transparent"
          : "sticky top-0 border-slate-200/80 bg-white/90 backdrop-blur-xl",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center px-4 sm:px-6 lg:h-[5.5rem] lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="군산.com 홈">
          <Image
            src="/images/logo.png"
            alt=""
            width={292}
            height={279}
            className="h-10 w-10 object-contain drop-shadow-sm lg:h-12 lg:w-12"
          />
          <span
            className={[
              "text-[1.55rem] font-black leading-none tracking-[-0.04em] lg:text-[1.85rem]",
              overlay ? "text-white drop-shadow-sm" : "text-[#0d3557]",
            ].join(" ")}
          >
            군산<span className={overlay ? "text-cyan-100" : "text-[#0f75d8]"}>.com</span>
          </span>
        </Link>

        <nav className="ml-10 hidden items-center gap-7 lg:flex" aria-label="주요 메뉴">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={[
                "text-sm font-extrabold tracking-[-0.02em] transition",
                overlay ? "text-white/90 hover:text-white" : "text-slate-700 hover:text-[#0f75d8]",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/places"
            aria-label="장소 검색"
            className={[
              "grid h-10 w-10 place-items-center rounded-full transition",
              overlay ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-100",
            ].join(" ")}
          >
            <SearchIcon />
          </Link>
          <Link
            href="/#start"
            className={[
              "hidden rounded-full px-4 py-2.5 text-sm font-black transition sm:inline-flex",
              overlay
                ? "bg-white text-[#0d3557] hover:bg-cyan-50"
                : "bg-[#0f75d8] text-white hover:bg-[#0b66bf]",
            ].join(" ")}
          >
            코스 추천받기
          </Link>
          <Link
            href="/#start"
            aria-label="코스 추천받기"
            className={[
              "grid h-10 w-10 place-items-center rounded-full transition sm:hidden",
              overlay ? "text-white hover:bg-white/10" : "text-slate-800 hover:bg-slate-100",
            ].join(" ")}
          >
            <MenuIcon />
          </Link>
        </div>
      </div>
    </header>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5.5 w-5.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 5 5" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <path d="M5 7h14M5 12h14M5 17h14" />
    </svg>
  );
}
