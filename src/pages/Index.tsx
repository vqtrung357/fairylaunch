import { useState } from "react";
import { HeroSpotlight } from "@/components/HeroSpotlight";
import { SortTabs } from "@/components/SortTabs";
import { TokenCard } from "@/components/TokenCard";
import { tokens } from "@/lib/mock-data";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, BarChart, Share2, Book, Wallet, Wand2, Braces, ShieldCheck, Users, Eye } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ConnectWalletDialog } from "@/components/ConnectWalletDialog";
import { Particles } from "@/components/Particles";
import { GradientBlob } from "@/components/GradientBlob";
import { Sparkles } from "@/components/Sparkles";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MagicButton } from "@/components/MagicButton";
import { GlassButton } from "@/components/GlassButton";

const Index = () => {
  const [isWalletDialogOpen, setIsWalletDialogOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Particles className="fixed inset-0 -z-10" quantity={50} />
      <GradientBlob variant="lavender" className="fixed -top-80 -left-80 w-1/2 h-1/2 lg:w-1/3 lg:h-1/3" />
      <GradientBlob variant="gold" className="fixed -bottom-80 -right-80 w-1/2 h-1/2 lg:w-1/3 lg:h-1/3" />
      
      <Header onConnectClick={() => setIsWalletDialogOpen(true)} />
      <main className="flex-1">
        {/* Hero Section */}
        <motion.section 
          style={{ opacity: heroOpacity }}
          className="w-full py-20 md:py-28 lg:py-32 relative"
        >
          <div className="absolute inset-0 -z-10 flex justify-center items-center">
            <div className="w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl" />
          </div>
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
                className="flex flex-col sm:flex-row items-center gap-4 pt-4"
              >
                <MagicButton onClick={() => setIsWalletDialogOpen(true)}>
                  Connect Wallet
                </MagicButton>
                <GlassButton onClick={() => scrollToSection('launch')}>
                  Launch Token
                </GlassButton>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Discover Section */}
        <section id="discover" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center gap-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Trending Now</h2>
              <SortTabs />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {tokens.map((token, index) => (
                  <TokenCard key={token.id} token={token} isFairyPick={index === 1} />
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

        {/* NEW Launch Section */}
        <section id="launch" className="relative w-full py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#0B0A12] to-[#15122B]">
          <Particles className="opacity-50" />
          <GradientBlob variant="lavender" className="top-0 left-0 w-1/2 h-1/2" />
          <GradientBlob variant="gold" className="bottom-0 right-0 w-1/3 h-1/3" />
          <div className="container relative z-10 flex flex-col items-center gap-12">
            <div className="w-full max-w-3xl text-center backdrop-blur-xl bg-white/10 border border-white/15 rounded-3xl shadow-[0_0_60px_rgba(183,156,255,0.15)] p-8 md:p-12">
              <h2 className="text-4xl font-bold font-heading">Launch Your Token</h2>
              <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
                A guided, fair, and delightful way to launch your idea. Our magical launchpad (UI demo) helps you prep branding, lore, and socials—no code required.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <MagicButton>
                  Start Launch Wizard
                </MagicButton>
                <GlassButton>
                  See How It Works
                </GlassButton>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">UI demo • No on-chain actions • Designed for Solana creators</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
              {[
                { title: "Transparent by Design", desc: "Clear steps, previewable outcomes, and visible parameters." },
                { title: "Fair from Day One", desc: "No hidden switches. Everyone sees the same information." },
                { title: "Secure UX Patterns", desc: "Guided flows reduce misclicks and common mistakes." },
              ].map(card => (
                <motion.div
                  key={card.title}
                  whileHover={{ y: -4 }}
                  className="relative p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/8 transition-all duration-300 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-[#B79CFF]/60 before:to-[#FFD876]/60 before:opacity-0 hover:before:opacity-100 before:transition"
                >
                  <h3 className="font-bold font-heading">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW Docs Section */}
        <section id="docs" className="w-full py-12 md:py-24">
          <div className="container max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Documentation</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Everything you need to launch your token or discover the next big thing on Solana.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Book, title: "Getting Started", desc: "Your first steps to launching a token or finding new projects." },
                { icon: Wallet, title: "Wallet Integration", desc: "Securely connect your Solana wallet to interact with the platform." },
                { icon: Wand2, title: "Launch Wizard", desc: "Our step-by-step guide to creating your token, setting up liquidity, and launching." },
                { icon: Braces, title: "Developer API", desc: "Access real-time launch data and integrate Fairy Launch into your own applications." },
              ].map(({ icon: Icon, title, desc }) => (
                <motion.div
                  key={title}
                  whileHover={{ y: -4 }}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300 before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-r before:from-[#B79CFF]/60 before:to-[#FFD876]/60 before:opacity-0 hover:before:opacity-100 before:transition"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-bold font-heading">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="font-mono text-sm bg-[#0E0B1A]/80 rounded-2xl border border-white/10 p-6">
                <pre><code className="text-muted-foreground">
                  <span className="text-primary">import</span> {'{'} <span className="text-secondary">FairyLaunch</span> {'}'} <span className="text-primary">from</span> <span className="text-success">'@fairylaunch/sdk'</span>;<br /><br />
                  <span className="text-primary">const</span> fairy = <span className="text-primary">new</span> <span className="text-secondary">FairyLaunch</span>();<br />
                  <span className="text-primary">const</span> trending = <span className="text-primary">await</span> fairy.<span className="text-foreground">getTrendingTokens</span>();<br />
                  <span className="text-muted-foreground/80">// Returns the top 10 trending tokens</span>
                </code></pre>
              </div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a "fair launch"?</AccordionTrigger>
                  <AccordionContent>A fair launch is a token distribution model where the token is immediately available to the public. There are no private sales or pre-sales, ensuring everyone gets access at the same price and time.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What fees does Fairy Launch charge?</AccordionTrigger>
                  <AccordionContent>We charge a small, transparent platform fee on created liquidity pools. This helps us maintain the platform and develop new features. There are no hidden costs for creators or investors.</AccordionContent>
                </Iframe>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How do you ensure token safety?</AccordionTrigger>
                  <AccordionContent>While we provide tools for transparency like liquidity locks and audit reports, always do your own research (DYOR). We aim to give you the best data, but cannot guarantee the success or safety of any project.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* NEW About Section */}
        <section id="about" className="w-full py-12 md:py-24 bg-card/20">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">About Fairy Launch</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
              We believe in the magic of fair launches and community-driven projects.
            </p>
            <div className="mt-12 backdrop-blur-xl bg-white/10 border border-white/15 rounded-3xl p-8 text-left">
              <h3 className="text-2xl font-bold font-heading text-center">Our Mission</h3>
              <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
                Our mission is to create a transparent, secure, and accessible platform for discovering and launching new tokens on the Solana blockchain. We aim to empower both creators and investors by providing the tools they need to succeed in a decentralized world.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Eye, title: "Transparency", desc: "Metrics and rules up front." },
                { icon: ShieldCheck, title: "Security", desc: "UI patterns that guide safer actions." },
                { icon: Users, title: "Community First", desc: "Fair discovery and storytelling." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-bold font-heading">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-12 p-6 rounded-2xl border border-white/10 bg-white/5">
              <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-white/10" />
              <div className="relative flex justify-between">
                {[
                  { year: "2025 Q4", event: "V1 Launch: Discovery & Analytics Suite." },
                  { year: "2026 Q1", event: "Launchpad V1: Fair Launch Protocol." },
                  { year: "2026 Q2", event: "Creator Toolkit & Governance Beta." },
                ].map(({ year, event }) => (
                  <div key={year} className="relative flex flex-col items-center">
                    <div className="absolute -top-1.5 w-4 h-4 rounded-full bg-primary/50 border-2 border-primary animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <p className="mt-4 text-sm font-bold">{year}</p>
                    <p className="text-xs text-muted-foreground">{event}</p>
                  </div>
                ))}
              </div>
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