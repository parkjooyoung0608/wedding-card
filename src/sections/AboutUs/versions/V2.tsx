import aboutUsImage from "@/assets/Images/about-us.png";

/**
 * 부모님 소개 V2 - 이미지형 (디자인 시안)
 */
export default function AboutUsV2() {
  return (
    <div className="w-full bg-white">
      <img
        alt="부모님 소개"
        decoding="async"
        className="block w-full h-auto"
        src={aboutUsImage}
      />
    </div>
  );
}
