import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import clsx from 'clsx';

const codeSnippet = `use std::net::TcpListener;
use std::io::Read;

// "always code as if the person maintaining your code
//  is a violent psychopath who knows where you live"
//                                        — John Woods

fn main() -> std::io::Result<()> {
    // TODO: fix before pushing to prod
    // (written: 2019)

    let listener = TcpListener::bind("127.0.0.1:8080")?;
    println!("listening on port 8080...");
    println!("(works on my machine)");

    for stream in listener.incoming() {
        let mut s = stream?;
        let mut buf = [0; 512];
        s.read(&mut buf)?;
        // "it works, but i don't know why"
        //                     — every developer, ever
    }

    // "first, solve the problem. then, write the code."
    //                                  — John Johnson
    //  (we skipped step one)
    Ok(()) // surprisingly
}`;

export const Terminal = ({ className }: { className?: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    if (currentIndex === 0) {
      const timeout = setTimeout(() => {
        setCurrentIndex(1);
      }, 1000);
      return () => clearTimeout(timeout);
    }

    if (currentIndex <= codeSnippet.length) {
      // Slower typing speed: 30-70ms instead of 15-45ms
      const randomDelay = Math.random() * 40 + 30;
      const timeout = setTimeout(() => {
        setDisplayedText(codeSnippet.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, randomDelay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isInView]);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [displayedText]);


  return (
    <div
      ref={containerRef}
      className={clsx(
        "rounded-2xl overflow-hidden shadow-2xl relative border border-offwhite/10 flex flex-col",
        className
      )}
      style={{ backgroundColor: 'rgba(28, 36, 11, 0.4)', backdropFilter: 'blur(12px)' }}
    >
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 border-b border-offwhite/5 bg-black/10">
        <div className="flex gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-60"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-60"></div>
        </div>
      </div>

      {/* Terminal Body */}
      <div
        ref={scrollRef}
        className="p-6 font-mono text-[13px] md:text-sm text-offwhite/70 leading-relaxed overflow-y-auto hide-scrollbar whitespace-pre flex-1 scroll-smooth"
      >
        <span className="text-offwhite/90">{displayedText}</span>
        <span
          className="inline-block w-2 md:w-2.5 h-[1.2em] align-middle ml-1 bg-offwhite/50 animate-pulse"
          style={{ animationDuration: '0.8s' }}
        />
      </div>
    </div>
  );
};
