import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";

export default function Location() {
  const [isLoaded, setIsLoaded] = useState(false);

  // 영등포 웨딩그룹위더스 (서울 영등포구 영중로 55)
  const s_lat = 37.515276;
  const s_lng = 126.907277;

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
        descFirst="영등포 웨딩그룹위더스"
        descSecond="서울 영등포구 영중로 55"
        hasCopy
        hasPhone
        phoneNumber="(전화번호 입력 필요)"
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
              {/* TODO: 영등포 웨딩그룹위더스 카카오맵 공유 링크로 교체 */}
              <a
                href="#"
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
              <p>
                네비게이션 :{" "}
                <span className="text-gray-800 font-semibold">‘서울 영등포구 영중로 55’</span> 또는{" "}
                <span className="text-gray-800 font-semibold">‘서울 영등포구 영등포동6가 7’</span> 입력
              </p>
            </div>
          </section>

          {/* 주차 안내 */}
          <section className="text-left">
            <p className="font-bold">주차장 안내</p>
            <div className="text-[0.85rem] text-gray-600 leading-relaxed">
              <p>- 건물 주차장</p>
              <p>- 영남 주차장 <span className="text-[0.8rem]">(상황에 따라 운영)</span></p>
            </div>
          </section>

          {/* 지하철 안내 */}
          <section className="text-left">
            <div>
              <p className="font-bold">지하철로 오는 법</p>
              <p>
                <span>1호선 영등포역</span> 하차
              </p>
              <p className="text-[0.85rem] text-gray-600">
                영등포 뉴타운 지하상가 <span className="text-gray-800 font-semibold">4번 출구</span> (새길병원 방면)
              </p>
            </div>
          </section>

          {/* 버스 안내 */}
          <section className="text-left mb-2">
            <div className="mb-5">
              <p className="font-bold">버스로 오는 법</p>
              <p className="text-gray-800">영등포시장 하차</p>
              <ul className="space-y-0.5 ml-1 text-[0.85rem]">
                <li className="flex gap-1">
                  <span className="shrink-0 text-blue-400 font-bold">- 간선버스(파랑) :</span>
                  <span>605, 661, 761</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-green-400 font-bold">- 지선버스(초록) :</span>
                  <span>5616, 5714, 6514</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-red-400 font-bold">- 광역버스(빨강) :</span>
                  <span>9707, M7646</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-sky-500 font-bold">- 공항버스 :</span>
                  <span>6007</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-red-400 font-bold">- 직행버스 :</span>
                  <span>1082, 1500, 8000, 9030, 9030-1</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-yellow-500 font-bold">- 좌석버스 :</span>
                  <span>700, 830, 870, 871</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-green-400 font-bold">- 일반버스 :</span>
                  <span>5, 60, 60-3, 88</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
