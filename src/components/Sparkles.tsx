import { motion } from "framer-motion";

const Sparkle = ({ size, x, y, delay }: { size: number; x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ width: size, height: size, left: x, top: y }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

export const Sparkles = () => {
  const sparkles = [
    { size: 2, x: "20%", y: "10%", delay: 0 },
    { size: 3, x: "80%", y: "30%", delay: 0.5 },
    { size: 2, x: "95%", y: "80%", delay: 1 },
    { size: 1, x: "5%", y: "60%", delay: 1.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none">
      {sparkles.map((s, i) => (
        <Sparkle key={i} {...s} />
      ))}
    </div>
  );
};