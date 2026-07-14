import Image from "next/image";
import Link from "next/link";

import type { FeaturedPlace } from "@/data/featuredPlaces";

type FeaturedPlaceCardProps = {
  place: FeaturedPlace;
  whyHere: string;
  courseLabel: string;
};

export default function FeaturedPlaceCard({ place, whyHere, courseLabel }: FeaturedPlaceCardProps) {
  return (
    <Link
      href="/places"
      aria-label={`${place.name}가 포함된 장소 목록으로 이동`}
      className="group relative block min-w-0 overflow-hidden rounded-[1.4rem] bg-slate-800 shadow-md shadow-slate-900/10 focus:outline-none focus:ring-4 focus:ring-cyan-200"
    >
      <div className="relative h-[230px] sm:h-[290px]">
        {place.image ? (
          <Image
            src={place.image}
            alt={place.imageAlt}
            fill
            sizes="(min-width: 1024px) 32vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-[#b64b31] px-2.5 py-1 text-[11px] font-black text-white shadow-sm">
          군산 필수
        </span>
        <div className="absolute inset-x-0 bottom-0 p-4 text-white sm:p-5">
          <p className="text-[11px] font-bold text-cyan-100">{courseLabel}</p>
          <h3 className="mt-1 text-xl font-black tracking-[-0.03em] sm:text-2xl">{place.name}</h3>
          <p className="mt-2 line-clamp-2 text-xs font-medium leading-5 text-white/82 sm:text-sm">{whyHere}</p>
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/20 pt-3">
            <span className="text-xs font-bold text-white/68">방문 전 공식 운영 정보 확인</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-base font-black text-[#123f67] transition group-hover:translate-x-1" aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
