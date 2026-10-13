import Image from "next/image";
import Link from "next/link";

export default function SearchHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-slate-200 bg-[#eef7fb]">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/places/gunsan-modern-history-museum.webp"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(238,247,251,0.98)_0%,rgba(238,247,251,0.95)_30%,rgba(238,247,251,0.72)_52%,rgba(238,247,251,0.16)_78%,rgba(238,247,251,0.08)_100%)]" />

      <div className="mx-auto flex min-h-[500px] w-full max-w-[1440px] items-center px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[540px] lg:px-10 lg:py-20">
        <div className="max-w-[650px]">
          <div className="flex items-center gap-3 text-[10px] font-black tracking-[0.28em] text-sea-blue sm:text-[11px]">
            <span className="h-px w-9 bg-sea-blue" aria-hidden="true" />
            GUNSAN TRAVEL GUIDE
          </div>

          <h1 className="mt-5 text-[2.75rem] font-black leading-[1.03] tracking-[-0.07em] text-gunsan-navy sm:text-[3.7rem] lg:text-[4.2rem]">
            걷는 순간,
            <br />
            다시 만나는 <span className="text-[#147cba]">군산</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-base font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8">
            직접 확인한 군산의 장소를
            <br className="hidden sm:block" /> 당신의 일정과 취향에 맞는 여행으로 연결합니다.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#start"
              className="inline-flex h-12 items-center justify-center rounded-full bg-lantern px-6 text-sm font-black text-gunsan-navy shadow-sm transition hover:-translate-y-0.5 hover:bg-[#ee8c35]"
            >
              내 군산여행 만들기
              <span className="ml-3" aria-hidden="true">→</span>
            </Link>
            <Link
              href="#courses"
              className="inline-flex h-12 items-center justify-center rounded-full border border-gunsan-navy bg-white/80 px-6 text-sm font-black text-gunsan-navy backdrop-blur transition hover:-translate-y-0.5 hover:bg-gunsan-navy hover:text-white"
            >
              추천 코스 보기
              <span className="ml-3" aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold text-gunsan-navy/70">
            <span>✓ 직접 확인한 장소</span>
            <span>✓ 실제 이동 순서</span>
            <span>✓ 가족·커플·뚜벅이 맞춤</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 right-5 hidden rounded-full bg-slate-950/55 px-3 py-1.5 text-[11px] font-bold text-white backdrop-blur md:block">
        군산 여행의 시작 · 군산.com
      </div>
    </section>
  );
}
