"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { homeCourses } from "@/data/courses";

type Stay = "half-day" | "day-trip" | "one-night" | "two-nights";
type Companion = "solo" | "couple" | "family" | "friends";
type Theme = "sea" | "modern" | "food" | "photo" | "experience";
type Transport = "walk" | "transit" | "car";

type Choice<T extends string> = { value: T; label: string };

const stayChoices: Choice<Stay>[] = [
  { value: "half-day", label: "반나절" },
  { value: "day-trip", label: "당일치기" },
  { value: "one-night", label: "1박 2일" },
  { value: "two-nights", label: "2박 3일" },
];
const companionChoices: Choice<Companion>[] = [
  { value: "solo", label: "혼자" },
  { value: "couple", label: "커플" },
  { value: "family", label: "가족" },
  { value: "friends", label: "친구" },
];
const themeChoices: Choice<Theme>[] = [
  { value: "sea", label: "바다" },
  { value: "modern", label: "근대문화" },
  { value: "food", label: "먹거리" },
  { value: "photo", label: "사진" },
  { value: "experience", label: "체험" },
];
const transportChoices: Choice<Transport>[] = [
  { value: "walk", label: "도보" },
  { value: "transit", label: "대중교통" },
  { value: "car", label: "자동차" },
];

const stayMatches: Record<Stay, string[]> = {
  "half-day": ["half-day", "first-gunsan", "rainy-day"],
  "day-trip": ["first-gunsan", "half-day", "seonyudo"],
  "one-night": ["one-night-two-days", "first-gunsan", "seonyudo"],
  "two-nights": ["two-nights-three-days", "one-night-two-days", "seonyudo"],
};

const themeMatches: Record<Theme, string[]> = {
  sea: ["seonyudo", "one-night-two-days", "two-nights-three-days"],
  modern: ["first-gunsan", "half-day", "rainy-day"],
  food: ["first-gunsan", "one-night-two-days", "half-day"],
  photo: ["half-day", "first-gunsan", "seonyudo"],
  experience: ["family", "first-gunsan", "two-nights-three-days"],
};

export default function CourseFinder() {
  const [stay, setStay] = useState<Stay>("day-trip");
  const [companion, setCompanion] = useState<Companion>("couple");
  const [theme, setTheme] = useState<Theme>("modern");
  const [transport, setTransport] = useState<Transport>("car");

  const results = useMemo(() => {
    const scores = new Map<string, number>();
    const score = (slugs: string[], weight: number) => slugs.forEach((slug, index) => {
      scores.set(slug, (scores.get(slug) ?? 0) + weight - index);
    });

    score(stayMatches[stay], 8);
    score(themeMatches[theme], 6);
    if (companion === "family") score(["family", "rainy-day"], 10);
    if (transport !== "car") score(["half-day", "first-gunsan", "rainy-day"], 4);
    if (transport === "car") score(["seonyudo", "one-night-two-days"], 3);

    return [...homeCourses]
      .sort((a, b) => (scores.get(b.slug) ?? 0) - (scores.get(a.slug) ?? 0))
      .slice(0, 3);
  }, [companion, stay, theme, transport]);

  const primary = results[0];
  const selectionLabel = [
    labelOf(stayChoices, stay),
    labelOf(companionChoices, companion),
    labelOf(themeChoices, theme),
    labelOf(transportChoices, transport),
  ].join(" · ");

  return (
    <div className="mt-10 border-y border-slate-300/80 bg-white/72 py-7 sm:px-7 lg:px-9 lg:py-9">
      <div className="grid gap-x-8 gap-y-7 md:grid-cols-2 xl:grid-cols-4">
        <ChoiceGroup number="01" legend="얼마나 머무나요?" choices={stayChoices} value={stay} onChange={setStay} />
        <ChoiceGroup number="02" legend="누구와 여행하나요?" choices={companionChoices} value={companion} onChange={setCompanion} />
        <ChoiceGroup number="03" legend="어떤 여행을 좋아하나요?" choices={themeChoices} value={theme} onChange={setTheme} />
        <ChoiceGroup number="04" legend="어떻게 이동하나요?" choices={transportChoices} value={transport} onChange={setTransport} />
      </div>

      {primary ? (
        <div className="mt-9 grid gap-5 bg-gunsan-navy px-5 py-6 text-white sm:px-7 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <p className="text-[10px] font-black tracking-[0.16em] text-[#9ecadf]">{selectionLabel}</p>
            <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-sm font-bold text-lantern">가장 잘 맞는 코스</span>
              <h3 className="text-2xl font-black tracking-[-0.05em] sm:text-3xl">{primary.title}</h3>
            </div>
            <p className="mt-2 text-sm font-medium leading-6 text-white/62">{primary.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold text-white/58">
              {results.slice(1).map((course) => (
                <Link key={course.id} href={`/courses/${course.slug}`} className="border-b border-white/25 pb-0.5 hover:text-white">
                  대안 · {course.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <Link href={`/courses/${primary.slug}#preview`} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/28 px-5 text-sm font-black hover:bg-white/10">
              ▶ 먼저 보기
            </Link>
            <Link href={`/courses/${primary.slug}`} className="inline-flex min-h-12 items-center justify-center rounded-full bg-lantern px-6 text-sm font-black text-gunsan-navy hover:bg-[#ffad5e]">
              이 코스로 여행하기 →
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function ChoiceGroup<T extends string>({ number, legend, choices, value, onChange }: {
  number: string;
  legend: string;
  choices: Choice<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset>
      <legend className="flex items-center gap-2.5 text-sm font-black text-gunsan-navy">
        <span className="font-mono text-[10px] tracking-[0.08em] text-sea-blue">{number}</span>
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
                "rounded-full border px-3.5 py-2 text-sm font-bold transition",
                selected
                  ? "border-gunsan-navy bg-gunsan-navy text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-sea-blue hover:text-gunsan-navy",
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
