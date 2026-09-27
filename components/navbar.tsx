import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({
    ok: true,
    message: 'Stripe checkout placeholder ready.',
    intent: {
      product: body.product || 'Brand Launch Kit',
      total: body.total || 46.4,
      currency: 'USD',
    },
  });
}
