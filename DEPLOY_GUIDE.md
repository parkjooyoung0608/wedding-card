# 청첩장 신규 작업 / 배포 가이드

새로운 신랑·신부 청첩장을 만들 때 이 문서대로 진행하세요.
실제 작업 순서 그대로 정리했습니다.

---

## 0. 작업 시작 전 체크리스트

새 클라이언트 작업을 시작하기 전에 다음을 받아두세요.

- [ ] 신랑·신부 풀네임, 영문 이름 (Hero 영문 표시용)
- [ ] 양가 부모님 성함
- [ ] 결혼식 날짜·요일·시간
- [ ] 예식장 이름, 도로명 주소, 대표 전화번호
- [ ] 예식장 카카오맵 공유 링크 (`kko.kakao.com/...`)
- [ ] 예식장 위경도 좌표 (카카오맵 또는 카카오 로컬 API에서 확인)
- [ ] 교통편 안내 (자차/주차, 지하철, 버스)
- [ ] 양가 6개 계좌 정보 (신랑/신부/양가 부모, 은행/계좌번호/예금주)
- [ ] 사진 파일 (Hero용 1장, 갤러리용 9장, OG 공유 이미지 1장)

---

## 1. 브랜치 생성

이전 작업자(예: 김상균·김지연)의 `master` 또는 작업 브랜치에서 새 브랜치를 만듭니다.

```bash
git switch master                          # 또는 최신 baseline 브랜치
git switch -c <new-couple-name>            # 예: lee-yh-kim-jh
```

> **Tip**: 이미지·코드는 브랜치별로 분리되지만, **`.env`는 `.gitignore`에 포함되어 있어 브랜치를 바꿔도 자동으로 안 바뀝니다.** 그래서 `.env` 내부에 이전 작업자 값을 주석으로 함께 보관합니다 (아래 2번 참고).

---

## 2. `.env` 수정 — ⚠️ 이전 작업자 내용 반드시 보관

`.env`는 Git에 추적되지 않습니다(.gitignore:28).
따라서 **새 값으로 덮어쓰기 전, 기존 값을 같은 파일 안에 주석으로 옮겨 두세요.** 다음 사람이 참고하거나, 이전 청첩장을 다시 띄울 때 활용됩니다.

권장 구조:

```env
# .env

# ============================================================
# [현재 활성] 신랑이름 ❤️ 신부이름 — YYYY.MM.DD
# ============================================================
VITE_GROOM_FULL=...
VITE_BRIDE_FULL=...
# ... (현재 작업자 값)

VITE_FIREBASE_API_KEY="..."
# ... (현재 Firebase 6개)

VITE_KAKAO_API_KEY=...


# ============================================================
# [보관] 이전 신랑이름 ❤️ 이전 신부이름 — YYYY.MM.DD
# 다시 사용하려면 위 활성 블록을 주석 처리하고 아래 주석을 해제하세요.
# ============================================================
# VITE_GROOM_FULL=...
# ... (이전 작업자 값 전체를 # 로 주석 처리)
```

수정해야 할 값:

| 키 | 설명 |
|---|---|
| `VITE_GROOM_FULL`, `VITE_BRIDE_FULL` | 풀네임 (예: 이용희, 김주희) |
| `VITE_GROOM_FIRST`, `VITE_BRIDE_FIRST` | 이름만 (예: 용희, 주희) |
| `VITE_GROOM_FIRST_EN`, `VITE_BRIDE_FIRST_EN` | 영문 이름 (예: YONGHEE) |
| `VITE_GROOM_FATHER`, `VITE_GROOM_MOTHER` | 신랑 부모 |
| `VITE_BRIDE_FATHER`, `VITE_BRIDE_MOTHER` | 신부 부모 |
| `VITE_WEDDING_DATE` | "2026년 9월 19일" |
| `VITE_WEDDING_DATE_NUMBER` | "2026. 09 .19" |
| `VITE_WEDDING_DATE_EN` | "Saturday, September 19, 2026" |
| `VITE_WEDDING_DAY` / `VITE_WEDDING_DAY_EN` | "토요일" / "SAT" |
| `VITE_WEDDING_TIME` | "오후 12시 20분" |
| `VITE_WEDDING_TIME_NUMBER` | "PM 12:20" |
| `VITE_FIREBASE_*` 6개 | 새 Firebase 프로젝트 SDK config (8번 참고) |
| `VITE_KAKAO_API_KEY` | 카카오 개발자 콘솔 JavaScript 키 |

