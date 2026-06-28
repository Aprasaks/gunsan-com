# 군산.com 기술 구현 가이드 (SKILL.md)

## 목적

이 문서는 군산.com 프로젝트의 기술 구현 기준을 정리합니다.

군산.com은 **“군산의 모든 것”** 을 목표로 하는 지역 정보 웹사이트입니다.

다만 v0.1에서는 모든 기능을 구현하지 않습니다.
v0.1의 목적은 더미 데이터 기반으로 장소 정보 UI, 업체 제공 정보와 방문자 확인 정보의 분리, 제보 구조를 위한 기본 화면을 만드는 것입니다.

---

## 현재 개발 단계: v0.1

### v0.1에서 구현하는 것

- 메인 페이지
- 장소 목록 페이지
- 장소 상세 페이지
- 제보하기 페이지
- 사장님 등록 안내 페이지
- 더미 데이터 기반 장소 정보
- 검증 상태 배지
- 업체 제공 정보와 방문자 확인 정보의 UI 분리
- 데스크탑 기준 3단 정보 탐색 레이아웃
- 모바일 반응형 기본 대응

### v0.1에서 구현하지 않는 것

v0.1에서는 다음 기능을 구현하지 않습니다.

- Supabase 연결
- DB 저장
- 지도 기능
- 사진 업로드
- 관리자 페이지
- 로그인
- 결제
- 광고 상품
- 사장님 대시보드
- 자유게시판
- 행사/축제 캘린더 실제 구현
- 외부 데이터 크롤링

---

## TypeScript 타입 원칙

- TypeScript `any`는 절대 사용하지 않습니다.
- 타입이 불명확하면 `unknown`을 사용하고 narrowing 합니다.
- 도메인 타입은 가능한 한 `types/` 폴더에 분리합니다.
- 컴포넌트 파일 내부에 임시 타입을 남발하지 않습니다.
- 폼 입력 타입과 저장 타입은 다를 수 있으므로 분리합니다.
- Supabase 타입은 v0.2 이후 `types/database.ts`로 분리합니다.
- 업체 제공 정보와 방문자 확인 정보는 타입 구조에서도 반드시 분리합니다.

---

## 핵심 타입

### PlaceCategory

v0.1 카테고리는 다음 5개만 사용합니다.

```ts
export type PlaceCategory =
  | "맛집"
  | "카페"
  | "네일/뷰티"
  | "병원/약국"
  | "생활업체";
```

### 주의

숙박, 관광지, 행사, 축제 등은 군산.com의 장기 방향에는 포함될 수 있습니다.
하지만 v0.1에서는 `PlaceCategory`에 포함하지 않습니다.

---

## VerificationStatus

장소 정보의 상태를 나타냅니다.

```ts
export type VerificationStatus =
  | "정보 수집됨"
  | "업체 제공"
  | "방문자 후기"
  | "방문자 사진"
  | "최근 확인됨"
  | "확인 필요"
  | "현장 차이 제보 있음"
  | "폐업/이전 확인 필요";
```

### 상태 의미

| 상태                | 의미                                          |
| ------------------- | --------------------------------------------- |
| 정보 수집됨         | 기본 정보만 수집된 상태                       |
| 업체 제공           | 사장님 또는 업체가 제공한 정보                |
| 방문자 후기         | 방문자 후기 또는 제보가 있는 상태             |
| 방문자 사진         | 방문자 사진이 있는 상태                       |
| 최근 확인됨         | 방문자 또는 관리자가 최근 직접 확인한 상태    |
| 확인 필요           | 최신성 또는 정확성이 불확실한 상태            |
| 현장 차이 제보 있음 | 온라인 정보와 실제 현장 차이 제보가 있는 상태 |
| 폐업/이전 확인 필요 | 폐업 또는 이전 가능성이 있는 상태             |

---

## PhotoSourceType

사진 출처를 나타냅니다.

```ts
export type PhotoSourceType = "owner" | "visitor" | "admin";
```

