import { MagicButton } from "@/components/MagicButton";

interface HeaderProps {
  onConnectClick: () => void;
}

export const Header = ({ onConnectClick }: HeaderProps) => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-white/10 backdrop-blur-xl sticky top-0 z-50 border-b border-white/15">
      <a href="#" className="flex items-center justify-center">
        <span className="text-2xl font-logo text-white [text-shadow:0_0_8px_rgba(255,255,255,0.7),0_0_20px_hsl(var(--primary))]">Fairy Launch ✨</span>
      </a>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <a
          href="#discover"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:[text-shadow:0_0_8px_hsl(var(--primary))]"
        >
          Discover
        </a>
        <a
          href="#launch"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:[text-shadow:0_0_8px_hsl(var(--primary))]"
        >
          Launch
        </a>
        <a
          href="#docs"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:[text-shadow:0_0_8px_hsl(var(--primary))]"
        >
          Docs
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:[text-shadow:0_0_8px_hsl(var(--primary))]"
        >
          About
        </a>
        <MagicButton onClick={onConnectClick} className="px-6 py-2 text-sm">Connect Wallet</MagicButton>
      </nav>
    </header>
  );
};