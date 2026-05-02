"use client";
import { useEffect, useRef } from "react";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const rotationAngleRef = useRef(0);
  const radiusRef = useRef(220); // Default to 220 for desktop

  useEffect(() => {
    const handleResize = () => {
      // 140 for mobile (280px diameter), 220 for desktop (440px diameter)
      radiusRef.current = window.innerWidth < 640 ? 140 : 220;
    };
    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      
      // Speed multiplier: 0.02 = ~20 degrees per second (smooth visible orbit)
      rotationAngleRef.current = (rotationAngleRef.current + deltaTime * 0.02) % 360;

      timelineData.forEach((item, index) => {
        const node = nodeRefs.current[item.id];
        if (!node) return;

        const angle = ((index / timelineData.length) * 360 + rotationAngleRef.current) % 360;
        const radian = (angle * Math.PI) / 180;

        const currentRadius = radiusRef.current;
        const x = currentRadius * Math.cos(radian);
        const y = currentRadius * Math.sin(radian);
        
        const zIndex = Math.round(100 + 50 * Math.cos(radian));
        const opacity = Math.max(0.3, Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2)));

        node.style.transform = `translate(${x}px, ${y}px)`;
        node.style.zIndex = `${zIndex}`;
        node.style.opacity = `${opacity}`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [timelineData]);

  return (
    <div
      className="w-full h-full min-h-[400px] sm:min-h-[550px] flex flex-col items-center justify-center relative pointer-events-none"
      ref={containerRef}
    >
      <div className="relative w-full max-w-2xl h-full flex items-center justify-center overflow-visible">
        
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center Glowing Core */}
          <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500 animate-pulse flex items-center justify-center z-10 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
            <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-blue-400/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-indigo-400/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white backdrop-blur-md shadow-inner"></div>
          </div>

          {/* Outer Dashed Orbit Circle */}
          <div className="absolute w-[280px] h-[280px] sm:w-[440px] sm:h-[440px] rounded-full border border-slate-300 border-dashed opacity-50"></div>

          {/* Orbiting Nodes */}
          {timelineData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => { nodeRefs.current[item.id] = el; }}
                className="absolute flex flex-col items-center justify-center transition-opacity duration-300"
              >
                {/* Node Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white text-slate-700 shadow-lg border-2 border-slate-200">
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </div>

                {/* Node Title */}
                <div className="absolute top-12 sm:top-14 whitespace-nowrap text-xs sm:text-sm font-bold tracking-wider text-slate-600 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
                  {item.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
