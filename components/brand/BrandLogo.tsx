import Link from "next/link";

type BrandLogoProps = {
  inverse?: boolean;
  compact?: boolean;
};

export default function BrandLogo({ inverse = false, compact = false }: BrandLogoProps) {
  const navy = inverse ? "#ffffff" : "#0f2e4d";
  const sea = inverse ? "#b9dce9" : "#1f8bc0";
  const orange = "#f2994a";

  return (
    <Link
      href="/"
      className={[
        "inline-flex shrink-0 items-center gap-2.5",
        compact ? "" : "min-w-0",
      ].join(" ")}
      aria-label="군산.com 홈"
    >
      <svg
        viewBox="0 0 48 48"
        className={compact ? "h-10 w-10 shrink-0" : "h-9 w-9 shrink-0 sm:h-10 sm:w-10"}
        role="img"
        aria-hidden="true"
      >
        <path
          d="M8 42V21.5C8 11.5 14.9 5 24 5s16 6.5 16 16.5V42"
          fill="none"
          stroke={navy}
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path d="M11.5 41V24h6.2v17M30.3 41V24h6.2v17" fill={navy} />
        <path d="M18.5 41 24 33.7 29.5 41Z" fill={sea} />
        <path d="M19.6 41 24 35.2 28.4 41" fill="none" stroke={navy} strokeWidth="1.5" />
        <path d="M24 9v7M24 13h-5.2M18.8 13v3" fill="none" stroke={navy} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="18.8" cy="18.2" r="2.5" fill={orange} stroke={navy} strokeWidth="1.1" />
        <path d="M20 28.5h2.7v-2.2H25v2.2h3v2.2h-8z" fill={navy} />
        <path d="M18 31.5h12" stroke={navy} strokeWidth="1.3" strokeLinecap="round" />
        <path d="M13 22c2.8-2.5 5.2-3.6 7.2-3.6M35 22c-2.8-2.5-5.2-3.6-7.2-3.6" fill="none" stroke={sea} strokeWidth="1.2" strokeLinecap="round" />
      </svg>

      {compact ? null : (
        <span className="relative inline-flex items-end whitespace-nowrap pb-1">
          <span
            className="relative text-[1.72rem] font-black leading-none tracking-[-0.09em] sm:text-[1.9rem]"
            style={{ color: navy }}
          >
            군산
            <svg
              viewBox="0 0 92 12"
              className="absolute -bottom-2 left-1/2 h-2.5 w-[78%] -translate-x-1/2"
              aria-hidden="true"
            >
              <path d="M4 6c17 6 31 6 43 0 13-6 26-6 41 0" fill="none" stroke={sea} strokeWidth="3.4" strokeLinecap="round" />
            </svg>
          </span>
          <span className="ml-1.5 pb-[1px] text-[1.2rem] font-black leading-none tracking-[-0.055em] sm:text-[1.35rem]" style={{ color: navy }}>
            <span style={{ color: orange }}>.</span>com
          </span>
        </span>
      )}
    </Link>
  );
}
