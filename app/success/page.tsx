import Link from 'next/link';
import { Check, LockKeyhole, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function CheckoutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-3">
            <LockKeyhole className="h-5 w-5 text-violet-600" />
            <h1 className="text-3xl font-bold text-slate-900">Secure checkout</h1>
          </div>

          <div className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-violet-400" placeholder="hello@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Card number</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-violet-400" placeholder="4242 4242 4242 4242" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Expiry</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-violet-400" placeholder="MM / YY" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">CVC</label>
                <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-violet-400" placeholder="123" />
              </div>
            </div>

            <Link href="/success" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              <ShoppingBag className="h-4 w-4" />
              Complete payment
            </Link>
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-900 p-6 text-white shadow-soft">
          <h2 className="text-2xl font-bold">Order summary</h2>

          <div className="mt-6 rounded-2xl bg-slate-800 p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Brand Launch Kit</p>
                <p className="text-sm text-slate-400">Commercial license</p>
              </div>
              <p className="text-lg font-bold">$39</p>
            </div>
          </div>

          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between text-slate-300"><span>Subtotal</span><span>$39</span></div>
            <div className="flex justify-between text-slate-300"><span>Marketplace fee</span><span>$4.60</span></div>
            <div className="flex justify-between text-slate-300"><span>Taxes</span><span>$2.80</span></div>
            <div className="mt-4 flex justify-between border-t border-slate-700 pt-4 text-lg font-semibold"><span>Total</span><span>$46.40</span></div>
          </div>

          <div className="mt-8 space-y-4 text-sm text-slate-300">
            {[
              'Secure card handling via Stripe',
              'Instant download after successful payment',
              'License and support included',
            ].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <Check className="h-4 w-4 text-emerald-400" />
                {line}
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-300">
            <ShieldCheck className="h-5 w-5 text-violet-300" />
            Protected by 256-bit payment encryption
          </div>
        </div>
      </div>
    </div>
  );
}
