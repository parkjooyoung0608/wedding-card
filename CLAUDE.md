# CLAUDE.md

모바일 청첩장(React 19 + TS + Vite + Tailwind) 프로젝트. 커플마다 브랜치를 파서 작업한다
(예: `yhjh`, `yhjy`, `jiyeon`). 섹션별로 여러 "컨셉(버전)"을 두고 관리자 페이지에서 선택한다.

## ⭐ "이 폴더를 학습해줘" 트리거 절차 (반드시 따를 것)

사용자가 CLI에서 **"학습해줘"** (또는 "이 폴더 학습")라고 하면, 바로 코드 분석만 하지 말고
**먼저 아래 플로우를 진행한다.**

### 0. 가장 먼저 질문
> **"새로운 청첩장을 만들겠습니까? (응 / 아니오)"**

### A. "응"(새로 제작) 인 경우

1. **이니셜을 물어본다.** 예시를 반드시 보여준다:
   > "신랑·신부 이니셜을 알려주세요. 예) `yhjy` (신랑 용호 + 신부 주영)"
2. 이니셜을 받으면 **그 이름의 브랜치를 생성·체크아웃**한다.
   `git checkout -b <이니셜>` (master 또는 현재 안정 브랜치 기준).
3. **dev 서버를 실행**하고(`npm run dev`, 백그라운드) **관리자 페이지를 연다**:
   `http://localhost:5173/#admin` (`Start-Process`).
4. 사용자에게 "관리자 페이지에서 섹션별 버전을 고르고 **선택하기** 버튼을 눌러주세요"라고 안내하고
   **대기**한다.
5. 사용자가 "선택 반영해줘"(또는 선택 완료 신호)라고 하면,
   **프로젝트 루트의 `admin-selection.json`을 읽는다.** 형식:
   ```json
   { "versions": { "hero": "v2", "greetingMessage": "v1", "aboutUs": "v2", "gallery": "v2" },
     "savedAt": "..." }
   ```
6. 읽은 선택을 **`src/config/sections.ts`의 `defaultSectionVersions`에 반영**한다
   (그 브랜치의 기본 컨셉이 선택값이 되도록). 이것이 "틀 잡기"의 핵심.
7. 이어서 새 커플 정보 입력을 받을 수 있도록 **`.env` 활성 블록을 새 커플용으로 교체**한다
   (기존 활성 블록은 `# [보관]`으로 주석 처리 — 기존 `.env` 컨벤션 따를 것).
   이름·일시·장소·계좌는 사용자에게 물어보고 채운다.
8. 변경 요약을 보고하고 커밋 여부를 묻는다.

### B. "아니오"(기존 작업 이어서) 인 경우

새 제작이 아니므로, **현재 브랜치의 진행 상황을 정리해서 알려준다**:
- `git branch` / `git log --oneline -5` / `git status`로 현재 브랜치·최근 커밋·미커밋 변경 확인
- `.env` 활성 블록(현재 커플), `defaultSectionVersions`(선택된 컨셉) 확인
- "어디까지 했고 / 무엇이 남았는지"를 요약 (예: 사진 교체 보류, 계좌 미정, 인사말 이미지 대기 등)

## 아키텍처 요점

- **섹션 버전 시스템**
  - `src/config/sections.ts` — `sectionCatalog`(관리자 UI 메타), `defaultSectionVersions`(기본 선택)
  - `src/context/sectionVersion.ts` — Context + `useSectionVersion()`, `useSectionVersionControls()`
  - `src/context/SectionVersionProvider.tsx` — 선택 상태 보관(localStorage 저장)
  - 각 섹션 `src/sections/<X>/index.tsx`는 셀렉터, 실제 구현은 `versions/V1.tsx`·`V2.tsx`
  - 버전 추가 시 `sections.ts`에만 등록하면 관리자 페이지에 토글 자동 노출
- **관리자 페이지**: `#admin` (해시 라우팅, `src/AppRouter.tsx` → `src/pages/Admin.tsx`)
  - 섹션별 토글 + 실시간 미리보기 + **선택하기**(→ `admin-selection.json` 저장)
  - 저장 브릿지: `vite.config.ts`의 `adminSelectionWriter` 미들웨어(`POST /__admin/save`, dev 전용)
- **설정 주입**: 개인정보는 `.env`의 `VITE_*`(`src/config/config.ts`). 계좌는 `src/config/data/account.ts`.
- **경로 별칭**: `@/` → `src/`
- **비활성 섹션**: RSVP, GuestBook (App.tsx에서 주석 처리)

## 명령

- `npm run dev` — 개발 서버 (관리자 브릿지 미들웨어 포함)
- `npm run build` — `tsc -b && vite build`
- `npx tsc -b` — 타입 체크
