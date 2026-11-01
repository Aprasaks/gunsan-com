"use client";

import { useState } from "react";

const travelTypes = [
  {
    id: "family",
    title: "가족과 함께",
    subtitle: "아이와 함께 걷는 하루",
    visual: "family",
    label: "FAMILY",
  },
  {
    id: "couple",
    title: "연인과 함께",
    subtitle: "둘만의 특별한 시간",
    visual: "couple",
    label: "COUPLE",
  },
  {
    id: "friends",
    title: "친구와 함께",
    subtitle: "함께라서 더 즐거운",
    visual: "friends",
    label: "FRIENDS",
  },
  {
    id: "solo",
    title: "혼자 여행",
    subtitle: "온전히 나를 위한 시간",
    visual: "solo",
    label: "SOLO",
  },
] as const;

export default function TravelMood() {
  const [choice, setChoice] = useState<string | null>(null);

  return (
    <section className="journey" id="travel-mood" aria-labelledby="journey-heading">
      <div className="journey__inner">
        <div className="journey__intro">
          <p className="section-overline">TRAVEL COURSE</p>
          <h2 id="journey-heading">
            이번 군산 여행은
            <br />
            어떤 모습인가요?
          </h2>
          <p className="journey__summary">
            우리가 직접 다녀온 군산의 장소들로
            <br className="journey__desktop-break" />
            당신에게 맞는 여행을 찾아드립니다.
          </p>
        </div>

        <div className="journey__right">
          <div className="journey__cards">
            {travelTypes.map(({ id, title, subtitle, visual, label }) => (
              <button
                key={id}
                type="button"
                className={`journey-card ${choice === id ? "journey-card--selected" : ""}`}
                onClick={() => setChoice(id)}
                aria-pressed={choice === id}
                aria-label={`${title} 코스 준비 현황 보기`}
              >
                <span className={`journey-card__image journey-card__image--${visual}`} aria-hidden="true">
                  <span className="journey-card__visual-label">{label}</span>
                </span>
                <span className="journey-card__body">
                  <strong>{title}</strong>
                  <span className="journey-card__subtitle">{subtitle}</span>
                  <span className="journey-card__arrow" aria-hidden="true">↗</span>
                </span>
              </button>
            ))}

            <button
              type="button"
              className={`journey-card journey-card--recommend ${choice === "recommend" ? "journey-card--selected" : ""}`}
              onClick={() => setChoice("recommend")}
              aria-pressed={choice === "recommend"}
              aria-label="나에게 맞는 군산 여행 추천받기 기능 준비 현황 보기"
            >
              <span className="journey-card__recommend-art" aria-hidden="true">
                <span className="journey-card__recommend-issue">YOUR OWN JOURNEY</span>
                <span className="journey-card__recommend-stamp">GUNSAN<br />TRAVEL</span>
              </span>
              <span className="journey-card__body">
                <span className="journey-card__recommend-pretitle">나에게 맞는</span>
                <strong>군산 여행 추천받기</strong>
                <span className="journey-card__arrow journey-card__arrow--filled" aria-hidden="true">→</span>
              </span>
            </button>
          </div>

          {choice && (
            <div className="journey__feedback" role="status" aria-live="polite">
              <strong>{choice === "recommend" ? "맞춤 여행 추천" : travelTypes.find(item => item.id === choice)?.title}</strong>
              <span>직접 검증한 여행 코스를 준비하고 있어요. 다음 단계에서 기능을 연결합니다.</span>
              <button type="button" onClick={() => setChoice(null)} aria-label="안내 닫기">×</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
