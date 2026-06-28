const quickQuestions = [
  "남자 네일 가능한 곳",
  "오늘 여는 곳",
  "주차 가능한 곳",
  "아이랑 가기 좋은 곳",
  "혼밥 가능한 곳",
  "방문자 사진 있는 곳",
];

export default function QuickQuestionChips() {
  return (
    <section className="border-b border-slate-100 bg-white px-5 py-5 sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
          {quickQuestions.map((question) => (
            <button
              key={question}
              type="button"
              className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-100"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
