import { Button } from "@/components/ui/button";

interface HeaderProps {
  onConnectClick: () => void;
}

export const Header = ({ onConnectClick }: HeaderProps) => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-transparent sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <a href="#" className="flex items-center justify-center">
        <span className="text-2xl font-logo text-white">Fairy Launch ✨</span>
      </a>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <a
          href="#discover"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Discover
        </a>
        <a
          href="#launch"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Launch
        </a>
        <a
          href="#docs"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Docs
        </a>
        <a
          href="#about"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </a>
        <Button onClick={onConnectClick}>Connect Wallet</Button>
      </nav>
    </header>
  );
};