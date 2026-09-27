import { NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { getStripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const body = await request.json();
  const productId = Number(body.productId ?? body.id ?? 1);
  const product = products.find((item) => item.id === productId) ?? products[0];

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: 'Stripe is not configured. Add STRIPE_SECRET_KEY to .env.local.' }, { status: 503 });
  }

  const origin = process.env.NEXT_PUBLIC_APP_URL || new URL(request.url).origin;
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: 1,
      },
    ],
    customer_creation: 'always',
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/products/${product.slug}`,
    metadata: { productId: String(product.id), license: 'commercial' },
  });

  return NextResponse.json({ url: session.url });
}
