import GsapSection from "@/components/GsapSection";
import SectionTitle from "@/components/SectionTitle";
import Item from "@/sections/Timeline/Item";
import groomProfile from "@/assets/Images/groom-profile.png";
import type { ITimelineItem } from "@/@Interface";

const timelineList: ITimelineItem[] = [
  {
    image: groomProfile,
    date: "22년 3월, 서울",
    title: "☕️ 운명 같은 첫 인연",
    desc: "서로 애정하던 카페에서\n첫눈에 반한 우리",
    flexPosition: "flex-row",
    textPosition: "text-left",
  },
  {
    image: groomProfile,
    date: "연애 기간 1,280일",
    title: "💕 행복했던 3년 반",
    desc: "항상 대화와 웃음이 머물던\n여러 계절들의 우리",
    flexPosition: "flex-row-reverse",
    textPosition: "text-right",
  },
  // {
  //   image: groomProfile,
  //   date: "첫 데이트 장소에서",
  //   title: "💍 프로포즈",
  //   desc: "준비는 오래, 대답은 짧게.\n“YES!”",
  //   flexPosition: "flex-row",
  //   textPosition: "text-left",
  // },
  {
    image: groomProfile,
    date: "26년 6월 13일, 서울",
    title: "👰‍♀️🤵 웨딩데이",
    desc: "이제는 둘이 아닌\n하나로 걷기 시작하는 날",
    flexPosition: "flex-row",
    textPosition: "text-left",
  },
];

export default function Timeline() {
  return (
    <GsapSection>
      <SectionTitle
        title="OUR TIMELINE"
        descFirst="저희 연애의 타임라인입니다"
        descSecond="서로에게 참 소중하고 감사한 존재"
      >
        <div className="w-full flex flex-col gap-16 relative">
          {/* 가운데 세로 라인 */}
          <div className="w-px h-full absolute left-1/2 transform -translate-x-1/2 pb-12 z-0">
            <div className="absolute left-1/2 top-0 bottom-0 transform -translate-x-1/2">
              <div className="timeline-line w-px h-full bg-[#ccc]" />
            </div>
          </div>
          {/* 타임라인 아이템 */}
          {timelineList.map((item) => (
            <Item
              key={item.date}
              image={item.image}
              date={item.date}
              title={item.title}
              desc={item.desc}
              flexPosition={item.flexPosition}
              textPosition={item.textPosition}
            />
          ))}
        </div>
      </SectionTitle>
    </GsapSection>
  );
}
