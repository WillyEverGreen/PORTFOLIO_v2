'use client';
import { useTransform, motion, useScroll, MotionValue } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface ProjectData {
  title: string;
  description: string;
  link: string;
  color: string;
  tag: string;
  url?: string;
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  url: string;
  color: string;
  tag: string;
  link: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export const Card = ({
  i,
  title,
  description,
  url,
  color,
  tag,
  link,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="flex flex-col relative h-[650px] w-[94%] max-w-[1400px] rounded-3xl p-8 md:p-12 origin-top shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white overflow-hidden"
      >
        {/* Top Section: Title and Tag */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#1D57AF] brightness-150">
              {tag}
            </span>
            <h2 className="text-4xl md:text-6xl font-bold font-rubik tracking-tighter leading-[0.9]">
              {title}
            </h2>
          </div>
        </div>

        {/* Main Content: Split Layout */}
        <div className="flex flex-col md:flex-row h-full gap-8 md:gap-16">
          {/* Left: Description and CTA */}
          <div className="w-full md:w-[40%] flex flex-col justify-start md:justify-end pb-4 gap-6">
            <p className="text-base md:text-xl leading-relaxed opacity-70 font-light max-w-md">
              {description}
            </p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 font-bold text-sm md:text-base tracking-tight hover:gap-5 transition-all duration-300 w-fit"
            >
              <span className="border-b-2 border-white/30 group-hover:border-white pb-1">
                DISCOVER PROJECT
              </span>
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          {/* Right: Image Showcase */}
          <div className="relative w-full md:w-[65%] h-[420px] md:h-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
            <motion.div className="w-full h-full" style={{ scale: imageScale }}>
              <img
                src={url}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface StackingCardsProps {
  projects: ProjectData[];
}

export default function StackingCards({ projects }: StackingCardsProps) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <main ref={container} className="bg-white">
      <section className="w-full bg-white pb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              link={project.url ?? '#'}
              title={project.title}
              color={project.color}
              tag={project.tag}
              description={project.description}
              progress={scrollYProgress}
              range={[i * (1 / projects.length), 1]}
              targetScale={targetScale}
            />
          );
        })}
      </section>
    </main>
  );
}
