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
      className="group block min-w-0 focus:outline-none"
    >
      <div className="relative h-[84px] overflow-hidden rounded-lg border border-slate-200 bg-slate-100 transition group-hover:border-cyan-300 group-focus:ring-4 group-focus:ring-cyan-100">
        {place.image ? (
          <Image
            src={place.image}
            alt={place.imageAlt}
            fill
            sizes="(min-width: 1280px) 140px, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-200 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative h-full bg-gradient-to-br from-slate-100 via-sky-50 to-white">
            <span
              className="absolute bottom-[-18px] right-[-10px] h-16 w-16 rounded-full bg-cyan-100/55"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-3 left-3 h-2 w-12 rounded-full bg-white/80"
              aria-hidden="true"
            />
            <span
              className="absolute bottom-6 left-3 h-2 w-20 rounded-full bg-white/70"
              aria-hidden="true"
            />
          </div>
        )}
        <span className="absolute bottom-2 left-2 rounded-full bg-cyan-700/90 px-2 py-0.5 text-[10px] font-bold text-white ring-1 ring-white/40">
          {place.badge}
        </span>
      </div>

      <div className="mt-1.5 min-h-[58px] rounded-lg border border-slate-200 bg-white px-2 py-1.5 transition group-hover:border-cyan-200 group-hover:bg-cyan-50">
        <h3 className="truncate text-[13px] font-bold leading-4 text-slate-950 transition group-hover:text-cyan-800">
          {place.name}
        </h3>
        <p className="mt-0.5 truncate text-[10px] font-semibold text-slate-500">
          {place.meta}
        </p>
        <p className="mt-0.5 line-clamp-1 text-[10px] leading-4 text-slate-600">
          {place.description}
        </p>
      </div>
    </Link>
  );
}
