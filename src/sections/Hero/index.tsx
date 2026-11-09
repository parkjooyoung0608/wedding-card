import { useSectionVersion } from "@/context/sectionVersion";
import HeroV1 from "@/sections/Hero/versions/V1";
import HeroV2 from "@/sections/Hero/versions/V2";

/** 메인 랜딩 - 선택된 버전을 렌더 */
export default function Hero() {
  const version = useSectionVersion("hero");
  return version === "v2" ? <HeroV2 /> : <HeroV1 />;
}
