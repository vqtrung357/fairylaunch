import { useState, useEffect, useCallback } from 'react';
import { WALLET_MODE } from '@/lib/config';

const DUMMY_ADDRESSES = [
  '7Gs9R3p4z4gYpG5f6Hj2kL8mN1oPq5rS3tUvWxYz',
  'B2c4d6f8HjKlMnOpQrStUvWxYzAbCdEfGhIjKlMn',
  'D4e6g8hJkLmN2oPqRsTuVwXyZaBcDeFgHiJkLmN',
];

const LOCAL_STORAGE_KEY = 'fairy-launch-demo-wallet';

export const useDemoWallet = () => {
  const [address, setAddress] = useState<string | null>(null);

  useEffect(() => {
    if (WALLET_MODE === 'demo') {
      const storedAddress = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedAddress) {
        setAddress(storedAddress);
      }
    }
  }, []);

  const connect = useCallback(() => {
    if (WALLET_MODE === 'demo') {
      const randomAddress = DUMMY_ADDRESSES[Math.floor(Math.random() * DUMMY_ADDRESSES.length)];
      localStorage.setItem(LOCAL_STORAGE_KEY, randomAddress);
      setAddress(randomAddress);
    }
    // In 'solana' mode, this would trigger the wallet adapter's connect flow.
  }, []);

  const disconnect = useCallback(() => {
    if (WALLET_MODE === 'demo') {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setAddress(null);
    }
    // In 'solana' mode, this would trigger the wallet adapter's disconnect flow.
  }, []);

  return {
    address,
    connect,
    disconnect,
    isConnected: !!address,
  };
};