---

## 3. 계좌 정보 — `src/config/data/account.ts`

`groom: [...]` 3개, `bride: [...]` 3개 항목의 `bank`, `accountNumber`를 교체합니다.
`name`은 `.env`에서 자동으로 가져오므로 건드릴 필요 없음.

---

## 4. 결혼식 날짜 — `src/sections/WeddingDay/`

### `Countdown.tsx:5`
```ts
const targetDate = new Date("YYYY-MM-DDTHH:MM:00");
```
예: `new Date("2026-09-19T12:20:00")`

### `Calendar.tsx`
달력은 **하드코딩**된 그리드입니다. 다음을 직접 계산해서 수정해야 합니다.

1. 해당 월 **1일의 요일** 확인 → 그만큼 앞에 빈 `<div></div>` 추가
2. 그 월 일수만큼 날짜 셀 입력
3. **결혼식 날짜는 `bg-point/20 text-point font-bold` 원형 강조**로 표시
4. **일요일**은 `text-red-400`, **토요일**은 `text-sky-700` 클래스 적용
5. 마지막 줄은 7칸이 되도록 뒤에 빈 `<div></div>` 추가

요일 확인 명령:
```bash
date -d "YYYY-MM-DD" +"%A"
```

---

## 5. 예식장 — `src/sections/Location/index.tsx`

수정 위치:
- `s_lat`, `s_lng`: 정확한 위경도
- `descFirst`: 예식장 이름
- `descSecond`: 도로명 주소
- `phoneNumber`: 예식장 대표 번호
- 카카오맵 `<a href="...">`: `kko.kakao.com` 공유 링크
- 자차/주차/지하철/버스 안내 텍스트

> 카카오 로컬 검색 API 또는 카카오맵에서 핀 우클릭 → "이곳의 좌표"로 위경도 확인 가능.

---

## 6. 메타 태그 — `index.html`

```html
<title>우리의 결혼식 💍 | 신랑이름 & 신부이름</title>

<meta property="og:title" content="신랑풀네임 ❤️ 신부풀네임 결혼합니다." />
<meta property="og:description" content="YYYY년 M월 D일, 예식장이름에서 함께 축하해주세요." />
<meta property="og:image" content="https://<프로젝트ID>.web.app/og-image.jpg" />
<meta property="og:url" content="https://<프로젝트ID>.web.app" />
```

---

## 7. 이미지 교체 — `src/assets/Images/` & `public/`

| 파일 | 용도 |
|---|---|
| `src/assets/Images/hero-wedding.jpg` | 메인 랜딩 사진 |
| `src/assets/Images/weddingPhoto_01.jpg` ~ `_09.jpg` | 갤러리 9장 |
| `public/og-image.jpg` | 카카오톡 공유 시 썸네일 |
| `public/favicon.png` | 파비콘 (선택) |

**파일명을 그대로 유지**하면 코드 수정 없이 동작합니다.
크기/해상도는 기존 파일과 비슷한 비율로 준비하면 레이아웃이 깨지지 않습니다.

> Hero 이미지가 양 옆이 짤리면 `src/sections/Hero/index.tsx`의 `<img>` className에서 `object-cover` ↔ `object-contain` 전환으로 조절. `object-contain`은 전체 이미지를 보여주되 비는 영역이 생길 수 있음.

---

## 8. Firebase 새 프로젝트 생성

### 8-1. 콘솔에서 프로젝트 만들기

1. https://console.firebase.google.com 접속
2. **프로젝트 추가** → 프로젝트 이름 입력 (예: `wedding-card-yhjh`)
3. Google Analytics는 보통 비활성화로 진행 (선택)

### 8-2. 웹 앱 등록 & SDK config 받기

1. 프로젝트 → 좌측 톱니바퀴(⚙️) → **프로젝트 설정** → **일반** 탭
2. 페이지 하단 **내 앱** 섹션에서 `</>` (웹) 아이콘 클릭
3. 앱 닉네임 입력 (예: `wedding-card-yhjh-web`)
4. "Firebase Hosting 설정" 체크박스는 **선택사항** (CLI로 따로 함)
5. 등록 후 표시되는 `firebaseConfig`의 6개 값을 `.env`에 옮김:

```js
const firebaseConfig = {
  apiKey: "...",            // → VITE_FIREBASE_API_KEY
  authDomain: "...",        // → VITE_FIREBASE_AUTH_DOMAIN
  projectId: "...",         // → VITE_FIREBASE_PROJECT_ID
  storageBucket: "...",     // → VITE_FIREBASE_STORAGE_BUCKET
  messagingSenderId: "...", // → VITE_FIREBASE_MESSAGING_SENDER_ID
  appId: "..."              // → VITE_FIREBASE_APP_ID
};
```

