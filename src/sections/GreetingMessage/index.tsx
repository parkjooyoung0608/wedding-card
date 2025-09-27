import GsapSection from "@/components/GsapSection";

export default function GreetingMessage() {
  const messages = [
    "사람이 온다는 건 실은 어마어마한 일이다.",
    "그는 그의 과거와 현재와 그리고",
    "그의 미래와 함께 오기 때문이다.",
    "한 사람의 일생이 오기 때문이다.",
  ];

  const messages2 = [
    "저희 두 사람이 함께하는 새로운 시작에",
    "귀한 발걸음으로 축복해 주시면 감사하겠습니다.",
  ];

  return (
    <GsapSection>
      <div className="pt-14"></div>
      {messages.map((msg, index) => (
        <p key={msg + index} className="gsap-item h-[32px]">
          {msg}
        </p>
      ))}
      <p className="gsap-item p-10">- 정현종, '방문객'</p>
      {messages2.map((msg, index) => (
        <p key={msg + index} className="gsap-item h-[32px]">
          {msg}
        </p>
      ))}
      <p className="gsap-item p-10">신랑 김상균 · 신부 김지연</p>
    </GsapSection>
  );
}
