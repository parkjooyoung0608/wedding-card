import { useState, type ComponentType } from "react";
import { sectionCatalog } from "@/config/sections";
import type { VersionedSection } from "@/config/sections";
import { useSectionVersionControls } from "@/context/sectionVersion";
import Hero from "@/sections/Hero";
import GreetingMessage from "@/sections/GreetingMessage";
import AboutUs from "@/sections/AboutUs";
import Gallery from "@/sections/Gallery";

/** 섹션 키 → 실제 섹션 컴포넌트 (미리보기용) */
const previewMap: Record<VersionedSection, ComponentType> = {
  hero: Hero,
  greetingMessage: GreetingMessage,
  aboutUs: AboutUs,
  gallery: Gallery,
};

/**
 * 관리자 토글 페이지 (#admin)
 * 섹션별 컨셉(버전)을 선택한다. 변경은 즉시 저장(localStorage)되고
 * 카드 안의 미리보기와 청첩장 화면에 바로 반영된다.
 */
export default function Admin() {
  const { versions, setVersion, resetVersions } = useSectionVersionControls();
  const sections = Object.keys(sectionCatalog) as VersionedSection[];

  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );

  // "선택하기": 현재 선택을 프로젝트 파일(admin-selection.json)로 저장 →
  // CLI(Claude)가 읽어서 틀을 잡는다. (dev 서버에서만 동작)
  const handleConfirm = async () => {
    setStatus("saving");
    try {
      const res = await fetch("/__admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ versions, savedAt: new Date().toISOString() }),
      });
      setStatus(res.ok ? "saved" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 font-suit">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-6">
        <header className="mb-6">
          <h1 className="text-xl font-bold">청첩장 관리자</h1>
          <p className="text-sm text-gray-500 mt-1">
            섹션별 컨셉(버전)을 선택하세요. 아래 미리보기에서 바로 확인됩니다.
          </p>
        </header>

        <div className="space-y-6">
          {sections.map((key) => {
            const cat = sectionCatalog[key];
            const current = versions[key];
            const Preview = previewMap[key];
            return (
              <div key={key} className="border border-gray-200 rounded-xl p-4">
                <p className="font-semibold mb-3">{cat.label}</p>
                <div className="flex gap-2">
                  {cat.versions.map((v) => {
                    const active = current === v.key;
                    return (
                      <button
                        key={v.key}
                        type="button"
                        onClick={() => setVersion(key, v.key)}
                        className={`flex-1 rounded-lg border px-3 py-2 text-left transition ${
                          active
                            ? "border-black bg-black text-white"
                            : "border-gray-200 bg-white text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        <span className="block text-xs font-bold uppercase">
                          {v.key}
                        </span>
                        <span
                          className={`block text-[0.7rem] leading-tight mt-0.5 ${
                            active ? "text-gray-200" : "text-gray-500"
                          }`}
                        >
                          {v.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* 실시간 미리보기 */}
                <div className="mt-3">
                  <p className="text-[0.7rem] text-gray-400 mb-1">미리보기</p>
                  <div className="rounded-lg border border-gray-200 bg-brandLight max-h-[360px] overflow-y-auto">
                    {/* pointer-events-none: 미리보기에서 모달 등 클릭 동작 방지 (스크롤은 유지) */}
                    <div className="pointer-events-none">
                      <Preview />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 선택 확정 */}
        <button
          type="button"
          onClick={handleConfirm}
          disabled={status === "saving"}
          className="w-full mt-7 rounded-lg bg-black text-white py-3 text-sm font-semibold disabled:opacity-60"
        >
          {status === "saving" ? "저장 중..." : "선택하기"}
        </button>
        {status === "saved" && (
          <p className="mt-2 text-center text-xs text-green-600">
            선택이 저장되었습니다. CLI에서 "선택 반영해줘"라고 알려주세요.
          </p>
        )}
        {status === "error" && (
          <p className="mt-2 text-center text-xs text-red-500">
            저장 실패 — dev 서버(npm run dev)가 실행 중인지 확인하세요.
          </p>
        )}

        <div className="flex gap-2 mt-4">
          <a
            href="#"
            className="flex-1 text-center rounded-lg border border-gray-300 py-2.5 text-sm text-gray-700 hover:bg-gray-50"
          >
            전체 청첩장 보기
          </a>
          <button
            type="button"
            onClick={resetVersions}
            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50"
          >
            기본값으로 초기화
          </button>
        </div>
      </div>
    </div>
  );
}
