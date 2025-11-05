import { cn } from "@/lib/utils";
import { Flame, Sparkles, ShieldCheck, Users, Wand2 } from "lucide-react";

export type BadgeType = 'trending' | 'new' | 'audited' | 'kyc' | 'Fairy Pick';

interface BadgeProps {
  type: BadgeType;
}

const badgeConfig = {
  trending: {
    label: "Hot Streak",
    icon: Flame,
    styles: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  new: {
    label: "Just Hatched",
    icon: Sparkles,
    styles: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  audited: {
    label: "Fairy-Blessed",
    icon: ShieldCheck,
    styles: "bg-green-500/20 text-green-400 border-green-500/30",
  },
  kyc: {
    label: "Known Kin",
    icon: Users,
    styles: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  },
  'Fairy Pick': {
    label: "Fairy Pick",
    icon: Wand2,
    styles: "bg-gradient-to-r from-[#B79CFF]/30 to-[#FFD876]/30 text-primary border-primary/30",
  },
};

export const Badge = ({ type }: BadgeProps) => {
  const config = badgeConfig[type];
  if (!config) return null;

  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur-sm",
        config.styles
      )}
    >
      <Icon className="w-3 h-3" />
      <span>{config.label}</span>
    </div>
  );
};