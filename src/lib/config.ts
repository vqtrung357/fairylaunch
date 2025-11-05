/**
 * Simple configuration to toggle between wallet modes.
 * 'demo': Uses a mock wallet state managed in localStorage.
 * 'solana': (Future use) To be wired with a real Solana wallet adapter.
 */
export const WALLET_MODE: 'demo' | 'solana' = 'demo';