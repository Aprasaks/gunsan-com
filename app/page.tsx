import Image from "next/image";
import Link from "next/link";

import CourseFinder from "@/components/CourseFinder";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeCourseCard from "@/components/HomeCourseCard";
import MobileNavigation from "@/components/MobileNavigation";
import SearchHero from "@/components/SearchHero";
import { homeCourses } from "@/data/courses";

const featuredSlugs = ["first-gunsan", "one-night-two-days", "family"] as const;
const featuredCourses = featuredSlugs
  .map((slug) => homeCourses.find((course) => course.slug === slug))
  .filter((course): course is (typeof homeCourses)[number] => Boolean(course));

const nowCards = [
  {
    eyebrow: "OLD TOWN",
    title: "원도심에서 시작",
    description: "근대역사박물관부터 골목과 카페까지, 군산의 첫 인상을 가장 밀도 있게 만나는 권역.",
    href: "/courses/first-gunsan",
    image: "/images/places/gunsan-modern-history-museum.webp",
  },
  {
    eyebrow: "SUNSET",
    title: "해질 무렵 은파",
    description: "여행 끝에 천천히 걷고 쉬기 좋은 군산의 저녁. 가족·커플 코스에 자연스럽게 이어집니다.",
    href: "/places/eunpa-lake-park",
    image: "/images/places/eunpa-lake-park.webp",
  },
  {
    eyebrow: "SEA",
    title: "바다를 보는 날",
    description: "새만금에서 선유도까지는 별도의 하루로. 날씨와 이동시간을 고려해 바다 일정만 집중합니다.",
    href: "/courses/seonyudo",
    image: "/images/places/saemangeum-seawall.webp",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-foreground">
      <Header />
      <SearchHero />

      <section id="start" className="scroll-mt-24 bg-[#edf6fa] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
        <div className="mx-auto w-full max-w-[1440px]">
          <CourseFinder />
        </div>
      </section>

      <section id="now" className="scroll-mt-24 bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionLead
              eyebrow="NOW IN GUNSAN"
              title="지금, 어떤 군산을 볼까요?"
              description="정보를 많이 늘어놓기보다 오늘의 여행 흐름을 고르기 쉽게 보여줍니다. 운영정보와 시즌 콘텐츠는 확인된 정보부터 순차적으로 연결합니다."
            />
            <Link href="/places" className="shrink-0 text-sm font-black text-gunsan-navy hover:text-sea-blue">
              군산 전체 둘러보기 →
            </Link>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {nowCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group relative min-h-[330px] overflow-hidden rounded-[24px] bg-gunsan-navy"
              >
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 440px"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071d31]/95 via-[#071d31]/18 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-[10px] font-black tracking-[0.2em] text-[#9fd4ed]">{card.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-black tracking-[-0.05em]">{card.title}</h3>
                  <p className="mt-2 max-w-md text-sm font-medium leading-6 text-white/72">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="scroll-mt-24 border-y border-slate-200 bg-[#f7f4ed] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-[1320px]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionLead
              eyebrow="CURATED COURSES"
              title="검색 대신, 여행을 고르세요"
              description="처음 온 사람, 1박 2일 여행, 아이와 함께하는 가족처럼 실제 검색하는 상황을 기준으로 코스를 정리합니다."
            />
            <Link href="#start" className="shrink-0 text-sm font-black text-gunsan-navy hover:text-sea-blue">
              내 조건으로 다시 고르기 →
            </Link>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.16fr_0.84fr_0.84fr]">
            {featuredCourses.map((course, index) => (
              <HomeCourseCard key={course.id} course={course} variant={index === 0 ? "featured" : "secondary"} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <SectionLead
              eyebrow="VERIFIED BY GUNSAN.COM"
              title="추천보다 먼저, 직접 확인합니다"
              description="인터넷에 많이 나온다는 이유만으로 코스에 넣지 않습니다. 직접 방문한 장소부터 사진·주차·체류시간·주의사항과 마지막 확인일을 기록합니다."
            />
            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                ["01", "직접 방문", "운영자가 실제로 가본 장소부터 공개"],
                ["02", "현장 정보", "주차·체류시간·아이·부모님 적합도 기록"],
                ["03", "마지막 확인일", "오래된 정보와 현재 정보를 구분"],
              ].map(([num, title, desc]) => (
                <div key={num} className="flex gap-4 border-t border-slate-200 py-4">
                  <span className="font-mono text-xs font-black text-lantern">{num}</span>
                  <div>
                    <h3 className="text-sm font-black text-gunsan-navy">{title}</h3>
                    <p className="mt-1 text-xs font-medium leading-5 text-slate-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-slate-200 bg-[#eff5f7] p-5 shadow-xl shadow-slate-900/5 sm:p-8">
            <Image src="/images/ui/map-preview.webp" alt="" fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover opacity-24" />
            <div className="relative z-10 flex h-full min-h-[400px] flex-col justify-between">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[10px] font-black tracking-[0.16em] text-sea-blue">COURSE PROGRESS MAP</p>
                  <h3 className="mt-1 text-xl font-black tracking-[-0.04em] text-gunsan-navy">군산 처음 코스</h3>
                </div>
                <span className="rounded-full bg-white px-3 py-2 text-xs font-bold text-slate-500 shadow-sm">어디로 갈지 먼저</span>
              </div>
              <RouteMap />
              <Link href="/map" className="self-end rounded-full bg-gunsan-navy px-5 py-3 text-xs font-black text-white transition hover:-translate-y-0.5">
                코스 지도 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pass" className="scroll-mt-24 bg-[#071d31] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div>
            <p className="text-[10px] font-black tracking-[0.22em] text-[#80c4e5]">GUNSAN PASS</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.065em] sm:text-5xl">
              코스를 따라가면,
              <br />
              지역의 혜택도 이어지게
            </h2>
            <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/62 sm:text-base">
              군산패스는 단순 할인쿠폰보다 여행 코스 안에서 쓰는 로컬 혜택 네트워크를 목표로 합니다. 현재는 가맹점 인터뷰와 무료 Pilot을 위한 구조를 준비하고 있습니다.
            </p>
          </div>

          <div className="grid gap-3 rounded-[28px] border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-3 sm:p-6">
            {[
              ["COURSE", "내 일정 안에서", "코스에 포함된 혜택을 자연스럽게 확인"],
              ["LOCAL", "지역상권으로", "관광객의 이동을 주변 가게와 연결"],
              ["VERIFY", "실제 사용 기록", "QR 사용으로 방문과 혜택을 확인"],
            ].map(([tag, title, desc]) => (
              <div key={tag} className="rounded-2xl bg-white/[0.07] p-5">
                <p className="text-[9px] font-black tracking-[0.18em] text-[#80c4e5]">{tag}</p>
                <h3 className="mt-3 text-base font-black">{title}</h3>
                <p className="mt-2 text-xs font-medium leading-5 text-white/52">{desc}</p>
              </div>
            ))}
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
