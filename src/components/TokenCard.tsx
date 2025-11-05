import { motion } from "framer-motion";
import { ArrowUpRight, Twitter, Globe, Send } from "lucide-react";
import { Badge } from "./Badge";
import { Token } from "@/lib/mock-data";
import { Button } from "./ui/button";

interface TokenCardProps {
  token: Token;
}

const formatNumber = (num: number) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(2)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num.toString();
};

export const TokenCard = ({ token }: TokenCardProps) => {
  const changeColor = token.change24hPct >= 0 ? "text-success" : "text-destructive";

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-card/50 backdrop-blur-lg border border-white/10 rounded-3xl p-4 flex flex-col gap-4 transition-all duration-300 hover:border-primary/50"
    >
      <div className="flex items-center gap-3">
        <img src={token.avatar} alt={token.name} className="w-12 h-12 rounded-full" />
        <div className="flex-grow">
          <h3 className="font-bold text-lg">{token.name}</h3>
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
        <span className={`font-medium flex items-center ${changeColor}`}>
          {token.change24hPct.toFixed(1)}% <ArrowUpRight className="w-4 h-4" />
        </span>
      </div>
      
      <div className="flex items-center justify-between mt-2">
        <div className="flex gap-2">
          {token.badges.map((b) => <Badge key={b} type={b} />)}
        </div>
        <span className="text-xs text-muted-foreground">Launched {token.launchedAgo} ago</span>
      </div>
    </motion.div>
  );
};