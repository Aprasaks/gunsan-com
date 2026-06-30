# 군산.com 기술 구현 가이드 (SKILL.md)

## 목적

이 문서는 군산.com 프로젝트의 기술 구현 기준을 정리합니다.

군산.com은 **“군산의 모든 것”** 을 목표로 하는 군산 생활·관광 정보 플랫폼입니다.

군산.com은 군산에 사는 사람과 군산에 오는 사람이 모두 사용할 수 있는 군산 대표 정보 포털을 지향합니다.

메인 홈은 군산 대표 포털형 입구입니다.

장소를 깊게 탐색하는 필터 중심 구조는 `/places` 페이지에서 담당합니다.

장소 하나에 대한 신뢰 정보는 `/places/[slug]` 상세 페이지에서 담당합니다.

현재 단계의 목적은 다음과 같습니다.

- 레퍼런스 이미지 기준의 포털형 메인 홈 구현
- 더미 데이터 기반 장소 정보 구조 유지
- 업체 제공 정보와 방문자 확인 정보의 분리
- 제보 구조를 위한 기본 화면 유지
- 일부 독립 기능, 예를 들어 군산 현재 날씨 API는 별도 작업으로 연결
- 실제 DB 저장, 지도 SDK, 행사/관광 대량 API 연동은 이후 작업으로 분리

---

## 현재 개발 단계

현재 군산.com은 **레퍼런스형 포털 홈 구축 단계**입니다.

초기 v0.1의 더미 데이터 기반 구조는 유지하되, 메인 홈은 사용자가 제공한 레퍼런스 이미지를 기준으로 실제 지역 포털처럼 보이게 정리합니다.

### 현재 단계에서 구현할 수 있는 것

- 군산 대표 포털형 메인 홈 구조
- 2단 Header
- full-width 히어로 배너
- 주요 카테고리 카드 UI
- 지금 많이 찾는 정보 chip/grid UI
- 군산 장소 둘러보기 preview
- 장소 카드에서 상세페이지로 이동하는 구조
- 오늘의 군산 영역
- 군산 현재 날씨 API 단일 연결
- 행사·축제 compact preview UI
- 지도에서 보기 compact preview UI
- 동네별 보기 compact UI
- 장소 목록 페이지
- 장소 상세 페이지
- 제보하기 페이지
- 사장님 등록 안내 페이지
- 더미 데이터 기반 장소 정보
- 검증 상태 배지
- 업체 제공 정보와 방문자 확인 정보의 UI 분리
- 데스크탑/태블릿/모바일 반응형 대응
- 직접 제작하거나 사용 권한이 확인된 이미지 asset 적용

### 현재 단계에서 구현하지 않는 것

사용자가 별도 작업으로 명시하지 않는 한 다음 기능은 구현하지 않습니다.

- Supabase 연결
- DB 저장
- 사진 업로드
- 관리자 페이지
- 로그인
- 결제
- 광고 상품
- 사장님 대시보드
- 자유게시판
- 행사/축제 캘린더 실제 구현
- 지도 SDK 연결
- 실제 좌표 기반 지도 마커 구현
- 관광 API 대량 연동
- 행사 API 대량 연동
- 공공데이터 대량 수집
- 실제 통합 검색 기능
- 실제 동네별 필터 기능
- 외부 데이터 무단 크롤링
- 외부 리뷰/사진/본문 복사
- 여러 API를 한 번에 연결하는 작업

---

## API 연결 원칙

API는 한 번에 여러 개 붙이지 않습니다.

하나의 API는 하나의 작업으로 분리합니다.

허용되는 방식:

1. 하나의 API만 연결한다.
2. API 호출 코드는 컴포넌트 안에 길게 직접 쓰지 않는다.
3. API 관련 코드는 `lib/` 또는 `lib/api/` 아래에 분리한다.
4. 로딩 상태, 실패 상태, fallback 상태를 반드시 처리한다.
5. 실제 값이 없으면 임의 수치를 만들지 않는다.
6. API 실패 시에도 화면이 깨지지 않아야 한다.
7. API 연결은 UI 수정 작업과 섞지 않는다.

### 현재 우선 허용 API

- 군산 현재 날씨 API

