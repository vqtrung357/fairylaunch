import React from 'react';

interface SparklineProps {
  change: number;
}

const generatePath = (change: number) => {
  if (change >= 0) {
    return "M0 12 L4 8 L8 10 L12 6 L16 8";
  }
  return "M0 6 L4 10 L8 8 L12 12 L16 10";
};

export const Sparkline = ({ change }: SparklineProps) => {
  const color = change >= 0 ? "hsl(var(--success))" : "hsl(var(--destructive))";
  const path = generatePath(change);

  return (
    <svg width="20" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d={path} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};