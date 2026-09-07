import Image from "next/image";
import Link from "next/link";

import CourseFinder from "@/components/CourseFinder";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeCourseCard from "@/components/HomeCourseCard";
import MobileNavigation from "@/components/MobileNavigation";
import SearchHero from "@/components/SearchHero";
import TravelPreview from "@/components/TravelPreview";
import { homeCourses } from "@/data/courses";

const featuredSlugs = ["first-gunsan", "seonyudo", "family"] as const;
const featuredCourses = featuredSlugs
  .map((slug) => homeCourses.find((course) => course.slug === slug))
  .filter((course): course is (typeof homeCourses)[number] => Boolean(course));
const previewCourse = homeCourses.find((course) => course.slug === "first-gunsan") ?? homeCourses[0];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory text-foreground">
      <Header />
      <SearchHero />

      <section id="start" className="scroll-mt-20 border-b border-slate-200 bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="mx-auto w-full max-w-[1280px]">
          <CourseFinder />
        </div>
      </section>

      <section id="courses" className="border-y border-slate-200 bg-[#f0ede5] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionLead
              eyebrow="CURATED COURSES"
              title="처음엔, 이 세 코스만 보세요"
              description="도심의 시간, 선유도의 바다, 가족의 속도. 장소를 늘리는 대신 서로 다른 하루 세 개로 압축했습니다."
            />
            <Link href="#start" className="shrink-0 border-b border-gunsan-navy pb-1 text-sm font-black text-gunsan-navy">
              내 조건으로 다시 고르기 ↗
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.16fr_0.84fr_0.84fr]">
            {featuredCourses.map((course, index) => (
              <HomeCourseCard key={course.id} course={course} variant={index === 0 ? "featured" : "secondary"} />
            ))}
          </div>
        </div>
      </section>

      {previewCourse ? (
        <section className="bg-[#071925] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-9 grid gap-5 text-white lg:grid-cols-[1fr_0.72fr] lg:items-end">
              <div>
                <p className="text-[11px] font-black tracking-[0.2em] text-[#9ecadf]">TRAVEL BEFORE YOU GO</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] sm:text-5xl lg:text-6xl">가기 전에,<br />한 번 먼저 걸어보세요</h2>
              </div>
              <p className="max-w-xl text-sm font-medium leading-7 text-white/58 sm:text-base">
                현재는 군산 사진의 장면 전환으로 코스의 순서를 체험합니다. 이후 같은 구조에 드론·1인칭 영상 클립을 교체할 수 있습니다.
              </p>
            </div>
            <TravelPreview course={previewCourse} />
          </div>
        </section>
      ) : null}

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1280px] gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-center">
          <div>
            <SectionLead
              eyebrow="ROUTE MAP"
              title="지도에는 장소보다 순서가 먼저 보입니다"
              description="선택한 코스의 관광지, 식사 구간, 카페, 다음 장소를 하나의 흐름으로 확인합니다. 실제 지도 SDK와 길찾기는 검증된 좌표가 준비된 뒤 연결합니다."
            />
            <Link href="/map" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-gunsan-navy px-6 text-sm font-black text-white transition hover:-translate-y-0.5">
              여행지도에서 전체 흐름 보기 →
            </Link>
          </div>

          <div className="relative min-h-[470px] overflow-hidden border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8">
            <Image src="/images/ui/map-preview.webp" alt="코스 동선을 표현하는 지도 배경 예시" fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover opacity-28" />
            <div className="relative z-10 flex h-full min-h-[410px] flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black tracking-[0.16em] text-sea-blue">SELECTED COURSE</p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-gunsan-navy">군산 처음 코스</h3>
                </div>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">코스 흐름 MVP</span>
              </div>
              <RouteMap />
              <div className="self-end border-l-2 border-lantern bg-white/92 px-4 py-3 shadow-sm backdrop-blur">
                <p className="text-[10px] font-black tracking-[0.12em] text-sea-blue">NEXT STOP</p>
                <p className="mt-1 text-sm font-black text-gunsan-navy">월명공원으로 이어가기</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="spot" className="bg-[#dfe9e9] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-center">
          <div>
            <p className="text-[11px] font-black tracking-[0.2em] text-sea-blue">GUNSAN.COM SPOT</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-gunsan-navy sm:text-5xl lg:text-6xl">도착한 뒤에도,<br />여행은 이어집니다</h2>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
              관광지의 군산.com SPOT을 스캔하면 현재 장소의 1분 이야기와 사진 포인트, 근처 먹거리, 다음 관광지를 한 손 안에서 이어봅니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm font-black text-gunsan-navy">
              {["1분 이야기", "사진 포인트", "근처 선택", "다음 관광지"].map((label, index) => (
                <span key={label} className="flex items-center gap-2"><b className="font-mono text-[10px] text-lantern">0{index + 1}</b>{label}</span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[430px] rounded-t-[11rem] bg-gunsan-navy px-7 pb-8 pt-20 text-white shadow-2xl">
            <div className="mx-auto grid h-24 w-24 grid-cols-3 gap-1 border border-white/20 bg-white p-2" aria-label="군산.com SPOT QR 연결 예시">
              {Array.from({ length: 9 }, (_, index) => <span key={index} className={index % 2 === 0 ? "bg-gunsan-navy" : "bg-navy-soft"} />)}
            </div>
            <p className="mt-6 text-center text-[10px] font-black tracking-[0.18em] text-[#9ecadf]">YOU ARE HERE</p>
            <h3 className="mt-2 text-center text-2xl font-black tracking-[-0.04em]">군산근대역사박물관</h3>
            <div className="mt-6 grid grid-cols-2 border-t border-white/14 pt-5 text-center text-xs font-bold text-white/62">
              <span>현재 장소 이야기</span><span>다음 장소 보기 →</span>
            </div>
            <p className="mt-5 text-center text-[11px] font-medium text-white/38">실제 QR 연결은 후속 단계에서 제공합니다.</p>
          </div>
        </div>
      </section>

      <Footer />
      <MobileNavigation />
    </main>
  );
}

function SectionLead({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-black tracking-[0.2em] text-sea-blue sm:text-[11px]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-gunsan-navy sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function RouteMap() {
  const stops = [
    { label: "근대역사박물관", kind: "관광", tone: "bg-gunsan-navy" },
    { label: "점심 선택", kind: "맛집", tone: "bg-lantern" },
    { label: "월명공원", kind: "산책", tone: "bg-sea-blue" },
    { label: "카페 선택", kind: "휴식", tone: "bg-lantern" },
    { label: "은파호수공원", kind: "관광", tone: "bg-gunsan-navy" },
  ] as const;

  return (
    <ol className="my-10 flex items-start justify-between gap-1" aria-label="군산 처음 코스 지도 흐름">
      {stops.map((stop, index) => (
        <li key={stop.label} className="relative flex min-w-0 flex-1 flex-col items-center text-center">
          {index < stops.length - 1 ? <span className="absolute left-1/2 top-4 h-px w-full border-t border-dashed border-sea-blue/55" aria-hidden="true" /> : null}
          <span className={["relative z-10 grid h-8 w-8 place-items-center rounded-full text-[10px] font-black text-white shadow", stop.tone].join(" ")}>{index + 1}</span>
          <strong className="mt-3 line-clamp-2 text-[11px] font-black text-gunsan-navy sm:text-sm">{stop.label}</strong>
          <span className="mt-1 text-[9px] font-bold text-slate-400 sm:text-[10px]">{stop.kind}</span>
        </li>
      ))}
    </ol>
  );
}
