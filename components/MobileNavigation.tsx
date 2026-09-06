import Link from "next/link";

const items = [
  { label: "홈", href: "/", icon: "⌂" },
  { label: "지도", href: "/map", icon: "⌖" },
  { label: "코스", href: "/#start", icon: "→", primary: true },
  { label: "저장", href: "/#preview", icon: "♡" },
  { label: "MY", href: "/owners", icon: "·" },
] as const;

export default function MobileNavigation() {
  return (
    <nav
      className="fixed inset-x-3 bottom-3 z-[70] grid grid-cols-5 rounded-2xl border border-white/70 bg-white/94 px-2 py-2 shadow-[0_16px_50px_rgba(8,27,40,0.2)] backdrop-blur-xl lg:hidden"
      aria-label="모바일 주요 메뉴"
    >
      {items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={[
            "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-bold",
            "primary" in item && item.primary ? "-mt-5 bg-lantern text-gunsan-navy shadow-lg shadow-orange-950/15" : "text-slate-500",
          ].join(" ")}
        >
          <span className={"primary" in item && item.primary ? "text-xl" : "text-lg"} aria-hidden="true">
            {item.icon}
          </span>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