| 값      | 의미                  |
| ------- | --------------------- |
| owner   | 업체 제공 사진        |
| visitor | 방문자 제보 사진      |
| admin   | 관리자 직접 확인 사진 |

v0.1에서는 실제 사진 업로드를 구현하지 않습니다.
다만 상세 페이지 UI와 타입 설계에서는 사진 출처를 구분할 수 있게 준비합니다.

---

## ModerationStatus

제보, 사진, 사장님 등록 요청 등 승인 상태를 나타냅니다.

```ts
export type ModerationStatus = "pending" | "approved" | "rejected";
```

| 값       | 의미      |
| -------- | --------- |
| pending  | 승인 대기 |
| approved | 승인됨    |
| rejected | 반려됨    |

v0.1에서는 승인 기능을 구현하지 않습니다.
v0.2 이후 Supabase와 관리자 승인 흐름을 붙일 때 사용합니다.

---

## 타입 파일 분리 원칙

| 파일                  | 내용                                                    |
| --------------------- | ------------------------------------------------------- |
| `types/place.ts`      | 장소 데이터 모델, `PlaceCategory`, `VerificationStatus` |
| `types/photo.ts`      | `PhotoSourceType`, `ModerationStatus`, 사진 메타데이터  |
| `types/submission.ts` | 제보 폼 입력 타입, 제보 저장 타입                       |
| `types/owner.ts`      | 사장님 등록 요청 타입                                   |
| `types/report.ts`     | 신고/제보 공통 타입                                     |
| `types/common.ts`     | 공통 유틸 타입                                          |
| `types/database.ts`   | Supabase 생성 타입, v0.2 이후                           |

---

## 공통 유틸 타입 예시

`types/common.ts`에는 다음과 같은 공통 타입을 둘 수 있습니다.

```ts
export type Nullable<T> = T | null;

export type WithId<T> = T & {
  id: string;
};
```

단, 실제로 필요한 시점에만 추가합니다.
미리 과도하게 타입을 만들지 않습니다.

---

## Place 타입 권장 구조

`Place` 타입은 `types/place.ts`에 정의합니다.

```ts
import type { VerificationStatus, PlaceCategory } from "./place";

export type PlaceOwnerInfo = {
  openingHours?: string;
  closedDays?: string;
  parking?: string;
  reservation?: string;
  priceNote?: string;
  contactNote?: string;
};

export type PlaceVisitorInfo = {
  parkingNote?: string;
  visitNote?: string;
  maleFriendlyNote?: string;
  kidFriendlyNote?: string;
  photoNote?: string;
};

export type Place = {
  id: string;
  slug: string;
  name: string;
  category: PlaceCategory;
  area: string;
  description: string;
  tags: string[];
  statuses: VerificationStatus[];
  reviewCount: number;
  lastVerifiedAt: string;
  ownerInfo: PlaceOwnerInfo;
  visitorInfo: PlaceVisitorInfo;
  address?: string;
  phone?: string;
  latitude?: number;
  longitude?: number;
};
```

### 중요

- `ownerInfo`와 `visitorInfo`는 반드시 분리합니다.
- 하나의 flat 객체로 합치지 않습니다.
- 업체 제공 정보와 방문자 확인 정보를 UI에서 섞지 않기 위해 타입 단계부터 분리합니다.

---

## 필드명 통일 기준

v0.1에서는 다음 필드명을 사용합니다.

| 목적             | 사용 필드     |
| ---------------- | ------------- |
| 동네/지역        | `area`        |
| 검증 상태 목록   | `statuses`    |
| 업체 제공 정보   | `ownerInfo`   |
| 방문자 확인 정보 | `visitorInfo` |

### 금지/비권장 필드

| 비권장 필드            | 대신 사용할 필드 |
| ---------------------- | ---------------- |
| `neighborhood`         | `area`           |
| `verificationStatuses` | `statuses`       |
| `businessInfo`         | `ownerInfo`      |
| `reviewInfo`           | `visitorInfo`    |

