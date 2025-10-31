import { useState } from "react";
import { Copy, Phone } from "lucide-react";
import Toast from "@/components/Toast";
import copy from "@/utils/copy";
import type { ISectionTitle } from "@/@Interface";

const bgMap: Record<string, string> = {
  brand: "bg-brand",
  brandLight: "bg-brandLight",
};

export default function SectionTitle({
  title,
  descFirst,
  descSecond,
  hasCopy,
  hasPhone,
  phoneNumber,
  children,
  bgColor,
}: ISectionTitle) {
  const [showToast, setShowToast] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center h-full gsap-div min-h-80 py-20 px-4 ${
        bgMap[bgColor] ?? ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="gsap-item font-lora">{title}</h1>
      <div className="p-10">
        <div className="gsap-item flex justify-center items-center mb-2 gap-1">
          <p>{descFirst}</p>
          {hasPhone && (
            <a
              href={`tel:${phoneNumber}`}
              className="text-gray-600 hover:text-black transition"
              title="전화 걸기"
            >
              <Phone size={15} />
            </a>
          )}
        </div>

        {descSecond && (
          <div className="gsap-item flex justify-center items-center mb-2 gap-1">
            <p className="font-light opacity-50">{descSecond}</p>
            {hasCopy && (
              <button
                onClick={() => copy(descSecond, () => setShowToast(!showToast))}
                className="text-gray-500 hover:text-black transition"
                title="복사하기"
              >
                <Copy size={15} />
              </button>
            )}
          </div>
        )}
      </div>
      {children}

      {showToast && <Toast title="주소가 복사되었습니다." />}
    </div>
  );
}
