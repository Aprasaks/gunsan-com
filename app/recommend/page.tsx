import type { Metadata } from "next";
import Header from "@/components/Header";
import RecommendationFlow from "@/components/RecommendationFlow";

export const metadata: Metadata = {
  title: "나에게 맞는 군산 여행 | GUNSAN.COM",
  description: "혼자, 친구, 커플, 가족. 차량과 초등학생 동반 여부를 선택하고 나만의 군산 여행을 준비해 보세요.",
};

export default function RecommendPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="travel-journal">
        <header className="travel-journal__intro">
          <div className="travel-journal__intro-inner">
            <div className="travel-journal__topline">
              <nav className="travel-journal__breadcrumb" aria-label="현재 위치">
                <a href="/">관광생생통</a>
                <span aria-hidden="true">/</span>
                <span aria-current="page">여행 추천받기</span>
              </nav>
              <span className="travel-journal__issue">GUNSAN.COM · TRAVEL NOTES 001</span>
            </div>
            <div className="travel-journal__headline">
              <div>
                <p className="travel-journal__eyebrow">YOUR KIND OF GUNSAN</p>
                <h1>군산을 여행하는<br /><em>당신만의 방식.</em></h1>
              </div>
              <div className="travel-journal__lead">
                <p>똑같은 여행은 없으니까.<br />
                  세 가지 이야기만 들려주세요.</p>
                <span>직접 다녀온 군산의 장소들을 바탕으로,<br />
                  더 잘 맞는 여행을 만들기 위한 첫 번째 질문입니다.</span>
              </div>
            </div>
          </div>
        </header>
        <RecommendationFlow />
      </main>
    </>
  );
}
