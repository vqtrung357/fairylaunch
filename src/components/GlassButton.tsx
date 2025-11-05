import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlassButton = ({ children, className, ...props }: GlassButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative rounded-full px-8 py-6 text-lg font-semibold bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-wand",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
};