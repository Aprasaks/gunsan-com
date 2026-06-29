import Link from "next/link";

import Header from "@/components/Header";

const ownerInfoItems = [
  "영업시간",
  "휴무일",
  "주차 가능 여부",
  "예약 가능 여부",
  "대표 메뉴 또는 서비스",
  "가격표/메뉴판",
  "처음 방문하는 손님이 헷갈릴 수 있는 정보",
  "남자 이용 가능 여부",
  "아이 동반 가능 여부",
  "위치나 입구 찾는 방법",
];

const photoGuideItems = [
  "외관",
  "입구",
  "내부",
  "대표 메뉴/서비스",
  "메뉴판/가격표",
  "주차 위치",
  "처음 방문자가 참고할 수 있는 사진",
];

const guideSections = [
  {
    title: "광고보다 정보가 먼저입니다",
    description:
      "군산.com은 광고비를 냈다는 이유만으로 검증된 장소처럼 표시하지 않습니다.",
    items: [
      "등록했다고 검색 상위에 표시되지 않습니다.",
      "등록했다고 검증 상태가 좋아지지 않습니다.",
      "광고비를 냈다고 추천 순위가 올라가는 구조가 아닙니다.",
    ],
  },
  {
    title: "방문자가 궁금해하는 정보를 정리합니다",
    description:
      "영업시간, 휴무일, 주차, 예약처럼 방문 전에 꼭 확인하고 싶은 정보를 우선합니다.",
    items: [
      "처음 오는 손님이 헷갈릴 수 있는 정보를 알려주세요.",
      "가격표나 메뉴판처럼 변동될 수 있는 정보는 최신 여부가 중요합니다.",
      "위치, 입구, 주차 위치처럼 현장에서 헤매기 쉬운 정보도 도움이 됩니다.",
    ],
  },
];

const informationSources = [
  {
    title: "업체 제공 정보",
    description: "사장님이 알려준 영업시간, 주차, 예약, 가격표 같은 정보",
    className: "border-blue-200 bg-blue-50 text-blue-800",
  },
  {
    title: "방문자 확인 정보",
    description: "실제 방문자가 확인하거나 제보한 현장 정보",
    className: "border-green-200 bg-green-50 text-green-800",
  },
];

export default function OwnersPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:py-14">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm font-semibold text-cyan-700">사장님 등록</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-5xl">
            사장님 등록 안내
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            군산.com은 광고비를 낸 곳을 무조건 추천하는 사이트가 아닙니다.
            손님이 방문 전에 궁금해하는 정보를 정확하게 정리하는 군산 정보
            사이트를 지향합니다.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            영업시간, 휴무일, 주차, 예약, 가격표처럼 손님이 실제로 확인하고
            싶은 정보를 알려주세요.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
              등록 기능 준비 중
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              광고 상품 아님
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:py-12">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {guideSections.map((section) => (
                  <article
                    key={section.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4"
                  >
                    <h2 className="text-base font-bold text-slate-950">
                      {section.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {section.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-6 text-slate-700"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950">
                사장님이 알려주면 좋은 정보
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                손님이 방문 전에 가장 많이 확인하는 정보입니다. 짧아도 정확한
                정보가 더 도움이 됩니다.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {ownerInfoItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950">
                방문자 확인 정보와는 구분됩니다
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                사장님이 알려준 정보는 “업체 제공 정보”로 표시합니다. 실제
                방문자가 확인한 내용은 “방문자 확인 정보”로 따로 표시하고, 두
                정보를 섞어서 검증된 것처럼 보이게 하지 않습니다.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {informationSources.map((source) => (
                  <div
                    key={source.title}
                    className={`rounded-lg border p-3 sm:p-4 ${source.className}`}
                  >
                    <h3 className="text-sm font-bold">{source.title}</h3>
                    <p className="mt-2 text-xs leading-5">
                      {source.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-4">
            <section className="rounded-xl border border-yellow-200 bg-yellow-50 p-4 sm:p-5">
              <h2 className="text-base font-bold text-slate-950">
                현재 준비 중입니다
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                현재는 사장님 등록 기능을 준비 중입니다. 먼저 어떤 정보를
                받을지 정리하는 안내 화면부터 만들고 있습니다.
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                이후 Supabase와 관리자 승인 흐름을 붙일 예정입니다.
              </p>
              <Link
                href="/places"
                className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg border border-yellow-200 bg-white px-3 text-sm font-semibold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-800 sm:w-auto"
              >
                등록된 장소 먼저 보기
              </Link>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <h2 className="text-lg font-bold text-slate-950">
                있으면 좋은 사진
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                처음 방문하는 손님이 참고할 수 있는 사진입니다. 지금은 업로드
                기능 없이 안내만 제공합니다.
              </p>
              <ul className="mt-4 space-y-2">
                {photoGuideItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-500">
                사진 등록은 추후 제공 예정입니다. 파일 업로드 UI는 아직
                구현하지 않습니다.
              </p>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    등록 요청 준비 중
                  </h2>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    아래 입력 UI는 구조 확인용이며 아직 저장되지 않습니다.
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                  비활성
                </span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label
                    htmlFor="business-name"
                    className="text-sm font-semibold text-slate-800"
                  >
                    업체명
                  </label>
                  <input
                    id="business-name"
                    type="text"
                    placeholder="예: 월명동 바다식당"
                    disabled
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-category"
                    className="text-sm font-semibold text-slate-800"
                  >
                    업종
                  </label>
                  <input
                    id="business-category"
                    type="text"
                    placeholder="예: 식당, 카페, 병원, 생활업체"
                    disabled
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="business-area"
                    className="text-sm font-semibold text-slate-800"
                  >
                    위치/동네
                  </label>
                  <input
                    id="business-area"
                    type="text"
                    placeholder="예: 월명동, 수송동, 은파 주변"
                    disabled
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="owner-note"
                    className="text-sm font-semibold text-slate-800"
                  >
                    알려주고 싶은 정보
                  </label>
                  <textarea
                    id="owner-note"
                    rows={5}
                    placeholder="영업시간, 휴무일, 주차, 예약처럼 손님이 확인하면 좋은 정보"
                    disabled
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 py-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-info"
                    className="text-sm font-semibold text-slate-800"
                  >
                    연락처 선택 입력
                  </label>
                  <input
                    id="contact-info"
                    type="text"
                    placeholder="확인이 필요할 때만 사용할 선택 정보"
                    disabled
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="button"
                  disabled
                  className="h-11 w-full cursor-not-allowed rounded-lg bg-slate-300 px-4 text-sm font-semibold text-slate-600"
                >
                  등록 기능 준비 중
                </button>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
