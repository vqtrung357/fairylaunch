import { motion } from "framer-motion";
import { Sparkles } from "./Sparkles";

export const FairyMascot = () => {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: ["-10px", "10px"] }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <img 
          src="/pics/pixie.png" 
          alt="Fairy Mascot" 
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 drop-shadow-[0_0_30px_rgba(255,188,236,0.4)]"
        />
      </motion.div>
      <div className="absolute inset-0">
        <Sparkles />
      </div>
    </motion.div>
  );
};