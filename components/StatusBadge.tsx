import type { VerificationStatus } from "@/types/place";

type StatusBadgeProps = {
  status: VerificationStatus;
};

const statusStyles: Record<VerificationStatus, string> = {
  "최근 확인됨": "border-emerald-200 bg-emerald-50 text-emerald-700",
  "방문자 후기": "border-green-200 bg-green-50 text-green-700",
  "방문자 사진": "border-green-200 bg-green-50 text-green-700",
  "업체 제공": "border-sky-200 bg-sky-50 text-sky-700",
  "정보 수집됨": "border-slate-200 bg-slate-50 text-slate-600",
  "확인 필요": "border-yellow-200 bg-yellow-50 text-yellow-800",
  "현장 차이 제보 있음": "border-orange-200 bg-orange-50 text-orange-700",
  "폐업/이전 확인 필요": "border-red-200 bg-red-50 text-red-700",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold leading-none",
        statusStyles[status],
      ].join(" ")}
    >
      {status}
    </span>
  );
}
