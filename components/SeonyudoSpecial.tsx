"use client";

import { useState } from "react";

const plannedBenefits = [
  {
    number: "01",
    tag: "ON THE SEA",
    title: "유람선 승선권",
    description: "선유도 바다를 즐기는 승선 경험",
    status: "공급 조건 확인 전",
  },
  {
    number: "02",
    tag: "LOCAL TABLE",
    title: "주변 식당 혜택",
    description: "여행 동선에 맞춘 식사 제휴",
    status: "제휴 확정 전",
  },
  {
    number: "03",
    tag: "A SLOW BREAK",
    title: "주변 카페 혜택",
    description: "섬 여행 사이 쉬어갈 공간",
    status: "제휴 확정 전",
  },
  {
    number: "04",
    tag: "YOUR JOURNEY",
    title: "여행 코스 연결",
    description: "내 여행에 자연스럽게 더하는 선유도",
    status: "추천 기능 개발 예정",
  },
] as const;

export default function SeonyudoSpecial() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <section className="seonyudo" id="seonyudo-special" aria-labelledby="seonyudo-title">
      <div className="seonyudo__feature">
        <div className="seonyudo__art" aria-hidden="true" />
        <div className="seonyudo__container">
          <div className="seonyudo__copy">
            <p className="seonyudo__eyebrow">SPECIAL ISSUE <span>·</span> SEONYUDO</p>
            <h2 id="seonyudo-title">선유도를 제대로<br />즐기는 하루</h2>
            <p className="seonyudo__intro">
              바다를 만나는 유람선부터,<br />
              한 끼의 식사와 잠깐의 쉼까지.<br />
              선유도에서 보내는 하루를 하나의 여행으로 엮습니다.
            </p>
            <div className="seonyudo__progress">
              <span className="seonyudo__progress-dot" aria-hidden="true" />
              선유도 유람선패스 · 상품 준비 중
            </div>
            <div className="seonyudo__actions">
              <button
                className="seonyudo__primary"
                type="button"
                aria-expanded={detailsOpen}
                aria-controls="seonyudo-pass-plan"
                onClick={() => setDetailsOpen((previous) => !previous)}
              >
                {detailsOpen ? "패스 구성 접기" : "유람선패스 구성 살펴보기"}
                <span aria-hidden="true">{detailsOpen ? "−" : "↗"}</span>
              </button>
              <a href="#travel-mood" className="seonyudo__secondary">
                여행 유형부터 선택하기 <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="seonyudo__visual-note">
            선유도 특집용 콘셉트 일러스트 · 실제 현장 사진으로 교체 예정
          </div>
          <span className="seonyudo__folio" aria-hidden="true">GUNSAN JOURNAL — 04</span>
        </div>
      </div>

      {detailsOpen && (
        <div className="seonyudo__details" id="seonyudo-pass-plan">
          <div className="seonyudo__details-inner">
            <div>
              <p className="seonyudo__details-label">PASS CONCEPT / 기획 단계</p>
              <h3>한 장의 패스로 이어지는 선유도 여행</h3>
              <p>현재 구상 중인 상품 구성입니다. 판매 상품이나 확정된 할인 혜택이 아닙니다.</p>
            </div>
            <div className="seonyudo__details-steps" aria-label="유람선패스 구상 구성">
              <span>유람선 승선권</span>
              <span aria-hidden="true">+</span>
              <span>식당 할인 혜택</span>
              <span aria-hidden="true">+</span>
              <span>카페 할인 혜택</span>
            </div>
            <p className="seonyudo__details-disclaimer">
              공급가, 제휴업체, 혜택, 운항 및 환불 조건이 확정된 뒤에 판매 정보를 공개할 예정입니다.
            </p>
          </div>
        </div>
      )}

      <div className="seonyudo__bottom">
        <div className="seonyudo__bottom-inner">
          <div className="seonyudo__bottom-heading">
            <span>THE SEONYUDO JOURNEY</span>
            <span>하루를 완성할 네 가지 이야기</span>
          </div>
          <div className="seonyudo__topics">
            {plannedBenefits.map((item) => (
              <article key={item.number} className="seonyudo__topic">
                <div className="seonyudo__topic-index">
                  <span>{item.number}</span>
                  <span>{item.tag}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span className="seonyudo__topic-status">{item.status}</span>
              </article>
            ))}
          </div>
          <p className="seonyudo__bottom-note">
            이 영역은 기획 시안입니다. 방문 후기·제휴 업체·할인율·판매가격은 사실 확인 후에만 게시합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
