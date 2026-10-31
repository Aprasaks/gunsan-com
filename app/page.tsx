import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" className="stage" aria-label="메인 콘텐츠 준비 영역">
        <div className="stage__notice">
          <span className="stage__eyebrow">GUNSAN.COM · FIRST STEP</span>
          <p>헤더부터 하나씩 만들어가는 중입니다.</p>
          <span>메인 화면은 다음 단계에서 채워집니다.</span>
        </div>
      </main>
    </>
  );
}
