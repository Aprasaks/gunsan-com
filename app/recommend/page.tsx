import type { Metadata } from "next";
import Header from "@/components/Header";
import RecommendationFlow from "@/components/RecommendationFlow";
import "./recommend.css";

export const metadata: Metadata = {
  title: "나에게 맞는 군산 여행 | GUNSAN.COM",
  description: "맛집, 카페, 걷기, 관광, 힐링. 여행 취향과 동행, 이동 방법을 골라 나만의 군산 여행을 준비해 보세요.",
};

export default function RecommendPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="edition">
        <nav className="edition-breadcrumb" aria-label="현재 위치">
          <a href="/">관광생생통</a><span aria-hidden="true">/</span><span aria-current="page">나에게 맞는 여행</span>
          <span className="edition-breadcrumb__issue">GUNSAN.COM · TRAVEL GUIDE 001</span>
        </nav>
        <header className="edition-hero">
          <div className="edition-hero__copy">
            <span className="edition-kicker">GUNSAN / YOUR OWN JOURNEY</span>
            <h1>군산에 가면,<br /><em>어떤 하루를</em><br />보내고 싶나요?</h1>
            <p>맛있는 한 끼를 찾아 걷거나,<br />마음에 드는 카페에 오래 머물거나.<br />당신이 좋아하는 시간부터 골라보세요.</p>
            <a href="#travel-picks">내 여행 취향 골라보기 <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="edition-hero__aside" aria-label="여행 추천 안내">
            <span className="edition-kicker">A NOTE BEFORE THE TRIP</span>
            <p>모두에게 유명한 곳보다<br /><strong>나에게 잘 맞는 군산.</strong></p>
            <span>취향, 함께하는 사람, 이동 방법을 알려주면<br />어떤 여행이 어울릴지 함께 생각해 볼게요.</span>
            <div className="edition-hero__aside-foot"><span>01</span><span>나만의 여행 노트</span></div>
          </aside>
        </header>
        <RecommendationFlow />
      </main>
    </>
  );
}
