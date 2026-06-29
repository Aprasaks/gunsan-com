import Header from "@/components/Header";

const reportTypes = [
  {
    title: "틀린 정보 제보",
    description: "영업시간, 휴무일, 주차, 위치가 실제와 다를 때",
  },
  {
    title: "새 장소 제보",
    description: "아직 군산.com에 없는 장소를 알려주고 싶을 때",
  },
  {
    title: "폐업/이전 제보",
    description: "폐업했거나 다른 곳으로 옮긴 것 같을 때",
  },
  {
    title: "방문 확인 제보",
    description: "직접 다녀와서 알게 된 정보를 남기고 싶을 때",
  },
  {
    title: "사진 차이 제보",
    description: "메뉴판, 가격, 외관, 주차 위치 사진이 달라졌을 때",
  },
];

const reportableItems = [
  "영업시간이 달라졌어요",
  "휴무일이 달라졌어요",
  "주차 정보가 실제와 달라요",
  "위치가 다르거나 이전했어요",
  "폐업한 것 같아요",
  "새 장소를 알려주고 싶어요",
  "남자 이용 가능 여부를 확인했어요",
  "아이와 함께 가기 좋은지 알려주고 싶어요",
  "사진이나 메뉴판 정보가 달라졌어요",
];

const informationRules = [
  {
    title: "업체 제공 정보",
    description: "사장님이나 업체가 알려준 기본 정보를 따로 정리합니다.",
  },
  {
    title: "방문자 확인 정보",
    description: "직접 다녀온 사람이 확인한 내용을 구분해서 보여줍니다.",
  },
  {
    title: "확인 필요 정보",
    description: "아직 최신 여부가 분명하지 않은 정보는 조심스럽게 표시합니다.",
  },
];

export default function SubmitPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-50 text-slate-950">
      <Header />

      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6 lg:py-14">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm font-semibold text-cyan-700">정보 제보</p>
          <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산 정보 제보하기
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            영업시간이 달라졌거나, 휴무일이 바뀌었거나, 주차 정보가 실제와
            다르다면 알려주세요. 군산.com은 제보를 바탕으로 군산 정보를 더
            정확하게 정리합니다.
          </p>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-500">
            작은 제보 하나가 누군가에게는 헛걸음을 줄여주는 정보가 될 수
            있습니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-800">
              저장 기능 준비 중
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
              사진 제보 추후 제공 예정
            </span>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 lg:py-12">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-6">
            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-950">
                    어떤 정보를 제보할 수 있나요?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    군산에 사는 사람도, 군산에 다녀온 사람도 직접 확인한
                    정보를 남길 수 있습니다.
                  </p>
                </div>
                <span className="w-fit rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  구조 정리 중
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {reportableItems.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950">제보 유형</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                제보는 나중에 검토하기 쉽도록 유형별로 나눠 받을 예정입니다.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {reportTypes.map((type) => (
                  <article
                    key={type.title}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 sm:p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-950">
                      {type.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {type.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <section className="rounded-xl border border-cyan-100 bg-cyan-50 p-4 sm:p-6">
              <h2 className="text-xl font-bold text-slate-950">
                정보를 나눠서 정리합니다
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                군산.com은 업체가 알려준 정보와 방문자가 확인한 정보를 섞지
                않고 보여주는 방향으로 만들고 있습니다.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {informationRules.map((rule) => (
                  <div
                    key={rule.title}
                    className="rounded-lg border border-cyan-100 bg-white p-3 sm:p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-950">
                      {rule.title}
                    </h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {rule.description}
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
                현재는 제보 저장 기능을 준비 중입니다. 먼저 어떤 정보를 받을지
                정리하는 화면부터 만들고 있습니다.
              </p>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                이후 Supabase와 관리자 승인 흐름을 붙일 예정입니다.
              </p>
            </section>

            <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-lg font-bold text-slate-950">
                    제보 입력 준비 중
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
                    htmlFor="place-name"
                    className="text-sm font-semibold text-slate-800"
                  >
                    장소명
                  </label>
                  <input
                    id="place-name"
                    type="text"
                    placeholder="예: 월명동 바다식당"
                    disabled
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="report-type"
                    className="text-sm font-semibold text-slate-800"
                  >
                    제보 유형
                  </label>
                  <select
                    id="report-type"
                    disabled
                    className="mt-2 h-11 w-full rounded-lg border border-slate-200 bg-slate-100 px-3 text-sm text-slate-500 outline-none"
                    defaultValue=""
                  >
                    <option value="">준비 중</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="report-content"
                    className="text-sm font-semibold text-slate-800"
                  >
                    제보 내용
                  </label>
                  <textarea
                    id="report-content"
                    rows={5}
                    placeholder="영업시간, 휴무일, 주차처럼 달라진 정보를 적는 영역입니다."
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

                <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-500">
                  사진 업로드는 아직 제공하지 않습니다. 사진 제보는 추후 별도
                  기능으로 준비할 예정입니다.
                </p>

                <button
                  type="button"
                  disabled
                  className="h-11 w-full cursor-not-allowed rounded-lg bg-slate-300 px-4 text-sm font-semibold text-slate-600"
                >
                  제보 기능 준비 중
                </button>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
