import { useEffect, useRef } from "react";

interface ConfettiProps {
  active: boolean;
  onDone?: () => void;
}

export function Confetti({ active, onDone }: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = ["#FF6B6B", "#FF8E53", "#F59E0B", "#22C55E", "#3B82F6", "#A855F7", "#EC4899"];
    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 120,
      vx: (Math.random() - 0.5) * 5,
      vy: 2 + Math.random() * 5,
      color: colors[Math.floor(Math.random() * colors.length)],
      w: 6 + Math.random() * 8,
      h: 4 + Math.random() * 4,
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.25,
      alpha: 1,
    }));

    let animId: number;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      let alive = 0;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;
        p.rotation += p.rotSpeed;
        if (frame > 80) p.alpha = Math.max(0, p.alpha - 0.015);
        if (p.y < canvas.height + 20) alive++;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      });

      frame++;
      if (frame < 160 && alive > 0) {
        animId = requestAnimationFrame(animate);
      } else {
        onDone?.();
      }
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [active, onDone]);

  if (!active) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[999] pointer-events-none"
    />
  );
}
