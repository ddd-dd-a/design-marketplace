# Pine & Pixel

A production-ready marketplace starter for selling digital design assets.

## Features
- storefront landing page
- product catalog and detail pages
- seller dashboard mockup
- secure checkout flow with Stripe-ready logic
- webhook route for payment confirmation
- Supabase schema for product and order persistence

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Real production setup

1. Create a Supabase project and run the SQL in `supabase/schema.sql`.
2. Add your Supabase URL, anon key, and service-role key to `.env.local`.
3. Add a Stripe test secret key and webhook secret.
4. Set `NEXT_PUBLIC_APP_URL` to your deployed app URL.
5. Deploy to Vercel and configure the same variables.

## Important

This is a trustworthy marketplace starter, not a fake profit guarantee. Revenue depends on product-market fit, marketing, legal licensing, and real payment setup.
