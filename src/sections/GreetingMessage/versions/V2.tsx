import greetingImage from "@/assets/Images/greeting-message.png";
import { GROOM_FIRST_EN, BRIDE_FIRST_EN } from "@/config/config";

/** 영문 이름을 첫 글자만 대문자로 (YONGHO → Yongho) */
const titleCase = (s: string) =>
  s ? s.charAt(0).toUpperCase() + s.slice(1).toLowerCase() : s;

/**
 * 인사말 V2 - 검정 배경 + 타이틀 텍스트 + 이미지(디자인 시안)
 */
export default function GreetingMessageV2() {
  return (
    <div className="w-full bg-black text-white pt-28 pb-10">
      <div className="text-center px-6">
        <h2 className="font-plexSerif text-[1.2rem] tracking-[0.12em]">
          WELCOME TO OUR WEDDING
        </h2>
        <p className="font-dynalight text-lg mt-3">
          {titleCase(GROOM_FIRST_EN)}{" "}
          <span className="text-white">ღ</span>{" "}
          {titleCase(BRIDE_FIRST_EN)}
        </p>
      </div>

      <img
        src={greetingImage}
        alt="인사말"
        decoding="async"
        className="block w-full h-auto mt-8"
      />
    </div>
  );
}
