import { useState, useEffect } from "react";
import heroWedding from "@/assets/Images/hero-wedding.jpg";
import {
  // BRIDE_FIRST_EN,
  // BRIDE_FULL,
  // GROOM_FIRST_EN,
  // GROOM_FULL,
  WEDDING_DATE_NUMBER,
  WEDDING_DAY_EN,
} from "@/config/config";

/**
 * 메인 랜딩 페이지
 */
export default function Hero() {
  // Hero 사진의 가로:세로 비율로 섹션 크기를 결정한다.
  // 이미지가 바뀌면 자동으로 재계산되도록 onload에서 갱신.
  const [aspectRatio, setAspectRatio] = useState<string>("961 / 1440");

  useEffect(() => {
    const img = new window.Image();
    img.src = heroWedding;
    img.onload = () => {
      setAspectRatio(`${img.naturalWidth} / ${img.naturalHeight}`);
    };
  }, []);

  const sparkles = Array.from({ length: 60 });

  return (
    <div
      className="relative md:rounded-t-3xl overflow-hidden shrink-0 w-full"
      style={{ aspectRatio }}
    >
      {/* 반짝이 레이어 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[100]">
        {sparkles.map((_, i) => {
          const size = Math.random() * 4 + 2; // 2px ~ 6px
          const left = Math.random() * 100; // %
          const top = Math.random() * 100; // 화면 전체 높이 %
          const delay = Math.random() * 2; // s
          const duration = Math.random() * 3 + 2; // 2s ~ 5s
          return (
            <div
              key={i}
              className="absolute bg-white rounded-full animate-twinkle"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
              }}
            />
          );
        })}
      </div>

      {/* 상단 타이틀 */}
      <div
        className="whitespace-normal w-full break-all absolute z-10 px-2 text-white"
        style={{
          top: "3%",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        <h1 className="font-birthstone text-5xl text-center">
          We are getting married
        </h1>
      </div>

      {/* 하단 날짜 */}
      <div
        className="whitespace-normal w-full break-all absolute z-10 px-2 text-white text-center"
        style={{
          bottom: "8%",
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        {/* <span className="text-[0.8rem]">{GROOM_FIRST_EN}</span> */}
        <span className="text-[0.8rem]">
          {WEDDING_DATE_NUMBER} {WEDDING_DAY_EN}
        </span>
        {/* <span className="text-[0.8rem]">{BRIDE_FIRST_EN}</span> */}
      </div>

      {/* 하단 그라데이션 (배경색과 자연스럽게 블렌딩) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-brandLight to-transparent z-[5] pointer-events-none" />

      {/* 웨딩 사진 */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
      <img
        alt="cover_image"
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="absolute object-cover w-full h-full md:rounded-t-3xl filter brightness-75"
        src={heroWedding}
        style={{ inset: "0px", color: "transparent", transform: "translateZ(0)" }}
      ></img>
    </div>
  );
}
