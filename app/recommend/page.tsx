import type { Metadata } from "next";
import Header from "@/components/Header";
import RecommendationFlow from "@/components/RecommendationFlow";

export const metadata: Metadata = {
  title: "나만의 군산 여행 추천받기 | GUNSAN.COM",
  description: "여행 동행자, 기간, 아이 동반, 차량, 숙박, 취향을 선택해 나에게 맞는 군산 여행을 준비하세요.",
};

export default function RecommendPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="planner-page">
        <section className="planner-hero" aria-labelledby="planner-title">
          <div className="planner-hero__inner">
            <div className="planner-hero__copy">
              <nav className="planner-breadcrumb" aria-label="현재 위치">
                <a href="/">관광생생통</a><span aria-hidden="true">/</span><span aria-current="page">여행 추천받기</span>
              </nav>
              <p className="planner-eyebrow">GUNSAN TRAVEL JOURNAL <span>—</span> YOUR JOURNEY</p>
              <h1 id="planner-title">이번 여행은<br /><em>당신답게, 군산답게.</em></h1>
              <p className="planner-hero__lead">
                누구와 함께, 얼마나 오래, 어떤 풍경을 만나고 싶나요?<br />
                몇 가지 질문으로 이번 여행의 모습을 그려보세요.
              </p>
              <span className="planner-hero__promise">직접 확인한 장소를 바탕으로 코스를 채워갈 예정입니다.</span>
            </div>
            <div className="planner-cover" aria-hidden="true">
              <div className="planner-cover__sky"><span className="planner-cover__sun"/></div>
              <div className="planner-cover__islands planner-cover__islands--far"/>
              <div className="planner-cover__islands planner-cover__islands--near"/>
              <div className="planner-cover__sea"/>
              <div className="planner-cover__type">
                <span>GUNSAN <br />FIELD NOTES</span>
                <span>TRAVEL EDITION · 001</span>
              </div>
            </div>
          </div>
        </section>
        <RecommendationFlow />
      </main>
    </>
  );
}
