import { Link } from "react-router-dom";
import { Twitter, Send, Book } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-white/10 mt-24">
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} Fairy Launch. Made with a pinch of stardust.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
        <div className="flex gap-4">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Send className="h-5 w-5" />
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
                <Book className="h-5 w-5" />
            </Link>
        </div>
      </nav>
    </footer>
  );
};