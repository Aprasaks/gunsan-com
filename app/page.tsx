import Link from "next/link";

import CourseFinder from "@/components/CourseFinder";
import FeaturedPlaceCard from "@/components/FeaturedPlaceCard";
import Header from "@/components/Header";
import HomeCourseCard from "@/components/HomeCourseCard";
import SearchHero from "@/components/SearchHero";
import TodayGunsanSection from "@/components/TodayGunsanSection";
import { homeCourses } from "@/data/courses";
import { featuredPlaces } from "@/data/featuredPlaces";

const guestQuestions = [
  { label: "군산 처음이면 어디 가요?", answer: "처음 코스 보기", href: "#course-first-gunsan" },
  { label: "근처에서 뭘 먹을까요?", answer: "대표 먹거리 기준", href: "#food" },
  { label: "군산다운 카페는 어디예요?", answer: "카페 선택 기준", href: "#cafe" },
  { label: "아이랑 갈 곳이 있나요?", answer: "아이랑 코스", href: "#course-family" },
  { label: "비 오면 어디로 가요?", answer: "비 오는 날 코스", href: "#course-rainy-day" },
] as const;

const featuredCourses = homeCourses.filter((course) => course.theme === "first-visit");
const quickCourses = homeCourses.filter(
  (course) => course.theme === "half-day" || course.theme === "one-night-two-days",
);
const situationalCourseThemes = ["family", "rainy-day", "seonyudo", "two-nights-three-days"] as const;
const situationalCourses = situationalCourseThemes.flatMap((theme) =>
  homeCourses.filter((course) => course.theme === theme),
);

