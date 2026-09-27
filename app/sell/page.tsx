import Link from 'next/link';
import { CheckCircle2, Download, Sparkles } from 'lucide-react';

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-[32px] border border-emerald-200 bg-emerald-50 p-8 text-center shadow-soft">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h1 className="mt-8 text-4xl font-bold text-slate-900">Payment successful</h1>
        <p className="mt-4 text-lg text-slate-700">
          Your design pack is ready to download. We sent the files to your email as well.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
            <Download className="h-4 w-4" />
            Download files
          </button>
          <Link href="/products" className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-50">
            <Sparkles className="h-4 w-4" />
            Browse more designs
          </Link>
        </div>
      </div>
    </div>
  );
}
