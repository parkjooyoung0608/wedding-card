import { useEffect, useState } from "react";
import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";

const VENUE_NAME = "더 화이트베일";
const VENUE_ADDRESS = "서울특별시 서초구 서초중앙로 14";
// 지오코딩 실패 시 사용할 대략적 중심 좌표 (남부터미널역 인근)
const FALLBACK_CENTER = { lat: 37.4849, lng: 127.014 };

export default function Location() {
  const [loading, error] = useKakaoLoader({
    appkey: import.meta.env.VITE_KAKAO_API_KEY,
    libraries: ["services"],
  });

  // 주소를 좌표로 변환해 마커를 정확히 찍는다.
  const [center, setCenter] = useState(FALLBACK_CENTER);

  useEffect(() => {
    if (loading || error) return;
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(VENUE_ADDRESS, (result, status) => {
      if (status === kakao.maps.services.Status.OK && result[0]) {
        setCenter({ lat: Number(result[0].y), lng: Number(result[0].x) });
      }
    });
  }, [loading, error]);

  return (
    <GsapSection>
      <SectionTitle
        title="LOCATION"
        descFirst={VENUE_NAME}
        descSecond={VENUE_ADDRESS.replace("서울특별시", "서울")}
        bgColor="white"
        hasCopy
        hasPhone
        phoneNumber="02-3474-5000"
      >
        <div className="gsap-item relative w-full h-[250px] mb-10 rounded-xl overflow-hidden shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-500 text-sm">
              지도 로딩 중...
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-full text-red-500 text-xs px-4 text-center">
              지도 로드 실패: {String(error)}
            </div>
          ) : (
            <>
              <Map
                center={center}
                style={{ width: "100%", height: "100%" }}
                level={4}
              >
                <MapMarker position={center} />
              </Map>
              {/* 지도 위 버튼 */}
              <a
                href={`https://map.kakao.com/link/map/${VENUE_NAME},${center.lat},${center.lng}`}
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
                <span className="text-gray-800 font-semibold">
                  ‘서초동 1426-5’
                </span>{" "}
                또는{" "}
                <span className="text-gray-800 font-semibold">
                  ‘서초구 서초중앙로2길 10’
                </span>{" "}
                입력
              </p>
              <p>
                - 경부고속도로 서초 I.C{" "}
                <span className="text-gray-800">(서초·사당방면)</span> 500m
                거리내
              </p>
            </div>
          </section>

          {/* 주차 안내 */}
          <section className="text-left">
            <p className="font-bold">주차장 안내</p>
            <div className="text-[0.85rem] text-gray-600 leading-relaxed">
              <p>- 맞은편 전용 주차장(주차타워) 이용</p>
            </div>
          </section>

          {/* 지하철 안내 */}
          <section className="text-left">
            <div>
              <p className="font-bold">지하철로 오는 법</p>
              <p className="text-[0.85rem] text-gray-600">
                -{" "}
                <span className="text-gray-800">3호선 남부터미널역 하차</span> ·{" "}
                <span className="text-gray-800 font-semibold">4번 출구</span>{" "}
                도보 2분
              </p>
            </div>
          </section>

          {/* 버스 안내 */}
          <section className="text-left mb-2">
            <div className="mb-5">
              <p className="font-bold">버스로 오는 법</p>
              <p className="text-gray-800">남부터미널 하차</p>
              <ul className="space-y-0.5 ml-1 text-[0.85rem]">
                <li className="flex gap-1">
                  <span className="shrink-0 text-green-400 font-bold">
                    - 지선버스(초록) :
                  </span>
                  <span>4319</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-blue-400 font-bold">
                    - 간선버스(파랑) :
                  </span>
                  <span>461, 641</span>
                </li>
                <li className="flex gap-1">
                  <span className="shrink-0 text-red-400 font-bold">
                    - 직행버스(빨강) :
                  </span>
                  <span>6016, 8501</span>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
