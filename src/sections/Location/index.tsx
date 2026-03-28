import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";

export default function Location() {
  const [isLoaded, setIsLoaded] = useState(false);

  const s_lat = 37.484743;
  const s_lng = 127.117105;

  useEffect(() => {
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
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <GsapSection>
      <SectionTitle
        title="LOCATION"
        descFirst="루이비스컨벤션 웨딩홀"
        descSecond="서울시 송파구 법원로 9길 26 H비지니스파크 D동 B1 층 아모리스홀"
        hasCopy
        hasPhone
        phoneNumber="02-6281-9000"
      >
        <div className="gsap-item relative w-full h-[250px] mb-10 rounded-xl overflow-hidden shadow-sm">
          {!isLoaded ? (
            <div>지도 로딩 중...</div>
          ) : (
            <>
              <Map
                center={{ lat: s_lat, lng: s_lng }}
                style={{ width: "100%", height: "100%" }}
                level={3}
              >
                <MapMarker position={{ lat: s_lat, lng: s_lng }} />
              </Map>
              {/* 지도 위 버튼 */}
              <a
                href="https://kko.kakao.com/choviAone5"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 left-2 px-3 py-1 bg-white/90 text-black text-xs rounded-md font-medium shadow-md z-10 hover:bg-white transition"
              >
                카카오맵으로 열기
              </a>
            </>
          )}
        </div>

        <div className="gsap-item w-full space-y-6 px-2 pb-10">
          {/* 자차 안내 */}
          <section className="text-left">
            <p className="font-bold">자차</p>
            <div className="text-[0.85rem] text-gray-600 leading-relaxed">
              <p>네비게이션 : <span className="text-gray-800 font-semibold">‘루이비스컨벤션’</span> 또는 <span className="text-gray-800 font-semibold">‘주소’</span> 입력</p>
              <p className="text-[0.8rem]">* 건물 내 A,B동 C,D동 B1~B4층 1300여대 주차 가능</p>
              <p className="text-[0.8rem]">* 2시간 무료주차</p>
            </div>
          </section>

          {/* 버스 안내 */}
          <section className="text-left mb-2">
            <div className="mb-5">
              <p className="font-bold">버스로 오는 법</p>
                <p className="text-gray-800">문정 로데오거리 하차</p>
              <ul className="space-y-0.5 ml-1">
                <li className="flex gap-1">
                  <span className="shrink-0 text-green-400 font-bold">- 일반버스(초록) :</span>
                  <span>30, 31, 32, 331, 100, 119</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-blue-400 font-bold">- 간선버스(파랑) :</span>
                  <span>302, 303, 320, 333, 343, 345, 350, 360</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-green-400 font-bold">- 지선버스(초록) :</span>
                  <span>3420</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-red-400 font-bold">- 광역버스(빨강) :</span>
                  <span>9403</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-red-400 font-bold">- 직행좌석버스(빨강) :</span>
                  <span>500-1, 1009, 1112, 1117, 1650, 3302, G2100</span>
                </li>
              </ul>
            </div>
          </section>
          {/* 지하철 안내 */}
          <section className="text-left">
            <div>
              <p className="font-bold">지하철로 오는 법</p>
              <p>
                <span>8호선 문정역</span> 4번출구 도보 10분
              </p>
              <p className="text-[0.8rem]">* 4번출구 앞 셔틀버스 10분 배차 운행</p>
            </div>
          </section>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
