import { useState } from "react";
import { Button } from "@/components/ui/button";
import { HeroSpotlight } from "@/components/HeroSpotlight";
import { SortTabs } from "@/components/SortTabs";
import { TokenCard } from "@/components/TokenCard";
import { tokens } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { Search, BarChart, Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConnectWalletDialog } from "@/components/ConnectWalletDialog";

const Index = () => {
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header onConnectClick={() => setIsWalletDialogOpen(true)} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-28 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-400 font-heading">
                  Track emerging tokens before they go viral.
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                  Discover fair launches, watch momentum, and back what you love.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full"
              >
                <HeroSpotlight />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="space-x-4 pt-4"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-semibold"
                  onClick={() => setIsWalletDialogOpen(true)}
                >
                  Connect Wallet
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg font-semibold bg-transparent"
                  onClick={() => scrollToSection('launch')}
                >
                  Launch Token
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Discover Section */}
        <section id="discover" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Trending Now</h2>
              <SortTabs />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {tokens.map((token) => (
                  <TokenCard key={token.id} token={token} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 bg-card/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">How It Works</h2>
              <p className="max-w-[600px] text-muted-foreground">Three simple steps to join the magic.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-card/50 rounded-3xl border border-white/10">
                <div className="p-4 bg-primary/20 rounded-full border border-primary/50"><Search className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-bold font-heading">Discover</h3>
                <p className="text-muted-foreground">Find newly launched tokens the moment they appear.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-card/50 rounded-3xl border border-white/10">
                <div className="p-4 bg-primary/20 rounded-full border border-primary/50"><BarChart className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-bold font-heading">Track</h3>
                <p className="text-muted-foreground">See market cap, volume, and holder growth at a glance.</p>
              </div>
              <div className="flex flex-col items-center text-center gap-4 p-6 bg-card/50 rounded-3xl border border-white/10">
                <div className="p-4 bg-primary/20 rounded-full border border-primary/50"><Share2 className="w-8 h-8 text-primary" /></div>
                <h3 className="text-xl font-bold font-heading">Support</h3>
                <p className="text-muted-foreground">Join the community and share the magic.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Launch Section */}
        <section id="launch" className="w-full py-12 md:py-24">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading mb-4">Launch Your Token</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to launch your own token? Our magical launchpad is coming soon to make it easy, fair, and secure for everyone involved.
            </p>
          </div>
        </section>

        {/* Docs Section */}
        <section id="docs" className="w-full py-12 md:py-24 bg-card/20">
          <div className="container max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading mb-8 text-center">Documentation</h2>
            <div className="prose prose-invert max-w-none bg-card/50 p-8 rounded-3xl border border-white/10">
              <h2>Getting Started</h2>
              <p>Welcome to the Fairy Launch documentation. Here you'll find everything you need to know about using our platform, from discovering new tokens to launching your own project.</p>
              <h3>Connecting Your Wallet</h3>
              <p>To get started, you'll need a Solana-compatible wallet. We recommend Phantom, Solflare, or Backpack. Click the "Connect Wallet" button in the top-right corner and approve the connection in your wallet extension.</p>
              <h2>For Developers</h2>
              <p>If you're a developer looking to launch a token, this section is for you. Our platform provides a seamless and secure way to conduct a fair launch.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading mb-4">About Fairy Launch</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We believe in the magic of fair launches and community-driven projects.
            </p>
            <div className="prose prose-invert max-w-none text-left bg-card/50 p-8 rounded-3xl border border-white/10">
              <h2>Our Mission</h2>
              <p>Our mission is to create a transparent, secure, and accessible platform for discovering and launching new tokens on the Solana blockchain. We aim to empower both creators and investors by providing the tools they need to succeed in a decentralized world.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ConnectWalletDialog open={isWalletDialogOpen} onOpenChange={setIsWalletDialogOpen} />
    </div>
  );
};

export default Index;