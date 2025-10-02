import type { ITimelineItem } from "@/@Interface";

export default function Item({
  image,
  date,
  title,
  desc,
  flexPosition,
  textPosition,
}: ITimelineItem) {
  return (
    <div className="relative gsap-item">
      <div
        className={`flex justify-between items-center relative ${flexPosition}`}
      >
        {/* 이미지 */}
        <div
          className={`w-1/2 flex items-center ${
            flexPosition === "flex-row" ? "pr-6" : "pl-6"
          } `}
        >
          <div className="relative aspect-square w-full gsap-opacity">
            <img
              alt="cover_image"
              fetchPriority="high"
              decoding="async"
              data-nimg="fill"
              className="absolute object-cover w-full h-full md:rounded-t-3xl filter brightness-75"
              src={image}
              style={{ inset: "0px", color: "transparent" }}
            ></img>
          </div>
        </div>

        {/* 텍스트 */}
        <div
          className={`w-1/2 space-y-4 text-sm flex flex-col  ${textPosition} ${
            flexPosition === "flex-row" ? "pl-6 items-start" : "pr-6 items-end"
          }`}
        >
          <div className="relative">
            {/* 날짜 + 도트 */}
            <p className="font-semibold text-white px-2.5 py-1 rounded-full w-fit gsap-opacity bg-brand">
              {date}
            </p>
            {/* 도트: 중앙 선 기준 */}
            <div
              className="absolute top-1/2 -translate-y-1/2 bg-[#fafafa] py-1 z-20 left-auto"
              style={
                flexPosition === "flex-row"
                  ? { right: "calc(100% - 6px + 1.5rem)" }
                  : { left: "calc(100% - 6px + 1.5rem)" }
              }
            >
              <div className="w-3 h-3 rounded-full bg-brand border-2 border-white shadow-md" />
            </div>
          </div>

          {/* 설명 */}
          <div className="space-y-3 gsap-opacity">
            <p className="font-bold text-tog-444 ">{title}</p>
            <p className="text-gray-500 whitespace-pre-wrap">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
