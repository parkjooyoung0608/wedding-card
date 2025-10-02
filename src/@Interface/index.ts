type TPolaroidMode = "bride" | "groom";

interface IPolaroid {
  mode: TPolaroidMode;
  birthDate: string;
  tagline: string;
}

interface ISectionTitle {
  title: string;
  descFirst: string;
  descSecond?: string;
  children: React.ReactNode;
  bgColor: string;
}

interface ITimelineItem {
  image: string;
  date: string;
  title: string;
  desc: string;
  flexPosition: "flex-row" | "flex-row-reverse";
  textPosition: "text-left" | "text-right";
}

export type { TPolaroidMode, IPolaroid, ISectionTitle, ITimelineItem };
