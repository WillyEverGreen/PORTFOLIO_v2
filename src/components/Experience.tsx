import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import experienceImg from '../assets/experience.png';

const experiences = [
  {
    role: "Frontend Intern",
    company: "XIRCLS",
    date: "December 2025 – Present",
    description: [
      "Working on a CRM-based web platform, focusing on building and improving frontend user interfaces.",
      "Developing responsive and reusable UI components using modern frontend technologies.",
      "Collaborating with backend and product teams to integrate frontend components with CRM workflows.",
      "Improving usability and consistency across dashboards, forms, and data-driven views."
    ],
    skills: ["React.js", "UI/UX", "Frontend Architecture"]
  },
  {
    role: "Technical Member",
    company: "Project Cell",
    date: "August 2025 – Present",
    description: [
      "Developed ESP32-based mini-games, automation tools using Playwright.",
      "Designed and developed the Project Cell website using Next.js, focusing on performance, responsiveness, and clean UI.",
      "Collaborated in a team environment to design, implement, and test functional prototypes."
    ],
    skills: ["Next.js", "Playwright", "ESP32", "Teamwork"]
  }
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="experience" className="relative min-h-screen w-full bg-white text-[#0a1128] pt-48 pb-24 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          
          {/* LEFT SIDE: Timeline */}
          <div className="w-full lg:w-3/5 flex flex-col items-start pr-0 lg:pr-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-[#21346e]"></div>
              <span className="font-rubik uppercase tracking-[0.2em] text-sm text-[#21346e] font-bold">Career</span>
            </div>
            
            <h2 className="font-rubik font-bold uppercase text-[#0a1128] text-5xl md:text-7xl leading-[0.95] tracking-[-2px] md:tracking-[-3px] mb-16">
              PAST <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#21346e] to-[#42599c]">EXPERIENCES</span>
            </h2>

            <div className="relative border-l-2 border-[#e2e8f0] ml-3 md:ml-4 space-y-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className="relative pl-8 md:pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute w-6 h-6 bg-white border-4 border-[#21346e] rounded-full -left-[13px] top-1 shadow-md"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2 gap-2">
                    <h3 className="font-rubik font-bold text-2xl md:text-3xl text-[#0f172a]">{exp.role}</h3>
                    <span className="font-rubik text-sm font-medium text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.date}
                    </span>
                  </div>
                  
                  <h4 className="font-rubik text-xl text-[#3b82f6] font-medium mb-6">{exp.company}</h4>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="font-rubik text-[#475569] leading-relaxed flex items-start gap-3">
                        <span className="text-[#3b82f6] mt-1.5 text-lg leading-none">•</span>
                        <span className="opacity-90">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="font-rubik text-xs font-semibold tracking-wider uppercase text-[#1e293b] border border-[#cbd5e1] px-3 py-1 rounded-md bg-white hover:bg-[#f1f5f9] transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* RIGHT SIDE: Image & Cool Element */}
          <div className="w-full lg:w-2/5 flex flex-col gap-12 relative">
            {/* Top Right: Image */}
            <motion.div 
              style={{ y: y1 }}
              className="relative w-full flex items-center justify-center"
            >
              <img 
                src={experienceImg} 
                alt="Experience visual" 
                className="relative z-10 w-full max-w-[450px] lg:max-w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(33,52,110,0.15)] transition-transform duration-1000 hover:scale-105"
              />
              
              {/* Subtle ambient glow behind image to enhance 3D feel without framing */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-300/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
