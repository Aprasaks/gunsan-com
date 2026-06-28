import Link from "next/link";

const frequentQuestions = [
  { question: "주차 가능한가요?", answer: "방문자 확인 필요" },
  { question: "남자도 이용 가능한가요?", answer: "업체 제공 정보 있음" },
  { question: "오늘 영업하나요?", answer: "확인 필요" },
  { question: "방문자 사진이 있나요?", answer: "일부 장소 제공 예정" },
];

const recentNotes = [
  "방문자 확인 정보와 업체 제공 정보를 분리해 표시합니다.",
  "정보가 오래된 장소는 “확인 필요”로 표시합니다.",
  "현장 차이 제보가 있으면 별도 상태로 표시합니다.",
];

const principles = [
  "업체 제공 정보와 방문자 확인 정보를 구분합니다.",
  "확인되지 않은 정보는 확인 필요로 표시합니다.",
  "광고/후원 정보는 검증 정보처럼 표시하지 않습니다.",
];

export default function RightSidebar() {
  return (
    <aside className="w-full space-y-4 lg:w-80">
      <section className="rounded-xl border border-slate-200 bg-white p-5">
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

      <section className="rounded-xl border border-slate-200 bg-white p-5">
        <h2 className="text-base font-bold text-slate-950">최근 확인 정보</h2>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-600">
          {recentNotes.map((note) => (
            <li key={note} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-600" />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-xl border border-cyan-100 bg-cyan-50 p-5">
        <h2 className="text-base font-bold text-slate-950">정보가 달라졌나요?</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          군산.com은 방문자 제보를 통해 더 정확한 정보를 만들어갑니다.
        </p>
        <Link
          href="/submit"
          className="mt-4 inline-flex h-10 items-center rounded-lg bg-cyan-700 px-4 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          제보하기
        </Link>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-5">
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
    </aside>
  );
}
