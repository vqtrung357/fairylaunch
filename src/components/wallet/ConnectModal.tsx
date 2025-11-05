import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useWallet } from "@solana/wallet-adapter-react";
import { useConnect } from "wagmi";
import { Wallet } from "lucide-react";
import { showError } from "@/utils/toast";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  const { wallets, select, connect } = useWallet();
  const { connectors, connect: connectEvm } = useConnect();

  const handleSolanaConnect = async (walletName: string) => {
    try {
      select(walletName);
      await connect();
      onClose();
    } catch (error) {
      showError("Failed to connect Solana wallet.");
      console.error("Solana connection error:", error);
    }
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
            Choose your preferred chain and wallet to continue.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="solana" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-background/50">
            <TabsTrigger value="solana">Solana</TabsTrigger>
            <TabsTrigger value="evm">EVM</TabsTrigger>
          </TabsList>
          <TabsContent value="solana" className="pt-4">
            <div className="grid gap-4">
              {wallets.filter(w => w.readyState === 'Installed').map((wallet) => (
                <Button
                  key={wallet.adapter.name}
                  variant="outline"
                  className="w-full justify-start h-14 text-lg rounded-xl bg-card/50 border-white/10 hover:border-primary/50"
                  onClick={() => handleSolanaConnect(wallet.adapter.name)}
                >
                  <img src={wallet.adapter.icon} alt={wallet.adapter.name} className="w-8 h-8 mr-4 rounded-full" />
                  {wallet.adapter.name}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="evm" className="pt-4">
            <div className="grid gap-4">
              {connectors.map((connector) => (
                <Button
                  key={connector.uid}
                  variant="outline"
                  className="w-full justify-start h-14 text-lg rounded-xl bg-card/50 border-white/10 hover:border-primary/50"
                  onClick={() => {
                    connectEvm({ connector });
                    onClose();
                  }}
                >
                  <img src={connector.icon} alt={connector.name} className="w-8 h-8 mr-4 rounded-full" />
                  {connector.name}
                </Button>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};