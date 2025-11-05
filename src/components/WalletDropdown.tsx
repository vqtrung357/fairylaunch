import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";
import { shortAddress } from "@/lib/shortAddress";
import { ChevronDown, Copy, LogOut, User } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { Link } from "react-router-dom";

interface WalletDropdownProps {
  address: string;
  onDisconnect: () => void;
}

export const WalletDropdown = ({ address, onDisconnect }: WalletDropdownProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    showSuccess("Address copied ✨");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full bg-card/50 border-white/10">
          <span className="font-mono">{shortAddress(address)}</span>
          <ChevronDown className="w-4 h-4 ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card/80 backdrop-blur-lg border-white/10">
        <DropdownMenuItem onClick={handleCopy} className="cursor-pointer">
          <Copy className="w-4 h-4 mr-2" />
          Copy Address
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="#">
            <User className="w-4 h-4 mr-2" />
            View Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem onClick={onDisconnect} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/20">
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};