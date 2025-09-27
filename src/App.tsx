import Hero from "@/sections/Hero";
import Play from "@/components/Play";
import "./App.css";

function App() {
  return (
    <div className="md:py-12 md:rounded-3xl">
      <div className="flex flex-col justify-center h-full max-w-md mx-auto md:rounded-3xl shadow-xl lg:w-[400px] relative bg-white font-suit">
        <Play />
        <Hero />
      </div>
    </div>
  );
}

export default App;
