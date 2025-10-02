import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "@/config/data/gallery";
import type { IGalleryModal } from "@/@Interface";

export default function Modal({
  modalIndex,
  closeModal,
  showPrev,
  showNext,
}: IGalleryModal) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* 닫기 버튼 */}
      <button
        className="absolute top-2 right-2 text-gray text-lg font-bold z-50"
        onClick={closeModal}
      >
        <X />
      </button>

      {/* 사진 */}
      <img
        src={photos[modalIndex]}
        alt={`modal-${modalIndex}`}
        className="max-w-full max-h-[80vh] mx-auto"
      />

      <div className="flex items-center justify-between absolute bottom-4 w-full text-gray-500 px-10">
        {/* 이전 화살표 */}
        <button
          className="text-3xl font-bold z-50 disabled:opacity-50"
          onClick={showPrev}
          disabled={modalIndex === 0}
        >
          <ChevronLeft />
        </button>

        {/* 총 갯수 표시 */}
        <p className="font-semibold">
          {modalIndex + 1} / {photos.length}
        </p>

        {/*  화살표 */}
        <button
          className="text-3xl font-bold z-50 disabled:opacity-50"
          onClick={showNext}
          disabled={modalIndex === photos.length - 1}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
