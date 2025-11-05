import { motion } from "framer-motion";

const MistParticle = ({ delay, duration, top, size }: { delay: number; duration: number; top: string; size: string }) => (
  <motion.div
    className="absolute -translate-y-1/2 bg-primary/5 rounded-full filter blur-3xl"
    style={{ top, width: size, height: size }}
    initial={{ x: "-100%", opacity: 0 }}
    animate={{ x: "100vw", opacity: [0, 1, 1, 0] }}
    transition={{
      duration,
      delay,
      ease: "linear",
      repeat: Infinity,
    }}
  />
);

export const Mist = () => {
  return (
    <div className="absolute inset-0 overflow-x-hidden pointer-events-none">
      <MistParticle delay={0} duration={45} top="20%" size="60vw" />
      <MistParticle delay={10} duration={50} top="50%" size="80vw" />
      <MistParticle delay={25} duration={40} top="80%" size="70vw" />
    </div>
  );
};