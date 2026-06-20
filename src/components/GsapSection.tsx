import { useRef } from "react";

export default function GsapSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className="gsap-div w-full h-full min-h-80 bg-white break-keep"
    >
      {children}
    </div>
  );
}
