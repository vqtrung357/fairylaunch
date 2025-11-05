import { motion } from "framer-motion";
import { Twitter, Globe, Send } from "lucide-react";
import { Badge, BadgeType } from "./Badge";
import { Token } from "@/lib/mock-data";
import { Button } from "./ui/button";
import { Sparkline } from "./Sparkline";

interface TokenCardProps {
  token: Token;
  isFairyPick?: boolean;
}

const formatNumber = (num: number) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
};

export const TokenCard = ({ token, isFairyPick = false }: TokenCardProps) => {
  const changeColor = token.change24hPct >= 0 ? "text-success" : "text-destructive";

  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        scale: 1.03, 
        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3), inset 0px 0px 15px rgba(183, 156, 255, 0.2)" 
      }}
      className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-4 flex flex-col gap-4 transition-all duration-300 hover:border-primary/30 cursor-wand shadow-xl shadow-black/30"
    >
      {isFairyPick && <div className="absolute -top-3 -right-3"><Badge type="Fairy Pick" /></div>}
      <div className="flex items-center gap-3">
        <div className="p-1 bg-gradient-to-br from-primary/50 to-secondary/50 rounded-full">
          <img src={token.avatar} alt={token.name} className="w-12 h-12 rounded-full" />
        </div>
        <div className="flex-grow">
          <h3 className="font-bold text-lg font-heading">{token.name}</h3>
          <p className="text-sm text-muted-foreground">${token.ticker}</p>
        </div>
        <div className="flex gap-1">
          {token.socials.web && <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full"><Globe className="w-4 h-4" /></Button>}
          {token.socials.x && <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full"><Twitter className="w-4 h-4" /></Button>}
          {token.socials.tg && <Button variant="ghost" size="icon" className="w-7 h-7 rounded-full"><Send className="w-4 h-4" /></Button>}
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">Market Cap</span>
        <span className="font-medium">${formatNumber(token.marketCap)}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">24h Volume</span>
        <span className="font-medium">${formatNumber(token.volume24h)}</span>
      </div>
      <div className="flex justify-between items-center text-sm">
        <span className="text-muted-foreground">24h Change</span>
        <div className="flex items-center gap-2">
          <Sparkline change={token.change24hPct} />
          <span className={`font-medium flex items-center ${changeColor}`}>
            {token.change24hPct.toFixed(1)}%
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2 flex-wrap">
          {token.badges.map((b) => <Badge key={b} type={b as BadgeType} />)}
        </div>
        <span className="text-xs text-muted-foreground shrink-0">Launched {token.launchedAgo}</span>
      </div>
    </motion.div>
  );
};