---

## v0.1 더미 데이터 구조

`data/places.ts`에 더미 데이터를 작성합니다.

### 예시

```ts
import type { Place } from "@/types/place";

export const places: Place[] = [
  {
    id: "place-cafe-baro",
    slug: "cafe-baro",
    name: "카페 바로",
    category: "카페",
    area: "월명동",
    description: "조용하고 혼자 가기 좋은 카페",
    tags: ["주차 가능", "혼자 가기 좋음", "방문자 사진 있음"],
    statuses: ["방문자 후기", "최근 확인됨"],
    reviewCount: 12,
    lastVerifiedAt: "2026-06-15",
    ownerInfo: {
      openingHours: "업체 제공 영업시간 확인 필요",
      parking: "주차 가능 안내 있음",
    },
    visitorInfo: {
      parkingNote: "방문자 기준 근처 주차가 비교적 쉬운 편",
      visitNote: "혼자 방문하기 좋다는 제보 있음",
    },
    address: "전북 군산시 월명동",
  },
];
```

### 주의

- 실제 업체명, 사진, 리뷰 본문을 무단으로 복사하지 않습니다.
- v0.1 더미 데이터는 구조 확인용입니다.
- 확인되지 않은 실제 정보를 확정처럼 쓰지 않습니다.
- 더미 데이터는 실제 서비스 공개 전 검증 또는 교체가 필요합니다.

---

## Supabase Storage 계획

Supabase와 Storage는 v0.2 이후 구현합니다.

v0.1에서는 아래 내용을 참고만 하고 구현하지 않습니다.

### Bucket 구조

| Bucket 이름              | 용도                           |
| ------------------------ | ------------------------------ |
| `place-owner-photos`     | 업체 사장님이 제공한 사진      |
| `place-visitor-photos`   | 방문자가 제보한 사진           |
| `place-admin-photos`     | 관리자가 직접 촬영/등록한 사진 |
| `report-evidence-photos` | 제보 첨부 사진                 |
| `owner-request-photos`   | 사장님 등록 요청 첨부 사진     |

### Storage 규칙

- 모든 업로드는 기본 `pending` 상태로 저장합니다.
- 승인(`approved`) 전 공개 페이지에 노출하지 않습니다.
- 업체 제공 사진과 방문자 사진은 UI에서 반드시 분리 표시합니다.
- 원본 파일명 그대로 저장하지 않습니다.
- 파일명은 UUID 기반으로 저장합니다.
- 이미지 크기 제한은 v0.2에서 결정합니다.
- 추후 WebP 변환 또는 리사이징을 고려합니다.

---

## 페이지별 구현 규칙

## 메인 페이지 (`app/page.tsx`)

### 역할

군산.com의 첫인상을 보여주는 페이지입니다.

### 메인 문구

- 큰 문구: `군산의 모든 것, 군산.com에서 확인하세요`
- 작은 문구: `맛집부터 생활업체, 여행, 행사까지 군산 정보를 한곳에 모읍니다.`
- 검증 보조 문구: `업체 제공 정보와 방문자 확인 정보를 구분해 더 정확한 군산 정보를 만들어갑니다.`
- 검색 placeholder: `남자 네일, 일요일 병원, 주차 카페`

### 포함 요소

- Header
- SearchHero
- QuickQuestionChips
- CategoryTabs
- FilterPanel
- 장소 카드 목록
- RightSidebar

### v0.1 빠른 질문 칩

- 남자 네일 가능한 곳
- 오늘 여는 곳
- 주차 가능한 곳
- 아이랑 가기 좋은 곳
- 혼밥 가능한 곳
- 방문자 사진 있는 곳

### v0.1 카테고리 탭

- 맛집
- 카페
- 네일/뷰티
- 병원/약국
- 생활업체

---

## Header (`components/Header.tsx`)

### 포함 요소

- `군산.com` 로고
- 검색창
- 장소 둘러보기 링크
- 제보하기 링크
- 사장님 등록 링크

