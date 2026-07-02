import Link from "next/link";
import Image from "next/image";

export default function MapPreviewSection() {
  return (
    <section className="flex h-full w-full flex-col rounded-lg border border-slate-200 bg-white p-2.5 shadow-sm shadow-slate-200/50">
      <div className="min-w-0">
        <p className="text-xs font-semibold text-cyan-700">지도에서 보기</p>
        <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
          지도에서 한눈에 보기
        </h2>
        <p className="mt-0.5 text-xs leading-5 text-slate-600">
          원하는 장소를 지도로 검색하고 길찾기까지 한번에!
        </p>
      </div>

      <div className="relative mt-2 h-[98px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50">
        <Image
          src="/images/ui/map-preview.webp"
          alt="군산 지도 미리보기"
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 100vw"
          className="object-cover"
        />
      </div>

      <Link
        href="/map"
        className="mt-2 inline-flex h-8 w-full items-center justify-center rounded-full bg-cyan-700 px-4 text-xs font-bold text-white transition hover:bg-cyan-800"
      >
        지도 열기
      </Link>
    </section>
  );
}
