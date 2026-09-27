export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="text-base font-bold text-slate-900">Pine & Pixel</p>
          <p className="mt-2 max-w-md">The digital marketplace for premium design templates, branding kits, and creator-made assets.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="/products" className="transition hover:text-violet-700">Browse</a>
          <a href="/sell" className="transition hover:text-violet-700">Sell</a>
          <a href="/dashboard" className="transition hover:text-violet-700">Dashboard</a>
        </div>
      </div>
    </footer>
  );
}
