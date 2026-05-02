import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface Tech {
  slug: string;
  name: string;
  color?: string;
  iconUrl?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  items: Tech[];
}

interface TechAccordionProps {
  subtitle?: string;
  title?: string;
  description: string;
  ctaText: string;
  categories: TechCategory[];
}

export function TechAccordion({
  subtitle,
  title,
  description,
  ctaText,
  categories,
}: TechAccordionProps) {
  const [openCategoryId, setOpenCategoryId] = useState<string | null>('frontend'); // Open first by default

  const toggleCategory = (id: string) => {
    setOpenCategoryId(prev => (prev === id ? null : id));
  };

  return (
    <main className="max-w-5xl w-full mx-auto font-sans antialiased px-4 sm:px-6">
      {(title || subtitle) && (
        <header className="text-center mb-12 sm:mb-16 space-y-2 flex flex-col items-center">
          {subtitle && (
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-14 bg-[#1D57AF]" />
              <span className="font-rubik text-sm font-bold uppercase tracking-[0.24em] text-[#1D57AF]">
                {subtitle}
              </span>
              <span className="h-px w-14 bg-[#1D57AF]" />
            </div>
          )}
          {title && (
            <h2 className="font-rubik text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-[-0.04em] text-[#07102b]">
              {title}
            </h2>
          )}
        </header>
      )}

      <section className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
        <div className="divide-y divide-slate-100">
          {categories.map((category) => (
            <CategoryRow
              key={category.id}
              category={category}
              isOpen={openCategoryId === category.id}
              onToggle={() => toggleCategory(category.id)}
            />
          ))}
        </div>
      </section>

      <footer className="mt-10 sm:mt-12 flex flex-col items-center gap-6 sm:gap-8">
        <p className="text-base md:text-lg text-slate-500 leading-relaxed text-center max-w-2xl px-2 font-light">
          {description}
        </p>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <CtaButton label={ctaText} />
        </a>
      </footer>
    </main>
  );
}

/* ─────────────────────────────────────────
   CTA
───────────────────────────────────────── */

function CtaButton({ label }: { label: string }) {
  return (
    <button className="relative flex items-center justify-center w-[250px] h-[60px] group transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer border-none outline-none bg-transparent p-0">
      <svg
        className="absolute inset-0 w-full h-full drop-shadow-md text-[#1D57AF] transition-all duration-300 group-hover:text-[#15428a]"
        viewBox="0 0 250 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 0 H250 V45 L235 60 H0 V15 Z"
          fill="currentColor"
        />
      </svg>
      <div className="relative z-10 flex items-center gap-3">
        <span className="font-rubik font-bold uppercase text-[15px] text-white tracking-wider">
          {label}
        </span>
        <span className="relative overflow-hidden flex items-center justify-center w-5 h-5">
          <ArrowRight
            size={18}
            className="absolute text-white transition-all duration-300 ease-in-out group-hover:translate-x-6 group-hover:opacity-0"
          />
          <ArrowRight
            size={18}
            className="absolute text-white -translate-x-6 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
          />
        </span>
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────
   Category Row 
───────────────────────────────────────── */

function CategoryRow({
  category,
  isOpen,
  onToggle,
}: {
  category: TechCategory;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const visible = category.items.slice(0, 4);
  const hidden = category.items.slice(4);

  return (
    <div
      className={cn(
        'transition-colors duration-300',
        isOpen ? 'bg-slate-50/80' : 'hover:bg-slate-50/50',
      )}
    >
      <div className="p-5 sm:p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-12">
        <div className="flex items-center justify-between md:block md:w-36 flex-shrink-0 pt-1">
          <span className="font-rubik text-sm font-bold tracking-[0.15em] uppercase text-slate-400">
            {category.label}
          </span>
          {hidden.length > 0 && (
            <button
              onClick={onToggle}
              className={cn(
                'md:hidden flex items-center gap-2 text-sm font-medium transition-colors duration-200',
                isOpen ? 'text-[#1D57AF]' : 'text-slate-400 hover:text-[#1D57AF]',
              )}
            >
              <span>{isOpen ? 'Less' : 'More'}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="text-lg leading-none font-light"
              >
                +
              </motion.span>
            </button>
          )}
        </div>

        {/* Items grid */}
        <div className="flex-grow">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {visible.map((tech) => (
              <TechItem key={tech.slug} tech={tech} />
            ))}
          </ul>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
                  {hidden.map((tech) => (
                    <TechItem key={tech.slug} tech={tech} />
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Toggle button — desktop */}
        {hidden.length > 0 && (
          <div className="hidden md:flex md:w-28 justify-end flex-shrink-0 pt-1">
            <button
              onClick={onToggle}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors duration-200',
                isOpen ? 'text-[#1D57AF]' : 'text-slate-400 hover:text-[#1D57AF]',
              )}
            >
              <span>{isOpen ? 'Show less' : 'Show all'}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="text-xl leading-none font-light"
              >
                +
              </motion.span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Tech Item Pill
───────────────────────────────────────── */

function TechItem({ tech }: { tech: Tech }) {
  return (
    <li className="group/item flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white border border-slate-100 hover:border-blue-200 hover:shadow-sm hover:shadow-blue-100/50 transition-all duration-300 cursor-default">
      <div className="w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 bg-slate-50 group-hover/item:bg-blue-50/50 transition-colors">
        <img
          src={tech.iconUrl || `https://cdn.simpleicons.org/${tech.slug}/${tech.color || 'slate-600'}`}
          alt={tech.name}
          loading="lazy"
          className="w-5 h-5 object-contain group-hover/item:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="text-sm font-medium text-slate-600 group-hover/item:text-[#1D57AF] transition-colors truncate">
        {tech.name}
      </span>
    </li>
  );
}