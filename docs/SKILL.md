# 군산.com 기술 구현 가이드 (SKILL.md)

## TypeScript 타입 원칙

- `PlaceCategory`, `VerificationStatus`, `PhotoSourceType`, `ModerationStatus` 등은 명시적으로 union type으로 관리
- `Place` 타입은 `types/place.ts`에 위치
- 폼 입력 타입과 DB 저장 타입은 다를 수 있으므로 반드시 분리
- Supabase 타입은 추후 `types/database.ts`로 분리
- `any` 절대 금지. 타입 불명확 시 `unknown` 사용 후 narrowing

---

## 예상 타입 정의

### PlaceCategory

```ts
type PlaceCategory =
  | '맛집'
  | '카페'
  | '네일/뷰티'
  | '병원/약국'
  | '생활업체';
```

### VerificationStatus

```ts
type VerificationStatus =
  | '정보 수집됨'
  | '업체 제공'
  | '방문자 후기'
  | '방문자 사진'
  | '최근 확인됨'
  | '확인 필요'
  | '현장 차이 제보 있음'
  | '폐업/이전 확인 필요';
```

### PhotoSourceType

```ts
type PhotoSourceType = 'owner' | 'visitor' | 'admin';
```

### ModerationStatus

```ts
type ModerationStatus = 'pending' | 'approved' | 'rejected';
```

---

## 타입 파일 분리 원칙

| 파일 | 내용 |
|---|---|
| `types/place.ts` | 장소 데이터 모델, `PlaceCategory`, `VerificationStatus` |
| `types/photo.ts` | `PhotoSourceType`, `ModerationStatus`, 사진 메타데이터 |
| `types/submission.ts` | 제보 폼 입력 타입, 제보 저장 타입 |
| `types/owner.ts` | 사장님 등록 요청 타입 |
| `types/report.ts` | 신고/제보 공통 타입 |
| `types/common.ts` | 공통 유틸 타입 (Nullable, WithId 등) |
| `types/database.ts` | Supabase 생성 타입 (v0.2 이후) |

---

## v0.1 더미 데이터 구조

`data/places.ts`에 더미 데이터를 작성합니다.

```ts
// 예시 구조 (실제 타입은 types/place.ts 참조)
const places = [
  {
    id: 'uuid-...',
    slug: 'cafe-baro',
    name: '카페 바로',
    category: '카페',
    neighborhood: '월명동',
    tags: ['주차 가능', '혼자 가기 좋음'],
    verificationStatuses: ['방문자 후기', '최근 확인됨'],
    reviewCount: 12,
    lastVerifiedAt: '2026-06-15',
    ownerInfo: { ... },
    visitorInfo: { ... },
  },
];
```

업체 제공 정보(`ownerInfo`)와 방문자 확인 정보(`visitorInfo`)는 반드시 분리된 키에 저장합니다. 하나의 flat 객체로 합치지 않습니다.

---

## Supabase Storage 계획 (v0.2 이후)

### Bucket 구조

| Bucket 이름 | 용도 |
|---|---|
| `place-owner-photos` | 업체 사장님이 제공한 사진 |
| `place-visitor-photos` | 방문자가 제보한 사진 |
| `place-admin-photos` | 관리자가 직접 촬영/등록한 사진 |
| `report-evidence-photos` | 제보 첨부 사진 |
| `owner-request-photos` | 사장님 등록 요청 첨부 사진 |

### Storage 규칙

- 모든 업로드는 기본 `pending` 상태로 저장
- 승인(`approved`) 전 공개 페이지에 노출하지 않음
- 업체 제공 사진과 방문자 사진은 UI에서 반드시 분리 표시
- 원본 파일명 그대로 저장하지 않음 — 파일명은 UUID 기반으로 저장
- 이미지 크기 제한 필요 (구체적 수치는 v0.2에서 결정)
- 추후 WebP 변환 또는 리사이징 고려

---

## 페이지별 구현 규칙

### 메인 페이지 (`app/page.tsx`)

- 큰 문구: "군산에서 매번 다시 물어봐야 했던 정보를 확인하세요"
- 작은 문구: "검색해도 애매한 군산 생활 정보를 한곳에 모아 검증합니다."
- 검색 placeholder: `남자 네일, 일요일 병원, 주차 카페`
- 빠른 질문 칩:
  - 남자 네일 가능한 곳
  - 오늘 여는 곳
  - 주차 가능한 곳
  - 아이랑 가기 좋은 곳
  - 혼밥 가능한 곳
  - 방문자 사진 있는 곳
- 카테고리 탭: 맛집 / 카페 / 네일·뷰티 / 병원·약국 / 생활업체

### 장소 카드 (`components/PlaceCard.tsx`)

반드시 포함해야 하는 항목:

- 장소명
- 동네 · 카테고리
- 핵심 태그
- 상태 배지 (VerificationStatus)
- 후기 수
- 최근 확인일
- 상세 보기 링크

### 장소 상세 페이지 (`app/places/[slug]/page.tsx`)

- 업체 제공 정보와 방문자 확인 정보를 반드시 분리된 섹션으로 표시
- 사진 출처(owner / visitor / admin)를 명확히 구분
- 정보 차이 제보 CTA 제공
- 블로그형 긴 글 금지 — 체크 정보 우선

### 제보 페이지 (`app/submit/page.tsx`)

제보 유형:

- 틀린 정보
- 새 장소
- 휴무일
- 사진 차이
- 폐업/이전

### 사장님 등록 안내 페이지 (`app/owners/page.tsx`)

- 광고 문구보다 손님이 궁금해하는 정보를 우선
- 필요한 사진 안내 포함:
  - 외관
  - 입구
  - 내부
  - 대표 메뉴/서비스
  - 메뉴판/가격표
  - 주차 위치
  - 처음 방문자가 참고할 수 있는 사진
- 업체 제공 정보와 방문자 확인 정보가 분리된다는 점 명시

---

## lib/ 파일 역할

| 파일 | 역할 |
|---|---|
| `lib/categories.ts` | `PlaceCategory` 목록, 카테고리별 아이콘/색상 매핑 |
| `lib/badges.ts` | `VerificationStatus`별 배지 색상, 레이블 정의 |
| `lib/utils.ts` | 날짜 포맷, 슬러그 생성 등 공통 유틸 함수 |
