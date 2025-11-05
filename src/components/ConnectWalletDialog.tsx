import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ghost, Sun, Backpack } from "lucide-react";

const WALLETS = [
  { name: "Phantom", icon: Ghost },
  { name: "Solflare", icon: Sun },
  { name: "Backpack", icon: Backpack },
];

interface ConnectWalletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ConnectWalletDialog = ({ open, onOpenChange }: ConnectWalletDialogProps) => {
  const handleWalletConnect = (walletName: string) => {
    console.log(`Connecting to ${walletName}...`);
    // In a real app, you would add the wallet connection logic here.
    onOpenChange(false); // Close dialog on selection
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-card/80 backdrop-blur-lg border-white/10">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription>
            Choose your preferred Solana wallet to connect to the app.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {WALLETS.map((wallet) => {
            const Icon = wallet.icon;
            return (
              <Button
                key={wallet.name}
                variant="outline"
                className="w-full flex items-center justify-start gap-4 text-lg p-6 bg-background/50 hover:bg-background"
                onClick={() => handleWalletConnect(wallet.name)}
              >
                <Icon className="w-6 h-6 text-primary" />
                <span>{wallet.name}</span>
              </Button>
            );
          })}
        </div>
      </DialogContent>
    </Dialog>
  );
};