import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date("2026-06-13T11:00:00"); // 2026년 6월 13일 오전 11시
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderItem = (value: number, label: string) => (
    <div className="flex-grow w-full py-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center font-extralight gap-y-3">
        <div className="text-2xl">{value}</div>
        <div className="uppercase text-[#999999] text-xs">{label}</div>
      </div>
    </div>
  );

  return (
    <>
      <div className="gsap-item flex justify-center w-full gap-x-2 gsap-opacity">
        {renderItem(timeLeft.days, "days")}
        {renderItem(timeLeft.hours, "hours")}
        {renderItem(timeLeft.minutes, "minutes")}
        {renderItem(timeLeft.seconds, "seconds")}
      </div>
      <div className="gsap-item py-8">
        상균 ♥️ 지연 결혼식이{" "}
        <span className="text-[#6b99b0]">{timeLeft.days + 1}일</span>{" "}
        남았습니다.
      </div>
    </>
  );
}
