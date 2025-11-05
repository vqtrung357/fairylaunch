import { cn } from "@/lib/utils";

interface BadgeProps {
  type: "Hot" | "Moon" | "New";
}

const badgeStyles = {
  Hot: "bg-red-500/20 text-red-400 border-red-500/30",
  Moon: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  New: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const badgeIcons = {
  Hot: "🔥",
  Moon: "🌙",
  New: "🧪",
};

export const Badge = ({ type }: BadgeProps) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
        badgeStyles[type]
      )}
    >
      <span>{badgeIcons[type]}</span>
      <span>{type}</span>
    </div>
  );
};