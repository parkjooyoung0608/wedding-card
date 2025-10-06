import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Polaroid from "@/sections/AboutUs/Polaroid";

export default function AboutUs() {
  return (
    <GsapSection>
      <SectionTitle
        title="ABOUT US"
        descFirst="저희 커플을 소개합니다"
        descSecond="하나로 이어진 두개의 우주"
        bgColor="brandLight"
      >
        <div className="gsap-opacity mt-4 w-3/4 flex flex-col space-y-4">
          <Polaroid
            mode="groom"
            birthDate="1995년 12월 서울 출생"
            tagline="호기심 많은 손재주 왕 📽"
          />
          <Polaroid
            mode="bride"
            birthDate="1995년 11월 서울 출생"
            tagline="호기심 많은 손재주 왕 📽"
          />
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
