import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Countdown from "@/sections/WeddingDay/Countdown";
import Calendar from "@/sections/WeddingDay/Calendar";

export default function WeddingDay() {
  return (
    <GsapSection>
      <SectionTitle
        title="WEDDING DAY"
        descFirst="2026년 6월 13일 토요일 | 오전 11시"
        descSecond="Saturday, June 13, 2026 | AM 11:00"
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
