import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

const Sparkle = ({ size, x, y, delay }: { size: number; x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute bg-white rounded-full"
    style={{ width: size, height: size, left: x, top: y }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

interface MagicButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const MagicButton = ({ children, className, ...props }: MagicButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px rgba(255, 216, 118, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative overflow-hidden rounded-full px-8 py-6 text-lg font-semibold text-[#0B0A12] bg-gradient-to-r from-[#B79CFF] to-[#FFD876] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-wand",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 pointer-events-none">
        <Sparkle size={2} x="20%" y="10%" delay={0} />
        <Sparkle size={3} x="80%" y="30%" delay={0.5} />
        <Sparkle size={2} x="95%" y="80%" delay={1} />
        <Sparkle size={1} x="5%" y="60%" delay={1.2} />
      </div>
    </motion.button>
  );
};