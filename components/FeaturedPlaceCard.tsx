import Image from "next/image";
import Link from "next/link";

import type { FeaturedPlace } from "@/data/featuredPlaces";

type FeaturedPlaceCardProps = {
  place: FeaturedPlace;
};

export default function FeaturedPlaceCard({ place }: FeaturedPlaceCardProps) {
  return (
    <Link
      href="/places"
      aria-label={`${place.name} 관련 장소 목록으로 이동`}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-slate-50 transition hover:border-cyan-300 hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-cyan-100"
    >
      <div className="relative h-14 bg-sky-50">
        {place.image ? (
          <Image
            src={place.image}
            alt={place.imageAlt}
            fill
            sizes="(min-width: 1280px) 130px, 50vw"
            className="object-cover transition duration-200 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full items-end justify-end overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">
            <span
              className="mb-[-18px] mr-[-12px] h-16 w-16 rounded-full border border-cyan-100 bg-cyan-100/70"
              aria-hidden="true"
            />
            <span
              className="mb-3 mr-[-8px] h-8 w-16 rounded-full border border-sky-100 bg-white/80"
              aria-hidden="true"
            />
          </div>
        )}
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-bold text-cyan-800">
          {place.badge}
        </span>
      </div>

      <div className="min-w-0 p-2">
        <h3 className="truncate text-sm font-bold text-slate-950">
          {place.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-4 text-slate-600">
          {place.description}
        </p>
      </div>
    </Link>
  );
}
