import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const { pathname } = request.nextUrl

  // Handle padron2026 subdomain (with or without www prefix)
  if (hostname.startsWith('padron2026.') || hostname.startsWith('www.padron2026.')) {
    // Avoid rewriting if already on the padron2026 path or requesting static assets
    if (pathname.startsWith('/padron2026') || pathname.startsWith('/_next') || pathname.startsWith('/api')) {
      return NextResponse.next()
    }

    const url = request.nextUrl.clone()
    url.pathname = `/padron2026${pathname}`
    return NextResponse.rewrite(url)
  }

  // Block direct access to /padron2026 on the main domain (optional, remove if you want both)
  // if (pathname.startsWith('/padron2026')) {
  //   return NextResponse.redirect(new URL('/', request.url))
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|ico|csv|woff|woff2)$).*)'],
}
