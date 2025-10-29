import { useState } from "react";
import { X } from "lucide-react";
import { db } from "@/utils/firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function MessageModal({
  onClose,
  onSuccess,
  showToast,
}: {
  onClose: () => void;
  onSuccess?: () => void;
  showToast: (msg: string) => void;
}) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "guestbook"), {
        name,
        password,
        message,
        createdAt: serverTimestamp(),
      });
      onClose();
      onSuccess?.();
      showToast("메시지가 등록되었습니다!");
      return;
    } catch (err) {
      console.error(err);
      showToast("메시지 등록 중 오류가 발생했습니다.");
    }
  };

  const isDisabled = !name || !password || !message;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="relative bg-gray-100 w-[90%] max-w-md p-6 flex flex-col items-center text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
          aria-label="닫기"
        >
          <X size={20} />
        </button>

        <h2 className="text-black text-xl mb-1 mt-4">축하 메시지 작성하기</h2>
        <p className="text-brand mb-6">저희 둘의 결혼을 함께 축하해주세요</p>

        <div className="w-full flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="성함을 남겨주세요"
            className="w-full p-3 rounded-md bg-white outline-none shadow-[rgba(0,0,0,0.05)_0px_2px_4px]"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className="w-full p-3 rounded-md bg-white outline-none shadow-[rgba(0,0,0,0.05)_0px_2px_4px]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <textarea
            placeholder="200자 이내로 작성해 주세요"
            maxLength={200}
            className="w-full p-3 rounded-md bg-white outline-none resize-none h-32 shadow-[rgba(0,0,0,0.05)_0px_2px_4px]"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button
          className={`w-full ${
            isDisabled ? "bg-slate-300" : "bg-brand"
          } text-white py-3 rounded-md font-semibold transition`}
          onClick={handleSubmit}
          disabled={isDisabled}
        >
          작성 완료
        </button>
      </div>
    </div>
  );
}
