"use client";

import { useState } from "react";

type LocationRequestState =
  | "idle"
  | "requesting"
  | "granted"
  | "denied"
  | "unsupported"
  | "error";

export default function LocationPermissionPanel() {
  const [requestState, setRequestState] =
    useState<LocationRequestState>("idle");

  const requestLocation = () => {
    if (!("geolocation" in navigator)) {
      setRequestState("unsupported");
      return;
    }

    setRequestState("requesting");

    navigator.geolocation.getCurrentPosition(
      () => {
        setRequestState("granted");
      },
      (positionError) => {
        if (positionError.code === positionError.PERMISSION_DENIED) {
          setRequestState("denied");
          return;
        }

        setRequestState("error");
      },
      {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: 10000,
      },
    );
  };

  const statusMessage = {
    idle: "내 위치를 사용하면 가까운 맛집, 카페, 관광지를 볼 수 있는 구조로 확장합니다. 위치 정보는 저장하지 않습니다.",
    requesting: "브라우저 위치 권한을 확인하고 있습니다.",
    granted: "위치 사용이 켜졌습니다. 위치 기반 장소 데이터 연결은 다음 단계에서 제공합니다.",
    denied: "위치 사용이 꺼져 있어 동네 기준으로 둘러볼 수 있습니다.",
    unsupported: "이 브라우저에서는 위치 기능을 사용할 수 없습니다. 동네 기준으로 둘러보세요.",
    error: "위치 정보를 확인하지 못했습니다. 동네 기준으로 둘러볼 수 있습니다.",
  } satisfies Record<LocationRequestState, string>;

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-semibold text-cyan-700">위치 기준 탐색</p>
      <h2 className="mt-1 text-lg font-bold text-slate-950">
        내 주변 군산 찾기
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        {statusMessage[requestState]}
      </p>

      <button
        type="button"
        className="mt-3 inline-flex h-10 w-full items-center justify-center rounded-lg bg-cyan-700 px-4 text-sm font-bold text-white transition hover:bg-cyan-800 disabled:cursor-not-allowed disabled:bg-slate-300"
        onClick={requestLocation}
        disabled={requestState === "requesting"}
      >
        {requestState === "requesting"
          ? "위치 확인 중"
          : "내 위치 기준으로 보기"}
      </button>
    </section>
  );
}
