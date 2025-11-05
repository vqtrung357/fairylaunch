import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";
import { ConnectModal } from "./ConnectModal";
import { ConnectedDropdown } from "./ConnectedDropdown";

export const WalletButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Solana hooks
  const { connected: solanaConnected, publicKey: solanaPublicKey, disconnect: solanaDisconnect } = useWallet();
  
  // EVM hooks
  const { address: evmAddress, isConnected: evmConnected } = useAccount();

  if (solanaConnected && solanaPublicKey) {
    return <ConnectedDropdown type="solana" address={solanaPublicKey.toBase58()} onDisconnect={solanaDisconnect} />;
  }

  if (evmConnected && evmAddress) {
    return <ConnectedDropdown type="evm" address={evmAddress} />;
  }

  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="rounded-full">Connect Wallet</Button>
      <ConnectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};