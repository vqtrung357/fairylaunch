import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Wallet } from "lucide-react";

interface WalletInfo {
  name: string;
  icon: string;
  disabled?: boolean;
  soon?: boolean;
}

const wallets: WalletInfo[] = [
  { name: "Phantom", icon: "/placeholder.svg" },
  { name: "Solflare", icon: "/placeholder.svg" },
  { name: "Backpack", icon: "/placeholder.svg" },
  { name: "MetaMask", icon: "/placeholder.svg", disabled: true, soon: true },
];

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export const WalletModal = ({ isOpen, onClose, onConnect }: WalletModalProps) => {
  const handleConnect = () => {
    onConnect();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card/80 backdrop-blur-lg border-white/10">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-primary" />
            Connect a Wallet
          </DialogTitle>
          <DialogDescription>
            Choose your preferred wallet to continue.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {wallets.map((wallet) => (
            <Button
              key={wallet.name}
              variant="outline"
              className="w-full justify-start h-14 text-lg rounded-xl bg-card/50 border-white/10 hover:border-primary/50"
              disabled={wallet.disabled}
              onClick={!wallet.disabled ? handleConnect : undefined}
            >
              <img src={wallet.icon} alt={wallet.name} className="w-8 h-8 mr-4 rounded-full" />
              {wallet.name}
              {wallet.soon && <span className="ml-auto text-xs text-muted-foreground">EVM soon</span>}
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};