export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__visual" aria-hidden="true" />
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="hero__overline">GUNSAN JOURNAL <span>·</span> 01</p>
          <p className="hero__lead">시간이 여행이 되는 곳,</p>
          <h1 id="hero-heading">군산</h1>
          <p className="hero__description">
            누구나 아는 풍경 너머,
            <br />
            직접 다녀온 군산의 이야기를 전합니다.
          </p>
          <a className="hero__jump" href="#travel-mood">
            이번 여행 찾아보기 <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="hero__foot">
          <span>01 <span aria-hidden="true">/</span> 01</span>
          <span>GUNSAN.COM · 관광생생통</span>
        </div>
      </div>
      <p className="hero__image-note">임시 콘셉트 비주얼 · 실제 군산 현장 사진으로 교체 예정</p>
    </section>
  );
}
