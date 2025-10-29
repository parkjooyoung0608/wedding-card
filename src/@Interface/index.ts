import type { Timestamp } from "firebase/firestore";

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
  hasCopy?: boolean;
  hasPhone?: boolean;
  phoneNumber?: string;
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

interface IGalleryModal {
  modalIndex: number;
  closeModal: (e: React.MouseEvent) => void;
  showPrev: (e: React.MouseEvent) => void;
  showNext: (e: React.MouseEvent) => void;
}

interface IKakaoPayIcon {
  width?: number;
  height?: number;
  fill?: string;
}

interface IMessage {
  id: string;
  name: string;
  password: string;
  message: string;
  createdAt?: Timestamp | null;
}

interface IDeleteModal {
  docId: string;
  docPassword: string;
  showToast: (msg: string) => void;
  onSuccess?: () => void;
  onClose: () => void;
}

export type {
  TPolaroidMode,
  IPolaroid,
  ISectionTitle,
  ITimelineItem,
  IGalleryModal,
  IKakaoPayIcon,
  IMessage,
  IDeleteModal,
};
