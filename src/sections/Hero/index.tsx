import heroWedding from "@/assets/images/hero-wedding.jpg";
import {
  BRIDE_FIRST_EN,
  GROOM_FIRST_EN,
  WEDDING_DATE_NUMBER,
  WEDDING_DAY_EN,
} from "@/config/config";

/**
 * 메인 랜딩 페이지
 */
export default function Hero() {
  const sparkles = Array.from({ length: 60 });

  return (
    <div className="h-screen relative md:rounded-t-3xl overflow-hidden">
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

      {/* 웨딩 사진 위 텍스트 */}
      <div
        className="whitespace-normal w-full break-all absolute z-10 px-2 text-white"
        style={{
          top: " 50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="font-birthstone text-5xl text-center">
            We are getting married
          </h1>
          <div className="text-base mt-4">
            <span className="text-[0.8rem]">{GROOM_FIRST_EN}</span>
            <span className="text-[0.8rem]">
              {" "}
              | {WEDDING_DATE_NUMBER} {WEDDING_DAY_EN} |{" "}
            </span>
            <span className="text-[0.8rem]">{BRIDE_FIRST_EN}</span>
          </div>
        </div>
      </div>

      {/* 웨딩 사진 */}
      <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10"></div>
      <img
        alt="cover_image"
        fetchPriority="high"
        decoding="async"
        data-nimg="fill"
        className="absolute object-cover w-full h-full md:rounded-t-3xl filter brightness-75"
        src={heroWedding}
        style={{ inset: "0px", color: "transparent" }}
      ></img>
    </div>
  );
}
