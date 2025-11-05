import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { tokens } from "@/lib/mock-data";
import { Button } from "./ui/button";
import { Globe, Send, Twitter, Gem, BarChart, Users, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};

export const HeroSpotlight = () => {
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const spotlightTokens = tokens.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTokenIndex((prevIndex) => (prevIndex + 1) % spotlightTokens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [spotlightTokens.length]);

  const token = spotlightTokens[currentTokenIndex];

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.3, ease: "easeIn" } },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <motion.div
        whileHover={{ y: -6, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative group rounded-3xl"
      >
        {/* Luminous Gradient Border & Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
        <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-[#B79CFF]/60 to-[#FFD876]/60" />

        <div className="relative bg-card/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
          {/* Shine Effect */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-[300%] transition-transform duration-[2000ms] ease-out" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={token.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid md:grid-cols-2 gap-8 items-center relative z-10"
            >
              {/* Left Section */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="relative mb-4">
                  <div className="absolute -inset-2 bg-primary/30 rounded-full blur-lg animate-pulse" style={{ animationDuration: '4s' }} />
                  <img src={token.avatar} alt={token.name} className="relative w-24 h-24 rounded-full border-2 border-primary/50" />
                </div>
                <h2 className="text-4xl font-bold font-heading">{token.name}</h2>
                <p className="text-xl text-muted-foreground">${token.ticker}</p>
                <div className="flex gap-2 mt-4">
                  {token.socials.web && <Button variant="outline" size="icon" className="rounded-full cursor-wand bg-transparent hover:bg-white/10 border-white/20"><Globe className="w-4 h-4" /></Button>}
                  {token.socials.x && <Button variant="outline" size="icon" className="rounded-full cursor-wand bg-transparent hover:bg-white/10 border-white/20"><Twitter className="w-4 h-4" /></Button>}
                  {token.socials.tg && <Button variant="outline" size="icon" className="rounded-full cursor-wand bg-transparent hover:bg-white/10 border-white/20"><Send className="w-4 h-4" /></Button>}
                </div>
              </div>

              {/* Right Section */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Gem, label: "Market Cap", value: formatNumber(token.marketCap), prefix: "$" },
                  { icon: BarChart, label: "24h Volume", value: formatNumber(token.volume24h), prefix: "$" },
                  { icon: Users, label: "Holders", value: formatNumber(token.holders) },
                  { icon: Droplets, label: "Liquidity", value: formatNumber(token.liquidity), prefix: "$" },
                ].map(({ icon: Icon, label, value, prefix }) => (
                  <div key={label} className="bg-background/50 p-4 rounded-xl border border-white/10 flex items-center gap-3 transition-colors hover:border-primary/50">
                    <Icon className="w-6 h-6 text-primary/80" />
                    <div>
                      <p className="text-sm text-muted-foreground">{label}</p>
                      <p className="text-2xl font-bold">{prefix || ''}{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Carousel Dots */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {spotlightTokens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTokenIndex(index)}
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-all duration-300",
              currentTokenIndex === index 
                ? 'bg-primary scale-125 shadow-[0_0_10px_hsl(var(--primary))]' 
                : 'bg-muted-foreground/50 hover:bg-muted-foreground'
            )}
          />
        ))}
      </div>
    </div>
  );
};