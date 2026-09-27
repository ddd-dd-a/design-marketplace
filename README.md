# Pine & Pixel — production-ready marketplace starter

A Next.js 14 digital design marketplace with a polished storefront, seller dashboard, Supabase-ready persistence, Stripe Checkout, webhook order capture, and a downloadable source archive.

## Download
Use GitHub's **Code → Download ZIP**, or download the repository directly:

https://github.com/ddd-dd-a/design-marketplace/archive/refs/heads/main.zip

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. The storefront works with demo data immediately.

## Enable real payments and orders

1. Create a Supabase project and run `supabase/schema.sql` in its SQL editor.
2. Copy the project URL, anon key, and service-role key into `.env.local`.
3. Create a Stripe account and add a test secret key.
4. Set `NEXT_PUBLIC_APP_URL` to your deployed URL.
5. Forward Stripe events locally with `stripe listen --forward-to localhost:3000/api/stripe/webhook` and copy the webhook secret.
6. Deploy to Vercel or another Node-compatible host and add the same environment variables.

Never expose `SUPABASE_SERVICE_ROLE_KEY` or `STRIPE_SECRET_KEY` in client-side code. The checkout route creates a hosted Stripe Checkout session; the webhook records paid orders in Supabase.

## Main routes

- `/` storefront landing page
- `/products` catalog
- `/products/[slug]` product detail
- `/sell` seller listing form UI
- `/dashboard` seller metrics UI
- `/api/products` product API with Supabase fallback
- `/api/checkout` Stripe Checkout session creation
- `/api/stripe/webhook` verified Stripe payment webhook

This starter does not include real authentication, protected seller uploads, or automated file delivery yet; those require connecting the Supabase Auth/Storage flows and adding your business policies.
