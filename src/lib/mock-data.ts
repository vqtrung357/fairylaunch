export type Token = {
  id: string;
  name: string;
  ticker: string;
  avatar: string;
  marketCap: number;
  volume24h: number;
  change24hPct: number;
  launchedAgo: string;
  socials: {
    web?: string;
    x?: string;
    tg?: string;
  };
  badges: ('audited' | 'kyc' | 'trending' | 'new')[];
};

export const tokens: Token[] = [
  {
    id: 'stardust',
    name: 'Stardust',
    ticker: 'STARD',
    avatar: '/pics/stardust.png',
    marketCap: 1_250_000,
    volume24h: 85_000,
    change24hPct: 12.5,
    launchedAgo: '3 days',
    socials: { web: '#', x: '#', tg: '#' },
    badges: ['trending', 'new'],
  },
  {
    id: 'memeow',
    name: 'MeMeow',
    ticker: 'MEOW',
    avatar: '/pics/memeow.png',
    marketCap: 8_700_000,
    volume24h: 1_200_000,
    change24hPct: 45.2,
    launchedAgo: '1 week',
    socials: { web: '#', x: '#', tg: '#' },
    badges: ['trending', 'audited'],
  },
  {
    id: 'quack',
    name: 'Quack',
    ticker: 'QUACK',
    avatar: '/pics/quack.png',
    marketCap: 450_000,
    volume24h: 32_000,
    change24hPct: -5.8,
    launchedAgo: '1 day',
    socials: { x: '#', tg: '#' },
    badges: ['new', 'kyc'],
  },
  {
    id: 'pixie',
    name: 'Pixie',
    ticker: 'PIX',
    avatar: '/pics/pixie.png',
    marketCap: 2_100_000,
    volume24h: 150_000,
    change24hPct: 8.1,
    launchedAgo: '2 weeks',
    socials: { web: '#', tg: '#' },
    badges: ['audited'],
  },
  {
    id: 'solflare',
    name: 'Solflare',
    ticker: 'SFLR',
    avatar: '/pics/solflare.png',
    marketCap: 25_500_000,
    volume24h: 3_400_000,
    change24hPct: 2.3,
    launchedAgo: '1 month',
    socials: { web: '#', x: '#', tg: '#' },
    badges: ['audited', 'kyc'],
  },
  {
    id: 'lamoon',
    name: 'LaMoon',
    ticker: 'LMN',
    avatar: '/pics/lamoon.png',
    marketCap: 780_000,
    volume24h: 65_000,
    change24hPct: -1.2,
    launchedAgo: '5 days',
    socials: { x: '#', tg: '#' },
    badges: [],
  },
];

export const heroToken = tokens[1];