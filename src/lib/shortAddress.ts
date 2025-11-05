/**
 * Shortens a wallet address to a more readable format (e.g., "7Gs9...WkQ").
 * @param address The full wallet address string.
 * @param chars The number of characters to show at the start and end.
 * @returns The shortened address string.
 */
export const shortAddress = (address: string, chars = 4): string => {
  if (!address) return "";
  return `${address.substring(0, chars)}...${address.substring(address.length - chars)}`;
};