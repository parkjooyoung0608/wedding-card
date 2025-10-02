import type { ISectionTitle } from "@/@Interface";

export default function SectionTitle({
  title,
  descFirst,
  descSecond,
  children,
  bgColor,
}: ISectionTitle) {
  return (
    <div
      className="flex flex-col items-center justify-center h-full gsap-div min-h-80 py-20 px-4"
      style={{ backgroundColor: bgColor }}
    >
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
