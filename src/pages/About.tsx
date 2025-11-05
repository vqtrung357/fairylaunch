const About = () => {
  return (
    <div className="container py-12 md:py-24 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold font-heading mb-4">About Fairy Launch</h1>
      <p className="text-xl text-muted-foreground mb-8">
        We believe in the magic of fair launches and community-driven projects.
      </p>
      <div className="prose prose-invert max-w-none text-left bg-card/50 p-8 rounded-3xl border border-white/10">
        <h2>Our Mission</h2>
        <p>Our mission is to create a transparent, secure, and accessible platform for discovering and launching new tokens on the Solana blockchain. We aim to empower both creators and investors by providing the tools they need to succeed in a decentralized world. We filter out the noise and shine a light on projects with real potential.</p>
        
        <h2>The Magic Behind It</h2>
        <p>Fairy Launch was born from a desire to bring trust and excitement back to the world of token launches. We use a combination of on-chain data analysis and community sentiment to identify promising projects. Our "magic" is simply a commitment to transparency, security, and user experience.</p>
      </div>
    </div>
  );
};

export default About;