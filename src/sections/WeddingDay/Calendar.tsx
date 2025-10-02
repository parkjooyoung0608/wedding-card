export default function Calendar() {
  return (
    <div className="font-normal grid grid-cols-7 gap-y-6 text-center">
      {/* 요일 */}
      <div className="gsap-opacity text-red-400">일</div>
      <div className="gsap-opacity">월</div>
      <div className="gsap-opacity">화</div>
      <div className="gsap-opacity">수</div>
      <div className="gsap-opacity">목</div>
      <div className="gsap-opacity">금</div>
      <div className="gsap-opacity">토</div>

      {/* 빈 칸 (1일 시작 전) */}
      <div></div>

      {/* 날짜 */}
      <div className="px-2 py-1 gsap-opacity">1</div>
      <div className="px-2 py-1 gsap-opacity">2</div>
      <div className="px-2 py-1 gsap-opacity">3</div>
      <div className="px-2 py-1 gsap-opacity">4</div>
      <div className="px-2 py-1 gsap-opacity">5</div>
      <div className="px-2 py-1 gsap-opacity text-sky-700">6</div>
      <div className="px-2 py-1 gsap-opacity text-red-400">7</div>
      <div className="px-2 py-1 gsap-opacity ">8</div>
      <div className="px-2 py-1 gsap-opacity">9</div>
      <div className="px-2 py-1 gsap-opacity">10</div>
      <div className="px-2 py-1 gsap-opacity">11</div>
      <div className="px-2 py-1 gsap-opacity">12</div>
      <div className="flex justify-center gsap-opacity gsap-opacity">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-brand text-white font-extralight">
          13
        </div>
      </div>
      <div className="px-2 py-1 gsap-opacity text-red-400">14</div>
      <div className="px-2 py-1 gsap-opacity">15</div>
      <div className="px-2 py-1 gsap-opacity">16</div>
      <div className="px-2 py-1 gsap-opacity">17</div>
      <div className="px-2 py-1 gsap-opacity">18</div>
      <div className="px-2 py-1 gsap-opacity">19</div>
      <div className="px-2 py-1 gsap-opacity text-sky-700">20</div>
      <div className="px-2 py-1 gsap-opacity text-red-400">21</div>
      <div className="px-2 py-1 gsap-opacity">22</div>
      <div className="px-2 py-1 gsap-opacity">23</div>
      <div className="px-2 py-1 gsap-opacity">24</div>
      <div className="px-2 py-1 gsap-opacity">25</div>
      <div className="px-2 py-1 gsap-opacity">26</div>
      <div className="px-2 py-1 gsap-opacity text-sky-700">27</div>
      <div className="px-2 py-1 gsap-opacity text-red-400">28</div>
      <div className="px-2 py-1 gsap-opacity">29</div>
      <div className="px-2 py-1 gsap-opacity">30</div>

      {/* 남은 빈 칸 */}
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
