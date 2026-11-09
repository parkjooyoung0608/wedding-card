/**
 * 섹션별 "컨셉(버전)" 선택 설정.
 *
 * 각 섹션은 여러 버전을 가질 수 있고, 사용자가 원하는 버전을 고를 수 있다.
 * 선택값은 SectionVersionProvider(Context + localStorage)가 관리하며,
 * 추후 관리자 페이지에서 이 카탈로그를 읽어 토글 UI를 구성할 수 있다.
 */

export type VersionKey = "v1" | "v2";

export type VersionedSection =
  | "hero"
  | "greetingMessage"
  | "aboutUs"
  | "gallery";

// 관리자 페이지용 메타데이터 (라벨·선택 가능한 버전 목록)
export const sectionCatalog: Record<
  VersionedSection,
  { label: string; versions: { key: VersionKey; label: string }[] }
> = {
  hero: {
    label: "메인(Hero)",
    versions: [
      { key: "v1", label: "기본형 (반짝임 + 텍스트)" },
      { key: "v2", label: "이미지형 (시안)" },
    ],
  },
  greetingMessage: {
    label: "인사말",
    versions: [
      { key: "v1", label: "기본형 (텍스트)" },
      { key: "v2", label: "이미지형 (시안)" },
    ],
  },
  aboutUs: {
    label: "부모님 소개",
    versions: [
      { key: "v1", label: "기본형 (폴라로이드)" },
      { key: "v2", label: "이미지형 (시안)" },
    ],
  },
  gallery: {
    label: "갤러리",
    versions: [
      { key: "v1", label: "기본형 (제목 + 간격)" },
      { key: "v2", label: "3×5 타일형 + 중간사진" },
    ],
  },
};

// 기본 선택값 (localStorage에 저장된 값이 없을 때 사용)
export const defaultSectionVersions: Record<VersionedSection, VersionKey> = {
  hero: "v2",
  greetingMessage: "v2",
  aboutUs: "v2",
  gallery: "v2",
};
