import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TOKENS, Token } from "@/lib/mock-data";
import { Button } from "./ui/button";
import { Globe, Send, Twitter } from "lucide-react";

const formatNumber = (num: number) => {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
  }).format(num);
};

export const HeroSpotlight = () => {
  const [currentTokenIndex, setCurrentTokenIndex] = useState(0);
  const spotlightTokens = TOKENS.slice(0, 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTokenIndex((prevIndex) => (prevIndex + 1) % spotlightTokens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [spotlightTokens.length]);

  const token = spotlightTokens[currentTokenIndex];

  return (
    <div className="relative bg-card/50 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 w-full max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <motion.div key={token.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <img src={token.avatar} alt={token.name} className="w-24 h-24 rounded-full mb-4 border-2 border-primary" />
            <h2 className="text-4xl font-bold">{token.name}</h2>
            <p className="text-xl text-muted-foreground">${token.ticker}</p>
            <div className="flex gap-2 mt-4">
                {token.socials.web && <Button variant="outline" size="icon" className="rounded-full"><Globe className="w-4 h-4" /></Button>}
                {token.socials.x && <Button variant="outline" size="icon" className="rounded-full"><Twitter className="w-4 h-4" /></Button>}
                {token.socials.tg && <Button variant="outline" size="icon" className="rounded-full"><Send className="w-4 h-4" /></Button>}
            </div>
          </motion.div>
        </div>
        <motion.div key={`${token.id}-stats`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-background/50 p-4 rounded-xl">
              <p className="text-sm text-muted-foreground">Market Cap</p>
              <p className="text-2xl font-bold">${formatNumber(token.marketCap)}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl">
              <p className="text-sm text-muted-foreground">24h Volume</p>
              <p className="text-2xl font-bold">${formatNumber(token.volume24h)}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl">
              <p className="text-sm text-muted-foreground">Holders</p>
              <p className="text-2xl font-bold">{formatNumber(token.holders)}</p>
            </div>
            <div className="bg-background/50 p-4 rounded-xl">
              <p className="text-sm text-muted-foreground">Liquidity</p>
              <p className="text-2xl font-bold">${formatNumber(token.liquidity)}</p>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {spotlightTokens.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTokenIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${currentTokenIndex === index ? 'bg-primary scale-125' : 'bg-muted-foreground/50'}`}
          />
        ))}
      </div>
    </div>
  );
};