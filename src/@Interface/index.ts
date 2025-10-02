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

export type { TPolaroidMode, IPolaroid, ISectionTitle };
