export default function Home() {
  return (
    <main className="flex min-h-screen flex-1 items-center bg-slate-50 px-6 py-20 text-slate-950">
      <section className="mx-auto w-full max-w-3xl">
        <p className="mb-4 text-sm font-semibold text-slate-500">군산.com</p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-slate-950 sm:text-5xl">
          군산에서 매번 다시 물어봐야 했던 정보를 확인하세요
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
          검색해도 애매한 군산 생활 정보를 한곳에 모아 검증합니다.
        </p>
      </section>
    </main>
  );
}
