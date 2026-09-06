import Image from "next/image";
import Link from "next/link";

import CourseFinder from "@/components/CourseFinder";
import Header from "@/components/Header";
import HomeCourseCard from "@/components/HomeCourseCard";
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
    <main className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-slate-950">
      <div className="relative">
        <Header overlay />
        <SearchHero />
      </div>

      <section id="start" className="scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-[1180px]">
          <SectionLead
            eyebrow="START YOUR GUNSAN"
            title="세 가지만 고르면, 여행이 시작됩니다"
            description="누구와 오는지, 얼마나 머무는지, 어떻게 이동하는지만 알려주세요. 장소 목록 대신 가장 맞는 코스부터 보여드립니다."
          />
          <CourseFinder />
        </div>
      </section>

      <section id="courses" className="scroll-mt-20 border-y border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionLead
              eyebrow="CURATED COURSES"
              title="처음에는 세 코스만 보세요"
              description="정보를 더 보여주는 대신 결정을 줄였습니다. 도심, 바다, 가족 여행 중 지금 내 여행에 가까운 흐름부터 고르면 됩니다."
            />
            <Link href="/places" className="shrink-0 text-sm font-black text-[#0f75d8] transition hover:text-[#0b66bf]">
              전체 장소는 필요할 때 보기 →
            </Link>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-[1.16fr_0.84fr_0.84fr]">
            {featuredCourses.map((course, index) => (
              <HomeCourseCard key={course.id} course={course} variant={index === 0 ? "featured" : "secondary"} />
            ))}
          </div>
        </div>
      </section>

      {previewCourse ? (
        <section className="bg-[#081b28] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto w-full max-w-[1280px]">
            <div className="mb-8 max-w-3xl text-white">
              <p className="text-xs font-black tracking-[0.18em] text-cyan-300">TRAVEL BEFORE YOU GO</p>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.055em] sm:text-4xl lg:text-5xl">가기 전에, 군산을 먼저 여행해보세요</h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-white/66 sm:text-base">
                지도만 보는 대신 코스의 장면을 따라가며 분위기와 이동 순서를 먼저 느낍니다. 실제 영상이 준비되면 같은 UI에 드론·1인칭 클립을 그대로 연결할 수 있습니다.
              </p>
            </div>
            <TravelPreview course={previewCourse} />
          </div>
        </section>
      ) : null}

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionLead
              eyebrow="ROUTE, NOT A LIST"
              title="지도도 장소 찾기가 아니라 여행 흐름을 보여줍니다"
              description="관광지와 맛집, 카페를 따로 찍는 대신 선택한 코스의 순서와 다음 이동을 한 화면에서 확인하는 구조입니다."
            />

            <div className="mt-7 space-y-3">
              <RouteNote number="1" title="관광지를 먼저 선택" text="군산근대역사박물관처럼 코스의 기준이 되는 장소에서 시작합니다." />
              <RouteNote number="2" title="먹거리·카페를 동선에 삽입" text="검색 순위가 아니라 지금 가는 길에서 자연스럽게 들를 수 있는 선택지를 보여줍니다." />
              <RouteNote number="3" title="다음 장소까지 이어서 안내" text="이동 시간과 다음 목적지를 한 흐름으로 보여줘 다시 검색하지 않게 만듭니다." />
            </div>

            <Link href="/map" className="mt-7 inline-flex rounded-full bg-[#0d3557] px-5 py-3 text-sm font-black text-white transition hover:bg-[#092a46]">
              여행지도 보기 →
            </Link>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#e9f4fb] p-4 shadow-xl shadow-slate-200/60 sm:p-6">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] bg-white">
              <Image src="/images/ui/map-preview.webp" alt="군산 여행 경로 지도 미리보기" fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-2 text-xs font-black text-[#0d3557] shadow-sm backdrop-blur">군산 시간여행 코스</div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/92 p-4 shadow-lg backdrop-blur sm:left-auto sm:w-[300px]">
                <p className="text-[11px] font-black tracking-[0.12em] text-[#0f75d8]">NEXT STOP</p>
                <h3 className="mt-1 text-lg font-black">초원사진관 방향으로 이동</h3>
                <p className="mt-1 text-xs font-semibold leading-5 text-slate-500">다음 장소와 이동 중 들를 먹거리·카페를 함께 확인하는 화면</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="spot" className="scroll-mt-20 bg-[#eaf5ff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-black tracking-[0.18em] text-[#0f75d8]">GUNSAN.COM SPOT</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.055em] sm:text-4xl lg:text-5xl">여행은 현장 QR에서도 계속됩니다</h2>
            <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-slate-600 sm:text-base">
              관광지에서 군산.com QR을 찍으면 그 장소의 짧은 이야기, 사진 포인트, 근처 먹거리, 다음 관광지를 바로 이어서 볼 수 있습니다.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-sm font-black text-[#0d3557]">
              {['장소 이야기', '근처 맛집', '다음 관광지', '내 코스 저장'].map((label) => (
                <span key={label} className="rounded-full border border-[#b9d8f2] bg-white px-4 py-2.5">{label}</span>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[480px] rounded-[2rem] bg-white p-5 shadow-xl shadow-blue-100/80 sm:p-7">
            <div className="grid grid-cols-[96px_minmax(0,1fr)] gap-5 sm:grid-cols-[120px_minmax(0,1fr)]">
              <div className="grid aspect-square place-items-center rounded-2xl bg-slate-950 p-3 text-white">
                <div className="grid h-full w-full grid-cols-5 gap-1" aria-label="QR 코드 예시">
                  {Array.from({ length: 25 }, (_, index) => (
                    <span key={index} className={index % 3 === 0 || index % 7 === 0 ? "rounded-[2px] bg-white" : "rounded-[2px] bg-slate-800"} />
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-black tracking-[0.12em] text-[#0f75d8]">지금 이곳</p>
                <h3 className="mt-1 text-2xl font-black tracking-[-0.04em]">군산근대역사박물관</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">QR을 찍고 현재 장소에서 다음 여행을 이어갑니다.</p>
                <button type="button" className="mt-4 rounded-full bg-[#0f75d8] px-4 py-2.5 text-sm font-black text-white">다음 장소 보기 →</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-5 rounded-[2rem] bg-[#0d3557] px-6 py-8 text-white sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-black tracking-[0.16em] text-cyan-200">GUNSAN.COM</p>
            <h2 className="mt-2 text-2xl font-black tracking-[-0.045em] sm:text-3xl">관광지를 찾는 사이트가 아니라, 군산의 하루를 만드는 사이트</h2>
          </div>
          <Link href="#start" className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-black text-[#0d3557] transition hover:bg-cyan-50">
            내 코스 만들기 →
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionLead({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[11px] font-black tracking-[0.18em] text-[#0f75d8] sm:text-xs">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-black tracking-[-0.055em] text-[#0d3557] sm:text-4xl lg:text-[2.85rem]">{title}</h2>
      <p className="mt-3 text-sm font-semibold leading-7 text-slate-600 sm:text-base">{description}</p>
    </div>
  );
}

function RouteNote({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e7f3ff] text-sm font-black text-[#0f75d8]">{number}</span>
      <div>
        <strong className="block text-sm font-black text-slate-900 sm:text-base">{title}</strong>
        <p className="mt-1 text-sm font-medium leading-6 text-slate-500">{text}</p>
      </div>
    </div>
  );
}
