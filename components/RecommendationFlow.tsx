"use client";

import { useState } from "react";

type WithWhom = "family" | "couple" | "friends" | "solo";
type YesNo = "yes" | "no";
type Duration = "day" | "one-night" | "two-nights";
type Vehicle = "car" | "transit";

type FormState = {
  companion: WithWhom | "";
  people: number;
  children: YesNo | "";
  duration: Duration | "";
  vehicle: Vehicle | "";
  stay: YesNo | "";
  interests: string[];
};

const initial: FormState = {
  companion: "", people: 2, children: "",
  duration: "", vehicle: "", stay: "", interests: [],
};

const companions: { id: WithWhom; label: string; english: string; hint: string }[] = [
  { id: "family", label: "가족과 함께", english: "FAMILY", hint: "온 가족의 시간" },
  { id: "couple", label: "연인과 함께", english: "COUPLE", hint: "우리 둘의 여행" },
  { id: "friends", label: "친구와 함께", english: "FRIENDS", hint: "함께 떠나는 하루" },
  { id: "solo", label: "혼자 여행", english: "SOLO", hint: "나를 위한 여행" },
];
const durations: { id: Duration; label: string; hint: string }[] = [
  { id: "day", label: "당일치기", hint: "가볍게 다녀오는 하루" },
  { id: "one-night", label: "1박 2일", hint: "여유롭게 머무는 여행" },
  { id: "two-nights", label: "2박 3일 이상", hint: "천천히 알아가는 군산" },
];
const themes = [
  { id: "sea", title: "바다와 섬", english: "SEA & ISLAND" },
  { id: "history", title: "근대역사와 골목", english: "OLD TOWN" },
  { id: "food", title: "맛집 탐방", english: "LOCAL FOOD" },
  { id: "cafe", title: "감성 카페", english: "CAFÉ" },
  { id: "walk", title: "걷기·트레킹", english: "WALKING" },
  { id: "experience", title: "체험과 즐길 거리", english: "ACTIVITIES" },
] as const;
const stepTitles = ["누구와 함께하나요?", "어떻게 여행하나요?", "무엇을 좋아하나요?"] as const;
function optionLabel(id: string) {
  if (id === "day") return "당일치기";
  if (id === "one-night") return "1박 2일";
  if (id === "two-nights") return "2박 3일 이상";
  return "";
}

