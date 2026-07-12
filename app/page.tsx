import Link from "next/link";

import FeaturedPlaceCard from "@/components/FeaturedPlaceCard";
import Header from "@/components/Header";
import SearchHero from "@/components/SearchHero";
import TodayGunsanSection from "@/components/TodayGunsanSection";
import { featuredPlaces } from "@/data/featuredPlaces";

const firstVisitChoices = [
  { label: "밥 먹을 곳", description: "혼밥부터 가족 식사까지" },
  { label: "카페 갈 곳", description: "주차와 분위기를 함께 확인" },
  { label: "아이랑 갈 곳", description: "아이 동반 정보를 먼저 확인" },
  { label: "선유도", description: "섬 여행 전 필요한 정보" },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] pb-20 text-slate-950 lg:pb-0">
      <Header />
      <SearchHero />

      <section className="px-4 py-5 sm:px-6 sm:py-7 lg:px-8 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1280px] gap-5 lg:grid-cols-[0.8fr_1.55fr_1fr] lg:gap-6">
          <div className="order-2 hidden lg:block">
            <SectionTitle title="오늘 군산에서" description="방문 전에 필요한 정보를 확인하세요." />
            <div className="mt-3">
              <TodayGunsanSection />
            </div>
          </div>

          <section className="order-1">
            <div className="flex items-end justify-between gap-3">
              <SectionTitle title="오늘 많이 찾는 곳" description="군산에서 먼저 살펴볼 장소를 골랐어요." />
              <Link href="/places" className="shrink-0 text-sm font-extrabold text-cyan-800 hover:text-cyan-950">
                전체 보기 →
              </Link>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-3">
              {featuredPlaces.slice(0, 3).map((place) => (
                <FeaturedPlaceCard key={place.slug} place={place} />
              ))}
            </div>
          </section>

          <section className="order-3 hidden lg:block">
            <SectionTitle title="군산 처음이라면" description="목적부터 고르면 탐색이 빨라집니다." />
            <div className="mt-3 grid grid-cols-2 gap-2">
              {firstVisitChoices.map((choice) => (
                <Link
                  key={choice.label}
                  href="/places"
                  className="group rounded-xl border border-slate-200 bg-white p-3 transition hover:border-cyan-300 hover:shadow-sm"
                >
                  <h3 className="text-sm font-black text-slate-900 group-hover:text-cyan-800">{choice.label}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{choice.description}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>

      <nav className="fixed inset-x-0 bottom-0 z-50 grid h-16 grid-cols-4 border-t border-slate-200 bg-white/95 px-2 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(15,23,42,0.08)] backdrop-blur lg:hidden" aria-label="모바일 주요 메뉴">
        <MobileNavItem href="/" label="홈" icon="⌂" />
        <MobileNavItem href="/map" label="지도" icon="◇" />
        <MobileNavItem href="#main-search" label="검색" icon="⌕" />
        <MobileNavItem href="/submit" label="제보" icon="+" />
      </nav>
    </main>
  );
}

function SectionTitle({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h2 className="text-lg font-black tracking-[-0.02em] text-slate-950 sm:text-xl">{title}</h2>
      <p className="mt-1 text-xs font-medium leading-5 text-slate-500 sm:text-sm">{description}</p>
    </div>
  );
}

function MobileNavItem({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <Link href={href} className="flex flex-col items-center justify-center gap-0.5 text-xs font-bold text-slate-600 hover:text-cyan-800">
      <span className="text-xl leading-none" aria-hidden="true">{icon}</span>
      {label}
    </Link>
  );
}
