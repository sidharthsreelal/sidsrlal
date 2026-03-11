import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  id?: string;
  theme?: 'light' | 'dark';
  className?: string;
}

export const Section = ({ children, id, theme = 'light', className }: SectionProps) => {
  return (
    <section
      id={id}
      data-theme={theme}
      className={clsx(
        "min-h-screen w-full flex flex-col justify-center px-6 md:px-24 py-20 transition-colors duration-700",
        theme === 'dark' ? "bg-olive-dark text-offwhite" : "bg-offwhite text-text",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};