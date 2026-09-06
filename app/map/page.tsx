import CourseRouteMap from "@/components/CourseRouteMap";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileNavigation from "@/components/MobileNavigation";

export default function MapPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-ivory text-foreground">
      <Header />
      <section className="px-5 pb-10 pt-12 sm:px-8 sm:pb-14 sm:pt-16 lg:px-10 lg:pt-20">
        <div className="mx-auto w-full max-w-[1280px]">
          <p className="text-[10px] font-black tracking-[0.2em] text-sea-blue">GUNSAN COURSE MAP</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.065em] text-gunsan-navy sm:text-5xl lg:text-6xl">장소를 찾는 지도보다,<br />다음 순서를 보여주는 지도</h1>
          <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
            고른 코스의 관광지와 이동 흐름을 따라가세요. 식사와 카페는 검증된 선택지가 연결되는 위치를 기준으로 들어갑니다.
          </p>
        </div>
      </section>
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto w-full max-w-[1280px]">
          <CourseRouteMap />
        </div>
      </section>
      <Footer />
      <MobileNavigation />
    </main>
  );
}
