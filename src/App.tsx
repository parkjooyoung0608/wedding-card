import Play from "@/components/Play";
import Hero from "@/sections/Hero";
import GreetingMessage from "@/sections/GreetingMessage";
import WeddingDay from "@/sections/WeddingDay";
import AboutUs from "@/sections/AboutUs";
import Timeline from "@/sections/Timeline";
import Gallery from "@/sections/Gallery";
import Location from "@/sections/Location";
import "./App.css";

function App() {
  return (
    <div className="md:py-12 md:rounded-3xl">
      <div className="flex flex-col justify-center h-full max-w-md mx-auto md:rounded-3xl shadow-xl w-[100vw] lg:w-[400px] relative bg-white font-suit">
        <Play />
        <Hero />
        <GreetingMessage />
        <WeddingDay />
        <AboutUs />
        <Timeline />
        <Gallery />
        <Location />
      </div>
    </div>
  );
}

export default App;
