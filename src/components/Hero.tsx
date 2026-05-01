import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6;
    }
  }, []);

  return (
    <section className="relative min-h-screen bg-[#21346e] overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260206_044704_dd33cb15-c23f-4cfc-aa09-a0465d4dcb54.mp4"
      />

      {/* Optional Overlay for slightly better text contrast, if the video gets too bright */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-48 flex flex-col items-start justify-start h-full">
        <h1 className="font-rubik font-bold uppercase text-white flex flex-col text-6xl md:text-8xl lg:text-[100px] leading-[0.98] tracking-[-2px] md:tracking-[-4px] mb-6">
          <span>LESS TALK</span>
          <span>MORE BUILD</span>
        </h1>
        
        <p className="font-rubik text-lg md:text-xl text-white/80 max-w-xl mb-8 md:mb-12 tracking-wide font-light">
          Turning ideas into real, usable web applications.
        </p>

        {/* Custom CTA Button */}
        <button className="relative flex items-center justify-center w-[184px] h-[65px] group transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer border-none outline-none bg-transparent p-0">
          <svg
            className="absolute inset-0 w-full h-full drop-shadow-md"
            viewBox="0 0 184 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Custom Shape: Chamfered corners on top-left and bottom-right */}
            <path
              d="M15 0 H184 V50 L169 65 H0 V15 Z"
              fill="white"
            />
          </svg>
          <span className="relative z-10 font-rubik font-bold uppercase text-[20px] text-[#161a20] tracking-wide">
            GET STARTED
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
