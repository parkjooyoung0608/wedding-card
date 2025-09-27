import React from "react";

export default function SectionTitle({
  title,
  descFirst,
  descSecond,
  children,
  bgColor,
}: {
  title: string;
  descFirst: string;
  descSecond?: string;
  children: React.ReactNode;
  bgColor: string;
}) {
  return (
    <div className="pt-20 px-4" style={{ backgroundColor: bgColor }}>
      <h1 className="gsap-item font-lora">{title}</h1>
      <div className="p-10">
        <p className="gsap-item mb-2">{descFirst}</p>
        {descSecond && (
          <p className="gsap-item font-[#111] font-light opacity-50 ">
            {descSecond}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}
