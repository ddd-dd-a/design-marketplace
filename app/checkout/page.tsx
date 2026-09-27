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
            Add premium products, set your pricing, and start collecting revenue from global buyers.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: UploadCloud, title: 'Upload previews', text: 'Add cover art, mockups, and a product ZIP file.' },
              { icon: ShieldCheck, title: 'Set licensing', text: 'Choose personal, commercial, or extended licenses.' },
              { icon: BadgeCheck, title: 'Get paid', text: 'Secure checkout and automatic payout settings.' },
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
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Design title</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none ring-0 transition focus:border-violet-400" placeholder="Brand Launch Kit" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Category</label>
              <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-violet-400">
                <option>Branding</option>
                <option>Templates</option>
                <option>UI Kits</option>
                <option>Mockups</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Tags</label>
              <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-violet-400" placeholder="startup, brand, style guide" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">Description</label>
              <textarea rows={4} className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-violet-400" placeholder="Describe what is included..." />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Price</label>
                <input type="number" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-violet-400" placeholder="39" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">License</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-violet-400">
                  <option>Commercial</option>
                  <option>Extended</option>
                  <option>Personal</option>
                </select>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-5">
              <div className="flex items-center gap-3 text-slate-700">
                <ImageIcon className="h-5 w-5" />
                <p className="font-medium">Upload product files</p>
              </div>
              <p className="mt-2 text-sm text-slate-500">PNG, SVG, Figma export, PDF, or ZIP archive</p>
            </div>

            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Publish listing <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
