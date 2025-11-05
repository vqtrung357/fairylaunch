import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConnectWalletDialog } from "@/components/ConnectWalletDialog";

export const Layout = () => {
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header onConnectClick={() => setIsWalletDialogOpen(true)} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <ConnectWalletDialog open={isWalletDialogOpen} onOpenChange={setIsWalletDialogOpen} />
    </div>
  );
};