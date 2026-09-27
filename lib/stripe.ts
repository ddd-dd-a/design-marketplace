import Stripe from 'stripe';

export function getStripe() {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key, { apiVersion: '2024-06-20' }) : null;
}