권장 파일:

```txt
lib/api/weather.ts
```

권장 역할:

- 군산 좌표 관리
- 날씨 API 호출
- weather code를 한글 상태로 변환
- 실패 시 fallback 반환
- Header 또는 TodayGunsanSection에서 사용할 수 있는 단순 데이터 형태 제공

### 나중에 별도 검토할 API

- 관광 API
- 행사/축제 API
- 지도 API
- 공공데이터 기반 업소 정보
- 공공데이터 기반 주차 정보

---

## TypeScript 타입 원칙

- TypeScript `any`는 절대 사용하지 않습니다.
- 타입이 불명확하면 `unknown`을 사용하고 narrowing 합니다.
- 도메인 타입은 가능한 한 `types/` 폴더에 분리합니다.
- 컴포넌트 파일 내부에 임시 타입을 남발하지 않습니다.
- 폼 입력 타입과 저장 타입은 다를 수 있으므로 분리합니다.
- Supabase 타입은 v0.2 이후 또는 DB 연결 작업 시 `types/database.ts`로 분리합니다.
- 업체 제공 정보와 방문자 확인 정보는 타입 구조에서도 반드시 분리합니다.
- 표시용 홈 카테고리와 실제 장소 데이터 카테고리를 섞지 않습니다.

---

## 핵심 타입

## PlaceCategory

실제 장소 데이터 모델의 `PlaceCategory`는 현재 단계에서 다음 5개만 사용합니다.

```ts
export type PlaceCategory =
  | "맛집"
  | "카페"
  | "네일/뷰티"
  | "병원/약국"
  | "생활업체";
```

### 주의

숙박, 관광/여행, 행사·축제 등은 군산.com의 장기 방향에는 포함됩니다.

하지만 현재 단계에서는 `PlaceCategory`에 임의로 추가하지 않습니다.

메인 홈에는 숙박, 관광/여행, 행사·축제 같은 확장 카테고리 진입 UI를 보여줄 수 있습니다.

이 경우 실제 장소 데이터 모델이 아니라 **홈 표시용 타입**으로 관리합니다.

---

## HomeCategory

메인 홈에서 보여주는 카테고리는 실제 `PlaceCategory`와 다를 수 있습니다.

```ts
export type HomeCategoryStatus = "active" | "inactive";

export type HomeCategory = {
  key: string;
  label: string;
  href?: string;
  imageSrc?: string;
  imageAlt?: string;
  status: HomeCategoryStatus;
};
```

### 표시 가능한 홈 카테고리

- 맛집
- 카페
- 병원/약국
- 생활업체
- 숙박
- 관광/여행
- 행사·축제
- 네일/뷰티

### 구현 원칙

- `active` 항목은 실제 링크로 연결할 수 있습니다.
- `inactive` 항목은 내부 상태명일 뿐, 화면에 “준비 중” 문구를 반복 노출하지 않습니다.
- 실제 기능이 없는 항목은 안전한 링크, 비활성 버튼, 또는 이후 연결 가능한 구조로 둡니다.
- 카테고리 카드에는 부제목/설명을 넣지 않습니다.
- 카테고리명과 이미지 중심으로 구성합니다.
- 카테고리 카드는 모두 같은 높이를 유지합니다.

### 주의

- `HomeCategory`는 `PlaceCategory`를 대체하지 않습니다.
- 숙박, 관광/여행, 행사·축제를 `PlaceCategory`에 임의로 추가하지 않습니다.
- 카테고리 표기는 `/`를 사용합니다.
  - `네일/뷰티`
  - `병원/약국`
  - `관광/여행`

- 카테고리 표기에 `·`를 사용하지 않습니다.

---

## PopularInfoItem

“지금 많이 찾는 정보” 또는 “자주 확인하는 군산 정보” 영역은 chip/grid 구조로 구현합니다.

```ts
export type PopularInfoItem = {
  key: string;
  label: string;
  href?: string;
};
```

### 표시 예시

