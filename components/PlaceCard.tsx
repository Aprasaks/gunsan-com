import Link from "next/link";

import StatusBadge from "@/components/StatusBadge";
import type { Place } from "@/types/place";

type PlaceCardProps = {
  place: Place;
};

export default function PlaceCard({ place }: PlaceCardProps) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-200 sm:p-5">
      <div className="flex flex-wrap gap-2">
        {place.statuses.map((status) => (
          <StatusBadge key={status} status={status} />
        ))}
      </div>

      <div className="mt-4">
        <p className="text-sm font-medium text-slate-500">
          {place.area} · {place.category}
        </p>
        <h2 className="mt-1 text-lg font-bold text-slate-950 sm:text-xl">
          {place.name}
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {place.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {place.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <span>후기 {place.reviewCount}개</span>
          <span>최근 확인 {place.lastVerifiedAt}</span>
        </div>
        <Link
          href={`/places/${place.slug}`}
          className="inline-flex h-10 items-center justify-center rounded-lg border border-cyan-100 bg-cyan-50 px-3 font-semibold text-cyan-700 transition hover:text-cyan-800 sm:h-auto sm:border-0 sm:bg-transparent sm:px-0"
        >
          상세 보기
        </Link>
      </div>
    </article>
  );
}
