"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Stay = "day-trip" | "one-night" | "two-nights";
type Transport = "car" | "train";
type Companion = "couple" | "family-kids" | "family-parents" | "friends" | "solo";

type Choice<T extends string> = {
  value: T;
  label: string;
};

const stayChoices: Choice<Stay>[] = [
  { value: "day-trip", label: "당일치기" },
  { value: "one-night", label: "1박 2일" },
  { value: "two-nights", label: "2박 3일" },
];

const companionChoices: Choice<Companion>[] = [
  { value: "couple", label: "커플" },
  { value: "family-kids", label: "아이와 가족" },
  { value: "family-parents", label: "부모님과" },
  { value: "friends", label: "친구" },
  { value: "solo", label: "혼자" },
];

const transportChoices: Choice<Transport>[] = [
  { value: "car", label: "자가용" },
  { value: "train", label: "대중교통" },
];

const stayResults: Record<Stay, { title: string; description: string; href: string }> = {
  "day-trip": {
    title: "반나절 군산 핵심",
    description: "근대도시의 대표 장면을 짧게 이어보는 코스",
    href: "/courses/half-day",
  },
  "one-night": {
    title: "1박 2일 처음 여행",
    description: "도심과 바다를 하루씩 나눠 보는 기본 코스",
    href: "/courses/one-night-two-days",
  },
  "two-nights": {
    title: "2박 3일 천천히 군산",
    description: "도심·산책·바다를 여유 있게 나누는 코스",
    href: "/courses/two-nights-three-days",
  },
};

const companionCourse: Partial<Record<Companion, string>> = {
  "family-kids": "/courses/family",
};

export default function CourseFinder() {
  const [stay, setStay] = useState<Stay>("one-night");
  const [companion, setCompanion] = useState<Companion>("couple");
  const [transport, setTransport] = useState<Transport>("car");

  const result = useMemo(() => {
    const base = stayResults[stay];
    const overrideHref = companionCourse[companion];

    return {
      ...base,
      href: overrideHref ?? base.href,
      summary: `${labelOf(stayChoices, stay)} · ${labelOf(companionChoices, companion)} · ${labelOf(transportChoices, transport)}`,
    };
  }, [companion, stay, transport]);

  return (
    <div className="mt-8 rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-5">
        <ChoiceGroup number="1" legend="얼마나 머물러요?" choices={stayChoices} value={stay} onChange={setStay} />
        <ChoiceGroup number="2" legend="누구와 가나요?" choices={companionChoices} value={companion} onChange={setCompanion} />
        <ChoiceGroup number="3" legend="이동수단은?" choices={transportChoices} value={transport} onChange={setTransport} />
      </div>

      <div className="mt-7 flex flex-col gap-5 rounded-[1.4rem] bg-[#0d3557] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div>
          <p className="text-xs font-black tracking-[0.12em] text-cyan-200">{result.summary}</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.045em]">{result.title}</h3>
          <p className="mt-1.5 text-sm font-semibold text-white/62">{result.description}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Link href={`${result.href}#preview`} className="rounded-full border border-white/25 bg-white/8 px-4 py-2.5 text-sm font-black text-white transition hover:bg-white/14">
            ▶ 먼저 보기
          </Link>
          <Link href={result.href} className="rounded-full bg-white px-4 py-2.5 text-sm font-black text-[#0d3557] transition hover:bg-cyan-50">
            이 코스로 가기 →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ChoiceGroup<T extends string>({
  number,
  legend,
  choices,
  value,
  onChange,
}: {
  number: string;
  legend: string;
  choices: Choice<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="flex items-center gap-2 text-sm font-black text-[#0d3557]">
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#e7f3ff] text-xs font-black text-[#0f75d8]">{number}</span>
        {legend}
      </legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {choices.map((choice) => {
          const selected = choice.value === value;

          return (
            <button
              key={choice.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(choice.value)}
              className={[
                "rounded-full border px-3.5 py-2.5 text-sm font-black transition",
                selected
                  ? "border-[#0f75d8] bg-[#0f75d8] text-white"
                  : "border-slate-200 bg-[#f8fafc] text-slate-600 hover:border-blue-300 hover:text-[#0f75d8]",
              ].join(" ")}
            >
              {choice.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

function labelOf<T extends string>(choices: Choice<T>[], value: T) {
  return choices.find((choice) => choice.value === value)?.label ?? value;
}
