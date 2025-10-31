import Play from "@/components/Play";
import Hero from "@/sections/Hero";
// import GreetingMessage from "@/sections/GreetingMessage";
import WeddingDay from "@/sections/WeddingDay";
import AboutUs from "@/sections/AboutUs";
import Timeline from "@/sections/Timeline";
import Gallery from "@/sections/Gallery";
import Location from "@/sections/Location";
import Donation from "@/sections/Donation";
import GuestBook from "@/sections/GuestBook";
// import RSVP from "@/sections/RSVP";
import Share from "@/sections/Share";
import "./App.css";

declare global {
  interface Window {
    Kakao: KakaoNamespace;
  }

  interface KakaoNamespace {
    init: (key: string) => void;
    isInitialized: () => boolean;
    Share: {
      sendDefault: (options: KakaoShareOptions) => void;
    };
  }

  interface KakaoShareOptions {
    objectType: "feed" | "text" | "list" | "location" | "commerce" | "custom";
    content: {
      title: string;
      description?: string;
      imageUrl?: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    };
    buttons?: {
      title: string;
      link: {
        mobileWebUrl: string;
        webUrl: string;
      };
    }[];
  }
}

if (
  typeof window !== "undefined" &&
  window.Kakao &&
  !window.Kakao.isInitialized()
) {
  window.Kakao.init(import.meta.env.VITE_KAKAO_API_KEY);
}

function App() {
  return (
    <div className="md:py-12 md:rounded-3xl">
      <div className="flex flex-col justify-center h-full max-w-md mx-auto md:rounded-3xl shadow-xl w-[100vw] lg:w-[400px] relative bg-white font-suit">
        <Play />
        <Hero />
        {/* <GreetingMessage /> */}
        <WeddingDay />
        <AboutUs />
        <Timeline />
        <Gallery />
        <Location />
        <Donation />
        <GuestBook />
        {/* <RSVP /> */}
        <Share />
      </div>
    </div>
  );
}

export default App;
