import { useSectionVersion } from "@/context/sectionVersion";
import AboutUsV1 from "@/sections/AboutUs/versions/V1";
import AboutUsV2 from "@/sections/AboutUs/versions/V2";

/** 부모님 소개 - 선택된 버전을 렌더 */
export default function AboutUs() {
  const version = useSectionVersion("aboutUs");
  return version === "v2" ? <AboutUsV2 /> : <AboutUsV1 />;
}
