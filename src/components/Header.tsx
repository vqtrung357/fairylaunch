import { MagicButton } from "@/components/MagicButton";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

interface HeaderProps {
  onConnectClick: () => void;
}

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:[text-shadow:0_0_8px_hsl(var(--primary))]"
  >
    {children}
  </a>
);

export const Header = ({ onConnectClick }: HeaderProps) => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white/10 backdrop-blur-xl sticky top-0 z-50 border-b border-white/15">
      <a href="#" className="flex items-center justify-center">
        <span className="text-xl sm:text-2xl font-logo text-white [text-shadow:0_0_8px_rgba(255,255,255,0.7),0_0_20px_hsl(var(--primary))]">Fairy Launch ✨</span>
      </a>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-4 sm:gap-6">
        <NavLink href="#discover">Discover</NavLink>
        <NavLink href="#launch">Launch</NavLink>
        <NavLink href="#docs">Docs</NavLink>
        <NavLink href="#about">About</NavLink>
        <MagicButton onClick={onConnectClick} className="px-6 py-2 text-sm">Connect Wallet</MagicButton>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card/80 backdrop-blur-lg border-l-white/10">
            <nav className="grid gap-6 text-lg font-medium mt-12">
              <SheetClose asChild>
                <a href="#discover" className="text-muted-foreground hover:text-foreground">Discover</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#launch" className="text-muted-foreground hover:text-foreground">Launch</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#docs" className="text-muted-foreground hover:text-foreground">Docs</a>
              </SheetClose>
              <SheetClose asChild>
                <a href="#about" className="text-muted-foreground hover:text-foreground">About</a>
              </SheetClose>
            </nav>
            <div className="absolute bottom-8 left-4 right-4">
                <SheetClose asChild>
                    <MagicButton onClick={onConnectClick} className="w-full">Connect Wallet</MagicButton>
                </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};