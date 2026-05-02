import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = ['HOME', 'ABOUT', 'EXPERIENCE', 'PROJECTS'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHireMe = () => {
    window.location.href = "mailto:saibalawade10@gmail.com";
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen ? 'bg-black/60 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="font-rubik font-bold text-xl sm:text-2xl tracking-tighter text-white z-50 relative whitespace-nowrap">
            SAI BALKAWADE<span className="text-[#3b82f6]">.</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="font-rubik font-semibold text-sm tracking-widest text-white/80 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleHireMe}
            className="hidden md:block px-6 py-2 border border-white/20 rounded-full font-rubik text-sm font-bold text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm bg-white/5"
          >
            HIRE ME
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[#0a1128]/95 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen"
          >
            <div className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-rubik font-bold text-3xl tracking-widest text-white hover:text-[#3b82f6] transition-colors"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => {
                  handleHireMe();
                  setMobileMenuOpen(false);
                }}
                className="mt-8 px-8 py-3 border border-white/20 rounded-full font-rubik text-lg font-bold text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                HIRE ME
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
