const categoryFilters = ["맛집", "카페", "네일/뷰티", "병원/약국", "생활업체"];
const areaFilters = ["월명동", "수송동", "나운동", "조촌동", "미장동"];
const statusFilters = ["업체 제공", "방문자 후기", "방문자 사진", "최근 확인됨", "확인 필요"];
const conditionFilters = ["주차 가능", "남자 가능", "오늘 영업", "방문자 사진 있음"];

export default function FilterPanel() {
  return (
    <aside className="w-full rounded-xl border border-slate-200 bg-white p-5 text-slate-900 lg:w-72">
      <div className="mb-5">
        <h2 className="text-base font-bold text-slate-950">장소 필터</h2>
        <p className="mt-1 text-sm text-slate-500">
          원하는 조건을 골라 군산 장소를 좁혀보세요.
        </p>
      </div>

      <div className="space-y-6">
        <FilterGroup title="카테고리" items={categoryFilters} variant="chip" />
        <FilterGroup title="동네" items={areaFilters} variant="chip" />
        <FilterGroup title="확인 상태" items={statusFilters} variant="checkbox" />
        <FilterGroup title="빠른 조건" items={conditionFilters} variant="checkbox" />
      </div>
    </aside>
  );
}

type FilterGroupProps = {
  title: string;
  items: string[];
  variant: "chip" | "checkbox";
};

function FilterGroup({ title, items, variant }: FilterGroupProps) {
  return (
    <section>
      <h3 className="mb-3 text-sm font-semibold text-slate-800">{title}</h3>
      {variant === "chip" ? (
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <button
              key={item}
              type="button"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            >
              {item}
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => (
            <label
              key={item}
              className="flex cursor-pointer items-center gap-2 text-sm font-medium text-slate-700"
            >
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 text-cyan-700 focus:ring-cyan-600"
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      )}
    </section>
  );
}
