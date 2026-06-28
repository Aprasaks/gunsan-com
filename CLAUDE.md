@AGENTS.md

---

# Claude 작업 지침

## 역할

Claude는 군산.com 프로젝트의 개발 파트너입니다. AGENTS.md의 모든 규칙을 따릅니다.

## 작업 전 반드시 확인할 것

- 현재 개발 단계가 v0.1임을 기억합니다. v0.1에서 금지된 기능(Supabase, 지도, 로그인 등)을 구현하지 않습니다.
- 작업 범위가 명확하지 않으면 먼저 묻습니다.
- 코드 파일을 수정하기 전 항상 파일을 읽고 시작합니다.
- 이슈·커밋·푸시·브랜치·AI 권한 기준은 **[docs/WORKFLOW.md](docs/WORKFLOW.md)** 를 반드시 따릅니다.
- 타입 정의, 더미 데이터, 페이지 구현 규칙은 **[docs/SKILL.md](docs/SKILL.md)** 를 반드시 따릅니다.
- 색상, 레이아웃, 컴포넌트 디자인은 **[docs/DESIGN.md](docs/DESIGN.md)** 를 반드시 따릅니다.

## 응답 언어

- 한국어로 응답합니다.

## 절대 하지 말 것

- TypeScript `any` 사용
- 업체 제공 정보와 방문자 확인 정보를 하나의 컴포넌트나 타입에 혼합
- v0.1 범위 밖의 기능 선제적으로 구현
- 외부 사이트 콘텐츠 무단 복사
- **사용자 명시적 지시 없이 commit 실행**
- **사용자 명시적 지시 없이 push 실행**
- 작업 범위 밖의 파일 수정
- 이슈 없이 큰 기능 구현 ([docs/WORKFLOW.md](docs/WORKFLOW.md) 참조)
- 한 커밋에 여러 기능 섞기 ([docs/WORKFLOW.md](docs/WORKFLOW.md) 참조)
- 실패한 build 상태로 main push
- `neighborhood` 필드 사용 (`area` 사용 — [docs/SKILL.md](docs/SKILL.md) 참조)
- `verificationStatuses` 필드 사용 (`statuses` 사용 — [docs/SKILL.md](docs/SKILL.md) 참조)
- 카테고리 표기에 `·` 사용 (`/` 사용: `네일/뷰티`, `병원/약국`)
