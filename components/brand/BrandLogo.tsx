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
        "inline-flex shrink-0 items-center",
        compact ? "w-14" : "w-[168px] sm:w-[182px] lg:w-[195px]",
      ].join(" ")}
      aria-label="군산.com 홈"
    >
      <img
        src="/brand/gunsan-logo-primary-v1.svg"
        alt="군산.com"
        width="512"
        height="162"
        className={[
          "block h-auto w-full",
          inverse ? "brightness-0 invert" : "",
        ].join(" ")}
      />
    </Link>
  );
}
