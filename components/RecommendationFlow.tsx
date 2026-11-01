"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Companion = "solo" | "friends" | "couple" | "family";
type Answer = "yes" | "no";
type Interest = "food" | "cafe" | "walking" | "culture" | "rest";

const interests: { id: Interest; name: string; note: string; sentence: string }[] = [
  { id: "food", name: "맛집 탐방", note: "그 지역에서만 기억할 한 끼", sentence: "식당의 메뉴·대기·주차와 주변 산책을 함께 살피는 식도락 여행" },
  { id: "cafe", name: "카페 탐방", note: "커피 한 잔이 여행의 목적이 되는 날", sentence: "분위기와 머무는 시간을 중요하게 생각하는 카페 여행" },
  { id: "walking", name: "트레킹 · 걷기", note: "골목에서 바닷길까지, 발걸음이 이끄는 대로", sentence: "이동 거리와 걷기 난이도를 고려한 산책·트레킹 여행" },
  { id: "culture", name: "관광 · 역사", note: "오래된 이야기와 새로운 풍경 사이", sentence: "군산의 장소와 역사를 천천히 발견하는 여행" },
  { id: "rest", name: "힐링 · 휴식", note: "서두르지 않고 마음을 놓는 시간", sentence: "풍경과 휴식 시간을 넉넉히 남겨 두는 느긋한 여행" },
];

const companions: { id: Companion; label: string; caption: string }[] = [
  { id: "solo", label: "혼자", caption: "나만의 속도로" },
  { id: "friends", label: "친구", caption: "함께 걷고 웃으며" },
  { id: "couple", label: "커플", caption: "둘이서 오래 기억할" },
  { id: "family", label: "가족", caption: "모두가 편안하도록" },
];

