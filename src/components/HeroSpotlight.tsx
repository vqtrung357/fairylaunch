import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tokens } from "@/lib/mock-data";
import { Button } from "./ui/button";
import { Globe, Send, Twitter, Gem, BarChart, Users, Droplets } from "lucide-react";
import { Sparkles } from "./Sparkles";

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

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      style={{ transformPerspective: "1200px" }}
      className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-6 w-full max-w-sm mx-auto shadow-2xl shadow-primary/10 before:absolute before:inset-0 before:-z-10 before:rounded-3xl before:bg-gradient-to-br before:from-[#B79CFF]/30 before:to-[#FFBCEC]/30 before:opacity-80 before:blur-xl"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/50 to-secondary/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="absolute inset-0"><Sparkles /></div>
      <div className="relative flex flex-col gap-6 items-center text-center">
        <motion.div key={token.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full flex flex-col items-center">
          <div className="relative mb-4">
            <div className="absolute -inset-2 rounded-full bg-primary/30 blur-lg animate-pulse" />
            <img src={token.avatar} alt={token.name} className="relative w-20 h-20 rounded-full border-2 border-primary shadow-[0_0_20px_rgba(183,156,255,0.6)]" />
          </div>
          <h2 className="text-3xl font-bold font-heading">{token.name}</h2>
          <p className="text-lg text-muted-foreground">${token.ticker}</p>
          <div className="flex gap-2 mt-3">
              {token.socials.web && <Button variant="outline" size="icon" className="rounded-full w-8 h-8 cursor-wand"><Globe className="w-4 h-4" /></Button>}
              {token.socials.x && <Button variant="outline" size="icon" className="rounded-full w-8 h-8 cursor-wand"><Twitter className="w-4 h-4" /></Button>}
              {token.socials.tg && <Button variant="outline" size="icon" className="rounded-full w-8 h-8 cursor-wand"><Send className="w-4 h-4" /></Button>}
          </div>
        </motion.div>
        
        <motion.div key={`${token.id}-stats`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="w-full">
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="bg-background/50 p-3 rounded-xl flex items-center gap-2">
              <Gem className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Market Cap</p>
                <p className="text-lg font-bold">${formatNumber(token.marketCap)}</p>
              </div>
            </div>
            <div className="bg-background/50 p-3 rounded-xl flex items-center gap-2">
              <BarChart className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">24h Volume</p>
                <p className="text-lg font-bold">${formatNumber(token.volume24h)}</p>
              </div>
            </div>
            <div className="bg-background/50 p-3 rounded-xl flex items-center gap-2">
              <Users className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Holders</p>
                <p className="text-lg font-bold">{formatNumber(token.holders)}</p>
              </div>
            </div>
            <div className="bg-background/50 p-3 rounded-xl flex items-center gap-2">
              <Droplets className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">Liquidity</p>
                <p className="text-lg font-bold">${formatNumber(token.liquidity)}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {spotlightTokens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTokenIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTokenIndex === index ? 'bg-primary scale-125 shadow-[0_0_10px_rgba(183,156,255,0.7)] animate-pulse' : 'bg-muted-foreground/50'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};