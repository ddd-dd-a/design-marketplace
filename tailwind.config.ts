import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        panel: '#111827',
        accent: '#7c3aed',
        mint: '#34d399',
        glow: '#a78bfa',
        soft: '#f8fafc',
      },
      boxShadow: {
        soft: '0 20px 50px rgba(15, 23, 42, 0.12)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(124,58,237,0.18), transparent 35%), linear-gradient(to right, rgba(148,163,184,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,184,0.08) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
