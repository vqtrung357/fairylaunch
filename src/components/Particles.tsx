import { cn } from "@/lib/utils";

interface ParticlesProps {
  className?: string;
  quantity?: number;
}

export const Particles = ({ className, quantity = 100 }: ParticlesProps) => {
  return (
    <div className={cn("absolute inset-0 pointer-events-none", className)}>
      {Array.from({ length: quantity }).map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/50 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            animation: `twinkle ${Math.random() * 5 + 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};