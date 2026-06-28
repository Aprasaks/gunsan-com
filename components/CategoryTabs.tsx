const categories = ["맛집", "카페", "네일/뷰티", "병원/약국", "생활업체"] as const;

export type PlaceCategory = (typeof categories)[number];

type CategoryTabsProps = {
  selectedCategory?: PlaceCategory;
  onCategorySelect?: (category: PlaceCategory) => void;
};

export default function CategoryTabs({
  selectedCategory,
  onCategorySelect,
}: CategoryTabsProps) {
  return (
    <section className="bg-white px-5 py-4 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div
          className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0"
          role="tablist"
          aria-label="장소 카테고리"
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => onCategorySelect?.(category)}
                className={[
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-cyan-100",
                  isSelected
                    ? "border-cyan-700 bg-cyan-700 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-700 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
