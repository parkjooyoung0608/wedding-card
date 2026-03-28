import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { photos } from "@/config/data/gallery";
import type { IGalleryModal } from "@/@Interface";
import { useEffect } from "react";

export default function Modal({
  modalIndex,
  closeModal,
  showPrev,
  showNext,
}: IGalleryModal) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={closeModal}
    >
      {/* 닫기 버튼 */}
      <button
        className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black transition-colors z-50"
        onClick={closeModal}
      >
        <X size={28} />
      </button>

      {/* 사진 컨테이너 */}
      <div 
        className="relative w-full h-[70vh] flex items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photos[modalIndex].src}
          alt={`modal-${modalIndex}`}
          className="max-w-full max-h-full object-contain shadow-2xl rounded-sm animate-in zoom-in duration-300"
        />
        
        {/* 네비게이션 버튼 (Desktop/Tablet) */}
        <button
          className="absolute left-4 p-2 text-gray-300 hover:text-black transition-colors disabled:opacity-20 hidden md:block"
          onClick={showPrev}
          disabled={modalIndex === 0}
        >
          <ChevronLeft size={48} />
        </button>
        <button
          className="absolute right-4 p-2 text-gray-300 hover:text-black transition-colors disabled:opacity-20 hidden md:block"
          onClick={showNext}
          disabled={modalIndex === photos.length - 1}
        >
          <ChevronRight size={48} />
        </button>
      </div>

      {/* 하단 정보 및 네비게이션 (Mobile friendly) */}
      <div 
        className="flex items-center justify-center w-full max-w-sm mt-8 text-gray-500 relative h-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute left-10 p-2 text-gray-400 disabled:opacity-20 md:hidden"
          onClick={showPrev}
          disabled={modalIndex === 0}
        >
          <ChevronLeft size={32} />
        </button>

        <p className="font-suit text-sm tracking-widest">
          <span className="text-point font-bold">{modalIndex + 1}</span> / {photos.length}
        </p>

        <button
          className="absolute right-10 p-2 text-gray-400 disabled:opacity-20 md:hidden"
          onClick={showNext}
          disabled={modalIndex === photos.length - 1}
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
