"use client";
import { useEffect, useRef } from "react";
import { Code, Layout, Cpu, Zap } from "lucide-react";

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

  const RADIUS = 220; // Matches a 440px dashed circle

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

        const x = RADIUS * Math.cos(radian);
        const y = RADIUS * Math.sin(radian);
        
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
      className="w-full h-full min-h-[550px] flex flex-col items-center justify-center relative pointer-events-none"
      ref={containerRef}
    >
      <div className="relative w-full max-w-2xl h-full flex items-center justify-center">
        
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* Center Glowing Core */}
          <div className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-indigo-400 to-purple-500 animate-pulse flex items-center justify-center z-10 shadow-[0_0_40px_rgba(59,130,246,0.4)]">
            <div className="absolute w-24 h-24 rounded-full border border-blue-400/30 animate-ping opacity-70"></div>
            <div
              className="absolute w-32 h-32 rounded-full border border-indigo-400/20 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-10 h-10 rounded-full bg-white backdrop-blur-md shadow-inner"></div>
          </div>

          {/* Outer Dashed Orbit Circle (440px diameter -> 220px radius) */}
          <div className="absolute w-[440px] h-[440px] rounded-full border border-slate-300 border-dashed opacity-50"></div>

          {/* Orbiting Nodes */}
          {timelineData.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute flex flex-col items-center justify-center transition-opacity duration-300"
              >
                {/* Node Icon */}
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-slate-700 shadow-lg border-2 border-slate-200">
                  <Icon size={20} />
                </div>

                {/* Node Title */}
                <div className="absolute top-14 whitespace-nowrap text-sm font-bold tracking-wider text-slate-600 bg-white/80 px-2 py-1 rounded-md backdrop-blur-sm shadow-sm">
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
