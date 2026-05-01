import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import CurvedLoop from './components/CurvedLoop';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#21346e] text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <CurvedLoop 
        marqueeText="LESS TALK ✦ MORE BUILD ✦ INNOVATIVE DESIGN ✦ FLAWLESS PERFORMANCE ✦ " 
        speed={1.5}
        curveAmount={350}
        direction="left"
      />
    </div>
  );
}

export default App;
