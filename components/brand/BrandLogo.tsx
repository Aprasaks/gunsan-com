import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3"
      aria-label="군산.com 홈"
    >
      <Image
        src="/images/logo.png"
        alt=""
        width={1225}
        height={1284}
        sizes="48px"
        className="h-11 w-auto shrink-0 object-contain sm:h-12"
      />
      <span className={compact ? "sr-only" : "block"}>
        <span
          className={[
            "block text-[1.45rem] font-black leading-none tracking-[-0.055em]",
            inverse ? "text-white" : "text-gunsan-navy",
          ].join(" ")}
        >
          군산<span className="text-lantern">.com</span>
        </span>
        <span
          className={[
            "mt-1 block text-[9px] font-bold tracking-[0.16em]",
            inverse ? "text-white/55" : "text-slate-500",
          ].join(" ")}
        >
          COURSE CURATION
        </span>
      </span>
    </Link>
  );
}
