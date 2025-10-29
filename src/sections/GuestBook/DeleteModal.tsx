import { useState } from "react";
import { X } from "lucide-react";
import { db } from "@/utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import type { IDeleteModal } from "@/@Interface";

export default function DeleteModal({
  docId,
  docPassword,
  showToast,
  onClose,
  onSuccess,
}: IDeleteModal) {
  const [inputPw, setInputPw] = useState("");

  const handleDelete = async () => {
    if (inputPw !== docPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await deleteDoc(doc(db, "guestbook", docId));
      onClose();
      onSuccess?.(); // 리스트 갱신
      showToast("삭제되었습니다!");
    } catch (err) {
      console.error(err);
      showToast("삭제 중 오류가 발생했습니다.");
    }
  };

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

        <h2 className="text-black text-xl mb-1 mt-4">글 삭제</h2>
        <p className="text-brand mb-6">
          관리자 및 작성자만 글을 삭제하실 수 있습니다.
        </p>
        <input
          type="text"
          placeholder="비밀번호를 입력해 주세요"
          className="w-full p-3 rounded-md bg-white outline-none shadow-[rgba(0,0,0,0.05)_0px_2px_4px] mb-6"
          value={inputPw}
          onChange={(e) => setInputPw(e.target.value)}
        />
        <button
          className="w-full bg-brand text-white py-3 rounded-md font-semibold transition"
          onClick={handleDelete}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}
