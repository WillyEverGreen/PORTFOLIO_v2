import StackingCards from './ui/stacking-card';
import projectsImg from '../assets/projects.png';

const projects = [
  {
    title: 'SpaceScope — Cosmic Navigator',
    description:
      'Your Personal Window to the Cosmos — Track satellites, predict cosmic events, and explore space in real-time with stunning AR visualizations. Features ISS Tracker, Space Weather, NASA APOD, 3D Earth Globe with Three.js, and AR Sky View.',
    link: '/projects-images/spacescope.png',
    url: 'https://space-scope-lqli.vercel.app',
    color: '#0a1128',
    tag: 'React · Three.js · Framer Motion',
  },
  {
    title: 'JOURNI AI — AI Trip Planner',
    description:
      'Your Personal AI Travel Companion — Plan the perfect trip in seconds with intelligent itinerary generation powered by Qubrid AI (Mistral 7B). Features real-time Google Places search, hotel recommendations, restaurant suggestions, and secure Auth0 authentication with Firebase.',
    link: '/projects-images/ai-trip-planner.png',
    url: 'https://journi-ai-ai-trip-planner-anzy.vercel.app/',
    color: '#1a1a1a',
    tag: 'AI · React · Firebase',
  },
  {
    title: 'ReCode — DSA Solution Generator',
    description:
      'A modern web application that helps developers master Data Structures and Algorithms through AI-powered solution generation and smart revision tracking. Features multi-tier caching with Redis and MongoDB, brute force to optimal solutions, and comprehensive admin dashboard.',
    link: '/projects-images/recode.png',
    url: 'https://re-code-v1.vercel.app',
    color: '#121212',
    tag: 'DSA · AI · MongoDB',
  },
  {
    title: 'LEGAL_AI — Legal AI Platform',
    description:
      'A legal AI platform that analyzes statutes, extracts key factors, and drafts balanced memos. Cross-references IPC/BNS mappings and supports cross-jurisdiction research.',
    link: '/projects-images/legal-ai.png',
    url: 'https://legal-ai-gateway.onrender.com/',
    color: '#0a1a30',
    tag: 'AI · LegalTech · RAG',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white relative overflow-x-clip">
      <div className="container mx-auto px-6 pt-12 lg:pt-16 pb-2 lg:pb-4">
        {/* Mobile: show image above text on small devices */}
        <div className="md:hidden w-full flex justify-center mb-6">
          <img src={projectsImg} alt="Projects illustration" className="w-full max-w-xs md:max-w-none object-contain drop-shadow-[0_28px_60px_rgba(14,27,68,0.14)]" />
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-16 w-full">
          {/* Text block: left on desktop, order on mobile ensures image above */}
          <div className="md:w-1/2 w-full order-2 md:order-1 text-center md:text-left">
            <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
              <div className="h-[2px] w-12 bg-[#1D57AF]" />
              <span className="font-rubik uppercase tracking-[0.2em] text-sm text-[#1D57AF] font-bold">
                Work
              </span>
            </div>

            <h2 className="font-rubik font-bold uppercase text-[#0a1128] text-5xl md:text-7xl leading-[0.95] tracking-[-2px] md:tracking-[-3px] mb-4">
              SELECTED <br />
              <span className="text-[#3559b7]">PROJECTS</span>
            </h2>

            <p className="mt-6 text-lg text-slate-500 font-light max-w-xl mb-6 md:mb-0 text-left mx-auto md:mx-0">
              Scroll through a selection of things I've built — from AI-powered platforms to open source contributions.
            </p>
          </div>

          {/* Desktop illustration: visible on md and up; mobile shows above via separate block */}
          <div className="md:w-1/2 w-full order-1 md:order-2 mb-6 md:mb-0 hidden md:flex items-center justify-center">
            <img src={projectsImg} alt="Projects illustration" className="w-full h-auto object-contain drop-shadow-[0_28px_60px_rgba(14,27,68,0.14)] max-w-md" />
          </div>
        </div>

      
      </div>

      <div className="mt-8 md:mt-12">
        <StackingCards projects={projects} />
      </div>
    </section>
  );
}