### 링크

| 이름          | 경로      |
| ------------- | --------- |
| 장소 둘러보기 | `/places` |
| 제보하기      | `/submit` |
| 사장님 등록   | `/owners` |

### 주의

- 검색 기능은 v0.1에서 실제 동작하지 않아도 됩니다.
- UI만 먼저 구현할 수 있습니다.
- 사장님 등록 버튼은 광고처럼 과하게 강조하지 않습니다.

---

## SearchHero (`components/SearchHero.tsx`)

### 포함 요소

- 큰 문구
- 작은 문구
- 검증 보조 문구
- 검색창 또는 검색 진입 UI
- CTA 버튼

### CTA

| 버튼          | 경로      |
| ------------- | --------- |
| 장소 둘러보기 | `/places` |
| 정보 제보하기 | `/submit` |

---

## QuickQuestionChips (`components/QuickQuestionChips.tsx`)

### 질문 목록

- 남자 네일 가능한 곳
- 오늘 여는 곳
- 주차 가능한 곳
- 아이랑 가기 좋은 곳
- 혼밥 가능한 곳
- 방문자 사진 있는 곳

### 주의

- v0.1에서는 실제 필터 기능이 없어도 됩니다.
- 버튼 또는 링크 형태의 UI만 구현할 수 있습니다.
- 실제 검색/필터 동작은 이후 이슈에서 구현합니다.

---

## CategoryTabs (`components/CategoryTabs.tsx`)

### 카테고리

- 맛집
- 카페
- 네일/뷰티
- 병원/약국
- 생활업체

### 주의

- v0.1에서는 실제 필터 동작 없이 UI만 구현할 수 있습니다.
- 선택 상태 UI는 구현 가능하지만 데이터 필터링은 이후 이슈에서 분리합니다.

---

## FilterPanel (`components/FilterPanel.tsx`)

### 포함 가능한 필터

- 카테고리
- 동네
- 확인 상태
- 주차 가능
- 남자 가능
- 오늘 영업
- 방문자 사진 있음

### 주의

- v0.1에서는 실제 필터 기능이 없어도 됩니다.
- UI 구조만 먼저 구현할 수 있습니다.

---

## RightSidebar (`components/RightSidebar.tsx`)

### 포함 요소

- 자주 찾는 질문
- 최근 확인 정보
- 정보 제보 CTA
- 군산.com 검증 원칙 요약

### 예시

- 주차 가능한가요? → 방문자 확인 필요
- 남자도 이용 가능한가요? → 업체 제공 정보 있음
- 정보가 달라졌나요? → 제보해주세요

---

## 장소 카드 (`components/PlaceCard.tsx`)

### 반드시 포함해야 하는 항목

- 장소명
- `area` 동네
- 카테고리
- 핵심 태그
- 상태 배지
- 후기 수
- 최근 확인일
- 상세 보기 링크

### 주의

- 광고처럼 보이는 강조 효과를 사용하지 않습니다.
- 별점 5개 중심 UI를 사용하지 않습니다.
- 업체 제공 정보와 방문자 확인 정보를 섞지 않습니다.

---

## 상태 배지 (`components/StatusBadge.tsx`)

### 역할

`VerificationStatus` 값을 시각적으로 표시합니다.

### 주의

- 색상만으로 의미를 전달하지 않습니다.
- 텍스트를 함께 표시합니다.
- `업체 제공`과 `최근 확인됨`을 명확히 구분합니다.
- 확인되지 않은 정보를 긍정적으로 보이게 꾸미지 않습니다.

---

## 장소 목록 페이지 (`app/places/page.tsx`)

### 역할

군산 장소를 목록으로 탐색하는 페이지입니다.

### 포함 요소

- Header
- 카테고리/필터 영역
- 장소 카드 목록
- 검색 또는 조건 안내

### 주의

- v0.1에서는 더미 데이터 기반으로 구현합니다.
- 지도 기능은 구현하지 않습니다.
- Supabase 연결은 구현하지 않습니다.