```ts
export const popularInfoItems: PopularInfoItem[] = [
  { key: "gunsan-love-gift-card", label: "군산사랑상품권" },
  { key: "ferry-terminal", label: "여객선터미널" },
  { key: "eunpa-lake-park", label: "은파호수공원" },
  { key: "time-travel-festival", label: "군산시간여행축제" },
  { key: "saemangeum-seawall", label: "새만금방조제" },
  { key: "chowon-photo-studio", label: "초원사진관" },
  { key: "modern-history-museum", label: "군산근대역사박물관" },
  { key: "gunsan-city-civil-service", label: "군산시청 민원" },
  { key: "parking-info", label: "주차장 정보" },
  { key: "public-parking", label: "공영주차장" },
];
```

### 구현 원칙

- 긴 설명 문구를 넣지 않습니다.
- chip 안에는 정보명만 표시합니다.
- 2열 compact grid를 기본으로 합니다.
- 실제 검색량처럼 보이는 표현을 쓰지 않습니다.
- “실시간 인기”, “조회수”, “오늘 많이 본” 같은 문구를 쓰지 않습니다.
- “준비 중”, “정리 예정”, “연결 예정” 문구를 표시하지 않습니다.
- 나중에 선택/검색/필터 연결이 쉽도록 `key`와 `label` 구조를 유지합니다.
- button을 사용할 경우 `type="button"`을 명시합니다.

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

### 주의

- 확인되지 않은 정보를 “최근 확인됨”으로 표시하지 않습니다.
- 업체 제공 정보와 최근 확인 정보를 같은 의미처럼 보이게 만들지 않습니다.
- 검증 상태는 광고나 후원 여부와 연결하지 않습니다.

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

현재 단계에서는 실제 사진 업로드를 구현하지 않습니다.

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

현재 단계에서는 승인 기능을 구현하지 않습니다.

추후 Supabase와 관리자 승인 흐름을 붙일 때 사용합니다.

---

## 타입 파일 분리 원칙

| 파일                  | 내용                                                    |
| --------------------- | ------------------------------------------------------- |
| `types/place.ts`      | 장소 데이터 모델, `PlaceCategory`, `VerificationStatus` |
| `types/home.ts`       | `HomeCategory`, `PopularInfoItem` 등 홈 표시용 타입     |
| `types/photo.ts`      | `PhotoSourceType`, `ModerationStatus`, 사진 메타데이터  |
| `types/submission.ts` | 제보 폼 입력 타입, 제보 저장 타입                       |
| `types/owner.ts`      | 사장님 등록 요청 타입                                   |
| `types/report.ts`     | 신고/제보 공통 타입                                     |
| `types/weather.ts`    | 날씨 API 응답을 화면에서 쓰기 위한 타입                 |
| `types/common.ts`     | 공통 유틸 타입                                          |
| `types/database.ts`   | Supabase 생성 타입, v0.2 이후                           |

### 주의

- 실제 필요한 시점에만 타입 파일을 추가합니다.
- 단순한 UI 배열만 있을 경우 컴포넌트 내부 상수로 둘 수 있습니다.
- 여러 컴포넌트가 공유하거나 도메인 의미가 생기면 `types/` 또는 `data/`로 분리합니다.

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

---

## Place 타입 권장 구조

`Place` 타입은 `types/place.ts`에 정의합니다.

