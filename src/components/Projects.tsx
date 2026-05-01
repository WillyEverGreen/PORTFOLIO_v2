import StackingCards from './ui/stacking-card';
import projectsImg from '../assets/projects.png';

const projects = [
  {
    title: 'Krushak — AgriTech Platform',
    description:
      'A full-stack mobile + web platform built for Indian farmers. Features AI-powered plant disease detection via Google Vision API, real-time weather alerts, crop reminders, livestock tracking, and multilingual support. Built with React Native, Node.js, MongoDB, and Redis.',
    link: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&auto=format&fit=crop&q=80',
    url: '#',
    color: '#1a1a1a',
    tag: 'Mobile · AI · Full Stack',
  },
  {
    title: 'AI Trip Planner',
    description:
      'An intelligent travel planning web app that generates personalised, real-time trip itineraries using Qubrid AI (Mistral 7B) and Google Maps API. Includes secure Auth0 authentication, cloud persistence via Firebase, and live hotel and dining recommendations.',
    link: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop&q=80',
    url: '#',
    color: '#262626',
    tag: 'Web · GenAI · Firebase',
  },
  {
    title: 'Open Source at Sugar Labs',
    description:
      'Active contributor to Sugar Labs — an educational open source platform used by children worldwide. Shipped real code fixes and improvements that directly impact learning experiences across the globe. Selected for the final round of BitNBuild International Hackathon.',
    link: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&auto=format&fit=crop&q=80',
    url: '#',
    color: '#333333',
    tag: 'Open Source · Community',
  },
  {
    title: 'DSA & Systems Engineering',
    description:
      'Solved 200+ DSA problems across LeetCode, Codeforces and GFG, strengthening core problem-solving and algorithmic thinking. Deep expertise in authentication systems, REST API design, Socket.io real-time communication, JWT, and embedded systems with C.',
    link: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=80',
    url: '#',
    color: '#121212',
    tag: 'DSA · Systems · Backend',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-white relative" style={{ overflowX: 'clip' }}>
      {/* Section Header */}
      <div className="w-full px-6 container mx-auto max-w-7xl flex flex-col justify-center min-h-[480px] lg:min-h-[520px] pt-32 pb-16">
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[2px] w-12 bg-[#1D57AF]"></div>
            <span className="font-rubik uppercase tracking-[0.2em] text-sm text-[#1D57AF] font-bold">Work</span>
          </div>
          <h2 className="font-rubik font-bold uppercase text-[#0a1128] text-5xl md:text-7xl leading-[0.95] tracking-[-2px] md:tracking-[-3px]">
            SELECTED <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D57AF] to-[#42599c]">PROJECTS</span>
          </h2>
          <p className="mt-6 text-lg text-slate-500 font-light max-w-xl">
            Scroll through a selection of things I've built — from AI-powered platforms to open source contributions.
          </p>
        </div>
      </div>

      {/* Image — absolutely pinned to extreme right, partially clipped */}
      <div className="hidden md:block absolute top-0 right-[120px] lg:right-[160px] w-[460px] h-[460px] lg:w-[520px] lg:h-[520px]">
        <img
          src={projectsImg}
          alt="Projects Decoration"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Stacking Cards */}
      <StackingCards projects={projects} />
    </section>
  );
}
