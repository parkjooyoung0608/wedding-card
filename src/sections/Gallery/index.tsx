import { useState } from "react";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Modal from "@/sections/Gallery/Modal";
import { photos } from "@/config/data/gallery";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [visibleCount, setVisibleCount] = useState(9);
  const [modalIndex, setModalIndex] = useState<number | null>(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 9, photos.length));
  };

  const handlePhotoClick = (idx: number) => {
    setModalIndex(idx);
    setShowModal(!showModal);
  };
  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex > 0) setModalIndex(modalIndex - 1);
  };
  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex !== null && modalIndex < photos.length - 1)
      setModalIndex(modalIndex + 1);
  };

  return (
    <div>
      <GsapSection>
        <SectionTitle
          title="GALLERY"
          descFirst="사진을 클릭하시면 전체 화면 보기가 가능합니다"
          bgColor="#fff"
        >
          <div className="grid grid-cols-3 gap-[2px]">
            {photos.slice(0, visibleCount).map((photo, idx) => (
              <div key={idx} className="cursor-pointer">
                <img
                  src={photo}
                  alt={`photo-${idx}`}
                  className="w-full h-auto object-cover"
                  onClick={() => handlePhotoClick(idx)}
                />
              </div>
            ))}
          </div>

          {visibleCount < photos.length && (
            <div className="flex flex-col justify-center mt-6">
              <button
                className="text-lg font-bold px-4 py-2 transition"
                onClick={handleLoadMore}
              >
                ↓
              </button>
              <p>더보기</p>
            </div>
          )}
        </SectionTitle>
      </GsapSection>

      {showModal && modalIndex !== null && (
        <Modal
          modalIndex={modalIndex}
          closeModal={closeModal}
          showPrev={showPrev}
          showNext={showNext}
        />
      )}
    </div>
  );
}
