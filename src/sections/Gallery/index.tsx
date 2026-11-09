import { useSectionVersion } from "@/context/sectionVersion";
import GalleryV1 from "@/sections/Gallery/versions/V1";
import GalleryV2 from "@/sections/Gallery/versions/V2";

/** 갤러리 - 선택된 버전을 렌더 */
export default function Gallery() {
  const version = useSectionVersion("gallery");
  return version === "v2" ? <GalleryV2 /> : <GalleryV1 />;
}