export default function RecommendationFlow() {
  const [selectedInterests, setSelectedInterests] = useState<Interest[]>([]);
  const [companion, setCompanion] = useState<Companion | "">("");
  const [vehicle, setVehicle] = useState<Answer | "">("");
  const [elementary, setElementary] = useState<Answer | "">("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const [limitNotice, setLimitNotice] = useState("");
  const resultRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (showResult) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [showResult]);

  function changeInterest(value: Interest) {
    if (selectedInterests.includes(value)) {
      setSelectedInterests(prev => prev.filter(id => id !== value));
      setLimitNotice("");
    } else if (selectedInterests.length < 2) {
      setSelectedInterests(prev => [...prev, value]);
      setLimitNotice("");
    } else {
      setLimitNotice("두 가지만 선택할 수 있어요. 다른 항목을 해제하면 바꿀 수 있습니다.");
      return;
    }
    setShowResult(false);
    setError("");
  }

  function chooseCompanion(value: Companion) {
    setCompanion(value);
    if (value === "solo") setElementary("no");
    setShowResult(false);
    setError("");
  }

  function chooseVehicle(value: Answer) {
    setVehicle(value);
    setShowResult(false);
    setError("");
  }

  function chooseElementary(value: Answer) {
    setElementary(value);
    setShowResult(false);
    setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!selectedInterests.length || !companion || !vehicle || !elementary) {
      setShowResult(false);
      setError("여행 취향과 동행, 차량, 초등학생 동반 여부를 모두 선택해 주세요.");
      return;
    }
    setError("");
    setShowResult(true);
  }

  function reset() {
    setSelectedInterests([]);
    setCompanion("");
    setVehicle("");
    setElementary("");
    setShowResult(false);
    setError("");
    setLimitNotice("");
    document.getElementById("travel-picks")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const currentLabels = selectedInterests.map(id => interests.find(item => item.id === id)!.name);
  const companionLabel = companions.find(item => item.id === companion)?.label ?? "";
  const previewTitle = currentLabels.join("과 ") + "이 있는 군산의 하루";
  const movementText = vehicle === "yes"
    ? "차량으로 이동하는 만큼 장소 사이의 동선과 주차 정보를 함께 살피고,"
    : "차 없이 움직일 수 있도록 도보·대중교통 접근성을 먼저 확인하고,";
  const childText = elementary === "yes"
    ? "초등학생이 쉬어갈 시간과 체험 난이도도 고려하는 방향이에요."
    : "동행한 사람들의 속도에 맞춰 머무는 시간을 조절하는 방향이에요.";

  return (
    <section id="travel-picks" className="edition-flow" aria-labelledby="edition-flow-title">
      <div className="edition-flow__inner">
        <div className="edition-flow__opening">
          <div>
            <span className="edition-kicker">01 / YOUR TRAVEL MOOD</span>
            <h2 id="edition-flow-title">이번 여행에서<br /><em>가장 하고 싶은 일.</em></h2>
          </div>
          <p>군산에서 보내고 싶은 시간을 떠올려 보세요.<br />마음에 드는 취향을 <strong>두 개까지</strong> 고를 수 있어요.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="edition-interest">
            <legend className="sr-only">여행 취향 선택, 최대 두 가지</legend>
            <div className="edition-interest__header">
              <span>하고 싶은 것</span>
              <span aria-live="polite">{selectedInterests.length} / 2 선택</span>
            </div>
            {interests.map((item, index) => {
              const isSelected = selectedInterests.includes(item.id);
              return (
                <button
                  className={"edition-interest__item" + (isSelected ? " edition-interest__item--on" : "")}
                  type="button"
                  aria-pressed={isSelected}
                  key={item.id}
                  onClick={() => changeInterest(item.id)}
                >
                  <span className="edition-interest__number">0{index + 1}</span>
                  <span className="edition-interest__name">{item.name}</span>
                  <span className="edition-interest__note">{item.note}</span>
                  <span className="edition-interest__indicator" aria-hidden="true">{isSelected ? "✓" : "+"}</span>
                </button>
              );
            })}
            <p className="edition-interest__limit" aria-live="polite">{limitNotice || "선택은 언제든 바꿀 수 있어요."}</p>
          </fieldset>

          <div className="edition-flow__divider">
            <span className="edition-kicker">02 / THE PEOPLE & THE WAY</span>
            <h2>여행의 모양을<br /><em>조금 더 알려주세요.</em></h2>
            <p>누구와 어떻게 떠나는지에 따라<br />같은 군산도 전혀 다른 하루가 되니까요.</p>
          </div>

          <fieldset className="edition-choice">
            <legend className="sr-only">함께 여행하는 사람</legend>
            <div className="edition-choice__heading"><span>01</span><h3>누구와 함께하나요?</h3></div>
            <div className="edition-choice__options edition-choice__options--four">
              {companions.map(item => (
                <button className={"edition-choice__option" + (companion === item.id ? " edition-choice__option--on" : "")}
                  type="button" aria-pressed={companion === item.id} key={item.id} onClick={() => chooseCompanion(item.id)}>
                  <strong>{item.label}</strong>
                  <small>{item.caption}</small>
                  <span aria-hidden="true">{companion === item.id ? "✓" : "↗"}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="edition-choice__columns">
            <fieldset className="edition-choice edition-choice--compact">
              <legend className="sr-only">차량 유무</legend>
              <div className="edition-choice__heading"><span>02</span><h3>차량이 있나요?</h3></div>
              <div className="edition-choice__options edition-choice__options--two">
                <button type="button" aria-pressed={vehicle === "yes"} onClick={() => chooseVehicle("yes")}
                  className={"edition-choice__option" + (vehicle === "yes" ? " edition-choice__option--on" : "")}>
                  <strong>있어요</strong><small>자가용 · 렌터카</small><span aria-hidden="true">{vehicle === "yes" ? "✓" : "↗"}</span>
                </button>
                <button type="button" aria-pressed={vehicle === "no"} onClick={() => chooseVehicle("no")}
                  className={"edition-choice__option" + (vehicle === "no" ? " edition-choice__option--on" : "")}>
                  <strong>없어요</strong><small>도보 · 대중교통</small><span aria-hidden="true">{vehicle === "no" ? "✓" : "↗"}</span>
                </button>
              </div>
            </fieldset>
            <fieldset className="edition-choice edition-choice--compact">
              <legend className="sr-only">초등학생 동반 여부</legend>
              <div className="edition-choice__heading"><span>03</span><h3>초등학생도 함께하나요?</h3></div>
              <div className="edition-choice__options edition-choice__options--two">
                <button type="button" disabled={companion === "solo"} aria-pressed={elementary === "yes"}
                  onClick={() => chooseElementary("yes")}
                  className={"edition-choice__option" + (elementary === "yes" ? " edition-choice__option--on" : "")}>
                  <strong>함께해요</strong><small>아이와 함께하는 여행</small><span aria-hidden="true">{elementary === "yes" ? "✓" : "↗"}</span>
                </button>
                <button type="button" aria-pressed={elementary === "no"} onClick={() => chooseElementary("no")}
                  className={"edition-choice__option" + (elementary === "no" ? " edition-choice__option--on" : "")}>
                  <strong>함께하지 않아요</strong><small>어른의 속도로</small><span aria-hidden="true">{elementary === "no" ? "✓" : "↗"}</span>
                </button>
              </div>
              {companion === "solo" && <p className="edition-choice__hint">혼자 여행은 초등학생 미동반으로 설정했어요.</p>}
            </fieldset>
          </div>

          <div className="edition-finish">
            <div className="edition-finish__summary">
              <span className="edition-kicker">YOUR GUNSAN, SO FAR</span>
              <p>{currentLabels.length ? currentLabels.join(" · ") : "어떤 군산을 좋아하세요?"}</p>
              <span>{[companionLabel, vehicle ? (vehicle === "yes" ? "차량 있음" : "차량 없음") : "", elementary ? (elementary === "yes" ? "초등학생 동반" : "초등학생 미동반") : ""].filter(Boolean).join(" / ") || "답을 고를수록 나만의 여행이 선명해집니다."}</span>
            </div>
            <button className="edition-finish__button" type="submit">나의 군산 여행 미리보기 <span aria-hidden="true">↗</span></button>
          </div>
          {error && <p className="edition-flow__error" role="alert">{error}</p>}
        </form>

        {showResult && (
          <section className="edition-result" ref={resultRef} aria-labelledby="edition-result-title" aria-live="polite">
            <div className="edition-result__top">
              <span className="edition-kicker">YOUR TRAVEL NOTES / PREVIEW</span>
              <span>여행 취향 미리보기</span>
            </div>
            <h2 id="edition-result-title">{previewTitle}</h2>
            <p className="edition-result__lead">여행을 준비할 때는 {selectedInterests.map(id => interests.find(item => item.id === id)!.sentence).join(", 그리고 ")}을 중심에 두는 게 좋겠어요.</p>
            <p className="edition-result__detail">{movementText} {childText}</p>
            <div className="edition-result__selection">
              <span>동행 <strong>{companionLabel}</strong></span>
              <span>이동 <strong>{vehicle === "yes" ? "차량 있음" : "차량 없음"}</strong></span>
              <span>초등학생 <strong>{elementary === "yes" ? "함께" : "미동반"}</strong></span>
            </div>
            <p className="edition-result__disclaimer"><strong>현재는 여행 방향을 보여주는 미리보기예요.</strong> 실제 장소·이동 시간·지도·검증된 추천 코스는 아직 연결되지 않았습니다. 현장 확인을 마친 정보부터 차례로 채울 예정이에요.</p>
            <div className="edition-result__actions">
              <button type="button" onClick={reset}>다시 골라보기 ↺</button>
              <a href="/#seonyudo-special">선유도 특집 둘러보기 ↗</a>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
