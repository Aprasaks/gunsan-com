import Link from "next/link";

const categoryLinks = [
  { label: "먹거리", href: "/places" },
  { label: "카페", href: "/places" },
  { label: "여행", href: "/places" },
  { label: "생활", href: "/places" },
  { label: "행사", href: "/places" },
  { label: "지도", href: "/map" },
] as const;

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-[1280px] items-center gap-6 px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" className="shrink-0" aria-label="군산.com 홈">
          <span className="block text-[1.65rem] font-black leading-none tracking-[-0.055em] sm:text-[1.8rem]">
            <span className="text-[#123f67]">군산</span>
            <span className="text-[#0786a5]">.com</span>
          </span>
        </Link>

        <nav
          className="hidden h-full items-center gap-1 lg:flex"
          aria-label="군산 정보 종류"
        >
          {categoryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex h-full items-center border-b-2 border-transparent px-4 text-[15px] font-bold text-slate-700 transition hover:border-cyan-600 hover:text-cyan-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <nav className="ml-auto flex items-center gap-2" aria-label="서비스 메뉴">
          <Link
            href="/submit"
            className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-cyan-300 hover:text-cyan-800 sm:inline-flex"
          >
            정보 제보
          </Link>
          <Link
            href="/owners"
            className="rounded-full bg-[#123f67] px-3.5 py-2 text-sm font-bold text-white transition hover:bg-[#0b3153] sm:px-4"
          >
            사장님 등록
          </Link>
        </nav>
      </div>

      <nav
        className="flex overflow-x-auto border-t border-slate-100 px-3 lg:hidden"
        aria-label="모바일 군산 정보 종류"
      >
        {categoryLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="shrink-0 px-3 py-2.5 text-sm font-bold text-slate-700"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
