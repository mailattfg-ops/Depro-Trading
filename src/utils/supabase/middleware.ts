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
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  // Manually hydrate session from cookie
  const authCookie = request.cookies.get('sb-auth-token')?.value
  if (authCookie) {
    try {
      const session = JSON.parse(decodeURIComponent(authCookie))
      if (session?.access_token) {
        await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        })
      }
    } catch (error) {
      console.error('Middleware: Error parsing auth cookie', error)
    }
  }

  // Check for the user
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Auth logic: Protect /admin routes
  const isLoginPage = request.nextUrl.pathname === '/admin/login'
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')

  // Case 1: Not logged in and trying to access admin dashboard -> Go to login
  if (!user && isAdminRoute && !isLoginPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/login'
    return NextResponse.redirect(url)
  }

  // Case 2: ALREADY logged in and trying to access login page -> Go to dashboard
  if (user && isLoginPage) {
    const url = request.nextUrl.clone()
    url.pathname = '/admin'
    return NextResponse.redirect(url)
  }

  return supabaseResponse
}
