import Link from "next/link";
import Image from "next/image";

export default function MapPreviewSection() {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm shadow-slate-200/50">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,0.95fr)_minmax(128px,0.8fr)] sm:items-center">
        <div className="min-w-0">
          <p className="text-xs font-semibold text-cyan-700">지도에서 보기</p>
          <h2 className="mt-0.5 text-base font-bold leading-tight text-slate-950 sm:text-lg">
            지도에서 한눈에 보기
          </h2>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            원하는 장소를 지도로 검색하고 길찾기까지 한번에!
          </p>

          <Link
            href="/map"
            className="mt-3 inline-flex h-8 items-center justify-center rounded-full bg-cyan-700 px-4 text-xs font-bold text-white transition hover:bg-cyan-800"
          >
            지도 열기
          </Link>
        </div>

        <div
          className="relative h-[116px] overflow-hidden rounded-lg border border-slate-200 bg-slate-50"
        >
          <Image
            src="/images/ui/map-preview.webp"
            alt="군산 지도 미리보기"
            fill
            sizes="(min-width: 1024px) 220px, (min-width: 640px) 34vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
