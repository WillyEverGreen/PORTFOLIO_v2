import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import VariableProximity from './VariableProximity';

const About: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "center center"]
  });

  // Scroll-linked transformations
  const scaleMain = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const opacityMain = useTransform(scrollYProgress, [0, 1], [0, 1]);
  
  const xTR = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const yTR = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  
  const xBR = useTransform(scrollYProgress, [0, 1], [50, 0]);
  const yBR = useTransform(scrollYProgress, [0, 1], [50, 0]);
  
  const xBL = useTransform(scrollYProgress, [0, 1], [-50, 0]);
  const yBL = useTransform(scrollYProgress, [0, 1], [50, 0]);

  return (
    <section ref={containerRef} id="about" className="relative min-h-screen w-full bg-white text-[#0a1128] overflow-x-clip flex items-center justify-center">
      {/* Animated SVG Blob Decorations tied to scroll */}
      <div className="absolute top-0 left-0 w-full h-full overflow-x-clip overflow-y-visible z-0 pointer-events-none">
        
        {/* Top Right Blob (Dark Blue) */}
        <motion.div 
          style={{ scale: scaleMain, opacity: opacityMain, x: xTR, y: yTR }}
          className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-[150px] h-[150px] md:w-[250px] md:h-[250px] text-[#0d3b8e] z-0 origin-center"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor">
            <path d="M48.7,-64.3C61.4,-53.8,68.9,-36.8,70.6,-19.7C72.3,-2.6,68.2,14.6,58.8,28.6C49.4,42.6,34.7,53.4,18.4,60.5C2.1,67.6,-15.8,71,-30.7,66.1C-45.6,61.2,-57.5,48,-65.4,32.7C-73.3,17.4,-77.2,0,-74.6,-16.1C-72,-32.2,-62.9,-47,-49.6,-57.2C-36.3,-67.4,-18.2,-73.1,-0.1,-73C18,-72.9,36,-67.2,48.7,-64.3Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        {/* Top Right Small Droplet */}
        <motion.div 
          style={{ scale: scaleMain, opacity: opacityMain }}
          className="absolute top-[8%] right-[8%] md:top-[12%] md:right-[12%] w-[25px] h-[25px] md:w-[40px] md:h-[40px] text-[#0d3b8e] z-0 origin-center"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor">
            <path d="M44.7,-64.9C57.6,-56.3,67.6,-42.6,72.7,-27.2C77.8,-11.8,78.1,5.3,73.2,20.8C68.3,36.3,58.2,50.2,44.7,59.3C31.2,68.4,14.3,72.7,-2,75.4C-18.3,78.1,-36.5,79.2,-50.2,70.2C-63.9,61.2,-73.1,42.1,-77.8,22.2C-82.5,2.3,-82.7,-18.4,-75.2,-35.1C-67.7,-51.8,-52.5,-64.5,-36.6,-71.4C-20.7,-78.3,-4.1,-79.4,11,-75C26.1,-70.6,42.2,-60.7,44.7,-64.9Z" transform="translate(100 100)" />
          </svg>
        </motion.div>

        {/* Bottom Right Blob (Dark Blue) */}
        <motion.div 
          style={{ scale: scaleMain, opacity: opacityMain, x: xBR, y: yBR }}
          className="absolute -bottom-12 -right-12 md:-bottom-20 md:-right-20 w-[120px] h-[120px] md:w-[200px] md:h-[200px] text-[#0d3b8e] z-0 origin-center"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor">
            <path d="M43.6,-66.2C56.6,-58.5,67.3,-46.1,72.9,-31.6C78.5,-17.1,79,-0.6,73.5,13.6C68,27.8,56.5,39.7,43.3,47.9C30.1,56.1,15.1,60.6,1.2,59.1C-12.7,57.6,-25.4,50.1,-38.4,41.9C-51.4,33.7,-64.7,24.8,-69.5,12.3C-74.3,-0.2,-70.6,-16.3,-62.2,-29C-53.8,-41.7,-40.7,-51,-27.1,-58.4C-13.5,-65.8,0.6,-71.3,15.3,-71.3C30,-71.3,44.7,-66.1,43.6,-66.2Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
        
        {/* Bottom Left Blob (Light Blue) */}
        <motion.div 
          style={{ scale: scaleMain, opacity: opacityMain, x: xBL, y: yBL }}
          className="absolute -bottom-10 -left-10 md:-bottom-16 md:-left-16 w-[150px] h-[150px] md:w-[250px] md:h-[250px] text-[#4a6cf7] z-0 origin-center"
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" fill="currentColor">
            <path d="M38.8,-53C51.6,-40.8,64.2,-30.3,71,-16.2C77.8,-2.1,78.8,15.6,70.9,30C63,44.4,46.2,55.5,28.8,61.8C11.4,68.1,-6.6,69.6,-22.7,64.4C-38.8,59.2,-53.1,47.3,-61.8,32.1C-70.5,16.9,-73.6,-1.6,-68.8,-17.2C-64,-32.8,-51.3,-45.5,-37.2,-57.1C-23.1,-68.7,-7.6,-79.2,3.7,-83.6C15,-88,30,-86.3,38.8,-53Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
          
          {/* Image/Visual Side */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg mx-auto">
              <img 
                src="/sculpture.png" 
                alt="Portrait" 
                className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.03]" 
              />
            </div>
          </div>
          
          {/* Text Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#1D57AF]"></div>
              <span className="font-rubik uppercase tracking-[0.2em] text-sm text-[#1D57AF] font-bold">Discover</span>
            </div>
            
            <h2 className="font-rubik font-bold uppercase text-[#0a1128] text-4xl sm:text-5xl md:text-7xl leading-[0.95] tracking-[-1px] md:tracking-[-3px] mb-8">
              ABOUT <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D57AF] to-[#42599c]">MY JOURNEY</span>
            </h2>
            
            <div className="text-lg text-[#1e293b] space-y-6 font-light leading-normal mb-10 max-w-2xl">
              <p>
                <VariableProximity
                  label="I am a passionate developer with a strong focus on creating high-impact, functional, and visually stunning web applications. I bridge the gap between complex engineering and elegant design to build products that not only look incredible but perform flawlessly."
                  containerRef={containerRef}
                  radius={120}
                  falloff="linear"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 900, 'opsz' 40"
                />
              </p>
              <p>
                <VariableProximity
                  label="With a deep understanding of modern web technologies, I love turning ambitious ideas into real, user-centric solutions. Every line of code I write is aimed at delivering a seamless digital experience."
                  containerRef={containerRef}
                  radius={120}
                  falloff="linear"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 900, 'opsz' 40"
                />
              </p>
            </div>
            
            {/* Custom CTA button styled for light mode */}
            <a 
              href="/RESUME_SAII.pdf" 
              download="Sai_Balkawade_Resume.pdf"
              className="relative flex items-center justify-center w-[200px] h-[60px] group transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer border-none outline-none bg-transparent p-0"
            >
              <svg
                className="absolute inset-0 w-full h-full drop-shadow-md text-[#1D57AF] transition-all duration-300 group-hover:text-[#1a2959]"
                viewBox="0 0 200 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 0 H200 V45 L185 60 H0 V15 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="relative z-10 font-rubik font-bold uppercase text-[18px] text-white tracking-wider">
                DOWNLOAD CV
              </span>
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
