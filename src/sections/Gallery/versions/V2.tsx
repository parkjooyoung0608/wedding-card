import { useState } from "react";
import Modal from "@/sections/Gallery/Modal";
import { photos } from "@/config/data/gallery";
import middlePhoto from "@/assets/Images/middle-photo.png";

/**
 * 갤러리 V2 - 중간사진 + 테두리 없는 3×5 정사각형 타일 (디자인 시안)
 */
export default function GalleryV2() {
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
    <div className="bg-white">
      {/* 갤러리 위 중간 사진 */}
      <img
        src={middlePhoto}
        alt="중간 사진"
        className="block w-full h-auto"
        decoding="async"
      />

      {/* 테두리 없이 3 x 5 정사각형 그리드 */}
      <div className="grid grid-cols-3 gap-0 w-full">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer aspect-square overflow-hidden group"
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
