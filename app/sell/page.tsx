import Link from 'next/link';
import { ArrowRight, BadgeCheck, Image as ImageIcon, ShieldCheck, UploadCloud } from 'lucide-react';

export default function SellPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[28px] bg-slate-900 p-8 text-white shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-300">Start selling</p>
          <h1 className="mt-3 text-4xl font-bold">Launch your first design pack</h1>
          <p className="mt-4 text-slate-300">
            Seller publishing is intentionally gated until authentication, file scanning, licensing, and payout verification are configured.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: UploadCloud, title: 'Protected uploads', text: 'Files should be stored privately and scanned before publication.' },
              { icon: ShieldCheck, title: 'Clear licensing', text: 'Define exactly what customers can and cannot do.' },
              { icon: BadgeCheck, title: 'Verified payouts', text: 'Connect Stripe identity and payout verification before selling.' },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-slate-700 bg-slate-800 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm text-amber-900">
            <p className="font-semibold">Seller onboarding is not live yet.</p>
            <p className="mt-2">This prevents unverified sellers from publishing files or receiving funds. Configure Supabase Auth, private Storage, moderation, and Stripe Connect before enabling this flow.</p>
          </div>

          <Link href="/dashboard" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            View demo dashboard <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
            <ImageIcon className="mt-0.5 h-5 w-5" />
            No files are accepted by this demo form, so customers cannot accidentally receive unverified content.
          </div>
        </div>
      </div>
    </div>
  );
}
