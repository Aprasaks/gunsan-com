import Link from "next/link";

import BrandLogo from "@/components/brand/BrandLogo";

const footerLinks = [
  { label: "여행코스", href: "/#courses" },
  { label: "여행지도", href: "/map" },
  { label: "정보 제보", href: "/submit" },
  { label: "사장님 안내", href: "/owners" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-gunsan-navy px-5 pb-28 pt-12 text-white sm:px-8 sm:pb-10 lg:px-10 lg:pt-16">
      <div className="mx-auto grid w-full max-w-[1280px] gap-10 border-b border-white/12 pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <BrandLogo inverse />
          <p className="mt-6 max-w-xl text-2xl font-extrabold leading-snug tracking-[-0.04em] sm:text-3xl">
            걷는 순간, 다시 만나는 군산
          </p>
          <p className="mt-3 text-sm font-medium leading-6 text-white/58">
            시간이 머문 거리에서, 새로운 여행이 시작됩니다.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-white/72" aria-label="하단 메뉴">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-2 pt-6 text-xs leading-5 text-white/42 sm:flex-row sm:justify-between">
        <p>군산 여행을 고르는 시간을 줄이고, 실제 이동 순서를 안내합니다.</p>
        <p>운영 정보는 방문 전 각 장소의 공식 출처에서 확인해 주세요.</p>
      </div>
    </footer>
  );
}
