import Button from "@/components/Button";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import {
  BRIDE_FULL,
  GROOM_FULL,
  WEDDING_DATE,
  WEDDING_DAY,
  WEDDING_TIME,
} from "@/config/config";

export default function RSVP() {
  return (
    <GsapSection>
      <SectionTitle
        title="RSVP"
        descFirst="참석 의사"
        descSecond="모든 분들을 소중히 모실 수 있도록 전해주세요"
        bgColor="#fff"
      >
        <div className="gsap-item my-6 p-8 rounded-md w-full text-center bg-brandLight">
          <div className="flex justify-center items-center gap-x-4">
            <span>신랑 {GROOM_FULL}</span>
            <span>♥️</span>
            <span>신부 {BRIDE_FULL}</span>
          </div>
          <div className="shrink-0 bg-border h-[1px] w-full gsap-opacity my-6 bg-[#c3d6e0]"></div>
          <div className="text-[#666666] space-y-2">
            <p>{WEDDING_DATE}</p>
            <p>
              {WEDDING_DAY} {WEDDING_TIME}
            </p>
            <p className="py-4 text-pretty break-keep">
              루이비스컨벤션 웨딩홀 (00층)
            </p>
            <Button title="참석 의사 체크하기" onClick={() => {}} />
          </div>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
