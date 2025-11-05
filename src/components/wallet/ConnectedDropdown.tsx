import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { shortAddress } from "@/lib/shortAddress";
import { ChevronDown, Copy, LogOut, User, ExternalLink } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import { Link } from "react-router-dom";
import { useDisconnect } from "wagmi";

interface ConnectedDropdownProps {
  type: 'solana' | 'evm';
  address: string;
  onDisconnect?: () => void;
}

export const ConnectedDropdown = ({ type, address, onDisconnect }: ConnectedDropdownProps) => {
  const { disconnect: disconnectEvm } = useDisconnect();

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    showSuccess("Address copied ✨");
  };

  const handleDisconnect = () => {
    if (type === 'solana' && onDisconnect) {
      onDisconnect();
    } else if (type === 'evm') {
      disconnectEvm();
    }
  };

  const explorerUrl = type === 'solana' 
    ? `https://solscan.io/account/${address}`
    : `https://etherscan.io/address/${address}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full bg-card/50 border-white/10">
          <span className="mr-2 px-2 py-0.5 text-xs rounded-full bg-primary/20 text-primary-foreground">
            {type.toUpperCase()}
          </span>
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
          <a href={explorerUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2" />
            View on Explorer
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="cursor-pointer">
          <Link to="#">
            <User className="w-4 h-4 mr-2" />
            View Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-white/10" />
        <DropdownMenuItem onClick={handleDisconnect} className="cursor-pointer text-destructive focus:text-destructive focus:bg-destructive/20">
          <LogOut className="w-4 h-4 mr-2" />
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};