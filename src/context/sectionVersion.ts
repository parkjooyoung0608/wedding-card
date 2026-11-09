import { createContext, useContext } from "react";
import {
  defaultSectionVersions,
  type VersionedSection,
  type VersionKey,
} from "@/config/sections";

export type VersionMap = Record<VersionedSection, VersionKey>;

export interface SectionVersionContextValue {
  versions: VersionMap;
  setVersion: (section: VersionedSection, version: VersionKey) => void;
  resetVersions: () => void;
}

export const SectionVersionContext =
  createContext<SectionVersionContextValue | null>(null);

/** 특정 섹션의 현재 선택 버전을 반환 (Provider 밖이면 기본값) */
export function useSectionVersion(section: VersionedSection): VersionKey {
  const ctx = useContext(SectionVersionContext);
  return ctx ? ctx.versions[section] : defaultSectionVersions[section];
}

/** 관리자 페이지 등에서 버전을 변경할 때 사용하는 컨트롤 */
export function useSectionVersionControls(): SectionVersionContextValue {
  const ctx = useContext(SectionVersionContext);
  if (!ctx) {
    throw new Error(
      "useSectionVersionControls must be used within SectionVersionProvider"
    );
  }
  return ctx;
}
