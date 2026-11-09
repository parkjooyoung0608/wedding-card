import greetingImage from "@/assets/Images/greeting-message.png";

/**
 * 인사말 V2 - 이미지형 (디자인 시안)
 */
export default function GreetingMessageV2() {
  return (
    <div className="w-full bg-white">
      <img
        alt="인사말"
        decoding="async"
        className="block w-full h-auto"
        src={greetingImage}
      />
    </div>
  );
}
