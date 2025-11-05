import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradientBlobProps {
  className?: string;
  variant?: "lavender" | "gold";
}

export const GradientBlob = ({ className, variant = "lavender" }: GradientBlobProps) => {
  const variants = {
    lavender: "bg-gradient-to-br from-[#B79CFF] to-[#9A7BFF]",
    gold: "bg-gradient-to-br from-[#FFD876] to-[#FFC36A]",
  };

  return (
    <motion.div
      className={cn(
        "absolute rounded-full mix-blend-lighten filter blur-3xl opacity-20",
        variants[variant],
        className
      )}
      animate={{
        x: ["0%", "10%", "-5%", "5%", "0%"],
        y: ["0%", "-5%", "10%", "-10%", "0%"],
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
      }}
    />
  );
};