export const HeroPortrait = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
        {/* Main image */}
        <img
          src="/abstract_gears.png"
          alt="Abstract gears and circuits"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          style={{
            filter: 'sepia(0.15) contrast(1.05) brightness(0.95) saturate(0.85)',
          }}
        />
        {/* Olive color overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(62, 77, 25, 0.15) 0%, transparent 60%)',
            mixBlendMode: 'multiply',
          }}
        />
        {/* Film grain overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Vignette effect */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 50%, rgba(44, 55, 17, 0.25) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(230, 218, 170, 0.4) 0%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
};
