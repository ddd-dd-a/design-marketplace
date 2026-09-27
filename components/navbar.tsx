import Link from 'next/link';
import { ShoppingCart, Store } from 'lucide-react';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg shadow-violet-500/30">
            <Store className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">Pine & Pixel</p>
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500">Design marketplace</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/products" className="transition hover:text-violet-700">Browse</Link>
          <Link href="/dashboard" className="transition hover:text-violet-700">Dashboard</Link>
          <Link href="/sell" className="transition hover:text-violet-700">Sell</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/checkout" className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-violet-200 hover:text-violet-700" aria-label="Checkout">
            <ShoppingCart className="h-4 w-4" />
          </Link>
          <Link href="/sell" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
            Become seller
          </Link>
        </div>
      </div>
    </header>
  );
}
