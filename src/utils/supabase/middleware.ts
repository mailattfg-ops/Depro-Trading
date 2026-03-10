import { createClient } from '@supabase/supabase-js'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * SENIOR TIP:
 * Since @supabase/ssr is not resolving, we can manually pass cookies 
 * to the standard @supabase/supabase-js client to check for a session.
 * This ensures the middleware works in the Edge Runtime.
 */
export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      global: {
        headers: {
          // Pass cookies from the request headers to the Supabase client
          cookie: request.headers.get('cookie') ?? '',
        },
      },
    }
  )

  // Check for the user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (
    !user &&
    request.nextUrl.pathname.startsWith('/admin')
  ) {
    const url = request.nextUrl.clone()
    url.pathname = '/' // Redirect to home
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
