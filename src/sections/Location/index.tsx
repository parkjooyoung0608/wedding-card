import {
  BusFront,
  CarFront,
  CircleParking,
  // TrainFrontTunnel,
} from "lucide-react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Title from "@/sections/Location/Title";
import { useEffect, useState } from "react";

export function Maps() {
  const [isLoaded, setIsLoaded] = useState(false);

  const s_lat = 37.55465;
  const s_lng = 126.970598;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&autoload=false`;
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => setIsLoaded(true));
      }
    };
    script.onerror = () => console.error("Kakao Maps SDK failed to load");
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    // 이미 로드된 경우 방지
    if (window.kakao && window.kakao.maps) {
      setIsLoaded(true);
      return;
    }

    // ✅ 지도 SDK 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_API_KEY
    }&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => setIsLoaded(true));
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  if (!isLoaded) return <div>지도를 불러오는 중...</div>;

  return (
    <Map
      center={{ lat: s_lat, lng: s_lng }}
      style={{ width: "100%", height: "360px" }}
      level={3}
    >
      <MapMarker position={{ lat: s_lat, lng: s_lng }} />
    </Map>
  );
}

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
        <Maps />
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
            <Title title="대중교통">
              <BusFront size={18} />
            </Title>
            <div className="mb-5">
              <p className="font-bold">버스로 오는 법</p>
              <p>버스로 오는 방법을 여기에 작성하세요.</p>
            </div>
            <div>
              <p className="font-bold">지하철로 오는 법</p>
              <p className="text-[#f16fa3] font-bold">8호선(문정역)</p>
              <p>문정역 3번 출구 &gt; 도보 9분</p>
            </div>
            <div className="mt-3">
              <p className="text-[#f16fa3] font-bold">* 셔틀버스</p>
              <p>버스로 오는 방법을 여기에 작성하세요.</p>
            </div>
          </section>
          <hr className="border-brand" />

          {/* 지하철 안내 */}
          {/* <section className="text-left mb-5">
            <Title title="지하철">
              <TrainFrontTunnel size={18} />
            </Title>
          </section>
          <hr className="border-brand" /> */}

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
