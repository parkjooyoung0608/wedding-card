import {
  BRIDE_FATHER,
  BRIDE_FIRST,
  BRIDE_MOTHER,
  GROOM_FATHER,
  GROOM_FIRST,
  GROOM_MOTHER,
} from "@/config/config";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";

export default function GreetingMessage() {
  const messages = [
    "서로의 이름 끝에 같은 '빛날 희'로 닮은 두 사람이",
    "서로의 빛이 되어 찬란한 삶을 함께 이루고자 합니다.",
    "저희의 빛나는 순간을 함께해 주시면 감사하겠습니다.",
  ];

  return (
    <GsapSection>
      <SectionTitle title="INVITATION" bgColor="white">
        <div className="flex flex-col items-center text-center">
          {messages.map((msg, index) => (
            <p key={msg + index} className="gsap-item h-[32px]">
              {msg}
            </p>
          ))}

          <div className="py-2"></div>

          <p className="gsap-item w-[62%] py-10 px-4">
            <span className="flex justify-between">
              <span>
                {GROOM_FATHER} · {GROOM_MOTHER}{" "}
                <span className="inline-block w-[2em] text-center">아들</span>
              </span>
              <span className="font-bold">{GROOM_FIRST}</span>
            </span>
            <span className="flex justify-between">
              <span>
                {BRIDE_FATHER} · {BRIDE_MOTHER}{" "}
                <span className="inline-block w-[2em] text-center">딸</span>
              </span>
              <span className="font-bold">{BRIDE_FIRST}</span>
            </span>
          </p>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
