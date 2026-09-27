import Link from 'next/link';
import { Check, ShieldCheck, ShoppingBag } from 'lucide-react';
import { products } from '@/lib/data';

export default function CheckoutPage() {
  const product = products[0];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex items-center gap-3">
          <ShoppingBag className="h-5 w-5 text-violet-600" />
          <h1 className="text-3xl font-bold text-slate-900">Secure checkout</h1>
        </div>

        <p className="mt-4 text-slate-600">Checkout is handled by Stripe. Your card details never touch this app.</p>

        <div className="mt-8 rounded-2xl bg-slate-50 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-slate-900">{product.name}</p>
              <p className="text-sm text-slate-500">Commercial license</p>
            </div>
            <p className="text-xl font-bold text-slate-900">${product.price}</p>
          </div>
        </div>

        <Link href={`/products/${product.slug}`} className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
          Return to product to pay securely
        </Link>

        <div className="mt-8 space-y-4 text-sm text-slate-600">
          {[
            'Stripe-hosted payment page',
            'No card data stored by Pine & Pixel',
            'Receipt and order confirmation by email',
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-emerald-500" />
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-4 text-sm text-violet-900">
          <ShieldCheck className="h-5 w-5" />
          Payment protection is provided by Stripe.
        </div>
      </div>
    </div>
  );
}
