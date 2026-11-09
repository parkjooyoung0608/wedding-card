import { useState } from "react";
import { defaultSectionVersions } from "@/config/sections";
import {
  SectionVersionContext,
  type VersionMap,
} from "@/context/sectionVersion";
import type { VersionedSection, VersionKey } from "@/config/sections";

const STORAGE_KEY = "wedding:sectionVersions";

function loadInitial(): VersionMap {
  if (typeof window === "undefined") return { ...defaultSectionVersions };
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved) {
      // 저장값에 없는 섹션은 기본값으로 채운다 (섹션 추가 대비).
      return { ...defaultSectionVersions, ...JSON.parse(saved) };
    }
  } catch {
    /* 파싱 실패 시 기본값 사용 */
  }
  return { ...defaultSectionVersions };
}

export function SectionVersionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [versions, setVersions] = useState<VersionMap>(loadInitial);

  const update = (next: VersionMap) => {
    setVersions(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* 저장 실패는 무시 (렌더에는 영향 없음) */
    }
  };

  const setVersion = (section: VersionedSection, version: VersionKey) =>
    update({ ...versions, [section]: version });

  const resetVersions = () => update({ ...defaultSectionVersions });

  return (
    <SectionVersionContext.Provider
      value={{ versions, setVersion, resetVersions }}
    >
      {children}
    </SectionVersionContext.Provider>
  );
}
