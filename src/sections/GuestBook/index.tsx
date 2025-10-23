import { useState } from "react";
import { X } from "lucide-react";
import Button from "@/components/Button";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import MessageModal from "@/sections/GuestBook/MessageModal";
import DeleteModal from "@/sections/GuestBook/DeleteModal";
import { MockMessages } from "@/sections/GuestBook/MockMessages";

export default function GuestBook() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <GsapSection>
      <SectionTitle
        title="MESSAGE"
        descFirst="저희 둘에게 따뜻한 방명록을 남겨주세요"
        bgColor="brandLight"
      >
        {MockMessages.length > 0 && (
          <div className="gsap-item flex flex-col gap-4 max-h-96 overflow-y-auto w-full px-4 mb-10">
            {MockMessages.map((msg, index) => (
              <div
                key={msg + String(index)}
                className="gsap-item relative bg-white p-5 rounded-lg shadow-[rgba(0,0,0,0.05)_0px_2px_4px] flex flex-col justify-between"
              >
                <button
                  onClick={() => setIsDeleteModalOpen(true)}
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
      {isModalOpen && <MessageModal onClose={() => setIsModalOpen(false)} />}

      {/* 삭제 확인 모달 */}
      {isDeleteModalOpen && (
        <DeleteModal onClose={() => setIsDeleteModalOpen(false)} />
      )}
    </GsapSection>
  );
}
