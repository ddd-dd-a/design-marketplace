'use client';
import { useState } from 'react';

export function BuyButton({ productId }: { productId: number }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  async function buy() {
    setLoading(true); setError('');
    try {
      const response = await fetch('/api/checkout', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ productId }) });
      const data = await response.json();
      if (!response.ok || !data.url) throw new Error(data.error || 'Unable to start checkout');
      window.location.assign(data.url);
    } catch (err) { setError(err instanceof Error ? err.message : 'Unable to start checkout'); setLoading(false); }
  }
  return <div><button onClick={buy} disabled={loading} className="flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60">{loading ? 'Opening secure checkout…' : 'Buy securely with Stripe'}</button>{error && <p className="mt-3 text-sm text-red-600" role="alert">{error}</p>}</div>;
}
