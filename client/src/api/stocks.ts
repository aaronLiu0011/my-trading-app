import type { Stock } from '../types/stock';

export async function getStocks(): Promise<Stock[]> {
    const res = await fetch('/api/stocks');
    if (!res.ok) {
        throw new Error(`Failed to get stocks: ${res.status}`);
    }
    return res.json();
}