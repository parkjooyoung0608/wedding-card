import heroImage from "@/assets/Images/hero.png";

/**
 * Hero V2 - 이미지형 (디자인 시안)
 */
export default function HeroV2() {
  return (
    <div className="md:rounded-t-3xl overflow-hidden shrink-0 w-full">
      <img
        alt="메인 청첩장"
        fetchPriority="high"
        decoding="async"
        className="block w-full h-auto md:rounded-t-3xl"
        src={heroImage}
      />
    </div>
  );
}
