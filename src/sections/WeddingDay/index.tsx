import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Countdown from "@/sections/WeddingDay/Countdown";
import Calendar from "@/sections/WeddingDay/Calendar";
import {
  WEDDING_DATE,
  WEDDING_DATE_EN,
  WEDDING_DAY,
  WEDDING_TIME,
  WEDDING_TIME_NUMBER,
} from "@/config/config";

export default function WeddingDay() {
  return (
    <GsapSection>
      <SectionTitle
        title="WEDDING DAY"
        descFirst={`${WEDDING_DATE} ${WEDDING_DAY} | ${WEDDING_TIME}`}
        descSecond={`${WEDDING_DATE_EN} | ${WEDDING_TIME_NUMBER}`}
        bgColor="rgb(248, 248, 248)"
      >
        <hr className="gsap-item pb-8" />
        <div className="gsap-item w-full px-5 gsap-item ">
          {/* 캘린더 */}
          <Calendar />
          <hr className="gsap-item my-8" />
          {/* 카운트다운 */}
          <Countdown />
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