const essentialContext: Record<string, { whyHere: string; courseLabel: string }> = {
  "eunpa-lake-park": {
    whyHere: "도심 일정을 마친 뒤 군산의 호수 풍경을 따라 산책하기 좋은 선택입니다.",
    courseLabel: "처음 여행 · 아이랑 코스",
  },
  "wolmyeong-park": {
    whyHere: "근대거리와 함께 군산 도심의 분위기를 이어서 보기 좋은 장소입니다.",
    courseLabel: "반나절 · 비 오는 날 대체 확인",
  },
  "gunsan-modern-history-museum": {
    whyHere: "군산의 근대문화와 항구도시 이야기를 먼저 이해하는 출발점입니다.",
    courseLabel: "처음 여행 · 반나절 코스",
  },
  "gyeongam-dong-railroad-village": {
    whyHere: "오래된 철길 풍경을 걸으며 군산 여행의 한 장면을 남길 수 있습니다.",
    courseLabel: "반나절 · 아이랑 코스",
  },
  "saemangeum-seawall": {
    whyHere: "도심에서 고군산 방향으로 이동할 때 바다 여행의 흐름을 잇는 구간입니다.",
    courseLabel: "1박 2일 · 선유도 코스",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fbfaf7] text-slate-950">
      <div className="relative">
        <Header overlay />
        <SearchHero />
      </div>

      <section id="courses" className="scroll-mt-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <SectionTitle
            eyebrow="CHOOSE YOUR COURSE"
            title="군산 처음이면, 코스부터 고르세요"
            description="일정과 상황만 고르면 어디부터 볼지 바로 알 수 있습니다."
          />

          <CourseFinder />

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.35fr_0.9fr]">
            {featuredCourses.map((course) => (
              <HomeCourseCard key={course.id} course={course} variant="featured" />
            ))}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {quickCourses.map((course) => (
                <HomeCourseCard key={course.id} course={course} variant="secondary" />
              ))}
            </div>
          </div>

          <div className="mt-9 flex items-end justify-between gap-4 border-t border-slate-200 pt-7">
            <div>
              <p className="text-[11px] font-black tracking-[0.14em] text-[#b64b31]">BY SITUATION</p>
              <h3 className="mt-1 text-xl font-black tracking-[-0.035em] text-slate-950 sm:text-2xl">상황에 맞춰 고르기</h3>
            </div>
            <p className="hidden text-sm font-medium text-slate-500 sm:block">아이, 날씨, 바다 일정에 맞는 코스입니다.</p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {situationalCourses.map((course) => (
              <HomeCourseCard key={course.id} course={course} variant="compact" />
            ))}
          </div>
          <p className="mt-5 text-xs font-medium leading-5 text-slate-500">
            코스는 군산.com의 1차 편집 기준입니다. 운영시간, 휴무일과 현장 상황은 방문 전에 공식 정보를 확인해 주세요.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid w-full max-w-[1280px] gap-7 lg:grid-cols-[0.78fr_1.5fr] lg:items-start">
          <div>
            <p className="text-xs font-black tracking-[0.15em] text-[#b64b31]">A LINK FOR YOUR GUEST</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] sm:text-3xl">숙소에서 자주 받는 질문</h2>
            <p className="mt-3 max-w-md text-sm font-medium leading-6 text-slate-600 sm:text-base">
              손님에게 “군산 처음이면 이 코스부터 보세요”라고 한 링크로 전할 수 있도록 정리합니다.
            </p>
          </div>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {guestQuestions.map((item) => (
              <Link key={item.label} href={item.href} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-[#fbfaf7] px-4 py-4 transition hover:border-cyan-300 hover:bg-cyan-50">
                <span className="min-w-0 flex-1">
                  <strong className="block text-sm font-black text-slate-900 sm:text-base">{item.label}</strong>
                  <span className="mt-1 block text-xs font-bold text-slate-500 group-hover:text-cyan-800">{item.answer}</span>
                </span>
                <span className="text-lg font-black text-[#b64b31] transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="essential" className="scroll-mt-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex items-end justify-between gap-4">
            <SectionTitle
              eyebrow="GUNSAN ESSENTIAL FIVE"
              title="코스에서 먼저 만나는 군산 필수 5"
              description="장소를 많이 나열하지 않고, 군산 여행의 흐름을 만드는 다섯 곳부터 보여드립니다."
            />
            <Link href="/places" className="hidden shrink-0 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-black text-slate-800 transition hover:border-[#b64b31] hover:text-[#b64b31] sm:inline-flex">
              전체 장소는 나중에 보기
            </Link>
          </div>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlaces.map((place) => {
              const context = essentialContext[place.slug];

              return (
                <FeaturedPlaceCard
                  key={place.slug}
                  place={place}
                  whyHere={context.whyHere}
                  courseLabel={context.courseLabel}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#123f67] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid w-full max-w-[1280px] gap-4 lg:grid-cols-2">
          <EditorialPreview
            id="food"
            eyebrow="SIGNATURE FOOD"
            title="대표 먹거리는 코스 안에서 고릅니다"
            description="맛을 순위로 단정하지 않고, 군산 여행에서 왜 들르는지와 다음 장소로 어떻게 이어지는지를 기준으로 정리합니다."
            linkLabel="현재 장소 정보 살펴보기"
          />
          <EditorialPreview
            id="cafe"
            eyebrow="GUNSAN-ONLY CAFE"
            title="군산에서 갈 이유가 있는 카페"
            description="근대거리 산책 뒤, 바다 가는 길, 비 오는 날처럼 여행 흐름에 맞는 카페를 공식 정보 확인 후 연결합니다."
            linkLabel="현재 카페 정보 살펴보기"
          />
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1280px] gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              eyebrow="BEFORE YOU GO"
              title="출발 전에 필요한 보조 정보"
              description="코스를 고른 뒤 날씨와 현장 정보를 마지막으로 확인하세요."
            />
            <div className="mt-5">
              <TodayGunsanSection />
            </div>
          </div>
          <Link href="/map" className="group relative min-h-[280px] overflow-hidden rounded-[1.75rem] bg-[#e8f4f5] p-7 sm:p-9">
            <div className="absolute -right-12 -top-12 h-52 w-52 rounded-full border-[36px] border-white/60" aria-hidden="true" />
            <div className="relative flex h-full flex-col">
              <p className="text-xs font-black tracking-[0.15em] text-cyan-800">ROUTE MAP</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl">코스를 고른 다음, 지도에서 확인하세요</h2>
              <p className="mt-3 max-w-lg text-sm font-medium leading-6 text-slate-600 sm:text-base">지도는 장소를 무작정 찾는 화면이 아니라 선택한 코스의 이동 흐름을 확인하는 보조 도구입니다.</p>
              <span className="mt-auto pt-8 text-sm font-black text-cyan-900">지도 보기 <span className="inline-block transition group-hover:translate-x-1" aria-hidden="true">→</span></span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-[11px] font-black tracking-[0.16em] text-[#b64b31]">{eyebrow}</p>
      <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-950 sm:text-3xl lg:text-[2.35rem]">{title}</h2>
      <p className="mt-2 max-w-2xl text-sm font-medium leading-6 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function EditorialPreview({ id, eyebrow, title, description, linkLabel }: { id: string; eyebrow: string; title: string; description: string; linkLabel: string }) {
  return (
    <article id={id} className="scroll-mt-8 rounded-[1.5rem] border border-white/15 bg-white/8 p-6 sm:p-8">
      <p className="text-xs font-black tracking-[0.15em] text-cyan-200">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-black tracking-[-0.04em]">{title}</h2>
      <p className="mt-3 text-sm font-medium leading-6 text-white/72 sm:text-base">{description}</p>
      <Link href="/places" className="mt-7 inline-flex text-sm font-black text-orange-200 transition hover:text-white">
        {linkLabel} <span className="ml-2" aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
