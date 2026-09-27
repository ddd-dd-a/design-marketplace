import Link from 'next/link';
import { ArrowUpRight, BarChart3, FolderOpen, Sparkles } from 'lucide-react';

const metrics = [
  { label: 'Monthly sales', value: '$48.2k' },
  { label: 'Design assets', value: '184' },
  { label: 'Followers', value: '36.8k' },
  { label: 'Avg. rating', value: '4.9/5' },
];

const listings = [
  { title: 'Brand Identity Pack', price: '$39', category: 'Branding' },
  { title: 'Startup Landing Kit', price: '$59', category: 'UI Kit' },
  { title: 'Social Launch Set', price: '$29', category: 'Templates' },
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Creator dashboard</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Your storefront</h1>
        </div>
        <Link href="/sell" className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500">
          Upload new design <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-slate-500">{metric.label}</p>
            <p className="mt-4 text-3xl font-bold text-slate-900">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <FolderOpen className="h-5 w-5 text-violet-600" />
            <h2 className="text-xl font-semibold text-slate-900">Recent listings</h2>
          </div>

          <div className="mt-6 space-y-4">
            {listings.map((listing) => (
              <div key={listing.title} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div>
                  <p className="font-semibold text-slate-900">{listing.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{listing.category}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-900">${listing.price}</p>
                  <p className="text-xs text-emerald-600">Live</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-violet-300" />
            <h2 className="text-xl font-semibold">Growth summary</h2>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-2xl bg-slate-800 p-4">
              <p className="text-sm text-slate-300">This month</p>
              <p className="mt-2 text-3xl font-bold text-white">$12,360</p>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-800 p-4">
              <BarChart3 className="h-5 w-5 text-emerald-400" />
              <div>
                <p className="text-sm text-slate-300">Transactions</p>
                <p className="font-semibold text-white">+24.8% vs last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