> 다시 보고 싶으면 동일 경로(프로젝트 설정 → 일반 → 내 앱)에서 등록된 앱을 펼치고 "구성" 라디오 버튼 선택.

### 8-3. `.firebaserc` 업데이트

```json
{
  "projects": {
    "default": "wedding-card-yhjh"
  }
}
```

### 8-4. 코드 내 하드코딩된 URL 교체

다음 파일에서 이전 프로젝트 도메인 → 새 프로젝트 도메인으로 일괄 교체:

- `index.html`: `og:image`, `og:url`
- `src/sections/Share/index.tsx`: `imageUrl`, 주소 복사 URL

검색 명령:
```bash
git grep "wedding-card-sgjy"   # 이전 도메인이 남아있는지 확인
```

---

## 9. 카카오 개발자 콘솔 도메인 등록

카카오맵·카카오톡 공유는 **등록된 도메인에서만** 작동합니다.

1. https://developers.kakao.com → 내 애플리케이션
2. 사용 중인 앱 선택 → **플랫폼** → **Web** → **사이트 도메인 추가**
3. `https://<프로젝트ID>.web.app` 입력
4. 같은 키를 그대로 쓸 거면 도메인만 추가, 새 키를 만들 거면 새 JavaScript 키를 `.env`의 `VITE_KAKAO_API_KEY`에 입력

---

## 10. 빌드 & 배포

```bash
firebase login                       # 최초 한 번
firebase use wedding-card-yhjh       # 새 프로젝트 활성화
npm run build                        # dist/ 생성
firebase deploy                      # 배포
```

배포 완료 후 `https://wedding-card-yhjh.web.app` 으로 확인.

---

## 11. 최종 확인

배포 후 모바일에서 직접 열어보고:

- [ ] Hero 텍스트·사진 위치 정상
- [ ] 카운트다운 숫자가 맞게 줄어드는지
- [ ] 캘린더에서 결혼식 날짜 강조 정상
- [ ] 카카오맵이 정상 표시되고 마커가 예식장 위치에 찍히는지
- [ ] "카카오맵으로 열기" 링크 작동
- [ ] "카카오톡으로 청첩장 전하기" 작동 (실제 단톡에서 미리보기 확인)
- [ ] "청첩장 주소 복사하기" 작동
- [ ] 갤러리 사진 9장 정상, 클릭 시 모달 정상
- [ ] 6개 계좌번호 복사 정상
- [ ] OG 이미지가 카카오톡 미리보기에 정상 노출

---

## 12. 자주 잊는 것들

- `.env`는 Git에 안 올라가므로 **개발 PC에만 존재**합니다. 다른 PC에서 작업할 거면 안전한 방법으로 따로 전달 필요.
- `.env` 변경 후에는 **`vite` 개발 서버를 반드시 재시작**해야 반영됩니다.
- Firebase Spark(무료) 플랜은 프로젝트당 호스팅 용량/대역폭 제한이 있지만 청첩장 트래픽 수준에서는 충분.
- 이미지 파일명을 다르게 쓰고 싶다면 `src/config/data/gallery.ts`와 import 경로도 함께 수정해야 합니다.

---

## 참고: 디렉터리 빠른 지도

```
.env                              ← 신랑신부/날짜/Firebase/카카오 (Git 무시)
.firebaserc                       ← Firebase 프로젝트 ID
firebase.json                     ← Hosting 설정
index.html                        ← title, OG 메타
public/og-image.jpg               ← 공유 썸네일
public/favicon.png

src/config/config.ts              ← env → 상수 매핑
src/config/data/account.ts        ← 6개 계좌
src/config/data/gallery.ts        ← 갤러리 9장 import

src/sections/Hero/index.tsx       ← 메인 사진 + 텍스트 위치
src/sections/GreetingMessage/     ← 인사말
src/sections/WeddingDay/
  ├─ index.tsx
  ├─ Calendar.tsx                 ← 달력 (하드코딩)
  └─ Countdown.tsx                ← targetDate
src/sections/Location/index.tsx   ← 예식장 정보
src/sections/Gallery/             ← 사진 9장
src/sections/Donation/            ← 계좌 안내
src/sections/Share/index.tsx      ← 카톡 공유, 주소 복사
```
