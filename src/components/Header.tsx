import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b sticky top-0 z-50">
      <Link to="/" className="flex items-center justify-center">
        <RocketIcon className="h-6 w-6" />
        <span className="ml-2 text-lg font-semibold">Fairy Launch</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Launchpad
        </Link>
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          FAQ
        </Link>
        <Button>Connect Wallet</Button>
      </nav>
    </header>
  );
};