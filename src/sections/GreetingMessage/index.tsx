import { useSectionVersion } from "@/context/sectionVersion";
import GreetingMessageV1 from "@/sections/GreetingMessage/versions/V1";
import GreetingMessageV2 from "@/sections/GreetingMessage/versions/V2";

/** 인사말 - 선택된 버전을 렌더 */
export default function GreetingMessage() {
  const version = useSectionVersion("greetingMessage");
  return version === "v2" ? <GreetingMessageV2 /> : <GreetingMessageV1 />;
}
