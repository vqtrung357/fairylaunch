export interface Token {
  id: string;
  name: string;
  ticker: string;
  avatar: string;
  marketCap: number;
  volume24h: number;
  liquidity: number;
  holders: number;
  price: number;
  change24hPct: number;
  launchedAgo: string;
  category: string[];
  socials: { web?: string; x?: string; tg?: string; disc?: string };
  badges: ("Hot" | "Moon" | "New")[];
}

export const TOKENS: Token[] = [
  {
    id: "lamoon",
    name: "LAMOON",
    ticker: "LMN",
    avatar: "/pics/lamoon.svg",
    marketCap: 12874375,
    volume24h: 120000,
    liquidity: 500000,
    holders: 8104,
    price: 0.00128,
    change24hPct: 5.9,
    launchedAgo: "16h",
    category: ["Meme", "Community"],
    socials: { web: "#", x: "#", tg: "#" },
    badges: ["Hot", "Moon"],
  },
  {
    id: "quack",
    name: "QUACK",
    ticker: "QCK",
    avatar: "/pics/quack.svg",
    marketCap: 9478000,
    volume24h: 86000,
    liquidity: 350000,
    holders: 5100,
    price: 0.00094,
    change24hPct: -2.3,
    launchedAgo: "1d",
    category: ["Meme"],
    socials: { web: "#", x: "#", tg: "#" },
    badges: ["New"],
  },
  {
    id: "stardust",
    name: "Stardust",
    ticker: "DUST",
    avatar: "/pics/stardust.svg",
    marketCap: 25000000,
    volume24h: 500000,
    liquidity: 1200000,
    holders: 12500,
    price: 0.025,
    change24hPct: 15.2,
    launchedAgo: "3h",
    category: ["Utility", "Gaming"],
    socials: { web: "#", x: "#", tg: "#", disc: "#" },
    badges: ["Hot", "New"],
  },
  {
    id: "pixie",
    name: "Pixie",
    ticker: "PIX",
    avatar: "/pics/pixie.svg",
    marketCap: 5600000,
    volume24h: 45000,
    liquidity: 200000,
    holders: 3200,
    price: 0.00056,
    change24hPct: 1.1,
    launchedAgo: "3d",
    category: ["Community"],
    socials: { x: "#", tg: "#" },
    badges: [],
  },
  {
    id: "solflare",
    name: "SolFlare",
    ticker: "SFLR",
    avatar: "/pics/solflare.svg",
    marketCap: 18000000,
    volume24h: 250000,
    liquidity: 900000,
    holders: 9800,
    price: 0.018,
    change24hPct: 8.7,
    launchedAgo: "22h",
    category: ["Utility"],
    socials: { web: "#", x: "#" },
    badges: ["Hot"],
  },
  {
    id: "memeow",
    name: "MeMeow",
    ticker: "MEOW",
    avatar: "/pics/memeow.svg",
    marketCap: 7800000,
    volume24h: 110000,
    liquidity: 300000,
    holders: 6500,
    price: 0.00078,
    change24hPct: -5.5,
    launchedAgo: "2d",
    category: ["Meme"],
    socials: { x: "#", tg: "#" },
    badges: [],
  },
];