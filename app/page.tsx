import Link from 'next/link';
import { ArrowRight, Check, Search, ShoppingBag, Sparkles } from 'lucide-react';
import { products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';

export default function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-hero-grid bg-[length:40px_40px] opacity-20" />
        <div className="absolute -left-20 top-12 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute right-10 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/40 bg-violet-500/10 px-3 py-1 text-sm text-violet-200">
                <Sparkles className="h-4 w-4" />
                Built to sell premium digital design assets
              </div>

              <h1 className="max-w-xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Sell design packs that people actually buy.
              </h1>

              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Pine & Pixel is a modern marketplace for creators selling templates, mockups,
                branding kits, and digital assets with licensing built in.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 font-medium text-white transition hover:bg-violet-400"
                >
                  Explore designs <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/sell"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-5 py-3 font-medium text-slate-100 transition hover:border-slate-500"
                >
                  Start selling
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> 250k+ downloads</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> 12k+ creators</div>
                <div className="flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Secure checkout</div>
              </div>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-soft backdrop-blur">
              <div className="rounded-[24px] bg-slate-900 p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">This month</p>
                    <p className="mt-1 text-3xl font-bold text-white">$148.2k</p>
                  </div>
                  <div className="rounded-full bg-emerald-500/20 p-2 text-emerald-400">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { name: 'Brand Kits', sales: '2,460', amount: '$34.2k' },
                    { name: 'Social Templates', sales: '4,120', amount: '$51.6k' },
                    { name: 'Landing Page UI', sales: '1,380', amount: '$22.4k' },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-800/60 p-3">
                      <div>
                        <p className="font-medium text-white">{item.name}</p>
                        <p className="text-sm text-slate-400">{item.sales} sales</p>
                      </div>
                      <p className="font-semibold text-emerald-400">{item.amount}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Marketplace</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Trending design packs</h2>
          </div>
          <Link href="/products" className="hidden text-sm font-semibold text-violet-600 sm:inline-flex">
            View all →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              { title: 'Built for creators', text: 'Upload assets with licensing, previews, bundles, and discounts in minutes.' },
              { title: 'Fast checkout', text: 'Stripe-ready checkout flow with secure digital delivery after purchase.' },
              { title: 'Built to scale', text: 'Add subscriptions, featured listings, premium seller tiers, and custom orders.' },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-700 bg-slate-800/60 p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-300">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
