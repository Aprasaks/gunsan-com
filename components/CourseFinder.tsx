"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const peopleOptions = ["1", "2", "3", "4", "5+"] as const;
const companionOptions = ["혼자", "커플", "친구", "가족", "부모님", "아이와"] as const;
const durationOptions = ["반나절", "당일", "1박2일", "2박3일"] as const;
const transportOptions = ["자차", "기차", "버스", "뚜벅이"] as const;
const interestOptions = ["맛집", "산책", "관광", "카페", "사진", "역사", "바다", "체험"] as const;

export default function CourseFinder() {
  const router = useRouter();
  const [people, setPeople] = useState<(typeof peopleOptions)[number]>("2");
  const [companion, setCompanion] = useState<(typeof companionOptions)[number]>("커플");
  const [duration, setDuration] = useState<(typeof durationOptions)[number]>("1박2일");
  const [transport, setTransport] = useState<(typeof transportOptions)[number]>("자차");
  const [interests, setInterests] = useState<string[]>(["맛집", "산책"]);

  const recommendedSlug = useMemo(() => {
    if (companion === "가족" || companion === "아이와") return "family";
    if (interests.includes("바다") && transport === "자차") return "seonyudo";
    if (duration === "2박3일") return "two-nights-three-days";
    if (duration === "1박2일") return "one-night-two-days";
    if (duration === "반나절") return "half-day";
    return "first-gunsan";
  }, [companion, duration, interests, transport]);

  const toggleInterest = (interest: string) => {
    setInterests((current) =>
      current.includes(interest)
        ? current.filter((item) => item !== interest)
        : [...current, interest].slice(-4)
    );
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_20px_70px_rgba(15,46,77,0.08)]">
      <div className="grid gap-0 xl:grid-cols-[1.05fr_4fr_0.95fr]">
        <div className="border-b border-slate-100 bg-[#f7fbfd] p-6 sm:p-7 xl:border-b-0 xl:border-r">
          <p className="text-[12px] font-black tracking-[0.2em] text-[#167db8]">SMART TRIP PLANNER</p>
          <h2 className="mt-3 text-[1.9rem] font-black tracking-[-0.05em] text-gunsan-navy sm:text-[2rem]">
            어떤 군산 여행을
            <br />
            원하세요?
          </h2>
          <p className="mt-3 text-[16px] font-medium leading-7 text-slate-600">
            인원·동행·일정·이동수단과 취향을 고르면
            <br className="hidden xl:block" /> 지금 여행에 맞는 코스를 보여드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-5">
          <ChoiceGroup title="여행 인원">
            <div className="flex flex-wrap gap-2">
              {peopleOptions.map((option) => (
                <ChoiceButton key={option} active={people === option} onClick={() => setPeople(option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </ChoiceGroup>

          <ChoiceGroup title="누구와">
            <div className="flex flex-wrap gap-2">
              {companionOptions.map((option) => (
                <ChoiceButton key={option} active={companion === option} onClick={() => setCompanion(option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </ChoiceGroup>

          <ChoiceGroup title="여행 기간">
            <div className="flex flex-wrap gap-2">
              {durationOptions.map((option) => (
                <ChoiceButton key={option} active={duration === option} onClick={() => setDuration(option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </ChoiceGroup>

          <ChoiceGroup title="이동 수단">
            <div className="flex flex-wrap gap-2">
              {transportOptions.map((option) => (
                <ChoiceButton key={option} active={transport === option} onClick={() => setTransport(option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </ChoiceGroup>

          <ChoiceGroup title="여행 취향" hint="복수 선택">
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((option) => (
                <ChoiceButton key={option} active={interests.includes(option)} onClick={() => toggleInterest(option)}>
                  {option}
                </ChoiceButton>
              ))}
            </div>
          </ChoiceGroup>
        </div>

        <div className="flex items-center border-t border-slate-100 bg-[#f7fbfd] p-5 xl:border-l xl:border-t-0">
          <button
            type="button"
            onClick={() => router.push(`/courses/${recommendedSlug}`)}
            className="group flex min-h-28 w-full items-center justify-between rounded-2xl bg-[#0b67aa] px-5 py-5 text-left text-white shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:bg-[#095d9b]"
          >
            <span>
              <span className="block text-[12px] font-black tracking-[0.16em] text-white/70">MY ROUTE</span>
              <span className="mt-2 block text-[1.25rem] font-black leading-7">
                내 조건으로
                <br />
                코스 찾기
              </span>
            </span>
            <span className="text-2xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

function ChoiceGroup({
  title,
  hint,
  children,
}: {
  title: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[150px] border-b border-slate-100 p-5 md:[&:nth-last-child(-n+1)]:border-b-0 xl:border-b-0 xl:border-r xl:last:border-r-0">
      <div className="mb-4 flex items-center gap-2">
        <p className="text-[15px] font-extrabold tracking-[-0.02em] text-gunsan-navy">{title}</p>
        {hint ? <span className="text-[12px] font-semibold text-slate-500">({hint})</span> : null}
      </div>
      {children}
    </div>
  );
}

function ChoiceButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={[
        "rounded-full border px-3.5 py-2.5 text-[14px] font-bold transition",
        active
          ? "border-[#0b67aa] bg-[#0b67aa] text-white shadow-sm"
          : "border-slate-200 bg-white text-slate-600 hover:border-[#6ca8ca] hover:text-gunsan-navy",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
