import { useState } from "react";
import { ArrowUpRight, Copy } from "lucide-react";
import Toast from "@/components/Toast";
import copy from "@/utils/copy";

export default function Share() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center bg-white gsap-div gap-y-3 py-9 px-9">
      <button
        onClick={() => console.log("TODO: 클릭 시 공유 작업")}
        className="flex items-center justify-between text-sm w-full h-12 px-5 rounded-xl bg-[#FCE777] disabled:bg-[#FCE777]/50"
      >
        <div className="text-[#222222]">카카오톡으로 청첩장 전하기</div>
        <ArrowUpRight />
      </button>
      <button
        onClick={() =>
          copy("https://wedding-card-sgjy.web.app/", () => setShowToast(true))
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
