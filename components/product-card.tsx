import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Product } from '@/lib/data';

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/products/${product.slug}`} aria-label={`View ${product.name}`}>
        <div className="overflow-hidden">
          <Image src={product.image} alt={product.name} width={800} height={600} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
            {product.category}
          </span>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium text-slate-700">{product.rating}</span>
          </div>
        </div>

        <Link href={`/products/${product.slug}`} className="mt-4 block">
          <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
        </Link>

        <p className="mt-2 text-sm text-slate-600">{product.creator}</p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-2xl font-bold text-slate-900">${product.price}</p>
            <p className="text-xs text-slate-400 line-through">${product.originalPrice}</p>
          </div>
          <Link href={`/products/${product.slug}`} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700">
            View pack
          </Link>
        </div>
      </div>
    </article>
  );
}
