"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

type Companion = "solo" | "friends" | "couple" | "family";
type Answer = "yes" | "no";

const companions: { value: Companion; label: string; english: string }[] = [
  { value: "solo", label: "혼자", english: "SOLO" },
  { value: "friends", label: "친구", english: "FRIENDS" },
  { value: "couple", label: "커플", english: "COUPLE" },
  { value: "family", label: "가족", english: "FAMILY" },
];

export default function RecommendationFlow() {
  const [companion, setCompanion] = useState<Companion | "">("");
  const [vehicle, setVehicle] = useState<Answer | "">("");
  const [elementary, setElementary] = useState<Answer | "">("");
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showResult) resultRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [showResult]);

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
    if (!companion || !vehicle || !elementary) {
      setShowResult(false);
      setError("세 가지 질문을 모두 선택해 주세요.");
      return;
    }
    setError("");
    setShowResult(true);
  }

  function reset() {
    setCompanion("");
    setVehicle("");
    setElementary("");
    setShowResult(false);
    setError("");
  }

  const companionLabel = companions.find(item => item.value === companion)?.label ?? "";
  const guide = [
    vehicle === "yes"
      ? "차량 이동을 고려한 동선으로"
      : "도보와 대중교통을 고려한 동선으로",
    elementary === "yes"
      ? "초등학생과 함께하기 좋은 휴식과 체험을 살피며"
      : "함께하는 사람들의 취향에 맞춰",
    "실제 확인한 장소를 조합할 수 있도록 준비하고 있어요.",
  ].join(" ");

  return (
    <section className="travel-questions" aria-labelledby="travel-questions-heading">
      <div className="travel-questions__inner">
        <div className="travel-questions__masthead">
          <div>
            <p>TRAVEL EDITION / 01</p>
            <h2 id="travel-questions-heading">어떤 군산을 만나고 싶나요?</h2>
          </div>
          <span>세 가지 선택, 하나의 여행.</span>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="travel-question">
            <legend className="sr-only">누구와 여행하시나요?</legend>
            <div className="travel-question__prompt">
              <span className="travel-question__number">01</span>
              <div>
                <strong>누구와 떠나시나요?</strong>
                <p>이번 여행을 함께할 사람</p>
              </div>
            </div>
            <div className="travel-question__answers travel-question__answers--four">
              {companions.map(item => (
                <label className={`travel-option ${companion === item.value ? "travel-option--selected" : ""}`} key={item.value}>
                  <input
                    type="radio"
                    name="companion"
                    value={item.value}
                    checked={companion === item.value}
                    onChange={() => chooseCompanion(item.value)}
                  />
                  <span className="travel-option__english">{item.english}</span>
                  <span className="travel-option__name">{item.label}</span>
                  <span className="travel-option__mark" aria-hidden="true">{companion === item.value ? "●" : "○"}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <fieldset className="travel-question">
            <legend className="sr-only">차량을 이용하시나요?</legend>
            <div className="travel-question__prompt">
              <span className="travel-question__number">02</span>
              <div>
                <strong>차량이 있나요?</strong>
                <p>이동하는 방법에 따라 달라지는 여행</p>
              </div>
            </div>
            <div className="travel-question__answers travel-question__answers--two">
              <label className={`travel-option ${vehicle === "yes" ? "travel-option--selected" : ""}`}>
                <input type="radio" name="vehicle" value="yes" checked={vehicle === "yes"} onChange={() => chooseVehicle("yes")} />
                <span className="travel-option__name">있어요</span>
                <span className="travel-option__detail">자가용 · 렌터카</span>
                <span className="travel-option__mark" aria-hidden="true">{vehicle === "yes" ? "●" : "○"}</span>
              </label>
              <label className={`travel-option ${vehicle === "no" ? "travel-option--selected" : ""}`}>
                <input type="radio" name="vehicle" value="no" checked={vehicle === "no"} onChange={() => chooseVehicle("no")} />
                <span className="travel-option__name">없어요</span>
                <span className="travel-option__detail">도보 · 대중교통</span>
                <span className="travel-option__mark" aria-hidden="true">{vehicle === "no" ? "●" : "○"}</span>
              </label>
            </div>
          </fieldset>

          <fieldset className="travel-question">
            <legend className="sr-only">초등학생이 함께하나요?</legend>
            <div className="travel-question__prompt">
              <span className="travel-question__number">03</span>
              <div>
                <strong>초등학생도 함께하나요?</strong>
                <p>아이의 눈높이도 생각하는 여행</p>
              </div>
            </div>
            <div className="travel-question__answers travel-question__answers--two">
              <label className={`travel-option ${elementary === "yes" ? "travel-option--selected" : ""} ${companion === "solo" ? "travel-option--disabled" : ""}`}>
                <input type="radio" name="elementary" value="yes" checked={elementary === "yes"} disabled={companion === "solo"} onChange={() => chooseElementary("yes")} />
                <span className="travel-option__name">함께해요</span>
                <span className="travel-option__mark" aria-hidden="true">{elementary === "yes" ? "●" : "○"}</span>
              </label>
              <label className={`travel-option ${elementary === "no" ? "travel-option--selected" : ""}`}>
                <input type="radio" name="elementary" value="no" checked={elementary === "no"} onChange={() => chooseElementary("no")} />
                <span className="travel-option__name">함께하지 않아요</span>
                <span className="travel-option__mark" aria-hidden="true">{elementary === "no" ? "●" : "○"}</span>
              </label>
              {companion === "solo" && <p className="travel-question__note">혼자 여행을 선택하면 초등학생 동반은 ‘없음’으로 설정됩니다.</p>}
            </div>
          </fieldset>

          <div className="travel-questions__end">
            <div>
              <p>YOUR TRAVEL, YOUR STORY</p>
              <span>선택한 내용은 이 화면에서만 사용해요.</span>
            </div>
            <button className="travel-questions__submit" type="submit">
              나의 여행 살펴보기 <span aria-hidden="true">↗</span>
            </button>
          </div>
          {error && <p className="travel-questions__error" role="alert">{error}</p>}
        </form>

        {showResult && companion && vehicle && elementary && (
          <div className="travel-result" ref={resultRef} role="status" aria-live="polite">
            <div className="travel-result__headline">
              <span>TRAVEL NOTES / YOUR SELECTION</span>
              <h2>이런 군산 여행을 준비할게요.</h2>
            </div>
            <dl className="travel-result__answers">
              <div><dt>동행</dt><dd>{companionLabel}</dd></div>
              <div><dt>차량</dt><dd>{vehicle === "yes" ? "있음" : "없음"}</dd></div>
              <div><dt>초등학생</dt><dd>{elementary === "yes" ? "동반" : "동반 없음"}</dd></div>
            </dl>
            <p className="travel-result__guide">{guide}</p>
            <p className="travel-result__status">
              현재는 여행 조건을 정리하는 단계예요. 직접 방문·검증한 코스를 등록한 뒤 실제 장소와 동선 추천을 연결합니다. 아직 추천 결과가 만들어진 것은 아니에요.
            </p>
            <div className="travel-result__actions">
              <button type="button" onClick={reset}>다시 선택하기 ↺</button>
              <a href="/#seonyudo-special">선유도 특집 읽어보기 <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
