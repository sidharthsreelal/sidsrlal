import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import clsx from 'clsx';

export const Cursor = () => {
  
  // Instant dot position
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  
  // Trailing ring position (spring)
  const ringX = useSpring(dotX, { stiffness: 150, damping: 20, mass: 0.5 });
  const ringY = useSpring(dotY, { stiffness: 150, damping: 20, mass: 0.5 });
  
  const [isHovering, setIsHovering] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);

      // Check for hover
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-clickable="true"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }

      // Check theme
      const darkSection = target.closest('[data-theme="dark"]');
      if (darkSection) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [dotX, dotY]);

  // Determine colors based on theme
  const dotColor = theme === 'dark' ? 'bg-offwhite' : 'bg-olive-dark';
  const ringColor = theme === 'dark' ? 'border-offwhite' : 'border-olive-dark';
  
  // We use Framer Motion for the ring to animate position, but we can also use Framer Motion to animate the scale and opacity.
  
  return (
    <>
      {/* Trailing Ring */}
      <motion.div
        className={clsx(
          "fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-solid transition-colors duration-300",
          ringColor
        )}
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovering ? 64 : 32, // w-16 or w-8
          height: isHovering ? 64 : 32,
          opacity: isHovering ? 0.2 : 0.5,
          backgroundColor: isHovering ? (theme === 'dark' ? '#e6daaa' : '#3e4d19') : 'transparent'
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />
      
      {/* Instant Dot */}
      <motion.div
        className={clsx(
          "fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 transition-colors duration-300",
          dotColor
        )}
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
};