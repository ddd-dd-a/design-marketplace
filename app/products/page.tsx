import Link from 'next/link';
import { productCategories, products } from '@/lib/data';
import { ProductCard } from '@/components/product-card';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Catalog</p>
          <h1 className="mt-2 text-4xl font-bold text-slate-900">Discover premium design packs</h1>
        </div>

        <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-slate-500" />
          <input
            className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
            placeholder="Search templates, mockups, UI kits..."
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        {productCategories.map((category) => (
          <button
            key={category}
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-violet-200 hover:text-violet-700"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <SlidersHorizontal className="h-4 w-4" />
          120 curated items
        </div>
        <div className="text-sm text-slate-500">Sorted by newest</div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link href="/sell" className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Become a seller
        </Link>
      </div>
    </div>
  );
}
