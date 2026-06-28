import Header from "@/components/Header";

const reportTypes = ["틀린 정보", "새 장소", "휴무일", "사진 차이", "폐업/이전"];

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <Header />

      <section className="bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto w-full max-w-5xl">
          <p className="text-sm font-semibold text-cyan-700">정보 제보</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
            군산 정보 제보하기
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
            군산.com은 방문자와 사장님의 제보를 통해 더 정확한 군산 정보를
            만들어갑니다.
          </p>
        </div>
      </section>

      <section className="px-5 py-8 sm:px-6 lg:py-10">
        <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
          <section className="space-y-6">
            <div className="rounded-xl border border-yellow-200 bg-yellow-50 p-5">
              <h2 className="text-base font-bold text-slate-950">
                v0.1 안내
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                현재 v0.1에서는 실제 저장 기능 없이 제보 화면 구조만
                준비합니다.
              </p>
            </div>

            <section className="rounded-xl border border-slate-200 bg-white p-5">
              <h2 className="text-lg font-bold text-slate-950">
                제보 가능한 유형
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {reportTypes.map((type) => (
                  <div
                    key={type}
                    className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    {type}
                  </div>
                ))}
              </div>
            </section>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-slate-950">제보 내용</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">
              아직 저장되지 않는 구조 확인용 입력 UI입니다.
            </p>

            <form className="mt-5 space-y-4">
              <div>
                <label
                  htmlFor="report-type"
                  className="text-sm font-semibold text-slate-800"
                >
                  제보 유형
                </label>
                <select
                  id="report-type"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                  defaultValue=""
                >
                  <option value="" disabled>
                    유형을 선택하세요
                  </option>
                  {reportTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

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
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
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
                  placeholder="알고 있는 정보를 적어주세요."
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-info"
                  className="text-sm font-semibold text-slate-800"
                >
                  연락 가능 정보 optional
                </label>
                <input
                  id="contact-info"
                  type="text"
                  placeholder="확인이 필요할 때 연락 가능한 정보"
                  className="mt-2 h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-700 outline-none placeholder:text-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              <button
                type="button"
                className="h-11 rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
              >
                저장 기능 준비 중
              </button>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
