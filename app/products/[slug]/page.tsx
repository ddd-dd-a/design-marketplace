import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Check, ShieldCheck, Star } from 'lucide-react';
import { products } from '@/lib/data';
import { BuyButton } from '@/components/buy-button';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft">
            <Image src={product.image} alt={product.name} width={1200} height={900} className="h-[500px] w-full object-cover" />
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">About this pack</h2>
            <p className="mt-4 text-slate-600">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-sm font-medium text-violet-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                {product.category}
              </span>
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-sm font-medium text-slate-700">{product.rating}</span>
              </div>
            </div>

            <h1 className="mt-4 text-3xl font-bold text-slate-900">{product.name}</h1>
            <p className="mt-3 text-slate-600">By {product.creator}</p>

            <div className="mt-6 flex items-end gap-3">
              <span className="text-4xl font-bold text-slate-900">${product.price}</span>
              <span className="mb-1 text-slate-400 line-through">${product.originalPrice}</span>
            </div>

            <div className="mt-6">
              <BuyButton productId={product.id} />
            </div>

            <div className="mt-8 space-y-4">
              {[
                'Commercial use included',
                'Instant download after checkout',
                'Editable layered source files',
                '7-day support included',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-slate-700">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-violet-600" />
              <h3 className="text-lg font-semibold text-slate-900">License details</h3>
            </div>
            <div className="mt-5 space-y-3 text-sm text-slate-600">
              <p>• Personal and commercial use permitted</p>
              <p>• Up to 250,000 monthly impressions</p>
              <p>• One project file included in the license</p>
              <p>• Resell rights are not included</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
