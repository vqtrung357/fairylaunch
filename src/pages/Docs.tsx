const Docs = () => {
  return (
    <div className="container py-12 md:py-24 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold font-heading mb-8 text-center">Documentation</h1>
      <div className="prose prose-invert max-w-none bg-card/50 p-8 rounded-3xl border border-white/10">
        <h2>Getting Started</h2>
        <p>Welcome to the Fairy Launch documentation. Here you'll find everything you need to know about using our platform, from discovering new tokens to launching your own project.</p>
        
        <h3>Connecting Your Wallet</h3>
        <p>To get started, you'll need a Solana-compatible wallet. We recommend Phantom, Solflare, or Backpack. Click the "Connect Wallet" button in the top-right corner and approve the connection in your wallet extension.</p>

        <h2>For Developers</h2>
        <p>If you're a developer looking to launch a token, this section is for you. Our platform provides a seamless and secure way to conduct a fair launch.</p>
        
        <h3>Token Standards</h3>
        <p>We support the SPL token standard on the Solana blockchain. Ensure your token adheres to this standard for compatibility with our launchpad and other ecosystem tools.</p>

        <h3>API Reference (Coming Soon)</h3>
        <p>We are working on a public API that will allow you to programmatically access data about tokens listed on Fairy Launch. Stay tuned for more updates.</p>
      </div>
    </div>
  );
};

export default Docs;