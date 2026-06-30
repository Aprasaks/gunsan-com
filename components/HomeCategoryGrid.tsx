import Image from "next/image";
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
    description: "맛집 정리",
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

const categoryImageMap: Record<CategoryKind, { src: string; alt: string }> = {
  food: {
    src: "/images/categories/category-food.webp",
    alt: "맛집 카테고리 이미지",
  },
  cafe: {
    src: "/images/categories/category-cafe.webp",
    alt: "카페 카테고리 이미지",
  },
  medical: {
    src: "/images/categories/category-medical.webp",
    alt: "병원과 약국 카테고리 이미지",
  },
  service: {
    src: "/images/categories/category-service.webp",
    alt: "생활업체 카테고리 이미지",
  },
  stay: {
    src: "/images/categories/category-stay.webp",
    alt: "숙박 카테고리 이미지",
  },
  travel: {
    src: "/images/categories/category-travel.webp",
    alt: "관광과 여행 카테고리 이미지",
  },
  event: {
    src: "/images/categories/category-event.webp",
    alt: "행사와 축제 카테고리 이미지",
  },
  beauty: {
    src: "/images/categories/category-beauty.webp",
    alt: "네일과 뷰티 카테고리 이미지",
  },
};

function CategoryVisual({ kind }: { kind: CategoryKind }) {
  const image = categoryImageMap[kind];

  return (
    <div className="relative -mb-1 -mr-1 h-11 w-11 shrink-0 self-end overflow-hidden rounded-[1rem] bg-slate-50">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="44px"
        className="object-cover"
      />
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
    <section className="bg-white px-4 py-3 sm:px-6 lg:px-8">
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
