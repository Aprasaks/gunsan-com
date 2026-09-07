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
      className={[
        "relative block shrink-0 overflow-hidden",
        compact ? "aspect-square w-14" : "aspect-[3.8] w-[215px] sm:w-[240px] lg:w-[280px]",
      ].join(" ")}
      aria-label="군산.com 홈"
    >
      <Image
        src="/images/gunsan-logo-header-v2.webp"
        alt=""
        width={1672}
        height={941}
        sizes={compact ? "56px" : "(max-width: 640px) 215px, (max-width: 1024px) 240px, 280px"}
        style={compact
          ? { left: "-102%", top: "-119%", width: "590%" }
          : { left: "-26%", top: "-115%", width: "150%" }}
        className={[
          "absolute h-auto max-w-none",
          inverse ? "brightness-0 invert" : "",
        ].join(" ")}
      />
    </Link>
  );
}
