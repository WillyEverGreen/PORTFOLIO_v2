import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Component to handle blue custom cursor trails and click effects
const CustomCursor: React.FC = () => {
  const [clicks, setClicks] = useState<{ id: number; x: number; y: number }[]>([]);

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      // Add a new click ripple
      const newClick = { id: Date.now(), x: e.clientX, y: e.clientY };
      setClicks((prev) => [...prev, newClick]);
      
      // Remove the ripple after animation completes
      setTimeout(() => {
        setClicks((prev) => prev.filter((click) => click.id !== newClick.id));
      }, 600);
    };

    window.addEventListener('mousedown', handleMouseDown);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <>
      {/* Only click ripple effects are kept */}

      {/* Click ripple effects */}
      <AnimatePresence>
        {clicks.map((click) => (
          <motion.div
            key={click.id}
            className="fixed top-0 left-0 rounded-full border-2 border-[#42599c] pointer-events-none z-[9998]"
            initial={{
              x: click.x - 10,
              y: click.y - 10,
              width: 20,
              height: 20,
              opacity: 1,
            }}
            animate={{
              x: click.x - 40,
              y: click.y - 40,
              width: 80,
              height: 80,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};

export default CustomCursor;
