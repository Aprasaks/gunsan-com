<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 군산.com 작업 규칙

## 프로젝트 개요

군산.com은 군산에서 매번 다시 물어봐야 했던 생활 정보를 모아 검증하는 지역 정보 웹사이트입니다.

**핵심 모토:** "하나라도 물 한 방울이 들어갈 틈이 있다면 헤집고 들어가서 검증한다."

이 프로젝트는 앱도 아니고 모바일 전용 웹도 아닙니다. 기본은 데스크탑 웹사이트이며, 모바일에서도 보기 좋게 반응형으로 구성합니다.

### 군산.com이 검증하려는 틈

- 검색에는 영업 중이라고 뜨는데 실제로 쉬는가?
- 업체 사진과 방문자 사진이 다른가?
- 남자도 네일 케어를 받을 수 있는가?
- 주차가 된다고 하지만 실제로 가능한가?
- 아이와 함께 가도 되는가?
- 사장님이 올린 정보와 방문자 경험이 다른가?
- 광고처럼 보이는 정보와 실제 방문 정보가 구분되는가?

### 군산.com은 다음이 아닙니다

- 블로그
- 잡지형 사이트
- 광고판
- 맛집 순위 사이트
- 앱
- SNS 피드
- 커뮤니티 게시판
- 사장님 홍보 전용 플랫폼

### 군산.com은 다음에 가깝습니다

- 지역 생활 정보 검색 사이트
- 업체 정보 검증 디렉토리
- 방문자 제보 기반 정보 아카이브
- 사장님 제공 정보와 방문자 확인 정보를 분리하는 플랫폼

---

## 현재 개발 단계: v0.1

### v0.1 목표

- 더미 데이터 기반 UI 구현
- 메인 페이지
- 장소 목록 페이지
- 장소 상세 페이지
- 제보하기 페이지
- 사장님 등록 안내 페이지
- 데스크탑 기준 3단 정보 탐색 레이아웃
- 모바일 반응형 기본 대응

### v0.1에서 하지 말 것 (절대 금지)

- Supabase 연결
- 지도 기능
- 사진 업로드
- 관리자 페이지
- 로그인
- 결제
- 광고 상품
- 사장님 대시보드

### v0.2 이후 순서 (참고용)

1. Supabase 연결
2. 장소 데이터 DB 전환
3. 제보 저장
4. 사장님 등록 요청 저장
5. 지도 보기
6. 사진 업로드
7. 업체 제공 사진 / 방문자 사진 분리
8. 관리자 승인
9. 실제 장소 데이터 등록
10. Vercel 배포 및 군산.com 도메인 연결

---

## 기술 스택

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase (v0.2 이후)
- Vercel

---

## 권장 폴더 구조

```
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
  QuickQuestionChips.tsx
  CategoryTabs.tsx
  FilterPanel.tsx
  PlaceCard.tsx
  StatusBadge.tsx
  RightSidebar.tsx

data/
  places.ts

lib/
  categories.ts
  badges.ts
  utils.ts

types/
  place.ts
  submission.ts
  owner.ts
  photo.ts
  report.ts
  common.ts

docs/
  SKILL.md
  DESIGN.md
```

---

## 공통 코드 규칙

- TypeScript `any` 절대 금지
- 타입은 가능한 한 `types/` 폴더에 분리
- 컴포넌트 내부에 임시 타입 남발 금지
- 데이터 모델은 도메인별 타입 파일에서 관리
- 업체 제공 정보와 방문자 확인 정보는 절대 섞지 않음
- 확인되지 않은 정보는 "확인 필요"로 표시
- 외부 사이트의 사진, 리뷰, 본문은 무단 복사하지 않음
- 한 커밋에는 하나의 작업만 포함
- 작업 범위 밖의 파일은 수정하지 않음

---

## 커밋 규칙

- 하나의 커밋에는 하나의 작업만 포함
- 커밋 메시지는 한국어로 작성
- 예시:
  - `프로젝트 작업 규칙 문서 추가 #2`
  - `사이트 메타데이터와 전역 스타일 정리 #3`
  - `장소 타입과 더미 데이터 추가 #4`
  - `검증 상태 배지 컴포넌트 구현 #5`

---

## 작업 완료 보고 형식

작업이 끝나면 반드시 아래 형식으로 보고합니다.

```
변경 파일
- ...

주요 변경
- ...

확인
- ...

TODO
- ...
```

마지막에 제안 커밋 메시지를 함께 제시합니다.
