import { NextResponse } from 'next/server';
import { products } from '@/lib/data';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const supabase = getSupabaseAdmin();
  if (supabase) {
    const { data, error } = await supabase.from('products').select('*').eq('status', 'published').order('created_at', { ascending: false });
    if (!error && data) return NextResponse.json({ products: data });
  }
  return NextResponse.json({ products });
}
