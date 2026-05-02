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
    <section id="projects" className="w-full bg-white relative overflow-x-clip">
      <div className="container mx-auto px-6 py-12 lg:py-16">
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

      <div className="-mt-20 md:-mt-16">
        <StackingCards projects={projects} />
      </div>
    </section>
  );
}
