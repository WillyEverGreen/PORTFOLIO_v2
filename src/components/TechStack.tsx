import { TechAccordion, type TechCategory } from './ui/tech-accordion';

const categories: TechCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: [
      { slug: 'react', name: 'React', color: '61DAFB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { slug: 'nextdotjs', name: 'Next.js', color: '000000', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { slug: 'typescript', name: 'TypeScript', color: '3178C6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { slug: 'tailwindcss', name: 'Tailwind CSS', color: '06B6D4', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { slug: 'framer', name: 'Framer Motion', color: '0055FF', iconUrl: 'https://cdn.simpleicons.org/framer/0055FF' },
      { slug: 'html5', name: 'HTML5', color: 'E34F26', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { slug: 'css3', name: 'CSS3', color: '1572B6', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { slug: 'javascript', name: 'JavaScript', color: 'F7DF1E', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & DB',
    items: [
      { slug: 'nodedotjs', name: 'Node.js', color: '339933', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { slug: 'express', name: 'Express', color: '000000', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { slug: 'mongodb', name: 'MongoDB', color: '47A248', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { slug: 'redis', name: 'Redis', color: 'DC382D', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg' },
      { slug: 'firebase', name: 'Firebase', color: 'FFCA28', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { slug: 'socketdotio', name: 'Socket.io', color: '010101', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg' },
      { slug: 'python', name: 'Python', color: '3776AB', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { slug: 'c', name: 'C', color: 'A8B9CC', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Cloud',
    items: [
      { slug: 'git', name: 'Git', color: 'F05032', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { slug: 'github', name: 'GitHub', color: '181717', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { slug: 'docker', name: 'Docker', color: '2496ED', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { slug: 'playwright', name: 'Playwright', color: '2EAD33', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg' },
      { slug: 'postman', name: 'Postman', color: 'FF6C37', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg' },
      { slug: 'vercel', name: 'Vercel', color: '000000', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg' },
      { slug: 'linux', name: 'Linux', color: 'FCC624', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { slug: 'visualstudiocode', name: 'VS Code', color: '007ACC', iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },
    ],
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="w-full bg-slate-50 py-24 md:py-32">
      <div className="container mx-auto">
        <TechAccordion
          subtitle="Skills & Tools"
          title="Technology Stack"
          description="A comprehensive toolkit I use to build scalable, high-performance applications from the ground up."
          ctaText="View GitHub Profile"
          categories={categories}
        />
      </div>
    </section>
  );
}