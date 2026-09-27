import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { getStripe } from '@/lib/stripe';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function POST(request: Request) {
  const stripe = getStripe();
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripe || !secret) {
    return NextResponse.json({ error: 'Stripe webhook is not configured' }, { status: 503 });
  }

  const signature = headers().get('stripe-signature');
  if (!signature) {
    return NextResponse.json({ error: 'Missing Stripe signature' }, { status: 400 });
  }

  const payload = await request.text();

  let event: import('stripe').Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(payload, signature, secret);
  } catch {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as import('stripe').Stripe.Checkout.Session;
    const supabase = getSupabaseAdmin();

    if (supabase && session.payment_intent) {
      await supabase.from('orders').insert({
        stripe_session_id: session.id,
        stripe_payment_intent_id: String(session.payment_intent),
        email: session.customer_details?.email ?? null,
        product_id: Number(session.metadata?.productId ?? 0),
        amount: session.amount_total ?? 0,
        status: 'paid',
      });
    }
  }

  return NextResponse.json({ received: true });
}