---

## 장소 상세 페이지 (`app/places/[slug]/page.tsx`)

### 역할

장소 하나의 정보를 자세히 보여주는 페이지입니다.

### 반드시 포함할 것

- 장소명
- 카테고리
- `area`
- 상태 배지
- 핵심 태그
- 업체 제공 정보 섹션
- 방문자 확인 정보 섹션
- 정보 차이 제보 CTA

### 정보 분리

업체 제공 정보와 방문자 확인 정보는 반드시 분리된 섹션으로 표시합니다.

### 사진 출처

v0.1에서는 실제 사진 업로드를 구현하지 않아도 됩니다.
하지만 UI 문구나 구조상 사진 출처(owner / visitor / admin)를 구분할 수 있게 설계합니다.

### 금지

- 블로그형 긴 글
- 광고 문구 중심 구성
- 업체 제공 정보와 방문자 확인 정보 혼합
- 확인되지 않은 정보의 확정 표현

---

## 제보 페이지 (`app/submit/page.tsx`)

### 제보 유형

- 틀린 정보
- 새 장소
- 휴무일
- 사진 차이
- 폐업/이전

### v0.1 구현 범위

- 입력 UI 또는 안내 UI
- 어떤 정보를 제보할 수 있는지 안내
- 실제 저장 기능 없음

### v0.1 금지

- Supabase 저장
- 파일 업로드
- 로그인
- 관리자 승인

---

## 사장님 등록 안내 페이지 (`app/owners/page.tsx`)

### 역할

사장님이 군산.com에 어떤 정보를 제공할 수 있는지 안내합니다.

### 포함할 내용

- 광고 문구보다 손님이 궁금해하는 정보를 우선한다는 안내
- 업체 제공 정보와 방문자 확인 정보가 분리된다는 안내
- 등록에 필요한 사진 안내

### 필요한 사진 안내

- 외관
- 입구
- 내부
- 대표 메뉴/서비스
- 메뉴판/가격표
- 주차 위치
- 처음 방문자가 참고할 수 있는 사진

### v0.1 구현 범위

- 안내 페이지
- 등록 요청 CTA
- 실제 저장 기능 없음

---

## lib/ 파일 역할

| 파일                | 역할                                              |
| ------------------- | ------------------------------------------------- |
| `lib/categories.ts` | `PlaceCategory` 목록, 카테고리별 아이콘/색상 매핑 |
| `lib/badges.ts`     | `VerificationStatus`별 배지 색상, 레이블 정의     |
| `lib/utils.ts`      | 날짜 포맷, 슬러그 생성 등 공통 유틸 함수          |

---

## 구현 순서 권장

v0.1에서는 한 이슈에 하나의 작업만 진행합니다.

권장 순서:

1. 메타데이터와 전역 스타일
2. Header
3. SearchHero
4. QuickQuestionChips
5. CategoryTabs
6. FilterPanel
7. RightSidebar
8. 타입 정의
9. 더미 데이터
10. StatusBadge
11. PlaceCard
12. 메인 페이지 조립
13. 장소 목록 페이지
14. 장소 상세 페이지
15. 제보 페이지
16. 사장님 등록 안내 페이지
17. 반응형 정리
18. Vercel Preview 배포

---

## 최종 주의사항

군산.com의 큰 비전은 **“군산의 모든 것”** 입니다.

하지만 v0.1 구현은 작게 진행합니다.

- 하나의 이슈에 하나의 작업만 합니다.
- 사용자가 요청하지 않은 기능을 미리 구현하지 않습니다.
- v0.1 범위를 넘어서는 기능은 코드로 구현하지 않습니다.
- 업체 제공 정보와 방문자 확인 정보는 항상 분리합니다.
- 확인되지 않은 정보는 “확인 필요”로 표시합니다.
- Supabase, 지도, 사진 업로드, 관리자 기능은 v0.2 이후로 미룹니다.
