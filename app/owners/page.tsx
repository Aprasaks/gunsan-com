import Header from "@/components/Header";

const ownerInfoItems = [
  "영업시간",
  "휴무일",
  "주차 정보",
  "예약 방법",
  "가격표/메뉴판",
  "문의 채널",
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

export default function OwnersPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm font-semibold text-cyan-700">사장님 등록</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            사장님 등록 안내
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            군산.com은 광고판이 아니라 손님이 궁금해하는 정보를 정확히 정리하는
            지역 정보 사이트입니다.
          </p>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <div className="space-y-6">
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
              <h2 className="text-base font-bold text-slate-950">v0.1 안내</h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                현재 v0.1에서는 실제 저장 기능 없이 등록 안내 화면 구조만
                준비합니다.
              </p>
            </div>

            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-950">
                등록은 광고 상품이 아닙니다
              </h2>
              <ul className="mt-4 space-y-3">
                {[
                  "등록했다고 검색 상위에 표시되지 않습니다.",
                  "등록했다고 검증 상태가 좋아지지 않습니다.",
                  "업체 등록은 손님이 궁금해하는 정보를 정확히 정리하는 과정입니다.",
                  "광고비를 냈다고 추천 순위가 올라가는 구조가 아닙니다.",
                ].map((text) => (
                  <li key={text} className="flex gap-3 text-sm leading-6 text-slate-700">
                    <span className="mt-0.5 shrink-0 text-slate-400" aria-hidden>
                      —
                    </span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-950">
                업체 제공 정보와 방문자 확인 정보가 분리됩니다
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                사장님이 등록한 정보와 방문자가 확인한 정보는 항상 구분되어
                표시됩니다. 두 정보는 절대 섞이지 않으며, 손님이 출처를 직접
                확인할 수 있습니다.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border-l-4 border-blue-400 bg-blue-50 px-4 py-3">
                  <p className="text-sm font-semibold text-blue-800">
                    업체 제공 정보
                  </p>
                  <p className="mt-1 text-xs leading-5 text-blue-700">
                    사장님이 직접 등록한 영업시간, 주차, 예약, 가격 등의 정보
                  </p>
                </div>
                <div className="rounded-lg border-l-4 border-green-400 bg-green-50 px-4 py-3">
                  <p className="text-sm font-semibold text-green-800">
                    방문자 확인 정보
                  </p>
                  <p className="mt-1 text-xs leading-5 text-green-700">
                    실제 방문자가 제보한 현장 경험과 확인 정보
                  </p>
                </div>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-950">
                준비하면 좋은 정보
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                손님이 가장 많이 궁금해하는 정보입니다.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
          </div>

          <div className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-950">
                필요한 사진 안내
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                처음 방문하는 손님이 참고할 수 있는 사진을 준비해주세요.
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
              <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3">
                <p className="text-xs leading-5 text-slate-700">
                  v0.1에서는 사진 업로드를 구현하지 않습니다. v0.2 이후 등록
                  가능합니다.
                </p>
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-950">등록 신청</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                현재 v0.1에서는 등록 저장 기능을 준비 중입니다.
              </p>
              <form className="mt-4 space-y-4">
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
                    className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-channel"
                    className="text-sm font-semibold text-slate-800"
                  >
                    문의 채널
                  </label>
                  <input
                    id="contact-channel"
                    type="text"
                    placeholder="예: 010-0000-0000"
                    className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
                <button
                  type="button"
                  className="h-11 w-full rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
                >
                  저장 기능 준비 중
                </button>
              </form>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
