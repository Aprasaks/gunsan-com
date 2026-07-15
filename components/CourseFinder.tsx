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

const transportChoices: Choice<Transport>[] = [
  { value: "car", label: "자가용" },
  { value: "train", label: "기차·대중교통" },
];

const companionChoices: Choice<Companion>[] = [
  { value: "couple", label: "커플" },
  { value: "family-kids", label: "아이와 가족" },
  { value: "family-parents", label: "부모님과 가족" },
  { value: "friends", label: "친구" },
  { value: "solo", label: "혼자" },
];

const stayResults: Record<Stay, { title: string; description: string; href: string }> = {
  "day-trip": {
    title: "반나절 군산 핵심",
    description: "근대거리와 대표 풍경에 집중하고, 선유도는 별도의 하루로 나누는 편이 안전합니다.",
    href: "#course-half-day",
  },
  "one-night": {
    title: "1박 2일 처음 여행",
    description: "첫날은 근대도시, 다음 날은 새만금과 바다 방향으로 여행의 결을 나눕니다.",
    href: "#course-one-night-two-days",
  },
  "two-nights": {
    title: "2박 3일 천천히 군산",
    description: "도심과 고군산을 나누고 마지막 날은 동행자에게 맞는 산책이나 체험을 선택합니다.",
    href: "#course-two-nights-three-days",
  },
};

const transportNotes: Record<Transport, string> = {
  car: "근대거리에서는 한 번 주차한 뒤 걷는 구간과, 경암동·은파·고군산으로 차를 다시 이동하는 구간을 분리해 안내합니다.",
  train: "군산역 도착 뒤 도심 이동과 귀가 열차를 먼저 고려합니다. 선유도는 환승과 이동 부담이 있어 별도 확인이 필요합니다.",
};

const companionNotes: Record<Companion, { title: string; note: string; href?: string }> = {
  couple: {
    title: "사진·카페·저녁 산책을 연결합니다",
    note: "장소 수를 늘리기보다 근대거리, 군산다운 카페, 은파나 선유도의 풍경이 자연스럽게 이어지도록 구성합니다.",
  },
  "family-kids": {
    title: "아이와 쉬어갈 수 있는 흐름을 우선합니다",
    note: "실내 장소, 화장실, 휴식 지점과 날씨 대안을 먼저 확인하고 등반 부담이 있는 장소는 기본 코스에서 뺍니다.",
    href: "#course-family",
  },
  "family-parents": {
    title: "보행 부담과 주차 이동을 줄입니다",
    note: "계단과 경사, 오래 걷는 구간을 확인하고 근대거리에서도 꼭 볼 장소만 선택하는 방식으로 압축합니다.",
  },
  friends: {
    title: "먹거리·사진·바다 경험을 섞습니다",
    note: "비슷한 전시를 연속으로 보기보다 대표 먹거리와 철길마을, 체험이나 바다 풍경을 함께 배치합니다.",
  },
  solo: {
    title: "도보 연결성과 귀가 동선을 우선합니다",
    note: "혼자 식사하기 쉬운 선택과 대중교통 접근성을 확인하고, 이동이 긴 장소는 무리하게 한 일정에 넣지 않습니다.",
  },
};

export default function CourseFinder() {
  const [stay, setStay] = useState<Stay>("one-night");
  const [transport, setTransport] = useState<Transport>("car");
  const [companion, setCompanion] = useState<Companion>("couple");

  const result = useMemo(() => {
    const selectedStay = stayResults[stay];
    const selectedCompanion = companionNotes[companion];

    return {
      ...selectedStay,
      transportNote: transportNotes[transport],
      companionTitle: selectedCompanion.title,
      companionNote: selectedCompanion.note,
      companionHref: selectedCompanion.href,
      summary: `${labelOf(stayChoices, stay)} · ${labelOf(transportChoices, transport)} · ${labelOf(companionChoices, companion)}`,
    };
  }, [companion, stay, transport]);

  return (
    <div className="mt-7 overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
      <div className="grid lg:grid-cols-[1.12fr_0.88fr]">
        <div className="p-5 sm:p-7 lg:p-8">
          <p className="text-[11px] font-black tracking-[0.15em] text-[#b64b31]">FIND YOUR COURSE</p>
          <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950 sm:text-2xl">
            세 가지만 고르면 됩니다
          </h3>

          <ChoiceGroup legend="얼마나 머무르나요?" choices={stayChoices} value={stay} onChange={setStay} />
          <ChoiceGroup legend="어떻게 오시나요?" choices={transportChoices} value={transport} onChange={setTransport} />
          <ChoiceGroup legend="누구와 오시나요?" choices={companionChoices} value={companion} onChange={setCompanion} />
        </div>

        <div className="flex flex-col bg-[#123f67] p-6 text-white sm:p-8 lg:p-9" aria-live="polite">
          <p className="text-xs font-black tracking-[0.13em] text-cyan-200">{result.summary}</p>
          <h3 className="mt-3 text-3xl font-black tracking-[-0.045em]">{result.title}</h3>
          <p className="mt-3 text-sm font-medium leading-6 text-white/75 sm:text-base">{result.description}</p>

          <div className="mt-6 space-y-3">
            <ResultNote label="이동 기준" text={result.transportNote} />
            <ResultNote label={result.companionTitle} text={result.companionNote} />
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pt-7">
            <Link href={result.href} className="rounded-full bg-[#f08a27] px-5 py-3 text-sm font-black text-white transition hover:bg-[#df7617]">
              추천 코스 확인
            </Link>
            {result.companionHref && result.companionHref !== result.href ? (
              <Link href={result.companionHref} className="rounded-full border border-white/35 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10">
                동행자 코스도 보기
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChoiceGroup<T extends string>({
  legend,
  choices,
  value,
  onChange,
}: {
  legend: string;
  choices: Choice<T>[];
  value: T;
  onChange: (value: T) => void;
}) {
  return (
    <fieldset className="mt-6">
      <legend className="text-sm font-black text-slate-800">{legend}</legend>
      <div className="mt-2.5 flex flex-wrap gap-2">
        {choices.map((choice) => {
          const selected = choice.value === value;

          return (
            <button
              key={choice.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(choice.value)}
              className={[
                "rounded-full border px-4 py-2.5 text-sm font-black transition",
                selected
                  ? "border-[#174d73] bg-[#174d73] text-white"
                  : "border-slate-200 bg-[#fbfaf7] text-slate-600 hover:border-cyan-400 hover:text-cyan-900",
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

function ResultNote({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white/9 p-4">
      <strong className="block text-sm font-black text-cyan-100">{label}</strong>
      <p className="mt-1.5 text-sm font-medium leading-6 text-white/72">{text}</p>
    </div>
  );
}

function labelOf<T extends string>(choices: Choice<T>[], value: T) {
  return choices.find((choice) => choice.value === value)?.label ?? value;
}
