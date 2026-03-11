import { useRef, useEffect, useCallback, useState } from 'react';

interface InteractiveGridProps {
  className?: string;
}

export const InteractiveGrid = ({ className }: InteractiveGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -200, y: -200, active: false });
  const animFrameRef = useRef<number>(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const GRID_SPACING = 40;
  const LINE_WIDTH = 2;
  const LINE_COLOR = 'rgba(50, 62, 20, 0.08)';
  const MAGNIFY_RADIUS = 120;
  const MAGNIFY_STRENGTH = 1.8;

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsTouchDevice(!mq.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsTouchDevice(!e.matches);
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    const { x: mx, y: my, active } = mouseRef.current;

    ctx.clearRect(0, 0, width, height);
    ctx.lineWidth = LINE_WIDTH;
    ctx.strokeStyle = LINE_COLOR;

    for (let x = 0; x <= width; x += GRID_SPACING) {
      ctx.beginPath();
      for (let y = 0; y <= height; y += 2) {
        let drawX = x;
        let drawY = y;

        if (active) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAGNIFY_RADIUS) {
            const strength = (1 - dist / MAGNIFY_RADIUS) * MAGNIFY_STRENGTH;
            const angle = Math.atan2(dy, dx);
            const push = strength * (MAGNIFY_RADIUS - dist) * 0.15;
            drawX = x + Math.cos(angle) * push;
            drawY = y + Math.sin(angle) * push;
          }
        }

        if (y === 0) {
          ctx.moveTo(drawX, drawY);
        } else {
          ctx.lineTo(drawX, drawY);
        }
      }
      ctx.stroke();
    }

    for (let y = 0; y <= height; y += GRID_SPACING) {
      ctx.beginPath();
      for (let x = 0; x <= width; x += 2) {
        let drawX = x;
        let drawY = y;

        if (active) {
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAGNIFY_RADIUS) {
            const strength = (1 - dist / MAGNIFY_RADIUS) * MAGNIFY_STRENGTH;
            const angle = Math.atan2(dy, dx);
            const push = strength * (MAGNIFY_RADIUS - dist) * 0.15;
            drawX = x + Math.cos(angle) * push;
            drawY = y + Math.sin(angle) * push;
          }
        }

        if (x === 0) {
          ctx.moveTo(drawX, drawY);
        } else {
          ctx.lineTo(drawX, drawY);
        }
      }
      ctx.stroke();
    }

    animFrameRef.current = requestAnimationFrame(draw);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      const section = canvas.closest('section');
      if (!section) return;
      canvas.width = section.offsetWidth;
      canvas.height = section.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animFrameRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y, active: true };
      } else {
        mouseRef.current = { ...mouseRef.current, active: false };
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [draw, isTouchDevice]);

  // On touch devices, render a simple static CSS grid instead of the canvas
  if (isTouchDevice) {
    return (
      <div
        className={`${className} bg-grid-hero`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};
