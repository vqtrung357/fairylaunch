import { Link } from "react-router-dom";
import { WalletButton } from "./WalletButton";

export const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-transparent sticky top-0 z-50 backdrop-blur-lg border-b border-white/10">
      <Link to="/" className="flex items-center justify-center">
        <span className="text-xl font-bold">Fairy Launch ✨</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Discover
        </Link>
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Launch
        </Link>
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Docs
        </Link>
        <Link
          to="#"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </Link>
        <WalletButton />
      </nav>
    </header>
  );
};