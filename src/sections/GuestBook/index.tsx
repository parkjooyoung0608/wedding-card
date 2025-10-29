import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import Button from "@/components/Button";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Toast from "@/components/Toast";
import MessageModal from "@/sections/GuestBook/MessageModal";
import DeleteModal from "@/sections/GuestBook/DeleteModal";
import type { IMessage } from "@/@Interface";

export default function GuestBook() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState<{
    id: string;
    password: string;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const fetchMessages = async () => {
    const q = query(collection(db, "guestbook"), orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    const data: IMessage[] = snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        } as IMessage)
    );
    setMessages(data);
  };

  const openDeleteModal = (id: string, password: string) => {
    setIsDeleteModalOpen(true);
    setSelectedDoc({ id, password });
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2000);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <GsapSection>
      <SectionTitle
        title="MESSAGE"
        descFirst="저희 둘에게 따뜻한 방명록을 남겨주세요"
        bgColor="brandLight"
      >
        {messages.length > 0 && (
          <div className="gsap-item flex flex-col gap-4 max-h-96 overflow-y-auto w-full px-4 mb-10">
            {messages.map((msg, index) => (
              <div
                key={msg + String(index)}
                className="gsap-item relative bg-white p-5 rounded-lg shadow-[rgba(0,0,0,0.05)_0px_2px_4px] flex flex-col justify-between"
              >
                <button
                  onClick={() => openDeleteModal(msg.id, msg.password)}
                  className="absolute top-2 right-2 text-gray-300 hover:text-gray-700 transition"
                  aria-label="닫기"
                >
                  <X size={15} />
                </button>
                <p className="text-gray-800 text-left whitespace-pre-wrap break-words mb-3">
                  {msg.message}
                </p>
                <p className="text-sm text-gray-500 text-left">
                  From.{msg.name}
                </p>
              </div>
            ))}
          </div>
        )}

        <Button
          title="메시지 남기기"
          onClick={() => {
            setIsModalOpen(true);
          }}
        />
      </SectionTitle>

      {/* 메세지 작성 모달 */}
      {isModalOpen && (
        <MessageModal
          onSuccess={fetchMessages}
          onClose={() => setIsModalOpen(false)}
          showToast={showToast}
        />
      )}

      {/* 삭제 확인 모달 */}
      {isDeleteModalOpen && selectedDoc && (
        <DeleteModal
          onClose={() => setIsDeleteModalOpen(false)}
          docId={selectedDoc.id}
          docPassword={selectedDoc.password}
          onSuccess={fetchMessages}
          showToast={showToast}
        />
      )}

      {toastMessage && <Toast title={toastMessage} />}
    </GsapSection>
  );
}
