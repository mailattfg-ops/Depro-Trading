import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

const isBrowser = typeof window !== 'undefined';

// This is your client for the browser (limited by RLS)
// We provide custom storage to sync session with cookies for middleware support
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        storageKey: 'sb-auth-token',
        storage: isBrowser ? {
          getItem: (key) => {
            const cookies = document.cookie.split('; ');
            const cookie = cookies.find(c => c.trim().startsWith(`${key}=`));
            if (cookie) {
              return decodeURIComponent(cookie.trim().split('=')[1]);
            }
            return localStorage.getItem(key);
          },
          setItem: (key, value) => {
            // Set cookie for middleware access
            document.cookie = `${key}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
            localStorage.setItem(key, value);
          },
          removeItem: (key) => {
            document.cookie = `${key}=; path=/; max-age=0; SameSite=Lax`;
            localStorage.removeItem(key);
          }
        } : undefined
      }
    })
  : null as any; 

export const getSupabaseAdmin = () => {
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  return createClient(supabaseUrl, supabaseServiceKey);
};
