import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

// This is your client for the browser (limited by RLS)
// We provide fallbacks to prevent build crashes, but the app will work correctly once variables are loaded
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null as any; 

/**
 * SENIOR TIP: 
 * We use the SERVICE_ROLE_KEY only on the server.
 * This is because the Service Role Key has "God Mode" (bypasses RLS).
 * NEVER expose the Service Role Key in the browser (no NEXT_PUBLIC_ prefix).
 */
export const getSupabaseAdmin = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
};
