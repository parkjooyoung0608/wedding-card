import {
  BusFront,
  CarFront,
  CircleParking,
  TrainFrontTunnel,
} from "lucide-react";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Title from "@/sections/Location/Title";

export default function Location() {
  return (
    <GsapSection>
      <SectionTitle
        title="LOCATION"
        descFirst="루이비스컨벤션 웨딩홀"
        descSecond="문정동 645-2"
        hasCopy
        hasPhone
        phoneNumber="02-6281-9000"
        bgColor="brandLight"
      >
        {/* TODO: 달력 */}
        <div className="gsap-item w-full">
          {/* 자차 안내 */}
          <section className="text-left mb-5">
            <Title title="자차">
              <CarFront size={18} />
            </Title>
            <p>내비게이션 : '루이비스컨벤션웨딩홀 검색'</p>
            <p>서울 송파구 문정동 645-2</p>
          </section>
          <hr className="border-brand" />

          {/* 버스 안내 */}
          <section className="text-left mb-5">
            <Title title="버스">
              <BusFront size={18} />
            </Title>
            <p>버스로 오는 방법을 여기에 작성하세요.</p>
          </section>
          <hr className="border-brand" />

          {/* 지하철 안내 */}
          <section className="text-left mb-5">
            <Title title="지하철">
              <TrainFrontTunnel size={18} />
            </Title>
            <p className="text-[#f16fa3] font-bold">8호선(문정역)</p>
            <p>문정역 3번 출구 &gt; 도보 9분</p>
          </section>
          <hr className="border-brand" />

          {/* 주차 안내 */}
          <section className="text-left mb-5">
            <Title title="주차">
              <CircleParking size={18} />
            </Title>
            <p>주차 관련 안내를 여기에 작성하세요.</p>
          </section>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
