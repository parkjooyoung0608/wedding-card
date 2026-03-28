import { useState } from "react";
import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Modal from "@/sections/Gallery/Modal";
import { photos } from "@/config/data/gallery";

export default function Gallery() {
  const [showModal, setShowModal] = useState(false);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const handlePhotoClick = (idx: number) => {
    setModalIndex(idx);
    setShowModal(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowModal(false);
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex > 0) setModalIndex(modalIndex - 1);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex < photos.length - 1) setModalIndex(modalIndex + 1);
  };

  return (
    <div>
      <GsapSection>
        <SectionTitle
          title="GALLERY"
          descFirst="사진을 클릭하면 확대해서 보실 수 있습니다"
        >
          <div className="grid grid-cols-3 gap-1 w-full px-1">
            {photos.map((photo, idx) => (
              <div
                key={idx}
                className="gsap-item relative cursor-pointer aspect-square overflow-hidden group"
                onClick={() => handlePhotoClick(idx)}
              >
                <img
                  src={photo.src}
                  alt={`photo-${idx}`}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                  style={{ objectPosition: photo.position || "center" }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </SectionTitle>
      </GsapSection>

      {showModal && (
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
