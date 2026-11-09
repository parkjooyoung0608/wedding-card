import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
// import Countdown from "@/sections/WeddingDay/Countdown";
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
        titleClassName="font-plexSerif text-[1.2rem] tracking-[0.12em]"
        textClassName="text-gray-900"
        bgColor="#FFB9C1"
        descFirst={`${WEDDING_DATE} ${WEDDING_DAY} | ${WEDDING_TIME}`}
        descSecond={`${WEDDING_DATE_EN} | ${WEDDING_TIME_NUMBER}`}
      >
        <hr className="gsap-item pb-8" />
        <div className="gsap-item w-full px-5 gsap-item ">
          {/* 캘린더 */}
          <Calendar />
          {/* 카운트다운 */}
          {/* <Countdown /> */}
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
