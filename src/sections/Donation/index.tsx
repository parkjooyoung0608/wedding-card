import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Title from "@/sections/Donation/Title";
import AccountCard from "@/sections/Donation/AccountCard";
import GsapSection from "@/components/GsapSection";

export default function Donation() {
  const [openSection, setOpenSection] = useState<"groom" | "bride" | null>(
    null
  );

  const toggleSection = (section: "groom" | "bride") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <GsapSection>
      <div className="gsap-item flex flex-col justify-center h-full min-h-96 py-20 bg-[#F8F8F8] px-8 ">
        <div className="flex justify-center my-8">
          <svg
            width="60"
            height="1"
            viewBox="0 0 60 1"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="0.5" x2="60" y2="0.5" stroke="black"></line>
          </svg>
        </div>

        <Title />

        <div className="gsap-item mt-4 rounded-lg">
          <div className="w-full">
            <div className="border-b border-none rounded-lg shadow-md">
              <h3 className="flex">
                <button
                  type="button"
                  onClick={() => toggleSection("groom")}
                  className="flex flex-1 items-center justify-between font-medium shadow-sm hover:rounded-md bg-white border-none rounded-lg p-4 text-sm h-[3.75rem] hover:bg-white"
                >
                  신랑측에게
                  {openSection === "groom" ? <ChevronUp /> : <ChevronDown />}
                </button>
              </h3>
              {openSection === "groom" && <AccountCard mode="groom" />}
            </div>

            <div className="border-b border-none rounded-lg shadow-md mt-3 bg-brandLight">
              <h3 className="flex">
                <button
                  type="button"
                  onClick={() => toggleSection("bride")}
                  className="flex flex-1 items-center justify-between font-medium shadow-sm hover:rounded-md bg-white border-none rounded-lg p-4 text-sm h-[3.75rem] hover:bg-white"
                >
                  신부측에게
                  {openSection === "bride" ? <ChevronUp /> : <ChevronDown />}
                </button>
              </h3>
              {openSection === "bride" && <AccountCard mode="bride" />}
            </div>
          </div>
        </div>
      </div>
    </GsapSection>
  );
}