```ts
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
- `area`를 사용합니다.
- `neighborhood`를 사용하지 않습니다.
- `statuses`를 사용합니다.
- `verificationStatuses`를 사용하지 않습니다.

---

## 필드명 통일 기준

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

## 더미 데이터 원칙

`data/places.ts`에 더미 데이터를 작성할 수 있습니다.

더미 데이터는 구조 확인용입니다.

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
- 확인되지 않은 실제 정보를 확정처럼 쓰지 않습니다.
- 더미 데이터는 실제 서비스 공개 전 검증 또는 교체가 필요합니다.
- 더미 데이터에 허위로 “최근 확인됨”을 남발하지 않습니다.
- 실제 방문하지 않은 장소에 방문자 확인 정보를 확정적으로 넣지 않습니다.

---

## Supabase Storage 계획

Supabase와 Storage는 이후 단계에서 구현합니다.

현재 단계에서는 아래 내용을 참고만 하고 구현하지 않습니다.

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
- 승인 전 공개 페이지에 노출하지 않습니다.
- 업체 제공 사진과 방문자 사진은 UI에서 반드시 분리 표시합니다.
- 원본 파일명 그대로 저장하지 않습니다.
- 파일명은 UUID 기반으로 저장합니다.
- 이미지 크기 제한은 이후 단계에서 결정합니다.
- WebP 변환 또는 리사이징을 고려합니다.

---

## 이미지 asset 구현 기준

현재 단계에서는 직접 제작하거나 사용 권한이 확인된 이미지 asset을 사용할 수 있습니다.

### 허용

- 사용자가 직접 제작한 이미지
- AI로 직접 생성한 이미지
- 사용 권한이 확인된 이미지
- 직접 촬영한 이미지
- 업체/방문자/관리자가 제공한 이미지
- 출처와 사용 조건이 확인된 공공기관 이미지

### 금지

- 외부 사진 무단 다운로드
- 외부 리뷰 이미지 무단 사용
- 외부 지도 이미지 무단 사용
- 실제 군산 장소처럼 보이는 허위 AI 이미지
- 실제 상호, 실제 간판, 실제 건물을 허위로 생성하는 것
- 업체 제공 사진과 방문자 사진을 섞는 것

### 파일 기준

- WebP 사용을 우선합니다.
- 너무 큰 이미지는 사용하지 않습니다.
- 이미지 파일 추가 시 위치, 용량, alt 문구를 함께 확인합니다.
- 히어로 이미지는 `public/images/` 아래에 둘 수 있습니다.
- 카테고리 이미지는 `public/images/categories/` 아래에 둘 수 있습니다.
- 이미지 추가는 가능한 한 별도 작업으로 분리합니다.

---

## 메인 홈과 장소 탐색 페이지 역할 분리

## 메인 홈 (`app/page.tsx`)

메인 홈은 군산 대표 포털형 입구입니다.

역할:

- 군산에 사는 사람과 군산에 오는 사람이 모두 처음 들어오는 화면
- 군산의 주요 정보 카테고리로 빠르게 이동하는 화면
- 군산.com이 “군산의 모든 것”을 담는 사이트라는 인상을 주는 화면
- 생활 정보와 여행 정보의 진입점을 함께 보여주는 화면
- 레퍼런스 이미지처럼 여러 정보를 한 화면에 밀도 있게 보여주는 화면

포함할 수 있는 영역:

- Header
- 대표 히어로
- 통합 검색 UI
- 주요 카테고리 카드
- 지금 많이 찾는 정보
- 군산 장소 둘러보기
- 오늘의 군산
- 행사·축제
- 지도에서 보기
- 동네별 보기
- 정보 제보하기 CTA

주의:

- `FilterPanel`은 메인 홈의 핵심이 아닙니다.
- `FilterPanel`은 `/places`에서 주로 사용합니다.
- 메인 홈에서 실제 통합 검색 기능은 아직 구현하지 않을 수 있습니다.
- 기능이 없다고 해서 화면에 “준비 중” 문구를 반복하지 않습니다.
- 실제 데이터처럼 보이는 가짜 수치나 날짜를 만들지 않습니다.

---

## 장소 탐색 페이지 (`app/places/page.tsx`)

`/places`는 필터 중심 장소 탐색 페이지입니다.

역할:

- 장소 목록 탐색
- 카테고리/동네/상태 필터
- 장소 카드 비교
- 검증 상태 확인
- 장소 상세 페이지 진입

구성:

- Header
- CategoryTabs
- FilterPanel
- PlaceCard 목록
- RightSidebar

주의:

- 실제 필터 기능은 별도 작업으로 분리할 수 있습니다.
- UI만 먼저 구현할 경우 실제 필터링이 되는 것처럼 과장하지 않습니다.
- 장소 카드는 상세페이지로 이동할 수 있어야 합니다.

---

## 장소 상세 페이지 (`app/places/[slug]/page.tsx`)

장소 상세 페이지는 장소 하나에 대한 신뢰 정보의 중심입니다.

역할:

- 장소명 표시
- 카테고리와 area 표시
- 상태 배지 표시
- 기본 정보 표시
- 업체 제공 정보 표시
- 방문자 확인 정보 표시
- 정보 차이 제보 CTA 제공

주의:

- 모달보다 상세페이지 중심 구조를 우선합니다.
- 블로그형 긴 글로 만들지 않습니다.
- 광고 문구 중심으로 만들지 않습니다.
- 업체 제공 정보와 방문자 확인 정보를 섞지 않습니다.
- 확인되지 않은 정보를 확정적으로 표현하지 않습니다.

---

## 메인 홈 섹션 구현 가이드

## Header (`components/Header.tsx`)

역할:

- 군산.com의 대표 포털 진입점
- 로고, 검색, 날씨, 주요 링크, 2단 내비게이션 제공

포함 요소:

- `군산.com` 로고
- 긴 캡슐형 검색창
- 원형 검색 버튼
- 군산 날씨
- 공지사항
- 제보하기
- 즐겨찾기
- 사장님 등록
- 2단 카테고리 내비게이션

2단 내비게이션 예시:

- 홈
- 정보
- 맛집
- 카페
- 병원/약국
- 생활업체
- 숙박
- 여행
- 행사·축제
- 커뮤니티

주의:

- Header 안에 “준비 중” 문구를 노출하지 않습니다.
- 실제 검색 기능이 없으면 UI만 두되 허위 검색 결과를 만들지 않습니다.
- 날씨는 군산 현재 날씨 API를 별도 작업으로 연결할 수 있습니다.
- API 실패 시 fallback을 둡니다.
- 사장님 등록 버튼은 광고처럼 과하게 강조하지 않습니다.

---

## SearchHero (`components/SearchHero.tsx`)

역할:

- 군산 대표 포털이라는 인상 전달
- full-width 히어로 배너 제공
- 검색과 핵심 문구 제공

포함 요소:

- 큰 문구
- 짧은 설명
- 통합 검색 UI
- floating quick card
- 군산을 암시하는 파노라마 이미지

메인 문구 예시:

- 큰 문구: `군산의 모든 것, 군산.com`
- 보조 문구: `밥 먹을 곳, 쉬어갈 카페, 급하게 찾는 병원, 주차 되는 곳까지. 군산에서 필요한 정보를 한곳에서 확인하세요.`
- 검색 placeholder: `맛집, 병원, 카페, 행사 등 군산의 정보를 검색해 보세요`

주의:

- 히어로 이미지는 박스 안 카드처럼 보이면 안 됩니다.
- 검색과 문구가 이미지보다 먼저 읽혀야 합니다.
- 관광 홍보 포스터처럼 과장하지 않습니다.
- 실제 검색 기능이 없으면 결과를 만들지 않습니다.

---

## HomeCategoryGrid (`components/HomeCategoryGrid.tsx`)

역할:

- 메인 홈에서 주요 정보 카테고리로 빠르게 진입하게 합니다.

표시 카테고리:

- 맛집
- 카페
- 병원/약국
- 생활업체
- 숙박
- 관광/여행
- 행사·축제
- 네일/뷰티

구현 원칙:

- 카드형 진입 UI로 구현합니다.
- 부제목/설명은 넣지 않습니다.
- 카테고리명은 왼쪽 중앙에 배치합니다.
- 이미지는 오른쪽에 작게 배치합니다.
- 모든 카드 높이를 통일합니다.
- 이미지가 카드 높이를 키우면 안 됩니다.
- “준비 중” 라벨을 카드 안에 반복하지 않습니다.
- 실제 기능이 없는 항목은 안전하게 처리합니다.

---

## PopularInfoSection (`components/PopularInfoSection.tsx`)

역할:

- 군산 주민과 여행자가 자주 확인하는 정보를 빠르게 보여줍니다.
- 나중에 선택/검색/필터로 연결할 수 있는 기반을 만듭니다.

표시 예시:

- 군산사랑상품권
- 여객선터미널
- 은파호수공원
- 군산시간여행축제
- 새만금방조제
- 초원사진관
- 군산근대역사박물관
- 군산시청 민원
- 주차장 정보
- 공영주차장

구현 원칙:

- 작은 chip/grid 구조로 구현합니다.
- 긴 설명 문구를 넣지 않습니다.
- chip에는 정보명만 표시합니다.
- 2열 compact grid를 기본으로 합니다.
- button을 사용하면 `type="button"`을 명시합니다.
- 실제 검색량처럼 보이는 표현을 쓰지 않습니다.
- “실시간 인기”, “조회수”, “오늘 많이 본” 같은 문구를 쓰지 않습니다.
- “준비 중”, “정리 예정”, “연결 예정” 문구를 표시하지 않습니다.

---

## TodayGunsanSection (`components/TodayGunsanSection.tsx`)

역할:

- 군산의 현재 상태를 짧게 보여줍니다.
- 날씨, 미세먼지, 일몰, 행사 등으로 확장할 수 있습니다.

현재 우선순위:

- 군산 현재 날씨
- 기온
- 날씨 상태

구현 원칙:

- 군산 현재 날씨 API는 별도 작업으로 연결할 수 있습니다.
- API 호출 로직은 `lib/api/weather.ts`에 둡니다.
- 실제 값이 없으면 가짜 수치를 만들지 않습니다.
- API 실패 시 fallback을 표시합니다.
- “준비 중” 문구를 반복하지 않습니다.
- 미세먼지, 일몰, 행사 API는 별도 작업으로 분리합니다.

---

## EventFestivalSection (`components/EventFestivalSection.tsx`)

역할:

- 군산 행사·축제 정보로 확장될 수 있는 진입 영역입니다.

구현 원칙:

- 실제 행사 데이터 API 연결은 별도 작업으로 분리합니다.
- 실제 날짜, 장소, 개최 상태를 확인 없이 쓰지 않습니다.
- 외부 행사 포스터나 사진을 무단 사용하지 않습니다.
- 실제 개최 중인 행사처럼 보이는 허위 표현을 쓰지 않습니다.
- “준비 중” 문구를 반복하지 않습니다.
- 공식 출처 기반으로 정리한다는 방향을 유지합니다.
- compact card 구조를 우선합니다.

---

## MapPreviewSection (`components/MapPreviewSection.tsx`)

역할:

- 군산 장소를 지도에서 볼 수 있다는 확장 가능성을 보여줍니다.

구현 원칙:

- 실제 지도 API 연결은 별도 작업으로 분리합니다.
- CSS 기반 preview는 가능하지만 실제 지도처럼 보이게 만들지 않습니다.
- 외부 지도 이미지를 사용하지 않습니다.
- 실제 좌표 기반 마커를 구현하지 않습니다.
- 확대/축소 버튼, 현재 위치 버튼 같은 실제 지도 UI를 만들지 않습니다.
- “지도 기능이 이미 동작한다”는 오해를 주지 않습니다.

---

## NeighborhoodSection (`components/NeighborhoodSection.tsx`)

역할:

- 군산을 동네, 생활권, 관광권역으로 나누어 탐색할 수 있다는 가능성을 보여줍니다.

표시 가능 예시:

- 월명동
- 수송동
- 나운동
- 미장동
- 소룡동
- 은파 주변
- 근대거리 주변
- 새만금 주변

구현 원칙:

- 실제 동네 필터 기능은 별도 작업으로 분리합니다.
- 행정동, 법정동, 생활권, 관광권역을 확정적으로 섞지 않습니다.
- 실제 장소 수, 리뷰 수, 행사 수를 허위로 표시하지 않습니다.
- “준비 중” 문구를 반복하지 않습니다.
- 작은 chip 또는 compact card 형태를 우선합니다.

---

## CategoryTabs (`components/CategoryTabs.tsx`)

역할:

- `/places` 페이지에서 실제 장소 카테고리를 탐색하는 UI입니다.

카테고리:

- 맛집
- 카페
- 네일/뷰티
- 병원/약국
- 생활업체

주의:

- `CategoryTabs`는 실제 `PlaceCategory` 기준입니다.
- 홈의 `HomeCategoryGrid`와 혼동하지 않습니다.
- 실제 필터 동작은 별도 작업으로 분리할 수 있습니다.
- 선택 상태 UI는 구현 가능하지만, 데이터 필터링은 별도 이슈로 분리합니다.

---

## FilterPanel (`components/FilterPanel.tsx`)

역할:

- `/places` 페이지에서 장소 탐색 조건을 보여줍니다.

포함 가능한 필터:

- 카테고리
- 동네
- 확인 상태
- 주차 가능
- 남자 가능
- 오늘 영업
- 방문자 사진 있음

주의:

- 실제 필터 기능은 별도 작업으로 분리할 수 있습니다.
- UI 구조만 먼저 구현할 수 있습니다.
- 실제 동작하지 않는 필터를 동작하는 것처럼 과장하지 않습니다.

---

## RightSidebar (`components/RightSidebar.tsx`)

역할:

- `/places` 페이지에서 보조 정보와 검증 원칙을 보여줍니다.

포함 요소:

- 자주 찾는 질문
- 최근 확인 정보
- 정보 제보 CTA
- 군산.com 검증 원칙 요약

주의:

- 중앙 장소 목록보다 더 튀면 안 됩니다.
- 광고 영역처럼 보이면 안 됩니다.
- 검증 원칙과 제보 CTA를 짧게 보여줍니다.

---

## PlaceCard (`components/PlaceCard.tsx`)

역할:

- 장소 목록 또는 홈 preview에서 장소 하나를 요약해 보여줍니다.

반드시 포함해야 하는 항목:

- 장소명
- `area`
- 카테고리
- 핵심 태그
- 상태 배지
- 짧은 설명
- 상세 보기 링크 또는 카드 전체 링크

선택 항목:

- 후기 수
- 최근 확인일
- 주소 일부
- 이미지 placeholder 또는 권한 확인된 이미지

주의:

- 광고처럼 보이는 강조 효과를 사용하지 않습니다.
- 별점 5개 중심 UI를 사용하지 않습니다.
- 업체 제공 정보와 방문자 확인 정보를 섞지 않습니다.
- 홈 preview 카드 클릭은 모달보다 상세페이지 이동을 우선합니다.
- `/places/[slug]`로 이동할 수 있어야 합니다.

---

## StatusBadge (`components/StatusBadge.tsx`)

역할:

- `VerificationStatus` 값을 시각적으로 표시합니다.

주의:

- 색상만으로 의미를 전달하지 않습니다.
- 텍스트를 함께 표시합니다.
- `업체 제공`과 `최근 확인됨`을 명확히 구분합니다.
- 확인되지 않은 정보를 긍정적으로 보이게 꾸미지 않습니다.
- 광고/후원 상태와 검증 상태를 섞지 않습니다.

---

## 제보 페이지 (`app/submit/page.tsx`)

역할:

- 사용자가 군산 정보의 차이나 오류를 제보할 수 있다는 구조를 보여줍니다.

제보 유형:

- 틀린 정보
- 새 장소
- 휴무일
- 사진 차이
- 폐업/이전
- 주차 정보 차이
- 남자 이용 가능 여부
- 아이 동반 가능 여부

현재 구현 범위:

- 입력 UI 또는 안내 UI
- 어떤 정보를 제보할 수 있는지 안내
- 실제 저장 기능 없음

현재 금지:

- Supabase 저장
- 파일 업로드
- 로그인
- 관리자 승인

---

## 사장님 등록 안내 페이지 (`app/owners/page.tsx`)

역할:

- 사장님이 군산.com에 어떤 정보를 제공할 수 있는지 안내합니다.

포함할 내용:

- 광고 문구보다 손님이 궁금해하는 정보를 우선한다는 안내
- 업체 제공 정보와 방문자 확인 정보가 분리된다는 안내
- 등록에 필요한 사진 안내
- 정보 제공이 검증 상태와 광고 순위 상승을 의미하지 않는다는 안내

필요한 사진 안내:

- 외관
- 입구
- 내부
- 대표 메뉴/서비스
- 메뉴판/가격표
- 주차 위치
- 처음 방문자가 참고할 수 있는 사진

현재 구현 범위:

- 안내 페이지
- 등록 요청 CTA
- 실제 저장 기능 없음

현재 금지:

- Supabase 저장
- 파일 업로드
- 로그인
- 결제
- 광고 상품
- 사장님 대시보드

---

## lib/ 파일 역할

| 파일                 | 역할                                              |
| -------------------- | ------------------------------------------------- |
| `lib/categories.ts`  | `PlaceCategory` 목록, 카테고리별 아이콘/색상 매핑 |
| `lib/badges.ts`      | `VerificationStatus`별 배지 색상, 레이블 정의     |
| `lib/utils.ts`       | 날짜 포맷, 슬러그 생성 등 공통 유틸 함수          |
| `lib/api/weather.ts` | 군산 현재 날씨 API 호출, 변환, fallback 처리      |

---

## data/ 파일 역할

| 파일                       | 역할                            |
| -------------------------- | ------------------------------- |
| `data/places.ts`           | 더미 장소 데이터                |
| `data/homeCategories.ts`   | 메인 홈 표시용 카테고리 데이터  |
| `data/popularInfoItems.ts` | 지금 많이 찾는 정보 chip 데이터 |

### 주의

- 데이터 파일은 실제 기능과 표시용 데이터를 구분합니다.
- 홈 표시용 데이터와 실제 장소 데이터 모델을 섞지 않습니다.
- 외부 데이터를 무단으로 복사하지 않습니다.

---

## 권장 폴더 구조

```txt
app/
  page.tsx
  places/
    page.tsx
    [slug]/
      page.tsx
  submit/
    page.tsx
  owners/
    page.tsx

