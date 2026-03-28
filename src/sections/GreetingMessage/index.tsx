import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import { BRIDE_FULL, GROOM_FULL } from "@/config/config";

export default function GreetingMessage() {
  const messages = [
    "서로의 부족함까지 예쁘게 바라보며",
    "사랑과 신뢰로 한 가정을 이루려 합니다.",
  ];

  const messages2 = [
    "저희 두 사람이 함께하는 새로운 시작에",
    "귀한 발걸음으로 함께해주시면 감사하겠습니다.",
  ];

  return (
    <GsapSection>
      <SectionTitle title="INVITATION">
        <div className="flex flex-col items-center text-center">
          {messages.map((msg, index) => (
            <p key={msg + index} className="gsap-item h-[32px]">
              {msg}
            </p>
          ))}

          <div className="py-2"></div>

          {messages2.map((msg, index) => (
            <p key={msg + index} className="gsap-item h-[32px]">
              {msg}
            </p>
          ))}

          <p className="gsap-item p-10">
            신랑 <span className="text-point">{GROOM_FULL}</span> · 신부 <span className="text-point">{BRIDE_FULL}</span>
          </p>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
