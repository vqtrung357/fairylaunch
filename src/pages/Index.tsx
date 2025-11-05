import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HeroSpotlight } from "@/components/HeroSpotlight";
import { SortTabs } from "@/components/SortTabs";
import { TokenCard } from "@/components/TokenCard";
import { tokens } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { Search, BarChart, Share2 } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
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
                <Button size="lg" className="rounded-full px-8 py-6 text-lg font-semibold">
                  Connect Wallet
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-lg font-semibold bg-transparent">
                  Launch Token
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trending Section */}
        <section className="w-full py-12 md:py-24">
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;