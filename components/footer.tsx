export function Footer() {
  return <footer className="border-t border-slate-200 bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div><p className="text-base font-bold text-slate-900">Pine & Pixel</p><p className="mt-2 max-w-md">A curated marketplace for premium design templates, branding kits, and creator-made assets.</p></div><div className="flex items-center gap-6"><Link href="/products">Browse</Link><Link href="/sell">Sell</Link><Link href="/dashboard">Dashboard</Link></div></div></footer>;
}
import Link from 'next/link';
