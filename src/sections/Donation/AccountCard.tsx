import { useState } from "react";
import { Copy } from "lucide-react";
import { KakaoPay } from "@/assets/Icons";
import { accountData } from "@/config/data/account";
import Toast from "@/components/Toast";

export default function AccountCard({ mode }: { mode: "groom" | "bride" }) {
  const selectedData = accountData[mode];

  const [showToast, setShowToast] = useState(false);

  const handleCopy = (accountNumber: string) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <div className="overflow-hidden text-sm transition-all px-3 py-4 rounded-b-lg bg-brandLight">
      <div className="text-[0.875em] font-normal space-y-2 ">
        {selectedData.map((item) => (
          <div
            key={item.role}
            className="border shadow-lg rounded-xl border-none bg-white"
          >
            <div className="p-6 py-6 min-h-12">
              <div className="flex justify-between">
                <span>{item.role}</span>
                <span>{item.name}</span>
              </div>
              <div className="mt-6">
                <button
                  onClick={() => handleCopy(item.accountNumber)}
                  className="text-sm font-medium disabled:pointer-events-none py-2 bg-[#F4F4F4] rounded-lg h-12 flex justify-between items-center px-4 w-full"
                >
                  <div className="text-start">
                    <div className="text-xs">{item.bank}</div>
                    <span className="text-xs">{item.accountNumber}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Copy size={18} />
                    <KakaoPay />
                  </div>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showToast && <Toast title="계좌번호가 복사되었습니다." />}
    </div>
  );
}