export default function RecommendationFlow() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initial);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm(previous => ({ ...previous, [key]: value }));
    setError("");
  }

  function changeCompanion(id: WithWhom) {
    setForm(previous => ({ ...previous, companion: id, people: id === "solo" ? 1 : (previous.people === 1 ? 2 : previous.people) }));
    setError("");
  }

  function changeDuration(id: Duration) {
    setForm(previous => ({ ...previous, duration: id, stay: id === "day" ? "no" : previous.duration === "day" ? "" : previous.stay }));
    setError("");
  }

  function toggleTheme(id: string) {
    setError("");
    setForm(previous => {
      if (previous.interests.includes(id)) return { ...previous, interests: previous.interests.filter(item => item !== id) };
      if (previous.interests.length >= 3) return previous;
      return { ...previous, interests: [...previous.interests, id] };
    });
    if (!form.interests.includes(id) && form.interests.length >= 3) setError("관심사는 최대 3개까지 선택할 수 있어요.");
  }

  function next() {
    if (step === 0 && (!form.companion || !form.children)) {
      setError("동행자 유형과 아이 동반 여부를 선택해 주세요.");
      return;
    }
    if (step === 1 && (!form.duration || !form.vehicle || !form.stay)) {
      setError("여행 기간, 이동 수단, 숙박 여부를 모두 선택해 주세요.");
      return;
    }
    if (step === 2 && form.interests.length === 0) {
      setError("관심 있는 여행 테마를 하나 이상 골라 주세요.");
      return;
    }
    setError("");
    setStep(current => Math.min(3, current + 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function back() {
    setError("");
    setStep(current => Math.max(0, current - 1));
  }

  function reset() {
    setForm(initial); setStep(0); setError("");
  }

  const who = companions.find(option => option.id === form.companion)?.label || "";
  const themeLabels = form.interests.map(id => themes.find(theme => theme.id === id)?.title).filter(Boolean).join(" · ");

  return (
    <section className="planner-flow" aria-labelledby="planner-flow-title">
      <div className="planner-flow__inner">
        <div className="planner-flow__main">
          <div className="planner-flow__top">
            <div>
              <p className="planner-flow__overline">MAKE YOUR JOURNEY</p>
              <h2 id="planner-flow-title">{step === 3 ? "이번 여행의 모습을 정리했어요." : stepTitles[step]}</h2>
            </div>
            <span className="planner-flow__step">{step === 3 ? "SUMMARY" : `0${step + 1} / 03`}</span>
          </div>
          <div className="planner-progress" aria-label="진행 단계">
            {stepTitles.map((title, i) => (
              <div key={title} className={`planner-progress__segment ${i <= step ? "planner-progress__segment--active" : ""}`} title={title} />
            ))}
          </div>

          {step === 0 && (
            <div className="planner-formstep">
              <fieldset className="planner-fieldset">
                <legend>함께하는 사람은 누구인가요?</legend>
                <div className="planner-choice-grid">
                  {companions.map(({id,label,english,hint}) => (
                    <button key={id} type="button" className={`planner-choice ${form.companion === id ? "planner-choice--active" : ""}`} aria-pressed={form.companion === id} onClick={() => changeCompanion(id)}>
                      <span className="planner-choice__eyebrow">{english}</span>
                      <strong>{label}</strong>
                      <span className="planner-choice__hint">{hint}</span>
                      <span className="planner-choice__indicator" aria-hidden="true">{form.companion === id ? "✓" : "↗"}</span>
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="planner-two-fields">
                <fieldset className="planner-fieldset">
                  <legend>여행 인원</legend>
                  <div className="planner-counter">
                    <button type="button" disabled={form.people <= 1 || form.companion === "solo"} onClick={() => update("people", Math.max(1,form.people-1))} aria-label="여행 인원 줄이기">−</button>
                    <span aria-live="polite">{form.people}<small>명</small></span>
                    <button type="button" disabled={form.people >= 20 || form.companion === "solo"} onClick={() => update("people", Math.min(20,form.people+1))} aria-label="여행 인원 늘리기">+</button>
                  </div>
                </fieldset>
                <fieldset className="planner-fieldset">
                  <legend>어린아이도 함께하나요?</legend>
                  <div className="planner-pillgroup">
                    <button type="button" className={form.children === "yes" ? "is-active" : ""} aria-pressed={form.children === "yes"} onClick={() => update("children","yes")}>네, 함께해요</button>
                    <button type="button" className={form.children === "no" ? "is-active" : ""} aria-pressed={form.children === "no"} onClick={() => update("children","no")}>아니요</button>
                  </div>
                </fieldset>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="planner-formstep">
              <fieldset className="planner-fieldset">
                <legend>얼마나 오래 머무르나요?</legend>
                <div className="planner-duration-grid">
                  {durations.map(({id,label,hint}) => (
                    <button type="button" key={id} className={`planner-duration ${form.duration === id ? "is-active" : ""}`} onClick={() => changeDuration(id)} aria-pressed={form.duration === id}>
                      <strong>{label}</strong><small>{hint}</small>
                    </button>
                  ))}
                </div>
              </fieldset>
              <div className="planner-two-fields">
                <fieldset className="planner-fieldset">
                  <legend>어떻게 이동하나요?</legend>
                  <div className="planner-pillgroup">
                    <button type="button" className={form.vehicle === "car" ? "is-active" : ""} aria-pressed={form.vehicle === "car"} onClick={() => update("vehicle","car")}>자차·렌터카</button>
                    <button type="button" className={form.vehicle === "transit" ? "is-active" : ""} aria-pressed={form.vehicle === "transit"} onClick={() => update("vehicle","transit")}>대중교통·도보</button>
                  </div>
                </fieldset>
                <fieldset className="planner-fieldset">
                  <legend>숙박을 예정하고 있나요?</legend>
                  <div className="planner-pillgroup">
                    <button type="button" className={form.stay === "yes" ? "is-active" : ""} aria-pressed={form.stay === "yes"} disabled={form.duration === "day"} onClick={() => update("stay","yes")}>네, 숙박해요</button>
                    <button type="button" className={form.stay === "no" ? "is-active" : ""} aria-pressed={form.stay === "no"} onClick={() => update("stay","no")}>숙박하지 않아요</button>
                  </div>
                  {form.duration === "day" && <p className="planner-fieldset__hint">당일치기는 숙박 없음으로 자동 선택됩니다.</p>}
                </fieldset>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="planner-formstep">
              <p className="planner-formstep__hint">좋아하는 여행을 1~3개 선택해 주세요.</p>
              <fieldset className="planner-fieldset">
                <legend className="sr-only">여행 취향</legend>
                <div className="planner-theme-grid">
                  {themes.map(({id,title,english}) => (
                    <button type="button" key={id} className={`planner-theme ${form.interests.includes(id) ? "is-active" : ""}`} aria-pressed={form.interests.includes(id)} onClick={() => toggleTheme(id)}>
                      <span>{english}</span>
                      <strong>{title}</strong>
                      <b aria-hidden="true">{form.interests.includes(id) ? "✓" : "+"}</b>
                    </button>
                  ))}
                </div>
              </fieldset>
              <p className="planner-formstep__counter">선택한 테마 {form.interests.length} / 3</p>
            </div>
          )}

          {step === 3 && (
            <div className="planner-summary">
              <p className="planner-summary__intro">선택한 조건을 바탕으로 여행의 방향을 정리했어요. 실제 추천 코스는 현장 검증된 데이터가 등록된 뒤 연결됩니다.</p>
              <dl className="planner-summary__grid">
                <div><dt>함께하는 사람</dt><dd>{who} · {form.people}명{form.children === "yes" ? " · 아이 동반" : ""}</dd></div>
                <div><dt>여행 일정</dt><dd>{optionLabel(form.duration)} · {form.stay === "yes" ? "숙박 예정" : "숙박 없음"}</dd></div>
                <div><dt>이동 수단</dt><dd>{form.vehicle === "car" ? "자차·렌터카" : "대중교통·도보"}</dd></div>
                <div><dt>관심 테마</dt><dd>{themeLabels}</dd></div>
              </dl>
              <div className="planner-summary__status">
                <span className="planner-summary__status-icon" aria-hidden="true">✦</span>
                <div>
                  <strong>맞춤 여행 코스는 현재 현장 검증 자료를 준비하고 있어요.</strong>
                  <p>검증된 코스가 없는 상태에서 임의의 식당, 관광지, 이동시간을 만들어 추천하지 않습니다. 선택한 조건은 서버에 저장하지 않아요.</p>
                </div>
              </div>
              {form.interests.includes("sea") && (
                <a className="planner-summary__seonyudo" href="/#seonyudo-special">선유도 특집 둘러보기 <span aria-hidden="true">↗</span></a>
              )}
              <button className="planner-summary__reset" type="button" onClick={reset}>처음부터 다시 선택하기 ↺</button>
            </div>
          )}

          {error && <p className="planner-flow__error" role="alert">{error}</p>}
          {step !== 3 && (
            <div className="planner-flow__actions">
              <button type="button" className="planner-flow__back" onClick={back} disabled={step === 0}>← 이전 단계</button>
              <button type="button" className="planner-flow__next" onClick={next}>{step === 2 ? "나의 여행 정리하기" : "다음 단계"} <span aria-hidden="true">↗</span></button>
            </div>
          )}
        </div>
        <aside className="planner-aside" aria-label="군산닷컴 여행 추천 원칙">
          <div className="planner-aside__top">THE WAY WE TRAVEL <span>001</span></div>
          <h2>군산을 제대로<br />여행하는 방법.</h2>
          <div className="planner-aside__line"/>
          <p>여행의 정답은 하나가 아니니까.<br />함께하는 사람과 머무는 시간부터<br />먼저 물어봅니다.</p>
          <div className="planner-aside__principle">
            <span>01</span><strong>직접 발로 확인한 곳</strong>
            <span>02</span><strong>좋은 점과 아쉬운 점까지</strong>
            <span>03</span><strong>여행자에게 맞는 동선</strong>
          </div>
          <div className="planner-aside__end">GUNSAN.COM <span>관광생생통</span></div>
        </aside>
      </div>
    </section>
  );
}
