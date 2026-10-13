import Link from "next/link";

type BrandLogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  const navy = inverse ? "#ffffff" : "#0f2e4d";
  const wave = inverse ? "#8fd0ef" : "#1b86bd";
  const orange = "#f2994a";

  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-3"
      aria-label="군산.com 홈"
    >
      <span
        className={[
          "block shrink-0 bg-[url('/images/gunsan-logo-header-v2.webp')] bg-no-repeat",
          compact ? "h-10 w-9" : "h-11 w-10 sm:h-12 sm:w-11",
        ].join(" ")}
        style={{
          backgroundSize: compact ? "248px auto" : "270px auto",
          backgroundPosition: compact ? "-42px -49px" : "-46px -54px",
        }}
        aria-hidden="true"
      />

      {compact ? null : (
        <span className="inline-flex items-end whitespace-nowrap pb-1">
          <span
            className="relative text-[2rem] font-[950] leading-none tracking-[-0.09em] sm:text-[2.1rem]"
            style={{ color: navy }}
          >
            군산
            <svg
              viewBox="0 0 92 12"
              className="absolute -bottom-[10px] left-1/2 h-2.5 w-[74%] -translate-x-1/2"
              aria-hidden="true"
            >
              <path
                d="M4 6c16 5 30 5 42 0 13-5 27-5 42 0"
                fill="none"
                stroke={wave}
                strokeWidth="3.2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span
            className="ml-2 pb-[1px] text-[1.36rem] font-[900] leading-none tracking-[-0.05em] sm:text-[1.46rem]"
            style={{ color: navy }}
          >
            <span style={{ color: orange }}>.</span>com
          </span>
        </span>
      )}
    </Link>
  );
}
