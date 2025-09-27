import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GsapSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // 내부 모든 요소들에 애니메이션 적용
      gsap.fromTo(
        ".gsap-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2, // 아이템마다 순차적으로 올라옴
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%", // 뷰포트의 80% 지점에서 시작
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <div
      ref={sectionRef}
      className="gsap-div w-full h-full min-h-80 bg-white break-keep"
    >
      {children}
    </div>
  );
}
