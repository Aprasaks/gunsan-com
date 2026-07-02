import Link from "next/link";

import Header from "@/components/Header";

const heroBadges = ["광고 상품 아님", "사장님 인증 필요", "관리자 확인 후 반영"];

const verificationCards = [
  {
    title: "실제 사장님만 신청",
    description: "매장 운영자 또는 관계자 확인 후 등록합니다.",
  },
  {
    title: "관리자 확인 후 반영",
    description: "제출된 정보는 바로 노출되지 않고 확인 후 반영됩니다.",
  },
  {
    title: "광고 순위가 아님",
    description: "돈을 냈다는 이유만으로 추천 순위가 올라가지 않습니다.",
  },
];

const ownerInfoItems = [
  "대표 사진",
  "메뉴 사진",
  "외관 사진",
  "영업시간",
  "휴무일",
  "주차 가능 여부",
  "예약 가능 여부",
  "대표 메뉴",
  "아이 동반 가능 여부",
  "단체/포장 가능 여부",
  "처음 오는 손님에게 알려주고 싶은 정보",
];

const photoGuideCards = [
  {
    title: "대표 이미지",
    description: "목록 카드에서 가장 먼저 보이는 사진입니다.",
  },
  {
    title: "메뉴/상품 사진",
    description: "손님이 방문 전 참고할 수 있는 사진입니다.",
  },
  {
    title: "매장 분위기 사진",
    description: "외관, 내부, 좌석, 주차 공간 등을 보여줍니다.",
  },
];

const registrationSteps = [
  "사장님 신청",
  "매장 정보 확인",
  "사진 및 방문 정보 정리",
  "관리자 검토",
  "군산.com 반영",
];

export default function OwnersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:py-12">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-center">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-cyan-700">사장님 등록</p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
              군산의 로컬 가게를 정확하게 보여주세요
            </h1>
            <div className="mt-5 max-w-3xl space-y-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
              <p>
                관광객은 현지인 맛집, 로컬 카페, 오래된 가게를 찾습니다.
              </p>
              <p>
                군산.com은 사장님이 제공한 정보를 확인하고, 방문자가 보기
                쉽게 정리하는 군산 정보 포털입니다.
              </p>
              <p>
                광고비보다 중요한 것은 정확한 영업정보와 실제 매장의
                매력입니다.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-800"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/50">
            <h2 className="text-lg font-bold text-slate-950">
              신청 기능 준비 상태
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              현재는 실제 등록 저장, 인증, 업로드 기능 없이 안내 구조를
              정리하고 있습니다.
            </p>
            <div className="mt-4 grid gap-2">
              <button
                type="button"
                disabled
                className="h-10 cursor-not-allowed rounded-lg bg-slate-300 px-4 text-sm font-bold text-slate-600"
              >
                등록 기능 준비 중
              </button>
              <button
                type="button"
                disabled
                className="h-10 cursor-not-allowed rounded-lg border border-slate-200 bg-white px-4 text-sm font-bold text-slate-500"
              >
                사장님 인증 방식 준비 중
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-[1200px] gap-5 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-5">
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <SectionHeader
                title="왜 사장님 인증이 필요한가"
                description="아무나 가게 정보를 올리면 잘못된 정보가 생길 수 있습니다. 방문자가 믿고 볼 수 있는 정보를 만들기 위해 인증과 관리자 확인이 필요합니다."
              />

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {verificationCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3"
                  >
                    <h3 className="text-sm font-bold text-slate-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <SectionHeader
                title="사장님이 제공하면 좋은 정보"
                description="손님이 방문 전에 궁금해하는 정보를 중심으로 정리합니다. 가격표나 메뉴판처럼 자주 바뀌는 정보는 최신 여부가 중요합니다."
              />

              <div className="mt-4 flex flex-wrap gap-2">
                {ownerInfoItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <SectionHeader
                title="사진 정리 안내"
                description="사장님이 올린 사진은 추후 군산.com 카드와 상세페이지에 맞게 정리될 예정입니다. 지금은 업로드 기능 없이 안내만 제공합니다."
              />

              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {photoGuideCards.map((card) => (
                  <article
                    key={card.title}
                    className="rounded-lg border border-cyan-100 bg-cyan-50/60 p-3"
                  >
                    <h3 className="text-sm font-bold text-cyan-950">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-cyan-900">
                      {card.description}
                    </p>
                  </article>
                ))}
              </div>

              <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
                밝기, 비율, 썸네일 구성을 맞춰 방문자가 보기 좋은 형태로
                제공하는 방향을 준비 중입니다. 자동 보정이나 즉시 편집 기능은
                아직 제공하지 않습니다.
              </p>
            </section>
          </div>

          <aside className="space-y-5">
            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <SectionHeader
                title="등록 절차"
                description="실제 신청 흐름은 관리자 확인 구조가 준비된 뒤 연결합니다."
              />

              <ol className="mt-4 space-y-2">
                {registrationSteps.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                  >
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-cyan-700 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-slate-900">
                        {step}
                      </p>
                      <p className="text-[11px] font-semibold text-slate-500">
                        준비 단계
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm shadow-amber-100/60 sm:p-5">
              <h2 className="text-lg font-bold text-slate-950">
                현재 준비 중입니다
              </h2>
              <div className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
                <p>현재는 사장님 등록 기능을 준비 중입니다.</p>
                <p>
                  먼저 어떤 정보를 받을지, 어떤 인증 절차가 필요한지 정리하고
                  있습니다.
                </p>
                <p>이후 Supabase와 관리자 승인 흐름을 연결할 예정입니다.</p>
              </div>
              <Link
                href="/places"
                className="mt-4 inline-flex h-9 w-full items-center justify-center rounded-lg border border-amber-200 bg-white px-3 text-sm font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800"
              >
                등록된 장소 먼저 보기
              </Link>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/40 sm:p-5">
              <h2 className="text-lg font-bold text-slate-950">
                군산.com 등록 원칙
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <li>광고비로 검증 상태가 좋아지지 않습니다.</li>
                <li>등록 정보는 관리자 확인 후 반영됩니다.</li>
                <li>업체 제공 정보와 방문자 확인 정보는 분리합니다.</li>
                <li>방문 전 확인이 필요한 정보를 우선 정리합니다.</li>
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div>
      <h2 className="text-xl font-bold leading-tight text-slate-950">
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  );
}
