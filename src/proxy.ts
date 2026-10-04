import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  // The padrón lookup was retired after the April 2026 election; send old links to the main site
  if (hostname.startsWith('padron2026.') || hostname.startsWith('www.padron2026.')) {
    const mainHost = hostname.replace(/^(www\.)?padron2026\./, '').split(':')[0]
    return NextResponse.redirect(`https://${mainHost}/`, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|ico|csv|woff|woff2)$).*)'],
}
