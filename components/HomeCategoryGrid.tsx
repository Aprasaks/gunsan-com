import Link from "next/link";

type CategoryKind =
  | "food"
  | "cafe"
  | "medical"
  | "service"
  | "stay"
  | "travel"
  | "event"
  | "beauty";

type HomeCategory = {
  label: string;
  description: string;
  kind: CategoryKind;
  href?: string;
};

const homeCategories = [
  {
    label: "맛집",
    description: "군산 맛집 총정리",
    kind: "food",
    href: "/places",
  },
  {
    label: "카페",
    description: "분위기 좋은 카페",
    kind: "cafe",
    href: "/places",
  },
  {
    label: "병원/약국",
    description: "진료·처방 정보",
    kind: "medical",
    href: "/places",
  },
  {
    label: "생활업체",
    description: "우리동네 업체",
    kind: "service",
    href: "/places",
  },
  {
    label: "숙박",
    description: "호텔·펜션·게스트하우스",
    kind: "stay",
  },
  {
    label: "관광/여행",
    description: "명소·추천코스",
    kind: "travel",
  },
  {
    label: "행사·축제",
    description: "이벤트 행사 확인",
    kind: "event",
  },
  {
    label: "네일/뷰티",
    description: "뷰티 & 케어샵",
    kind: "beauty",
    href: "/places",
  },
] as const satisfies readonly HomeCategory[];

function CategoryVisual({ kind }: { kind: CategoryKind }) {
  const colorMap: Record<CategoryKind, string> = {
    food: "bg-orange-50 border-orange-100 text-orange-700",
    cafe: "bg-amber-50 border-amber-100 text-amber-700",
    medical: "bg-rose-50 border-rose-100 text-rose-700",
    service: "bg-sky-50 border-sky-100 text-sky-700",
    stay: "bg-violet-50 border-violet-100 text-violet-700",
    travel: "bg-teal-50 border-teal-100 text-teal-700",
    event: "bg-yellow-50 border-yellow-100 text-yellow-700",
    beauty: "bg-pink-50 border-pink-100 text-pink-700",
  };

  const labelMap: Record<CategoryKind, string> = {
    food: "밥",
    cafe: "컵",
    medical: "+",
    service: "공구",
    stay: "침대",
    travel: "길",
    event: "빛",
    beauty: "케어",
  };

  return (
    <div
      className={[
        "relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border",
        colorMap[kind],
      ].join(" ")}
      aria-hidden="true"
    >
      <span className="absolute -right-2 -top-2 h-7 w-7 rounded-full bg-white/65" />
      <span className="absolute bottom-1.5 right-1.5 h-3 w-3 rounded-full bg-current opacity-20" />
      <span className="grid h-full place-items-center text-[11px] font-black">
        {labelMap[kind]}
      </span>
    </div>
  );
}

function CategoryCard({ category }: { category: HomeCategory }) {
  const isActive = Boolean(category.href);
  const content = (
    <div className="flex min-h-[4.6rem] items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2.5 shadow-sm shadow-slate-200/30">
      <div className="min-w-0">
        <div className="flex items-center gap-1.5">
          <h3 className="truncate text-sm font-bold text-slate-950">
            {category.label}
          </h3>
          {!isActive ? (
            <span className="rounded-full border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[10px] font-bold text-slate-500">
              예정
            </span>
          ) : null}
        </div>
        <p className="mt-1 line-clamp-1 text-xs font-semibold text-slate-500">
          {category.description}
        </p>
      </div>
      <CategoryVisual kind={category.kind} />
    </div>
  );

  if (category.href) {
    return (
      <Link
        href={category.href}
        className="block transition hover:-translate-y-0.5 hover:opacity-90 focus:outline-none focus:ring-4 focus:ring-cyan-100"
      >
        {content}
      </Link>
    );
  }

  return (
    <div aria-disabled="true" className="cursor-default">
      {content}
    </div>
  );
}

export default function HomeCategoryGrid() {
  return (
    <section className="border-b border-slate-100 bg-white px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-8 lg:overflow-visible lg:pb-0">
          {homeCategories.map((category) => (
            <div key={category.label} className="w-[11rem] shrink-0 lg:w-auto">
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
