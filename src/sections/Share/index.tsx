import { useEffect, useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";
import Toast from "@/components/Toast";
import copy from "@/utils/copy";

export default function Share() {
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
    }
  }, []);

  const handleKakaoShare = () => {
    const { Kakao } = window;
    if (!Kakao || !Kakao.isInitialized()) {
      console.error("Kakao SDK not initialized");
      return;
    }

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "💌 우리의 결혼식에 초대합니다",
        description: "소중한 날, 함께 해주세요.",
        imageUrl: `${window.location.origin}/og-image.jpg`, // ✅ 썸네일 이미지 URL (현재 도메인 기준)
        link: {
          mobileWebUrl: window.location.href,
          webUrl: window.location.href,
        },
      },
      buttons: [
        {
          title: "청첩장 보기",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
      ],
    });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-brandLight gsap-div gap-y-3 py-9 px-9">
      <button
        onClick={handleKakaoShare}
        className="flex items-center justify-between text-sm w-full h-12 px-5 rounded-xl bg-[#FCE777] disabled:bg-[#FCE777]/50"
      >
        <div className="text-[#222222]">카카오톡으로 청첩장 전하기</div>
        <ArrowUpRight />
      </button>
      <button
        onClick={() =>
          copy(`${window.location.origin}/`, () =>
            setShowToast(!showToast)
          )
        }
        className="bg-brand items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground py-2 flex justify-between w-full h-12 px-5 rounded-xl"
      >
        <div className="text-white">청첩장 주소 복사하기</div>
        <Copy size={19} />
      </button>

      {showToast && <Toast title="청첩장 주소가 복사되었습니다." />}
    </div>
  );
}