components/
  Header.tsx
  SearchHero.tsx
  HomeCategoryGrid.tsx
  PopularInfoSection.tsx
  TodayGunsanSection.tsx
  EventFestivalSection.tsx
  MapPreviewSection.tsx
  NeighborhoodSection.tsx
  CategoryTabs.tsx
  FilterPanel.tsx
  PlaceCard.tsx
  StatusBadge.tsx
  RightSidebar.tsx

data/
  places.ts
  homeCategories.ts
  popularInfoItems.ts

lib/
  categories.ts
  badges.ts
  utils.ts
  api/
    weather.ts

types/
  place.ts
  home.ts
  weather.ts
  submission.ts
  owner.ts
  photo.ts
  report.ts
  common.ts
  database.ts
```

---

## 구현 순서 권장

한 작업에는 하나의 목적만 담습니다.

권장 순서:

1. 문서 기준 정리
2. Header 레퍼런스형 구조 정리
3. 군산 현재 날씨 API 단일 연결
4. SearchHero full-width 배너 구조 정리
5. HomeCategoryGrid 카드형 UI 정리
6. 카테고리 이미지 asset 적용
7. PopularInfoSection 컴포넌트 분리 및 chip UI 정리
8. 군산 장소 둘러보기 preview 정리
9. 장소 카드 상세페이지 연결
10. TodayGunsanSection 정리
11. EventFestivalSection compact UI 정리
12. MapPreviewSection compact UI 정리
13. NeighborhoodSection compact UI 정리
14. `/places` 탐색 페이지 정리
15. `/places/[slug]` 상세 페이지 강화
16. `/submit` 제보 페이지 정리
17. `/owners` 사장님 등록 안내 페이지 정리
18. 모바일/태블릿 반응형 정리
19. Vercel Preview 배포

---

## 최종 주의사항

군산.com의 큰 비전은 **“군산의 모든 것”** 입니다.

하지만 구현은 작게 진행합니다.

- 하나의 작업에 하나의 목적만 담습니다.
- 사용자가 요청하지 않은 기능을 미리 구현하지 않습니다.
- 큰 API 연결은 별도 작업으로 분리합니다.
- 지도 SDK, 관광 API, 행사 API를 한 번에 붙이지 않습니다.
- 업체 제공 정보와 방문자 확인 정보는 항상 분리합니다.
- 확인되지 않은 정보는 확정처럼 표시하지 않습니다.
- 외부 사이트의 사진, 리뷰, 본문은 무단 복사하지 않습니다.
- 메인 화면에 “준비 중”, “정리 예정”, “연결 예정” 문구를 반복하지 않습니다.
- 실제 데이터처럼 보이는 가짜 수치, 가짜 날짜, 가짜 실시간 상태를 만들지 않습니다.
- 광고 사이트처럼 보이는 구조로 만들지 않습니다.
- TypeScript `any`를 사용하지 않습니다.
- 코드 변경 후 `npm run lint`와 `npm run build`를 확인합니다.
