import Link from "next/link";

const frequentQuestions = [
  { question: "주차 가능한가요?", answer: "방문자가 확인한 곳도 있어요" },
  { question: "남자도 이용 가능한가요?", answer: "일부 업체에서 직접 알려줬어요" },
  { question: "오늘 영업하나요?", answer: "아직 확인 중인 곳이 많습니다" },
];

const principles = [
  "업체 제공 정보와 방문자 확인 정보를 구분합니다.",
  "확인되지 않은 정보는 확인 필요로 표시합니다.",
  "광고/후원 정보는 검증 정보처럼 표시하지 않습니다.",
];

export default function RightSidebar() {
  return (
    <aside className="w-full space-y-4 lg:w-80">
      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <h2 className="text-base font-bold text-slate-950">자주 찾는 질문</h2>
        <div className="mt-4 space-y-3">
          {frequentQuestions.map((item) => (
            <div
              key={item.question}
              className="rounded-lg border border-slate-100 bg-slate-50 p-3"
            >
              <p className="text-sm font-semibold text-slate-800">
                {item.question}
              </p>
              <p className="mt-1 text-sm text-slate-500">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <h2 className="text-base font-bold text-slate-950">
          군산.com 검증 원칙
        </h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
          {principles.map((principle) => (
            <li key={principle} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
              <span>{principle}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <h2 className="text-base font-bold text-slate-950">
          정보가 달라졌나요?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          직접 다녀온 정보가 있으면 제보해주세요.
        </p>
        <Link
          href="/submit"
          className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-lg border border-cyan-200 bg-cyan-50 px-4 text-sm font-semibold text-cyan-800 transition hover:bg-cyan-100 sm:w-auto"
        >
          제보하기
        </Link>
      </section>
    </aside>
  );
}
