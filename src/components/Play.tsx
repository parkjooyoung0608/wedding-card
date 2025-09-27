import { useEffect, useRef, useState } from "react";

export default function Play() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // 바 애니메이션 랜덤 높이 생성
  const bars = Array.from({ length: 5 }, (_, i) => i);

  // 재생 상태에 따른 audio 제어
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => console.log("Autoplay blocked"));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  return (
    <div className="sticky top-0 z-30">
      <div className="sticky top-0 z-30 flex opacity-75 relative">
        {/* 알림 메시지 */}
        <div className="absolute top-[7px] right-1/2 translate-x-1/2">
          <div className="animate-slideUpFade px-4 py-2 bg-black rounded-full w-full transform transition-opacity">
            <p className="text-xs text-white text-center whitespace-nowrap">
              배경음악이 준비 되었습니다.
            </p>
          </div>
        </div>

        {/* 숨겨진 silence iframe (브라우저 autoplay workaround) */}
        <iframe
          src="https://hellomybrand.com/wed/audio/silence.mp3"
          allow="autoplay"
          style={{ display: "none" }}
        ></iframe>

        {/* 실제 오디오 재생 */}
        <audio ref={audioRef} autoPlay loop>
          <source
            src="https://hellomybrand.com/wed/audio/14.mp3"
            type="audio/mp3"
          />
        </audio>

        {/* 플레이리스트 아이콘 */}
        <div
          className="absolute w-6 h-6 top-3 right-3 z-40 opacity-80"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? (
            // 재생 상태
            <div className="w-full h-full bg-black rounded-full flex items-end justify-between px-1 py-1.5 overflow-hidden">
              {bars.map((_, idx) => (
                <div
                  key={idx}
                  className="w-[1.4px] bg-white animate-barMove origin-bottom"
                  style={{
                    height: "5px",
                    animationDelay: `${idx * 0.15}s`, // 랜덤하게 딜레이
                    animationDuration: `${1 + Math.random()}s`, // 길이 다른 움직임
                  }}
                />
              ))}
            </div>
          ) : (
            // 정지 상태
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 80 80"
              width="80"
              height="80"
              preserveAspectRatio="xMidYMid meet"
              className="w-full h-full"
            >
              <defs>
                <clipPath id="__lottie_element_75">
                  <rect width="80" height="80" x="0" y="0" />
                </clipPath>
              </defs>
              <g clipPath="url(#__lottie_element_75)">
                <g
                  transform="matrix(0.98,0,0,0.98,41.47,39.51)"
                  opacity="1"
                  style={{ display: "block" }}
                >
                  <g opacity="1" transform="matrix(1,0,0,1,-1.5,0.5)">
                    <path
                      fill="rgb(0,0,0)"
                      fillOpacity={1}
                      d="M0,-40C22.076,-40 40,-22.076 40,0C40,22.076 22.076,40 0,40C-22.076,40 -40,22.076 -40,0C-40,-22.076 -22.076,-40 0,-40z"
                      style={{ mixBlendMode: "overlay" }}
                    />
                  </g>
                </g>
                <g
                  transform="matrix(3,0,0,3,38.617,34.228)"
                  opacity={1}
                  style={{ display: "block" }}
                >
                  <path
                    fill="rgb(255,255,255)"
                    fillOpacity={1}
                    d="M-2.567,-2.174V6.022c0,.393.432.633.765.425L4.754,2.348c.313-.196.313-.652 0-.848l-6.556-4.098c-.333-.207-.765.033-.765.424z"
                  />
                </g>
              </g>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
