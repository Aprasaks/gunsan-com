import Link from "next/link";

const travelChoices = [
  { label: "당일치기", href: "/courses/first-gunsan" },
  { label: "1박 2일", href: "/courses/one-night-two-days" },
  { label: "가족", href: "/courses/family" },
  { label: "데이트", href: "/courses/half-day" },
  { label: "먹거리", href: "/courses/first-gunsan" },
  { label: "시간여행", href: "/courses/first-gunsan" },
] as const;

export default function CourseFinder() {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="shrink-0">
        <p className="text-[10px] font-bold tracking-[0.18em] text-sea-blue">CHOOSE YOUR TRIP</p>
        <h2 className="mt-2 text-2xl font-black tracking-[-0.045em] text-gunsan-navy sm:text-3xl">
          어떤 여행을 원하시나요?
        </h2>
      </div>

      <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end" aria-label="여행 유형 선택">
        {travelChoices.map((choice) => (
          <Link
            key={choice.label}
            href={choice.href}
            className="shrink-0 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 transition-colors hover:border-gunsan-navy hover:bg-gunsan-navy hover:text-white"
          >
            {choice.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
