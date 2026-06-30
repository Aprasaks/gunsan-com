import Image from "next/image";
import Link from "next/link";

import EventFestivalSection from "@/components/EventFestivalSection";
import Header from "@/components/Header";
import HomeCategoryGrid from "@/components/HomeCategoryGrid";
import MapPreviewSection from "@/components/MapPreviewSection";
import NeighborhoodSection from "@/components/NeighborhoodSection";
import PopularInfoSection from "@/components/PopularInfoSection";
import SearchHero from "@/components/SearchHero";
import TodayGunsanSection from "@/components/TodayGunsanSection";
import { places } from "@/data/places";

const featuredPlaces = places.slice(0, 5);

const placeCategoryImages = {
  맛집: {
    src: "/images/categories/category-food.webp",
    alt: "맛집 카테고리 이미지",
  },
  카페: {
    src: "/images/categories/category-cafe.webp",
    alt: "카페 카테고리 이미지",
  },
  "병원/약국": {
    src: "/images/categories/category-medical.webp",
    alt: "병원과 약국 카테고리 이미지",
  },
  생활업체: {
    src: "/images/categories/category-service.webp",
    alt: "생활업체 카테고리 이미지",
  },
  "네일/뷰티": {
    src: "/images/categories/category-beauty.webp",
    alt: "네일과 뷰티 카테고리 이미지",
  },
} as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <SearchHero />

      <HomeCategoryGrid />

      <section className="px-4 pb-3 pt-2 sm:px-6 lg:px-8 lg:pb-4 lg:pt-2">
        <div className="mx-auto w-full max-w-[1440px] rounded-xl border border-slate-200 bg-white/80 p-2 shadow-sm shadow-slate-200/50">
          <div className="grid gap-2.5 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.6fr)_minmax(0,0.78fr)]">
            <PopularInfoSection />

            <section className="rounded-lg border border-slate-200 bg-white p-2.5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <SectionHeader
                  eyebrow="군산 장소 둘러보기"
                  title="가볍게 둘러보는 군산 장소"
                  description="방문 전 확인할 정보를 짧게 모았습니다."
                />
                <Link
                  href="/places"
                  aria-label="군산 장소 목록 페이지로 이동"
                  className="inline-flex h-8 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-3 text-xs font-semibold text-cyan-800 transition hover:border-cyan-300 hover:bg-cyan-100 sm:w-auto"
                >
                  더 보기
                </Link>
              </div>

              <div className="mt-2 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
                {featuredPlaces.slice(0, 4).map((place) => (
                  <Link
                    key={place.id}
                    href={`/places/${place.slug}`}
                    aria-label={`${place.name} 상세페이지로 이동`}
                    className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
                  >
                    <div className="relative h-16 bg-white">
                      <Image
                        src={placeCategoryImages[place.category].src}
                        alt={placeCategoryImages[place.category].alt}
                        fill
                        sizes="(min-width: 1280px) 150px, 50vw"
                        className="object-cover"
                      />
                      <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-cyan-800">
                        {place.statuses[0]}
                      </span>
                    </div>
                    <div className="min-w-0 p-2">
                      <h3 className="truncate text-sm font-bold text-slate-950">
                        {place.name}
                      </h3>
                      <p className="mt-0.5 truncate text-[11px] font-semibold text-slate-500">
                        {place.category} · {place.area}
                      </p>
                      <p className="mt-1 line-clamp-1 text-xs leading-4 text-slate-600">
                        {place.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <TodayGunsanSection />
          </div>

          <div className="mt-2 grid gap-2.5 lg:grid-cols-3">
            <EventFestivalSection />
            <MapPreviewSection />
            <NeighborhoodSection />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold text-cyan-700">{eyebrow}</p>
      <h2 className="mt-0.5 max-w-3xl text-base font-bold leading-tight text-slate-950 sm:text-lg">
        {title}
      </h2>
      <p className="mt-0.5 max-w-3xl text-xs leading-5 text-slate-600">
        {description}
      </p>
    </div>
  );
}
