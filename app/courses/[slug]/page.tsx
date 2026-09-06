import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import CourseTimeline from "@/components/CourseTimeline";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import TravelPreview from "@/components/TravelPreview";
import { homeCourses } from "@/data/courses";
import { places } from "@/data/places";

type CourseDetailPageProps = { params: Promise<{ slug: string }> };
const placeSlugs = new Set(places.map((place) => place.slug));

export function generateStaticParams() {
  return homeCourses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = homeCourses.find((item) => item.slug === slug);
  return course ? {
    title: `${course.title} | 군산.com`,
    description: course.summary,
    openGraph: { title: `${course.title} | 군산.com`, description: course.summary, images: [] },
    twitter: { title: `${course.title} | 군산.com`, description: course.summary, images: [] },
  } : {};
}

export default async function CourseDetailPage({ params }: CourseDetailPageProps) {
  const { slug } = await params;
  const course = homeCourses.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory text-foreground">
      <Header />

      <section className="px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-14 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="mx-auto w-full max-w-[1180px]">
          <Link href="/#courses" className="inline-flex border-b border-sea-blue pb-1 text-sm font-black text-sea-blue">← 다른 코스 보기</Link>
          <div className="mt-10 grid gap-9 lg:grid-cols-[1.18fr_0.82fr] lg:items-end">
            <div>
              <p className="text-[10px] font-black tracking-[0.2em] text-sea-blue">YOUR GUNSAN COURSE</p>
              <h1 className="mt-3 text-5xl font-black leading-[1.02] tracking-[-0.07em] text-gunsan-navy sm:text-6xl lg:text-7xl">{course.title}</h1>
              <p className="mt-5 text-lg font-bold text-slate-600 sm:text-xl">{course.subtitle}</p>
              <p className="mt-4 max-w-3xl text-sm font-medium leading-7 text-slate-500 sm:text-base">{course.summary}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#preview" className="inline-flex min-h-12 items-center justify-center rounded-full bg-lantern px-6 text-sm font-black text-gunsan-navy">▶ 이 코스 미리 여행하기</Link>
                <Link href="#route" className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-black text-gunsan-navy">실제 순서 보기 ↓</Link>
              </div>
            </div>

            <dl className="grid grid-cols-2 border-y border-slate-300 bg-white/45">
              <Metric label="예상 일정" value={course.estimatedTime} />
              <Metric label="여행 지점" value={`${course.stops.length}곳`} />
              <Metric label="이동 방식" value={course.transportLabel} />
              <Metric label="코스 성격" value={course.durationLabel} />
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#071925] px-5 py-10 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="mx-auto w-full max-w-[1280px]"><TravelPreview course={course} /></div>
      </section>

      <section id="route" className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1180px] gap-12 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-start">
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] text-sea-blue">REAL TRAVEL FLOW</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-gunsan-navy sm:text-5xl">이 순서대로<br />움직이면 됩니다</h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              관광지를 나열하지 않고 실제 하루의 순서로 배치했습니다. 식당과 카페는 한 곳으로 고정하지 않고 동선에 맞는 선택 구간으로 둡니다.
            </p>
            <CourseTimeline course={course} placeSlugs={placeSlugs} />
          </div>

          <aside className="space-y-4 lg:sticky lg:top-28">
            <InfoPanel eyebrow="ROUTE NOTE" title="이동 전에 읽어보세요" text={course.routeNote} tone="dark" />
            <section className="border border-slate-200 bg-white p-6">
              <p className="text-[10px] font-black tracking-[0.14em] text-sea-blue">FIT CHECK</p>
              <h2 className="mt-2 text-xl font-black tracking-[-0.04em] text-gunsan-navy">이런 여행에 맞아요</h2>
              <ul className="mt-4 space-y-2 text-sm font-semibold leading-6 text-slate-600">
                {course.recommendedFor.map((item) => <li key={item}>+ {item}</li>)}
              </ul>
              <p className="mt-5 border-t border-slate-200 pt-4 text-xs font-bold leading-5 text-slate-500">추천하지 않음 · {course.notRecommendedFor.join(", ")}</p>
            </section>
            <section className="border-l-4 border-lantern bg-[#f2e7d8] p-6">
              <p className="text-[10px] font-black tracking-[0.14em] text-orange-700">ALTERNATIVE</p>
              <h2 className="mt-2 text-lg font-black text-gunsan-navy">상황에 따른 대체 장소</h2>
              <p className="mt-3 text-sm font-semibold leading-6 text-slate-600">{course.alternativeStops.join(" · ")}</p>
            </section>
            <section className="border border-slate-200 bg-white p-6">
              <p className="text-[10px] font-black tracking-[0.14em] text-slate-400">SOURCE &amp; CHECK</p>
              <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{course.sourceNote}</p>
              <a href="https://www.gunsan.go.kr/tour" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex border-b border-sea-blue pb-1 text-sm font-black text-sea-blue">군산문화관광 공식 정보 ↗</a>
            </section>
            <Link href="/map" className="inline-flex w-full min-h-12 items-center justify-center rounded-full bg-gunsan-navy px-5 text-sm font-black text-white">여행지도에서 보기 →</Link>
          </aside>
        </div>
      </section>

      <Footer />
      <MobileNavigation />
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-r border-slate-200 p-4 last:border-r-0 sm:p-5">
      <dt className="text-[10px] font-black tracking-[0.12em] text-slate-400">{label}</dt>
      <dd className="mt-1 text-sm font-black text-gunsan-navy sm:text-base">{value}</dd>
    </div>
  );
}

function InfoPanel({ eyebrow, title, text, tone }: { eyebrow: string; title: string; text: string; tone: "dark" }) {
  return (
    <section className={tone === "dark" ? "bg-gunsan-navy p-6 text-white" : "bg-white p-6"}>
      <p className="text-[10px] font-black tracking-[0.14em] text-[#9ecadf]">{eyebrow}</p>
      <h2 className="mt-2 text-xl font-black tracking-[-0.04em]">{title}</h2>
      <p className="mt-3 text-sm font-medium leading-6 text-white/62">{text}</p>
    </section>
  );
}
