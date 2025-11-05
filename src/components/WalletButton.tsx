import { useState } from "react";
import { useDemoWallet } from "@/hooks/useDemoWallet";
import { Button } from "./ui/button";
import { WalletModal } from "./WalletModal";
import { WalletDropdown } from "./WalletDropdown";

export const WalletButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { address, isConnected, connect, disconnect } = useDemoWallet();

  if (isConnected && address) {
    return <WalletDropdown address={address} onDisconnect={disconnect} />;
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="rounded-full">Connect Wallet</Button>
      <WalletModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConnect={connect}
      />
    </>
  );
};