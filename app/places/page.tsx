import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";
import { featuredPlaces } from "@/data/featuredPlaces";

const courseLinks: Record<string, string> = {
  "gunsan-modern-history-museum": "/courses/first-gunsan",
  "wolmyeong-park": "/courses/half-day",
  "eunpa-lake-park": "/courses/family",
  "gyeongam-dong-railroad-village": "/courses/half-day",
  "saemangeum-seawall": "/courses/seonyudo",
};

export default function PlacesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory text-foreground">
      <Header />
      <section className="px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
        <div className="mx-auto grid w-full max-w-[1280px] gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="text-[10px] font-black tracking-[0.2em] text-sea-blue">PLACES IN A COURSE</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.065em] text-gunsan-navy sm:text-5xl lg:text-6xl">장소는 많게보다,<br />왜 가는지가 먼저</h1>
          </div>
          <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
            장소는 검색 결과가 아니라 여행 코스를 만드는 재료입니다. 군산을 처음 찾는 사람이 이유를 이해할 수 있는 대표 장소부터 보여드립니다.
          </p>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-[#f0ede5] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlaces.map((place, index) => (
              <article key={place.slug} className={index === 0 ? "group overflow-hidden bg-white sm:col-span-2 lg:row-span-2" : "group overflow-hidden bg-white"}>
                <div className={index === 0 ? "relative h-72 sm:h-[440px]" : "relative h-56"}>
                  {place.image ? <Image src={place.image} alt={place.imageAlt} fill sizes={index === 0 ? "(max-width: 1024px) 100vw, 820px" : "(max-width: 1024px) 50vw, 420px"} className="object-cover transition duration-700 group-hover:scale-[1.03]" /> : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                    <p className="text-[10px] font-black tracking-[0.14em] text-[#b9e0ef]">{place.meta}</p>
                    <h2 className="mt-1 text-2xl font-black tracking-[-0.05em]">{place.name}</h2>
                    <p className="mt-2 max-w-lg text-sm font-medium leading-6 text-white/72">{place.description}</p>
                    <Link href={courseLinks[place.slug] ?? "/#courses"} className="mt-4 inline-flex border-b border-white/55 pb-1 text-sm font-black">포함된 코스 보기 →</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-5 border-t border-slate-300 pt-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <p className="max-w-3xl text-sm font-medium leading-7 text-slate-600">
              맛집과 카페는 이름만 많이 나열하지 않습니다. 코스 상세의 식사·휴식 구간에 운영 정보와 이동 맥락이 확인된 후보만 2~3곳씩 연결합니다.
            </p>
            <Link href="/#start" className="inline-flex min-h-12 items-center justify-center rounded-full bg-gunsan-navy px-6 text-sm font-black text-white">내 코스부터 고르기 →</Link>
          </div>
        </div>
      </section>

      <Footer />
      <MobileNavigation />
    </main>
  );
}
