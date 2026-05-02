import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CustomCursor from './components/CustomCursor';
import CurvedLoop from './components/CurvedLoop';
import Experience from './components/Experience';
import Showcase from './components/Showcase';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#1D57AF] text-white">
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
      <Experience />
      <Projects />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
